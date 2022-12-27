import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class ApiService {


  constructor(private http :HttpClient) 
  { }





  postUser (data :any) 
  {
    // return this.http.post<any>("https://my-json-server.typicode.com/alexandrudabija/mockjson/posts",data);
  
  // return this.http.post<any>("https://032f4b1e-e72c-4ccc-a815-464f416a218d.mock.pstmn.io/post",data);
  
    return this.http.post<any>("http://localhost:3000/users/",data);
  
  
  
    }



    getUser (): Observable<any>
    {
     
  
    
  return this.http.get<any>("http://localhost:3000/users/");
  
    }










  // when we send the data to serve
  postProduct (data :any)
  {
    // return this.http.post<any>("https://my-json-server.typicode.com/alexandrudabija/mockjson/posts",data);
  
  // return this.http.post<any>("https://032f4b1e-e72c-4ccc-a815-464f416a218d.mock.pstmn.io/post",data);
  
    return this.http.post<any>("http://localhost:3000/posts/",data);
  
  
  
    }



  // when we request the data  from server

  getProduct ()
  {
   

    // return this.http.get<any>("https://my-json-server.typicode.com/alexandrudabija/mockjson/posts");

    // return this.http.get<any>(" https://api.jsonserver.io/api/users");
// return this.http.get<any>("https://032f4b1e-e72c-4ccc-a815-464f416a218d.mock.pstmn.io/posts");
return this.http.get<any>("http://localhost:3000/posts/");

  }


deleteProduct(id:any)
{

  return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe
    (
      map(

    (res =>{

      return res;
    } ) ))

   


}


putProduct(id:any,data:any)
{
  return this.http.put<any>("http://localhost:3000/posts/"+id,data ).pipe
  (
    map(

  (res =>{

    return res;
  } ) ))


}



}
