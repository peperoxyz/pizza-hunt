import { Component, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../menus';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent {
  @Input() menu!: Menu;
}
