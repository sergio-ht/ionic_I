import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peliculas = []/* [
    {
      titulo: "Frances Ha",
      anio: 2012,
      director: "Noah Baumbach",
      imagen:"https://ep00.epimg.net/cultura/imagenes/2014/04/03/actualidad/1396541271_474238_1396541528_noticia_normal.jpg"
    },
    {
      titulo: "Blade Runner 2049",
      anio: 2017,
      director: "Denis Villenue",
      imagen:"https://images-na.ssl-images-amazon.com/images/I/6187b6y4x1L._SY400_.jpg"
    }
  ]*/
  constructor(private peliculasService: PeliculasService) {}
  
  ngOnInit() {
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    // this.peliculasService.getPeliculas();
  }
}
