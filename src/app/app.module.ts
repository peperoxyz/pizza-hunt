import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RouterModule } from '@angular/router';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { KategoriComponent } from './kategori/kategori.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuListComponent,
    PizzaComponent,
    MenuDetailsComponent,
    KategoriComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MenuListComponent },
      {
        path: 'menus/detail/:menuId',
        component: MenuDetailsComponent,
      },
      {
        path: 'menus/:menuKategori',
        component: KategoriComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
