import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu, menus } from '../menus';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css'],
})
export class MenuDetailsComponent implements OnInit {
  menu: Menu | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const menuIdFromRoute = Number(routeParams.get('menuId'));

    // Find the product that match sama route
    this.menu = menus.find((menu) => menu.id === menuIdFromRoute);
  }
}
