(()=>{let f$=Object.hasOwnProperty,h$={},j$,k$=a$=>{let b$=h$[a$];return b$||(b$=h$[a$]={exports:{}},j$[a$](b$.exports,b$)),b$.exports},l$=a$=>{if(a$&&a$.__esModule)return a$;let b$={};for(let c$ in a$)f$.call(a$,c$)&&(b$[c$]=a$[c$]);return b$.default=a$,b$},p$=a$=>l$(k$(a$));j$={16(){var M={};try{M.WeakMap=WeakMap}catch(b){M.WeakMap=function(a,c){"use strict";var d=c.defineProperty,e=c.hasOwnProperty,g=f.prototype;return g.delete=function(h){return this.has(h)&&delete h[this._]},g.get=function(h){return this.has(h)?h[this._]:void 0},g.has=function(h){return e.call(h,this._)},g.set=function(h,i){return d(h,this._,{configurable:!0,value:i}),this},f;function f(h){d(this,"_",{value:"_@ungap/weakmap"+a++}),h&&h.forEach(j,this)}function j(h){this.set(h[0],h[1])}}(Math.random(),Object)}const N=M.WeakMap;var r="-"+Math.random().toFixed(6)+"%",E=!1;try{(function(b,a,c){return a in b&&(b.innerHTML="<p "+c+'="'+r+'"></p>',b[a].childNodes[0].getAttribute(c)==r)})(document.createElement("template"),"content","tabindex")||(r="_dt: "+r.slice(1,-1)+";",E=!0)}catch(b){}var A="<!--"+r+"-->",V=8,va=11,W=1,X=3,O=/^(?:style|textarea)$/i,Y=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;function Z(b){return b.join(A).replace(xa,Ba).replace(wa,za)}var F=" \\f\\n\\r\\t",_="[^"+F+`\\/>"'=]+`,P="["+F+"]+"+_,$="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",aa=`(?:\\s*=\\s*(?:'[^']*?'|"[^"]*?"|<[^>]*?>|`+_.replace("\\/","")+"))?)",wa=new RegExp($+P+aa+"+)(["+F+"]*/?>)","g"),xa=new RegExp($+P+aa+"*)(["+F+"]*/>)","g"),ya=new RegExp("("+P+`\\s*=\\s*)(['"]?)`+A+"\\2","gi");function za(b,a,c,d){return"<"+a+c.replace(ya,Aa)+d}function Aa(b,a,c){return a+(c||'"')+r+(c||'"')}function Ba(b,a,c){return Y.test(a)?b:"<"+a+c+"></"+a+">"}const{isArray:B}=Array,{indexOf:$a,slice:v}=[];const Q=b=>({get:a=>b.get(a),set:(a,c)=>(b.set(a,c),c)});const ab=1,oa=111,bb=({firstChild:b,lastChild:a})=>{const c=document.createRange();return c.setStartAfter(b),c.setEndAfter(a),c.deleteContents(),b};const u=(b,a)=>b.nodeType===oa?1/a<0?a?bb(b):b.lastChild:a?b.valueOf():b.firstChild:b,Ma=b=>{const{childNodes:a}=b,{length:c}=a;if(c<2)return c?a[0]:b;const d=v.call(a,0),e=d[0],g=d[c-1];return{ELEMENT_NODE:ab,nodeType:oa,firstChild:e,lastChild:g,valueOf(){if(a.length!==c){let f=0;for(;f<c;)b.appendChild(d[f++])}return b}}};var ra=function(b){"use strict";var a="fragment",c="template",d="content"in f(c),e=d?function(h){var i=f(c);return i.innerHTML=h,i.content}:function(h){var i=f(a),k=f(c),l=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(h)){var m=RegExp.$1;k.innerHTML="<table>"+h+"</table>",l=k.querySelectorAll(m)}else k.innerHTML=h,l=k.childNodes;return g(i,l),i};return function h(i,k){return(k==="svg"?j:e)(i)};function g(h,i){for(var k=i.length;k--;)h.appendChild(i[0])}function f(h){return h===a?b.createDocumentFragment():b.createElementNS("http://www.w3.org/1999/xhtml",h)}function j(h){var i=f(a),k=f("div");return k.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+h+"</svg>",g(i,k.firstChild.childNodes),i}}(document);const T=ra;const t=(b,a,c,d,e)=>{const g=c.length;let f=a.length,j=g,h=0,i=0,k=null;for(;h<f||i<j;)if(f===h){const l=j<g?i?d(c[i-1],-0).nextSibling:d(c[j-i],0):e;for(;i<j;)b.insertBefore(d(c[i++],1),l)}else if(j===i)for(;h<f;)(!k||!k.has(a[h]))&&b.removeChild(d(a[h],-1)),h++;else if(a[h]===c[i])h++,i++;else if(a[f-1]===c[j-1])f--,j--;else if(a[h]===c[j-1]&&c[i]===a[f-1]){const l=d(a[--f],-1).nextSibling;b.insertBefore(d(c[i++],1),d(a[h++],-1).nextSibling),b.insertBefore(d(c[--j],1),l),a[f]=c[j]}else{if(!k){k=new Map();let l=i;for(;l<j;)k.set(c[l],l++)}if(k.has(a[h])){const l=k.get(a[h]);if(i<l&&l<j){let m=h,o=1;for(;++m<f&&m<j&&k.get(a[m])===l+o;)o++;if(o>l-i){const n=d(a[h],0);for(;i<l;)b.insertBefore(d(c[i++],1),n)}else b.replaceChild(d(c[i++],1),d(a[h++],-1))}else h++}else b.removeChild(d(a[h++],-1))}return c};var sa=function(b,a,c,d,e){var g=e in b,f=b.createDocumentFragment();f[a](b[d]("g")),f[a](b[d](""));var j=g?b[e](f,!0):f[c](!0);return j.childNodes.length<2?function h(i,k){for(var l=i[c](),m=i.childNodes||[],o=m.length,n=0;k&&n<o;n++)l[a](h(m[n],k));return l}:g?b[e]:function(h,i){return h[c](!!i)}}(document,"appendChild","cloneNode","createTextNode","importNode");const ta=sa;var ua="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")};const U=ua;var Ha=E?function(b,a){var c=a.join(" ");return a.slice.call(b,0).sort(function(d,e){return c.indexOf(d.name)<=c.indexOf(e.name)?-1:1})}:function(b,a){return a.slice.call(b,0)};function ba(b,a){for(var c=a.length,d=0;d<c;)b=b.childNodes[a[d++]];return b}function R(b,a,c,d){for(var e=b.childNodes,g=e.length,f=0;f<g;){var j=e[f];switch(j.nodeType){case W:var h=d.concat(f);Ia(j,a,c,h),R(j,a,c,h);break;case V:var i=j.textContent;if(i===r)c.shift(),a.push(O.test(b.nodeName)?fa(b,d):Ja(j,d.concat(f)));else switch(i.slice(0,2)){case"/*":if(i.slice(-2)!=="*/")break;case"👻":b.removeChild(j),f--,g--}break;case X:O.test(b.nodeName)&&U.call(j.textContent)===A&&(c.shift(),a.push(fa(b,d)));break}f++}}function Ia(b,a,c,d){for(var e=b.attributes,g=[],f=[],j=Ha(e,c),h=j.length,i=0;i<h;){var k=j[i++],l=k.value===r,m;if(l||1<(m=k.value.split(A)).length){var o=k.name;if(g.indexOf(o)<0){g.push(o);var n=c.shift().replace(l?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+o+`)\\s*=\\s*('|")[\\S\\s]*`,"i"),"$1"),w=e[n]||e[n.toLowerCase()];if(l)a.push(ea(w,d,n,null));else{for(var x=m.length-2;x--;)c.shift();a.push(ea(w,d,n,m))}}f.push(k)}}h=f.length,i=0;for(var L=0<h&&E&&!("ownerSVGElement"in b);i<h;){var s=f[i++];L&&(s.value=""),b.removeAttribute(s.name)}var y=b.nodeName;if(/^script$/i.test(y)){var z=document.createElement(y);for(h=e.length,i=0;i<h;)z.setAttributeNode(e[i++].cloneNode(!0));z.textContent=b.textContent,b.parentNode.replaceChild(z,b)}}function Ja(b,a){return{type:"any",node:b,path:a}}function ea(b,a,c,d){return{type:"attr",node:b,path:a,name:c,sparse:d}}function fa(b,a){return{type:"text",node:b,path:a}}const Ca=Ga;var ca=Q(new N());function Da(b,a){var c=(b.convert||Z)(a),d=b.transform;d&&(c=d(c));var e=T(c,b.type);da(e);var g=[];return R(e,g,a.slice(0),[]),{content:e,updates:function(f){for(var j=[],h=g.length,i=0,k=0;i<h;){var l=g[i++],m=ba(f,l.path);switch(l.type){case"any":j.push({fn:b.any(m,[]),sparse:!1});break;case"attr":var o=l.sparse,n=b.attribute(m,l.name,l.node);o===null?j.push({fn:n,sparse:!1}):(k+=o.length-2,j.push({fn:n,sparse:!0,values:o}));break;case"text":j.push({fn:b.text(m),sparse:!1}),m.textContent="";break}}return h+=k,function(){var w=arguments.length;if(h!==w-1)throw new Error(w-1+" values instead of "+h+`
`+a.join("${value}"));for(var x=1,L=1;x<w;){var s=j[x-L];if(s.sparse){var y=s.values,z=y[0],pa=1,qa=y.length;for(L+=qa-2;pa<qa;)z+=arguments[x++]+y[pa++];s.fn(z)}else s.fn(arguments[x++])}return f}}}}function Ea(b,a){var c=ca.get(a)||ca.set(a,Da(b,a));return c.updates(ta.call(document,c.content,!0))}var Fa=[];function Ga(b){var a=Fa,c=da;return function(d){return a!==d&&(c=Ea(b,a=d)),c.apply(null,arguments)}}function da(b){for(var a=b.childNodes,c=a.length;c--;){var d=a[c];d.nodeType!==1&&U.call(d.textContent).length===0&&b.removeChild(d)}}var Ka=function(){"use strict";var b=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,a=/([^A-Z])([A-Z]+)/g;return function f(j,h){return"ownerSVGElement"in j?d(j,h):g(j.style,!1)};function c(f,j,h){return j+"-"+h.toLowerCase()}function d(f,j){var h;return j?h=j.cloneNode(!0):(f.setAttribute("style","--hyper:style;"),h=f.getAttributeNode("style")),h.value="",f.setAttributeNode(h),g(h,!0)}function e(f){var j,h=[];for(j in f)h.push(j.replace(a,c),":",f[j],";");return h.join("")}function g(f,j){var h,i;return function(k){var l,m,o,n;switch(typeof k){case"object":if(k){if(h==="object"){if(!j){if(i!==k)for(m in i)m in k||(f[m]="")}}else j?f.value="":f.cssText="";l=j?{}:f;for(m in k)n=k[m],o=typeof n==="number"&&!b.test(m)?n+"px":n,!j&&/^--/.test(m)?l.setProperty(m,o):l[m]=o;h="object",j?f.value=e(i=l):i=k;break}default:i!=k&&(h="string",i=k,j?f.value=k||"":f.cssText=k||"");break}}}}();const La=Ka;const Ta=b=>a=>{for(const c in a){const d=c==="role"?c:`aria-${c}`,e=a[c];e==null?b.removeAttribute(d):b.setAttribute(d,e)}},ma=(b,a)=>{let c,d=!0;const e=document.createAttributeNS(null,a);return g=>{c!==g&&(c=g,c==null?d||(b.removeAttributeNode(e),d=!0):(e.value=g,d&&(b.setAttributeNodeNS(e),d=!1)))}},Ua=({dataset:b})=>a=>{for(const c in a){const d=a[c];d==null?delete b[c]:b[c]=d}},Va=(b,a)=>{let c,d=a.slice(2);return!(a in b)&&a.toLowerCase()in b&&(d=d.toLowerCase()),e=>{const g=B(e)?e:[e,!1];c!==g[0]&&(c&&b.removeEventListener(d,c,g[1]),(c=g[0])&&b.addEventListener(d,c,g[1]))}},Wa=b=>a=>{typeof a==="function"?a(b):a.current=b},na=(b,a)=>c=>{b[a]=c},Kc=b=>{let a;return c=>{a!=c&&(a=c,b.textContent=c==null?"":c)}};const Xa=(b,a)=>{let c;return d=>{c!==d&&(c=d,b[a]!==d&&(d==null?(b[a]="",b.removeAttribute(a)):b[a]=d))}},Ya=/^(?:form|list)$/i,Za=(b,a)=>b.ownerDocument.createTextNode(a);function G(b){return this.type=b,Ca(this)}G.prototype={attribute(b,a,c){const d=this.type==="svg";switch(a){case"class":if(d)return ma(b,a,d);a="className";case"props":return na(b,a);case"aria":return Ta(b);case"style":return La(b,c,d);case"ref":return Wa(b);case".dataset":return Ua(b);default:return a.slice(0,1)==="."?na(b,a.slice(1)):a.slice(0,2)==="on"?Va(b,a):a in b&&!(d||Ya.test(a))?Xa(b,a):ma(b,a,d)}},any(b,a){const{type:c}=this;let d=!1,e;const g=f=>{switch(typeof f){case"string":case"number":case"boolean":d?e!==f&&(e=f,a[0].textContent=f):(d=!0,e=f,a=t(b.parentNode,a,[Za(b,f)],u,b));break;case"function":g(f(b));break;case"object":case"undefined":if(f==null){d=!1,a=t(b.parentNode,a,[],u,b);break}default:d=!1,e=f;if(B(f))if(f.length===0)a.length&&(a=t(b.parentNode,a,[],u,b));else switch(typeof f[0]){case"string":case"number":case"boolean":g(String(f));break;case"function":g(f.map(_a,b));break;case"object":B(f[0])&&(f=f.concat.apply([],f));default:a=t(b.parentNode,a,f,u,b);break}else"ELEMENT_NODE"in f?a=t(b.parentNode,a,f.nodeType===11?v.call(f.childNodes):[f],u,b):"text"in f?g(String(f.text)):"any"in f?g(f.any):"html"in f?a=t(b.parentNode,a,v.call(T([].concat(f.html).join(""),c).childNodes),u,b):"length"in f&&g(v.call(f));break}};return g},text(b){let a;const c=d=>{if(a!==d){a=d;const e=typeof d;e==="object"&&d?"text"in d?c(String(d.text)):"any"in d?c(d.any):"html"in d?c([].concat(d.html).join("")):"length"in d&&c(v.call(d).join("")):e==="function"?c(d(b)):b.textContent=d==null?"":d}};return c}};function _a(b){return b(this)}const{create:ha,freeze:Na,keys:Oa}=Object,Pa=G.prototype,ia=Q(new N()),ja=b=>({html:ka("html",b),svg:ka("svg",b),render(a,c){const d=typeof c==="function"?c():c,e=ia.get(a)||ia.set(a,C()),g=d instanceof I?H(b,e,d):d;return g!==e.wire&&(e.wire=g,a.textContent="",a.appendChild(g.valueOf())),a}}),C=()=>({stack:[],entry:null,wire:null}),ka=(b,a)=>{const c=Q(new N()),d=g=>function(){return H(a,g,e.apply(null,arguments))};return e.for=(g,f)=>{const j=c.get(g)||c.set(g,ha(null));return j[f]||(j[f]=d(C()))},e.node=function(){return H(a,C(),e.apply(null,arguments)).valueOf()},e;function e(){return new I(b,Sa.apply(null,arguments))}},H=(b,a,{type:c,template:d,values:e})=>{const{length:g}=e;la(b,a,e,g);let{entry:f}=a;if(!f||(f.template!==d||f.type!==c)){const j=new b(c);a.entry=f={type:c,template:d,tag:j,wire:Ma(j(d,...e))}}else f.tag(d,...e);return f.wire},la=(b,{stack:a},c,d)=>{for(let e=0;e<d;e++){const g=c[e];g instanceof Qa?c[e]=H(b,a[e]||(a[e]=C()),g):B(g)?la(b,a[e]||(a[e]=C()),g,g.length):a[e]=null}d<a.length&&a.splice(d)};Na(I);function I(b,a){this.type=b,this.template=a.shift(),this.values=a}const Qa=I,pc=b=>{const a=ha(Pa);return Oa(b).forEach(d=>{a[d]=b[d](a[d]||(d==="convert"?Z:String))}),c.prototype=a,ja(c);function c(){return G.apply(this,arguments)}};const{render:D,html:p,svg:Ra}=ja(G);function Sa(){let b=[],a=0,{length:c}=arguments;for(;a<c;)b.push(arguments[a++]);return b}const cb={httpsrssnytimescomservicesxmlrssnytHomePagexml:{name:"NYTimes Front Page",url:"https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHomePage.xml",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpswwwaljazeeracomxmlrssallxml:{name:"Al Jazeera",url:"https%3A%2F%2Fwww.aljazeera.com%2Fxml%2Frss%2Fall.xml",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpswwwtheguardiancomusrss:{name:"The Guardian",url:"https%3A%2F%2Fwww.theguardian.com%2Fus%2Frss",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpnewsrssbbccoukrssnewsonlineukeditionworldrssxml:{name:"BBC World News",url:"http%3A%2F%2Fnewsrss.bbc.co.uk%2Frss%2Fnewsonline_uk_edition%2Fworld%2Frss.xml",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpswwwredditcomrworldnewsrss:{name:"Reddit World News",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2Fworldnews.rss",updateHoursInterval:"3",lastUpdate:0,enabled:!0},httpshnrssorgfrontpage:{name:"Hacker News",url:"https%3A%2F%2Fhnrss.org%2Ffrontpage",updateHoursInterval:3,lastUpdate:0,enabled:!0},httpsrssnytimescomservicesxmlrssnytTechnologyxml:{name:"NYTimes Tech",url:"https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FTechnology.xml",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpsrssnytimescomservicesxmlrssnytSciencexml:{name:"NYTimes Science",url:"https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FScience.xml",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpsrssnytimescomservicesxmlrssnytSpacexml:{name:"NYTimes Science Space",url:"https%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FSpace.xml",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpswwwsciencenewsorgfeed:{name:"Science News Daily",url:"https%3A%2F%2Fwww.sciencenews.org%2Ffeed%2F",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpfeedsbbcicouknewsscienceandenvironmentrssxml:{name:"BBC Science and Environment",url:"http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fscience_and_environment%2Frss.xml",updateHoursInterval:12,lastUpdate:0,enabled:!0},httpsfeedsnewscientistcomfeatures:{name:"New Scientist",url:"https%3A%2F%2Ffeeds.newscientist.com%2Ffeatures",updateHoursInterval:"80",lastUpdate:0,enabled:!0},httpswwwredditcomrsciencerss:{name:"Reddit Science",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2Fscience.rss",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpswwwredditcomrjavascriptrss:{name:"Reddit JavaScript",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2Fjavascript.rss",updateHoursInterval:"12",lastUpdate:0,enabled:!0},httpswwwredditcomrsantacruzrss:{name:"Reddit Santa Cruz",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2Fsantacruz.rss",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpswwwredditcomrultralightrss:{name:"Ultralight",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2Fultralight.rss",updateHoursInterval:"6",lastUpdate:0,enabled:!0},httpswwwredditcomroaklandrss:{name:"Reddit Oakland",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2Foakland.rss",updateHoursInterval:"6",lastUpdate:0,enabled:!0},httpswwwredditcomrbayarearss:{name:"Reddit Bay Area",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2Fbayarea.rss",updateHoursInterval:"6",lastUpdate:0,enabled:!0},httpswwwredditcomrpauperedhrss:{name:"Reddit Pauper EDH",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2FPauperEDH.rss",updateHoursInterval:"24",lastUpdate:0,enabled:!0},httpswwwredditcomrpauperrss:{name:"Reddit Pauper",url:"https%3A%2F%2Fwww.reddit.com%2Fr%2FPauper.rss",updateHoursInterval:"24",lastUpdate:0,enabled:!0}};const db=document.querySelector(".feeds"),eb=document.querySelector(".feed-list"),fb=document.querySelector(".add-feed"),gb=document.querySelector(".settings"),hb="https://api.rss2json.com/v1/api.json",ib=500,q={setItem:async function(b,a){await Promise.resolve(),localStorage.setItem(b,a)},getItem:async function(b){return await Promise.resolve(),localStorage.getItem(b)}};window.onload=function(){b();async function b(){let a=await q.getItem("data");if(!a){a=window.prompt("Access code: ");if(a.length>63&&a.length<18){ga&&ga("send",{hitType:"event",eventCategory:"error",eventAction:"signin",eventLabel:"wrong-size"});return}await q.setItem("data",a)}J(a),jb()}};async function J(b){const a=await q.getItem("feedData");b||(b=await q.getItem("data"));let c;a?(console.log("Got feeds from local"),c=await S(a)):c=cb;const d=Date.now(),e=await pb(d,c),g=lb(5);if(e&&e.length>0){console.log("Requested new feeds");const i=await Promise.all(e.map(l=>fetch(hb+"?rss_url="+l+"&api_key="+b+"&cache_bust="+g).then(m=>m.json()))).then(l=>(l.status==="error"&&ga&&ga("send",{hitType:"event",eventCategory:"error",eventAction:"request-rss",eventLabel:l.message}),l));await mb(i,c);const k=await K(c);await q.setItem("feedData",k)}const f=await ob(c),j=await nb(f),h=await j.slice(0,ib);sb(h),ub(c,rb),vb(qb),wb(q,c,J)}function jb(){document.querySelector(".logo").addEventListener("click",()=>{window.scrollTo(0,0)},!1)}function kb(b){const a=decodeURIComponent(b);return a.replace(/[^a-zA-Z ]/g,"")}function lb(b){for(var a="",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=c.length,e=0;e<b;e++)a+=c.charAt(Math.floor(Math.random()*d));return a}function mb(b,a){return new Promise((c,d)=>{for(var e=0;e<b.length;e++)if(b[e]&&b[e].feed&&b[e].feed.url){const g=kb(b[e].feed.url);a[g]&&(a[g]={...a[g],...b[e]})}c()})}function nb(b){return new Promise((a,c)=>{const d=b.sort((e,g)=>e.pubDate&&g.pubDate?e.pubDate-g.pubDate:0);a(d)})}function S(b){return new Promise((a,c)=>{try{a(JSON.parse(b))}catch(d){c(d)}})}function K(b){return new Promise((a,c)=>{try{a(JSON.stringify(b))}catch(d){c(d)}})}function ob(b){return new Promise((a,c)=>{let d=[];for(let f in b){if(b[f].feed&&b[f].feed.title)for(var e=0;e<b[f].items.length;e++)b[f].items[e].siteName=b[f].feed.title;b[f].status==="ok"&&b[f].enabled&&(d=[...d,...b[f].items])}const g=d.sort((f,j)=>{let h=new Date(f.pubDate),i=new Date(j.pubDate);return i-h});a(g)})}function pb(b,a){return new Promise((c,d)=>{const e=[];for(let g in a)if(a[g].enabled)if(a[g].lastUpdate===void 0)e.push(a[g].url),a[g].lastUpdate=Date.now();else{let f=Math.abs(a[g].lastUpdate-b)/3.6e06;f>a[g].updateHoursInterval&&(e.push(a[g].url),a[g].lastUpdate=Date.now())}c(e)})}async function qb(b,a,c){if(!b){window.alert("You need to enter a name for the feed");return}if(!a){window.alert("You need to enter a URL for the feed");return}c||(c=12);const d=encodeURIComponent(a),e=a.replace(/[^a-zA-Z ]/g,""),g={name:b,url:d,updateHoursInterval:c,lastUpdate:0,enabled:!0},f=await q.getItem("feedData"),j=await S(f);j[e]=g;const h=await K(j);await q.setItem("feedData",h),await J()}async function rb(){const b=await q.getItem("feedData"),a=await S(b),c=document.querySelectorAll(".feed-checkbox");console.log("checkboxes",c);for(var d=0;d<c.length;d++)for(let g in a)if(c[d].getAttribute("id")===g){c[d].checked&&(a[g].enabled=!0),c[d].checked||(a[g].enabled=!1);break}const e=await K(a);await q.setItem("feedData",e),await J()}function sb(b){D(db,()=>{const a=e=>"",c=e=>{const g=tb(e.title);return p.node`${{html:g}}`},d=e=>e.content?p.node`
        <details>
          <summary class="article-title">${c(e)}<br><span class="site-name"> ${{html:e.siteName}}</span></summary>
          ${{html:e.content}}
          <p><a href=${e.guid}>Site Link</a> &#8226; <a href=${e.link}>Article Link</a></p>
        </details>
      `:e.description?p.node`
        <details>
          <summary class="article-title">${c(e)}<br><span class="site-name"> ${{html:e.siteName}}</span></summary>
          ${{html:e.description}}
          <p><a href=${e.guid}>Site Link</a> &#8226; <a href=${e.link}>Article Link</a></p>
        </details>
      `:"";return p.node`
      <div>${b.map(e=>p.node`
        <div class="feed-article">
            ${a(e)}
            ${d(e)}
        </div>
      `)}
      </div>
    `})}function tb(b){let a=b.replace(/&lt;p&gt;/g,"");return a.replace(/&lt;\/p&gt;/g,"")}function Xc(b){var a=document.createElement("div");return a.innerHTML=b,a.childNodes[0].nodeValue}function ub(b,a){D(eb,()=>{const d=(e,g)=>{if(e[g])return p.node`<input class="feed-checkbox" type="checkbox" id=${g} name=${g} value=${g} checked=${e[g].enabled}>`};return p.node`
      ${Object.keys(b).map((e,g)=>p.node`
          ${d(b,e)}
          <label for=${e}>${b[e].name}</label><br>
      `)}
      <button onclick=${c}>Submit</button>
    `});function c(){a()}}function vb(b){let a=D(fb,()=>p.node`
      RSS Feed Name: <input class="feed-name-input" type="text">
      Feed URL: <input class="feed-url-input" type="text">
      Update Every Hours: <input class="feed-hours-input" type="number">
      <button onclick=${c}>Submit</button>
    `);function c(){let d=a.querySelector(".feed-name-input").value,e=a.querySelector(".feed-url-input").value,g=a.querySelector(".feed-hours-input").value;b(d,e,g)}}function wb(b,a,c){const d=D(gb,()=>p.node`
      <div>
        <h3>Save and Load Data</h3>
        <textarea id="json-backup-data" rows="4" cols="40">
        </textarea>
        <button onclick=${g}>Get Site Data</button>&nbsp;&nbsp;&nbsp;&nbsp;<button <button onclick=${f}>Load Data</button>
      </div>

      <h3>Clear Site Data</h3>
      <button onclick=${j}>Clear All Data</button>

      <h3>Darkmode</h3>
      <button onclick=${e}>Toggle Darkmode</button>

    `);function e(){document.querySelector("body").classList.toggle("body-darkmode"),document.querySelector("header").classList.toggle("header-darkmode");const h=document.querySelectorAll(".article-title");for(var i=0;i<h.length;i++)h[i].classList.toggle("article-title-dark");const k=document.querySelectorAll(".site-name");for(var i=0;i<h.length;i++)k[i].classList.toggle("site-name-dark")}async function g(){const h={};for(let k in a)a[k].enabled&&(h[k]={name:a[k].name,url:a[k].url,updateHoursInterval:a[k].updateHoursInterval,lastUpdate:0,enabled:!0});const i=await K(h);d.querySelector("#json-backup-data").value=i}async function f(){if(window.confirm("Danger! This will overwrite any existing data and setting you have.")){const h=d.querySelector("#json-backup-data").value;await b.setItem("feedData",h),c()}}async function j(){window.confirm("Danger! Deleting data could cause you to lose all added feeds!")&&(await b.setItem("feedData",""),await b.setItem("data",""))}}}};return k$(16)})();
