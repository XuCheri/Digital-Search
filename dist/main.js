(()=>{"use strict";var t=["#f26395","#62efab","#ef7658","#ffe868","#80e3f7","#d781f9"];function e(t,e){return Math.floor(Math.random()*(e-t)+t)}var n=document.getElementById("divContainer"),r=document.getElementById("divCenter");var i=new class{constructor(t=500){this.duration=t,this.number=1,this.onNumberCreated=null,this.timerId=null}start(){this.timerId||(this.timerId=setInterval((()=>{this.onNumberCreated&&this.onNumberCreated(this.number,function(t){if(t<2)return!1;for(let e=2;e<=t-1;e++)if(t%e==0)return!1;return!0}(this.number)),this.number++}),this.duration))}stop(){clearInterval(this.timerId),this.timerId=null}}(500);i.onNumberCreated=function(i,o){!function(i,o){var a,s=document.createElement("span"),u=(a=e(0,t.length-1),t[a]);o&&(s.style.color=u,function(t,n){var r=document.createElement("div");r.className="center",r.style.color=n,r.innerText=t,document.body.appendChild(r),getComputedStyle(r).left,r.style.transform=`translate(${e(-150,150)}px,${e(-150,150)}px)`,r.style.opacity=0}(i,u)),s.innerText=i,n.appendChild(s),function(t){r.innerText=t}(i)}(i,o)};var o=!1;window.onclick=function(){o?(i.stop(),o=!1):(i.start(),o=!0)}})();