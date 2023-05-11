import { Component, OnInit,} from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
import { log } from 'console';
import { NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private storage:Storage, private navCtrl: NavController, private entertainService: EntertainmentService) {}

  user_first_name: string = "";
  user_last_name: string = "";

  movie: any = [];
  tv: any = [];

  hidden_movie: any = [];
  hidden_tv: any = [];

  input_placeholder: string = "";

  movie_search_toggle: boolean = true;
  tv_search_toggle: boolean = false;
  
  user_search: any = "";

  ngOnInit(): void {
    if (this.movie_search_toggle) {
      this.input_placeholder = "Search Movie";
    }
    if (this.tv_search_toggle) {
      this.input_placeholder = "Search TV";
    }
    this.get_user_name();
  }

  toggle_movie_tv() {
    this.movie_search_toggle = !this.movie_search_toggle;
    this.tv_search_toggle = !this.tv_search_toggle;

    if (this.movie_search_toggle) {
      console.log("movie search activated");
    }
    else {
      console.log("movie search deactivated");
    }
    if (this.tv_search_toggle) {
      console.log("tv search activated");
    }
    else {
      console.log("tv search deactivated");
    }

    if (this.movie_search_toggle) {
      this.input_placeholder = "Search Movie";
    }
    if (this.tv_search_toggle) {
      this.input_placeholder = "Search TV";
    }
  }

  search_button_click() {
    if (this.movie_search_toggle) {
      this.entertainService.search_movies(this.user_search).subscribe(data => {
        this.movie = data.results;
        this.hidden_movie = false;
        this.hidden_tv = true;
      });
    }
    if (this.tv_search_toggle) {
      this.entertainService.search_tv(this.user_search).subscribe(data => {
        this.tv = data.results;
        this.hidden_movie = true;
        this.hidden_tv = false;
      });
    }
  }

  async get_user_name() {
    await this.storage.create();
    this.user_first_name = await this.storage.get('first_name');
    this.user_last_name = await this.storage.get('last_name');
  }

  open_popular_movies(){
    this.navCtrl.navigateForward("/popular-movie");
  }

  open_top_movies(){
    this.navCtrl.navigateForward("/top-movie");
  }

  open_popular_tv() {
    this.navCtrl.navigateForward("/popular-tv");
  }
  
  open_top_tv() {
    this.navCtrl.navigateForward("/top-tv");
  }

  async open_in_browser(){
    await Browser.open({url: "https://www.themoviedb.org/"});
  }

}
