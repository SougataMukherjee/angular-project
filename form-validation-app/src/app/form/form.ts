import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { multiPatternEmailValidator } from '../utils/validators';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})
export class Form {
  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [multiPatternEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      acceptTos: [false, [Validators.requiredTrue]]
    });
  }



  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get acceptTos() { return this.form.get('acceptTos'); }

  onSubmit() {
    if (this.form.invalid) {
      // mark all to show errors
      this.form.markAllAsTouched();
      return;
    }

    // do minimal "submit" action
    console.log('FORM VALUE', this.form.value);
    alert('Form submitted — check console for values.');
    this.form.reset();
  }
}
