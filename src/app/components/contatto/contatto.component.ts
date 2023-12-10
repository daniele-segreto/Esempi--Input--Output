import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contatto } from 'src/app/interfaces/contatto';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent {
  @Input() contatto!: Contatto;
  @Output() mipiace = new EventEmitter();

  aumentaLike() {
    this.contatto.mipiace++;
    this.mipiace.emit(this.contatto.mipiace);
  }
}
