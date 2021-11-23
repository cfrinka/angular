import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
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
    // console.log('search works');
    // console.log('chips in search component', this.chips);
    this.moviesService.chipsArray = this.chips;
    // console.log('chips array in service', this.moviesService.chipsArray);
    if (this.moviesService.chipsArray.length > 0) {
      // console.log('initiated list', this.moviesService.chipsArray);
      this.moviesService.listMovies().subscribe((movies: any) => {
        // console.log('inside subcription', this.movies);
        this.movies = movies.results;
        ListComponent.moviesFromSearch = this.movies;
        // console.log('should show only .results', this.movies);
      });
    }
  }
}
