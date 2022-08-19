import { Component, OnInit } from '@angular/core';
import { menus, Menu } from '../menus';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent {
  menus = menus;
}
