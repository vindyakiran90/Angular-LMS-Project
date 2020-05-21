import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
 

  requestBook;
  message;
  error;
  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) {
    this.getRequestedBooks();
  }

  ngOnInit(): void {
  }

  getRequestedBooks() {
    this.bookService.getRequest().subscribe(response => {
      console.log(response);
      this.requestBook = response.requestBookList;
    }, error => {
      console.log(error);
    });
  }

  issueBooks(userId1, bookId1) {
    this.bookService.getIssueBook({userId : userId1, bookId: bookId1}).subscribe(response => {
      console.log(response);
      if (!response.error) {
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 5000);
      } else {
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      }
    });
  }

}
