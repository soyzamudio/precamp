import {Component} from 'angular2/core';

@Component({
  selector: 'test',
  template: require('./test.html')
})

export class Test {
  constructor() {

  }

  ngOnInit() {
    console.log('This is a test');
  }
}
