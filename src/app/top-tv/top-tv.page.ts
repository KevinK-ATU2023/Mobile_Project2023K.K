import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { log } from 'console';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-top-tv',
  templateUrl: './top-tv.page.html',
  styleUrls: ['./top-tv.page.scss'],
})
export class TopTvPage implements OnInit {

  constructor(private entertainService: EntertainmentService) { }
  
  // tv details array 
  tv: any = [];

  // set the tv variable as the results of the api return
  ngOnInit(): void {
    this.entertainService.get_top_tv().subscribe(data => {
      this.tv = data.results;
    });
  }

  // go to the top rated tv-series page in browser
  async open_in_browser(){
    await Browser.open({url: "https://www.themoviedb.org/tv/top-rated"});
  }

}
