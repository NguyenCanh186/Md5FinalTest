import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookProfileComponent} from './book-profile/book-profile.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'edit/:id',
    component: BookUpdateComponent
  },
  {
    path: 'profile/:id',
    component: BookProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
