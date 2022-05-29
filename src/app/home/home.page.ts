import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Charade, CharadeService } from '../charade.service';
import { ConfirmShowAnswerComponent } from '../confirm-show-answer/confirm-show-answer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  charade: Charade[];
  answer = '';
  constructor(private service: CharadeService, private modal: ModalController) {}
  requestCharade() {
    this.answer = '';
    this.service.get().subscribe((observable: Charade[]) => {
      this.charade = observable;
    });
  }

  showAnsewer() {
    this.answer = this.charade[0].resposta;
    this.modal.dismiss();
  }

  async canShowAnswer() {
    // this.answer = this.charade[0].resposta;
    const modal = await this.modal.create({
      component: ConfirmShowAnswerComponent,
      componentProps: { yes: () => this.showAnsewer() }
    });
    modal.present();
  }

  ngOnInit(): void {
    this.requestCharade();
  }
}
