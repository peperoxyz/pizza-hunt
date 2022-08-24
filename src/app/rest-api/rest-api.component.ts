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
  users: any;

  // Function untuk fetch data dari API
  loadUsers() {
    const headers = new HttpHeaders({ 'app-id': '63033943889b3aab444829f0' });
    const requestOptions = { headers: headers };

    this.http
      .get('https://dummyapi.io/data/v1/user', requestOptions)
      .subscribe((users: any) => {
        this.users = users.data;
      });
  }

  ngOnInit(): void {
    this.loadUsers();
  }
}
