import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  Url ="http://localhost:3000/employees";
  constructor(private http:HttpClient) { }

getlogin(){
this.http.get<any>(this.Url).pipe(map((res :any)=>{
return res;
}))
}

postlogin(data :any){
this.http.post<any>(this.Url,data).pipe(map((res:any)=>{
  return res;
}))
}

putlogin(data :any,id:number){
  this.http.put<any>(this.Url+"/"+id,data).pipe(map((res:any) =>{
    return res;
  }))
}

deletelogin(id:number){
  this.http.delete<any>(this.Url+"/"+id).pipe(map((res:any)=>{
return res;
  }))
}

}
