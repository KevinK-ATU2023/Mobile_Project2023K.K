import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  current_weather:any = [];

  constructor(private weather:WeatherService) {}

  ngOnInit() {
      this.weather.get_current_weather().subscribe(data => {
        this.current_weather = data.current_weather;
      })
  }

}
