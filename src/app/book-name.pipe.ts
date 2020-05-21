import { Pipe, PipeTransform } from '@angular/core';

interface BookBean {
  bookId:number;
  bookTitle:string;
  category:string;
  author:string;
  publisherName:string;
}

@Pipe({
  name: 'filter'
})
export class BookNamePipe implements PipeTransform {

  transform(bookList:BookBean[], searchName:string): BookBean[] {
    if(searchName === undefined) {
      return bookList;
    } else {
        return bookList.filter(book => {
          if(book.bookTitle.toLowerCase().includes(searchName.toLowerCase())
          || book.author.toLowerCase().includes(searchName.toLowerCase())){
              return true;
          } else{
              return false;
          }
        });
    }
  }

}
