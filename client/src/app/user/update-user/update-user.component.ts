import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  form:FormGroup
registerForm: any;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      email:['email user',[Validators.required,Validators.email]],
      userName:['user name',[Validators.required,Validators.minLength(8)]],
      password:['',Validators.required],
      passwordComfirmer:['']

    },{validator:this.passwordMatchValidator})
    

  }

  passwordMatchValidator(group: FormGroup) {
    
    const password = group.get('password')?.value;
    const confirmPassword = group.get('passwordComfirmer')?.value;
    console.log(password === confirmPassword ? null: { mismatch: true })
    return password === confirmPassword ? null: { mismatch: true };
   
  }
  submit(){
    console.log(this.form.value)
  }
  reset(){
    this.form.reset()
  }
}
