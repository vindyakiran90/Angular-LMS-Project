import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  error:string;
  message:string;
  editBookData;
  
  constructor(private bookService: BookService,  
    private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(data => {
      console.log('Book to be updated', data);
      this.editBookData = data;
    });
  }

  ngOnInit(): void {
    
  }

  updateBook(form : NgForm) {
    this.bookService.updateData(form.value).subscribe(response =>{
      console.log('edit form value',form.value);
      console.log(response);
      form.reset();
      if(response.error){
        this.error = response.message;
        setTimeout(()=>{
          this.error = null;
        },5000);
      }else{
        this.router.navigateByUrl('/books');
      }
    })
   }
}
