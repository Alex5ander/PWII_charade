import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
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
  constructor(private service: CharadeService, private modal: ModalController, private loadingController: LoadingController) {}
  async requestCharade() {
    const loading = await this.loadingController.create({
      message: 'Carregando a charada...',
      duration: 2000
    });

    loading.present();

    this.answer = '';
    this.service.get().subscribe(async (observable: Charade[]) => {
      await loading.dismiss();
      this.charade = observable;
    }, async (err) => {
      await loading.dismiss();
      alert(JSON.stringify(err, null, 2));
    });

  }

  async showAnsewer() {
    await this.modal.dismiss();
    this.answer = this.charade[0].resposta;
  }

  async canShowAnswer() {
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
