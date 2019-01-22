import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "./../../servicios/heroes.services";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params["id"]);
    });
  }

  ngOnInit() {}

  imagenCasa(casa: string) {
    if (casa === "Marvel") {
      return "assets/img/marvel.png";
    } else {
      return "assets/img/DC_logo.png";
    }
  }
}
