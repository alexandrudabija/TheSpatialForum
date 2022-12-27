import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { postModel } from '../model/postModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
@Injectable({

  providedIn: 'root',
})




export class ShowComponent implements OnInit {
  user : object;
  add: boolean = false;
  verify: number = 0;
  arrayObj: any[] = [];
  id_userVerify:any;
  value!: FormGroup;
  objPost: postModel = new postModel();
  productForm!: FormGroup;
  @Input() delete: boolean = false;
  @Input() update: boolean = false;





  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}



  ngOnInit(): void {
     
    const id_user=JSON.parse(localStorage.getItem('id_user')|| '[]')
    this.getAllPosts();

    this.productForm = this.formBuilder.group({
      subjectValue: ['', Validators.required],
      userName: ['', Validators.required],
      subjectContent: ['', Validators.required],
      subjectDate: new Date().toLocaleString(),
      id: new Date().getDate()+Math.random(),
      id_user:  id_user
   
    });

  
  }


  getAllPosts() {
    if (JSON.parse(localStorage.getItem('data') || '[]') == false) {
      this.arrayObj = JSON.parse(localStorage.getItem('objTopics') || '[]');
      this.id_userVerify =JSON.parse(localStorage.getItem('id_user')|| '[]')

    } else {
      this.api.getProduct().subscribe({
        next: (res) => {
          this.arrayObj = res;
          this.id_userVerify =JSON.parse(localStorage.getItem('id_user')|| '[]')
        },
        error: (err) => {
          alert('Error while fetching the Records !');
        },
      });
    }
  }

  updatePost(obj: any) {
 

    if (JSON.parse(localStorage.getItem('data') || '[]') == false)
     {
    this.arrayObj= JSON.parse(localStorage.getItem('objTopics') || '[]').map(
        (item: any) => {
          if (item.id == obj.id) {
            item = this.productForm.value; 
          }
          return item;
        }
      );

      localStorage.setItem('objTopics', JSON.stringify( this.arrayObj));
    } else {
    
      this.api.putProduct(obj.id, this.productForm.value).subscribe({
        next: (v: any) => {
         
        },
      });
    } 
    this.getAllPosts();
      
  
    this.verify = 2000000000;
  }

  editPost(id: any) {
    // for open and close input
    this.verify = id;
  }

  deletePost(data: any) {
    if (JSON.parse(localStorage.getItem('data') || '[]') == false) {
      localStorage.setItem(
        'objTopics',
        JSON.stringify(
          JSON.parse(localStorage.getItem('objTopics') || '[]').filter(
            (item: any) => item.id !== data.id
          )
        )
      );

      alert('Topic canceled !');
      this.router.navigate(['/index2/show']);
    } else {
      this.api.deleteProduct(data.id).subscribe({
        next: (res) => {
       
        },
        error: (err) => {
          alert('Error while fetching the Records !');
        },
      });  
      
      this.getAllPosts();
    }
  }
}
