import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
 
  Url="http://localhost:3000/employees";
  constructor(private http :HttpClient) { }


postEmployee(data :any){
  return this.http.post<any>(this.Url,data).pipe(map((res:any) =>{
    return res;
  }))
}

getEmployee(){
  return this.http.get<any>(this.Url).pipe(map((res:any) =>{
    return res;
  }))
}

updateEmployee(data :any,id:number){
  return this.http.put<any>(this.Url+"/"+id,data).pipe(map((res:any) =>{
    return res;
  }))
}

deleteEmployee(id:number){
  return this.http.delete<any>(this.Url+"/"+id).pipe(map((res:any) =>{
    return res;
  }))
}

}
