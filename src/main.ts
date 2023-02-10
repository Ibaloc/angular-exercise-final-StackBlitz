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
}

var alpha = 'ABC';
var beta = 'xyz';
var result = '';

for (let i = 0; i < alpha.length; i++) {
  for (let j = 0; j < beta.length; j++) {
    result = result + '"' + alpha[i] + beta[j] + '"' + ', ';
  }
}

document.getElementById('lblresult').innerHTML = result.substring(
  0,
  result.length - 2
);

bootstrapApplication(App);
