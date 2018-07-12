import {Component, Input, OnInit} from '@angular/core';
import {PostState} from '../post.state';
import {Observable} from 'rxjs';
import {Store, Select} from '@ngxs/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IPost} from '../core/interfaces/IPost';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UpdatePost} from '../post.actions';


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  @Select(PostState.posts) posts$: Observable<any>;
  @Input() public post: IPost;
  public posts: IPost[] = this.store.selectSnapshot(PostState.posts);
  postForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder, public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      title: [this.post.title, Validators.required],
      body: [this.post.body, Validators.required]
    });
  }

  update(post) {
    this.store.dispatch(new UpdatePost(post));
  }
}
