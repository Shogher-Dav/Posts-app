import {Injectable} from '@angular/core';
import { UpdatePostModalComponent } from './update-post-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modal: UpdatePostModalComponent;
  constructor() {}
  public registerModal(modalObject: UpdatePostModalComponent): void {
    this.modal = modalObject;
    console.log(this.modal);
  }
  public open(): void {
    this.modal.isOpen = true;

  }
  public close(): void {
    this.modal.isOpen = false;

  }

}
