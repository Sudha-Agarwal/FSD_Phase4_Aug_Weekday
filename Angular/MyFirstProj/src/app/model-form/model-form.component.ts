import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  myform:FormGroup 
  firstName: FormControl
  lastName: FormControl ;
  email:FormControl;
  password:FormControl;


  constructor(private ds:DataServiceService) { }


  createFormControls(){
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("",Validators.required);

    this.email = new FormControl("", Validators.required);
    this.password = new FormControl("", Validators.required);

  }

  createForm(){
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName : this.firstName,
        lastName: this.lastName
      }),
      email:this.email,
      password: this.password
    }

    )
  }



  ngOnInit(): void {
    this.createFormControls();
    this.createForm();

  }


  onSubmit(data:any){
    this.ds.createNewUser(data).subscribe(response => {console.log(response)},
    err => console.log("error")
    );

  }

}
