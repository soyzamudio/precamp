import {Component, Inject} from 'angular2/core';
import {Router} from 'angular2/router';
import {JavaScriptProvider} from '../../javascript-provider';

@Inject({})

@Component({
  selector: 'while',
  template: require('./while.html'),
  styles: [ require('../challenges.css') ]
})

export class While {

  constructor(
    private provider: JavaScriptProvider,
    private router: Router
  ) {

  }
}
