import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import {FormGroup ,FormBuilder,FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
public loginForm!:FormGroup;
  constructor(public router :  Router , public api :ApiService, public formBuilder :FormBuilder )
   { }
  
   user :any;

   data  =false;
  ngOnInit(): void {

  //     this.loginForm = this.formBuilder.group({

  //       username:[''],
  //       password:['']
  // })
  

  this.loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  
});

  }







register()
{
localStorage.setItem("data",JSON.stringify(false))
 this.router.navigate(['/register']);
 
}


login()
{ 
// for localStorage
  if (this.data == false) 
  
  
  {   
    localStorage.setItem("data",JSON.stringify( this.data));
  
 this.user = JSON.parse(localStorage.getItem("objUser")||'[]').find((a:any)=>
    {
    
    return a.username ===  this.loginForm.value.username && a.password=== this.loginForm.value.password
    
    })
    if( this.user)
    {
      localStorage.setItem("id_user",JSON.stringify(this.user.id));

      
    alert("Login Success in LocalStorage")
    localStorage.setItem("Login",JSON.stringify(true));
    
    this.loginForm.reset();
    this.router.navigate(['/index2/create']);
    }
    else  alert("Not found user !")
    
    }
  
     
     
     
     // for Server Json
     else {


  
this.api.getUser().subscribe( (res:any)=>{

this.user = res.find((a:any)=>
{

  return a.username ===  this.loginForm.value.username && a.password=== this.loginForm.value.password

})


if( this.user)
{

  localStorage.setItem("id_user",JSON.stringify(this.user.id));
alert("Login Success in Json Server")
localStorage.setItem("Login",JSON.stringify(true));

this.loginForm.reset();
this.router.navigate(['/index2/create']);
}
else  alert("Not found user !")

}

)

}

}


checkbox()
{
 
this.data=!this.data;

 console.log(this.data);

 localStorage.setItem("data",JSON.stringify( this.data));

}


}
