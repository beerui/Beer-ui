import{S as $,i as ee,s as te,d as D,X as R,v as se,av as ne,a7 as q,a3 as G,t as H,Y as K,n as I,a as L,p as N,q as x,j as P,c as M,r as w,w as j,a1 as O,K as _,b as Y,L as B,M as Q,au as W,a2 as ce,A as oe,f as F,g as ie,h as T,N as ae,O as le,Q as re,x as ue,y as de,z as he,G as X,R as fe,T as be,U as me}from"./index.21613952.js";import{m as U}from"./beerui.dfc24136.js";const A="src/lib/be-checkbox/BeCheckbox.svelte";function J(n){let e;const s={c:function(){e=ue(n[5])},l:function(r){e=de(r,n[5])},m:function(r,l){Y(r,e,l)},p:function(r,l){l&32&&he(e,r[5])},i:X,o:X,d:function(r){r&&P(e)}};return D("SvelteRegisterBlock",{block:s,id:J.name,type:"else",source:"(77:2) {:else}",ctx:n}),s}function Z(n){let e;const s=n[12].default,c=re(s,n,n[11],null),r={c:function(){c&&c.c()},l:function(o){c&&c.l(o)},m:function(o,u){c&&c.m(o,u),e=!0},p:function(o,u){c&&c.p&&(!e||u&2048)&&fe(c,s,o,o[11],e?me(s,o[11],u,null):be(o[11]),null)},i:function(o){e||(T(c,o),e=!0)},o:function(o){F(c,o),e=!1},d:function(o){c&&c.d(o)}};return D("SvelteRegisterBlock",{block:r,id:Z.name,type:"if",source:"(75:2) {#if $$slots.default}",ctx:n}),r}function V(n){let e,s,c,r,l,o,u,i,d,k,h,v,g,b=[U({disabled:n[2],id:n[1],name:n[3]}),{type:"checkbox"},{"aria-hidden":"false"},{class:"be-checkbox__original"},{value:n[5]}],p={};for(let f=0;f<b.length;f+=1)p=R(p,b[f]);const S=[Z,J],m=[];function E(f,a){return f[9].default?0:1}i=E(n),d=m[i]=S[i](n);const C={c:function(){e=I("div"),s=I("span"),c=I("span"),r=L(),l=I("input"),o=L(),u=I("span"),d.c(),this.h()},l:function(a){e=N(a,"DIV",{class:!0,style:!0});var t=x(e);s=N(t,"SPAN",{class:!0});var y=x(s);c=N(y,"SPAN",{class:!0}),x(c).forEach(P),r=M(y),l=N(y,"INPUT",{type:!0,"aria-hidden":!0,class:!0}),y.forEach(P),o=M(t),u=N(t,"SPAN",{class:!0});var z=x(u);d.l(z),z.forEach(P),t.forEach(P),this.h()},h:function(){w(c,"class","be-checkbox__inner"),j(c,A,64,4,1722),O(l,p),j(l,A,65,4,1767),w(s,"class","be-checkbox__input"),_(s,"is-indeterminate",n[4]),_(s,"is-checked",n[0]),_(s,"is-disabled",n[2]),j(s,A,59,2,1562),w(u,"class","be-checkbox__label"),j(u,A,73,1,1939),w(e,"class",n[6]),w(e,"style",k=n[8].style),_(e,"is-checked",n[0]),_(e,"is-disabled",n[2]),j(e,A,51,0,1390)},m:function(a,t){Y(a,e,t),B(e,s),B(s,c),B(s,r),B(s,l),l.autofocus&&l.focus(),B(e,o),B(e,u),m[i].m(u,null),h=!0,v||(g=[Q(e,"click",W(n[7]),!1,!0,!1),Q(e,"keydown",W(n[13]),!1,!0,!1)],v=!0)},p:function(a,[t]){O(l,p=ce(b,[t&14&&U({disabled:a[2],id:a[1],name:a[3]}),{type:"checkbox"},{"aria-hidden":"false"},{class:"be-checkbox__original"},(!h||t&32)&&{value:a[5]}])),(!h||t&16)&&_(s,"is-indeterminate",a[4]),(!h||t&1)&&_(s,"is-checked",a[0]),(!h||t&4)&&_(s,"is-disabled",a[2]);let y=i;i=E(a),i===y?m[i].p(a,t):(oe(),F(m[y],1,1,()=>{m[y]=null}),ie(),d=m[i],d?d.p(a,t):(d=m[i]=S[i](a),d.c()),T(d,1),d.m(u,null)),(!h||t&256&&k!==(k=a[8].style))&&w(e,"style",k),(!h||t&1)&&_(e,"is-checked",a[0]),(!h||t&4)&&_(e,"is-disabled",a[2])},i:function(a){h||(T(d),h=!0)},o:function(a){F(d),h=!1},d:function(a){a&&P(e),m[i].d(),v=!1,ae(g)}};return D("SvelteRegisterBlock",{block:C,id:V.name,type:"component",source:"",ctx:n}),C}function ke(n,e,s){let{$$slots:c={},$$scope:r}=e;se("BeCheckbox",c,["default"]);const l=ne(c),o=q("checkStore"),u=G();let{checked:i=!1}=e,{id:d=""}=e,{disabled:k=""}=e,{name:h=""}=e,{indeterminate:v=!1}=e,{validateEvent:g=!0}=e,{label:b=""}=e;const p=["be-checkbox"];if(o){i=o.isChecked(b);const t=()=>s(0,i=o.isChecked(b));o.subscribe.push(t)}const S=t=>{u("click",{label:b,checked:i}),!k&&(o?(o.setChecked(b),s(0,i=o.isChecked(b))):(s(0,i=!i),u("change",{label:b,checked:i})))},m=q("BeFormItem");let E="",C=!1;m&&m.propWatch.subscribe(t=>E=t);const f=t=>{m&&E&&C&&g&&m.FormItemEventCallback({type:"change",value:[t]})};H().then(()=>{C=!0});function a(t){le.call(this,n,t)}return n.$$set=t=>{s(8,e=R(R({},e),K(t))),"checked"in t&&s(0,i=t.checked),"id"in t&&s(1,d=t.id),"disabled"in t&&s(2,k=t.disabled),"name"in t&&s(3,h=t.name),"indeterminate"in t&&s(4,v=t.indeterminate),"validateEvent"in t&&s(10,g=t.validateEvent),"label"in t&&s(5,b=t.label),"$$scope"in t&&s(11,r=t.$$scope)},n.$capture_state=()=>({createEventDispatcher:G,getContext:q,tick:H,mapAttributes:U,store:o,dispatch:u,checked:i,id:d,disabled:k,name:h,indeterminate:v,validateEvent:g,label:b,_class:p,handleClick:S,ctx:m,prop:E,isInit:C,watchValue:f}),n.$inject_state=t=>{s(8,e=R(R({},e),t)),"checked"in e&&s(0,i=t.checked),"id"in e&&s(1,d=t.id),"disabled"in e&&s(2,k=t.disabled),"name"in e&&s(3,h=t.name),"indeterminate"in e&&s(4,v=t.indeterminate),"validateEvent"in e&&s(10,g=t.validateEvent),"label"in e&&s(5,b=t.label),"prop"in e&&(E=t.prop),"isInit"in e&&(C=t.isInit)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&1&&f(i)},e=K(e),[i,d,k,h,v,b,p,S,e,l,g,r,c,a]}class ge extends ${constructor(e){super(e),ee(this,e,ke,V,te,{checked:0,id:1,disabled:2,name:3,indeterminate:4,validateEvent:10,label:5,class:6}),D("SvelteRegisterComponent",{component:this,tagName:"BeCheckbox",options:e,id:V.name})}get checked(){throw new Error("<BeCheckbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set checked(e){throw new Error("<BeCheckbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get id(){throw new Error("<BeCheckbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set id(e){throw new Error("<BeCheckbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get disabled(){throw new Error("<BeCheckbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set disabled(e){throw new Error("<BeCheckbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get name(){throw new Error("<BeCheckbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<BeCheckbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get indeterminate(){throw new Error("<BeCheckbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set indeterminate(e){throw new Error("<BeCheckbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get validateEvent(){throw new Error("<BeCheckbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set validateEvent(e){throw new Error("<BeCheckbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<BeCheckbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<BeCheckbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get class(){return this.$$.ctx[6]}set class(e){throw new Error("<BeCheckbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ge as B};
