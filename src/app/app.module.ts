import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book/book-card/book-card.component';
import { BookFilterPipe } from './book/book-filter/book-filter.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {BookModule} from './book/book.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
