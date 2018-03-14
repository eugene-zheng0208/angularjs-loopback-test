import { Component } from '@angular/core';
import { LoopBackConfig, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, Post, AccessToken, PostApi } from "./sdk";
import { SocketConnection } from "./sdk/sockets/socket.connections";
import { SocketDriver } from "./sdk/sockets/socket.driver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PostApi, SocketConnection, SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams ]
})
export class AppComponent {
  title = "micro blog!";
  private post: Post = new Post();
  private posts: Post[];

  constructor(private postApi: PostApi){
    this.getPosts();
  }

  getPost(id: any): void{
    this.postApi.findById(id)
      .subscribe((post: Post) => {
        this.post = post;
        return this.post;
      })
  }

  getPosts(): void{
    this.postApi.find().subscribe((r: Post[]) => { 
      this.posts = r; 
      return this.posts; 
    });
  }

  createPost(post: Post): void {
    if(post.id){
      this.updatePost(post);
      return;
    }
    this.postApi.create(post)
      .subscribe((r: Post) => {
        this.getPosts();
        return r;
      });

  }

  deletePost(post: Post): void {
    this.postApi.deleteById(post.id).subscribe((r) => {
      this.getPosts();
    });
  }

  updatePost(post: Post): void {
    this.postApi.replaceById(post.id, post).subscribe((r) => {
      this.getPosts();
    });
  }

  selectPost(post: Post): void {
    this.post = {...post};
  }
 

}
