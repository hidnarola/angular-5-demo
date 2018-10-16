import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post/post.service';
import { PageService } from './services/page.service';
import { AddPostComponent } from './post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
// import { DeletePostComponent } from './delete-post/delete-post.component';

const appRoutes: Routes = [
  { path: '', component: PostComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'edit-post/:id', component: EditPostComponent },
  // { path: 'delete-post/:id', component: DeletePostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    EditPostComponent,
    // DeletePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
