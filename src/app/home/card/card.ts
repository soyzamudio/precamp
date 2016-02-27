import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {Category} from '../home';

@Component({
  selector: 'card',
  template: require('./card.html'),
  styles: [ require('./card.css') ],
})

export class Card {
  @Input()
  category: Category;

  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log(this.category);
  }

  goToCategory() {
    this.router.navigate([this.category.url]);
  }
}
