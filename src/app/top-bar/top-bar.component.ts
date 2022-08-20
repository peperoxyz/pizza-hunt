import { Component, OnInit } from '@angular/core';
import { menus, Menu } from '../menus';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  kategoris = ['Pizza', 'Pasta', 'Rice Bowl', 'Drinks'];
}
