import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private navCtrl: NavController, private storage:Storage) {}

  user_first_input: string = "";
  user_last_input: string = "";

  enter_message: string = "Please enter a username and password";

  async sign_up() {
    if (this.user_first_input != "" && this.user_last_input != "") {
      await this.storage.create();
      await this.storage.set("first_name", this.user_first_input);
      await this.storage.set("last_name", this.user_last_input);
      this.open_search_page();
    }
  }

  open_search_page() {
    this.navCtrl.navigateForward("/search");
  }
}
