import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  movies: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.listMovies().subscribe((movies: any) => {
      this.movies = movies.results;
      this.moviesService.movieList = this.movies;
      console.log('list', this.movies);
    });
  }
}
