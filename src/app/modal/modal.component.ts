import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output()
  modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeModal($event: any): void {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }
}
