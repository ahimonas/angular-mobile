import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';


//warn and accent 
@Component({
  selector: 'testr',
  template: `




			<md-card>
        <md-card-title>Observables</md-card-title>
                <md-card-subtitle>Asynchronous Data Streams</md-card-subtitle>

        <md-card-content>
        <p>
            Think of an observable as a collection but with observables we streams subscribe to them and give them a callbak function. When a new data element arrives we will push
             that data element to us by calling us back. We observe them and get notified when data arrives in them asynchronously. 

        [a, b, c, d] <--- watch for a change then call function(newData). Examples below.   
        </p>
        <ul> 
          <li *ngFor=" let authorg of webz"> 
          {{authorg}}
        </li>
    </ul>
    </md-card-content>	
    </md-card>


 


  `,
  styles: [`
	  md-card {
     box-sizing: border-box;
     margin:16px;
    }

           .form md-card {
     display: flex;}

   .form md-card {
      flex-grow:1;
     }

md-input {
  margin: 8px 0;
  width: 100%;
   }
    .card-container {
      display: flex;
      flex-flow: row wrap;}

  `],
  directives: [
    APP_SHELL_DIRECTIVES,
	MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    ROUTER_DIRECTIVES,
    MdAnchor, MdInput
  ],
  providers: [ROUTER_PROVIDERS, MdIconRegistry],
})
export class TestrComponent {

  title = 'app worksd!';

hello  = ["Scaffold application" , "Install dependencies", "Generate service worker for app caching support", "Preprocess CSS", "Pre-render with CSS and HTML for the initial view"];

webz = ["Dom Elements" , "Ajax Calls","Web Sockets", "Web Workers"];
title2 = "CLI with Continuous Integration and Workflow";

//BYE = false; 
 
}

/*

<div class = "form">
<md-card>		
<h1>Contact</h1>
    <md-card-content>
<form #f="ngForm" (ngSubmit)="onSubmit(f.form)">
    <div class="form-group">
        <label for="name">Name</label>
        <input 
            ngControl="name" 
            #name="ngForm" 
            id="name" 
            type="text" 
            class="form-control" 
            required>
        <div *ngIf="name.touched && name.errors">
            <div 
                class="alert alert-danger" 
                *ngIf="name.errors.required">
                Name is required.
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="comment">Comment</label>
        <textarea 
            #comment="ngForm" 
            ngControl="comment" 
            id="comment" 
            class="form-control"
            required>
        </textarea>
        <div 
            *ngIf="comment.touched && !comment.valid" 
            class="alert alert-danger">
            Comment is required.
        </div>
    </div>
    <button class="btn btn-primary" type="submit" [disabled]="!f.valid">Submit</button>
</form>
   </md-card-content>


</md-card>
</div>
*/