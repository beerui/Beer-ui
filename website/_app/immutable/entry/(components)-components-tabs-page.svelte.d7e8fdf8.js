import{S as Bn,i as wn,s as Dn,d as O,a8 as jt,Q as zo,v as Pn,a3 as Ao,o as Io,n as i,a as T,p as d,q as f,j as l,c as E,r as H,u as Ct,w as u,b as W,L as e,R as No,T as Mo,U as Uo,h as Y,f as K,ab as Wo,O as es,x as g,y as k,a4 as ts,K as pt,a5 as as,M as Vo,z as ns,N as os,B as Yo,_ as qo,C as Ee,I as ss,D as ge,E as ke,F as ye,$ as Ko,X as ls,e as Oo,A as cs,g as rs,a2 as is,aj as ds,G as Hn}from"../chunks/index.21613952.js";import"../chunks/beerui.dfc24136.js";import"../chunks/loading.6fc7a1f8.js";import{c as mn}from"../chunks/index.d5ff37b9.js";import{D as pn}from"../chunks/DemoBlock.d66327e5.js";const he="src/lib/be-tabs/BeTabs.svelte";function Lo(s,t,n){const h=s.slice();return h[16]=t[n],h[17]=t,h[18]=n,h}function Tn(s){let t,n=s[16].label+"",h,a,p,v;function o(){s[11].call(t,s[18])}function c(){return s[12](s[16],s[18])}const r={c:function(){t=i("div"),h=g(n),this.h()},l:function(y){t=d(y,"DIV",{class:!0});var P=f(t);h=k(P,n),P.forEach(l),this.h()},h:function(){H(t,"class","be-tabs__item"),ts(()=>o.call(t)),pt(t,"is-active",s[1]===s[16].key),u(t,he,43,6,1305)},m:function(y,P){W(y,t,P),e(t,h),a=as(t,o.bind(t)),p||(v=[Vo(t,"click",c,!1,!1,!1),Vo(t,"keydown",s[10],!1,!1,!1)],p=!0)},p:function(y,P){s=y,P&4&&n!==(n=s[16].label+"")&&ns(h,n),P&6&&pt(t,"is-active",s[1]===s[16].key)},d:function(y){y&&l(t),a(),p=!1,os(v)}};return O("SvelteRegisterBlock",{block:r,id:Tn.name,type:"each",source:"(43:6) {#each items as item, i}",ctx:s}),r}function En(s){let t,n,h,a,p,v,o,c,r,m,y,P=s[2];jt(P);let R=[];for(let j=0;j<P.length;j+=1)R[j]=Tn(Lo(s,P,j));const w=s[9].default,C=zo(w,s,s[8],null),te={c:function(){t=i("div"),n=i("div"),h=i("div"),a=i("div"),p=i("div"),v=i("div"),o=i("div"),c=T();for(let D=0;D<R.length;D+=1)R[D].c();r=T(),C&&C.c(),this.h()},l:function(D){t=d(D,"DIV",{class:!0});var S=f(t);n=d(S,"DIV",{class:!0});var _=f(n);h=d(_,"DIV",{class:!0});var A=f(h);a=d(A,"DIV",{class:!0});var ae=f(a);p=d(ae,"DIV",{class:!0});var re=f(p);v=d(re,"DIV",{class:!0});var V=f(v);o=d(V,"DIV",{class:!0,style:!0}),f(o).forEach(l),c=E(V);for(let be=0;be<R.length;be+=1)R[be].l(V);V.forEach(l),re.forEach(l),ae.forEach(l),A.forEach(l),r=E(_),C&&C.l(_),_.forEach(l),S.forEach(l),this.h()},h:function(){H(o,"class","be-tabs__active-bar is-top"),Ct(o,"width",s[5]+"px"),Ct(o,"transform","translateX("+s[4]+"px)"),u(o,he,41,6,1149),H(v,"class","be-tabs__nav"),u(v,he,40,5,1116),H(p,"class","be-tabs__nav-scroll"),u(p,he,39,4,1077),H(a,"class","be-tabs__nav-wrap"),u(a,he,38,3,1041),H(h,"class","be-tabs__header"),u(h,he,37,2,1008),H(n,"class","be-tabs-pane"),u(n,he,36,1,979),H(t,"class",m=mn("be-tab",s[0])),u(t,he,35,0,938)},m:function(D,S){W(D,t,S),e(t,n),e(n,h),e(h,a),e(a,p),e(p,v),e(v,o),e(v,c);for(let _=0;_<R.length;_+=1)R[_].m(v,null);e(n,r),C&&C.m(n,null),y=!0},p:function(D,[S]){if((!y||S&32)&&Ct(o,"width",D[5]+"px"),(!y||S&16)&&Ct(o,"transform","translateX("+D[4]+"px)"),S&78){P=D[2],jt(P);let _;for(_=0;_<P.length;_+=1){const A=Lo(D,P,_);R[_]?R[_].p(A,S):(R[_]=Tn(A),R[_].c(),R[_].m(v,null))}for(;_<R.length;_+=1)R[_].d(1);R.length=P.length}C&&C.p&&(!y||S&256)&&No(C,w,D,D[8],y?Uo(w,D[8],S,null):Mo(D[8]),null),(!y||S&1&&m!==(m=mn("be-tab",D[0])))&&H(t,"class",m)},i:function(D){y||(Y(C,D),y=!0)},o:function(D){K(C,D),y=!1},d:function(D){D&&l(t),Wo(R,D),C&&C.d(D)}};return O("SvelteRegisterBlock",{block:te,id:En.name,type:"component",source:"",ctx:s}),te}function us(s,t,n){let h,a,{$$slots:p={},$$scope:v}=t;Pn("BeTabs",p,["default"]);let{class:o=null}=t;const c=Ao();let{active:r}=t,{items:m}=t,y=0,P=[];const R=_=>{const A=(ae,re,V)=>V<_?ae+re:ae;return P.reduce(A,20)};function w(_,A){n(7,y=A),c("tabClick",_)}const C=()=>{for(let _=0;_<m.length;_++)if(r===m[_].key){y!==_&&n(7,y=_);break}};Io(()=>{C()}),s.$$.on_mount.push(function(){r===void 0&&!("active"in t||s.$$.bound[s.$$.props.active])&&console.warn("<BeTabs> was created without expected prop 'active'"),m===void 0&&!("items"in t||s.$$.bound[s.$$.props.items])&&console.warn("<BeTabs> was created without expected prop 'items'")});const te=["class","active","items"];Object.keys(t).forEach(_=>{!~te.indexOf(_)&&_.slice(0,2)!=="$$"&&_!=="slot"&&console.warn(`<BeTabs> was created with unknown prop '${_}'`)});function j(_){es.call(this,s,_)}function D(_){P[_]=this.clientWidth,n(3,P)}const S=(_,A)=>w(_.key,A);return s.$$set=_=>{"class"in _&&n(0,o=_.class),"active"in _&&n(1,r=_.active),"items"in _&&n(2,m=_.items),"$$scope"in _&&n(8,v=_.$$scope)},s.$capture_state=()=>({createEventDispatcher:Ao,onMount:Io,classes:mn,_class:o,dispatcher:c,active:r,items:m,index:y,navbarList:P,transX:R,tabClick:w,initTableActive:C,navbarTansX:a,navbarWidth:h}),s.$inject_state=_=>{"_class"in _&&n(0,o=_._class),"active"in _&&n(1,r=_.active),"items"in _&&n(2,m=_.items),"index"in _&&n(7,y=_.index),"navbarList"in _&&n(3,P=_.navbarList),"navbarTansX"in _&&n(4,a=_.navbarTansX),"navbarWidth"in _&&n(5,h=_.navbarWidth)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&136&&n(5,h=P[y]-40),s.$$.dirty&128&&n(4,a=R(y))},[o,r,m,P,a,h,w,y,v,p,j,D,S]}class Rn extends Bn{constructor(t){super(t),wn(this,t,us,En,Dn,{class:0,active:1,items:2}),O("SvelteRegisterComponent",{component:this,tagName:"BeTabs",options:t,id:En.name})}get class(){throw new Error("<BeTabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set class(t){throw new Error("<BeTabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get active(){throw new Error("<BeTabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set active(t){throw new Error("<BeTabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get items(){throw new Error("<BeTabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set items(t){throw new Error("<BeTabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const fs="src/lib/be-tabs/BeTabPane.svelte";function gn(s){let t,n;const h=s[4].default,a=zo(h,s,s[3],null),p={c:function(){t=i("div"),a&&a.c(),this.h()},l:function(o){t=d(o,"DIV",{class:!0});var c=f(t);a&&a.l(c),c.forEach(l),this.h()},h:function(){H(t,"class","be-tabs__content s-rw-9ZHJl-Tcv"),pt(t,"hidden",!s[0]),pt(t,"block",s[0]),u(t,fs,4,0,95)},m:function(o,c){W(o,t,c),a&&a.m(t,null),n=!0},p:function(o,[c]){a&&a.p&&(!n||c&8)&&No(a,h,o,o[3],n?Uo(h,o[3],c,null):Mo(o[3]),null),(!n||c&1)&&pt(t,"hidden",!o[0]),(!n||c&1)&&pt(t,"block",o[0])},i:function(o){n||(Y(a,o),n=!0)},o:function(o){K(a,o),n=!1},d:function(o){o&&l(t),a&&a.d(o)}};return O("SvelteRegisterBlock",{block:p,id:gn.name,type:"component",source:"",ctx:s}),p}function hs(s,t,n){let h,{$$slots:a={},$$scope:p}=t;Pn("BeTabPane",a,["default"]);let{active:v}=t,{key:o}=t;s.$$.on_mount.push(function(){v===void 0&&!("active"in t||s.$$.bound[s.$$.props.active])&&console.warn("<BeTabPane> was created without expected prop 'active'"),o===void 0&&!("key"in t||s.$$.bound[s.$$.props.key])&&console.warn("<BeTabPane> was created without expected prop 'key'")});const c=["active","key"];return Object.keys(t).forEach(r=>{!~c.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<BeTabPane> was created with unknown prop '${r}'`)}),s.$$set=r=>{"active"in r&&n(1,v=r.active),"key"in r&&n(2,o=r.key),"$$scope"in r&&n(3,p=r.$$scope)},s.$capture_state=()=>({active:v,key:o,isActive:h}),s.$inject_state=r=>{"active"in r&&n(1,v=r.active),"key"in r&&n(2,o=r.key),"isActive"in r&&n(0,h=r.isActive)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&6&&n(0,h=o===v)},[h,v,o,p,a]}class St extends Bn{constructor(t){super(t),wn(this,t,hs,gn,Dn,{active:1,key:2}),O("SvelteRegisterComponent",{component:this,tagName:"BeTabPane",options:t,id:gn.name})}get active(){throw new Error("<BeTabPane>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set active(t){throw new Error("<BeTabPane>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get key(){throw new Error("<BeTabPane>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set key(t){throw new Error("<BeTabPane>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const b="src/routes/(components)/components/tabs/+page.svelte";function Xo(s,t,n){const h=s.slice();return h[8]=t[n],h[10]=n,h}function Fo(s){let t,n,h,a;const p={c:function(){t=i("p"),n=g("选项卡内容"),h=g(s[10]),a=T(),this.h()},l:function(o){t=d(o,"P",{});var c=f(t);n=k(c,"选项卡内容"),h=k(c,s[10]),c.forEach(l),a=E(o),this.h()},h:function(){u(t,b,41,5,1425)},m:function(o,c){W(o,t,c),e(t,n),e(t,h),W(o,a,c)},p:Hn,d:function(o){o&&l(t),o&&l(a)}};return O("SvelteRegisterBlock",{block:p,id:Fo.name,type:"slot",source:"(41:4) <BeTabPane {active} {...item}>",ctx:s}),p}function kn(s){let t,n;const h=[{active:s[0]},s[8]];let a={$$slots:{default:[Fo]},$$scope:{ctx:s}};for(let v=0;v<h.length;v+=1)a=ls(a,h[v]);t=new St({props:a,$$inline:!0});const p={c:function(){Ee(t.$$.fragment)},l:function(o){ge(t.$$.fragment,o)},m:function(o,c){ke(t,o,c),n=!0},p:function(o,c){const r=c&9?is(h,[c&1&&{active:o[0]},c&8&&ds(o[8])]):{};c&2048&&(r.$$scope={dirty:c,ctx:o}),t.$set(r)},i:function(o){n||(Y(t.$$.fragment,o),n=!0)},o:function(o){K(t.$$.fragment,o),n=!1},d:function(o){ye(t,o)}};return O("SvelteRegisterBlock",{block:p,id:kn.name,type:"each",source:"(40:4) {#each items as item, index}",ctx:s}),p}function Go(s){let t,n,h=s[3];jt(h);let a=[];for(let o=0;o<h.length;o+=1)a[o]=kn(Xo(s,h,o));const p=o=>K(a[o],1,1,()=>{a[o]=null}),v={c:function(){for(let c=0;c<a.length;c+=1)a[c].c();t=Oo()},l:function(c){for(let r=0;r<a.length;r+=1)a[r].l(c);t=Oo()},m:function(c,r){for(let m=0;m<a.length;m+=1)a[m].m(c,r);W(c,t,r),n=!0},p:function(c,r){if(r&9){h=c[3],jt(h);let m;for(m=0;m<h.length;m+=1){const y=Xo(c,h,m);a[m]?(a[m].p(y,r),Y(a[m],1)):(a[m]=kn(y),a[m].c(),Y(a[m],1),a[m].m(t.parentNode,t))}for(cs(),m=h.length;m<a.length;m+=1)p(m);rs()}},i:function(c){if(!n){for(let r=0;r<h.length;r+=1)Y(a[r]);n=!0}},o:function(c){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)K(a[r]);n=!1},d:function(c){Wo(a,c),c&&l(t)}};return O("SvelteRegisterBlock",{block:v,id:Go.name,type:"slot",source:"(39:3) <BeTabs class='aaa' bind:active={active} {items} on:tabClick={tabClick}>",ctx:s}),v}function Jo(s){let t,n,h,a;function p(c){s[5](c)}let v={class:"aaa",items:s[3],$$slots:{default:[Go]},$$scope:{ctx:s}};s[0]!==void 0&&(v.active=s[0]),n=new Rn({props:v,$$inline:!0}),Yo.push(()=>qo(n,"active",p)),n.$on("tabClick",s[2]);const o={c:function(){t=i("div"),Ee(n.$$.fragment),this.h()},l:function(r){t=d(r,"DIV",{slot:!0});var m=f(t);ge(n.$$.fragment,m),m.forEach(l),this.h()},h:function(){H(t,"slot","source"),u(t,b,37,2,1256)},m:function(r,m){W(r,t,m),ke(n,t,null),a=!0},p:function(r,m){const y={};m&2049&&(y.$$scope={dirty:m,ctx:r}),!h&&m&1&&(h=!0,y.active=r[0],Ko(()=>h=!1)),n.$set(y)},i:function(r){a||(Y(n.$$.fragment,r),a=!0)},o:function(r){K(n.$$.fragment,r),a=!1},d:function(r){r&&l(t),ye(n)}};return O("SvelteRegisterBlock",{block:o,id:Jo.name,type:"slot",source:"(38:2) ",ctx:s}),o}function Qo(s){let t,n;const h={c:function(){t=i("p"),n=g("选项卡内容1"),this.h()},l:function(p){t=d(p,"P",{});var v=f(t);n=k(v,"选项卡内容1"),v.forEach(l),this.h()},h:function(){u(t,b,64,5,2140)},m:function(p,v){W(p,t,v),e(t,n)},p:Hn,d:function(p){p&&l(t)}};return O("SvelteRegisterBlock",{block:h,id:Qo.name,type:"slot",source:"(64:4) <BeTabPane active={active2} key='u1'>",ctx:s}),h}function Zo(s){let t,n;const h={c:function(){t=i("p"),n=g("选项卡内容2"),this.h()},l:function(p){t=d(p,"P",{});var v=f(t);n=k(v,"选项卡内容2"),v.forEach(l),this.h()},h:function(){u(t,b,67,5,2218)},m:function(p,v){W(p,t,v),e(t,n)},p:Hn,d:function(p){p&&l(t)}};return O("SvelteRegisterBlock",{block:h,id:Zo.name,type:"slot",source:"(67:4) <BeTabPane active={active2} key='u2'>",ctx:s}),h}function $o(s){let t,n,h,a;t=new St({props:{active:s[1],key:"u1",$$slots:{default:[Qo]},$$scope:{ctx:s}},$$inline:!0}),h=new St({props:{active:s[1],key:"u2",$$slots:{default:[Zo]},$$scope:{ctx:s}},$$inline:!0});const p={c:function(){Ee(t.$$.fragment),n=T(),Ee(h.$$.fragment)},l:function(o){ge(t.$$.fragment,o),n=E(o),ge(h.$$.fragment,o)},m:function(o,c){ke(t,o,c),W(o,n,c),ke(h,o,c),a=!0},p:function(o,c){const r={};c&2&&(r.active=o[1]),c&2048&&(r.$$scope={dirty:c,ctx:o}),t.$set(r);const m={};c&2&&(m.active=o[1]),c&2048&&(m.$$scope={dirty:c,ctx:o}),h.$set(m)},i:function(o){a||(Y(t.$$.fragment,o),Y(h.$$.fragment,o),a=!0)},o:function(o){K(t.$$.fragment,o),K(h.$$.fragment,o),a=!1},d:function(o){ye(t,o),o&&l(n),ye(h,o)}};return O("SvelteRegisterBlock",{block:p,id:$o.name,type:"slot",source:"(63:3) <BeTabs bind:active={active2} items={[{ key: 'u1', label: '选项卡1' }, { key: 'u2', label: '选项卡2' }]} on:tabClick={ ({ detail }) => active2 = detail }>",ctx:s}),p}function xo(s){let t,n,h,a;function p(c){s[6](c)}let v={items:[{key:"u1",label:"选项卡1"},{key:"u2",label:"选项卡2"}],$$slots:{default:[$o]},$$scope:{ctx:s}};s[1]!==void 0&&(v.active=s[1]),n=new Rn({props:v,$$inline:!0}),Yo.push(()=>qo(n,"active",p)),n.$on("tabClick",s[7]);const o={c:function(){t=i("div"),Ee(n.$$.fragment),this.h()},l:function(r){t=d(r,"DIV",{slot:!0});var m=f(t);ge(n.$$.fragment,m),m.forEach(l),this.h()},h:function(){H(t,"slot","source"),u(t,b,61,2,1921)},m:function(r,m){W(r,t,m),ke(n,t,null),a=!0},p:function(r,m){const y={};m&2050&&(y.$$scope={dirty:m,ctx:r}),!h&&m&2&&(h=!0,y.active=r[1],Ko(()=>h=!1)),n.$set(y)},i:function(r){a||(Y(n.$$.fragment,r),a=!0)},o:function(r){K(n.$$.fragment,r),a=!1},d:function(r){r&&l(t),ye(n)}};return O("SvelteRegisterBlock",{block:o,id:xo.name,type:"slot",source:"(62:2) ",ctx:s}),o}function yn(s){let t,n,h,a,p,v,o,c,r,m,y,P,R,w,C,te,j,D,S,_,A,ae,re,V,be,ve,At,It,ne,Be,L,we,Vt,Ot,De,Lt,Xt,Pe,zt,Nt,He,Mt,Ut,Re,Wt,Yt,ie,X,Ce,qt,Kt,je,Ft,Gt,Se,Jt,Qt,Ae,Zt,$t,Ie,xt,ea,z,Ve,ta,aa,Oe,na,oa,Le,sa,la,Xe,ca,ra,ze,ia,da,oe,ua,Cn=`
interface TabItem {
	key: string,
	label: string
}`,fa,ha,ba,_e,va,_a,se,Ne,N,Me,ma,pa,Ue,Ta,Ea,We,ga,ka,Ye,ya,Ba,qe,wa,Da,de,M,Ke,Pa,Ha,Fe,Ra,Ca,Ge,ja,Sa,Je,Aa,Ia,Qe,Va,Oa,U,Ze,La,Xa,$e,za,Na,xe,Ma,Ua,et,Wa,Ya,tt,qa,Ka,me,Fa,Ga,le,at,F,nt,Ja,Qa,ot,Za,$a,st,xa,en,lt,G,ct,tn,an,rt,nn,on,it,sn,ln,pe,cn,rn,ce,dt,ue,ut,dn,un,ft,fn,hn,ht,fe,bt,bn,vn,vt,_n,Et;w=new pn({props:{code:s[4],js:`
import { BeTabs, BeTabPane } from '@brewer/beerui'
let active = 'u1'
const tabClick = (evt) => {
	active = evt.detail
}
let items:TabItem[] = [{ key: 'u1', label: '用户管理' }, { key: 'u2', label: '配置管理' }, { key: 'u3', label: '角色管理' }, { key: 'u4', label: '定时任务补偿' } ]
	`,$$slots:{source:[Jo]},$$scope:{ctx:s}},$$inline:!0}),V=new pn({props:{js:`
let active2 = 'u1';`,code:`
<BeTabs bind:active={active2} items={[{ key: 'u1', label: '选项卡1' }, { key: 'u2', label: '选项卡2' }]} on:tabClick={ ({ detail }) => active2 = detail }>
	<BeTabPane active={active2} key='u1'>
		<p>选项卡内容1</p>
	</BeTabPane>
	<BeTabPane active={active2} key='u2'>
		<p>选项卡内容2</p>
	</BeTabPane>
</BeTabs >
	`,$$slots:{source:[xo]},$$scope:{ctx:s}},$$inline:!0});const jn={c:function(){t=i("meta"),n=i("meta"),h=T(),a=i("div"),p=i("h2"),v=g("Tabs 选项卡切换"),o=T(),c=i("p"),r=g("选项卡切换。"),m=T(),y=i("h3"),P=g("基本用法"),R=T(),Ee(w.$$.fragment),C=T(),te=i("hr"),j=T(),D=i("h3"),S=g("固定数据"),_=T(),A=i("p"),ae=g("BeTabPane上需要绑定 key 和 active"),re=T(),Ee(V.$$.fragment),be=T(),ve=i("h3"),At=g("BeTabs Attributes"),It=T(),ne=i("table"),Be=i("thead"),L=i("tr"),we=i("th"),Vt=g("参数"),Ot=T(),De=i("th"),Lt=g("说明"),Xt=T(),Pe=i("th"),zt=g("类型"),Nt=T(),He=i("th"),Mt=g("可选值"),Ut=T(),Re=i("th"),Wt=g("默认值"),Yt=T(),ie=i("tbody"),X=i("tr"),Ce=i("td"),qt=g("active"),Kt=T(),je=i("td"),Ft=g("绑定值，选中选项卡的 key"),Gt=T(),Se=i("td"),Jt=g("string"),Qt=T(),Ae=i("td"),Zt=g("-"),$t=T(),Ie=i("td"),xt=g("''"),ea=T(),z=i("tr"),Ve=i("td"),ta=g("items"),aa=T(),Oe=i("td"),na=g("选项"),oa=T(),Le=i("td"),sa=g("TabItem"),la=T(),Xe=i("td"),ca=g("-"),ra=T(),ze=i("td"),ia=g("''"),da=T(),oe=i("pre"),ua=g("			"),fa=g(Cn),ha=g(`
	`),ba=T(),_e=i("h3"),va=g("BeTabPane Attributes"),_a=T(),se=i("table"),Ne=i("thead"),N=i("tr"),Me=i("th"),ma=g("参数"),pa=T(),Ue=i("th"),Ta=g("说明"),Ea=T(),We=i("th"),ga=g("类型"),ka=T(),Ye=i("th"),ya=g("可选值"),Ba=T(),qe=i("th"),wa=g("默认值"),Da=T(),de=i("tbody"),M=i("tr"),Ke=i("td"),Pa=g("active"),Ha=T(),Fe=i("td"),Ra=g("绑定值，选中选项卡的 key"),Ca=T(),Ge=i("td"),ja=g("string"),Sa=T(),Je=i("td"),Aa=g("-"),Ia=T(),Qe=i("td"),Va=g("''"),Oa=T(),U=i("tr"),Ze=i("td"),La=g("key"),Xa=T(),$e=i("td"),za=g("判断选中的标识"),Na=T(),xe=i("td"),Ma=g("TabItem"),Ua=T(),et=i("td"),Wa=g("-"),Ya=T(),tt=i("td"),qa=g("''"),Ka=T(),me=i("h3"),Fa=g("BeTabs Events"),Ga=T(),le=i("table"),at=i("thead"),F=i("tr"),nt=i("th"),Ja=g("事件名称"),Qa=T(),ot=i("th"),Za=g("说明"),$a=T(),st=i("th"),xa=g("回调参数"),en=T(),lt=i("tbody"),G=i("tr"),ct=i("td"),tn=g("tabClick"),an=T(),rt=i("td"),nn=g("tab点击触发"),on=T(),it=i("td"),sn=g("当前点击的key"),ln=T(),pe=i("h3"),cn=g("BeTabPane Slot"),rn=T(),ce=i("table"),dt=i("thead"),ue=i("tr"),ut=i("th"),dn=g("name"),un=T(),ft=i("th"),fn=g("说明"),hn=T(),ht=i("tbody"),fe=i("tr"),bt=i("td"),bn=g("default"),vn=T(),vt=i("td"),_n=g("默认"),this.h()},l:function(I){const q=ss("svelte-18770o7",document.head);t=d(q,"META",{name:!0,content:!0}),n=d(q,"META",{name:!0,content:!0}),q.forEach(l),h=E(I),a=d(I,"DIV",{class:!0});var B=f(a);p=d(B,"H2",{});var Tt=f(p);v=k(Tt,"Tabs 选项卡切换"),Tt.forEach(l),o=E(B),c=d(B,"P",{class:!0});var Sn=f(c);r=k(Sn,"选项卡切换。"),Sn.forEach(l),m=E(B),y=d(B,"H3",{});var An=f(y);P=k(An,"基本用法"),An.forEach(l),R=E(B),ge(w.$$.fragment,B),C=E(B),te=d(B,"HR",{}),j=E(B),D=d(B,"H3",{});var In=f(D);S=k(In,"固定数据"),In.forEach(l),_=E(B),A=d(B,"P",{});var Vn=f(A);ae=k(Vn,"BeTabPane上需要绑定 key 和 active"),Vn.forEach(l),re=E(B),ge(V.$$.fragment,B),be=E(B),ve=d(B,"H3",{class:!0});var On=f(ve);At=k(On,"BeTabs Attributes"),On.forEach(l),It=E(B),ne=d(B,"TABLE",{class:!0});var gt=f(ne);Be=d(gt,"THEAD",{});var Ln=f(Be);L=d(Ln,"TR",{});var J=f(L);we=d(J,"TH",{});var Xn=f(we);Vt=k(Xn,"参数"),Xn.forEach(l),Ot=E(J),De=d(J,"TH",{});var zn=f(De);Lt=k(zn,"说明"),zn.forEach(l),Xt=E(J),Pe=d(J,"TH",{});var Nn=f(Pe);zt=k(Nn,"类型"),Nn.forEach(l),Nt=E(J),He=d(J,"TH",{});var Mn=f(He);Mt=k(Mn,"可选值"),Mn.forEach(l),Ut=E(J),Re=d(J,"TH",{});var Un=f(Re);Wt=k(Un,"默认值"),Un.forEach(l),J.forEach(l),Ln.forEach(l),Yt=E(gt),ie=d(gt,"TBODY",{});var kt=f(ie);X=d(kt,"TR",{});var Q=f(X);Ce=d(Q,"TD",{});var Wn=f(Ce);qt=k(Wn,"active"),Wn.forEach(l),Kt=E(Q),je=d(Q,"TD",{});var Yn=f(je);Ft=k(Yn,"绑定值，选中选项卡的 key"),Yn.forEach(l),Gt=E(Q),Se=d(Q,"TD",{});var qn=f(Se);Jt=k(qn,"string"),qn.forEach(l),Qt=E(Q),Ae=d(Q,"TD",{});var Kn=f(Ae);Zt=k(Kn,"-"),Kn.forEach(l),$t=E(Q),Ie=d(Q,"TD",{});var Fn=f(Ie);xt=k(Fn,"''"),Fn.forEach(l),Q.forEach(l),ea=E(kt),z=d(kt,"TR",{});var Z=f(z);Ve=d(Z,"TD",{});var Gn=f(Ve);ta=k(Gn,"items"),Gn.forEach(l),aa=E(Z),Oe=d(Z,"TD",{});var Jn=f(Oe);na=k(Jn,"选项"),Jn.forEach(l),oa=E(Z),Le=d(Z,"TD",{});var Qn=f(Le);sa=k(Qn,"TabItem"),Qn.forEach(l),la=E(Z),Xe=d(Z,"TD",{});var Zn=f(Xe);ca=k(Zn,"-"),Zn.forEach(l),ra=E(Z),ze=d(Z,"TD",{});var $n=f(ze);ia=k($n,"''"),$n.forEach(l),Z.forEach(l),kt.forEach(l),gt.forEach(l),da=E(B),oe=d(B,"PRE",{class:!0});var yt=f(oe);ua=k(yt,"			"),fa=k(yt,Cn),ha=k(yt,`
	`),yt.forEach(l),ba=E(B),_e=d(B,"H3",{class:!0});var xn=f(_e);va=k(xn,"BeTabPane Attributes"),xn.forEach(l),_a=E(B),se=d(B,"TABLE",{class:!0});var Bt=f(se);Ne=d(Bt,"THEAD",{});var eo=f(Ne);N=d(eo,"TR",{});var $=f(N);Me=d($,"TH",{});var to=f(Me);ma=k(to,"参数"),to.forEach(l),pa=E($),Ue=d($,"TH",{});var ao=f(Ue);Ta=k(ao,"说明"),ao.forEach(l),Ea=E($),We=d($,"TH",{});var no=f(We);ga=k(no,"类型"),no.forEach(l),ka=E($),Ye=d($,"TH",{});var oo=f(Ye);ya=k(oo,"可选值"),oo.forEach(l),Ba=E($),qe=d($,"TH",{});var so=f(qe);wa=k(so,"默认值"),so.forEach(l),$.forEach(l),eo.forEach(l),Da=E(Bt),de=d(Bt,"TBODY",{});var wt=f(de);M=d(wt,"TR",{});var x=f(M);Ke=d(x,"TD",{});var lo=f(Ke);Pa=k(lo,"active"),lo.forEach(l),Ha=E(x),Fe=d(x,"TD",{});var co=f(Fe);Ra=k(co,"绑定值，选中选项卡的 key"),co.forEach(l),Ca=E(x),Ge=d(x,"TD",{});var ro=f(Ge);ja=k(ro,"string"),ro.forEach(l),Sa=E(x),Je=d(x,"TD",{});var io=f(Je);Aa=k(io,"-"),io.forEach(l),Ia=E(x),Qe=d(x,"TD",{});var uo=f(Qe);Va=k(uo,"''"),uo.forEach(l),x.forEach(l),Oa=E(wt),U=d(wt,"TR",{});var ee=f(U);Ze=d(ee,"TD",{});var fo=f(Ze);La=k(fo,"key"),fo.forEach(l),Xa=E(ee),$e=d(ee,"TD",{});var ho=f($e);za=k(ho,"判断选中的标识"),ho.forEach(l),Na=E(ee),xe=d(ee,"TD",{});var bo=f(xe);Ma=k(bo,"TabItem"),bo.forEach(l),Ua=E(ee),et=d(ee,"TD",{});var vo=f(et);Wa=k(vo,"-"),vo.forEach(l),Ya=E(ee),tt=d(ee,"TD",{});var _o=f(tt);qa=k(_o,"''"),_o.forEach(l),ee.forEach(l),wt.forEach(l),Bt.forEach(l),Ka=E(B),me=d(B,"H3",{class:!0});var mo=f(me);Fa=k(mo,"BeTabs Events"),mo.forEach(l),Ga=E(B),le=d(B,"TABLE",{class:!0});var Dt=f(le);at=d(Dt,"THEAD",{});var po=f(at);F=d(po,"TR",{});var _t=f(F);nt=d(_t,"TH",{});var To=f(nt);Ja=k(To,"事件名称"),To.forEach(l),Qa=E(_t),ot=d(_t,"TH",{});var Eo=f(ot);Za=k(Eo,"说明"),Eo.forEach(l),$a=E(_t),st=d(_t,"TH",{});var go=f(st);xa=k(go,"回调参数"),go.forEach(l),_t.forEach(l),po.forEach(l),en=E(Dt),lt=d(Dt,"TBODY",{});var ko=f(lt);G=d(ko,"TR",{});var mt=f(G);ct=d(mt,"TD",{});var yo=f(ct);tn=k(yo,"tabClick"),yo.forEach(l),an=E(mt),rt=d(mt,"TD",{});var Bo=f(rt);nn=k(Bo,"tab点击触发"),Bo.forEach(l),on=E(mt),it=d(mt,"TD",{});var wo=f(it);sn=k(wo,"当前点击的key"),wo.forEach(l),mt.forEach(l),ko.forEach(l),Dt.forEach(l),ln=E(B),pe=d(B,"H3",{class:!0});var Do=f(pe);cn=k(Do,"BeTabPane Slot"),Do.forEach(l),rn=E(B),ce=d(B,"TABLE",{class:!0});var Pt=f(ce);dt=d(Pt,"THEAD",{});var Po=f(dt);ue=d(Po,"TR",{});var Ht=f(ue);ut=d(Ht,"TH",{});var Ho=f(ut);dn=k(Ho,"name"),Ho.forEach(l),un=E(Ht),ft=d(Ht,"TH",{});var Ro=f(ft);fn=k(Ro,"说明"),Ro.forEach(l),Ht.forEach(l),Po.forEach(l),hn=E(Pt),ht=d(Pt,"TBODY",{});var Co=f(ht);fe=d(Co,"TR",{});var Rt=f(fe);bt=d(Rt,"TD",{});var jo=f(bt);bn=k(jo,"default"),jo.forEach(l),vn=E(Rt),vt=d(Rt,"TD",{});var So=f(vt);_n=k(So,"默认"),So.forEach(l),Rt.forEach(l),Co.forEach(l),Pt.forEach(l),B.forEach(l),this.h()},h:function(){document.title="Tabs 选项卡切换 组件文档 BeerUi-官方文档",H(t,"name","description"),H(t,"content","BeerUi, 基于 svelte 的 PC端 组件库，base on svelte 3.0 web component"),u(t,b,22,1,621),H(n,"name","keywords"),H(n,"content","Tabs 选项卡切换, beerui组件文档,beerui,beerui文档,beerui官网, BeerUi,@brewer/beerui,svelte,component,svelteKit"),u(n,b,23,1,719),u(p,b,26,1,895),H(c,"class","desc"),u(c,b,27,1,916),u(y,b,28,1,944),u(te,b,47,1,1511),u(D,b,48,1,1517),u(A,b,49,1,1532),H(ve,"class","demo-table-title"),u(ve,b,72,1,2287),u(we,b,76,3,2387),u(De,b,77,3,2402),u(Pe,b,78,3,2417),u(He,b,79,3,2432),u(Re,b,80,3,2448),u(L,b,75,2,2379),u(Be,b,74,2,2369),u(Ce,b,85,4,2502),u(je,b,86,4,2522),u(Se,b,87,4,2550),u(Ae,b,88,4,2570),u(Ie,b,89,4,2585),u(X,b,84,3,2493),u(Ve,b,92,4,2618),u(Oe,b,93,4,2637),u(Le,b,94,4,2653),u(Xe,b,95,4,2674),u(ze,b,96,4,2689),u(z,b,91,3,2609),u(ie,b,83,2,2482),H(ne,"class","demo-table"),u(ne,b,73,1,2340),H(oe,"class","demo-pre"),u(oe,b,100,1,2732),H(_e,"class","demo-table-title"),u(_e,b,107,1,2823),u(Me,b,111,3,2926),u(Ue,b,112,3,2941),u(We,b,113,3,2956),u(Ye,b,114,3,2971),u(qe,b,115,3,2987),u(N,b,110,2,2918),u(Ne,b,109,2,2908),u(Ke,b,120,3,3039),u(Fe,b,121,3,3058),u(Ge,b,122,3,3085),u(Je,b,123,3,3104),u(Qe,b,124,3,3118),u(M,b,119,2,3031),u(Ze,b,127,3,3148),u($e,b,128,3,3164),u(xe,b,129,3,3184),u(et,b,130,3,3204),u(tt,b,131,3,3218),u(U,b,126,2,3140),u(de,b,118,2,3021),H(se,"class","demo-table"),u(se,b,108,1,2879),H(me,"class","demo-table-title"),u(me,b,135,1,3260),u(nt,b,139,3,3356),u(ot,b,140,3,3373),u(st,b,141,3,3388),u(F,b,138,2,3348),u(at,b,137,2,3338),u(ct,b,146,3,3441),u(rt,b,147,3,3462),u(it,b,148,3,3482),u(G,b,145,2,3433),u(lt,b,144,2,3423),H(le,"class","demo-table"),u(le,b,136,1,3309),H(pe,"class","demo-table-title"),u(pe,b,152,1,3530),u(ut,b,156,3,3627),u(ft,b,157,3,3644),u(ue,b,155,2,3619),u(dt,b,154,2,3609),u(bt,b,162,3,3695),u(vt,b,163,3,3715),u(fe,b,161,2,3687),u(ht,b,160,2,3677),H(ce,"class","demo-table"),u(ce,b,153,1,3580),H(a,"class","page-container"),u(a,b,25,0,865)},m:function(I,q){e(document.head,t),e(document.head,n),W(I,h,q),W(I,a,q),e(a,p),e(p,v),e(a,o),e(a,c),e(c,r),e(a,m),e(a,y),e(y,P),e(a,R),ke(w,a,null),e(a,C),e(a,te),e(a,j),e(a,D),e(D,S),e(a,_),e(a,A),e(A,ae),e(a,re),ke(V,a,null),e(a,be),e(a,ve),e(ve,At),e(a,It),e(a,ne),e(ne,Be),e(Be,L),e(L,we),e(we,Vt),e(L,Ot),e(L,De),e(De,Lt),e(L,Xt),e(L,Pe),e(Pe,zt),e(L,Nt),e(L,He),e(He,Mt),e(L,Ut),e(L,Re),e(Re,Wt),e(ne,Yt),e(ne,ie),e(ie,X),e(X,Ce),e(Ce,qt),e(X,Kt),e(X,je),e(je,Ft),e(X,Gt),e(X,Se),e(Se,Jt),e(X,Qt),e(X,Ae),e(Ae,Zt),e(X,$t),e(X,Ie),e(Ie,xt),e(ie,ea),e(ie,z),e(z,Ve),e(Ve,ta),e(z,aa),e(z,Oe),e(Oe,na),e(z,oa),e(z,Le),e(Le,sa),e(z,la),e(z,Xe),e(Xe,ca),e(z,ra),e(z,ze),e(ze,ia),e(a,da),e(a,oe),e(oe,ua),e(oe,fa),e(oe,ha),e(a,ba),e(a,_e),e(_e,va),e(a,_a),e(a,se),e(se,Ne),e(Ne,N),e(N,Me),e(Me,ma),e(N,pa),e(N,Ue),e(Ue,Ta),e(N,Ea),e(N,We),e(We,ga),e(N,ka),e(N,Ye),e(Ye,ya),e(N,Ba),e(N,qe),e(qe,wa),e(se,Da),e(se,de),e(de,M),e(M,Ke),e(Ke,Pa),e(M,Ha),e(M,Fe),e(Fe,Ra),e(M,Ca),e(M,Ge),e(Ge,ja),e(M,Sa),e(M,Je),e(Je,Aa),e(M,Ia),e(M,Qe),e(Qe,Va),e(de,Oa),e(de,U),e(U,Ze),e(Ze,La),e(U,Xa),e(U,$e),e($e,za),e(U,Na),e(U,xe),e(xe,Ma),e(U,Ua),e(U,et),e(et,Wa),e(U,Ya),e(U,tt),e(tt,qa),e(a,Ka),e(a,me),e(me,Fa),e(a,Ga),e(a,le),e(le,at),e(at,F),e(F,nt),e(nt,Ja),e(F,Qa),e(F,ot),e(ot,Za),e(F,$a),e(F,st),e(st,xa),e(le,en),e(le,lt),e(lt,G),e(G,ct),e(ct,tn),e(G,an),e(G,rt),e(rt,nn),e(G,on),e(G,it),e(it,sn),e(a,ln),e(a,pe),e(pe,cn),e(a,rn),e(a,ce),e(ce,dt),e(dt,ue),e(ue,ut),e(ut,dn),e(ue,un),e(ue,ft),e(ft,fn),e(ce,hn),e(ce,ht),e(ht,fe),e(fe,bt),e(bt,bn),e(fe,vn),e(fe,vt),e(vt,_n),Et=!0},p:function(I,[q]){const B={};q&2049&&(B.$$scope={dirty:q,ctx:I}),w.$set(B);const Tt={};q&2050&&(Tt.$$scope={dirty:q,ctx:I}),V.$set(Tt)},i:function(I){Et||(Y(w.$$.fragment,I),Y(V.$$.fragment,I),Et=!0)},o:function(I){K(w.$$.fragment,I),K(V.$$.fragment,I),Et=!1},d:function(I){l(t),l(n),I&&l(h),I&&l(a),ye(w),ye(V)}};return O("SvelteRegisterBlock",{block:jn,id:yn.name,type:"component",source:"",ctx:s}),jn}function bs(s,t,n){let{$$slots:h={},$$scope:a}=t;Pn("Page",h,[]);let p="u2";const v=w=>{n(0,p=w.detail)};let o=[{key:"u1",label:"用户管理"},{key:"u2",label:"配置管理"},{key:"u3",label:"角色管理"},{key:"u4",label:"定时任务补偿"}];const c=`
<BeTabs bind:active={active} {items} on:tabClick={tabClick}>
	{#each items as item}
	<BeTabPane {active} {...item}>
		<h3>{item.label}</h3>
		<h3>选项卡切换</h3>
	</BeTabPane>
	{/each}
</BeTabs>
`;let r="u1";const m=[];Object.keys(t).forEach(w=>{!~m.indexOf(w)&&w.slice(0,2)!=="$$"&&w!=="slot"&&console.warn(`<Page> was created with unknown prop '${w}'`)});function y(w){p=w,n(0,p)}function P(w){r=w,n(1,r)}const R=({detail:w})=>n(1,r=w);return s.$capture_state=()=>({BeTabs:Rn,BeTabPane:St,DemoBlock:pn,active:p,tabClick:v,items:o,code:c,active2:r}),s.$inject_state=w=>{"active"in w&&n(0,p=w.active),"items"in w&&n(3,o=w.items),"active2"in w&&n(1,r=w.active2)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[p,r,v,o,c,y,P,R]}class Es extends Bn{constructor(t){super(t),wn(this,t,bs,yn,Dn,{}),O("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:yn.name})}}export{Es as default};
