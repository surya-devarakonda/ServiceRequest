import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceRequest';
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    body: new FormControl('',[Validators.required, Validators.minLength(50)])
  })
  get f(){
    return this.form.controls;
  }
  submit()
  {
    console.log(this.form.value)
  }
}
