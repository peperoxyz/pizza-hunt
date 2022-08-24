import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  postsOfUsers: any;
  posts: any;
  userId: string = '';

  // function untuk fetch data postingan dari API
  loadPostsOfUser() {
    const headers = new HttpHeaders({ 'app-id': '63033943889b3aab444829f0' });
    const requestOptions = { headers: headers };

    this.http
      .get(
        `https://dummyapi.io/data/v1/user/${this.userId}/post`,
        requestOptions
      )
      .subscribe((pou: any) => {
        this.postsOfUsers = pou.data;
        this.posts = pou;
      });
  }

  ngOnInit() {
    // Get the user id from the current route
    const routeParams = this.route.snapshot.paramMap;
    this.userId = String(routeParams.get('userId'));

    this.loadPostsOfUser();
  }
}
