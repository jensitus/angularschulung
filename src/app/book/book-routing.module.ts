import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookNewComponent} from './book-new/book-new.component';

const routes: Routes = [
  {path: '', component: BookComponent},
  {path: 'detail/:isbn', component: BookDetailComponent},
  {path: 'detail/:isbn/edit', component: BookEditComponent},
  {path: 'new', component: BookNewComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRoutingModule {
}
