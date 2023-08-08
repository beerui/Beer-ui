import{S as G,i as H,s as J,d as U,Q as E,v as W,a3 as P,o as p,a as j,n as D,c as N,p as O,q as R,j as g,r as v,w as q,K as C,b as S,L as X,M,R as V,T as A,U as I,h as K,f as L,N as Y,O as Z}from"./index.21613952.js";const Q="src/lib/be-switch/BeSwitch.svelte",x=s=>({prop:s&1}),T=s=>({prop:s[0]});function k(s){let o,n,c,w,b,l,h,d;const u=s[11]["checked-slot"],i=E(u,s,s[10],T),m=s[11].default,r=E(m,s,s[10],null),_={c:function(){i&&i.c(),o=j(),r&&r.c(),n=j(),c=D("div"),w=D("span"),this.h()},l:function(t){i&&i.l(t),o=N(t),r&&r.l(t),n=N(t),c=O(t,"DIV",{name:!0,class:!0});var a=R(c);w=O(a,"SPAN",{class:!0,style:!0}),R(w).forEach(g),a.forEach(g),this.h()},h:function(){v(w,"class","be-switch__core"),v(w,"style",b="width: "+s[1]+"px;"+s[3]),q(w,Q,46,2,1166),v(c,"name",s[2]),v(c,"class","be-switch"),C(c,"is-checked",s[0]),C(c,"is-disabled",s[4]),q(c,Q,38,0,1026)},m:function(t,a){i&&i.m(t,a),S(t,o,a),r&&r.m(t,a),S(t,n,a),S(t,c,a),X(c,w),l=!0,h||(d=[M(c,"click",s[5],!1,!1,!1),M(c,"keydown",s[12],!1,!1,!1)],h=!0)},p:function(t,[a]){i&&i.p&&(!l||a&1025)&&V(i,u,t,t[10],l?I(u,t[10],a,x):A(t[10]),T),r&&r.p&&(!l||a&1024)&&V(r,m,t,t[10],l?I(m,t[10],a,null):A(t[10]),null),(!l||a&10&&b!==(b="width: "+t[1]+"px;"+t[3]))&&v(w,"style",b),(!l||a&4)&&v(c,"name",t[2]),(!l||a&1)&&C(c,"is-checked",t[0]),(!l||a&16)&&C(c,"is-disabled",t[4])},i:function(t){l||(K(i,t),K(r,t),l=!0)},o:function(t){L(i,t),L(r,t),l=!1},d:function(t){i&&i.d(t),t&&g(o),r&&r.d(t),t&&g(n),t&&g(c),h=!1,Y(d)}};return U("SvelteRegisterBlock",{block:_,id:k.name,type:"component",source:"",ctx:s}),_}function $(s,o,n){let c,{$$slots:w={},$$scope:b}=o;W("BeSwitch",w,["checked-slot","default"]);const l=P();let{checked:h=!1}=o,{disabled:d=!1}=o,{width:u=40}=o,{activeColor:i=""}=o,{name:m=""}=o,{inactiveColor:r=""}=o,{beforeChange:_=()=>!0}=o,f="";function t(){_()&&!c&&B()}function a(e){let y=e?i:r;n(3,f="border-color:"+y+";background-color:"+y)}function B(){const e=!h;n(0,h=e),l("change",e)}p(()=>{(i||r)&&a(h)});const z=["checked","disabled","width","activeColor","name","inactiveColor","beforeChange"];Object.keys(o).forEach(e=>{!~z.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<BeSwitch> was created with unknown prop '${e}'`)});function F(e){Z.call(this,s,e)}return s.$$set=e=>{"checked"in e&&n(0,h=e.checked),"disabled"in e&&n(6,d=e.disabled),"width"in e&&n(1,u=e.width),"activeColor"in e&&n(7,i=e.activeColor),"name"in e&&n(2,m=e.name),"inactiveColor"in e&&n(8,r=e.inactiveColor),"beforeChange"in e&&n(9,_=e.beforeChange),"$$scope"in e&&n(10,b=e.$$scope)},s.$capture_state=()=>({onMount:p,createEventDispatcher:P,dispatch:l,checked:h,disabled:d,width:u,activeColor:i,name:m,inactiveColor:r,beforeChange:_,switchColor:f,switchValue:t,setBackgroundColor:a,handleChange:B,switchDisabled:c}),s.$inject_state=e=>{"checked"in e&&n(0,h=e.checked),"disabled"in e&&n(6,d=e.disabled),"width"in e&&n(1,u=e.width),"activeColor"in e&&n(7,i=e.activeColor),"name"in e&&n(2,m=e.name),"inactiveColor"in e&&n(8,r=e.inactiveColor),"beforeChange"in e&&n(9,_=e.beforeChange),"switchColor"in e&&n(3,f=e.switchColor),"switchDisabled"in e&&n(4,c=e.switchDisabled)},o&&"$$inject"in o&&s.$inject_state(o.$$inject),s.$$.update=()=>{s.$$.dirty&385&&(i||r)&&a(h),s.$$.dirty&64&&n(4,c=d)},[h,u,m,f,c,t,d,i,r,_,b,w,F]}class te extends G{constructor(o){super(o),H(this,o,$,k,J,{checked:0,disabled:6,width:1,activeColor:7,name:2,inactiveColor:8,beforeChange:9}),U("SvelteRegisterComponent",{component:this,tagName:"BeSwitch",options:o,id:k.name})}get checked(){throw new Error("<BeSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set checked(o){throw new Error("<BeSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get disabled(){throw new Error("<BeSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set disabled(o){throw new Error("<BeSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get width(){throw new Error("<BeSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set width(o){throw new Error("<BeSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get activeColor(){throw new Error("<BeSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set activeColor(o){throw new Error("<BeSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get name(){throw new Error("<BeSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(o){throw new Error("<BeSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get inactiveColor(){throw new Error("<BeSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set inactiveColor(o){throw new Error("<BeSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get beforeChange(){throw new Error("<BeSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set beforeChange(o){throw new Error("<BeSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{te as B};