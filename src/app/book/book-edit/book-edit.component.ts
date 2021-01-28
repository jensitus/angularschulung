import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../model/book';
import {switchMap} from 'rxjs/operators';
import {BookApiService} from '../service/book-api.service';
import {Subscription} from 'rxjs';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {

  book: Book | undefined;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private bookApiService: BookApiService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.pipe(
      switchMap((params) => this.bookApiService.getTheDetailedBook(params.isbn))
    ).subscribe((book) => {
      this.book = book;
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


  save(form: FormGroup): void {
    const updated = {
      ...this.book,
      ...form.value
    };
    console.log(updated);
  }
}
