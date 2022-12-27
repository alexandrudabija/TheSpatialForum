import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule ,ArrayOfComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { index2Component } from './components/pages/index2/index2.component';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { createComponent } from './components/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
 import {MatNativeDateModule} from '@angular/material/core' ;
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule}from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { ShowComponent } from './components/show/show.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { updateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { RegisterComponent } from './user/register/register.component';
import { IndexComponent } from './user/index/index.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CancelCommentComponent } from './components/cancel-comment/cancel-comment.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';

@NgModule({
  declarations: [
    ArrayOfComponents,
    AppComponent,
    index2Component,
    SolarSystemComponent,
    createComponent,
    ShowComponent,
    NavbarComponent,
    updateComponent,
    DeleteComponent,
    RegisterComponent,
    IndexComponent,
    AddCommentComponent,
    CancelCommentComponent,
    UpdateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
