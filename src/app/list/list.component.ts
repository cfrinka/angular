import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  movies: any;

  constructor(private moviesService: MoviesService) {}
  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  ngOnInit(): void {
    this.moviesService.parameter$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((parameter) => {
        this.moviesService
          .listMovies()
          .pipe(take(1))
          .subscribe((movies) => {
            this.movies = movies.results;
          });
      });
  }
}
