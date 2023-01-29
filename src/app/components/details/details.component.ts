import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { CountService } from 'src/app/services/count.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  recipe: any;
  error: any;
  toggle: boolean = false;
  counter: number = 1;
  sum: number = 0;
  faHeart = faHeart;
  favourite: number;

  constructor(
    private service: RecipesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private countService: CountService
  ) {}

  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnInit(): void {
    this.loadRecipe();
    this.favourite = this.sum;
  }
  loadRecipe() {
    const recipeId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.service.getRecipeById(recipeId).subscribe(
      (data) => (this.recipe = data),
      (error) => (this.error = error)
    );
  }

  goBack(): void {
    this.location.back();
  }
  isFavourite() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.sum += this.counter;
    } else {
      this.sum -= this.counter;
    }
  }

  makeFavourite(recipe: any): void {
    this.countService.addToFavourite(recipe);
  }
}
