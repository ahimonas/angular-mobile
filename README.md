# angular-mobile

ROUTING

app.component.ts 

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {TestComponent} from './test.component';

import {TestrComponent} from './testr.component';

import {StarComponent} from './star.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
   <button md-button [routerLink] = "['Star']">Star</button>
   <button md-button [routerLink] = "['Test']">Test</button>
   //I used this 
    <span md-line  [routerLink] = "[view.name]">{{view.name}}</span>

    //defuault router outlet put it one time in app.component after the buttons 
    <router-outlet *shellNoRender></router-outlet> 
`


directives: (ROUTER_DIRECTIVES)
providers: [ROUTER_PROVIDERS]
}

put this before export class 
@RouteConfig([
    {path: '/stars', name: 'Stars', component: StarComponent, useAsDefault: true},
 {path: '/test', name: 'Test',  component: TestComponent},
 {path: '/testr', name: 'Testr',  component: TestComponent}
  ])

---------------------------------------------------------------------------------------------------

main.ts 

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, APP_SHELL_RUNTIME_PROVIDERS]);
----------------------------------------------------------------------------
---------------------------------------------------------------------------

IMPERATIVE NAVIGATION (WITHIN MODULE REDIRECTS/COMPONENT REDIRECTS) 

test.component.ts (This will have a button to redirect to Testr)

import { Router, RouteParams} from '@angular/router-deprecated'; //Took out all the other imports, didnt need to add as directives 

<button md-button (click) = "myClick()">Read More</button> 

--------------------------------------------------------------------------

In testR, need to pass the router to the constructor then make a method in the component to navigate to the ne tab 

export class ContactComponent {


   
 constructor(private _router: Router){

    }

 

  myClick()
    {
        
 this._router.navigate(['Albums']);
   
 }


}
-------------------------------------------------------------------------------------

for icon 
add bootstrap to index.html 

add loading-indicator.ts


export class AppComponent extends LoadingPage {


 constructor() {
    super(true);
    setTimeout(() => {
      this.ready();
    }, 800);
  }
