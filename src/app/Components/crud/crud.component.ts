import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { CRUDService } from 'src/app/CRUD/crud.service';
import { login } from 'src/app/Modules/log.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {


  ngform !:FormGroup;
  crudmodeleobj : login =new login();
  logindata !: any;


  constructor(private formbuilder:FormBuilder,private api:CRUDService) { }

  ngOnInit(): void {
this.ngform = this.formbuilder.group({
  email:[''],
  password:['']
})
// this.contactForm = this.formBuilder.group({
//   name: ['', Validators.required],
//   email: ['', [Validators.required, CustomValidators.validateEmail]],
//   content: ['', [Validators.required, Validators.minLength(10)]]
// });
// }
this.getlogin();
  }

  savedata(){
this.crudmodeleobj.email=this.ngform.value.email;
this.crudmodeleobj.password =this.ngform.value.password

this.api.postEmployee(this.crudmodeleobj).subscribe(res =>{
  console.log(this.crudmodeleobj.email);
  this.ngform.reset();
  this.getlogin();
},
err =>{
  alert("Some thing went wrong Please try again.!");
})
  }
  

  getlogin(){
    debugger
    this.api.getEmployee().subscribe(res =>{
      this.logindata =res;
    })
  }

}
