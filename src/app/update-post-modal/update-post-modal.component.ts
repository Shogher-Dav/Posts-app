import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-update-post-modal',
  templateUrl: './update-post-modal.component.html',
  styleUrls: ['./update-post-modal.component.scss']
})
export class UpdatePostModalComponent implements OnInit {

  public isOpen = false;

  constructor(private modal: ModalService) { }

  ngOnInit() {
    this.modal.registerModal(this);
  }
  closeModal() {
    this.modal.close();
  }

}
