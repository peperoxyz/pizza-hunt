import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RouterModule } from '@angular/router';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuListComponent,
    PizzaComponent,
    MenuDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MenuListComponent },

      {
        path: 'menus/:menuId',
        component: MenuDetailsComponent,
      },
      {
        path: 'menus/:menuKategori',
        component: PizzaComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
