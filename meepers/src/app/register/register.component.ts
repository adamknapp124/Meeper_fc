import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  onCreateUser(user: { userName: string; email: string; password: string }) {
    this.http
      .post('http://localhost:3000/users.json', user)
      .subscribe((res) => {
        console.log(res);
      });
    console.log(user);
  }
}
