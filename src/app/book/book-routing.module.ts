import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book.component';

const routes: Routes = [
  {path: '', component: BookComponent},
  {path: 'detail/:isbn', component: BookDetailComponent}
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
