import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import {PostState} from './post.state';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostModalComponent } from './update-post-modal/update-post-modal.component';
import { ModalService } from './update-post-modal/modal.service';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ModalModule } from 'ngx-bootstrap';
import {BsModalRef} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    PostsComponent,
    UpdatePostModalComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      PostState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [ModalService, BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [UpdateFormComponent]
})
export class AppModule { }
