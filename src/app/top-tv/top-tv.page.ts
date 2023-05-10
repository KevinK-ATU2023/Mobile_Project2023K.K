import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../Services/entertainment.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-top-tv',
  templateUrl: './top-tv.page.html',
  styleUrls: ['./top-tv.page.scss'],
})
export class TopTvPage implements OnInit {

  constructor(private entertainService: EntertainmentService, private storage:Storage) { }

  tv: any = [];
  tv_poster = environment.posters;

  ngOnInit(): void {
    this.entertainService.get_top_tv().subscribe(data => {
      this.tv = data.results;
    });
  }

}
