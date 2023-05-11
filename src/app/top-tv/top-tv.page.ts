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

  i: number = 0;

  tv: any = [];
  tv_number: number = 1;

  tv_id: string[] = [];  
  tv_poster = environment.posters;

  ngOnInit(): void {
    this.entertainService.get_top_tv().subscribe(data => {
      this.tv = data.results;
      while(this.i < this.tv.length){
        this.tv_id[this.i] = data.results[this.i].id;
        this.i++;
        this.tv_number++;
      }
      console.log(this.tv_id);
    });
  }

  tv_number_increment(): number {
    this.tv_number = 0;
    return this.tv_number+=1;
  }

  async save_tv_id() {
    // await this.storage.create();
    // await this.storage.set("ID", this.tv_id);
  }

}
