import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
@Injectable()
export class TestComponentComponent implements OnInit {
  constructor(private http: HttpClient) {}

  candies: any;
  ngOnInit() {}
  getJokes() {
    this.http
      .get('http://localhost:3000/get/joke')
      .subscribe((data) => (this.candies = data));
  }
}
