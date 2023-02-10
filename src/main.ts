import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    {{name}} Exercise!
    <div style = "margin-top: 0px">
        by Moe Q.
    </div>
  `,
})
export class App {
  name = 'Angular';
  alpha = 'ABC';
  beta = 'xyz';
}

bootstrapApplication(App);
