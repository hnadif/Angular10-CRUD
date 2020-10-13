import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './compenents/user/user.component';
import { AuthComponent } from './compenents/auth/auth.component';
import { DetailsComponent } from './compenents/details/details.component';
import { NavComponent } from './compenents/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FilterPipe} from './filter.pipe'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnimationComponent } from './compenents/animation/animation.component'
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    DetailsComponent,
    NavComponent,
    FilterPipe,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
