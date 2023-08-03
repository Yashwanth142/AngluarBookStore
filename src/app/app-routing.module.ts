import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrderComponent } from './components/order/order.component';
import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';
import { AdminDisplayBookComponent } from './components/admin-display-book/admin-display-book.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'login',component:LoginComponent},

  {path:'home',component:DashboardComponent,
  children: [{ path: 'AllBooks', component: GetallbooksComponent},
  { path: '', pathMatch: 'full', redirectTo: 'AllBooks'},
  {path: 'viewBookDetails', component: ViewBooksComponent},
  {path:"cart", component:CartComponent},
  {path:"wishlist", component: WishlistComponent},
  {path:"order", component: OrderComponent}, 
]},
{path: 'admin', component:AdminDashBoardComponent,
children: [{ path: 'AllBooks', component: AdminDisplayBookComponent},
{ path: '', pathMatch: 'full', redirectTo: 'AllBooks'}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
