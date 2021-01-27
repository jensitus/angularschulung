import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Book} from './model/book';
import {BookApiService} from './service/book-api.service';
import {delay, finalize, share, takeUntil} from 'rxjs/operators';
import {EMPTY, Observable, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  bookSearchTerm: string;
  books$: Observable<Book[]> = EMPTY;
  loading = false;
  private subscription: Subscription | undefined;
  private onDestroy = new Subject();

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

  getAllBooks(): void {
    this.loading = true;
    this.books$ = this.bookApiService.getAll().pipe(
      delay(1000),
      finalize(() => this.loading = false),
      takeUntil(this.onDestroy),
      share()
    );
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    // this.subscription.unsubscribe();
  }

}
