import"https://unpkg.com/@workadventure/scripting-api-extra@^1";/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var F=Object.prototype.toString,W=Array.isArray||function(e){return F.call(e)==="[object Array]"};function z(n){return typeof n=="function"}function M(n){return W(n)?"array":typeof n}function A(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function N(n,e){return n!=null&&typeof n=="object"&&e in n}function q(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var B=RegExp.prototype.test;function x(n,e){return B.call(n,e)}var J=/\S/;function Z(n){return!x(J,n)}var $={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function G(n){return String(n).replace(/[&<>"'`=\/]/g,function(r){return $[r]})}var Q=/\s*/,V=/\s+/,j=/\s*=/,X=/\s*\}/,Y=/#|\^|\/|>|\{|&|=|!/;function ee(n,e){if(!n)return[];var r=!1,t=[],a=[],s=[],i=!1,o=!1,u="",l=0;function f(){if(i&&!o)for(;s.length;)delete a[s.pop()];else s=[];i=!1,o=!1}var g,w,O;function K(y){if(typeof y=="string"&&(y=y.split(V,2)),!W(y)||y.length!==2)throw new Error("Invalid tags: "+y);g=new RegExp(A(y[0])+"\\s*"),w=new RegExp("\\s*"+A(y[1])),O=new RegExp("\\s*"+A("}"+y[1]))}K(e||v.tags);for(var p=new S(n),b,h,d,C,T,k;!p.eos();){if(b=p.pos,d=p.scanUntil(g),d)for(var I=0,D=d.length;I<D;++I)C=d.charAt(I),Z(C)?(s.push(a.length),u+=C):(o=!0,r=!0,u+=" "),a.push(["text",C,b,b+1]),b+=1,C===`
`&&(f(),u="",l=0,r=!1);if(!p.scan(g))break;if(i=!0,h=p.scan(Y)||"name",p.scan(Q),h==="="?(d=p.scanUntil(j),p.scan(j),p.scanUntil(w)):h==="{"?(d=p.scanUntil(O),p.scan(X),p.scanUntil(w),h="&"):d=p.scanUntil(w),!p.scan(w))throw new Error("Unclosed tag at "+p.pos);if(h==">"?T=[h,d,b,p.pos,u,l,r]:T=[h,d,b,p.pos],l++,a.push(T),h==="#"||h==="^")t.push(T);else if(h==="/"){if(k=t.pop(),!k)throw new Error('Unopened section "'+d+'" at '+b);if(k[1]!==d)throw new Error('Unclosed section "'+k[1]+'" at '+b)}else h==="name"||h==="{"||h==="&"?o=!0:h==="="&&K(d)}if(f(),k=t.pop(),k)throw new Error('Unclosed section "'+k[1]+'" at '+p.pos);return ne(re(a))}function re(n){for(var e=[],r,t,a=0,s=n.length;a<s;++a)r=n[a],r&&(r[0]==="text"&&t&&t[0]==="text"?(t[1]+=r[1],t[3]=r[3]):(e.push(r),t=r));return e}function ne(n){for(var e=[],r=e,t=[],a,s,i=0,o=n.length;i<o;++i)switch(a=n[i],a[0]){case"#":case"^":r.push(a),t.push(a),r=a[4]=[];break;case"/":s=t.pop(),s[5]=a[2],r=t.length>0?t[t.length-1][4]:e;break;default:r.push(a)}return e}function S(n){this.string=n,this.tail=n,this.pos=0}S.prototype.eos=function(){return this.tail===""};S.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var t=r[0];return this.tail=this.tail.substring(t.length),this.pos+=t.length,t};S.prototype.scanUntil=function(e){var r=this.tail.search(e),t;switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t};function E(n,e){this.view=n,this.cache={".":this.view},this.parent=e}E.prototype.push=function(e){return new E(e,this)};E.prototype.lookup=function(e){var r=this.cache,t;if(r.hasOwnProperty(e))t=r[e];else{for(var a=this,s,i,o,u=!1;a;){if(e.indexOf(".")>0)for(s=a.view,i=e.split("."),o=0;s!=null&&o<i.length;)o===i.length-1&&(u=N(s,i[o])||q(s,i[o])),s=s[i[o++]];else s=a.view[e],u=N(a.view,e);if(u){t=s;break}a=a.parent}r[e]=t}return z(t)&&(t=t.call(this.view)),t};function c(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}c.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};c.prototype.parse=function(e,r){var t=this.templateCache,a=e+":"+(r||v.tags).join(":"),s=typeof t!="undefined",i=s?t.get(a):void 0;return i==null&&(i=ee(e,r),s&&t.set(a,i)),i};c.prototype.render=function(e,r,t,a){var s=this.getConfigTags(a),i=this.parse(e,s),o=r instanceof E?r:new E(r,void 0);return this.renderTokens(i,o,t,e,a)};c.prototype.renderTokens=function(e,r,t,a,s){for(var i="",o,u,l,f=0,g=e.length;f<g;++f)l=void 0,o=e[f],u=o[0],u==="#"?l=this.renderSection(o,r,t,a,s):u==="^"?l=this.renderInverted(o,r,t,a,s):u===">"?l=this.renderPartial(o,r,t,s):u==="&"?l=this.unescapedValue(o,r):u==="name"?l=this.escapedValue(o,r,s):u==="text"&&(l=this.rawValue(o)),l!==void 0&&(i+=l);return i};c.prototype.renderSection=function(e,r,t,a,s){var i=this,o="",u=r.lookup(e[1]);function l(w){return i.render(w,r,t,s)}if(!!u){if(W(u))for(var f=0,g=u.length;f<g;++f)o+=this.renderTokens(e[4],r.push(u[f]),t,a,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")o+=this.renderTokens(e[4],r.push(u),t,a,s);else if(z(u)){if(typeof a!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(r.view,a.slice(e[3],e[5]),l),u!=null&&(o+=u)}else o+=this.renderTokens(e[4],r,t,a,s);return o}};c.prototype.renderInverted=function(e,r,t,a,s){var i=r.lookup(e[1]);if(!i||W(i)&&i.length===0)return this.renderTokens(e[4],r,t,a,s)};c.prototype.indentPartial=function(e,r,t){for(var a=r.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!t)&&(s[i]=a+s[i]);return s.join(`
`)};c.prototype.renderPartial=function(e,r,t,a){if(!!t){var s=this.getConfigTags(a),i=z(t)?t(e[1]):t[e[1]];if(i!=null){var o=e[6],u=e[5],l=e[4],f=i;u==0&&l&&(f=this.indentPartial(i,l,o));var g=this.parse(f,s);return this.renderTokens(g,r,t,f,a)}}};c.prototype.unescapedValue=function(e,r){var t=r.lookup(e[1]);if(t!=null)return t};c.prototype.escapedValue=function(e,r,t){var a=this.getConfigEscape(t)||v.escape,s=r.lookup(e[1]);if(s!=null)return typeof s=="number"&&a===v.escape?String(s):a(s)};c.prototype.rawValue=function(e){return e[1]};c.prototype.getConfigTags=function(e){return W(e)?e:e&&typeof e=="object"?e.tags:void 0};c.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!W(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){m.templateCache=n},get templateCache(){return m.templateCache}},m=new c;v.clearCache=function(){return m.clearCache()};v.parse=function(e,r){return m.parse(e,r)};v.render=function(e,r,t,a){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+M(e)+'" was given as the first argument for mustache#render(template, view, partials)');return m.render(e,r,t,a)};v.escape=G;v.Scanner=S;v.Context=E;v.Writer=c;var P=void 0,R=!1,te="https://de.wikipedia.org/wiki/Hofzug",ae="https://de.wikipedia.org/wiki/Nikolaus_II._(Russland)";function U(){P!==void 0&&(P.close(),P=void 0)}var H="bild1",L="fireplaceInfo",se="popUpEmperorWilhelm",ie="popUpFireplace",_="OK",oe="Mehr zum Hofzug",ue="Mehr zu Zar Nikolaus II.",le="Wilhelm II. von Preu\xDFen (* 27. Januar 1859 in Berlin; \u2020 4. Juni 1941 in Doorn, Niederlande), aus dem Haus Hohenzollern war von 1888 bis 1918 letzter Deutscher Kaiser und K\xF6nig von Preu\xDFen.",pe="Wusstest du, das dieser Kamin im Kaisersaal des Kaiserbahnhofs in Potsdam zu finden ist. Wenn du das n\xE4chste Mal dort bist, wirf doch einmal einen Blick darauf. Der Kamin ist ein Nachbau. Der urspr\xFCngliche Kamin war ein Gastgeschenk des Zar Nikolaus II., der 1910 mit einem Hofzug an der Station empfangen wurde.";WA.room.onEnterLayer(L).subscribe(()=>{P=WA.ui.openPopup(ie,pe,[{label:_,callback:n=>{U()}},{label:oe,callback:n=>{WA.nav.openTab(te),R=!0}},{label:ue,callback:n=>{WA.nav.openTab(ae),R=!0}}])});WA.room.onLeaveLayer(L).subscribe(()=>{U(),R&&(WA.nav.closeCoWebSites(),R=!1)});WA.room.onEnterLayer(H).subscribe(()=>{P=WA.ui.openPopup(se,le,[{label:_,callback:n=>{U()}}])});WA.room.onLeaveLayer(H).subscribe(()=>{U()});
