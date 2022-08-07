import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from'@angular/forms';
import { CRUDService } from '../crud.service';
import { EmployeeModel } from '../employee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  formValue !:FormGroup;
  EmployeeData !: any;
  EmployeeModelObj : EmployeeModel = new EmployeeModel();
  btnAdd :boolean=false;
  btnUpdate :boolean = false;
  constructor(private formBuilder:FormBuilder,private api:CRUDService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      first :['',Validators.required],
      last :[''],
      email :[''],
      mobile :[''],
      sal :[''],
    })
     this.getAllEmployee();
  }
  // postEmployee(data :any){
  //   return this.http.post<any>("http://localhost:3000/employees",data).pipe(map((res:any) =>{
  //     return res;
  //   }))
  // }

  postEmployeeDetails(){
    this.EmployeeModelObj.first = this.formValue.value.first;
    this.EmployeeModelObj.last = this.formValue.value.last;
    this.EmployeeModelObj.email = this.formValue.value.email;
    this.EmployeeModelObj.mobile = this.formValue.value.mobile;
    this.EmployeeModelObj.sal = this.formValue.value.sal;

    this.api.postEmployee(this.EmployeeModelObj).subscribe(res=>{
      //console.log(res);
      this.getAllEmployee();
      this.formValue.reset();
      let ref =document.getElementById('cancel')
      ref?.click();
    },
    err=>{
      alert("Some thing went erong try again later");
    }
    )
  }

  getAllEmployee(){
   this.api.getEmployee().subscribe(res=>{
   this.EmployeeData = res;
  })
   }

   deleteEmployee(row:any){
    this.api.deleteEmployee(row.id).subscribe(res=>{
      this.getAllEmployee();
    })
   }

   onEdit(row:any){
    this.btnUpdate =true;
    this.btnAdd=false;
    this.EmployeeModelObj.id = row.id;
    this.formValue.controls['first'].setValue(row.first);
    this.formValue.controls['last'].setValue(row.last);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['sal'].setValue(row.sal)
   }

   addEmp(){
    this.formValue.reset();
    this.btnAdd =true;
    this.btnUpdate =false;
   }
   updateEmployeeDetails(){
    this.EmployeeModelObj.first = this.formValue.value.first;
    this.EmployeeModelObj.last = this.formValue.value.last;
    this.EmployeeModelObj.email = this.formValue.value.email;
    this.EmployeeModelObj.mobile = this.formValue.value.mobile;
    this.EmployeeModelObj.sal = this.formValue.value.sal;

    this.api.updateEmployee(this.EmployeeModelObj,this.EmployeeModelObj.id).subscribe(res=>{
      let ref = document.getElementById('cancel')
      ref?.click();
      this.getAllEmployee();
    })
   }
}
