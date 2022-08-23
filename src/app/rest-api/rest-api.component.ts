import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css'],
})
export class RestApiComponent implements OnInit {
  constructor(private http: HttpClient) {}

  // Define variabel posts
  posts: any;

  // Function untuk fetch data dari API
  loadPostsDummy() {
    const headers = new HttpHeaders({ 'app-id': '63033943889b3aab444829f0' });
    const requestOptions = { headers: headers };

    this.http
      .get('https://dummyapi.io/data/v1/user', requestOptions)
      .subscribe((posts: any) => {
        console.log(posts);
        this.posts = posts.data;
      });
  }

  ngOnInit(): void {
    this.loadPostsDummy();
  }
}
