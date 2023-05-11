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
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&query=${query}&page=1&include_adult=false`);
  }

  search_tv(query: any):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/tv?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&query=${query}&page=1&include_adult=false`);
  }

  get_popular_movies():Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&page=1`);
  }

  get_top_movies():Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&page=1`);
  }

  get_popular_tv():Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&page=2`);
  }

  get_top_tv():Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&page=1`);
  }
  
}
