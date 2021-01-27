import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ConfirmLeaveGuard} from './confirm-leave.guard';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'books', loadChildren: () => import('./book/book.module').then(m => m.BookModule)},
  {path: 'about', component: AboutComponent, canDeactivate: [ConfirmLeaveGuard]},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
