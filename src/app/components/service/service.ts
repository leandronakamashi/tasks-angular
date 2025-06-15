import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private client: HttpClient) {}

  apiUrl = 'http://localhost:3000/tarefas';
  //apiUrl = 'https://json-server-versel-phi.vercel.app/tarefas';

  getTarefas(): Observable<any> {
    return this.client.get(this.apiUrl);
  }

  removerTarefa(tarefa: any): Observable<any> {
    console.log(`removendo tarefa no service: ${this.apiUrl}/${tarefa.id}`);

    return this.client.delete(`${this.apiUrl}/${tarefa.id}`);
  }

  editiarTarefa(tarefa: any): Observable<any> {
    return this.client.put(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }

  salvarTarefa(frm: any): Observable<any> {
    console.log('salvando tarefa no service:', frm);
    return this.client.post('http://localhost:3000/tarefas', frm);
  }
}
