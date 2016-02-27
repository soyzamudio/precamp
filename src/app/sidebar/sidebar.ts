import {Component} from 'angular2/core';

@Component({
  selector: 'sidebar',
  template: require('./sidebar.html'),
  styles: [ require('./sidebar.css') ]
})

export class Sidebar {
  sections: Object[];

  constructor() {
    this.sections = [
      {
        header: 'Meetups',
        subSections: [
          'By Location',
          'By Category'
        ]
      },
      {
        header: 'Meetups',
        subSections: [
          'By Location',
          'By Category'
        ]
      }
    ];
  }
}
