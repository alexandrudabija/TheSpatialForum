import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../core/services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShowComponent } from '../show/show.component';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  @Input() Obj: any;

  commentForm!: FormGroup;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private show: ShowComponent
  ) {}

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      commentContent: ['', Validators.required],
      subjectDate: new Date().toLocaleString(),
      userName :['', Validators.required],
      id: new Date().getDate() + Math.random(),
      id_user:  JSON.parse(localStorage.getItem('id_user')|| '[]') ,

    });
  }

  addComment(obj: any) {
    if (JSON.parse(localStorage.getItem('data') || '[]') == false) {
      this.show.arrayObj = JSON.parse(
        localStorage.getItem('objTopics') || '[]'
      ).map((item: any) => {
        if (item.id == obj.id) {
          // Array.prototype.push.call(item.comment,this.commentForm.value)
          item.comment.push(this.commentForm.value);
        }
        return item;
      });

      localStorage.setItem('objTopics', JSON.stringify(this.show.arrayObj));

      this.show.getAllPosts();
      this.commentForm.reset();
    } else {
      obj.comment.push(this.commentForm.value);

      this.api.putProduct(obj.id, obj).subscribe({
        next: (v: any) => {},

        complete: () => {
          this.show.getAllPosts();
          this.commentForm.reset();
        },
      });
    }
  }

  UpdateComment(obj: any) {
    //   if (JSON.parse(localStorage.getItem('data') || '[]') == false)
    //   {
    //    this.show.arrayObj = JSON.parse(localStorage.getItem('objTopics') || '[]').map((item: any) => {
    //      if (item.id == obj.id)
    //       {
    //        // Array.prototype.push.call(item.comment,this.commentForm.value)
    //        item.comment.push(this.commentForm.value);
    //      }
    //      return item;
    //    });
    //    localStorage.setItem('objTopics', JSON.stringify(this.show.arrayObj));
    //    this.show.getAllPosts()
    //    this.commentForm.reset();
    //  }
    //  else {
    //    console.log(obj.comment);
    //    console.log(obj);
    //    console.log(this.commentForm.value);
    //    // Array.prototype.push.call(obj.comment,this.commentForm.value)
    //    obj.comment.push(this.commentForm.value);
    //    this.api.putProduct(obj.id, obj).subscribe({
    //      next: (v: any) => {
    //      },
    //      complete: () => {
    //        this.show.getAllPosts();
    //        this.commentForm.reset();
    //      },
    //    });
    //  }
  }
}
