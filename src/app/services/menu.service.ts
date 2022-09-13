import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../model/user';
import { Category } from '../model/category';
import { Dish } from '../model/dish';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private BASE_URL = 'http://localhost:8080/api/menu';

  constructor(private http: HttpClient) {}

  getDishCategories() {
    return this.http.get<Category[]>(this.BASE_URL + '/categories');
  }
  getCategory(categoryName: string) {
    return this.http.get<Category[]>(
      this.BASE_URL + `/categories?categoryName=${categoryName}`
    );
  }

  getPopularDishesForCategory(categoryName: string) {
    return this.http.get<Dish[]>(
      this.BASE_URL + `/dishes?categoryName=${categoryName}`
    );
  }

  getUsers() {
    return this.http.get<UserDTO[]>(this.BASE_URL);
  }
}
