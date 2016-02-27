import {Component} from 'angular2/core';
import {RouterActive} from '../directives/router-active';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'menu', // <menu></menu>
  template: require('./menu.html'),
  styles: [ require('./menu.css') ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ]
})

export class Menu {
  constructor() {

  }

  ngOnInit() {
    console.log('This is the menu');
  }
}
