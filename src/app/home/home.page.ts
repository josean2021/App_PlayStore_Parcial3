import { Component, OnInit } from '@angular/core';

interface Parati{
  redirectTo: string;
}
interface Exitos{
  redirectTo: string;
}
 

interface imagenes {
  img: string;
  name: string;
  desc: string;
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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
parati: Parati[]=[
  {
  redirectTo: '/home',
  }];

  exitos: Exitos[]=[
    {
    redirectTo: '/exitos',
    }];

  Imagenes: imagenes[]=[
    {
      img: 'assets/cookie.jpeg',
      name: 'Cookie Jam',
      desc: 'Juego de combinar'
    },
    {
      img: 'assets/chess.jpg',
      name: 'Chess Clash',
      desc: 'Juego de mesa'
    },
    {
      img: 'assets/hungry.png',
      name: 'Hungry Shark World',
      desc: ''
    },
    {
      img: 'assets/super.png',
      name: 'Super Mario Bros',
      desc: ''
    },
    {
      img: 'assets/tom.png',
      name: 'Mi Talking Tom',
      desc: ''
    },
    {
      img: 'assets/evertale.jpg',
      name: 'League of Pantheons',
      desc: ''
    },
    
  ];

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

  constructor() {}

  
}
