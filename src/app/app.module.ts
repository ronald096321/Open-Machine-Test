import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// Basic Routing for loading the landing page
const routes : Routes =[
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
  {path : 'landingPage',
   component : LandingLayoutComponent,
  children : [
    {path : '' , component : LandingViewComponent }
  ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    LandingLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NoopAnimationsModule, 
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
