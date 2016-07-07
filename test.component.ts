import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { Router, RouteParams} from '@angular/router-deprecated';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';




//warn and accent 
@Component({
  selector: 'test',
  template: `

<md-card>
  <md-card-header>
   <md-card-title> <font size="5"> About AngularJS 2.0 </font> </md-card-title>   

 
      <img md-card-avatar src="./a.png">
   </md-card-header>

   <md-card-content>
      <md-card-subtitle>Features & Benefits of Angular 2.0</md-card-subtitle>
        <p>The new Angular version is designed with a mobile-first approach, 
        including mobile-specific features like touch support, low memory 
        and bandwidth usage on mobile devices, performance tuning and material
         design UI elements etc. </p>
   </md-card-content>
    
</md-card>

<md-card>
   <md-card-title-group>
      <img md-card-lg-image src="./t.jpg">
      <md-card-title>Observables</md-card-title>
      <md-card-subtitle>Asynchronous Data Streams</md-card-subtitle>
   </md-card-title-group>
   <button md-button (click) = "myClick()">Read More</button> 

</md-card>

	
<div class="card-container">

			<md-card>
        <md-card-title> CLI with Continuous Integration and Workflow  </md-card-title>
        <md-card-subtitle>About the cli</md-card-subtitle>
        <md-card-content>
        <ul> 
          <li *ngFor=" let author of authors"> 
          {{author}}
        </li>
    </ul>
    </md-card-content>	
    </md-card>
</div>


<md-card>
   <md-card-title-group>
      <img md-card-lg-image src="./jj.jpg">
      <md-card-title>Angular Command Line Interface</md-card-title>
      <md-card-subtitle>node_modules/angular-cli
      </md-card-subtitle>
   </md-card-title-group>
      <button md-button>Read More</button>
</md-card>

<div class="card-container">

			<md-card>
        <md-card-title>WebManifest  </md-card-title>
        
        <md-card-content>
        <ul> 
          <li *ngFor=" let author of webs"> 
          {{author}}
        </li>
    </ul>
    </md-card-content>	
    </md-card>
</div>

<md-card>
   <md-card-header>
      <img md-card-avatar src="./yy.jpg">
      <md-card-title>Benefits</md-card-title>
      <md-card-subtitle>Additional Angular 2.0 info</md-card-subtitle>
   </md-card-header>
        <img md-card-image src ="./yy.jpg">
   <md-card-content>
      <p>Progressive Web Application based on a Modern Web Stack by the Angular2 team at Google.
       Progressive Web Applications provide for a native web app like experiencebut when they are run on a browser.
       One codebases  for iOS, Android and the Web. 
Progressive loading and rendering. 
Work as a web app without installs on phones. 
Application shell renders immediately. 
</p>
   </md-card-content>
        <button md-button>LIKE</button>
        <button md-button>SHARE</button>
        <button md-button>SEND</button>
</md-card>

  `,
  styles: [`
	  md-card {
     box-sizing: border-box;
     margin:16px;
    }
  `],
  directives: [
    APP_SHELL_DIRECTIVES,
	MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    MdAnchor
  ],
  providers: [ MdIconRegistry],
})
export class TestComponent {
loader = false;

    constructor(private router: Router){

    }
  myClick()
    {
         this.router.navigate(['Testr']);
    }
  title = 'app worksd!';

authors = ["Scaffold application" , "Install dependencies", "Generate service worker for app caching support", "Preprocess CSS", "Pre-render with CSS and HTML for the initial view"];
authorzzzzzzzzzzz = ["Scaffold application" , "Install dependencies", "Generate service worker for app caching support", "Preprocess CSS", "Pre-render with CSS and HTML for the initial view"];

webs = ["Task Switcher" , "Splash screen"," Web app install banner", "Add-to-home-screen prompts",   "Distinct Launcher icon at phone home screen"];
title2 = "CLI with Continuous Integration and Workflow";


}



             
	      /*   <button md-button [routerLink] = "['Testr']">Read Mo Bitch</button>




              <button md-button (click) = "myClick()">Read More</button> 

*/