import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { index2Component } from './components/pages/index2/index2.component';
import { createComponent } from './components/create/create.component';
import { ShowComponent } from './components/show/show.component';
import { updateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { IndexComponent } from './user/index/index.component';
import { RegisterComponent } from './user/register/register.component';
// const routes: Routes = [

// {path : 'index',component:indexComponent,

// children :[
//   {path :'forum-topics',component:ForumTopicsComponent},
//   {path :'show-topics',component:ShowTopicsComponent}
// ]
// }

// ];


const routes: Routes = [


   
   
    {path :'index',component:IndexComponent},
    {path :'register',component:RegisterComponent  } ,
    {path :'index2',component:index2Component  ,
    
  children :[
  {path :'create',component:createComponent},
  {path :'show',component:ShowComponent},
   {path :'update',component:updateComponent},
    {path :'delete',component:DeleteComponent}
]
  
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
export const ArrayOfComponents = [index2Component, 
  ShowComponent, createComponent,updateComponent,IndexComponent,RegisterComponent]