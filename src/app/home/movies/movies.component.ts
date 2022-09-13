import { Component, OnInit } from '@angular/core';
import { Movie } from './../../model/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  // summary info
  moviesNumber: number = 123;
  averageRating: number = 3.4;
  bestMovie: string = 'King Lion';
  movieRating: number = 4.5;

  moviesList: Movie[] = [
    {
      title: 'King Lion',
      genres: ['animation', 'true story'],
      opinions: [],
      releaseDate: '2019-05-14',
      averageRating: 4.3,
      expanded: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
