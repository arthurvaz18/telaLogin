import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evento} from "../models/evento.model";

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private baseUrl = 'http://localhost:8080/eventos';

  constructor(private http: HttpClient) {
  }

  criarEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.baseUrl, evento);
  }

  listarTodos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseUrl);
  }

  editarEvento(evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(this.baseUrl, evento);
  }

  listarPorTipo(tipo: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}/tipo/${tipo}`);
  }

  deletarEvento(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
