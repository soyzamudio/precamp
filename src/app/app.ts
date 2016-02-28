import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {Home} from './home/home';
import {Menu} from './menu/menu';
import {Sidebar} from './sidebar/sidebar';

import {JavaScript} from './javascript/javascript';
import {JavaScriptProvider} from './javascript/javascript-provider';
import {Start} from './javascript/challenges/start/start';
import {Functions} from './javascript/challenges/functions/functions';
import {For} from './javascript/challenges/for/for';
import {While} from './javascript/challenges/while/while';

@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS, JavaScriptProvider ],
  directives: [ ...ROUTER_DIRECTIVES, Menu, Sidebar ],
  pipes: [],
  styles: [ require('./app.css') ],
  template: require('./app.html')
})

@RouteConfig([
  { path: '/', component: Home, name: 'Home'},

  { path: '/about', loader: () => require('es6-promise!./about/about')('About'), name: 'About' },
  { path: '/test', loader: () => require('es6-promise!./test/test')('Test'), name: 'Test' },

  { path: '/javascript', loader: () => require('es6-promise!./javascript/javascript')('JavaScript'), name: 'JavaScript'},
  { path: '/javascript/start', loader: () => require('es6-promise!./javascript/challenges/start/start')('Start'), name: 'Start'},
  { path: '/javascript/functions', loader: () => require('es6-promise!./javascript/challenges/functions/functions')('Functions'), name: 'Functions'},
  { path: '/javascript/for', loader: () => require('es6-promise!./javascript/challenges/for/for')('For'), name: 'For'},
  { path: '/javascript/while', loader: () => require('es6-promise!./javascript/challenges/while/while')('While'), name: 'While'},

  { path: '/**', redirectTo: ['Home'] }
])

export class App {
  constructor() {

  }
}
