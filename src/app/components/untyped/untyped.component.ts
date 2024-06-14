import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Person } from '../../models/app.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AutofocusDirective } from '../../directives/autofocus.directive';

@Component({
  selector: 'app-untyped',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AutofocusDirective,
  ],
  templateUrl: './untyped.component.html',
  styleUrl: './untyped.component.scss',
})
export default class UntypedComponent {
  personForm: FormGroup;
  personModel: Person | undefined;
  dispayWarning = signal(false);

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      surename: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      height: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      this.dispayWarning.set(true);

      const nameFormValue = this.personForm.get('name')?.value;
      const surenameFormValue = this.personForm.get('surename')?.value;
      const ageFormValue = this.personForm.get('age')?.value;
      const heightFormValue = this.personForm.get('height')?.value;

      this.personModel = {
        name: nameFormValue.trim(),
        surename: surenameFormValue.trim(),
        age: ageFormValue.trim(),
        height: heightFormValue.trim(),
      };

      // this.personForm.patchValue({});

      console.log('Person:', this.personModel);
    } else {
      console.log('Form is invalid');
    }
  }
}
