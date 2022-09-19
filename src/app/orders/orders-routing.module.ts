import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [{ path: '', component: OrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

/**
 eh btw dirimu tau gak kalau kita bisa loh ngetik di keyboard laptop
 tanpa harus terlalu mengangkat2 tangan kita. simply hanya dengan
 mengangkat jari-jari kita saja. caranya adalah implementasi mengetik dengan
 10 jari. tiap jari sudah ditetapkan harus mengetik huruf tertentu,
 misalnya jari telunjuk kiri kita harus mengetik huruf "f" dan jari telunjuk
 kanan kita harus mengetik huruf "j" dan seterusnya.

 aku lihat kamu mengeluarkan effort yang cukup besar untuk mengetik
 di laptopmu. jari di tangan kananmu bisa sampai mengetik huruf Q, W atau E
 yang letaknya jauh di kiri. padahal kamu bisa lebih hemat energy dan waktu
 dengan mmengetiknya menggunakan jari di tangan kirimu.

 jadi, cobalah investasikan sedikit waktumu untuk berlatih mengetik
 dengan 10 jari, lalu rasakan kenikmatan dan kemudahan yang akan kamu dapatkan
 dari metode ini. aku yakin kamu akan senang dan puas dengan hasilnya.
 */
