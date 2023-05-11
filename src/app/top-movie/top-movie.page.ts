import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-top-movie',
  templateUrl: './top-movie.page.html',
  styleUrls: ['./top-movie.page.scss'],
})
export class TopMoviePage implements OnInit {

  constructor(private entertainService: EntertainmentService) { }

  movie: any = [];

  ngOnInit(): void {
    this.entertainService.get_top_movies().subscribe(data => {
      this.movie = data.results;
    });
  }

  async open_in_browser(){
    await Browser.open({url: "https://www.themoviedb.org/movie/top-rated"});
  }

}
