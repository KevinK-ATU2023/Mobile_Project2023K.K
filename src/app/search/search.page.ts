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

  // user name variables
  user_first_name: string = "";
  user_last_name: string = "";

  // movie and tv show details array 
  movie: any = [];
  tv: any = [];

  // hide movie or tv variables
  hidden_movie: any = [];
  hidden_tv: any = [];

  // search placeholder
  input_placeholder: string = "";

  // toggle boolean variables
  movie_search_toggle: boolean = true;
  tv_search_toggle: boolean = false;
  
  // input variable 
  user_search: any = "";

  ngOnInit(): void {
    // change placeholder based on what mode it's on
    if (this.movie_search_toggle) {
      this.input_placeholder = "Search Movie";
    }
    if (this.tv_search_toggle) {
      this.input_placeholder = "Search TV";
    }
    this.get_user_name();
  }

  toggle_movie_tv() {
    // change boolean variables based on what side the toggle is on
    this.movie_search_toggle = !this.movie_search_toggle;
    this.tv_search_toggle = !this.tv_search_toggle;

    // show what mode it's on in console
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

    // placeholder change
    if (this.movie_search_toggle) {
      this.input_placeholder = "Search Movie";
    }
    if (this.tv_search_toggle) {
      this.input_placeholder = "Search TV";
    }
  }

  search_button_click() {
    // get tv or movie details based on what mode it's on
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

  // gets the user's full name
  async get_user_name() {
    await this.storage.create();
    this.user_first_name = await this.storage.get('first_name');
    this.user_last_name = await this.storage.get('last_name');
  }

  open_popular_movies(){
    this.navCtrl.navigateForward("/popular-movie");
  } // go to popular movies page

  open_top_movies(){
    this.navCtrl.navigateForward("/top-movie");
  } // go to top movies page

  open_popular_tv() {
    this.navCtrl.navigateForward("/popular-tv");
  } // go to popular tv-series page
  
  open_top_tv() {
    this.navCtrl.navigateForward("/top-tv");
  } // go to top tv-series page

  async open_in_browser(){
    await Browser.open({url: "https://www.themoviedb.org/"});
  } // open the api's homepage

}
