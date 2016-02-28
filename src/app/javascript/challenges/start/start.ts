import {Component, Inject} from 'angular2/core';
import {Router} from 'angular2/router';
import {JavaScriptProvider} from '../../javascript-provider';

@Inject({})

@Component({
  selector: 'start',
  template: require('./start.html'),
  styles: [ require('../challenges.css') ]
})

export class Start {

  constructor(
    private provider: JavaScriptProvider,
    private router: Router
  ) {

  }
}
