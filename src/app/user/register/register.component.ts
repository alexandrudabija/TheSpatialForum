import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {}

  objUser :any=[];
  data: boolean = false;
  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      email: ['', Validators.required],
      id: new Date().getDate()+Math.random()
    });
  }

  addUser() {
  const password = this.userForm.controls['password'];
      const confirmPassword = this.userForm.controls['password2'];

    if (this.data == false) {

      if (password.value==confirmPassword.value)
      {
  
      this.objUser=JSON.parse(localStorage.getItem("objUser")||'[]')
   this.objUser.push(

  this.userForm.value



   )



   localStorage.setItem("objUser",JSON.stringify(this.objUser));
      console.log(this.objUser);
   alert('User  added Successfully in LocalStorage !');
   this.router.navigate(['/index']);
            this.userForm.reset();
                    
          
          } else    alert('Password wrong !');
   
                    }
    
    
    else {

    
      if (password.value==confirmPassword.value)
    {






        this.api.postUser(this.userForm.value).subscribe({
          next: (res) => {
            alert('User  added Successfully in Json Server !');
          },
          error: () => {
            alert('product added error');
          },

          complete: () => {
            this.router.navigate(['/index']);
            this.userForm.reset();
          },
        });
      } else {
        alert('Password wrong !');
      }
    }
  }

  index() {
    localStorage.setItem("data",JSON.stringify(false))
    this.router.navigate(['/index']);
  }

  checkbox() {
    this.data = !this.data;

   
  }
}
