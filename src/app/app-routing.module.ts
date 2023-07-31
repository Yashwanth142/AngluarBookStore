import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'login',component:LoginComponent},

  {path:'home',component:DashboardComponent,
  children: [{ path: 'AllBooks', component: GetallbooksComponent},
  { path: '', pathMatch: 'full', redirectTo: 'AllBooks'},
  {path: 'viewBookDetails', component: ViewBooksComponent},
  {path:"cart", component:CartComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
