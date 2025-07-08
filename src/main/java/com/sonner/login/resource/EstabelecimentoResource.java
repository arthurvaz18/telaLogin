package com.sonner.login.resource;

import com.sonner.login.model.Estabelecimento;
import com.sonner.login.service.EstabelecimentoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/estabelecimentos")
@CrossOrigin(origins = "http://localhost:4200")
public class EstabelecimentoResource {

    EstabelecimentoService estabelecimentoService;

    public EstabelecimentoResource(EstabelecimentoService estabelecimentoService) {
        this.estabelecimentoService = estabelecimentoService;
    }

    @PostMapping
    public ResponseEntity<Estabelecimento> criarUsuario(@RequestBody Estabelecimento estabelecimento) {
        Estabelecimento estabelecimentoSalvo = estabelecimentoService.criarEstabelecimento(estabelecimento);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(estabelecimentoSalvo.getId())
                .toUri();
        return ResponseEntity.created(location).body(estabelecimento);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Estabelecimento> buscarUsuarioPorId(@PathVariable Integer id) {
        return ResponseEntity.ok(estabelecimentoService.buscarEstabelecimento(id));
    }

    @PutMapping("/editar")
    public ResponseEntity<Estabelecimento> editarEstabelecimento(@RequestBody Estabelecimento estabelecimento) {
        Estabelecimento atualizado = estabelecimentoService.atualizarEstabelecimento(
                estabelecimento.getEmail(),
                estabelecimento.getSenha(),
                estabelecimento
        );
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarUsuario(@PathVariable Integer id) {
        estabelecimentoService.deletarEstabelecimento(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Estabelecimento>> listarUsuarios(
            @RequestParam(value = "cnpj", required = false) String cnpj,
            @RequestParam(value = "nome", required = false) String nome,
            @RequestParam(value = "email", required = false) String email,
            @RequestParam(value = "telefone", required = false) String telefone){
        List<Estabelecimento> estabelecimentos = estabelecimentoService.listarEstabelecimento(cnpj, nome, email, telefone);
        return ResponseEntity.ok(estabelecimentos);
    }

    @GetMapping("/buscaPorEmail")
    public ResponseEntity<Estabelecimento> buscarEstabelecimentoPorEmail(@RequestParam String email) {
        Optional<Estabelecimento> estabelecimento = estabelecimentoService.buscarEstabelecimentoPorEmail(email);
        return estabelecimento.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}
