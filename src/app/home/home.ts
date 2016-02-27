import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Card} from './card/card';

@Component({
  selector: 'home',  // <home></home>
  directives: [ ...FORM_DIRECTIVES, Card ],
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {
  categories: Category[];

  constructor() {
    this.categories = [
      {
        name: 'JavaScript',
        url: 'Home',
        image: 'assets/img/javascript.jpg'
      },
      {
        name: 'HTML',
        url: 'About',
        image: 'assets/img/html.jpg'
      },
      {
        name: 'CSS',
        url: 'Test',
        image: 'assets/img/css.jpg'
      },
      {
        name: 'Ruby',
        url: 'Test',
        image: 'assets/img/ruby.jpg'
      }
    ];
  }

  ngOnInit() {

  }

}

export interface Category {
  name: string;
  url: string;
  image: string;
}