import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  model = {
      left: true,
      middle: false,
      right: false
  };
  date: Date = new Date();

   constructor() { }

  ngOnInit() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('presentation-page');
      const navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('presentation-page');
      const navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }
}
