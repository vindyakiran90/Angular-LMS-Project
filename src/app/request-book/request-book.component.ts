import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {

  message;
  error;
  bookList;
  search;

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) {
    this.getBooks();
  }

  ngOnInit(): void {
  }

  getBooks() {
    this.bookService.getData().subscribe(response => {
      console.log(response);
      this.bookList = response.bookList;
    }, error => {
      console.log(error);
    });
  }

  studentRequest(bookId1) {
    let studentDetails = JSON.parse(localStorage.getItem('userBean'));
    let userId1 = studentDetails.userBean.userId;
    this.bookService.getBookRequest({userId :userId1, bookId :bookId1}).subscribe(response => {
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
