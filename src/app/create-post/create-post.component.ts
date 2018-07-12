import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreatePost} from '../post.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public postForm: FormGroup;


  constructor( private store: Store, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required , Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)] ]
    });
  }
  ngOnInit() {
  }
  createPost() {
    if ( this.postForm.valid ) {
      this.store.dispatch(new CreatePost(this.postForm.getRawValue()));
      this.postForm.reset();
     // alert('Sucsessfully created');
    }
  }

}

