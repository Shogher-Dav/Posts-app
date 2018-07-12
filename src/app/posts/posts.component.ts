import { Component, OnInit } from '@angular/core';
import {Store, Select } from '@ngxs/store';
import { PostState } from '../post.state';
import { Observable } from 'rxjs';
import {GetPost, DeletePost} from '../post.actions';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UpdateFormComponent} from '../update-form/update-form.component';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  bsModalRef: BsModalRef;

  @Select(PostState.posts) posts$: Observable<any>;
  constructor(private store: Store, private modalService: BsModalService) {
}
  ngOnInit() {
    this.store.dispatch(new GetPost());
  }
  public openModal(post) {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(UpdateFormComponent, {initialState: {
        post
      }});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  public delete(post) {
    this.store.dispatch(new DeletePost(post));
  }

}
