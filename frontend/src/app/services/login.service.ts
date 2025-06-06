import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estabelecimento} from "../models/estabelecimento.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/estabelecimentos/login'

  constructor(private http: HttpClient) {
  }

  logarEstabelecimento(estabelecimento: Estabelecimento): Observable<Estabelecimento>{
    return this.http.post<Estabelecimento>(this.baseUrl, estabelecimento);
  }
}
