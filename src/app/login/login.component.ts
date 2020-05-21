import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  message: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(form: NgForm){
    this.authService.login(form.value).subscribe(response =>{
      console.log(response);
      if(response.error){
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      } else {
         this.message = 'Logged in successfully'; 
          localStorage.setItem('userBean', JSON.stringify(response));  
          console.log(form.value);
          this.router.navigateByUrl('/home');        
      } 
      form.reset();
    });
  }

}
