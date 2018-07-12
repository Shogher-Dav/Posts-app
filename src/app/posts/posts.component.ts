import { Component, OnInit } from '@angular/core';
import {Store, Select } from '@ngxs/store';
import { PostState } from '../post.state';
import { Observable } from 'rxjs';
import {GetPost, DeletePost} from '../post.actions';
import { ModalService } from '../update-post-modal/modal.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UpdatePostModalComponent} from '../update-post-modal/update-post-modal.component';
import {UpdateFormComponent} from '../update-form/update-form.component';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  bsModalRef: BsModalRef;

  @Select(PostState.posts) posts$: Observable<any>;

  // public isOpen = false;

  constructor(private store: Store, private modalService: BsModalService) {
}
  ngOnInit() {
    this.store.dispatch(new GetPost());
  }
  public openModal(post) {
   // this.modal.open();
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
