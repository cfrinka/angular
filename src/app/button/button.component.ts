import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  @Input() recievedChips: string[] = [];
  @Input() buttonTitle: string = '';

  ngOnInit(): void {}
  searchMovies() {
    if (this.recievedChips.length > 0) {
      this.moviesService.parameter$.next(this.recievedChips.join(' '));
    } else {
      this.moviesService.parameter$.next('');
    }
  }
}
