const h="modulepreload",m=function(l,s){return new URL(l,s).href},u={},d=function(s,i,c){if(!i||i.length===0)return s();const a=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=m(e,c),e in u)return;u[e]=!0;const n=e.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!c)for(let r=a.length-1;r>=0;r--){const o=a[r];if(o.href===e&&(!n||o.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":h,n||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),n)return new Promise((r,o)=>{t.addEventListener("load",r),t.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())},E=!0;export{d as _,E as b};