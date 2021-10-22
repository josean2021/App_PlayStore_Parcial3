import { Component, OnInit } from '@angular/core';

interface Lcard {
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


@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  lcard: Lcard[]=[
    {
      img: '/assets/hackea.png',
      name: 'Hackea a tu macho',
      desc: 'Nicko Nugués',
    },
    {
      img: '/assets/jukilop.jpg',
      name: 'Jukilop: La verdadera historia',
      desc: 'Juan de Dios Pantoja',
    },
    {
      img: '/assets/agua-roja.jpeg',
      name: 'Agua Roja',
      desc: 'Fernando Trujillo Sanz',
    },
    {
      img: '/assets/imperio.jpg',
      name: 'Imperio de Roca: Las espadas míticas',
      desc: 'Saúl Lucio',
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

  constructor() { }

  ngOnInit() {
  }

}
