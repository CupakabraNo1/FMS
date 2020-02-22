import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Person } from '../../services/classes/person';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.less']
})
export class FriendsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  public getPeople(){
    return this.data.people;
  }

  public remove(person: Person){
    this.data.remove(person);
  }
}