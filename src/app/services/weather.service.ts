import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  get_current_weather(): Observable<any>{
    return this.http.get(`${environment.base_url}/current.json?key=${environment.api_key}&q=paris`);
  }
  
}
