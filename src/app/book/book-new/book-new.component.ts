import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookApiService} from '../service/book-api.service';
import {Book} from '../model/book';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private bookApiService: BookApiService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', Validators.required],
      isbn: ['', Validators.minLength(11)]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    console.log(this.form.value);
    const book: Book = {
      author: this.form.value.author,
      title: this.form.value.title,
      isbn: this.form.value.isbn
    };
    this.bookApiService.createBook(book).pipe(
      finalize(() => this.loading = false)
    ).subscribe(data => {
      console.log('data', data);
      this.router.navigate(['/books/detail/', data.isbn]);
    });
  }
}
