import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.page.html',
  styleUrls: ['./popular-movie.page.scss'],
})
export class PopularMoviePage implements OnInit {

  constructor(private entertainService: EntertainmentService) { }

  // movie details array 
  movie: any = [];

  // set the movie variable as the results of the api return
  ngOnInit(): void {
    this.entertainService.get_popular_movies().subscribe(data => {
      this.movie = data.results;
    });
  }

  // go to the most popular movies page in browser
  async open_in_browser() {
    await Browser.open({url: "https://www.themoviedb.org/movie"});
  }

}
