import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forum';

  constructor(private router :  Router )  

{
  // we force to open  first the index !
this.router.navigate(['/index']);

}

}
