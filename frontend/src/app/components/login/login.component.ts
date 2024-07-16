import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../../owner.service';
import { catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private http: HttpClient,private router: Router,private ownerService:OwnerService) {}

  onSubmit() {
    const owner = { email: this.email, password: this.password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:9090/api/users/get_user', owner, { headers, responseType: 'text' })
      .subscribe(
        response => {
          alert(response); 
          this.ownerService.addEmail(owner.email);
          this.router.navigate(['/dashboard']);
        },
        error => {
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password';
          } else {
            this.errorMessage = 'An error occurred: ' + error.message;
          }
        }
      );
  }
}
