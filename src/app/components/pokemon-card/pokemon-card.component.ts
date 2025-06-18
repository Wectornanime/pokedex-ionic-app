import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {

  @Input() number!: number;
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() imageAlt: string = `Imagem do pokemon ${this.name}`

  constructor() { }

  ngOnInit() {}
}
