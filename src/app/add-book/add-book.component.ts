import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  message: string;
  error:string;
  constructor(private bookService: BookService) { }

  postBook(form: NgForm){
    this.bookService.postData(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      if(!response.error){
        this.message = 'Book added succesfully';
      }
    }, error => {
      console.log(error); 
  });
 }

  ngOnInit(): void {
  }

}
