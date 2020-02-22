import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../classes/person';

@Injectable({
  providedIn:"root"
})
export class DataService implements OnInit{

  people: Person[] = [];

  constructor(private http : HttpClient) {
    http.get("../../../assets/data/people.json").subscribe(data => {
      let p = data["people"];
      for(let i=0; i<p.length; i++){
        let pep = Object.assign(new Person(), p[i]);
        this.people.push(pep);
      }
    });
   }

   ngOnInit(){}

   public addNew(newPerson:Person){
     if(newPerson.id == undefined) newPerson.id = this.people.length;
     this.people.push(newPerson);
   }

   public remove(person:Person){
     for(let i=0; i<this.people.length; i++){
       if(this.people[i] == person) this.people.splice(i,1);
     }
   }

   public getPerson(id:number): Person {
     for(let i=0; i<this.people.length; i++){
       if(this.people[i].id === id) {
         return this.people[i];
       }
     }
   }
}