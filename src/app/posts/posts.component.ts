import { Component, OnInit } from '@angular/core';
import {Store, Select } from '@ngxs/store';
import { PostState } from '../post.state';
import { Observable } from 'rxjs';
import {GetPost, DeletePost} from '../post.actions';
import { ModalService } from '../update-post-modal/modal.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Select (PostState.posts) posts$: Observable<any>;
  // public isOpen = false;

  constructor(private store: Store, private modal: ModalService) {
  }

  ngOnInit() {
    this.store.dispatch(new GetPost());
  }
  public openModal() {
    this.modal.open();
  }
  public delete(post) {
    this.store.dispatch(new DeletePost(post));
  }

}
