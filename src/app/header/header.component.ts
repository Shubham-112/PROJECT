import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipesSelected = new EventEmitter<{selected: string}>();
  @Output() shoppingSelected = new EventEmitter<{selected: string}>();
  constructor() { }
  ngOnInit() {
  }
  onRecipesSelected() {
    this.recipesSelected.emit({selected: 'recipes'});
  }

  onShoppingSelected() {
    this.shoppingSelected.emit({selected: 'shopping'});
  }

}
