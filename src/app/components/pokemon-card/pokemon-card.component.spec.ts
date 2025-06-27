import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonCardComponent } from './pokemon-card.component';
import { NgFor } from '@angular/common';
import { PokemonTypeCardComponent } from '../pokemon-type-card/pokemon-type-card.component';
import { getColor } from 'src/app/utils/pokemon-type-color-map';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        PokemonCardComponent,
        PokemonTypeCardComponent,
        NgFor,
        IonicModule.forRoot(),
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;

    component.pokemonName = 'pikachu';
    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the background color according to the pokemon type', () => {
    const cardColor = 'rgb(247, 207, 46)';
    const pokemonType = 'electric';

    component.bgColor = getColor(pokemonType);
    fixture.detectChanges();

    const element = fixture.debugElement.nativeElement;
    expect(element.style.backgroundColor).toEqual(cardColor)
  })
});
