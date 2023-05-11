import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';
import { log } from 'console';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.page.html',
  styleUrls: ['./popular-movie.page.scss'],
})
export class PopularMoviePage implements OnInit {

  constructor(private entertainService: EntertainmentService) { }

  movie: any = [];

  ngOnInit(): void {
    this.entertainService.get_popular_movies().subscribe(data => {
      this.movie = data.results;
    });
  }

  async open_in_browser() {
    await Browser.open({url: "https://www.themoviedb.org/movie"});
  }

}
