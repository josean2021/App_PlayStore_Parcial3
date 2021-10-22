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


@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {

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

  Imagenes: imagenes[]=[
    {
      img: 'assets/f.png',
      name: 'Facebook',
      desc: 'Facebokk'
    },
    {
      img: 'assets/t.png',
      name: 'Twitter',
      desc: 'Twitter, Inc'
    },
    {
      img: 'assets/sp.png',
      name: 'Spotify: música y pódcasts',
      desc: 'Spotify AB'
    },
    {
      img: 'assets/tl.jpg',
      name: 'Telegram',
      desc: 'Telegram FZ-LLC'
    },
    {
      img: 'assets/tt.png',
      name: 'TikTok Lite',
      desc: 'Tiktok Pte.Ltd'
    },
    {
      img: 'assets/kw.png',
      name: 'Kwai ver videos',
      desc: 'KWAI'
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
