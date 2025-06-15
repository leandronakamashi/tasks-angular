import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private client: HttpClient) {}
  // -------------- usando API --------------------

  apiUrl = 'http://localhost:3000/tarefas';
  // apiUrl = 'https://json-server-versel-phi.vercel.app/tarefas';

  // getTarefas(): Observable<any> {
  //   return this.client.get(this.apiUrl);
  // }

  // removerTarefa(tarefa: any): Observable<any> {
  //   console.log(`removendo tarefa no service: ${this.apiUrl}/${tarefa.id}`);

  //   return this.client.delete(`${this.apiUrl}/${tarefa.id}`);
  // }

  // editiarTarefa(tarefa: any): Observable<any> {
  //   return this.client.put(`${this.apiUrl}/${tarefa.id}`, tarefa);
  // }

  // salvarTarefa(frm: any): Observable<any> {
  //   console.log('salvando tarefa no service:', frm);
  //   return this.client.post('http://localhost:3000/tarefas', frm);
  // }

  // ------- usando uma variavel array ---------------
  tarefas: any[] = [
    { id: 1, nome: 'Tarefa 1', tarefa: 'Fazer algo', concluido: false },
    { id: 2, nome: 'Tarefa 2', tarefa: 'Fazer outra coisa', concluido: false },
  ];
  tarefaEdit: any;

  getTarefas() {
    return this.tarefas;
  }

  salvarTarefa(novaTarefa: any) {
    this.tarefas.push(novaTarefa);
    return console.log('criou uma nova tarefa no array=' + novaTarefa);
  }

  removerTarefa(tarefa: any) {
    console.log('removendo tarefa no service:', tarefa);
    this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
    return console.log('tarefa removida com sucesso:', tarefa);
  }

  editiarTarefa(novaTarefa: any) {
    this.tarefaEdit = this.tarefas.filter((t) => t.id === novaTarefa.id);
    this.tarefaEdit.concluido = !this.tarefaEdit.concluido;

    return console.log('criou uma nova tarefa no array=' + novaTarefa);
  }
}
