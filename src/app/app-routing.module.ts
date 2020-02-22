import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/content/home/home.component';
import { MeComponent } from 'src/app/content/me/me.component';
import { FriendsComponent } from 'src/app/content/friends/friends.component';
import { ManagementComponent } from 'src/app/content/management/management.component';
import { PersonComponent } from './content/friends/person/person.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'me', component: MeComponent },
  { path: 'friends', component: FriendsComponent, children:[
    {path: 'person/:id', component: PersonComponent}
  ]},
  { path: 'management', component: ManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
