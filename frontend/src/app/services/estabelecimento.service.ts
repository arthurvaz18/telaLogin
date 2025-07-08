import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Estabelecimento} from "../models/estabelecimento.model";

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private baseUrl = 'http://localhost:8080/estabelecimentos';

  constructor(private http: HttpClient) {}

  editarEstabelecimento(estabelecimento: Estabelecimento, email: string, senha: string): Observable<Estabelecimento> {
    const params = new HttpParams()
      .set('email', email)
      .set('senha', senha);

    return this.http.put<Estabelecimento>(`${this.baseUrl}/editar`, estabelecimento, { params });
  }

  buscarEstabelecimentoPorEmail(email: string): Observable<Estabelecimento> {
    return this.http.get<Estabelecimento>(`${this.baseUrl}/buscaPorEmail?email=${encodeURIComponent(email)}`);
  }

  buscarPerfil(): Observable<Estabelecimento> {
    return this.http.get<Estabelecimento>(`${this.baseUrl}/perfil`);
  }
}
