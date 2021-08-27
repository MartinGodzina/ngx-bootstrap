(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/yP2":function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-success"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        triggers="focus">\n  Dismissible tooltip\n</button>\n\n'},"25V0":function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-placement',\n  templateUrl: './placement.html'\n})\nexport class DemoTooltipPlacementComponent {}\n"},"2piz":function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-custom-content',\n  templateUrl: './custom-content.html'\n})\nexport class DemoTooltipCustomContentComponent {\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},"3w6H":function(t,n,o){"use strict";o.r(n),n.default='<div class="row" style="position: relative; overflow: hidden; padding-top: 10px;">\n  <div class="col-xs-12 col-12">\n    <button type="button" class="btn btn-danger"\n            tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n      Default tooltip\n    </button>\n    <button type="button" class="btn btn-success"\n            tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n            container="body">\n      Tooltip appended to body\n    </button>\n  </div>\n</div>\n\n'},"4Ovh":function(t,n,o){"use strict";o.r(n),n.default='<p>\n  <span tooltip="Hello there! I was triggered manually"\n        triggers="" #pop="bs-tooltip">\n  This text has attached tooltip\n  </span>\n</p>\n\n<button type="button" class="btn btn-success" (click)="pop.show()">\n  Show\n</button>\n<button type="button" class="btn btn-warning" (click)="pop.hide()">\n  Hide\n</button>\n<button type="button" class="btn btn-info" (click)="pop.toggle()">\n  Toggle\n</button>\n\n'},"7AFF":function(t,n,o){"use strict";o.r(n),n.default="import { TooltipModule } from 'ngx-bootstrap/tooltip';\n\n@NgModule({\n  imports: [TooltipModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},"8FyH":function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-adaptive-position',\n  templateUrl: './adaptive-position.html'\n})\nexport class DemoTooltipAdaptivePositionComponent {}\n"},AA4K:function(t,n,o){"use strict";o.r(n),n.default='<ng-template #popTemplate>Here we go: <div [innerHtml]="html"></div></ng-template>\n<button type="button" class="btn btn-success"\n        [tooltip]="popTemplate">\n  Show me tooltip with html\n</button>\n'},Bmhy:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-primary"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Simple demo\n</button>\n\n'},EZKN:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-delay',\n  templateUrl: './delay.html'\n})\nexport class DemoTooltipDelayComponent {}\n"},Fxh6:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-triggers-manual',\n  templateUrl: './triggers-manual.html'\n})\nexport class DemoTooltipTriggersManualComponent {}\n"},Gy7B:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoTooltipBasicComponent {}\n"},HnDf:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-info"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  I have component level styling\n</button>\n'},Ky7S:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        [adaptivePosition]="false"\n        placement="top">\n  Tooltip on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        [adaptivePosition]="false"\n        placement="right">\n  Tooltip on right\n</button>\n'},MZeL:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\nimport { TooltipConfig } from 'ngx-bootstrap/tooltip';\n\n// such override allows to keep some initial values\n\nexport function getAlertConfig(): TooltipConfig {\n  return Object.assign(new TooltipConfig(), {\n    placement: 'right',\n    container: 'body',\n    delay: 500\n  });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]\n})\nexport class DemoTooltipConfigComponent {}\n"},MnOu:function(t,n,o){"use strict";o.r(n),n.default='<ng-template #tolTemplate>Just another: {{content}}</ng-template>\n<button type="button" class="btn btn-warning" [tooltip]="tolTemplate">\n  TemplateRef binding\n</button>\n'},MtuP:function(t,n,o){"use strict";o.r(n),n.default='\n<div class="row">\n  <div class="col-xs-6 col-6">\n    <p>Desktop</p>\n    <button type="button" class="btn btn-info"\n            tooltip="I will hide on click"\n            triggers="mouseenter:click">\n      Hover over me!\n    </button>\n  </div>\n\n  <div class="col-xs-6 col-6">\n    <p>Mobile</p>\n    <button type="button" class="btn btn-info"\n            tooltip="I will hide on click"\n            triggers="click">\n      Click on me!\n    </button>\n  </div>\n</div>\n'},NR2i:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-styling-local',\n  templateUrl: './styling-local.html',\n  styles: [\n    `\n      :host >>> .tooltip-inner {\n        background-color: #009688;\n        color: #fff;\n      }\n      :host >>> .tooltip.top .tooltip-arrow:before,\n      :host >>> .tooltip.top .tooltip-arrow {\n        border-top-color: #009688;\n      }\n    `\n  ]\n})\nexport class DemoTooltipStylingLocalComponent {}\n"},OGJW:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-container',\n  templateUrl: './container.html'\n})\nexport class DemoTooltipContainerComponent {}\n"},RYlz:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-class',\n  templateUrl: './class.html'\n})\nexport class DemoTooltipClassComponent {}\n"},SsGL:function(t,n,o){"use strict";o.r(n),o.d(n,"TooltipSectionComponent",function(){return H}),o.d(n,"DemoTooltipModule",function(){return A});var e=o("ofXK"),i=o("3Pt+"),l=o("tyNb"),s=o("Fxtf"),a=o("ADEl"),c=o("fXoL");let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-adaptive-position"]],decls:4,vars:2,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","top",1,"btn","btn-default","btn-secondary","mb-2",3,"adaptivePosition"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","right",1,"btn","btn-default","btn-secondary","mb-2",3,"adaptivePosition"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," Tooltip on top\n"),c.Rb(),c.Sb(2,"button",1),c.Cc(3," Tooltip on right\n"),c.Rb()),2&t&&(c.hc("adaptivePosition",!1),c.Ab(2),c.hc("adaptivePosition",!1))},directives:[s.b],encapsulation:2}),t})(),r=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-basic"]],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," Simple demo\n"),c.Rb())},directives:[s.b],encapsulation:2}),t})(),p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-class"]],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","containerClass","customClass",1,"btn","btn-primary"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," Demo with custom class\n"),c.Rb())},directives:[s.b],encapsulation:2}),t})();function m(){return Object.assign(new s.a,{placement:"right",container:"body",delay:500})}let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-config"]],features:[c.zb([{provide:s.a,useFactory:m}])],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," Preconfigured tooltip\n"),c.Rb())},directives:[s.b],encapsulation:2}),t})(),d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-container"]],decls:6,vars:0,consts:[[1,"row",2,"position","relative","overflow","hidden","padding-top","10px"],[1,"col-xs-12","col-12"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-danger"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","container","body",1,"btn","btn-success"]],template:function(t,n){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"button",2),c.Cc(3," Default tooltip "),c.Rb(),c.Sb(4,"button",3),c.Cc(5," Tooltip appended to body "),c.Rb(),c.Rb(),c.Rb())},directives:[s.b],encapsulation:2}),t})();function f(t,n){if(1&t&&c.Cc(0),2&t){const t=c.bc();c.Ec("Just another: ",t.content,"")}}let g=(()=>{class t{constructor(){this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-custom-content"]],decls:4,vars:1,consts:[["tolTemplate",""],["type","button",1,"btn","btn-warning",3,"tooltip"]],template:function(t,n){if(1&t&&(c.Ac(0,f,1,1,"ng-template",null,0,c.Bc),c.Sb(2,"button",1),c.Cc(3," TemplateRef binding\n"),c.Rb()),2&t){const t=c.rc(1);c.Ab(2),c.hc("tooltip",t)}},directives:[s.b],encapsulation:2}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-delay"]],decls:2,vars:1,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary",3,"delay"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," Tooltip with 0.5sec delay\n"),c.Rb()),2&t&&c.hc("delay",500)},directives:[s.b],encapsulation:2}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-dismiss"]],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","triggers","focus",1,"btn","btn-success"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," Dismissible tooltip\n"),c.Rb())},directives:[s.b],encapsulation:2}),t})(),v=(()=>{class t{constructor(){this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-dynamic"]],decls:2,vars:1,consts:[["type","button",1,"btn","btn-info",3,"tooltip"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," Simple binding\n"),c.Rb()),2&t&&c.hc("tooltip",n.content)},directives:[s.b],encapsulation:2}),t})();function C(t,n){if(1&t&&(c.Cc(0,"Here we go: "),c.Nb(1,"div",2)),2&t){const t=c.bc();c.Ab(1),c.hc("innerHtml",t.html,c.vc)}}let w=(()=>{class t{constructor(){this.html='<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>'}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-dynamic-html"]],decls:4,vars:1,consts:[["popTemplate",""],["type","button",1,"btn","btn-success",3,"tooltip"],[3,"innerHtml"]],template:function(t,n){if(1&t&&(c.Ac(0,C,2,1,"ng-template",null,0,c.Bc),c.Sb(2,"button",1),c.Cc(3," Show me tooltip with html\n"),c.Rb()),2&t){const t=c.rc(1);c.Ab(2),c.hc("tooltip",t)}},directives:[s.b],encapsulation:2}),t})(),T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-placement"]],decls:10,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","top",1,"btn","btn-default","btn-secondary","mb-2"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","right",1,"btn","btn-default","btn-secondary","mb-2"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","auto",1,"btn","btn-default","btn-secondary","mb-2"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","left",1,"btn","btn-default","btn-secondary","mb-2"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","bottom",1,"btn","btn-default","btn-secondary","mb-2"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," Tooltip on top\n"),c.Rb(),c.Sb(2,"button",1),c.Cc(3," Tooltip on right\n"),c.Rb(),c.Sb(4,"button",2),c.Cc(5," Tooltip auto\n"),c.Rb(),c.Sb(6,"button",3),c.Cc(7," Tooltip on left\n"),c.Rb(),c.Sb(8,"button",4),c.Cc(9," Tooltip on bottom\n"),c.Rb())},directives:[s.b],encapsulation:2}),t})(),x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-styling-local"]],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-info"]],template:function(t,n){1&t&&(c.Sb(0,"button",0),c.Cc(1," I have component level styling\n"),c.Rb())},directives:[s.b],styles:["[_nghost-%COMP%]     .tooltip-inner {\n        background-color: #009688;\n        color: #fff;\n      }\n      [_nghost-%COMP%]     .tooltip.top .tooltip-arrow:before, [_nghost-%COMP%]     .tooltip.top .tooltip-arrow {\n        border-top-color: #009688;\n      }"]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-triggers-custom"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-xs-6","col-6"],["type","button","tooltip","I will hide on click","triggers","mouseenter:click",1,"btn","btn-info"],["type","button","tooltip","I will hide on click","triggers","click",1,"btn","btn-info"]],template:function(t,n){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"p"),c.Cc(3,"Desktop"),c.Rb(),c.Sb(4,"button",2),c.Cc(5," Hover over me! "),c.Rb(),c.Rb(),c.Sb(6,"div",1),c.Sb(7,"p"),c.Cc(8,"Mobile"),c.Rb(),c.Sb(9,"button",3),c.Cc(10," Click on me! "),c.Rb(),c.Rb(),c.Rb())},directives:[s.b],encapsulation:2}),t})(),R=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["demo-tooltip-triggers-manual"]],decls:10,vars:0,consts:[["tooltip","Hello there! I was triggered manually","triggers",""],["pop","bs-tooltip"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-info",3,"click"]],template:function(t,n){if(1&t){const t=c.Tb();c.Sb(0,"p"),c.Sb(1,"span",0,1),c.Cc(3," This text has attached tooltip "),c.Rb(),c.Rb(),c.Sb(4,"button",2),c.Zb("click",function(){return c.uc(t),c.rc(2).show()}),c.Cc(5," Show\n"),c.Rb(),c.Sb(6,"button",3),c.Zb("click",function(){return c.uc(t),c.rc(2).hide()}),c.Cc(7," Hide\n"),c.Rb(),c.Sb(8,"button",4),c.Zb("click",function(){return c.uc(t),c.rc(2).toggle()}),c.Cc(9," Toggle\n"),c.Rb()}},directives:[s.b],encapsulation:2}),t})();const D=[{name:"Usage",anchor:"usage",outlet:a.e,content:{doc:o("7AFF")}},{name:"Examples",anchor:"examples",outlet:a.i,content:[{title:"Basic",anchor:"basic",component:o("Gy7B"),html:o("Bmhy"),outlet:r},{title:"Placement",anchor:"placement",component:o("25V0"),html:o("bWjd"),description:"<p>Four positioning options are available: <code>top</code>, <code>right</code>,\n          <code>bottom</code>, and <code>left</code>. Besides that, <code>auto</code> option may be\n          used to detect a position that fits the component on the screen.</p>",outlet:T},{title:"Disable adaptive position",anchor:"adaptive-position",description:"\n          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",component:o("8FyH"),html:o("Ky7S"),outlet:u},{title:"Dismiss on next click",anchor:"dismiss",component:o("nQEX"),html:o("/yP2"),description:"<p>Use the <code>focus</code> trigger to dismiss tooltips on the next click\n          that the user makes.</p>",outlet:h},{title:"Dynamic Content",anchor:"dynamic-content",component:o("lxp+"),html:o("l1b3"),description:"<p>Pass a string as tooltip content</p>",outlet:v},{title:"Custom content template",anchor:"custom-content-template",component:o("2piz"),html:o("MnOu"),description:'<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,\n        and provide template ref <code>[tooltip]="myId"</code> as tooltip content</p>',outlet:g},{title:"Dynamic Html",anchor:"dynamic-html",component:o("nilH"),html:o("AA4K"),description:"<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you\n          can display any dynamic html</p>",outlet:w},{title:"Append to body",anchor:"append-to-body",component:o("OGJW"),html:o("3w6H"),description:'<p>When you have some styles on a parent element that interfere with a tooltip,\n          you\u2019ll want to specify a <code>container="body"</code> so that the tooltip\u2019s HTML will be\n          appended to body. This will help to avoid rendering problems in more complex components\n          (like our input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>',outlet:d},{title:"Configuring defaults",anchor:"config-defaults",component:o("MZeL"),html:o("fH4f"),outlet:b},{title:"Custom triggers",anchor:"triggers-custom",component:o("nP9c"),html:o("MtuP"),outlet:S},{title:"Manual triggering",anchor:"triggers-manual",component:o("Fxh6"),html:o("4Ovh"),description:'<p>You can manage tooltip using its <code>show()</code>, <code>hide()</code> and <code>toggle()</code> methods.\n          If you want to manage tooltip\'s state manually, use <code>triggers=""</code></p>',outlet:R},{title:"Component level styling",anchor:"styling-local",component:o("NR2i"),html:o("HnDf"),outlet:x},{title:"Custom class",anchor:"custom-class",component:o("RYlz"),html:o("xZr+"),outlet:p},{title:"Tooltip with delay",anchor:"tooltip-delay",component:o("EZKN"),html:o("uesj"),description:"<p>Hold on cursor above button for 0,5 second or more to see delayed tooltip</p>",outlet:y}]},{name:"API Reference",anchor:"api-reference",outlet:a.b,content:[{title:"TooltipDirective",anchor:"tooltip-directive",outlet:a.m},{title:"TooltipConfig",anchor:"tooltip-config",outlet:a.n}]}];var V=o("l/mK"),k=o("jiTH");let H=(()=>{class t{constructor(){this.name="Tooltip",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/tooltip",this.componentContent=D}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["tooltip-section"]],decls:16,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(t,n){1&t&&(c.Sb(0,"demo-section",0),c.Sb(1,"p"),c.Cc(2,"Inspired by the excellent Tipsy jQuery plugin written by Jason Frame. Tooltips are an updated version, which don\u2019t rely on images, use CSS3 for animations, and much more."),c.Rb(),c.Sb(3,"p"),c.Cc(4,"The easiest way to add the tooltip component to your app (will be added to the root module)"),c.Rb(),c.Sb(5,"pre",1),c.Sb(6,"span",2),c.Cc(7,"ng add ngx"),c.Rb(),c.Sb(8,"span",3),c.Cc(9,"-"),c.Rb(),c.Sb(10,"span",2),c.Cc(11,"bootstrap "),c.Rb(),c.Cc(12," --component "),c.Sb(13,"span",2),c.Cc(14,"tooltip"),c.Rb(),c.Rb(),c.Nb(15,"docs-section",4),c.Rb()),2&t&&(c.hc("name",n.name)("src",n.src)("componentContent",n.componentContent),c.Ab(15),c.hc("content",n.componentContent))},directives:[V.a,k.a],encapsulation:2,changeDetection:0}),t})();const P=[{path:"",component:H}];let A=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},imports:[[e.c,i.i,a.g,s.c.forRoot(),l.i.forChild(P)]]}),t})()},bWjd:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="top">\n  Tooltip on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="right">\n  Tooltip on right\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="auto">\n  Tooltip auto\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="left">\n  Tooltip on left\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="bottom">\n  Tooltip on bottom\n</button>\n'},fH4f:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-primary"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Preconfigured tooltip\n</button>\n'},l1b3:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-info" [tooltip]="content">\n  Simple binding\n</button>\n'},"lxp+":function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoTooltipDynamicComponent {\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},nP9c:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-triggers-custom',\n  templateUrl: './triggers-custom.html'\n})\nexport class DemoTooltipTriggersCustomComponent {}\n"},nQEX:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoTooltipDismissComponent {}\n"},nilH:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tooltip-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoTooltipDynamicHtmlComponent {\n  html = `<span class=\"btn-block btn-danger well-sm\">Never trust not sanitized HTML!!!</span>`;\n}\n"},uesj:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-primary"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." [delay]="500">\n  Tooltip with 0.5sec delay\n</button>\n\n'},"xZr+":function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-primary"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." containerClass="customClass">\n  Demo with custom class\n</button>\n\n'}}]);