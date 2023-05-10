import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';
import { log } from 'console';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit  {

  constructor(private navCtrl: NavController,private entertainService: EntertainmentService) {}

  movie: any = [];
  movie_poster = environment.posters;
  
  entertain_input: any;

  ngOnInit(): void {
      this.entertainService.search_movies(this.entertain_input).subscribe(data => {
        this.movie = data.results;
      });
  }

  open_popular_movies(){
    this.navCtrl.navigateForward("/popular-movie");
  }

  open_top_movies(){
    this.navCtrl.navigateForward("/top-movie");
  }
  
  
}
