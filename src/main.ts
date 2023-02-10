import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { UpperCaseInputDirective } from './input.directive';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <b>{{name}} Exercise!</b>
    <div style = "margin-top: 0px">
        <b>Moe Q</b>.
    </div>
  `,
})
export class App {
  name = 'Angular';

  onInput(event) {
    console.log('app.component onInput event: ', event);
  }
}

var alpha = 'ABC';
var beta = 'yxz';
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
