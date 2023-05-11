import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EntertainmentService } from '../Services/entertainment.service';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.page.html',
  styleUrls: ['./popular-tv.page.scss'],
})
export class PopularTvPage implements OnInit {

  constructor(private entertainService: EntertainmentService) { }

  // tv details array 
  tv: any = [];

  // set the tv variable as the results of the api return
  ngOnInit(): void {
    this.entertainService.get_popular_tv().subscribe(data => {
      this.tv = data.results;
    });
  }

  // go to the most popular tv-series page in browser
  async open_in_browser(){
    await Browser.open({url: "https://www.themoviedb.org/tv"});
  }

}
