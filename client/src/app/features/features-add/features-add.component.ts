import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-features-add',
  templateUrl: './features-add.component.html',
  styleUrls: ['./features-add.component.css']
})
export class FeaturesAddComponent {
submit() {
throw new Error('Method not implemented.');
}
  form: FormGroup;
options: any;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
        Title: ['titre', [Validators.pattern(/^[A-Za-zÀ-ÿ]+$/),Validators.required,Validators.minLength(2)]],
        description:['description',[Validators.pattern(/^[A-Za-zÀ-ÿ]+$/)]],
    });

  }
}

