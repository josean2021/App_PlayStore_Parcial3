import { Component, OnInit } from '@angular/core';

interface Lista{
  img: string;
  name: string;
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
  selector: 'app-exitos',
  templateUrl: './exitos.page.html',
  styleUrls: ['./exitos.page.scss'],
})
export class ExitosPage implements OnInit {

  lista: Lista[]=[
    {
      img: 'assets/survival.png',
      name: '456: Survival Game',
    },
    {
      img: 'assets/squid.png',
      name: 'Squid.io -Red Light Green Light',
    },
    {
      img: 'assets/candy.jpg',
      name: 'Candy Challenge 3D',
    },
    {
      img: 'assets/roblox.png',
      name: 'ROBLOX ',
    },
    {
      img: 'assets/doll-roll.jpg',
      name: 'Doll Roll Survival Game : 456 ',
    },
    {
      img: 'assets/yes-or-no.png',
      name: 'Yes or No?!',
    },
    {
      img: 'assets/garena.png',
      name: 'Garena Free Fire: Día Booyah',
    },
    {
      img: 'assets/car.png',
      name: 'Car Drivig School: Car Game',
    },
    {
      img: 'assets/run.jpeg',
      name: 'Run and Stop Challenge ',
    },
    {
      img: 'assets/subway.jpg',
      name: 'Subway Surfers',
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
