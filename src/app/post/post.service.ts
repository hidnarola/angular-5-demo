import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PostService {

  constructor(private http: Http) { }
  api_url = 'https://jsonplaceholder.typicode.com/';

  PostList() {
    return this.http.get(this.api_url + 'posts')
      .map((response: Response) => response.json())
  }

  AddPost(posted_data) {
    return this.http.post(this.api_url + 'posts', posted_data)
      .map((response: Response) => response.json())
  }

  EditPost(id) {
    return this.http.get(this.api_url + 'posts/' + id)
      .map(res => {
        return res;
      });
  }

  UpdatePost(posted_data, id) {
    console.log(posted_data);
    return this.http.put(this.api_url + 'posts/' + id, posted_data)
      .map((response: Response) => response.json())
  }

  DeletePost(id) {
    return this.http.delete(this.api_url + id)
      .map((response: Response) => response.json())
  }

}
