(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+SxR":function(n,o,t){"use strict";t.r(o),o.default='<div class="checkbox">\n  <label>\n    <input type="checkbox" [(ngModel)]="oneAtATime">\n    Open only one at a time\n  </label>\n</div>\n\n<accordion [closeOthers]="oneAtATime">\n  <accordion-group heading="Header">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group heading="Content 1">\n    <p>Content 1</p>\n  </accordion-group>\n  <accordion-group heading="Content 2">\n    <p>Content 2</p>\n  </accordion-group>\n</accordion>\n'},"/gWE":function(n,o,t){"use strict";t.r(o),o.default='<p>\n  <button type="button" class="btn btn-primary btn-sm" (click)="addGroupItem()">\n    Add Group Item\n  </button>\n</p>\n\n<accordion>\n  <accordion-group *ngFor="let group of groups" [heading]="group.title">\n    {{ group?.content }}\n  </accordion-group>\n</accordion>\n'},"2LZT":function(n,o,t){"use strict";t.r(o),o.default='<p>\n  <button type="button" class="btn btn-primary btn-sm" (click)="isFirstDisabled = !isFirstDisabled">\n    Enable / Disable first panel\n  </button>\n</p>\n\n<accordion>\n  <accordion-group heading="Static Header"\n                   [isDisabled]="isFirstDisabled">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group heading="Content 1">\n    <p>accordion 1</p>\n  </accordion-group>\n  <accordion-group heading="Content 2">\n    <p>accordion 2</p>\n  </accordion-group>\n</accordion>\n'},"7Fms":function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-styling',\n  templateUrl: './styling.html'\n})\nexport class DemoAccordionStylingComponent {\n  customClass = 'customClass';\n  isFirstOpen = true;\n}\n"},"8VTT":function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-opened',\n  templateUrl: './opened.html'\n})\nexport class DemoAccordionOpenedComponent {\n  isFirstOpen = true;\n}\n"},HDV5:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-one-time',\n  templateUrl: './one-at-a-time.html'\n})\nexport class DemoAccordionOneAtATimeComponent {\n  oneAtATime = true;\n}\n"},I376:function(n,o,t){"use strict";t.r(o),o.default='<accordion>\n  <accordion-group heading="Content 1">\n    <p>accordion 1</p>\n  </accordion-group>\n  <accordion-group heading="Initially expanded"\n                   [isOpen]="isFirstOpen">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group heading="Content 2">\n    <p>accordion 3</p>\n  </accordion-group>\n</accordion>\n'},KoGZ:function(n,o,t){"use strict";t.r(o),o.default='<accordion>\n  <accordion-group>\n    <button\n      class="btn btn-link btn-block justify-content-between d-flex w-100  shadow-none"\n      accordion-heading type="button">\n      <div class="pull-left float-left">I can have markup!</div>\n      <span class="badge badge-secondary bg-secondary float-right pull-right">Some HTML here</span>\n    </button>\n    This is just some content to illustrate fancy headings.\n  </accordion-group>\n  <accordion-group>\n    <button class="btn btn-link shadow-none" accordion-heading type="button">\n      I can have markup, too!\n    </button>\n    <span class="badge badge-secondary bg-secondary center">And some HTML here</span>\n  </accordion-group>\n</accordion>\n'},MXXp:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoAccordionDynamicComponent {\n  groups = [\n    {\n      title: 'Dynamic Group Header - 1',\n      content: 'Dynamic Group Body - 1'\n    },\n    {\n      title: 'Dynamic Group Header - 2',\n      content: 'Dynamic Group Body - 2'\n    }\n  ];\n\n  addGroupItem(): void {\n    this.groups.push({\n      title: `Dynamic Group Header - ${this.groups.length + 1}`,\n      content: `Dynamic Group Body - ${this.groups.length + 1}`\n    });\n  }\n}\n"},NmE2:function(n,o,t){"use strict";t.r(o),o.default='<accordion>\n  <accordion-group heading="Static Header, initially expanded"\n                   [panelClass]="customClass"\n                   [isOpen]="isFirstOpen">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group heading="Content 1">\n    <p>accordion 1</p>\n  </accordion-group>\n  <accordion-group heading="Content 2" panelClass="customClass">\n    <p>accordion 2</p>\n  </accordion-group>\n</accordion>\n'},O1cJ:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoAccordionBasicComponent {}\n"},PdF2:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\nimport { getBsVer, IBsVersion } from 'ngx-bootstrap/utils';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-custom-html',\n  templateUrl: './custom-html.html'\n})\nexport class DemoAccordionCustomHTMLComponent {\n  get _getBsVer(): IBsVersion {\n    return getBsVer();\n  }\n}\n"},"Pmx/":function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-animation',\n  templateUrl: './animated.html'\n})\nexport class DemoAccordionAnimatedComponent {}\n"},Trcf:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-manual-toggle',\n  templateUrl: './manual-toggle.html'\n})\nexport class DemoAccordionManualToggleComponent {\n  isOpen = true;\n}\n"},UY6z:function(n,o,t){"use strict";t.r(o),o.default='<accordion [isAnimated]="true">\n  <accordion-group heading="Static Header">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group heading="Another group">\n    <p>Some content</p>\n  </accordion-group>\n  <accordion-group heading="Another group">\n    <p>Some content</p>\n  </accordion-group>\n  <accordion-group heading="Another group">\n    <p>Some content</p>\n  </accordion-group>\n</accordion>\n'},"V+gG":function(n,o,t){"use strict";t.r(o),o.default="import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\nimport { AccordionModule } from 'ngx-bootstrap/accordion';\n\n@NgModule({\n  imports: [\n    BrowserAnimationsModule,\n    AccordionModule.forRoot(),\n    ...\n  ]\n})\nexport class AppModule(){}\n\nAlso should be added web-animations-js polyfill for IE browser (Edge)\n"},gSWE:function(n,o,t){"use strict";t.r(o),o.default='<accordion>\n  <accordion-group heading="Static Header">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group heading="Another group">\n    <p>Some content</p>\n  </accordion-group>\n  <accordion-group heading="Another group">\n    <p>Some content</p>\n  </accordion-group>\n  <accordion-group heading="Another group">\n    <p>Some content</p>\n  </accordion-group>\n</accordion>\n'},gXaP:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\nimport { AccordionConfig } from 'ngx-bootstrap/accordion';\n\n// such override allows to keep some initial values\n\nexport function getAccordionConfig(): AccordionConfig {\n  return Object.assign(new AccordionConfig(), { closeOthers: true });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-config',\n  templateUrl: './config.html',\n  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]\n})\nexport class DemoAccordionConfigComponent {}\n"},jeCK:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-dynamic-body',\n  templateUrl: './dynamic-body.html'\n})\nexport class DemoAccordionDynamicBodyComponent {\n  items = ['Item 1', 'Item 2', 'Item 3'];\n\n  addItem(): void {\n    this.items.push(`Item ${this.items.length + 1}`);\n  }\n\n  removeItem(): void {\n    this.items = this.items.slice(0, this.items.length - 1);\n  }\n}\n"},"jsi+":function(n,o,t){"use strict";t.r(o),o.default='<accordion>\n  <accordion-group heading="Group without isOpenChange event listener">\n    <p>Some content</p>\n  </accordion-group>\n  <accordion-group heading="Group with isOpenChange event listener" (isOpenChange)="log($event)">\n    <p>Some content</p>\n  </accordion-group>\n  <accordion-group heading="Group with isOpenChange event listener" (isOpenChange)="log($event)">\n    <p>Some content</p>\n  </accordion-group>\n</accordion>\n'},u7mN:function(n,o,t){"use strict";t.r(o),t.d(o,"AccordionSectionComponent",function(){return E}),t.d(o,"DemoAccordionModule",function(){return U});var e=t("3Pt+"),c=t("ofXK"),i=t("tyNb"),r=t("fXoL"),a=t("0lfv"),s=t("w31i");const d=["*"],p=function(n){return{"text-muted":n}};function l(n,o){if(1&n&&(r.Sb(0,"button",7),r.Cc(1),r.Rb()),2&n){const n=r.bc();r.hc("ngClass",r.lc(2,p,n.isDisabled)),r.Ab(1),r.Ec(" ",n.heading," ")}}const u=[[["","accordion-heading",""]],"*"],b=["[accordion-heading]","*"];let m=(()=>{class n{constructor(){this.closeOthers=!1,this.isAnimated=!1}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=Object(r.Ib)({factory:function(){return new n},token:n,providedIn:"root"}),n})(),g=(()=>{class n{constructor(n){this.isAnimated=!1,this.closeOthers=!1,this.groups=[],Object.assign(this,n)}closeOtherPanels(n){this.closeOthers&&this.groups.forEach(o=>{o!==n&&(o.isOpen=!1)})}addGroup(n){n.isAnimated=this.isAnimated,this.groups.push(n)}removeGroup(n){const o=this.groups.indexOf(n);-1!==o&&this.groups.splice(o,1)}}return n.\u0275fac=function(o){return new(o||n)(r.Mb(m))},n.\u0275cmp=r.Gb({type:n,selectors:[["accordion"]],hostAttrs:["role","tablist",1,"panel-group",2,"display","block"],hostVars:1,hostBindings:function(n,o){2&n&&r.Bb("aria-multiselectable",o.closeOthers)},inputs:{isAnimated:"isAnimated",closeOthers:"closeOthers"},ngContentSelectors:d,decls:1,vars:0,template:function(n,o){1&n&&(r.gc(),r.fc(0))},encapsulation:2}),n})(),h=(()=>{class n{constructor(n){this.isAnimated=!1,this.panelClass="panel-default",this.isDisabled=!1,this.isOpenChange=new r.n,this._isOpen=!1,this.accordion=n}get isOpen(){return this._isOpen}set isOpen(n){n!==this.isOpen&&(n&&this.accordion.closeOtherPanels(this),this._isOpen=n,Promise.resolve(null).then(()=>{this.isOpenChange.emit(n)}))}get isBs3(){return Object(a.g)()}ngOnInit(){this.accordion.addGroup(this)}ngOnDestroy(){this.accordion.removeGroup(this)}toggleOpen(){this.isDisabled||(this.isOpen=!this.isOpen)}}return n.\u0275fac=function(o){return new(o||n)(r.Mb(g))},n.\u0275cmp=r.Gb({type:n,selectors:[["accordion-group"],["accordion-panel"]],hostAttrs:[1,"panel",2,"display","block"],hostVars:2,hostBindings:function(n,o){2&n&&r.Eb("panel-open",o.isOpen)},inputs:{panelClass:"panelClass",isDisabled:"isDisabled",isOpen:"isOpen",heading:"heading"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:b,decls:9,vars:6,consts:[[1,"panel","card",3,"ngClass"],["role","tab",1,"panel-heading","card-header",3,"ngClass","click"],[1,"panel-title"],["role","button",1,"accordion-toggle"],["class","btn btn-link","type","button",3,"ngClass",4,"ngIf"],["role","tabpanel",1,"panel-collapse","collapse",3,"collapse","isAnimated"],[1,"panel-body","card-block","card-body"],["type","button",1,"btn","btn-link",3,"ngClass"]],template:function(n,o){1&n&&(r.gc(u),r.Sb(0,"div",0),r.Sb(1,"div",1),r.Zb("click",function(){return o.toggleOpen()}),r.Sb(2,"div",2),r.Sb(3,"div",3),r.Ac(4,l,2,4,"button",4),r.fc(5),r.Rb(),r.Rb(),r.Rb(),r.Sb(6,"div",5),r.Sb(7,"div",6),r.fc(8,1),r.Rb(),r.Rb(),r.Rb()),2&n&&(r.hc("ngClass",o.panelClass),r.Ab(1),r.hc("ngClass",o.isDisabled?"panel-disabled":"panel-enabled"),r.Ab(2),r.Bb("aria-expanded",o.isOpen),r.Ab(1),r.hc("ngIf",o.heading),r.Ab(2),r.hc("collapse",!o.isOpen)("isAnimated",o.isAnimated))},directives:[c.k,c.n,s.a],styles:["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]}),n})(),f=(()=>{class n{static forRoot(){return{ngModule:n,providers:[]}}}return n.\u0275mod=r.Kb({type:n}),n.\u0275inj=r.Jb({factory:function(o){return new(o||n)},imports:[[c.c,s.b]]}),n})();var C=t("ADEl");let S=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-animation"]],decls:12,vars:1,consts:[[3,"isAnimated"],["heading","Static Header"],["heading","Another group"]],template:function(n,o){1&n&&(r.Sb(0,"accordion",0),r.Sb(1,"accordion-group",1),r.Cc(2," This content is straight in the template. "),r.Rb(),r.Sb(3,"accordion-group",2),r.Sb(4,"p"),r.Cc(5,"Some content"),r.Rb(),r.Rb(),r.Sb(6,"accordion-group",2),r.Sb(7,"p"),r.Cc(8,"Some content"),r.Rb(),r.Rb(),r.Sb(9,"accordion-group",2),r.Sb(10,"p"),r.Cc(11,"Some content"),r.Rb(),r.Rb(),r.Rb()),2&n&&r.hc("isAnimated",!0)},directives:[g,h],encapsulation:2}),n})(),y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-basic"]],decls:12,vars:0,consts:[["heading","Static Header"],["heading","Another group"]],template:function(n,o){1&n&&(r.Sb(0,"accordion"),r.Sb(1,"accordion-group",0),r.Cc(2," This content is straight in the template. "),r.Rb(),r.Sb(3,"accordion-group",1),r.Sb(4,"p"),r.Cc(5,"Some content"),r.Rb(),r.Rb(),r.Sb(6,"accordion-group",1),r.Sb(7,"p"),r.Cc(8,"Some content"),r.Rb(),r.Rb(),r.Sb(9,"accordion-group",1),r.Sb(10,"p"),r.Cc(11,"Some content"),r.Rb(),r.Rb(),r.Rb())},directives:[g,h],encapsulation:2}),n})();function R(){return Object.assign(new m,{closeOthers:!0})}let A=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-config"]],features:[r.zb([{provide:m,useFactory:R}])],decls:9,vars:1,consts:[[3,"isAnimated"],["heading","Header"],["heading","Content 1"],["heading","Content 2"]],template:function(n,o){1&n&&(r.Sb(0,"accordion",0),r.Sb(1,"accordion-group",1),r.Cc(2," This content is straight in the template. "),r.Rb(),r.Sb(3,"accordion-group",2),r.Sb(4,"p"),r.Cc(5,"Content 1"),r.Rb(),r.Rb(),r.Sb(6,"accordion-group",3),r.Sb(7,"p"),r.Cc(8,"Content 2"),r.Rb(),r.Rb(),r.Rb()),2&n&&r.hc("isAnimated",!0)},directives:[g,h],encapsulation:2}),n})(),O=(()=>{class n{get _getBsVer(){return Object(a.f)()}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-custom-html"]],decls:13,vars:0,consts:[["accordion-heading","","type","button",1,"btn","btn-link","btn-block","justify-content-between","d-flex","w-100","shadow-none"],[1,"pull-left","float-left"],[1,"badge","badge-secondary","bg-secondary","float-right","pull-right"],["accordion-heading","","type","button",1,"btn","btn-link","shadow-none"],[1,"badge","badge-secondary","bg-secondary","center"]],template:function(n,o){1&n&&(r.Sb(0,"accordion"),r.Sb(1,"accordion-group"),r.Sb(2,"button",0),r.Sb(3,"div",1),r.Cc(4,"I can have markup!"),r.Rb(),r.Sb(5,"span",2),r.Cc(6,"Some HTML here"),r.Rb(),r.Rb(),r.Cc(7," This is just some content to illustrate fancy headings. "),r.Rb(),r.Sb(8,"accordion-group"),r.Sb(9,"button",3),r.Cc(10," I can have markup, too! "),r.Rb(),r.Sb(11,"span",4),r.Cc(12,"And some HTML here"),r.Rb(),r.Rb(),r.Rb())},directives:[g,h],encapsulation:2}),n})(),v=(()=>{class n{constructor(){this.isFirstDisabled=!1}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-disabled"]],decls:12,vars:1,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["heading","Static Header",3,"isDisabled"],["heading","Content 1"],["heading","Content 2"]],template:function(n,o){1&n&&(r.Sb(0,"p"),r.Sb(1,"button",0),r.Zb("click",function(){return o.isFirstDisabled=!o.isFirstDisabled}),r.Cc(2," Enable / Disable first panel "),r.Rb(),r.Rb(),r.Sb(3,"accordion"),r.Sb(4,"accordion-group",1),r.Cc(5," This content is straight in the template. "),r.Rb(),r.Sb(6,"accordion-group",2),r.Sb(7,"p"),r.Cc(8,"accordion 1"),r.Rb(),r.Rb(),r.Sb(9,"accordion-group",3),r.Sb(10,"p"),r.Cc(11,"accordion 2"),r.Rb(),r.Rb(),r.Rb()),2&n&&(r.Ab(4),r.hc("isDisabled",o.isFirstDisabled))},directives:[g,h],encapsulation:2}),n})();function w(n,o){if(1&n&&(r.Sb(0,"accordion-group",2),r.Cc(1),r.Rb()),2&n){const n=o.$implicit;r.hc("heading",n.title),r.Ab(1),r.Ec(" ",null==n?null:n.content," ")}}let D=(()=>{class n{constructor(){this.groups=[{title:"Dynamic Group Header - 1",content:"Dynamic Group Body - 1"},{title:"Dynamic Group Header - 2",content:"Dynamic Group Body - 2"}]}addGroupItem(){this.groups.push({title:`Dynamic Group Header - ${this.groups.length+1}`,content:`Dynamic Group Body - ${this.groups.length+1}`})}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-dynamic"]],decls:5,vars:1,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],[3,"heading",4,"ngFor","ngForOf"],[3,"heading"]],template:function(n,o){1&n&&(r.Sb(0,"p"),r.Sb(1,"button",0),r.Zb("click",function(){return o.addGroupItem()}),r.Cc(2," Add Group Item "),r.Rb(),r.Rb(),r.Sb(3,"accordion"),r.Ac(4,w,2,2,"accordion-group",1),r.Rb()),2&n&&(r.Ab(4),r.hc("ngForOf",o.groups))},directives:[g,c.m,h],encapsulation:2}),n})(),x=(()=>{class n{constructor(){this.isOpen=!0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-manual-toggle"]],decls:13,vars:1,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["heading","Content 1"],["heading","Content 2"],["heading","Last panel",3,"isOpen"]],template:function(n,o){1&n&&(r.Sb(0,"p"),r.Sb(1,"button",0),r.Zb("click",function(){return o.isOpen=!o.isOpen}),r.Cc(2,"Toggle last panel "),r.Rb(),r.Rb(),r.Sb(3,"accordion"),r.Sb(4,"accordion-group",1),r.Sb(5,"p"),r.Cc(6,"accordion 1"),r.Rb(),r.Rb(),r.Sb(7,"accordion-group",2),r.Sb(8,"p"),r.Cc(9,"accordion 2"),r.Rb(),r.Rb(),r.Sb(10,"accordion-group",3),r.Sb(11,"p"),r.Cc(12,"accordion 3"),r.Rb(),r.Rb(),r.Rb()),2&n&&(r.Ab(10),r.hc("isOpen",o.isOpen))},directives:[g,h],encapsulation:2}),n})(),G=(()=>{class n{constructor(){this.oneAtATime=!0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-one-time"]],decls:13,vars:2,consts:[[1,"checkbox"],["type","checkbox",3,"ngModel","ngModelChange"],[3,"closeOthers"],["heading","Header"],["heading","Content 1"],["heading","Content 2"]],template:function(n,o){1&n&&(r.Sb(0,"div",0),r.Sb(1,"label"),r.Sb(2,"input",1),r.Zb("ngModelChange",function(n){return o.oneAtATime=n}),r.Rb(),r.Cc(3," Open only one at a time "),r.Rb(),r.Rb(),r.Sb(4,"accordion",2),r.Sb(5,"accordion-group",3),r.Cc(6," This content is straight in the template. "),r.Rb(),r.Sb(7,"accordion-group",4),r.Sb(8,"p"),r.Cc(9,"Content 1"),r.Rb(),r.Rb(),r.Sb(10,"accordion-group",5),r.Sb(11,"p"),r.Cc(12,"Content 2"),r.Rb(),r.Rb(),r.Rb()),2&n&&(r.Ab(2),r.hc("ngModel",o.oneAtATime),r.Ab(2),r.hc("closeOthers",o.oneAtATime))},directives:[e.a,e.m,e.p,g,h],encapsulation:2}),n})(),k=(()=>{class n{log(n){console.log("Accordion has been "+(n?"opened":"closed"))}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-open-event"]],decls:10,vars:0,consts:[["heading","Group without isOpenChange event listener"],["heading","Group with isOpenChange event listener",3,"isOpenChange"]],template:function(n,o){1&n&&(r.Sb(0,"accordion"),r.Sb(1,"accordion-group",0),r.Sb(2,"p"),r.Cc(3,"Some content"),r.Rb(),r.Rb(),r.Sb(4,"accordion-group",1),r.Zb("isOpenChange",function(n){return o.log(n)}),r.Sb(5,"p"),r.Cc(6,"Some content"),r.Rb(),r.Rb(),r.Sb(7,"accordion-group",1),r.Zb("isOpenChange",function(n){return o.log(n)}),r.Sb(8,"p"),r.Cc(9,"Some content"),r.Rb(),r.Rb(),r.Rb())},directives:[g,h],encapsulation:2}),n})(),T=(()=>{class n{constructor(){this.customClass="customClass",this.isFirstOpen=!0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-styling"]],decls:9,vars:2,consts:[["heading","Static Header, initially expanded",3,"panelClass","isOpen"],["heading","Content 1"],["heading","Content 2","panelClass","customClass"]],template:function(n,o){1&n&&(r.Sb(0,"accordion"),r.Sb(1,"accordion-group",0),r.Cc(2," This content is straight in the template. "),r.Rb(),r.Sb(3,"accordion-group",1),r.Sb(4,"p"),r.Cc(5,"accordion 1"),r.Rb(),r.Rb(),r.Sb(6,"accordion-group",2),r.Sb(7,"p"),r.Cc(8,"accordion 2"),r.Rb(),r.Rb(),r.Rb()),2&n&&(r.Ab(1),r.hc("panelClass",o.customClass)("isOpen",o.isFirstOpen))},directives:[g,h],encapsulation:2}),n})(),I=(()=>{class n{constructor(){this.isFirstOpen=!0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-opened"]],decls:9,vars:1,consts:[["heading","Content 1"],["heading","Initially expanded",3,"isOpen"],["heading","Content 2"]],template:function(n,o){1&n&&(r.Sb(0,"accordion"),r.Sb(1,"accordion-group",0),r.Sb(2,"p"),r.Cc(3,"accordion 1"),r.Rb(),r.Rb(),r.Sb(4,"accordion-group",1),r.Cc(5," This content is straight in the template. "),r.Rb(),r.Sb(6,"accordion-group",2),r.Sb(7,"p"),r.Cc(8,"accordion 3"),r.Rb(),r.Rb(),r.Rb()),2&n&&(r.Ab(4),r.hc("isOpen",o.isFirstOpen))},directives:[g,h],encapsulation:2}),n})();function F(n,o){if(1&n&&(r.Sb(0,"div"),r.Cc(1),r.Rb()),2&n){const n=o.$implicit;r.Ab(1),r.Dc(n)}}let M=(()=>{class n{constructor(){this.items=["Item 1","Item 2","Item 3"]}addItem(){this.items.push(`Item ${this.items.length+1}`)}removeItem(){this.items=this.items.slice(0,this.items.length-1)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["demo-accordion-dynamic-body"]],decls:15,vars:1,consts:[["heading","Dynamic Body Content"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["type","button",1,"btn","btn-primary","btn-sm","ms-3","ml-3",3,"click"],[4,"ngFor","ngForOf"],["heading","Content 2"],["heading","Content 3"]],template:function(n,o){1&n&&(r.Sb(0,"accordion"),r.Sb(1,"accordion-group",0),r.Sb(2,"p"),r.Cc(3,"The body of the accordion group grows to fit the contents"),r.Rb(),r.Sb(4,"button",1),r.Zb("click",function(){return o.addItem()}),r.Cc(5,"Add Item "),r.Rb(),r.Sb(6,"button",2),r.Zb("click",function(){return o.removeItem()}),r.Cc(7,"Remove Item "),r.Rb(),r.Ac(8,F,2,1,"div",3),r.Rb(),r.Sb(9,"accordion-group",4),r.Sb(10,"p"),r.Cc(11,"accordion 2"),r.Rb(),r.Rb(),r.Sb(12,"accordion-group",5),r.Sb(13,"p"),r.Cc(14,"accordion 3"),r.Rb(),r.Rb(),r.Rb()),2&n&&(r.Ab(8),r.hc("ngForOf",o.items))},directives:[g,h,c.m],encapsulation:2}),n})();const B=[{name:"Usage",anchor:"usage",outlet:C.e,content:{doc:t("V+gG")}},{name:"Examples",anchor:"examples",outlet:C.i,content:[{title:"Basic",anchor:"basic-accordion",description:"<p>Click headers to expand/collapse content that is broken into logical sections, much\n          like tabs.</p>",component:t("O1cJ"),html:t("gSWE"),outlet:y},{title:"With animation",anchor:"animated-accordion",description:"<p>Use input property or config property <code>isAnimated</code> to enable/disable animation</p>",component:t("Pmx/"),html:t("UY6z"),outlet:S},{title:"Group opening event",anchor:"open-event",description:"<p>Accordion with <code>isOpenChange</code> event listener.</p>",component:t("wtJB"),html:t("jsi+"),outlet:k},{title:"Custom HTML",anchor:"custom-html",component:t("PdF2"),html:t("KoGZ"),outlet:O},{title:"Disabled",anchor:"disabled",component:t("wi2l"),html:t("2LZT"),outlet:v},{title:"Initially opened",anchor:"opened",component:t("8VTT"),html:t("I376"),outlet:I},{title:"Dynamic accordion",anchor:"dynamic-accordion",component:t("MXXp"),html:t("/gWE"),outlet:D},{title:"Dynamic body content",anchor:"dynamic-body",component:t("jeCK"),html:t("wPiE"),outlet:M},{title:"Manual toggle",anchor:"manual-toggle",component:t("Trcf"),html:t("yqhc"),outlet:x},{title:"Open only one at a time",anchor:"one-time",component:t("HDV5"),html:t("+SxR"),outlet:G},{title:"Styling",anchor:"styling",component:t("7Fms"),html:t("NmE2"),outlet:T},{title:"Configuring defaults",anchor:"config",component:t("gXaP"),html:t("zqB3"),outlet:A}]},{name:"API Reference",anchor:"api-reference",outlet:C.b,content:[{title:"AccordionComponent",anchor:"AccordionComponent",outlet:C.m},{title:"AccordionPanelComponent",anchor:"AccordionPanelComponent",outlet:C.m},{title:"AccordionConfig",anchor:"AccordionConfig",outlet:C.n}]}];var H=t("l/mK"),P=t("jiTH");let E=(()=>{class n{constructor(){this.name="Accordion",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/accordion",this.componentContent=B}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=r.Gb({type:n,selectors:[["accordion-section"]],decls:21,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(n,o){1&n&&(r.Sb(0,"demo-section",0),r.Sb(1,"p"),r.Cc(2,"Displays collapsible content panels for presenting information in a limited amount of space"),r.Rb(),r.Sb(3,"p"),r.Cc(4,"The "),r.Sb(5,"strong"),r.Cc(6,"accordion component"),r.Rb(),r.Cc(7," builds on top of the collapse directive to provide a list of items, with collapsible bodies that are collapsed or expanded by clicking on the item's header."),r.Rb(),r.Sb(8,"p"),r.Cc(9,"The easiest way to add an accordion component to your app (will be added to the root module)"),r.Rb(),r.Sb(10,"pre",1),r.Sb(11,"span",2),r.Cc(12,"ng add ngx"),r.Rb(),r.Sb(13,"span",3),r.Cc(14,"-"),r.Rb(),r.Sb(15,"span",2),r.Cc(16,"bootstrap "),r.Rb(),r.Cc(17," --component "),r.Sb(18,"span",2),r.Cc(19,"accordion"),r.Rb(),r.Rb(),r.Nb(20,"docs-section",4),r.Rb()),2&n&&(r.hc("name",o.name)("src",o.src)("componentContent",o.componentContent),r.Ab(20),r.hc("content",o.componentContent))},directives:[H.a,P.a],encapsulation:2,changeDetection:0}),n})();const j=[{path:"",component:E}];let U=(()=>{class n{}return n.routes=j,n.\u0275mod=r.Kb({type:n}),n.\u0275inj=r.Jb({factory:function(o){return new(o||n)},imports:[[f.forRoot(),c.c,e.i,C.g,i.i.forChild(j)]]}),n})()},wPiE:function(n,o,t){"use strict";t.r(o),o.default='<accordion>\n  <accordion-group heading="Dynamic Body Content">\n    <p>The body of the accordion group grows to fit the contents</p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="addItem()">Add\n      Item\n    </button>\n    <button type="button" class="btn btn-primary btn-sm ms-3 ml-3" (click)="removeItem()">Remove\n      Item\n    </button>\n    <div *ngFor="let item of items">{{item}}</div>\n  </accordion-group>\n  <accordion-group heading="Content 2">\n    <p>accordion 2</p>\n  </accordion-group>\n  <accordion-group heading="Content 3">\n    <p>accordion 3</p>\n  </accordion-group>\n</accordion>\n'},wi2l:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-disabled',\n  templateUrl: './disabled.html'\n})\nexport class DemoAccordionDisabledComponent {\n  isFirstDisabled = false;\n}\n"},wtJB:function(n,o,t){"use strict";t.r(o),o.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-accordion-open-event',\n  templateUrl: './open-event.html'\n})\nexport class DemoAccordionOpenEventComponent {\n  log(event: boolean) {\n    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);\n  }\n}\n"},yqhc:function(n,o,t){"use strict";t.r(o),o.default='<p>\n  <button type="button" class="btn btn-primary btn-sm"\n          (click)="isOpen = !isOpen">Toggle last panel\n  </button>\n</p>\n\n<accordion>\n  <accordion-group heading="Content 1">\n    <p>accordion 1</p>\n  </accordion-group>\n  <accordion-group heading="Content 2">\n    <p>accordion 2</p>\n  </accordion-group>\n  <accordion-group [isOpen]="isOpen" heading="Last panel">\n    <p>accordion 3</p>\n  </accordion-group>\n</accordion>\n'},zqB3:function(n,o,t){"use strict";t.r(o),o.default='<accordion [isAnimated]="true">\n  <accordion-group heading="Header">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group heading="Content 1">\n    <p>Content 1</p>\n  </accordion-group>\n  <accordion-group heading="Content 2">\n    <p>Content 2</p>\n  </accordion-group>\n</accordion>\n'}}]);