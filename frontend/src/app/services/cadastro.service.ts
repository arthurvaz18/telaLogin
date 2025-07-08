import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Estabelecimento } from "../models/estabelecimento.model";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private baseUrl = 'http://localhost:8080/estabelecimentos';

  constructor(private http: HttpClient) {}

  cadastrarEstabelecimento(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
    return this.http.post<Estabelecimento>(this.baseUrl, estabelecimento);
  }
}
