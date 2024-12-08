import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
input:any
email:any
testName=false
testEmail=false
msg?: string;
show: boolean=false;
change(){
  console.log(" input =",this.input)
  if(this.input!==''){
    this.testName=true

  }
}
changeEamail(){
  console.log(" email =",this.email)
  if(this.email!==''){
    this.testEmail=true

  }
}
submit(){
  this.msg=" operation done with success"
  this.show=true
}
}
