import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorDirective } from './changecolor.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ColorDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
