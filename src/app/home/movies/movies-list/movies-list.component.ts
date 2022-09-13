import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Movie } from './../../../model/movies';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatAccordion } from '@angular/material/expansion';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { StringToCamelCasePipe } from 'src/app/data/string-to-camel-case.pipe';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class MoviesListComponent implements OnInit {
  @Input() movies: Movie[] = [];

  camelCaseBuilder: StringToCamelCasePipe = new StringToCamelCasePipe();

  displayedColumns = ['Title', 'Genres', 'Release Date', 'Average Rating'];
  dataSource: MatTableDataSource<Movie>;
  columnsToDisplayWithExpand = [
    ...this.displayedColumns.map((column) =>
      this.camelCaseBuilder.transform(column)
    ),
    'expand',
  ];
  expandedElement: Movie | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() {}
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.movies);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  toggleRow(element: { expanded: boolean }) {
    // Uncommnet to open only single row at once
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = false;
    // })
    element.expanded = !element.expanded;
  }
  manageAllRows(flag: boolean) {}
}
