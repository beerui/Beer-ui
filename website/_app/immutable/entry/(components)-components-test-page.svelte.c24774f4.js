import{S as f,i as m,d,s as p,G as o,v as _,P as v}from"../chunks/index.21613952.js";const{console:w}=v;function c(i){const a={c:o,l:o,m:o,p:o,i:o,o,d:o};return d("SvelteRegisterBlock",{block:a,id:c.name,type:"component",source:"",ctx:i}),a}function $(i,a,b){let{$$slots:u={},$$scope:P}=a;_("Page",u,[]);class h{constructor(t){this.data=new Array(t)}_hash(t){let s=0;for(let e=0;e<t.length;e++)s=(s+t.charCodeAt(e)*e)%this.data.length;return s}set(t,s){let e=this._hash(t);return this.data[e]||(this.data[e]=[]),this.data[e].push([t,s]),this.data}get(t){let s=this._hash(t),e=this.data[s];if(e){for(let l=0;l<e.length;l++)if(e[l][0]===t)return e[l][1]}}keys(){const t=[];for(let s=0;s<this.data.length;s++)this.data[s]&&t.push(this.data[s][0][0]);return t}}const n=new h(5);n.set("mo",1e4),n.set("wang",1e4),console.log(n.set("motou",100)),console.log(n.get("motou")),console.log(n.keys());const g=[];return Object.keys(a).forEach(r=>{!~g.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&w.warn(`<Page> was created with unknown prop '${r}'`)}),i.$capture_state=()=>({HashTable:h,myHash:n}),[]}class x extends f{constructor(a){super(a),m(this,a,$,c,p,{}),d("SvelteRegisterComponent",{component:this,tagName:"Page",options:a,id:c.name})}}export{x as default};