import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  private books = [{
    title: 'Die Zugvögel',
    author: 'Charlotte McConaghy',
    abstract: 'a tiny little book about birds ...'
  }, {
    title: 'Moby Dick',
    author: 'herman melvile',
    abstract: 'the epic hunt of the white whale'
  }];

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Book[]> {
    // return of(this.books);
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getTheDetailedBook(isbn: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:4730/books/' + isbn);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:4730/books/', book);
  }


}
