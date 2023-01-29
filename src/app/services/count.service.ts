import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  public dataList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  public recipeList: any = [];

  constructor() {}
  getData() {
    return this.dataList.asObservable();
  }

  setData(recipe: any) {
    this.recipeList.push(...recipe);
    this.dataList.next(recipe);
  }

  addToFavourite(recepti: any) {
    this.recipeList.push(recepti);
    this.dataList.next(this.recipeList);
    this.getTotal();
    console.log(this.recipeList);
  }

  getTotal() {
    let allT = 0;
    this.recipeList.map((a: any) => {
      allT += a.total;
    });
  }
}
