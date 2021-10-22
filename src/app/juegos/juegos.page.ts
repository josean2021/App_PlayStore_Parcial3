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
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

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
      img: 'assets/skip-bo.png',
      name: 'Skip Bo',
      desc: 'Cartas'
    },
    {
      img: 'assets/clash-royal.jpg',
      name: 'Clash royal',
      desc: 'Supercell'
    },
    {
      img: 'assets/mythic-heroes.jpeg',
      name: 'Mythic Heroes:Idle RPG',
      desc: 'Juegos de rol'
    },
    {
      img: 'assets/super-mombo.png',
      name: 'Super Mombo Quest',
      desc: 'Aventura'
    },
    {
      img: 'assets/haydos-380.png',
      name: 'Haydos 380',
      desc: 'Deportes Criquet'
    },
    {
      img: 'assets/league.png',
      name: 'League of Pantheons',
      desc: 'Cartas'
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


  constructor() { }

  ngOnInit() {
  }

}
