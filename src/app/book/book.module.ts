import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book.component';
import {BookCardComponent} from './book-card/book-card.component';
import {BookFilterPipe} from './book-filter/book-filter.pipe';
import {AboutComponent} from '../about/about.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookRoutingModule} from './book-routing.module';
import {BookEditComponent} from './book-edit/book-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookNewComponent} from './book-new/book-new.component';


@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    AboutComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BookComponent]
})
export class BookModule { }
