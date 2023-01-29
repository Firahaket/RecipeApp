import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl =
    'https://api.spoonacular.com/recipes/random?apiKey=ac93cf7fc90b454bbaa980662ba28c73&number=10';

  constructor(private http: HttpClient) {}

  getRecipe() {
    return this.http.get(this.apiUrl);
  }

  getTag2() {
    return this.http.get(
      'https://api.spoonacular.com/recipes/random?apiKey=ac93cf7fc90b454bbaa980662ba28c73&number=10&tags=side dish'
    );
  }
  getTag1() {
    return this.http.get(
      'https://api.spoonacular.com/recipes/random?apiKey=ac93cf7fc90b454bbaa980662ba28c73&number=10&tags=main course'
    );
  }

  getRecipeById(id: any): Observable<any> {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=ac93cf7fc90b454bbaa980662ba28c73`;
    return this.http.get(url).pipe();
  }
}
