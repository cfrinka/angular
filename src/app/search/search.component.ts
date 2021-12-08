import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
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
      }
    }
  }
}
