import { HttpClient } from '@angular/common/http';
import { Injectable, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EntertainmentService {

  constructor(private http:HttpClient) { }

  search_movies(query: any):Observable<any> {
    return this.http.get(`${environment.base_url}/search/movie?api_key=${environment.api_key}&language=en-US&query=${query}&page=1&include_adult=false`);
  }

  search_tv(query: any):Observable<any> {
    return this.http.get(`${environment.base_url}/search/tv?api_key=${environment.api_key}&language=en-US&query=${query}&page=1&include_adult=false`);
  }

  get_popular_movies():Observable<any> {
    return this.http.get(`${environment.base_url}/movie/popular?api_key=${environment.api_key}&language=en-US&page=1`);
  }

  get_top_movies():Observable<any> {
    return this.http.get(`${environment.base_url}/movie/top_rated?api_key=${environment.api_key}&language=en-US&page=1`);
  }

  get_popular_tv():Observable<any> {
    return this.http.get(`${environment.base_url}/tv/popular?api_key=${environment.api_key}&language=en-US&page=1`);
  }

  get_top_tv():Observable<any> {
    return this.http.get(`${environment.base_url}/tv/top_rated?api_key=${environment.api_key}&language=en-US&page=1`);
  }
}
