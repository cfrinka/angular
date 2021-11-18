import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  chipsArray: string[] = [];
  movieList: string[] = [];
  constructor(private http: HttpClient) {}

  listMovies(): Observable<any> {
    if (this.chipsArray.length > 0) {
      let temp = this.http.get(
        `https://api.themoviedb.org/3/search/movie?&api_key=feb6f0eeaa0a72662967d77079850353&query=${this.chipsArray.join(
          ' '
        )}`
      );
      console.log('temp', temp);
      return temp;
    }
    return of('');
  }
}
