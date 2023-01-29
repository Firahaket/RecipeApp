import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  searchK: string = '';
  rec: any;
  recipes: any = [];
  public totalItem: number = 0;
  public active: number[] = [];

  onClick1() {
    this.service.getTag1().subscribe((res) => {
      this.rec = res;
      this.recipes = this.rec.recipes;
      console.log(this.rec.recipes);
    });
  }
  onClick() {
    this.service.getTag2().subscribe((res) => {
      this.rec = res;
      this.recipes = this.rec.recipes;
    });
  }

  constructor(
    private service: RecipesService,
    private router: Router,
    private countService: CountService
  ) {}

  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnInit(): void {
    this.countService.getData().subscribe((res) => {
      this.totalItem = res.length;
    });

    this.service.getRecipe().subscribe((res) => {
      this.rec = res;
      this.recipes = this.rec.recipes;
    });

    this.countService.search.subscribe((val: any) => {
      this.searchK = val;
    });

    this.rec.forEach((a: any) => {
      Object.assign(a, { quantity: 1 });
    });
  }

  makeFavourite(recipe: any): void {
    this.countService.addToFavourite(recipe);
  }

  favouriteAdded(index: number): void {
    if (this.active.includes(index)) {
      this.active = this.active.filter((item) => item !== index);
    } else {
      this.active.push(index);
    }
  }
}
