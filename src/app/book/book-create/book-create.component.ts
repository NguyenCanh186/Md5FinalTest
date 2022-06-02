import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = {};
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
  }
  create() {
    this.bookService.create(this.bookForm.value).subscribe(() => {
      alert('tao moi thanh cong');
      this.bookForm.reset();
    });
  }

}
