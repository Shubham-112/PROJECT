import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'a sweet dish',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Momo',
      'It\'s momo time',
      'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg',
      [
        new Ingredient('Vegetables', 15),
        new Ingredient('Atta', 2)
      ])
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
