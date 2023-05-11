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
  
  tv: any = [];
  tv_id: string = "";

  ngOnInit(): void {
    this.entertainService.get_top_tv().subscribe(data => {
      this.tv = data.results;
    });
  }

  async open_in_browser(){
    await Browser.open({url: "https://www.themoviedb.org/tv/top-rated"});
  }

}
