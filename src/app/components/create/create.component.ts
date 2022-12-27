import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class createComponent implements OnInit {
 
  productForm!: FormGroup;

  objTopics :any=[];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {


     this.productForm = this.formBuilder.group({
      subjectValue: ['', Validators.required],
      userName: ['', Validators.required],
      subjectContent: ['', Validators.required],
      subjectDate: new Date().toLocaleString(),
      comment :this.formBuilder.array([]),
      id: new Date().getDate()+Math.random(),
      id_user:  JSON.parse(localStorage.getItem('id_user')|| '[]'),
    });


   
  }


  addProduct() {

      if ( JSON.parse(localStorage.getItem("data")||'[]')== false) {
      this.objTopics=JSON.parse(localStorage.getItem("objTopics")||'[]')

      this.objTopics.push(this.productForm.value )
   
   
      localStorage.setItem("objTopics",JSON.stringify(       this.objTopics));
      alert('Subjects  added Successfully in LocalStorage !');
      this.router.navigate(['/index2/show']);
      this.productForm.reset();
                         } 

 
        else {
          


            this.api.postProduct(this.productForm.value).subscribe({
              next: (res) => {
                alert('Subjects  added Successfully in Server Json');
              },
              error: () => {
                alert('product added error');
              },

              complete: () => {
                this.router.navigate(['/index2/show']);
                this.productForm.reset();
              },
            });

        }


  }




}
