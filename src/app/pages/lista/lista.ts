import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from '../../components/service/service';
import { MatIconModule } from '@angular/material/icon';
import { Subscriber } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [MatIconModule, CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  //recebe as tarefas do componente pai (layout)
  @Input() tarefas: any;
  @Output() tarefaDeletada = new EventEmitter();
  @Output() tarefaConcluido = new EventEmitter();

  deleteTarefa(tarefa: any) {
    this.tarefaDeletada.emit(tarefa);
  }
  editarTarefa(tarefa: any) {
    console.log('editar tarefa:', tarefa);
  }

  onConcluido(tarefa: any) {
    tarefa.concluido = !tarefa.concluido;
    console.log('tarefa concluída trocado:', tarefa.concluido);
    this.tarefaConcluido.emit(tarefa);
  }
}
