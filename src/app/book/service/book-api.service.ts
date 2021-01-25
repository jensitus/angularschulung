import { Injectable } from '@angular/core';
import {Book} from '../model/book';

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

  constructor() { }

  getAll(): Book[] {
    return this.books;
  }


}
