import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor( private shoppingService: ShoppingService ) { }

  ngOnInit() {
  }

  addIngredients() {
    for (let ingredient of this.recipe.ingredients) {
      this.shoppingService.addIngredient(ingredient);
    }
  }

}
