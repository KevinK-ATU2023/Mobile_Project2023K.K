import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EntertainmentService {

  constructor(private http:HttpClient) { }

  search_movies(query: any):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&query=${query}&page=1&include_adult=false`);
  } // gets the movie search results based on the query

  search_tv(query: any):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/tv?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&query=${query}&page=1&include_adult=false`);
  } // gets the tv show search results based on the query

  get_popular_movies():Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&page=1`);
  } // the current most popular movies

  get_top_movies():Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&page=1`);
  } // the most top rated movies

  get_popular_tv():Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&page=2`);
  } // the current most popular tv shows

  get_top_tv():Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=1257a30638dd5014e06b9a45071186ca&language=en-US&page=1`);
  } // the most top rated tv shows
  
}
