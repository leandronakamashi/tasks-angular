import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private client: HttpClient) {}

  getTarefas(): Observable<any> {
    return this.client.get('http://localhost:3000/tarefas');
  }

  removerTarefa(tarefa: any): Observable<any> {
    console.log(
      `removendo tarefa no service: http://localhost:3000/tarefas/${tarefa.id}`
    );
    // return this.client.delete(`http://localhost:3000/tarefas/${tarefa.id}`);
    return this.client.delete(`http://localhost:3000/tarefas/${tarefa.id}`);
  }

  editiarTarefa(tarefa: any): Observable<any> {
    return this.client.put(
      `http://localhost:3000/tarefas/${tarefa.id}`,
      tarefa
    );
  }

  salvarTarefa(frm: any): Observable<any> {
    console.log('salvando tarefa no service:', frm);
    return this.client.post('http://localhost:3000/tarefas', frm);
  }
}
