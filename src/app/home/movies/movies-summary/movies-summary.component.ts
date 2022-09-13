import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-summary',
  templateUrl: './movies-summary.component.html',
  styleUrls: ['./movies-summary.component.css'],
})
export class MoviesSummaryComponent implements OnInit {
  @Input() moviesNumber: number = 0;
  @Input() averageRating: number = 0;
  @Input() bestMovie: string = '';
  @Input() movieRating: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
