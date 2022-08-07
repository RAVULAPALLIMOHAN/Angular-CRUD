import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user ={
    firstName:"john",
    lastName:"smith",
    city:"USA",
    DOB:"09/06/2022",
    Salary:"10000.75"
  }

  users =[{
    firstName:"john",
    lastName:"smith",
    city:"USA",
    DOB:"09/06/1990",
    Salary:"10000.85"
  },
  {
    firstName:"alex",
    lastName:"mike",
    city:"JPN",
    DOB:"04/10/1992",
    Salary:"12000.55"
  },{
    firstName:"Williams",
    lastName:"smith",
    city:"USA",
    DOB:"10/06/1995",
    Salary:"20000.10"
  },{
    firstName:"john",
    lastName:"alex",
    city:"USA",
    DOB:"02/10/1991",
    Salary:"25000.20"
  },{
    firstName:"john",
    lastName:"smith",
    city:"USA",
    DOB:"12/02/1993",
    Salary:"15000.05"
  }]
}
