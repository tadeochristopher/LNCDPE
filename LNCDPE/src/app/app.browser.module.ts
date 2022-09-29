import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppModuleShared,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: 'BASE_URL' }
  ]
})
export class AppModule {
}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
