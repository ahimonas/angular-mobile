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
  selector: 'star',
  template: `



<md-card class="demo-card demo-basic">
  <md-card-content>
    <form>
      <md-input class="demo-full-width" placeholder="Company (disabled)" disabled value="Company Name"></md-input>
 
      <table style="width: 100%" cellspacing="0"><tr>
        <td><md-input placeholder="First name" style="width: 100%"></md-input></td>
        <td><md-input placeholder="Last Name" style="width: 100%"></md-input></td>
      </tr></table>
      <p>
        <md-input class="demo-full-width" placeholder="Address"></md-input>
        <md-input class="demo-full-width" placeholder="Address 2"></md-input>
      </p>
      <table style="width: 100%" cellspacing="0"><tr>
        <td><md-input class="demo-full-width" placeholder="City"></md-input></td>
        <td><md-input class="demo-full-width" placeholder="State"></md-input></td>
        <td><md-input #postalCode class="demo-full-width" maxLength="5" placeholder="Postal Code">

        </md-input></td>
      </tr></table>
    </form>
  </md-card-content>
</md-card>



<div class = "form">
  <md-card>
   <md-card-title>Your   Name\\Comments</md-card-title>
    <md-card-content>
     <form>
       <md-input placeholder="Your Name here"></md-input>
      <md-input placeholder="Your Commentss"></md-input>
     </form>
   </md-card-content>
</md-card>
</div>

	<md-card>
        <md-card-title> CLI with  Co/fucjntinuous Integration and Workflow  </md-card-title>
        <md-card-subtitle>About the cli </md-card-subtitle>
        <md-card-content>
        <ul> 
          <li *ngFor=" let author of hello"> 
          {{author}}
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
export class StarComponent {
  title = 'app worksd!';
hello  = ["Scaffold application" , "Install dependencies", "Generate service worker for app caching support", "Preprocess CSS", "Pre-render with CSS and HTML for the initial view"];

webs = ["Task Switcher" , "Splash screen"," Web app install banner", "Add-to-home-screen prompts",   "Distinct Launcher icon at phone home screen"];
title2 = "CLI with Continuous Integration and Workflow";


  imageUrl = "http://lorempixel.com/300/200"

 
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