import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  static searchText: string = '';
  movies: any;
  chipText: string = '';
  chips: string[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}
  addChip(chipText: string): void {
    this.chips.push(chipText);
    this.moviesService.chipsArray.push(chipText);
    this.chipText = '';
  }
  removeChip(chipText: string) {
    for (let i = 0; i < this.chips.length; i++) {
      if (this.chips[i] === chipText) {
        this.chips.splice(i, 1);
        this.moviesService.chipsArray.splice(i, 1);
      }
    }
  }
  searchMovies() {
    console.log('search called');
    this.moviesService.listMovies().subscribe((movies: any) => {
      this.movies = movies.results;
      this.moviesService.movieList = this.movies;
    });
  }
}
