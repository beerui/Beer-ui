import{S as C,i as O,d as q,s as R,n as g,x as E,a as z,p as b,q as w,y as j,j as d,c as B,w as $,b as u,L as y,z as S,G as k,V as D,W as G,v as H}from"../chunks/index.21613952.js";import{p as _}from"../chunks/stores.f4482d01.js";const x="node_modules/.pnpm/registry.npmjs.org+@sveltejs+kit@1.10.0_svelte@3.55.1+vite@4.0.1/node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(r){var h;let e,i=r[0].status+"",o,c,n,l=((h=r[0].error)==null?void 0:h.message)+"",s;const v={c:function(){e=g("h1"),o=E(i),c=z(),n=g("p"),s=E(l),this.h()},l:function(t){e=b(t,"H1",{});var a=w(e);o=j(a,i),a.forEach(d),c=B(t),n=b(t,"P",{});var m=w(n);s=j(m,l),m.forEach(d),this.h()},h:function(){$(e,x,4,0,57),$(n,x,5,0,81)},m:function(t,a){u(t,e,a),y(e,o),u(t,c,a),u(t,n,a),y(n,s)},p:function(t,[a]){var m;a&1&&i!==(i=t[0].status+"")&&S(o,i),a&1&&l!==(l=((m=t[0].error)==null?void 0:m.message)+"")&&S(s,l)},i:k,o:k,d:function(t){t&&d(e),t&&d(c),t&&d(n)}};return q("SvelteRegisterBlock",{block:v,id:f.name,type:"component",source:"",ctx:r}),v}function L(r,e,i){let o;D(_,"page"),G(r,_,s=>i(0,o=s));let{$$slots:c={},$$scope:n}=e;H("Error",c,[]);const l=[];return Object.keys(e).forEach(s=>{!~l.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Error> was created with unknown prop '${s}'`)}),r.$capture_state=()=>({page:_,$page:o}),[o]}class V extends C{constructor(e){super(e),O(this,e,L,f,R,{}),q("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}}export{V as default};
