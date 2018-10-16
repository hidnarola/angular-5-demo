import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { PostService } from './post.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as _ from 'underscore';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post_list;
  pages: any = {};
  pagedItems: any[];

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, private pageService: PageService) { }

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    this.postService.PostList().subscribe(res => {
      this.post_list = res;
      this.setPage(1);
    });
  }

  deletePost(id) {
    this.postService.DeletePost(id).subscribe(res => {
      // this.router.navigate(['']);
      this.getPostList();
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pages.totalPages) {
      return;
    }
    // get pager object from service
    this.pages = this.pageService.getPages(this.post_list.length, page);
    // get current page of items
    this.pagedItems = this.post_list.slice(this.pages.startIndex, this.pages.endIndex + 1);
  }

}
