import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-borrowed-books',
  templateUrl: './show-borrowed-books.component.html',
  styleUrls: ['./show-borrowed-books.component.css']
})
export class ShowBorrowedBooksComponent implements OnInit {

  borrowBookList;
  error;
  message;
  constructor(private bookService:BookService, private router:Router) {
   this.BorrowedBooks();
  }

  ngOnInit(): void {
  }

  BorrowedBooks(){
    let user = JSON.parse(localStorage.getItem('userBean'));
    this.bookService.getBorrowedBooks({ userId: user.userBean.userId }).subscribe(response => {
      console.log(response);
      this.borrowBookList = response.borrowBookList;
    }, error => {
      console.log(error);
    });
  }
 

}
