import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book.component';
import {BookCardComponent} from './book-card/book-card.component';
import {BookFilterPipe} from './book-filter/book-filter.pipe';
import {AboutComponent} from '../about/about.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookRoutingModule} from './book-routing.module';


@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    AboutComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [BookComponent]
})
export class BookModule { }
