import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterActive} from '../directives/router-active';
import {JavaScriptProvider} from './javascript-provider';

@Component({
  selector: 'javascript',
  template: require('./javascript.html'),
  styles: [ require('./javascript.css') ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ]
})

export class JavaScript {
  challenges: Object[];

  constructor(private provider: JavaScriptProvider) {
    this.challenges = [
      {
        name: 'Getting Started',
        url: 'Start',
        description: 'Time to become a coding champ'
      },
      {
        name: 'Functions',
        url: 'Functions',
        description: 'This challenge introduces functions, why we use them and how to use them.'
      },
      {
        name: '"For" Loops',
        url: 'For',
        description: 'For loops are one of the most commonly used bits of code.'
      },
      {
        name: '"While" Loops',
        url: 'While',
        description: '"While" loops are like "For" lops, only they don\'t need a counter!'
      }
    ];
  }

  checkCompleted(index: number): boolean {
    return this.provider[`challenge${index + 1}Complete`];
  }
}
