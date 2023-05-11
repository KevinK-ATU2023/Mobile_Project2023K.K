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

  //user input variables
  user_first_input: string = "";
  user_last_input: string = "";

  // instructions string
  enter_message: string = "Please enter a username and password";

  // creates storage and goes to the next page when the user enters their name
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
  } // go to the search page
}
