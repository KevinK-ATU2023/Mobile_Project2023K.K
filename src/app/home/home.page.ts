import { Component, Input, OnInit,} from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';
import { log } from 'console';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(private navCtrl: NavController,private entertainService: EntertainmentService) {}

  movie: any = [];
  tv: any = [];

  hidden_movie: any = [];
  hidden_tv: any = [];

  input_placeholder: string = "";

  movie_search_toggle: boolean = true;
  tv_search_toggle: boolean = false;

  poster = environment.posters;
  
  user_search: any = "";

  ngOnInit(): void {
    if (this.movie_search_toggle) {
      this.input_placeholder = "Search Movie";
    }
    if (this.tv_search_toggle) {
      this.input_placeholder = "Search TV";
    }
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
        console.log(this.tv);
      });
    }
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
  
  
}
