import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RouterModule } from '@angular/router';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { KategoriComponent } from './kategori/kategori.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuListComponent,
    PizzaComponent,
    MenuDetailsComponent,
    KategoriComponent,
    CartComponent,
    HomeComponent,
    RestApiComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'menus', component: MenuListComponent },
      { path: '', component: HomeComponent },
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
      {
        path: 'restapi',
        component: RestApiComponent,
      },
      {
        path: 'restapi/detail/:userId',
        component: UserDetailComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
