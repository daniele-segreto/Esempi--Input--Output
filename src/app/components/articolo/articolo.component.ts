import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articolo } from 'src/app/interfaces/articolo';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent {
  @Input() articoloxx!: Articolo; // Riceve l'articolo come input dal componente padre
  @Output() like = new EventEmitter();

  // Metodo chiamato quando l'utente clicca sul pulsante di incremento degli apprezzamenti
  incrementaApprezzamenti(event: any) {
    // Incrementa il numero di apprezzamenti dell'articolo
    this.articoloxx.numApprezzamenti = this.articoloxx.numApprezzamenti + 1;
    event.preventDefault(); // Impedisce l'azione predefinita per evitare un aggiornamento della pagina

    //this.like.emit(this.articoloxx.numApprezzamenti);

    // Emite l'evento 'like' con il numero aggiornato di apprezzamenti
    this.like.emit({numApprezzamenti: this.articoloxx.numApprezzamenti});
  }

}
