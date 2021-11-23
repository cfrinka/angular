import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();
  static moviesFromSearch: any = [];

  movies: any;

  constructor(private moviesService: MoviesService) {}
  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  ngOnInit(): void {
    this.moviesService
      .listMovies()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((movies) => {
        console.log('movies on init', movies);
        this.movies = movies;
      });
  }
}
