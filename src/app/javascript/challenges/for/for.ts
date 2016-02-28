import {Component, Inject} from 'angular2/core';
import {Router} from 'angular2/router';
import {JavaScriptProvider} from '../../javascript-provider';

@Inject({})

@Component({
  selector: 'for',
  template: require('./for.html'),
  styles: [ require('../challenges.css') ]
})

export class For {

  constructor(
    private provider: JavaScriptProvider,
    private router: Router
  ) {

  }
}
