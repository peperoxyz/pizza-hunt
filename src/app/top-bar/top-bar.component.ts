import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { menus, Menu } from '../menus';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  categories = [
    {
      name: 'Pizza',
      icon: '🍕',
    },
    {
      name: 'Pasta',
      icon: '🍝',
    },
    {
      name: 'Rice',
      icon: '🍚',
    },
    {
      name: 'Drinks',
      icon: '🍹',
    },
  ];
}
