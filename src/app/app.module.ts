import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MeComponent } from './content/me/me.component';
import { FriendsComponent } from './content/friends/friends.component';
import { ManagementComponent } from './content/management/management.component';
import { HomeComponent } from './content/home/home.component';
import { PersonComponent } from './content/friends/person/person.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
// import { MatCardModule } from '@angular/material';
 @NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    MeComponent,
    FriendsComponent,
    ManagementComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
