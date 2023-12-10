import { Component } from '@angular/core';
import { Articolo } from './interfaces/articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // #ARTICOLI
  title_1 = 'Articoli';
  articoli: Articolo[];  // Modifica il tipo di articoli in un array di Articolo

  // #CONTATTI
  title_2 = 'Contatti';
  myContatto : any;

  constructor() {
    // Inizializza l'array di articoli con oggetti di tipo Articolo
    this.articoli = [
      {
        titolo: "Creare componenti Angular 2",
        autore: "Mario Rossi",
        testo: "Creare componenti con Angular 2 è molto semplice.",
        numApprezzamenti: 0
      },
      {
        titolo: "Altro Titolo",
        autore: "Maria Soccins",
        testo: "Lo penso anche io.",
        numApprezzamenti: 0
      },
      // Aggiungi altri articoli se necessario
    ];

    this.myContatto = {
      nome: 'Settimo',
      cognome: 'Cogni',
      numero: 333637281,
      email: 'uno.cogni@gmail.com',
      mipiace: 0
    };
  }

  mostraMessaggioRingraziamento(event: any, numApprezzamenti: number) {
    // alert("Grazie per aver espresso il tuo apprezzamento per l'articolo!");
    alert(`Grazie per il tuo like. \nHo ricevuto ${numApprezzamenti} Like.`);
    event.preventDefault();
  };

  avvisoLike(mipiace: number) {
    alert(`Hai ricevuto ${mipiace} Like`);
    // event.preventDefault();
  }


}
