import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lessor-list',
  templateUrl: './lessor-list.component.html',
  styleUrls: ['./lessor-list.component.css']
})
export class LessorListComponent {
    show: boolean=false;
    bailleurs:any;
  onEdit() {
  throw new Error('Method not implemented.');
  }
  
  onAdd() {
  throw new Error('Method not implemented.');
  }
  onExportSelected() {
  throw new Error('Method not implemented.');
  }
  onExportAll() {
  throw new Error('Method not implemented.');
  }
  lessor: any=[
    {
      "firstName": "John",
      "lastName": "Doe",
      "Name":"John",
      "email": "john.doe@example.com",
      "phone":"+21625666898",
      "Fax":"75999878",
      "cite":"Medenine",
      "stress":"Trig Gabes",
      "CodePostale":"4100",
      "ad":"48"
      
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "Name":"John",
      "email": "john.doe@example.com",
      "phone":"+21625666898",
      "Fax":"75999878",
      "cite":"Medenine",
      "stress":"Trig Gabes",
      "CodePostale":"4100",
      "ad":"48"
    },
    {
      
      "firstName": "Alice",
      "lastName": "Johnson",
      "Name":"Alice",
      "email": "alice.johnson@example.com",
      "phone":"+21625666898",
      "Fax":"75999878",
      "cite":"Medenine",
      "stress":"Trig Gabes",
      "CodePostale":"4100",
      "ad":"48"
      
    },
    {
      
      "firstName": "Bob",
      "lastName": "Brown",
      "Name":"Bob",
      "email": "bob.brown@example.com",
     "phone":"+21625666898",
      "Fax":"75999878",
      "cite":"Medenine",
      "stress":"Trig Gabes",
      "CodePostale":"4100",
      "ad":"48"
    }
  ]
  
    selected: any = []
    deleteAction() {
      this.show=true
    }
    actionClose() {
      this.show=false
    }
  }

