import {
  NgModule
} from '@angular/core';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatCheckboxModule
} from '@angular/material/checkbox';
import {
  MatDatepickerModule
} from '@angular/material/datepicker';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatCardModule,
  MatDatepickerModule
];

@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})

export class MaterialModule {}
