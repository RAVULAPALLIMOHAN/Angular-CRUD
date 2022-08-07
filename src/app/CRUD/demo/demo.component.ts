import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
//import { CRUDModel } from './Demo.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
  loginForm !: FormGroup;
  Logindata !:any;
  //LoginModelObj : CRUDModel =new CRUDModel();

  
  ngOnInit(): void {
  }

  saveData(){
  console.log(this.loginForm);
  }
  resetData(){
    this.loginForm.reset();

  }
}
