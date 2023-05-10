import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EntertainmentService } from '../Services/entertainment.service';


@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.page.html',
  styleUrls: ['./popular-tv.page.scss'],
})
export class PopularTvPage implements OnInit {

  constructor(private entertainService: EntertainmentService) { }

  tv: any = [];
  tv_poster = environment.posters;

  ngOnInit(): void {
    this.entertainService.get_popular_tv().subscribe(data => {
      this.tv = data.results;
    });
  }

}
