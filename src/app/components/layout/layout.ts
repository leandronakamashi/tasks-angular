import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form } from '../../pages/form/form';
import { Lista } from '../../pages/lista/lista';
import { Service } from '../service/service';
import { filter } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  imports: [Form, Lista, MatIconModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  // variáver que sera passdo para o componente lista pelo layout.html [tarefas]="tarefas"
  tarefasService: any;

  constructor(private service: Service) {}

  // alimenta a variável tarefas com os dados recebidos do serviço
  ngOnInit() {
    // this.service.getTarefas().subscribe((data) => {
    //   this.tarefasService = data;

    //   console.log('Tarefas recebidas:', this.tarefasService);
    // });

    // Usando uma variável array
    this.tarefasService = this.service.getTarefas();
    console.log('Tarefas recebidas:', this.tarefasService);
  }
  //metodo para salvar a tarefa
  // tarefaSalvaService(frm: any) {
  //   console.log('tarefa salva:', frm.value);
  //   this.service.salvarTarefa(frm).subscribe((tarefa) => {
  //     this.tarefasService.push(tarefa);
  //   });
  // }

  //metodo para editar a tarefa
  // editarTarefaService(tarefa: any) {
  //   console.log('editar tarefa:', tarefa);
  //   this.service.editiarTarefa(tarefa).subscribe(() => {});
  // }

  //metodo para concluir a tarefa
  // tarefaConcluidaService(tarefa: any) {
  //   this.service.editiarTarefa(tarefa).subscribe(() => {
  //     console.log('Tarefa concluída com sucesso:', tarefa);
  //   });
  // }
  //metodo para deletar a tarefa
  // tarefaDeletadaService(tarefa: any) {
  //   console.log('tarefa deletada:', tarefa);
  //   this.service.removerTarefa(tarefa).subscribe(() => {
  //     this.tarefasService = this.tarefasService.filter(
  //       (t: { id: any }) => t.id !== tarefa.id
  //     );
  //     console.log('Tarefa removida com sucesso:', tarefa);
  //   });
  // }

  // -------------- usando array local ---------------------
  // deletar tarefa usando array
  tarefaDeletadaService(tarefa: any) {
    this.service.removerTarefa(tarefa);
    this.tarefasService = this.service.getTarefas();
  }
  // Usando uma variável array para salvar a tarefa
  tarefaSalvaService(frm: any) {
    this.service.salvarTarefa(frm);
  }
  tarefaConcluidaService(tarefa: any) {
    this.service.editiarTarefa(tarefa);
  }
}
