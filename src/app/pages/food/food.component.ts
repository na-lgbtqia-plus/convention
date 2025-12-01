import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.sass'
})
export class FoodComponent {
  language: 'en' | 'fr' = 'en';

  setLanguage(lang: 'en' | 'fr') {
    this.language = lang;
  }
}
