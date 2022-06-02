import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BookProfileComponent} from './book-profile/book-profile.component';


@NgModule({
  declarations: [BookCreateComponent, BookListComponent, BookUpdateComponent, BookDeleteComponent, BookProfileComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BookModule { }
