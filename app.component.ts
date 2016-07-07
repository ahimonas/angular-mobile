import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AuxRoute} from '@angular/router-deprecated';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';

import {TestComponent} from './test.component';
import {TestrComponent} from './testr.component';
import {StarComponent} from './star.component';

import {LoadingIndicator, LoadingPage} from './loading-indicator';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `

  <body bgcolor="#E6E6FA">

 <md-sidenav-layout fullscreen>
      <md-sidenav #sidenav>
        <md-nav-list *shellNoRender>
          <a md-list-item *ngFor="let view of views">
            <span md-line    [routerLink] = "[view.name]">{{view.name}}
            <span md-line >{{view.description}}
            </span>
            </span>
          </a>
        </md-nav-list>
      </md-sidenav>
      <md-toolbar color="accent">
        <button md-icon-button (click)="sidenav.open()">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </button>
        Angular 2 Progressive Application
      </md-toolbar>
      
      <router-outlet *shellNoRender></router-outlet>
    </md-sidenav-layout>

    </body>

<br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div align="center" *ngIf ="loading">
        <i class = "fa fa-spinner fa-spin fa-5x"></i>
    </div> 




  `,
  styles: [`
     md-sidenav-layout {
      background: rgba(0,0,0,0.00);
    }
	
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
    MdInput,
    TestrComponent,
    TestComponent,
    StarComponent,
    ROUTER_DIRECTIVES,
    LoadingIndicator
  ],
  providers: [ROUTER_PROVIDERS, MdIconRegistry ],
})

/*warn and accent      {path:'/testr', name: 'Testr', component: TestrComponent },


@RouteConfig([
    {path:'/test', name: 'Test', component: TestComponent, useAsDefault: true },
    
    {path:'/star', name: 'Star', component: StarComponent },
    {path:'/testr', name: 'Testr', component: TestrComponent },
    {path:'/*other', name: 'Other', redirectTo: ['Test']}

,
    {path:'/testr', name: 'Testr', component: TestrComponent },
    {path:'/*other', name: 'Other', redirectTo: ['Test']}
])
 */
@RouteConfig([
    {path:'/test', name: 'Test', component: TestComponent, useAsDefault: true },
      {path:'/testr', name: 'Testr', component: TestrComponent },
    {path:'/star', name: 'Star', component: StarComponent },
        {path:'/*other', name: 'Other', redirectTo: ['Test']}


])

export class AppComponent extends LoadingPage {


 constructor() {
    super(true);
    setTimeout(() => {
      this.ready();
    }, 1000);
  }

  title = 'app worksd!';

varz = true; 

    views: Object[] = [
    {
      name: "Test",
      description: "AngularJS 2.0",
      icon: "assignment_ind"
    },
    {
      name: "Star",
      description: "Your Areas of Expertise",
      icon: "pets"
    }
  ];

authors = ["Scaffold application" , "Install dependencies", "Generate service worker for app caching support", "Preprocess CSS", "Pre-render with CSS and HTML for the initial view"];
title2 = "CLI with Continuous Integration and Workflow";





  
}
/*
@RouteConfig([
    {path: '/stars', name: 'Stars', component: StarComponent, useAsDefault: true},
 {path: '/test', name: 'Test',  component: TestComponent}
  ])
      {path:'/testr', name: 'Testr', component: TestrComponent },



      <router-outlet *shellNoRender></router-outlet>





          ObserveComponent,
              {path:'/observ', name: 'Observe', component: ObserveComponent },
    TestrComponent,


  <div *ngIf ="isLoading">
        <i class = "fa fa-spinner fa-spin fa-5x"></i>
    </div> 

  */