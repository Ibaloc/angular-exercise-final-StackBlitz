import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{name}} Exercise!</h1>
    <div style = "margin-left: 40px; margin-top: 0px">
        by Moe Q.
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
