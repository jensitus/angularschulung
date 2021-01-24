import { Component } from '@angular/core';
import {Book} from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' the new: bookmonkey-client';

  book: Book = {
    title: 'Die Zugvögel',
    author: 'Charlotte McConaghy',
    abstract: 'a tiny little book about birds ...'
  };

  goToBookDetails(book: Book): void {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

}
