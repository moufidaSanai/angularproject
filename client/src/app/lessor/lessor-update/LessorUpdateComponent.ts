import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-lessor-update',
  templateUrl: './lessor-update.component.html',
  styleUrls: ['./lessor-update.component.css']
})
export class LessorUpdateComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['Prenom', [Validators.pattern(/^[A-Za-zÀ-ÿ]+$/), Validators.required, Validators.minLength(2)]],
        lastName: ['Nom', [Validators.pattern(/^[A-Za-zÀ-ÿ]+$/), Validators.required, Validators.minLength(2)]],
        Name: ['', Validators.required]
      }),
      contact: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.pattern(/^(?:\+216|0)?[2579]\d{7}$/)],
        fax: ['', Validators.pattern(/^(?:\+216|0)?[7]\d{7}$/)],
      }),
      adresse: this.formBuilder.group({
        cite: ['ville', [Validators.pattern(/^[A-Za-zÀ-ÿ]+$/), Validators.required, Validators.minLength(2)]],
        CodePostale: ['Postal', [Validators.pattern(/^[0-9]+$/), Validators.required, Validators.minLength(2)]],
        stress: ['adresse', [Validators.pattern(/^[A-Za-zÀ-ÿ]+$/), Validators.required, Validators.minLength(2)]],
        ad: ['rue', [Validators.pattern(/^[A-Za-zÀ-ÿ]+$/), Validators.required, Validators.minLength(2)]],
      }),

      submit: this.formBuilder.group({}),
    });
  }


  submit() {
    console.log('reactive form submit', this.form?.value.name.name);
  }
}
