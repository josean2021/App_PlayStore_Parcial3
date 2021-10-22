import { Component, OnInit } from '@angular/core';

interface Lpelis {
  img: string;
  name: string;
  desc: string;
}

interface Parati{
  redirectTo: string;
}
interface Exitos{
  redirectTo: string;
}

interface Juegos {
  icon: string;
  name: string;
  redirectTo: string;
}

interface Apps {
  icon: string;
  name: string;
  redirectTo: string;
}

interface Peliculas {
  icon: string;
  name: string;
  redirectTo: string;
}

interface Libros {
  icon: string;
  name: string;
  redirectTo: string;
}

interface Ajustes {
  redirectTo: string;
}


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  lpelis: Lpelis[]=[
    {
      img: '/assets/venom.jpg',
      name: 'Venom',
      desc: 'Acción y aventura',
    },
    {
      img: '/assets/no-respires.jpg',
      name: 'No respires 2',
      desc: 'Terror',
    },
    {
      img: '/assets/spectre.png',
      name: 'Spectre',
      desc: 'Audio: Inglés',
    },
    {
      img: '/assets/god-kg.jpg',
      name: 'Godzilla vs. Kong',
      desc: 'Acción y aventura',
    },
    {
      img: '/assets/spider-man.jpg',
      name: 'Spider-Man (2002)',
      desc: 'Acción y aventura',
    },
  ];

  parati: Parati[]=[
    {
    redirectTo: '/home',
    }];
  
    exitos: Exitos[]=[
      {
      redirectTo: '/exitos',
      }];


  juegos: Juegos[]=[
    {
    icon: 'game-controller',
    name: 'Juegos',
    redirectTo: '/juegos'
    },
  ];

  apps: Apps[]=[
    {
    icon: 'grid-outline',
    name: 'Apps',
    redirectTo: '/apps'
    },
  ];

  peliculas: Peliculas[]=[
    {
    icon: 'film-outline',
    name: 'Peliculas',
    redirectTo: '/peliculas'
    },
  ];

  libros: Libros[]=[
    {
    icon: 'book-outline',
    name: 'Libros',
    redirectTo: '/libros'
    },
  ];

  ajustes: Ajustes[]=[
    {
    redirectTo: '/ajustes'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
