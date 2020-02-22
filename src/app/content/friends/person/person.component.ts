import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Person } from 'src/app/services/classes/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {
  
  person: Person;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {
    this.route.params.subscribe( parameter => {
      this.person = this.data.getPerson(+parameter['id']);
    });
  }

  ngOnInit() {}

}