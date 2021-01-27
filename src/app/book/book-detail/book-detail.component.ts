import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookApiService} from '../service/book-api.service';
import {EMPTY, Observable, Subscription} from 'rxjs';
import {Book} from '../model/book';
import {switchMap} from 'rxjs/operators';
import {TmplAstTemplate} from '@angular/compiler';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  isbn: string;
  book: Book;
  private subscription = Subscription;

  constructor(
    private route: ActivatedRoute,
    private bookApiService: BookApiService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => this.bookApiService.getTheDetailedBook(params.isbn))
    ).subscribe(book => {
        this.book = book;
    });
  }

  getTheBook(): void {
    // this.bookApiService.getTheDetailedBook(this.isbn).subscribe(book => {
    //   this.book = book;
    //   console.log('detailBook', this.book);
    // });
  }

  ngOnDestroy(): void {
  }



}
