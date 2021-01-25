import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '../model/book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], searchTerm: string): Book[] {
    if (!searchTerm) {
      return books;
    }
    const lowercased = searchTerm.toLocaleLowerCase();
    return books.filter(({title, abstract, author}) => {
      return (
        title.toLowerCase().includes(lowercased) ||
        abstract.toLowerCase().includes(lowercased) ||
        author.toLowerCase().includes(lowercased)
      );
    });
  }

}
