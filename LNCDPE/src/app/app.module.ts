import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/Ladderhome/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AssignedComponent } from './components/AssignedClaims/Assigned.component';
import { UnAssignedComponent } from './components/UnAssignedClaim/UnAssigned.component';
import { KBComponent } from './components/KB/KB.component';
import { UnscheduledComponent } from './components/Unscheduled/Unscheduled.component';
import { HotTopicsComponent } from './components/KB/HotTopics/hottopics.component';
import { FireComponent } from './components/KB/Fire/fire.component';
import { RainComponent } from './components/KB/Rain/rain.component';
import { WindComponent } from './components/KB/Wind/wind.component';
import { TimeComponent } from './components/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    HomeComponent,
    UnscheduledComponent,
    UnAssignedComponent,
    AssignedComponent,
    KBComponent,
    HotTopicsComponent,
    FireComponent,
    WindComponent,
    RainComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'Ladderhome', pathMatch: 'full' },
      { path: 'Ladderhome', component: HomeComponent },
      { path: 'Unscheduled', component: UnscheduledComponent },
      { path: 'UnAssignedClaims', component: UnAssignedComponent },
      { path: 'AssignedClaims', component: AssignedComponent },
      { path: 'KB', component: KBComponent },
      { path: 'Fire', component: FireComponent },
      { path: 'HotTopics', component: HotTopicsComponent },
      { path: 'Rain', component: RainComponent },
      { path: 'Wind', component: WindComponent },
      { path: 'Time', component: TimeComponent },
      { path: '**', redirectTo: 'Ladderhome' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
