import"./reset-CzmXRRP5.js";window.requestAnimationFrame=window.__requestAnimationFrame||window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(){return function(f,c){var n=c.__lastTime;n===void 0&&(n=0);var i=Date.now(),v=Math.max(1,33-(i-n));window.setTimeout(f,v),c.__lastTime=i+v}}();window.isDevice=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test((navigator.userAgent||navigator.vendor||window.opera).toLowerCase());var C=!1,P=function(){if(!C){C=!0;var f=window.isDevice,c=f?.5:1,n=document.getElementById("heart"),i=n.getContext("2d"),v=n.width=c*innerWidth,l=n.height=c*innerHeight,o=Math.random;i.fillStyle="rgba(0,0,0,1)",i.fillRect(0,0,v,l);var q=function(a){return[Math.pow(Math.sin(a),3),-(15*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a))]},M=function(a,e,p,h,m){return[h+a[0]*e,m+a[1]*p]};window.addEventListener("resize",function(){v=n.width=c*innerWidth,l=n.height=c*innerHeight,i.fillStyle="rgba(0,0,0,1)",i.fillRect(0,0,v,l)});var T=f?20:50,s=[],t,x=f?.3:.1;for(t=0;t<Math.PI*2;t+=x)s.push(M(q(t),210,13,0,0));for(t=0;t<Math.PI*2;t+=x)s.push(M(q(t),150,9,0,0));for(t=0;t<Math.PI*2;t+=x)s.push(M(q(t),90,5,0,0));var d=s.length,w=[],_=function(a,e){for(t=0;t<s.length;t++)w[t]=[],w[t][0]=a*s[t][0]+v/2,w[t][1]=e*s[t][1]+l/2},g=[];for(t=0;t<d;t++){var S=o()*v,I=o()*l;g[t]={vx:0,vy:0,R:2,speed:o()+5,q:~~(o()*d),D:2*(t%2)-1,force:.2*o()+.7,f:"hsla(0,"+~~(40*o()+60)+"%,"+~~(60*o()+20)+"%,.3)",trace:[]};for(var r=0;r<T;r++)g[t].trace[r]={x:S,y:I}}var A={traceK:.4,timeDelta:.01},b=0,F=function(){var a=-Math.cos(b);for(_((1+a)*.5,(1+a)*.5),b+=(Math.sin(b)<0?9:a>.8?.2:1)*A.timeDelta,i.fillStyle="rgba(0,0,0,.1)",i.fillRect(0,0,v,l),t=g.length;t--;){var e=g[t],p=w[e.q],h=e.trace[0].x-p[0],m=e.trace[0].y-p[1],D=Math.sqrt(h*h+m*m);for(10>D&&(.95<o()?e.q=~~(o()*d):(.99<o()&&(e.D*=-1),e.q+=e.D,e.q%=d,0>e.q&&(e.q+=d))),e.vx+=-h/D*e.speed,e.vy+=-m/D*e.speed,e.trace[0].x+=e.vx,e.trace[0].y+=e.vy,e.vx*=e.force,e.vy*=e.force,r=0;r<e.trace.length-1;){var u=e.trace[r],y=e.trace[++r];y.x-=A.traceK*(y.x-u.x),y.y-=A.traceK*(y.y-u.y)}for(i.fillStyle=e.f,r=0;r<e.trace.length;r++)i.fillRect(e.trace[r].x,e.trace[r].y,1,1)}window.requestAnimationFrame(F,n)};F()}},R=document.readyState;R==="complete"||R==="loaded"||R==="interactive"?P():document.addEventListener("DOMContentLoaded",P,!1);
