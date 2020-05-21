import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  search;
  bookList;
  message:string;
  error:string;
  constructor(private bookService: BookService, private router: Router) {
    this.getBooks();
  }

  ngOnInit(): void {
  }

  updateBook(bookBean){
    this.router.navigate(['/update-book'], {queryParams:bookBean});
  }

  getBooks() {
    this.bookService.getData().subscribe(response => {
      console.log(response);
      this.bookList = response.bookList;
    }, error => {
      console.log(error);
    });
  }

  deleteBook(bookId:number){
    this.bookService.deleteData(bookId).subscribe(response => {
      console.log(response);
      if(response.error){
        this.message = 'Deletion is unsuccessful';
      } else{
        this.message = 'Book deleted successfully';
      }
      setTimeout(() => {
        this.message = null;
      }, 5000);
    });
  }
}
