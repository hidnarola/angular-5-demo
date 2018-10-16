import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post/post.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {

  page_title = 'Add Post';
  addform_group: FormGroup;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, private fb: FormBuilder) { }

  ngOnInit() {

  }

  addPost(posted_data) {
    this.postService.AddPost(posted_data).subscribe(data => {
      this.router.navigate(['']);
    }
      , error => this.errorMessage = error)
  }
}
