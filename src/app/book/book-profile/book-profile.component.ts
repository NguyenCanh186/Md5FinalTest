import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../book';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {
  books: Book = {};
  // bookForm: FormGroup = new FormGroup({
  //   id: new FormControl(),
  //   title: new FormControl(),
  //   author: new FormControl(),
  //   description: new FormControl(),
  // });
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getBookById(id);
    });
  }

  ngOnInit() {}

  // get idControl() {
  //   return this.bookForm.get('id');
  // }

  getBookById(id) {
    this.bookService.findById(id).subscribe((book) => {
      this.books = book;
      //   new FormGroup({
      //   id: new FormControl(book.id),
      //   title: new FormControl(book.title),
      //   author: new FormControl(book.author),
      //   description: new FormControl(book.description),
      // });
    });
  }

}
