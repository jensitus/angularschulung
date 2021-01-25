import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import {BookCardComponent} from './book-card/book-card.component';
import {BookFilterPipe} from './book-filter/book-filter.pipe';



@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [BookComponent]
})
export class BookModule { }
