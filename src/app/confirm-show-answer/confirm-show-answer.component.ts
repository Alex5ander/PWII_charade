import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-show-answer',
  templateUrl: './confirm-show-answer.component.html',
  styleUrls: ['./confirm-show-answer.component.scss'],
})
export class ConfirmShowAnswerComponent implements OnInit {

  @Input() yes;
  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();
  }

}
