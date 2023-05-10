import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit  {

  constructor(private entertainService: EntertainmentService) {}

  movie: any = [];
  movie_poster = environment.posters;

  ngOnInit(): void {
      this.entertainService.get_popular_movies().subscribe(data => {
        
      });
  }
  
  
}
