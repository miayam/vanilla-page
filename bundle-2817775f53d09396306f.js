(function(a){function b(b){for(var d,e,h=b[0],j=b[1],k=b[2],l=0,m=[];l<h.length;l++)e=h[l],f[e]&&m.push(f[e][0]),f[e]=0;for(d in j)Object.prototype.hasOwnProperty.call(j,d)&&(a[d]=j[d]);for(i&&i(b);m.length;)m.shift()();return g.push.apply(g,k||[]),c()}function c(){for(var a,b=0;b<g.length;b++){for(var c,e=g[b],h=!0,i=1;i<e.length;i++)c=e[i],0!==f[c]&&(h=!1);h&&(g.splice(b--,1),a=d(d.s=e[0]))}return a}function d(b){if(e[b])return e[b].exports;var c=e[b]={i:b,l:!1,exports:{}};return a[b].call(c.exports,c,c.exports,d),c.l=!0,c.exports}var e={},f={1:0},g=[];d.m=a,d.c=e,d.d=function(a,b,c){d.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:c})},d.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},d.t=function(a,b){if(1&b&&(a=d(a)),8&b)return a;if(4&b&&'object'==typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,'default',{enumerable:!0,value:a}),2&b&&'string'!=typeof a)for(var e in a)d.d(c,e,function(b){return a[b]}.bind(null,e));return c},d.n=function(a){var b=a&&a.__esModule?function(){return a['default']}:function(){return a};return d.d(b,'a',b),b},d.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d.p='/vanilla-page/';var h=window.webpackJsonp=window.webpackJsonp||[],j=h.push.bind(h);h.push=b,h=h.slice();for(var k=0;k<h.length;k++)b(h[k]);var i=j;return g.push([0,0]),c()})([function(a,b,c){'use strict';c.r(b);var d=c(1),e=c(3),f=c(4),g=c.n(f);window.onload=function(){d['default'].init(),e['default'].init()},window.addEventListener('scroll',function(){d['default'].handleScroll(),e['default'].handleScroll()})},function(a,b,c){'use strict';function d(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);'function'==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a){return f='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},f(a)}c.r(b),c.d(b,'hasPassed10Minutes',function(){return h}),c.d(b,'handleCloseNewsLetter',function(){return i});var g=c(2),h=function(a){return function(b){return function(c,d){return b(c,d)>=a}}}(10)(function(a,b){var c=a.getTime()-b.getTime();return c/1e3/60}),i=function(){var a=document.getElementById('closeButton'),b=document.getElementById('newsLetter');a.addEventListener('click',function(){g.storage.setItem('landing_page',{enabled:!1,open:!1,time:new Date}),b.style.bottom=''.concat(-1*b.offsetHeight,'px'),b.style.visibility='hidden'})},j=function(a){return a&&'object'===f(a)&&a.constructor===Object},k=function(){return j(g.storage.getItem('landing_page'))},l=function(){return k()?void console.log('No need storage initialization.'):void(g.storage.setItem('landing_page',{enabled:!0,open:!1}),console.log('Storage initialized!',g.storage.getItem('landing_page')))};b['default']={handleScroll:function(){var a=g.storage.getItem('landing_page'),b=document.getElementById('newsLetter'),c=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),e=window.pageYOffset>c/3,f=k()&&!a.enabled&&a.time&&h(new Date,new Date(a.time));k()&&(f&&g.storage.setItem('landing_page',{enabled:!0,time:new Date}),e&&a.enabled&&!a.open&&g.storage.setItem('landing_page',d({},a,{open:!0})),e&&a.open&&(b.style.bottom='0',b.style.visibility='visible'))},init:function(){var a=document.getElementById('newsLetter');a.style.bottom=''.concat(-1*a.offsetHeight,'px'),a.style.transition='all .5s ease-out',i(),l()}}},function(a,b,c){'use strict';c.r(b),c.d(b,'storage',function(){return d});var d=function(){try{var a=localStorage||{};return{setItem:function(b,c){a[b]='string'==typeof c?c:JSON.stringify(c)},getItem:function(b){if(!a[b])return null;var c=a[b];try{var d=JSON.parse(c);return d}catch(a){return c}},removeItem:function(b){return localStorage?localStorage.removeItem(b):void delete a[b]}}}catch(a){return console.warn(a),setTimeout(function(){return alert('Cookie disabled')},1e3),{setItem:function(){return''},getItem:function(){return''},removeItem:function(){return''}}}}()},function(a,b,c){'use strict';c.r(b);var d=document.getElementById('pageHeader'),e=document.getElementById('notificationPanel'),f=document.getElementById('notificationCTA');b['default']={handleScroll:function(){var a='absolute'===window.getComputedStyle(e).position;a||(0<window.pageYOffset?(e.style.position='fixed',e.style.borderBottom='1px solid #a09a9a',d.style.marginTop=''.concat(e.offsetHeight,'px')):(e.style.position='relative',e.style.borderBottom='unset',d.style.marginTop='0'))},init:function(){e.style.transition='all .5s ease-out',e.style.top='0',f.addEventListener('click',function(){e.style.transform='translateY(-100%)',e.style.position='absolute'})}}}]);