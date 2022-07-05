import { Component } from '@angular/core';
import { fadeInUpTextAnimation } from '../utilities/animations/fade-in-up.animation';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass'],
  animations: [fadeInUpTextAnimation]
})
export class PageNotFoundComponent {
  pageNotFoundHeaderText = 'Page Not Found';
  pageNotFoundMessageHeader = `Uh oh. We can't find the page you're looking for.`;
  pageNotFoundFirstMessage = `Don't worry - everything is working as usual, but the page you were trying to get to can't be`;
  pageNotFoundSecondMessage = 'found and might have been moved or changed.';
  pageNotFoundButtonText = 'Take me Home';

  constructor() {}
}
