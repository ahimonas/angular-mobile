
ng new mobile-test --mobile (Npm install hung so after about 20 minutes I used ctr+c to stop the process)
npm install angular-cli
typings install
npm install
(Changed out package .json to match the one baba has (current***)))
npm install
ng serve

Adding material2 to your project

npm install @angular2-material/core --save


open the file angular-cli-build.js
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      ADDD HERE   <-------------
    ]
  });
};

should look like this below 
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
	  '@angular2-material/**/*.js' <-------------
    ]
  });
};




OPSEN 

system-config.ts
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {
  '@angular2-material/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/checkbox': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'checkbox.js'
  },
  // And so on...
};


Example of use material2 component: (in app.component.ts)

import { Component } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
  selector: 'my-app',
  template: `<md-checkbox></md-checkbox>`,
  directives: [MdCheckbox]
})
export class AppComponent { }







Package.json
(current***)

{
  "name": "angular-mobile",
  "version": "0.0.0",
  "license": "MIT",
  "angular-cli": {},
  "scripts": {
    "start": "ng serve",
    "postinstall": "typings install",
    "lint": "tslint \"src/**/*.ts\"",
    "test": "ng test",
    "pree2e": "webdriver-manager update",
    "e2e": "protractor"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "2.0.0-rc.1",
    "@angular/compiler": "2.0.0-rc.1",
    "@angular/core": "2.0.0-rc.1",
    "@angular/http": "2.0.0-rc.1",
    "@angular/platform-browser": "2.0.0-rc.1",
    "@angular/platform-browser-dynamic": "2.0.0-rc.1",
    "@angular/router": "2.0.0-rc.1",
    "@angular2-material/button": "^2.0.0-alpha.5-2",
    "@angular2-material/card": "^2.0.0-alpha.5-2",
    "@angular2-material/core": "^2.0.0-alpha.5-2",
    "@angular2-material/icon": "^2.0.0-alpha.5-2",
    "@angular2-material/input": "^2.0.0-alpha.5-2",
    "@angular2-material/list": "^2.0.0-alpha.5-2",
    "@angular2-material/sidenav": "^2.0.0-alpha.5-2",
    "@angular2-material/toolbar": "^2.0.0-alpha.5-2",
    "es6-shim": "^0.35.0",
    "reflect-metadata": "0.1.3",
    "rxjs": "5.0.0-beta.6",
    "systemjs": "0.19.26",
    "zone.js": "^0.6.12"
  },
  "devDependencies": {
    "@angular/platform-server": "2.0.0-rc.1",
    "@angular/router-deprecated": "2.0.0-rc.1",
    "@angular/service-worker": "^0.2.0",
    "@angular/app-shell": "^0.0.0",
    "angular2-broccoli-prerender": "^0.11.0",
    "angular2-universal": "^0.100.3",
    "angular2-universal-polyfills": "^0.4.1",
    "preboot": "^2.0.10",
    "angular-cli": "^1.0.0-beta.5",
    "codelyzer": "0.0.19",
    "ember-cli-inject-live-reload": "^1.4.0",
    "jasmine-core": "^2.4.1",
    "jasmine-spec-reporter": "^2.4.0",
    "karma": "^0.13.15",
    "karma-chrome-launcher": "^0.2.3",
    "karma-jasmine": "^0.3.8",
    "protractor": "^3.3.0",
    "ts-node": "^0.5.5",
    "tslint": "^3.6.0",
    "typescript": "^1.8.10",
    "typings": "^0.8.1"
  }
}





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
