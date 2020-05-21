import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-issued-books',
  templateUrl: './show-issued-books.component.html',
  styleUrls: ['./show-issued-books.component.css']
})
export class ShowIssuedBooksComponent implements OnInit {

  error;
  message;
  issueBook;
  constructor(private bookService:BookService, private router:Router) {
    this.getIssuedBook();
   }

  ngOnInit(): void {
  }

  getIssuedBook() {
    this.bookService.getIssuedBooks().subscribe(response => {
      console.log(response);
      this.issueBook = response.issueBookList;
    }, error => {
        console.log(error);
    });
  }
}
