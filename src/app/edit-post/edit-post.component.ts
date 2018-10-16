import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editform_group: FormGroup;
  post: any;
  page_title = 'Edit Post';
  id = 0;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, private fb: FormBuilder) {

  }

  updatePost = function (posted_data) {
    console.log(posted_data);
    this.id = posted_data.id;
    this.postService.UpdatePost(posted_data, this.id).subscribe(data => {
      this.router.navigate(['']);
    }
      , error => this.errorMessage = error)
  }

  ngOnInit() {
    this.getPostData();
  }

  getPostData() {
    this.route.params.subscribe(params => {
      this.post = this.postService.EditPost(params['id']).subscribe(res => {
        this.post = JSON.parse(res['_body']);
        if (this.post['id'] > 0) {
          this.id = this.post['id'];
        }
      });
    });
  }


}
