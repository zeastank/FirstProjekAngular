import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { BookListComponent } from './book-list/book-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'product-list', component: ProductListComponent},
    {path: 'book-list', component: BookListComponent},
    {path: 'employees', component: EmployeesComponent}
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
