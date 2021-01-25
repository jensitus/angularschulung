import { Component, OnInit } from '@angular/core';
import {Book} from './model/book';
import {BookApiService} from './service/book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookSearchTerm: string;

  books: Book[];

  constructor(
    private bookApiService: BookApiService
  ) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  goToBookDetails(book: Book): void {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

  updateBookSearchTerm(input: InputEvent & {target: HTMLInputElement}): void {
    console.log(input.target.value);
    this.bookSearchTerm = input.target.value;
  }

  getAllBooks() {
    this.books = this.bookApiService.getAll();
  }
}
