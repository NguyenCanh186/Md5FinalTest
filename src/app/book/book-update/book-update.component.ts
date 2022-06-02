import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getBookById(id);
    });
  }

  ngOnInit() {}

  get idControl() {
    return this.bookForm.get('id');
  }

  getBookById(id) {
    this.bookService.findById(id).subscribe((book) => {
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      });
    });
  }

  update() {
    const data = this.bookForm.value;
    data.category = {
      id: data.category
    };
    this.bookService.update(this.idControl.value, data).subscribe(() => {
      alert('chinh sua thanh cong');
    });
  }

}
