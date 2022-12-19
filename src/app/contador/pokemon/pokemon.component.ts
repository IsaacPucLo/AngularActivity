import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() idPokemon: number;
  urlImage: string;
  name: string;
  type: string;
  abilities: string[];



  constructor(private pokemonService: PokemonService) {
    this.idPokemon = 0;
    this.urlImage = "";
    this.name = "";
    this.type = "";
    this.abilities = [];

  }

  ngOnInit(): void {
  }

  search() {
    this.pokemonService.getPokemon(this.idPokemon).subscribe((data: any) => {
      this.urlImage = data.sprites.other.dream_world.front_default;
      this.name = data.name.toUpperCase();
      this.type = data.types[0].type.name;
      this.abilities = [];
      data.abilities.forEach((ability: any) => {
        this.abilities.push(ability.ability.name);
      });

      this.eliminarElementosHabilidades();
      this.mostrarElementosHabilidades();
      this.mostrarPokemon();
    });
  }


  mostrarElementosHabilidades() {
    this.abilities.forEach(data => {
      let lista = document.getElementById("ulListado");
      let linew = document.createElement("li");
      let contenido = document.createTextNode(data);
      if (lista != null && lista?.childElementCount < 4) {
        lista.appendChild(linew);
        linew.appendChild(contenido);
      }
    })
  }

  eliminarElementosHabilidades() {
    let lista = document.getElementById("ulListado");
    if (lista != null) {
      while (lista.childElementCount > 0) {
        if (lista.lastElementChild)
          lista.removeChild(lista.lastElementChild);
      }
    }
  }

  mostrarPokemon() {
    let panel = document.getElementById("pokemon-card");

    if (panel != null) {
      panel.style.display = "contents";
    }
  }


}
