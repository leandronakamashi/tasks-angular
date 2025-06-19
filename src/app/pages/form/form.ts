import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Service } from '../../components/service/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  frm: FormGroup;
  @Output() tarefaSalva = new EventEmitter<any>();

  constructor(private FormBuilder: FormBuilder) {
    this.frm = this.FormBuilder.group({
      id: [],
      nome: ['', Validators.required],
      tarefa: ['', Validators.required],
      concluido: [false],
    });
  }

  salvar() {
    this.tarefaSalva.emit(this.frm.value);
    console.log('salvou:', this.frm);
    this.frm.reset();
  }
}
