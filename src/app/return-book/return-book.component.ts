import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  message;
  error;
  borrowBookList;
  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { 
    this.getBorrowedBook();
  }

  
  ngOnInit(): void {
  }

  getBorrowedBook() {
    let user = JSON.parse(localStorage.getItem('userBean'));
    this.bookService.getBorrowedBooks({ userId: user.userBean.userId }).subscribe(response => {
      console.log(response);
     this.borrowBookList = response.borrowBookList;
    }, error => {
      console.log(error);
    });
  }

  returnBook(borrowBook) {
    this.bookService.getReturnBook({userId: borrowBook.userId, bookId : borrowBook.bookId}).subscribe(response => {
      console.log(response);
      if (!response.error) {
        this.message = 'Returned the book to Admin';
      } else {
        this.error = 'Failed to return the book to Admin';
        setTimeout(() => {
          this.error = null;
        }, 5000);
      }
      setTimeout(() => {
        this.message = null;
      }, 5000);
    });
    
  }


}
