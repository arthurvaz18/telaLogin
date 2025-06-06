package com.sonner.login.resource;

import com.sonner.login.model.Estabelecimento;
import com.sonner.login.service.EstabelecimentoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

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

    @PutMapping("/{id}")
    public ResponseEntity<Estabelecimento> atualizarUsuario(@PathVariable Integer id, @RequestBody Estabelecimento estabelecimento) {
        return ResponseEntity.ok(estabelecimentoService.atualizarEstabelecimento(id, estabelecimento));
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

    @PostMapping("/login")
    public ResponseEntity<?>login(@RequestBody Map<String, String> login) {
        return estabelecimentoService.logarEstabelecimento(login);
    }

}
