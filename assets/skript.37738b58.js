var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var O=(t,e,n)=>e in t?te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))oe.call(e,n)&&O(t,n,e[n]);if(D)for(var n of D(e))ie.call(e,n)&&O(t,n,e[n]);return t},z=(t,e)=>ne(t,re(e));import"https://unpkg.com/@workadventure/scripting-api-extra@^1";class k{constructor(e){this.properties=e!=null?e:[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const M="https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";class ae{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new k(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function _(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(M+"/configuration.html"+e)}async function se(t,e){const n=await WA.room.getTiledMap(),r=new Map;return F(n.layers,r,t,e),r}function F(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const i of o.objects)if(i.type==="variable"){if(!!n&&o.name!==n||!!r&&!r.includes(i.name))continue;e.set(i.name,new ae(i))}}else o.type==="group"&&F(o.layers,e,n,r)}let G;async function L(){return G===void 0&&(G=ue()),G}async function ue(){return le(await WA.room.getTiledMap())}function le(t){const e=new Map;return H(t.layers,"",e),e}function H(t,e,n){for(const r of t)r.type==="group"?H(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}function pe(t){let e=1/0,n=1/0,r=0,o=0;const i=t.data;if(typeof i=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let u=0;u<t.width;u++)i[u+a*t.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),n=Math.min(n,a),r=Math.max(r,a));return{top:n,left:e,right:o+1,bottom:r+1}}function X(t){let e=1/0,n=1/0,r=0,o=0;for(const i of t){const a=pe(i);a.left<e&&(e=a.left),a.top<n&&(n=a.top),a.right>o&&(o=a.right),a.bottom>r&&(r=a.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ce=Object.prototype.toString,B=Array.isArray||function(e){return ce.call(e)==="[object Array]"};function R(t){return typeof t=="function"}function fe(t){return B(t)?"array":typeof t}function Z(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function j(t,e){return t!=null&&typeof t=="object"&&e in t}function de(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var he=RegExp.prototype.test;function ge(t,e){return he.call(t,e)}var ye=/\S/;function me(t){return!ge(ye,t)}var ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function be(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return ve[n]})}var we=/\s*/,Ae=/\s+/,K=/\s*=/,We=/\s*\}/,Se=/#|\^|\/|>|\{|&|=|!/;function Ce(t,e){if(!t)return[];var n=!1,r=[],o=[],i=[],a=!1,u=!1,s="",p=0;function d(){if(a&&!u)for(;i.length;)delete o[i.pop()];else i=[];a=!1,u=!1}var y,m,f;function A(W){if(typeof W=="string"&&(W=W.split(Ae,2)),!B(W)||W.length!==2)throw new Error("Invalid tags: "+W);y=new RegExp(Z(W[0])+"\\s*"),m=new RegExp("\\s*"+Z(W[1])),f=new RegExp("\\s*"+Z("}"+W[1]))}A(e||w.tags);for(var l=new P(t),c,g,b,h,E,S;!l.eos();){if(c=l.pos,b=l.scanUntil(y),b)for(var x=0,ee=b.length;x<ee;++x)h=b.charAt(x),me(h)?(i.push(o.length),s+=h):(u=!0,n=!0,s+=" "),o.push(["text",h,c,c+1]),c+=1,h===`
`&&(d(),s="",p=0,n=!1);if(!l.scan(y))break;if(a=!0,g=l.scan(Se)||"name",l.scan(we),g==="="?(b=l.scanUntil(K),l.scan(K),l.scanUntil(m)):g==="{"?(b=l.scanUntil(f),l.scan(We),l.scanUntil(m),g="&"):b=l.scanUntil(m),!l.scan(m))throw new Error("Unclosed tag at "+l.pos);if(g==">"?E=[g,b,c,l.pos,s,p,n]:E=[g,b,c,l.pos],p++,o.push(E),g==="#"||g==="^")r.push(E);else if(g==="/"){if(S=r.pop(),!S)throw new Error('Unopened section "'+b+'" at '+c);if(S[1]!==b)throw new Error('Unclosed section "'+S[1]+'" at '+c)}else g==="name"||g==="{"||g==="&"?u=!0:g==="="&&A(b)}if(d(),S=r.pop(),S)throw new Error('Unclosed section "'+S[1]+'" at '+l.pos);return ke(Be(o))}function Be(t){for(var e=[],n,r,o=0,i=t.length;o<i;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function ke(t){for(var e=[],n=e,r=[],o,i,a=0,u=t.length;a<u;++a)switch(o=t[a],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":i=r.pop(),i[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function P(t){this.string=t,this.tail=t,this.pos=0}P.prototype.eos=function(){return this.tail===""};P.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};P.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function C(t,e){this.view=t,this.cache={".":this.view},this.parent=e}C.prototype.push=function(e){return new C(e,this)};C.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,i,a,u,s=!1;o;){if(e.indexOf(".")>0)for(i=o.view,a=e.split("."),u=0;i!=null&&u<a.length;)u===a.length-1&&(s=j(i,a[u])||de(i,a[u])),i=i[a[u++]];else i=o.view[e],s=j(o.view,e);if(s){r=i;break}o=o.parent}n[e]=r}return R(r)&&(r=r.call(this.view)),r};function v(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}v.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};v.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||w.tags).join(":"),i=typeof r!="undefined",a=i?r.get(o):void 0;return a==null&&(a=Ce(e,n),i&&r.set(o,a)),a};v.prototype.render=function(e,n,r,o){var i=this.getConfigTags(o),a=this.parse(e,i),u=n instanceof C?n:new C(n,void 0);return this.renderTokens(a,u,r,e,o)};v.prototype.renderTokens=function(e,n,r,o,i){for(var a="",u,s,p,d=0,y=e.length;d<y;++d)p=void 0,u=e[d],s=u[0],s==="#"?p=this.renderSection(u,n,r,o,i):s==="^"?p=this.renderInverted(u,n,r,o,i):s===">"?p=this.renderPartial(u,n,r,i):s==="&"?p=this.unescapedValue(u,n):s==="name"?p=this.escapedValue(u,n,i):s==="text"&&(p=this.rawValue(u)),p!==void 0&&(a+=p);return a};v.prototype.renderSection=function(e,n,r,o,i){var a=this,u="",s=n.lookup(e[1]);function p(m){return a.render(m,n,r,i)}if(!!s){if(B(s))for(var d=0,y=s.length;d<y;++d)u+=this.renderTokens(e[4],n.push(s[d]),r,o,i);else if(typeof s=="object"||typeof s=="string"||typeof s=="number")u+=this.renderTokens(e[4],n.push(s),r,o,i);else if(R(s)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");s=s.call(n.view,o.slice(e[3],e[5]),p),s!=null&&(u+=s)}else u+=this.renderTokens(e[4],n,r,o,i);return u}};v.prototype.renderInverted=function(e,n,r,o,i){var a=n.lookup(e[1]);if(!a||B(a)&&a.length===0)return this.renderTokens(e[4],n,r,o,i)};v.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),i=e.split(`
`),a=0;a<i.length;a++)i[a].length&&(a>0||!r)&&(i[a]=o+i[a]);return i.join(`
`)};v.prototype.renderPartial=function(e,n,r,o){if(!!r){var i=this.getConfigTags(o),a=R(r)?r(e[1]):r[e[1]];if(a!=null){var u=e[6],s=e[5],p=e[4],d=a;s==0&&p&&(d=this.indentPartial(a,p,u));var y=this.parse(d,i);return this.renderTokens(y,n,r,d,o)}}};v.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};v.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||w.escape,i=n.lookup(e[1]);if(i!=null)return typeof i=="number"&&o===w.escape?String(i):o(i)};v.prototype.rawValue=function(e){return e[1]};v.prototype.getConfigTags=function(e){return B(e)?e:e&&typeof e=="object"?e.tags:void 0};v.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!B(e))return e.escape};var w={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){T.templateCache=t},get templateCache(){return T.templateCache}},T=new v;w.clearCache=function(){return T.clearCache()};w.parse=function(e,n){return T.parse(e,n)};w.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+fe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return T.render(e,n,r,o)};w.escape=be;w.Scanner=P;w.Context=C;w.Writer=v;class Te{constructor(e,n){this.template=e,this.state=n,this.ast=w.parse(e)}getValue(){return this.value===void 0&&(this.value=w.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=w.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],i=r[1],a=r[4];["name","&","#","^"].includes(o)&&n.add(i),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,n)}}}async function Pe(){var t;const e=await L();for(const[n,r]of e.entries()){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const i of o){if(i.type==="int"||i.type==="bool"||i.type==="object"||typeof i.value!="string")continue;const a=new Te(i.value,WA.state);if(a.isPureString())continue;const u=a.getValue();q(n,i.name,u),a.onChange(s=>{q(n,i.name,s)})}}}function q(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let I,U=0,V=0;function $(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Ee(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Q(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Me(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Q(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Y(t){return t.map(e=>I.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function Q(t){const e=Y(t),n=X(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(V-o,2))}function Le(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ee(t):Me(t),$(t)}),$(t)}function xe(t,e,n,r){const o=t.name;let i,a,u=!1;const s=n.getString("tag");let p=!0;s&&!WA.player.tags.includes(s)&&(p=!1);const d=!!s;function y(){var l;i&&i.remove(),i=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;i&&i.remove(),i=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function f(l){const c=X(Y(e.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function A(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,n.getBoolean("autoOpen")&&p){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(d&&!p||!d)&&(n.getString("code")||n.getString("codeVariable"))){f(o);return}!p||(WA.state[e.name]?y():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),i&&i.remove(),A()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),a&&WA.state[e.name]===!0&&A(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ge(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-U,2)+Math.pow(t.y-V,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Ze(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ge(t)})}function Ie(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var i;o?r=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Re(t){t=t!=null?t:M;const e=await se();I=await L();for(const n of e.values())n.properties.get("door")&&Le(n),n.properties.get("bell")&&Ze(n);for(const n of I.values()){const r=new k(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');xe(n,a,r,t)}const i=r.getString("bellVariable");i&&Ie(i,r,n.name)}WA.player.onPlayerMove(n=>{U=n.x,V=n.y})}function Ue(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),i=t.getString("triggerMessage"),a=t.getString("tag");Ve(n,e,r,o,i,a)}}function Ve(t,e,n,r,o,i){i&&!WA.player.tags.includes(i)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function De(){const t=await L();for(const e of t.values()){const n=new k(e.properties);Ue(n,e.name)}}let J;async function Oe(t){const e=await WA.room.getTiledMap();t=t!=null?t:M,J=await L();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new k(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const i of J.values()){const a=new k(i.properties),u=a.getString("openConfig");u&&i.type==="tilelayer"&&Ne(u.split(","),i.name,a)}}}function Ne(t,e,n){let r;const o=n.getString("openConfigAdminTag");let i=!0;o&&!WA.player.tags.includes(o)&&(i=!1);function a(){var s;r&&r.remove(),r=WA.ui.displayActionMessage({message:(s=n.getString("openConfigTriggerMessage"))!==null&&s!==void 0?s:"Press SPACE or touch here to configure",callback:()=>_(t)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const s=n.getString("openConfigTrigger");i&&(s&&s==="onaction"?a():_(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const ze=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],_e=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function je(){var t;const e=WA.player.state.tutorialDone,n=/Mobi|Android/i.test(navigator.userAgent),o=await((t=(await WA.room.getTiledMap()).properties)===null||t===void 0?void 0:t.find(a=>a.name==="tutorial")),i=o&&o.value;if(!e&&i){Ke(n);let a=await WA.player.getPosition(),u;const s=await WA.room.website.get("tutorial"),p=()=>{const A=a.x+s.x+s.width>u.x+u.width,l=a.x+s.x<u.x,c=a.y+s.y+s.height>u.y+u.height,g=a.y+s.y<u.y;A?s.x=-s.width-1.5*16:l&&(s.x=1.5*16),c?s.y=-s.height:g&&(s.y=16)},d=f=>{s.width=f.width,s.height=f.height,s.scale=f.scale},y=f=>{const l=(n?ze:_e).filter(c=>{if(c.lowerBound&&c.uppperBound)return c.lowerBound<f&&f<=c.uppperBound;if(c.lowerBound&&!c.uppperBound)return c.lowerBound<f;if(!c.lowerBound&&c.uppperBound)return f<=c.uppperBound;throw new Error(`Zoom level of: ${f} could not fit in any of the desktopConfig's ranges.`)});d(l[0].config)},m=()=>{if(u===void 0)return;const f=u.zoom;y(f),p()};WA.player.onPlayerMove(f=>{a=f,m()}),WA.camera.onCameraUpdate().subscribe(f=>{u=f,m()}),WA.player.state.tutorialDone=!0}}function Ke(t){let e={allow:"",name:"tutorial",url:M+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};t&&(e=z(N({},e),{position:{x:32,y:-225,height:390,width:250},scale:1})),WA.room.website.create(e)}function qe(){return WA.onInit().then(()=>{Re().catch(t=>console.error(t)),De().catch(t=>console.error(t)),Oe().catch(t=>console.error(t)),Pe().catch(t=>console.error(t)),je().catch(t=>console.error(t))}).catch(t=>console.error(t))}qe().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t));WA.onInit(async()=>{var t=void 0,e=!1,n="https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";function r(){t!==void 0&&(t.close(),t=void 0)}var o="evs-info",i="intro",a="tutorial",u="tutorial1",s="tutorial2",p="guide",d="guide1",y="guide2",m="pong",f="mailto:DB.Systel.CommunicationServices.EVS@deutschebahn.com",A="Du hast eine Frage zu WorkAdventure, aber wir sind gerade nicht da? Schreib uns!",l=`Willkommen bei unserer WorkAdventure Worldtour!

Zur Bewegung deines Avatar nutze einfach die Pfeiltasten der Tastatur!
F\xFCr weitere Infos besuche unser Tutorial oder unseren WorkAdventure-Stand!
Nutze die Chance und gehe auf Entdeckungstour durch unser 16-Bit Universum,
um M\xF6glichkeiten f\xFCr spontanen Austausch,
Interaktion und Zusammenarbeiten kennenzulernen.
Vielleicht findet sich bei unserer virtuellen Besichtigungstour sogar der perfekten Ort des zuk\xFCnftiges Wunschb\xFCros oder eine digitale Eventlocation.

Wir w\xFCnschen viel Spa\xDF!`,c=`Wegweiser

Hauptbahnhof (Norden): Stiller Bereich
Dicker Bulle (Nordwesten): Worms
Green Pub (Nordosten): Pong
Marktstand (Zentral): Treffpunkt
Cocktailbar (S\xFCdwesten): Treffpunkt & Cocktails
Dancehall (S\xFCdosten): Musik
Silberturm (S\xFCden): Minir\xE4tsel &
Workadventure@DB Infostand`,g="M\xF6chten Sie sich das Tutorial ansehen?",b=`Pong gegeneinander?

1.W\xE4hlen Sie Online-Mehrspielermodus
2.W\xE4hlen Sie 'Beil\xE4ufig'
3.Geben Sie eine Zimmernummer ein und klicken Sie auf 'Zimmer \xE4ndern'
4. Teilen Sie die Zimmernummer Ihrem Partner mit

Die Steuerung funktioniert mit den Pfeiltasten.`;WA.room.onEnterZone(i,()=>{t=WA.ui.openPopup("popUpIntro",l,[{label:`Weltreise
starten!`,callback:h=>{r()}},{label:"Tutorial",className:"primary",callback:h=>{WA.openTab(n),e=!0,r()}}]),WA.onInit().then(async()=>{var h=await WA.player.getPosition();WA.camera.set(h.x,h.y,2240,400,!1,!1)})}),WA.room.onLeaveZone(i,()=>{r()}),WA.room.onEnterZone(o,()=>{t=WA.ui.openPopup("popUpEVS",A,[{label:"Schlie\xDFen",callback:h=>{e=!1,r()}},{label:"\u{1F4E7} Team EVS \u{1F4E7}",className:"primary",callback:h=>{WA.nav.openTab(f),e=!0,r()}}])}),WA.room.onLeaveZone(o,()=>{r()}),WA.room.onEnterZone(a,()=>{t=WA.ui.openPopup("popUpTutorial",g,[{label:"Nein",callback:h=>{e=!1,r()}},{label:"Ja",callback:h=>{WA.openTab(n),e=!0,r()}}])}),WA.room.onEnterZone(u,()=>{t=WA.ui.openPopup("popUpTutorial1",g,[{label:"Nein",callback:h=>{e=!1,r()}},{label:"Ja",callback:h=>{WA.openTab(n),e=!0,r()}}])}),WA.room.onEnterZone(s,()=>{t=WA.ui.openPopup("popUpTutorial2",g,[{label:"Nein",callback:h=>{e=!1,r()}},{label:"Ja",callback:h=>{WA.openTab(n),e=!0,r()}}])}),WA.room.onLeaveZone(a,()=>{r(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onLeaveZone(u,()=>{r(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onLeaveZone(s,()=>{r(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onEnterZone(m,()=>{t=WA.ui.openPopup("popUpPong",b,[{label:"OK",callback:h=>{r()}}])}),WA.room.onLeaveZone(m,()=>{r()}),WA.room.onEnterZone(p,()=>{t=WA.ui.openPopup("popUpGuide",c,[{label:"OK",callback:h=>{r()}}])}),WA.room.onEnterZone(d,()=>{t=WA.ui.openPopup("popUpGuide1",c,[{label:"OK",callback:h=>{r()}}])}),WA.room.onEnterZone(y,()=>{t=WA.ui.openPopup("popUpGuide2",c,[{label:"OK",callback:h=>{r()}}])}),WA.room.onLeaveZone(p,()=>{r()}),WA.room.onLeaveZone(d,()=>{r()}),WA.room.onLeaveZone(y,()=>{r()})});