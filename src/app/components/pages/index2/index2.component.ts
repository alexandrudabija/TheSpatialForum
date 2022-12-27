import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.scss']
})
export class index2Component implements OnInit {

  constructor( private router :  Router)
  
  {


   }

  ngOnInit(): void {



    if(  JSON.parse(localStorage.getItem("Login")||'[]')==false)
    {
      this.router.navigate(['/index']);


    }
  }


logout()
{
  localStorage.setItem("Login",JSON.stringify(false))
  localStorage.setItem("data",JSON.stringify(false))
  this.router.navigate(['/index']);
  localStorage.setItem("id_user",JSON.stringify(null));


}








}
