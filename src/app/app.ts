import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {Home} from './home/home';
import {Menu} from './menu/menu';
import {Sidebar} from './sidebar/sidebar';

@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, Menu, Sidebar ],
  pipes: [],
  styles: [ require('./app.css') ],
  template: require('./app.html')
})

@RouteConfig([
  { path: '/', component: Home, name: 'Home'},
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', loader: () => require('es6-promise!./about/about')('About'), name: 'About' },
  { path: '/test', loader: () => require('es6-promise!./test/test')('Test'), name: 'Test' },
  { path: '/**', redirectTo: ['Home'] }
])

export class App {
  constructor() {

  }
}
