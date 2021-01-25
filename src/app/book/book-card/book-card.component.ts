import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../model/book';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() content: Book;
  @Output() detailClick = new EventEmitter<Book>();

  customStyle = {
    color: 'grey'
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleDetailClickEvent(): void {
    this.detailClick.emit(this.content);
  }

}
