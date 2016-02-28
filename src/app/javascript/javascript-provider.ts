import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()

export class JavaScriptProvider {
  challenge1Complete = false;
  challenge2Complete = false;
  challenge3Complete = false;
  challenge4Complete = false;

  constructor(private router: Router) {
  }

  completeChallenge(challenge: number) {
    switch(challenge) {
      case 1:
        this.challenge1Complete = true;
        break;
      case 2:
        this.challenge2Complete = true;
        break;
      case 3:
        this.challenge3Complete = true;
        break;
      case 4:
        this.challenge4Complete = true;
        break;
      default: break;
    }
    this.router.navigate(['JavaScript']);
  }
}
