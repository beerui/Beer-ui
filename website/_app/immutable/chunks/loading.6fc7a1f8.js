import{o as d,a as h,b as p,c as L,s as A,r as X}from"./beerui.dfc24136.js";import{t as k}from"./throttle.c22c4fe7.js";var u={},q=/d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,m="\\d\\d?",E="\\d{3}",O="\\d{4}",b="[^\\s]+",z=/\[([^]*?)\]/gm,H=function(){};function U(t){return t.replace(/[|\\{()[^$+*?.-]/g,"\\$&")}function Y(t,e){for(var n=[],s=0,i=t.length;s<i;s++)n.push(t[s].substr(0,e));return n}function C(t){return function(e,n,s){var i=s[t].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~i&&(e.month=i)}}function a(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var B=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],P=["January","February","March","April","May","June","July","August","September","October","November","December"],Z=Y(P,3),R=Y(B,3);u.i18n={dayNamesShort:R,dayNames:B,monthNamesShort:Z,monthNames:P,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!==10)*e%10]}};var N={D:function(t){return t.getDay()},DD:function(t){return a(t.getDay())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDate()},dd:function(t){return a(t.getDate())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return a(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},yy:function(t){return a(String(t.getFullYear()),4).substr(2)},yyyy:function(t){return a(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return a(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return a(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return a(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return a(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return a(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return a(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+a(Math.floor(Math.abs(e)/60)*100+Math.abs(e)%60,4)}},r={d:[m,function(t,e){t.day=e}],Do:[m+b,function(t,e){t.day=parseInt(e,10)}],M:[m,function(t,e){t.month=e-1}],yy:[m,function(t,e){var n=new Date,s=+(""+n.getFullYear()).substr(0,2);t.year=""+(e>68?s-1:s)+e}],h:[m,function(t,e){t.hour=e}],m:[m,function(t,e){t.minute=e}],s:[m,function(t,e){t.second=e}],yyyy:[O,function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=e*100}],SS:["\\d{2}",function(t,e){t.millisecond=e*10}],SSS:[E,function(t,e){t.millisecond=e}],D:[m,H],ddd:[b,H],MMM:[b,C("monthNamesShort")],MMMM:[b,C("monthNames")],a:[b,function(t,e,n){var s=e.toLowerCase();s===n.amPm[0]?t.isPm=!1:s===n.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var n=(e+"").match(/([+-]|\d\d)/gi),s;n&&(s=+(n[1]*60)+parseInt(n[2],10),t.timezoneOffset=n[0]==="+"?s:-s)}]};r.dd=r.d;r.dddd=r.ddd;r.DD=r.D;r.mm=r.m;r.hh=r.H=r.HH=r.h;r.MM=r.M;r.ss=r.s;r.A=r.a;u.masks={default:"ddd MMM dd yyyy HH:mm:ss",shortDate:"M/D/yy",mediumDate:"MMM d, yyyy",longDate:"MMMM d, yyyy",fullDate:"dddd, MMMM d, yyyy",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"};u.format=function(t,e,n){var s=n||u.i18n;if(typeof t=="number"&&(t=new Date(t)),Object.prototype.toString.call(t)!=="[object Date]"||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=u.masks[e]||e||u.masks.default;var i=[];return e=e.replace(z,function(o,c){return i.push(c),"@@@"}),e=e.replace(q,function(o){return o in N?N[o](t,s):o.slice(1,o.length-1)}),e.replace(/@@@/g,function(){return i.shift()})};u.parse=function(t,e,n){var s=n||u.i18n;if(typeof e!="string")throw new Error("Invalid format in fecha.parse");if(e=u.masks[e]||e,t.length>1e3)return null;var i={},o=[],c=[];e=e.replace(z,function(M,D){return c.push(D),"@@@"});var l=U(e).replace(q,function(M){if(r[M]){var D=r[M];return o.push(D[1]),"("+D[0]+")"}return M});l=l.replace(/@@@/g,function(){return c.shift()});var v=t.match(new RegExp(l,"i"));if(!v)return null;for(var _=1;_<v.length;_++)o[_-1](i,v[_],s);var x=new Date;i.isPm===!0&&i.hour!=null&&+i.hour!=12?i.hour=+i.hour+12:i.isPm===!1&&+i.hour==12&&(i.hour=0);var S;return i.timezoneOffset!=null?(i.minute=+(i.minute||0)-+i.timezoneOffset,S=new Date(Date.UTC(i.year||x.getFullYear(),i.month||0,i.day||1,i.hour||0,i.minute||0,i.second||0,i.millisecond||0))):S=new Date(i.year||x.getFullYear(),i.month||0,i.day||1,i.hour||0,i.minute||0,i.second||0,i.millisecond||0),S};const W=typeof window<"u",V=(t,e,n)=>new y(t,e,n),$=function(){return W&&!!window.navigator.userAgent.match(/firefox/i)},T=$()?"DOMMouseScroll":"mousewheel";class y{constructor(e,n=[],s){return this.body=document.body,this._index=0,this.scale=1,this.rotate=0,this.transform={offsetX:0,offsetY:0},y.instance||(this.src=e,this.list=n,this.len=n.length,s&&(this.cb=s),this.init(),y.instance=this),y.instance}get current(){return{list:this.list,current:this.src,index:this._index}}get index(){return this._index}watchHandle(e){e&&(this.cb=e),this.cb&&this.cb(this.current)}init(){document.querySelector(".be-preview")?this.container=document.querySelector(".be-preview"):(this.container=document.createElement("div"),this.container.classList.add("be-preview"),this.len<=1&&this.container.classList.add("be-preview__hide-btn"),this.container.innerHTML=`
				<div class='be-preview__mask'></div>
				<div class='be-preview__btn be-preview__close'>
					<i class='be-icon be-icon-close'></i>
				</div>
				<div class='be-preview__btn be-preview__prev'>
					<i class='be-icon be-icon-chevron-left'></i>
				</div>
				<div class='be-preview__btn be-preview__next'>
					<i class='be-icon be-icon-chevron-right'></i>
				</div>
				${this.renderBtn()}
				<div class='be-preview__container'>
					<img class='be-preview__img' draggable='true' alt='image preview' src='' />
				</div>
			`),this.disableScroll(),this.renderImage(),this.body.appendChild(this.container)}renderBtn(){return`
		<div class='be-preview__actions'>
			<div class='be-preview__actions__inner'>
				<i data-type='zoomOut' class='be-icon be-icon-zoom-out'></i>
				<i data-type='zoomIn' class='be-icon be-icon-zoom-in'></i>
				<i data-type='chevronLeft' class='be-icon be-icon-rollback'></i>
				<i data-type='chevronRight' class='be-icon be-icon-rollback' style='transform: rotateY(180deg);'></i>
			</div>
		</div>`}renderImage(){if(this.node=this.container.querySelector(".be-preview__img"),this.maskDom=this.container.querySelector(".be-preview__mask"),this.closeDom=this.container.querySelector(".be-preview__close"),this.prevDom=this.container.querySelector(".be-preview__prev"),this.nextDom=this.container.querySelector(".be-preview__next"),this.btnDom=this.container.querySelector(".be-preview__actions__inner"),this.deviceSupportInstall(),this.list.length>0){let e=0;for(let n=0;n<this.list.length;n++)if(this.src===this.list[n]){e=n;break}this._index=e}else this.list=[this.src];this.node.src=this.list[this._index],this.watchHandle()}deviceSupportUninstall(){d(document,"keydown",this._keyDownHandler),d(document,T,this._mouseWheelHandler),d(this.maskDom,"click",()=>this.close),d(this.closeDom,"click",()=>this.close),d(this.prevDom,"click",()=>this.changeImage),d(this.nextDom,"click",()=>this.changeImage),d(this.btnDom,"click",()=>this.clickBtnHandler),d(this.node,"mousedown",()=>this.handleMouseDown),this._keyDownHandler=null,this._mouseWheelHandler=null}deviceSupportInstall(){this._keyDownHandler=e=>{switch(e.stopPropagation(),e.keyCode){case 27:this.close();break;case 37:this.changeImage("prev");break;case 38:this.clickBtnHandler("zoomIn");break;case 39:this.changeImage("next");break;case 40:this.clickBtnHandler("zoomOut");break}},this._mouseWheelHandler=k(e=>{(e.wheelDelta?e.wheelDelta:-e.detail)>0?this.clickBtnHandler("zoomIn"):this.clickBtnHandler("zoomOut")},30),h(this.maskDom,"click",()=>this.close()),h(this.node,"mousedown",e=>this.handleMouseDown(e)),h(this.closeDom,"click",()=>this.close()),h(this.prevDom,"click",()=>this.changeImage("prev")),h(this.nextDom,"click",()=>this.changeImage("next")),h(this.btnDom,"click",e=>this.clickBtnHandler(e.target.dataset.type)),h(document,"keydown",this._keyDownHandler),h(document,T,this._mouseWheelHandler)}clickBtnHandler(e){e==="zoomIn"&&(this.scale=(this.scale*100+20)/100),e==="zoomOut"&&(this.scale=(this.scale*100-20)/100),e==="chevronLeft"&&(this.rotate=this.rotate+90),e==="chevronRight"&&(this.rotate=this.rotate-90),this.scale<.2&&(this.scale=.2),this.node.style.transform=`scale(${this.scale}) rotate(${this.rotate}deg)`}changeImage(e){e==="prev"&&this._index--,e==="next"&&this._index++,this._index<0&&(this._index=this.list.length-1),this._index>=this.list.length&&(this._index=0),this.scale=1,this.rotate=0,this.node.style.marginLeft="0px",this.node.style.marginTop="0px",this.node.style.transform=`scale(${this.scale}) rotate(${this.rotate}deg)`,this.node.src=this.list[this._index],this.watchHandle()}handleMouseDown(e){if(e.button!==0)return;const n=e.pageX,s=e.pageY;let i=this.transform.offsetX,o=this.transform.offsetY;this._dragHandler=k(c=>{this.transform.offsetX=i+c.pageX-n,this.transform.offsetY=o+c.pageY-s,this.node.style.marginLeft=this.transform.offsetX+"px",this.node.style.marginTop=this.transform.offsetY+"px"},30),h(document,"mousemove",this._dragHandler),h(document,"mouseup",()=>{d(document,"mousemove",this._dragHandler)}),e.preventDefault()}close(){this.recoveryScroll(),this.deviceSupportUninstall(),this.body.removeChild(this.container),y.instance=null,this._index=0,this.node=null,this.cb=null,this.list=[]}disableScroll(){this.style=this.body.style.overflow,this.body.style.overflow="hidden"}recoveryScroll(){this.body.style.overflow=this.style}}let F=0;const I="webkit moz ms o".split(" ");let f,g;const J=typeof window>"u";if(J)f=function(){},g=function(){};else{f=window.requestAnimationFrame,g=window.cancelAnimationFrame;let t;for(let e=0;e<I.length&&!(f&&g);e++)t=I[e],f=f||window[t+"RequestAnimationFrame"],g=g||window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"];(!f||!g)&&(f=function(e){const n=new Date().getTime(),s=Math.max(0,16-(n-F)),i=window.setTimeout(()=>{e(n+s)},s);return F=n+s,i},g=function(e){window.clearTimeout(e)})}const G=typeof window<"u";let w;G&&(w=document.createElement("div"),p(w,"be-loading-mask"),w.innerHTML=`<div class="be-loading-spinner">
    <svg class="circular" viewBox="25 25 50 50">
      <circle class="path" cx="50" cy="50" r="20" fill="none"/>
    </svg>
    <p class="loading-text"></p>
  </div>
  `);class j{constructor(e){this.background=(e==null?void 0:e.background)||"",this.text=(e==null?void 0:e.text)||"拼命加载中",this.customClass=(e==null?void 0:e.customClass)||"",L(e==null?void 0:e.target)?this.target=document.querySelector(String(e==null?void 0:e.target)):this.target=(e==null?void 0:e.target)||document.body,this.node=w.cloneNode(!0)}show(){p(this.target,"be-loading-position"),this.target.appendChild(this.node);const e=this.target.querySelector(".be-loading-mask");this.customClass&&p(e,this.customClass),A(e,"background",this.background);const n=this.target.lastChild.querySelector(".loading-text");n.innerText=this.text}close(){X(this.target,"be-loading-position"),this.target.removeChild(this.node)}}function ee(t,e){const n=w.cloneNode(!0),s=t.getAttribute("loading-text"),i=t.getAttribute("loading-background"),o=t.getAttribute("loading-class");function c(){p(t,"be-loading-position"),t.appendChild(n);const l=t.querySelector(".be-loading-mask");o&&p(l,o),A(l,"background",i);const v=t.querySelector(".loading-text");v.innerText=s}return e&&c(),{update(l){l&&c(),l||t.removeChild(n)},destroy(l){}}}export{j as a,g as c,u as f,ee as l,V as p,f as r};