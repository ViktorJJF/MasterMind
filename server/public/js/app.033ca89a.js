(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},r={app:0},n=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"014d":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),r=i("bb71");i("da64");a["a"].use(r["a"],{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-app",[i("router-view")],1)],1)},s=[],o=i("2877"),l=i("6544"),c=i.n(l),u=i("7496"),d={},p=Object(o["a"])(d,n,s,!1,null,null,null),A=p.exports;c()(p,{VApp:u["a"]});var b=i("8c4f"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-navigation-drawer",{staticClass:"grey lighten-4",attrs:{fixed:"",clipped:"","disable-resize-watcher":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[i("v-list",{staticClass:"pa-0"},[i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("img",{attrs:{src:"data:image/jpeg;base64,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"}})]),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Napoleon Hill")])],1)],1)],1)],1),i("v-divider"),i("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},t._l(t.items,function(e,a){return i("div",[e.heading?i("v-layout",{key:a,attrs:{row:"","align-center":""}},[i("v-flex",{attrs:{xs6:""}},[i("v-subheader",[t._v(t._s(e.heading))])],1)],1):e.divider?i("v-divider",{key:a,staticClass:"my-3",attrs:{dark:""}}):i("v-list-tile",{key:a,attrs:{to:e.to},on:{click:function(i){return t.clickNav(e.text)}}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[i("v-list-tile-title",{staticClass:"grey--text"},[t._v(t._s(e.text))])],1)],1)],1)}),0)],1),i("v-toolbar",{attrs:{color:"amber",app:"",fixed:"","clipped-left":""}},[i("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),i("span",{staticClass:"title m1-3 mr-5"},[t._v("\n      Master\n      "),i("span",{staticClass:"font-weight-light"},[t._v("Mind")])]),i("v-text-field",{attrs:{name:"search",label:"Search",id:"searchbar",flat:"","hide-details":"","solo-inverted":"","prepend-inner-icon":"search"}}),i("v-spacer")],1),i("v-content",{staticClass:"grey lighten-4",attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[i("v-container",{attrs:{fluid:""}},[i("router-view")],1)],1)],1)},f=[],g={data:function(){return{drawer:null,items:[{icon:"lightbulb_outline",text:"Ideas",to:"/ideas"},{icon:"touch_app",text:"Objetivos diarios",to:"/objetivos-diarios"},{divider:!0},{heading:"Labels"},{icon:"add",text:"Create new label"},{divider:!0},{icon:"archive",text:"Archive"},{icon:"delete",text:"Trash"},{divider:!0},{icon:"settings",text:"Settings"},{icon:"chat_bubble",text:"Trash"},{icon:"help",text:"Help"},{icon:"phonelink",text:"App downloads"},{icon:"keyboard",text:"Keyboard shortcuts"}]}},methods:{send:function(t,e){(t.length>0||e.length)&&(this.notes.unshift({title:t,text:e}),this.title="",this.text=""),this.seen=!1},closeMenu:function(){this.isMenu?(this.inMenu=!0,this.isMenu=!1):this.inMenu=!1},opMenu:function(t,e){0==t?this.notes.splice(e,1):1==t&&alert("Change Labels"),this.inMenu=!1}}},B=g,h=(i("f55a"),i("a523")),x=i("549c"),E=i("ce7e"),m=i("0e8f"),Q=i("132d"),w=i("a722"),C=i("8860"),j=i("ba95"),O=i("40fe"),U=i("c954"),y=i("5d23"),D=i("f774"),I=i("9910"),S=i("e0c7"),T=i("2677"),k=i("71d9"),q=i("706c"),K=Object(o["a"])(B,v,f,!1,null,"baee838a",null),L=K.exports;c()(K,{VContainer:h["a"],VContent:x["a"],VDivider:E["a"],VFlex:m["a"],VIcon:Q["a"],VLayout:w["a"],VList:C["a"],VListTile:j["a"],VListTileAction:O["a"],VListTileAvatar:U["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VNavigationDrawer:D["a"],VSpacer:I["a"],VSubheader:S["a"],VTextField:T["a"],VToolbar:k["a"],VToolbarSideIcon:q["a"]});var N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Ideas")])])}],V={},P=V,J=Object(o["a"])(P,N,M,!1,null,"a37859dc",null),F=J.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-lg":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",[i("v-card-title",{attrs:{"primary-title":""}},[i("v-container",[i("h3",{staticClass:"headline mb-0"},[t._v("Añadir nuevo objetivo")]),i("v-layout",{attrs:{row:"","justify-space-between":""}},[i("v-flex",{attrs:{sm6:""}},[i("v-text-field",{attrs:{label:"El dia de hoy haré..."},model:{value:t.newObjetive.description,callback:function(e){t.$set(t.newObjetive,"description",e)},expression:"newObjetive.description"}})],1),i("v-flex",{attrs:{sm6:""}},[i("v-text-field",{attrs:{label:"para antes de..."},model:{value:t.newObjetive.timeLimit,callback:function(e){t.$set(t.newObjetive,"timeLimit",e)},expression:"newObjetive.timeLimit"}})],1)],1),i("v-btn",{attrs:{round:"",color:"primary",dark:""},on:{click:t.addObjetive}},[t._v("Añadir objetivo")])],1)],1)],1)],1),i("v-flex",{attrs:{xs12:""}},[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-title",[t._v("Objetivos del día de hoy")]),i("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}})],1),i("v-data-table",{staticClass:"elevation-1",attrs:{expand:"",headers:t.headers,items:t.goals,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",{staticClass:"text-xs-left"},[i("v-switch",{attrs:{color:"red"},model:{value:e.item.state,callback:function(i){t.$set(e.item,"state",i)},expression:"props.item.state"}})],1),i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.description))]),i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.timeLimit))]),i("td",{staticClass:"justify-center layout px-0"},[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(i){return t.editItem(e.item)}}},[t._v("edit")]),i("v-icon",{attrs:{small:""},on:{click:function(i){return t.deleteObjetive(e.item)}}},[t._v("delete")])],1)]}}])})],1)],1)],1)},R=[],G=function(t){return JSON.parse(JSON.stringify(t))},Y=i("bc3a"),X=i.n(Y),H={data:function(){return{goals:[],newObjetive:{state:!1,description:"",timeLimit:""},headers:[{text:"¿Lo hiciste?",align:"left",sortable:!1,value:"state"},{text:"Descripción",value:"description",align:"left"},{text:"Plazo",value:"timeLimit",align:"left"},{text:"Acciones",value:"name",sortable:!1,align:"center"}]}},mounted:function(){this.getObjetivesAPI()},methods:{getObjetivesAPI:function(){var t=this;X.a.get("/api/goals").then(function(e){t.goals=e.data.goals}).catch(function(t){console.log(t)})},addObjetive:function(){var t=this;X.a.post("/api/goals",{state:this.newObjetive.state,description:this.newObjetive.description,timeLimit:this.newObjetive.timeLimit}).then(function(e){t.goals.push(G(t.newObjetive))}).catch(function(t){console.log(t)})},deleteObjetive:function(t){var e=this.goals.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.goals.splice(e,1)}}},z=H,Z=i("8336"),_=i("b0af"),$=i("12b2"),tt=i("8fea"),et=i("b73d"),it=i("2a7f"),at=Object(o["a"])(z,W,R,!1,null,"61ae1d5e",null),rt=at.exports;c()(at,{VBtn:Z["a"],VCard:_["a"],VCardTitle:$["a"],VContainer:h["a"],VDataTable:tt["a"],VDivider:E["a"],VFlex:m["a"],VIcon:Q["a"],VLayout:w["a"],VSwitch:et["a"],VTextField:T["a"],VToolbar:k["a"],VToolbarTitle:it["a"]}),a["a"].use(b["a"]);var nt=new b["a"]({mode:"history",base:"/",routes:[{path:"/",component:L,children:[{path:"/ideas",name:"ideas",component:F},{path:"/objetivos-diarios",name:"dailyGoals",component:rt}]}]}),st=i("2f62");a["a"].use(st["a"]);var ot=new st["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:nt,store:ot,render:function(t){return t(A)}}).$mount("#app")},f55a:function(t,e,i){"use strict";var a=i("014d"),r=i.n(a);r.a}});
//# sourceMappingURL=app.033ca89a.js.map