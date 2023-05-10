import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';
import { log } from 'console';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.page.html',
  styleUrls: ['./popular-movie.page.scss'],
})
export class PopularMoviePage implements OnInit {

  constructor(private navCtrl: NavController, private entertainService: EntertainmentService) { }

  movie: any = [];
  movie_poster = environment.posters;

  ngOnInit(): void {
    this.entertainService.get_popular_movies().subscribe(data => {
      this.movie = data.results;
      console.log(this.movie);
    });
  }

  open_search() {
    this.navCtrl.navigateForward("/home");
  }

}
