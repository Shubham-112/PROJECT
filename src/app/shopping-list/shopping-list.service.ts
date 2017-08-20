import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";

export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>() ;
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('orange', 20)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
