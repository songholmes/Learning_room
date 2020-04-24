import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {StarRatingModule} from 'angular-star-rating';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { OiappDetailComponent} from './oiapp-detail/oiapp-detail.component'
import { OiappCmtComponent } from './oiapp-cmt/oiapp-cmt.component';

 

@NgModule({
  declarations: [
    AppComponent,
    OiappDetailComponent,
    OiappCmtComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StarRatingModule.forRoot(),
    FlexLayoutModule,
    // RouterModule.forRoot([
    //   { path: '/oiappintro', component: AppComponent },
    //   { path: '/oiappcmt', component: OidetailCmtComponent}])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
