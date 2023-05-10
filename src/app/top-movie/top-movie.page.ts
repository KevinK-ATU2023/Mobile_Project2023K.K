import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-movie',
  templateUrl: './top-movie.page.html',
  styleUrls: ['./top-movie.page.scss'],
})
export class TopMoviePage implements OnInit {

  constructor(private entertainService: EntertainmentService) { }

  movie: any = [];
  movie_poster = environment.posters;

  ngOnInit(): void {
    this.entertainService.get_top_movies().subscribe(data => {
      this.movie = data.results;
    });
  }

}
