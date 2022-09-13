import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/data/categories';
import { DISHES } from 'src/app/data/dishes';
import { Category } from 'src/app/model/category';
import { Dish } from 'src/app/model/dish';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
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
export class MenuListComponent implements OnInit {
  expandedElement: PeriodicElement | null;

  categoriesColumnToDisplay = ['img', 'name', 'popularity', 'description'];
  columnsToDisplayWithExpand = [...this.categoriesColumnToDisplay, 'expand'];

  dishesColumnsToDisplay = [
    'dish-image',
    'name',
    'ingredients',
    'cost',
    'more',
  ];

  categoriesDataSource: Category[] = CATEGORIES;
  dishesDataSource: Dish[] = DISHES;

  constructor() {}

  ngOnInit(): void {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
