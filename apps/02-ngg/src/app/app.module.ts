import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentComponent } from './feature/home-component/home-component.component';
import { MaterialDesignModule } from './material-design.module';

@NgModule({
  declarations: [HomeComponentComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialDesignModule],
  providers: [],
  bootstrap: [HomeComponentComponent],
})
export class AppModule {}
