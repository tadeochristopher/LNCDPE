import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/Ladderhome/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AssignedComponent } from './components/AssignedClaims/Assigned.component';
import { UnAssignedComponent } from './components/UnAssignedClaim/UnAssigned.component';
import { KBComponent } from './components/KB/KB.component';
import { UnscheduledComponent } from './components/Unscheduled/Unscheduled.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    HomeComponent,
    UnscheduledComponent,
    UnAssignedComponent,
    AssignedComponent,
    KBComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'Ladderhome', pathMatch: 'full' },
      { path: 'Ladderhome', component: HomeComponent },
      { path: 'Unscheduled', component: UnscheduledComponent },
      { path: 'UnAssignedClaims', component: UnAssignedComponent },
      { path: 'AssignedClaims', component: AssignedComponent },
      { path: 'KB', component: KBComponent },
      { path: '**', redirectTo: 'Ladderhome' }
    ])
  ]
})
export class AppModuleShared {
}
