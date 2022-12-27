import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ShowComponent } from '../show/show.component';
@Component({
  selector: 'app-cancel-comment',
  templateUrl: './cancel-comment.component.html',
  styleUrls: ['./cancel-comment.component.scss']
})
export class CancelCommentComponent implements OnInit {

 @Input() Objcomment: any;


  constructor(
    private api: ApiService,
    private show: ShowComponent
  ) {}
 
  ngOnInit(): void {

  }



  // cancelComment(Objcomment: any) 
  // {

  //   if (JSON.parse(localStorage.getItem('data') || '[]') == false)
  //   {

  //    this.show.arrayObj = JSON.parse(localStorage.getItem('objTopics') || '[]').map((item: any) => {
  //    console.log(   item.comment.id );
   
  //      if (item.comment.id == Objcomment.id)
  //       {
  //        item.comment={};
  //      }
  //      return item;
  //    });

  //    localStorage.setItem('objTopics', JSON.stringify(this.show.arrayObj));

  //    this.show.getAllPosts()

  //  } 
   
  //  else {
     
     
  //   Objcomment.comment={};

  //    this.api.putProduct(obj.id, obj).subscribe({
  //      next: (v: any) => {
        
  //      },

  //      complete: () => {
  //        this.show.getAllPosts();
  
  //      },
  //    });
  //  }
  // }
}
