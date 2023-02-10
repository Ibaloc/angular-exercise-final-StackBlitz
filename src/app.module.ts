import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UppercaseDirective } from './input.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [UppercaseDirective],
  bootstrap: [],
})
export class AppModule {}
