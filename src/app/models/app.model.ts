import { FormControl } from '@angular/forms';

export interface Person {
  name: string;
  surename: string;
  age: number;
  height: number;
}

export interface PersonForm {
  name: FormControl<string>;
  surename: FormControl<string>;
  age: FormControl<number>;
  height: FormControl<number>;
}
