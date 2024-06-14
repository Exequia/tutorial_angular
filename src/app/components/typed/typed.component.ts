import { Component } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Person, PersonForm } from '../../models/app.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AutofocusDirective } from '../../directives/autofocus.directive';

@Component({
  selector: 'app-typed',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AutofocusDirective,
  ],
  templateUrl: './typed.component.html',
  styleUrl: './typed.component.scss',
})
export default class TypedComponent {
  personForm: FormGroup<PersonForm>;
  personModel: Person | undefined;

  constructor(private fb: NonNullableFormBuilder) {
    this.personForm = this.fb.group<PersonForm>({
      name: this.fb.control<string>('Buggy', Validators.required),
      surename: this.fb.control<string>('Code', Validators.required),
      age: this.fb.control<number>(666, [
        Validators.required,
        Validators.min(0),
      ]),
      height: this.fb.control<number>(6.66, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      const nameFormValue = this.personForm.get('name')?.value;
      const surenameFormValue = this.personForm.get('surename')?.value;
      const ageFormValue = this.personForm.get('age')?.value;
      const heightFormValue = this.personForm.get('height')?.value;

      // this.personModel = {
      //   name: nameFormValue!.trim(),
      //   surename: surenameFormValue!.trim(),
      //   age: ageFormValue!.trim(),
      //   height: heightFormValue!.trim(),
      // };

      this.personModel = {
        name: nameFormValue?.trim() || '',
        surename: surenameFormValue?.trim() || '',
        age: ageFormValue || 0,
        height: heightFormValue || 0,
      };

      // this.personForm.patchValue({});

      console.log('Person:', this.personModel);
    } else {
      console.log('Form is invalid');
    }
  }
}
