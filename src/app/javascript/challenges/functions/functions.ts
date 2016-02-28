import {Component, Inject} from 'angular2/core';
import {Router} from 'angular2/router';
import {JavaScriptProvider} from '../../javascript-provider';

@Inject({})

@Component({
  selector: 'functions',
  template: require('./functions.html'),
  styles: [ require('../challenges.css') ]
})

export class Functions {

  constructor(
    private provider: JavaScriptProvider,
    private router: Router
  ) {

  }
}
