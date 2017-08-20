import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 'recipes';
  onShoppingSelected(route: {selected: string}) {
    this.selected = route.selected;
  }

  onRecipesSelected(route: {selected: string}) {
    this.selected = route.selected;
  }

}
