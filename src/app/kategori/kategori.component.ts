import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu, menus } from '../menus';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css'],
})
export class KategoriComponent implements OnInit {
  menus: Menu[] = menus;

  category: string = '';

  categories: any;

  constructor(private route: ActivatedRoute) {}

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  ngOnInit() {
    // Get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    this.category = String(routeParams.get('menuKategori'));

    // Find the product that match sama route
    this.menus = menus.filter((menu) => menu.kategori === this.category);
  }
}
