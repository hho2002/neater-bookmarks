var CodeMirror=function(){function G(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;c<d;++c)if(a[c]==b)return c;return-1}function F(a,b){if(!b)return a?a.length:0;if(!a)return b.length;for(var c=a.length,d=b.length;c>=0&&d>=0;--c,--d)if(a.charAt(c)!=b.charAt(d))break;return d+1}function E(a){return a.replace(/[<>&]/g,function(a){return a=="&"?"&amp;":a=="<"?"&lt;":"&gt;"})}function D(a){return{line:a.line,ch:a.ch}}function C(a,b){return a.line<b.line||a.line==b.line&&a.ch<b.ch}function B(a,b){return a.line==b.line&&a.ch==b.ch}function A(a){return a.textContent||a.innerText||a.nodeValue||""}function z(a,b){var c=a.ownerDocument.body,d=0,e=0,f=!1;for(var g=a;g;g=g.offsetParent)d+=g.offsetLeft,e+=g.offsetTop,g==c&&(f=!0);var h=b&&f?null:c;for(var g=a.parentNode;g!=h;g=g.parentNode)g.scrollLeft!=null&&(d-=g.scrollLeft,e-=g.scrollTop);return{left:d,top:e}}function y(a,b){b==null&&(b=a.search(/[^\s\u00a0]/),b==-1&&(b=a.length));for(var c=0,d=0;c<b;++c)a.charAt(c)=="\t"?d+=u-d%u:++d;return d}function o(){this.id=null}function n(a,b,c,d){function e(a){c(new m(a||window.event))}if(typeof a.addEventListener=="function"){a.addEventListener(b,e,!1);if(d)return function(){a.removeEventListener(b,e,!1)}}else{a.attachEvent("on"+b,e);if(d)return function(){a.detachEvent("on"+b,e)}}}function m(a){this.e=a}function l(a){a.stop||(a.stop=k);return a}function k(){this.preventDefault?(this.preventDefault(),this.stopPropagation()):(this.returnValue=!1,this.cancelBubble=!0)}function j(){this.time=0,this.done=[],this.undone=[]}function i(a,b,c,d){for(var e=0,f=0,g=0;f<b;e+=2){var h=c[e],i=f+h.length;g==0?(i>a&&d.push(h.slice(a-f,Math.min(h.length,b-f)),c[e+1]),i>=a&&(g=1)):g==1&&(i>b?d.push(h.slice(0,b-f),c[e+1]):d.push(h,c[e+1])),f=i}}function h(a,b){this.styles=b||[a,null],this.stateAfter=null,this.text=a,this.marked=this.gutterMarker=this.className=null}function g(a){this.pos=this.start=0,this.string=a}function f(a,b,c){return a.startState?a.startState(b,c):!0}function e(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var c={};for(var d in b){var e=b[d];e instanceof Array&&(e=e.concat([])),c[d]=e}return c}function a(b,c){function cO(a,b,c){this.atOccurrence=!1,c==null&&(c=typeof a=="string"&&a==a.toLowerCase()),b&&typeof b=="object"?b=cc(b):b={line:0,ch:0},this.pos={from:b,to:b};if(typeof a!="string")this.matches=function(b,c){if(b){var d=W[c.line].text.slice(0,c.ch),e=d.match(a),f=0;while(e){var g=d.indexOf(e[0]);f+=g,d=d.slice(g+1);var h=d.match(a);if(h)e=h;else break;f++}}else var d=W[c.line].text.slice(c.ch),e=d.match(a),f=e&&c.ch+d.indexOf(e[0]);if(e)return{from:{line:c.line,ch:f},to:{line:c.line,ch:f+e[0].length},match:e}};else{c&&(a=a.toLowerCase());var d=c?function(a){return a.toLowerCase()}:function(a){return a},e=a.split("\n");e.length==1?this.matches=function(b,c){var e=d(W[c.line].text),f=a.length,g;if(b?c.ch>=f&&(g=e.lastIndexOf(a,c.ch-f))!=-1:(g=e.indexOf(a,c.ch))!=-1)return{from:{line:c.line,ch:g},to:{line:c.line,ch:g+f}}}:this.matches=function(a,b){var c=b.line,f=a?e.length-1:0,g=e[f],h=d(W[c].text),i=a?h.indexOf(g)+g.length:h.lastIndexOf(g);if(!(a?i>=b.ch||i!=g.length:i<=b.ch||i!=h.length-g.length))for(;;){if(a?!c:c==W.length-1)return;h=d(W[c+=a?-1:1].text),g=e[a?--f:++f];if(f>0&&f<e.length-1){if(h!=g)return;continue}var j=a?h.lastIndexOf(g):h.indexOf(g)+g.length;if(a?j!=h.length-g.length:j!=g.length)return;var k={line:b.line,ch:i},l={line:c,ch:j};return{from:a?l:k,to:a?k:l}}}}}function cN(a){return function(){cM++||cK();try{var b=a.apply(this,arguments)}finally{--cM||cL()}return b}}function cL(){var a=!1;bf&&(a=!bS()),bd.length?bV(bd):bf&&bZ(),a&&bS(),bf&&cC(),!bg&&(bc===!0||bc!==!1&&bf)&&bQ(),bf&&g.matchBrackets&&setTimeout(cN(function(){bm&&(bm(),bm=null),cE(!1)}),20);var b=be;bf&&g.onCursorActivity&&g.onCursorActivity(br),b&&g.onChange&&br&&g.onChange(br,b)}function cK(){bc=null,bd=[],be=bf=!1}function cJ(a){!X.length||T.set(a,cN(cI))}function cI(){var a=+(new Date)+g.workTime,b=X.length;while(X.length){if(!W[bh].stateAfter)var c=bh;else var c=X.pop();if(c>=W.length)continue;var d=cF(c),h=d&&W[d-1].stateAfter;h?h=e(V,h):h=f(V);var i=0;for(var j=d,k=W.length;j<k;++j){var l=W[j],m=l.stateAfter;if(+(new Date)>a){X.push(j),cJ(g.workDelay),bd.push({from:c,to:j});return}var n=l.highlight(V,h);l.stateAfter=e(V,h);if(n||!m)i=0;else if(++i>3)break}bd.push({from:c,to:j})}b&&g.onHighlightComplete&&g.onHighlightComplete(br)}function cH(a,b){var c=cG(a);for(var d=a;d<b;++d){var f=W[d];f.highlight(V,c),f.stateAfter=e(V,c)}}function cG(a){var b=cF(a),c=b&&W[b-1].stateAfter;c?c=e(V,c):c=f(V);for(var d=b;d<a;++d){var g=W[d];g.highlight(V,c),g.stateAfter=e(V,c)}W[a].stateAfter||X.push(a);return c}function cF(a){var b,c;for(var d=a,e=a-40;d>e;--d){if(d==0)return 0;var f=W[d-1];if(f.stateAfter)return d;var g=f.indentation();if(c==null||b>g)c=d,b=g}return c}function cE(a){function p(a,b,c){if(!!a.text){var d=a.styles,e=g?0:a.text.length-1,f;for(var i=g?0:d.length-2,j=g?d.length:-2;i!=j;i+=2*h){var k=d[i];if(d[i+1]!=null&&d[i+1]!=m){e+=h*k.length;continue}for(var l=g?0:k.length-1,p=g?k.length:-1;l!=p;l+=h,e+=h)if(e>=b&&e<c&&o.test(f=k.charAt(l))){var q=cD[f];if(q.charAt(1)==">"==g)n.push(f);else{if(n.pop()!=q.charAt(0))return{pos:e,match:!1};if(!n.length)return{pos:e,match:!0}}}}}}var b=$.inverted?$.from:$.to,c=W[b.line],d=b.ch-1,e=d>=0&&cD[c.text.charAt(d)]||cD[c.text.charAt(++d)];if(!!e){var f=e.charAt(0),g=e.charAt(1)==">",h=g?1:-1,i=c.styles;for(var j=d+1,k=0,l=i.length;k<l;k+=2)if((j-=i[k].length)<=0){var m=i[k+1];break}var n=[c.text.charAt(d)],o=/[(){}[\]]/;for(var k=b.line,l=g?Math.min(k+50,W.length):Math.max(-1,k-50);k!=l;k+=h){var c=W[k],q=k==b.line,r=p(c,q&&g?d+1:0,q&&!g?d:c.text.length);if(r){var m=r.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket",s=cn({line:b.line,ch:d},{line:b.line,ch:d+1},m),t=cn({line:k,ch:r.pos},{line:k,ch:r.pos+1},m),u=cN(function(){s(),t()});a?setTimeout(u,800):bm=u;break}}}}function cC(){clearInterval(U);var a=!0;Q.style.visibility="",U=setInterval(function(){Q.style.visibility=(a=!a)?"":"hidden"},650)}function cB(a){function e(){y.value!=d&&cN(bI)(y.value,"end"),y.style.cssText=c,bg=!1,bQ(),bN()}var b=cA(a);if(!!b&&!window.opera){(B($.from,$.to)||C(b,$.from)||!C(b,$.to))&&ca(b.line,b.ch);var c=y.style.cssText;y.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(a.pageY()-1)+"px; left: "+(a.pageX()-1)+"px; z-index: 1000; background: white; "+"border-width: 0; outline: none; overflow: hidden; opacity: .05;";var d=y.value=bL();bR(),J(y,0,y.value.length),bg=!0;if(q){a.stop();var f=n(window,"mouseup",function(){f(),setTimeout(e,20)},!0)}else setTimeout(e,50)}}function cA(a,b){var c=z(E,!0),d=a.e.clientX,e=a.e.clientY;if(!b&&(d-c.left>E.clientWidth||e-c.top>E.clientHeight))return null;var f=z(P,!0),g=bh+Math.floor((e-f.top)/cx());return cc({line:g,ch:cu(cb(g),d-f.left)})}function cz(){return P.offsetLeft}function cy(){return P.offsetTop}function cx(){var a=R.childNodes.length;if(a)return R.offsetHeight/a||1;L.innerHTML="<pre>x</pre>";return L.firstChild.offsetHeight||1}function cw(a){var b=cv(a,!0),c=z(P);return{x:c.left+b.x,y:c.top+b.y,yBot:c.top+b.yBot}}function cv(a,b){var c=cx(),d=a.line-(b?bh:0);return{x:ct(a.line,a.ch),y:d*c,yBot:(d+1)*c}}function cu(a,b){function e(a){L.innerHTML="<pre><span>"+c.getHTML(null,null,!1,a)+"</span></pre>";return L.firstChild.firstChild.offsetWidth}if(b<=0)return 0;var c=W[a],d=c.text,f=0,g=0,h=d.length,i,j=Math.min(h,Math.ceil(b/cs("x")));for(;;){var k=e(j);if(k<=b&&j<h)j=Math.min(h,Math.ceil(j*1.2));else{i=k,h=j;break}}if(b>i)return h;j=Math.floor(h*.8),k=e(j),k<b&&(f=j,g=k);for(;;){if(h-f<=1)return i-b>b-g?f:h;var l=Math.ceil((f+h)/2),m=e(l);m>b?(h=l,i=m):(f=l,g=m)}}function ct(a,b){if(b==0)return 0;L.innerHTML="<pre><span>"+W[a].getHTML(null,null,!1,b)+"</span></pre>";return L.firstChild.firstChild.offsetWidth}function cs(a){L.innerHTML="<pre><span>x</span></pre>",L.firstChild.firstChild.firstChild.nodeValue=a;return L.firstChild.firstChild.offsetWidth||10}function cr(a){if(typeof a=="number"){var b=a;a=W[a];if(!a)return null}else{var b=G(W,a);if(b==-1)return null}var c=a.gutterMarker;return{line:b,text:a.text,markerText:c&&c.text,markerClass:c&&c.style}}function cq(a,b){if(typeof a=="number"){var c=a;a=W[cb(a)]}else{var c=G(W,a);if(c==-1)return null}a.className!=b&&(a.className=b,bd.push({from:c,to:c+1}));return a}function cp(a){typeof a=="number"&&(a=W[cb(a)]),a.gutterMarker=null,bY()}function co(a,b,c){typeof a=="number"&&(a=W[cb(a)]),a.gutterMarker={text:b,style:c},bY();return a}function cn(a,b,c){function e(a,b,c,e){var a=W[a],f=a.addMark(b,c,e);f.line=a,d.push(f)}a=cc(a),b=cc(b);var d=[];if(a.line==b.line)e(a.line,a.ch,b.ch,c);else{e(a.line,a.ch,null,c);for(var f=a.line+1,g=b.line;f<g;++f)e(f,0,null,c);e(b.line,0,b.ch,c)}bd.push({from:a.line,to:b.line+1});return function(){var a,b;for(var c=0;c<d.length;++c){var e=d[c],f=G(W,e.line);e.line.removeMark(e),f>-1&&(a==null&&(a=f),b=f)}a!=null&&bd.push({from:a,to:b+1})}}function cm(){var a=g.gutter||g.lineNumbers;N.style.display=a?"":"none",a?bY():R.parentNode.style.marginLeft=0}function cl(){V=a.getMode(g,g.mode);for(var b=0,c=W.length;b<c;++b)W[b].stateAfter=null;X=[0],cJ()}function ck(a,b){if(b=="smart")if(!V.indent)b="prev";else var c=cG(a);var d=W[a],e=d.indentation(),f=d.text.match(/^\s*/)[0],h;b=="prev"?a?h=W[a-1].indentation():h=0:b=="smart"?h=V.indent(c,d.text.slice(f.length)):b=="add"?h=e+g.indentUnit:b=="subtract"&&(h=e-g.indentUnit),h=Math.max(0,h);var i=h-e;if(!i){if($.from.line!=a&&$.to.line!=a)return;var j=f}else{var j="",k=0;if(g.indentWithTabs)for(var l=Math.floor(h/u);l;--l)k+=u,j+="\t";while(k<h)++k,j+=" "}bH(j,{line:a,ch:0},{line:a,ch:f.length})}function cj(a){_=null;switch(g.tabMode){case"default":return!1;case"indent":for(var b=$.from.line,c=$.to.line;b<=c;++b)ck(b,"smart");break;case"classic":if(B($.from,$.to)){a?ck($.from.line,"smart"):bI("\t","end");break};case"shift":for(var b=$.from.line,c=$.to.line;b<=c;++b)ck(b,a?"subtract":"add")}return!0}function ci(){bI("\n","end"),g.enterMode!="flat"&&ck($.from.line,g.enterMode=="keep"?"prev":"smart")}function ch(a){b$({line:a,ch:0},{line:a,ch:W[a].text.length})}function cg(a){var b=W[a.line].text,c=a.ch,d=a.ch;while(c>0&&/\w/.test(b.charAt(c-1)))--c;while(d<b.length&&/\w/.test(b.charAt(d)))++d;b$({line:a.line,ch:c},{line:a.line,ch:d})}function cf(){var a=W.length-1;b_({line:0,ch:0},{line:a,ch:W[a].text.length})}function ce(a){var b=a?{line:0,ch:0}:{line:W.length-1,ch:W[W.length-1].text.length};b$(b,b)}function cd(a){var b=Math.floor(E.clientHeight/cx()),c=$.inverted?$.from:$.to;ca(c.line+Math.max(b-1,1)*(a?1:-1),c.ch,!0)}function cc(a){if(a.line<0)return{line:0,ch:0};if(a.line>=W.length)return{line:W.length-1,ch:W[W.length-1].text.length};var b=a.ch,c=W[a.line].text.length;return b==null||b>c?{line:a.line,ch:c}:b<0?{line:a.line,ch:0}:a}function cb(a){return Math.max(0,Math.min(a,W.length-1))}function ca(a,b,c){var d=cc({line:a,ch:b||0});(c?b$:b_)(d,d)}function b_(a,b,c,d){if(!B($.from,a)||!B($.to,b)){if(C(b,a)){var e=b;b=a,a=e}B(a,b)?$.inverted=!1:B(a,$.to)?$.inverted=!1:B(b,$.from)&&($.inverted=!0),c==null&&(c=$.from.line,d=$.to.line),B(a,b)?B($.from,$.to)||bd.push({from:c,to:d+1}):B($.from,$.to)?bd.push({from:a.line,to:b.line+1}):(B(a,$.from)||(a.line<c?bd.push({from:a.line,to:Math.min(b.line,c)+1}):bd.push({from:c,to:Math.min(d,a.line)+1})),B(b,$.to)||(b.line<d?bd.push({from:Math.max(c,a.line),to:d+1}):bd.push({from:Math.max(a.line,d),to:b.line+1}))),$.from=a,$.to=b,bf=!0}}function b$(a,b){var c=_&&cc(_);c&&(C(c,a)?a=c:C(b,c)&&(b=c)),b_(a,b)}function bZ(){var a=$.inverted?$.from:$.to,b=cx(),c=ct(a.line,a.ch)+"px",d=(a.line-bh)*b+"px";x.style.top=a.line*b-E.scrollTop+"px",B($.from,$.to)?(Q.style.top=d,Q.style.left=c,Q.style.display=""):Q.style.display="none"}function bY(){if(!!g.gutter||!!g.lineNumbers){var a=M.offsetHeight,b=E.clientHeight;N.style.height=(a-b<2?b:a)+"px";var c=[];for(var d=bh;d<Math.max(bi,bh+1);++d){var e=W[d].gutterMarker,f=g.lineNumbers?d+g.firstLineNumber:null;e&&e.text?f=e.text.replace("%N%",f!=null?f:""):f==null&&(f="\u00a0"),c.push(e&&e.style?'<pre class="'+e.style+'">':"<pre>",f,"</pre>")}N.style.display="none",O.innerHTML=c.join("");var h=String(W.length).length,i=O.firstChild,j=A(i),k="";while(j.length+k.length<h)k+="\u00a0";k&&i.insertBefore(m.createTextNode(k),i.firstChild),N.style.display="",P.style.marginLeft=N.offsetWidth+"px"}}function bX(a){var b=$.from.line,c=$.to.line,d=0,e=p&&m.createElement("div");for(var f=0,g=a.length;f<g;++f){var h=a[f],i=h.to-h.from-h.domSize,j=R.childNodes[h.domStart+h.domSize+d]||null;if(p)for(var k=Math.max(-i,h.domSize);k>0;--k)R.removeChild(j?j.previousSibling:R.lastChild);else if(i){for(var k=Math.max(0,i);k>0;--k)R.insertBefore(m.createElement("pre"),j);for(var k=Math.max(0,-i);k>0;--k)R.removeChild(j?j.previousSibling:R.lastChild)}var l=R.childNodes[h.domStart+d],n=b<h.from&&c>=h.from;for(var k=h.from;k<h.to;++k){var o=null,q=null;n?(o=0,c==k&&(n=!1,q=$.to.ch)):b==k&&(c==k?(o=$.from.ch,q=$.to.ch):(n=!0,o=$.from.ch)),p?(e.innerHTML=W[k].getHTML(o,q,!0),R.insertBefore(e.firstChild,j)):(l.innerHTML=W[k].getHTML(o,q,!1),l.className=W[k].className||"",l=l.nextSibling)}d+=i}}function bW(a,b){var c=[],d={line:a,ch:0},e=C($.from,d)&&!C($.to,d);for(var f=a;f<b;++f){var g=null,h=null;e?(g=0,$.to.line==f&&(e=!1,h=$.to.ch)):$.from.line==f&&($.to.line==f?(g=$.from.ch,h=$.to.ch):(e=!0,g=$.from.ch)),c.push(W[f].getHTML(g,h,!0))}R.innerHTML=c.join("")}function bV(a){if(!E.clientWidth)bh=bi=0;else{var b=a===!0?[]:[{from:bh,to:bi,domStart:0}];for(var c=0,d=a.length||0;c<d;++c){var e=a[c],f=[],g=e.diff||0;for(var h=0,i=b.length;h<i;++h){var j=b[h];e.to<=j.from?f.push({from:j.from+g,to:j.to+g,domStart:j.domStart}):j.to<=e.from?f.push(j):(e.from>j.from&&f.push({from:j.from,to:e.from,domStart:j.domStart}),e.to<j.to&&f.push({from:e.to+g,to:j.to+g,domStart:j.domStart+(e.to-j.from)}))}b=f}var k=bU(),l=Math.min(bh,Math.max(k.from-3,0)),m=Math.min(W.length,Math.max(bi,k.to+3)),n=[],o=0,p=bi-bh,q=l,r=0;for(var c=0,d=b.length;c<d;++c){var j=b[c];if(j.to<=l)continue;if(j.from>=m)break;if(j.domStart>o||j.from>q)n.push({from:q,to:j.from,domSize:j.domStart-o,domStart:o}),r+=j.from-q;q=j.to,o=j.domStart+(j.to-j.from)}if(o!=p||q!=m)r+=Math.abs(m-q),n.push({from:q,to:m,domSize:p-o,domStart:o});if(!n.length)return;R.style.display="none",r>(k.to-k.from)*.3?bW(l=Math.max(k.from-10,0),m=Math.min(k.to+7,W.length)):bX(n),R.style.display="";var s=l!=bh||m!=bi||bj!=E.clientHeight;bh=l,bi=m,M.style.top=l*cx()+"px",s&&(bj=E.clientHeight,K.style.height=W.length*cx()+2*cy()+"px",bY());var t=cs(bn);P.style.width=t>E.clientWidth?t+"px":"";if(R.childNodes.length!=bi-bh)throw new Error("BAD PATCH! "+JSON.stringify(n)+" size="+(bi-bh)+" nodes="+R.childNodes.length);bZ()}}function bU(){var a=cx(),b=E.scrollTop-cy();return{from:Math.min(W.length,Math.max(0,Math.floor(b/a))),to:Math.min(W.length,Math.ceil((b+E.clientHeight)/a))}}function bT(a,b,c,d){var e=cz(),f=cy(),h=cx();b+=f,d+=f,a+=e,c+=e;var i=E.clientHeight,j=E.scrollTop,k=!1,l=!0;b<j?(E.scrollTop=Math.max(0,b-2*h),k=!0):d>j+i&&(E.scrollTop=d+h-i,k=!0);var m=E.clientWidth,n=E.scrollLeft;a<n?(a<50&&(a=0),E.scrollLeft=Math.max(0,a-10),k=!0):c>m+n&&(E.scrollLeft=c+10-m,k=!0,c>K.clientWidth&&(l=!1)),k&&g.onScroll&&g.onScroll(br);return l}function bS(){var a=cv($.inverted?$.from:$.to);return bT(a.x,a.y,a.x,a.yBot)}function bR(){g.readOnly!="nocursor"&&y.focus()}function bQ(){var a=[],b=Math.max(0,$.from.line-1),c=Math.min(W.length,$.to.line+2);for(var d=b;d<c;++d)a.push(W[d].text);a=y.value=a.join(t);var e=$.from.ch,f=$.to.ch;for(var d=b;d<$.from.line;++d)e+=t.length+W[d].text.length;for(var d=b;d<$.to.line;++d)f+=t.length+W[d].text.length;bl={text:a,from:b,to:c,start:e,end:f},J(y,e,ba?e:f)}function bP(){function f(a,c){var d=0;for(;;){var e=b.indexOf("\n",d);if(e==-1||(b.charAt(e-1)=="\r"?e-1:e)>=a)return{line:c,ch:a-d};++c,d=e+1}}if(!bg){var a=!1,b=y.value,c=I(y);if(!c)return!1;var a=bl.text!=b,d=ba,e=a||c.start!=bl.start||c.end!=(d?bl.start:bl.end);if(!e&&!d)return!1;if(a){_=ba=null;if(g.readOnly){bc=!0;return"changed"}}var h=f(c.start,bl.from),i=f(c.end,bl.from);if(d){var j=c.start==d.anchor?i:h,k=_?$.to:c.start==d.anchor?h:i;($.inverted=C(j,k))?(h=j,i=k):(ba=null,h=k,i=j)}h.line==i.line&&h.line==$.from.line&&h.line==$.to.line&&!_&&(bc=!1);if(a){var l=0,m=b.length,n=Math.min(m,bl.text.length),o,p=bl.from,q=-1;while(l<n&&(o=b.charAt(l))==bl.text.charAt(l))++l,o=="\n"&&(p++,q=l);var r=q>-1?l-q:l,s=bl.to-1,t=bl.text.length;for(;;){o=bl.text.charAt(t);if(b.charAt(m)!=o){++m,++t;break}o=="\n"&&s--;if(t<=l||m<=l)break;--m,--t}var q=bl.text.lastIndexOf("\n",t-1),u=q==-1?t:t-q-1;bC({line:p,ch:r},{line:s,ch:u},H(b.slice(l,m)),h,i);if(p!=s||h.line!=p)bc=!0}else b_(h,i);bl.text=b,bl.start=c.start,bl.end=c.end;return a?"changed":e?"moved":!1}}function bO(a){function c(){cK();var d=bP();d=="moved"&&a&&(w[a]=!0),!d&&!b?(b=!0,S.set(80,c)):(bM=!1,bN()),cL()}var b=!1;bM=!0,S.set(20,c)}function bN(){bM||S.set(2e3,function(){cK(),bP(),Z&&bN(),cL()})}function bL(){return bK($.from,$.to)}function bK(a,b){var c=a.line,d=b.line;if(c==d)return W[c].text.slice(a.ch,b.ch);var e=[W[c].text.slice(a.ch)];for(var f=c+1;f<d;++f)e.push(W[f].text);e.push(W[d].text.slice(0,b.ch));return e.join("\n")}function bJ(a,b,c,d){var e=a.length==1?a[0].length+b.ch:a[a.length-1].length,f=d({line:b.line+a.length-1,ch:e});bC(b,c,a,f.from,f.to)}function bI(a,b){bJ(H(a),$.from,$.to,function(a){return b=="end"?{from:a,to:a}:b=="start"?{from:$.from,to:$.from}:{from:$.from,to:a}})}function bH(a,b,c){function d(d){if(C(d,b))return d;if(!C(c,d))return e;var f=d.line+a.length-(c.line-b.line)-1,g=d.ch;d.line==c.line&&(g+=a[a.length-1].length-(c.ch-(c.line==b.line?b.ch:0)));return{line:f,ch:g}}b=cc(b),c?c=cc(c):c=b,a=H(a);var e;bJ(a,b,c,function(a){e=a;return{from:d($.from),to:d($.to)}});return e}function bG(a,b,c,d,e){function s(a){return a<=Math.min(b.line,b.line+q)?a:a+q}var f=!1,g=bn.length;for(var i=a.line;i<=b.line;++i)if(W[i].text.length==g){f=!0;break}var j=b.line-a.line,k=W[a.line],l=W[b.line];if(k==l)if(c.length==1)k.replace(a.ch,b.ch,c[0]);else{l=k.split(b.ch,c[c.length-1]);var m=[a.line+1,j];k.replace(a.ch,k.text.length,c[0]);for(var i=1,n=c.length-1;i<n;++i)m.push(new h(c[i]));m.push(l),W.splice.apply(W,m)}else if(c.length==1)k.replace(a.ch,k.text.length,c[0]+l.text.slice(b.ch)),W.splice(a.line+1,j);else{var m=[a.line+1,j-1];k.replace(a.ch,k.text.length,c[0]),l.replace(0,b.ch,c[c.length-1]);for(var i=1,n=c.length-1;i<n;++i)m.push(new h(c[i]));W.splice.apply(W,m)}for(var i=a.line,n=i+c.length;i<n;++i){var o=W[i].text;o.length>g&&(bn=o,g=o.length,f=!1)}if(f){g=0,bn="";for(var i=0,n=W.length;i<n;++i){var o=W[i].text;o.length>g&&(g=o.length,bn=o)}}var p=[],q=c.length-j-1;for(var i=0,o=X.length;i<o;++i){var r=X[i];r<a.line?p.push(r):r>b.line&&p.push(r+q)}c.length&&p.push(a.line),X=p,cJ(100),bd.push({from:a.line,to:b.line+1,diff:q}),be={from:a,to:b,text:c},b_(d,e,s($.from.line),s($.to.line)),K.style.height=W.length*cx()+2*cy()+"px"}function bF(){bD(Y.undone,Y.done)}function bE(){bD(Y.done,Y.undone)}function bD(a,b){var c=a.pop();if(c){var d=[],e=c.start+c.added;for(var f=c.start;f<e;++f)d.push(W[f].text);b.push({start:c.start,added:c.old.length,old:d});var g=cc({line:c.start+c.old.length-1,ch:F(d[d.length-1],c.old[c.old.length-1])});bG({line:c.start,ch:0},{line:e-1,ch:W[e-1].text.length},c.old,g,g)}}function bC(a,b,c,d,e){if(Y){var f=[];for(var h=a.line,i=b.line+1;h<i;++h)f.push(W[h].text);Y.addChange(a.line,c.length,f);while(Y.done.length>g.undoDepth)Y.done.shift()}bG(a,b,c,d,e),c.length<5&&cH(a.line,a.line+c.length)}function bB(){Z&&g.onBlur&&g.onBlur(br),clearInterval(U),_=null,Z=!1,s.className=s.className.replace(" CodeMirror-focused","")}function bA(){g.readOnly!="nocursor"&&(!Z&&g.onFocus&&g.onFocus(br),Z=!0,bN(),s.className.search(/\bCodeMirror-focused\b/)==-1&&(s.className+=" CodeMirror-focused"),cC())}function bz(a){if(!g.onKeyEvent||!g.onKeyEvent(br,l(a.e))){if(g.electricChars&&V.electricChars){var b=String.fromCharCode(a.e.charCode==null?a.e.keyCode:a.e.charCode);V.electricChars.indexOf(b)>-1&&setTimeout(cN(function(){ck($.to.line,"smart")}),50)}var c=a.e.keyCode;c==13?(g.readOnly||ci(),a.stop()):!a.e.ctrlKey&&!a.e.altKey&&!a.e.metaKey&&c==9&&g.tabMode!="default"?a.stop():bO(bk)}}function by(a){if(!g.onKeyEvent||!g.onKeyEvent(br,l(a.e)))ba&&(ba=null,bc=!0),a.e.keyCode==16&&(_=null)}function bx(a){Z||bA();var b=a.e.keyCode;r&&b==27&&(a.e.returnValue=!1);var c=(v?a.e.metaKey:a.e.ctrlKey)&&!a.e.altKey,d=a.e.ctrlKey||a.e.altKey||a.e.metaKey;b==16||a.e.shiftKey?_=_||($.inverted?$.to:$.from):_=null;if(!g.onKeyEvent||!g.onKeyEvent(br,l(a.e))){if(b==33||b==34){cd(b==34);return a.stop()}if(c&&(b==36||b==35||v&&(b==38||b==40))){ce(b==36||b==38);return a.stop()}if(c&&b==65){cf();return a.stop()}if(!g.readOnly){if(!d&&b==13)return;if(!d&&b==9&&cj(a.e.shiftKey))return a.stop();if(c&&b==90){bE();return a.stop()}if(c&&(a.e.shiftKey&&b==90||b==89)){bF();return a.stop()}}bk=(c?"c":"")+b;if($.inverted&&w.hasOwnProperty(bk)){var e=I(y);e&&(ba={anchor:e.start},J(y,e.start,e.start))}bO(bk)}}function bw(a){var b=cA(a,!0),c=a.e.dataTransfer.files;if(!!b&&!g.readOnly)if(c&&c.length&&window.FileReader&&window.File){var d=c.length,e=Array(d),f=0;for(var h=0;h<d;++h)i(c[h],h);function i(a,c){var g=new FileReader;g.onload=function(){e[c]=g.result,++f==d&&bH(e.join(""),cc(b),cc(b))},g.readAsText(a)}}else try{var e=a.e.dataTransfer.getData("Text");e&&bH(e,b,b)}catch(a){}}function bv(a){var b=cA(a);!b||(cg(b),a.stop(),bb=+(new Date))}function bu(a){function i(a){var b=cA(a,!0);if(b&&!B(b,e)){Z||bA(),e=b,b$(d,b),bc=!1;var c=bU();if(b.line>=c.to||b.line<c.from)f=setTimeout(cN(function(){i(a)}),150)}}function h(){bR(),bc=!0,j(),k()}var b=bb;bb=null;for(var c=a.target();c!=s;c=c.parentNode)if(c.parentNode==O){g.onGutterClick&&g.onGutterClick(br,G(O.childNodes,c)+bh);return a.stop()}q&&a.button()==3&&cB(a);if(a.button()==1){var d=cA(a),e=d,f;if(!d){a.target()==E&&a.stop();return}Z||bA(),a.stop();if(b&&+(new Date)-b<400)return ch(d.line);ca(d.line,d.ch,!0);var j=n(m,"mousemove",cN(function(a){clearTimeout(f),a.stop(),i(a)}),!0),k=n(m,"mouseup",cN(function(a){clearTimeout(f);var b=cA(a);b&&b$(d,b),a.stop(),h()}),!0)}}function bt(a){var b=[];for(var c=0,d=W.length;c<d;++c)b.push(W[c].text);return b.join("\n")}function bs(a){Y=null;var b={line:0,ch:0};bC(b,{line:W.length-1,ch:W[W.length-1].text.length},H(a),b,b),Y=new j}function bq(a){return a>=0&&a<W.length}var g={},i=a.defaults;for(var k in i)i.hasOwnProperty(k)&&(g[k]=(c&&c.hasOwnProperty(k)?c:i)[k]);var m=g.document,s=m.createElement("div");s.className="CodeMirror",s.innerHTML='<div style="overflow: hidden; position: relative; width: 1px; height: 0px;"><textarea style="position: absolute; width: 2px;" wrap="off"></textarea></div><div class="CodeMirror-scroll cm-s-'+g.theme+'">'+'<div style="position: relative">'+'<div style="position: absolute; height: 0; width: 0; overflow: hidden;"></div>'+'<div style="position: relative">'+'<div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div>'+'<div class="CodeMirror-lines"><div style="position: relative">'+'<pre class="CodeMirror-cursor">&#160;</pre>'+"<div></div>"+"</div></div></div></div></div>",b.appendChild?b.appendChild(s):b(s);var x=s.firstChild,y=x.firstChild,E=s.lastChild,K=E.firstChild,L=K.firstChild,M=L.nextSibling,N=M.firstChild,O=N.firstChild,P=N.nextSibling.firstChild,Q=P.firstChild,R=Q.nextSibling;g.tabindex!=null&&(y.tabindex=g.tabindex),!g.gutter&&!g.lineNumbers&&(N.style.display="none");var S=new o,T=new o,U,V,W=[new h("")],X,Y=new j,Z;cl();var $={from:{line:0,ch:0},to:{line:0,ch:0},inverted:!1},_,ba,bb,bc,bd,be,bf,bg,bh=0,bi=0,bj=0,bk=null,bl,bm,bn="";cN(function(){bs(g.value||""),bc=!1})(),setTimeout(bQ,20),n(E,"mousedown",cN(bu)),q||n(E,"contextmenu",cN(cB)),n(K,"dblclick",cN(bv)),n(E,"scroll",function(){bV([]),g.onScroll&&g.onScroll(br)}),n(window,"resize",function(){bV(!0)}),n(y,"keyup",cN(by)),n(y,"keydown",cN(bx)),n(y,"keypress",cN(bz)),n(y,"focus",bA),n(y,"blur",bB),n(E,"dragenter",function(a){a.stop()}),n(E,"dragover",function(a){a.stop()}),n(E,"drop",cN(bw)),n(E,"paste",function(){bR(),bO()}),n(y,"paste",function(){bO()}),n(y,"cut",function(){bO()});var bo;try{bo=m.activeElement==y}catch(bp){}bo?bA():bB();var br={getValue:bt,setValue:cN(bs),getSelection:bL,replaceSelection:cN(bI),focus:function(){bR(),bA(),bQ(),bO()},setOption:function(a,b){g[a]=b,a=="lineNumbers"||a=="gutter"?cm():a=="mode"||a=="indentUnit"?cl():a=="readOnly"&&b=="nocursor"?y.blur():a=="theme"&&(E.className=E.className.replace(/cm-s-\w+/,"cm-s-"+b))},getOption:function(a){return g[a]},undo:cN(bE),redo:cN(bF),indentLine:cN(function(a){bq(a)&&ck(a,"smart")}),historySize:function(){return{undo:Y.done.length,redo:Y.undone.length}},matchBrackets:cN(function(){cE(!0)}),getTokenAt:function(a){a=cc(a);return W[a.line].getTokenAt(V,cG(a.line),a.ch)},cursorCoords:function(a){a==null&&(a=$.inverted);return cw(a?$.from:$.to)},charCoords:function(a){return cw(cc(a))},coordsChar:function(a){var b=z(P),c=cb(Math.min(W.length-1,bh+Math.floor((a.y-b.top)/cx())));return cc({line:c,ch:cu(cb(c),a.x-b.left)})},getSearchCursor:function(a,b,c){return new cO(a,b,c)},markText:cN(function(a,b,c){return cN(cn(a,b,c))}),setMarker:co,clearMarker:cp,setLineClass:cN(cq),lineInfo:cr,addWidget:function(a,b,c){var a=cv(cc(a),!0);b.style.top=bh*cx()+a.yBot+cy()+"px",b.style.left=a.x+cz()+"px",K.appendChild(b),c&&bT(a.x,a.yBot,a.x+b.offsetWidth,a.yBot+b.offsetHeight)},lineCount:function(){return W.length},getCursor:function(a){a==null&&(a=$.inverted);return D(a?$.from:$.to)},somethingSelected:function(){return!B($.from,$.to)},setCursor:cN(function(a,b){b==null&&typeof a.line=="number"?ca(a.line,a.ch):ca(a,b)}),setSelection:cN(function(a,b){b_(cc(a),cc(b||a))}),getLine:function(a){if(bq(a))return W[a].text},setLine:cN(function(a,b){bq(a)&&bH(b,{line:a,ch:0},{line:a,ch:W[a].text.length})}),removeLine:cN(function(a){bq(a)&&bH("",{line:a,ch:0},cc({line:a+1,ch:0}))}),replaceRange:cN(bH),getRange:function(a,b){return bK(cc(a),cc(b))},operation:function(a){return cN(a)()},refresh:function(){bV(!0)},getInputField:function(){return y},getWrapperElement:function(){return s}},bM=!1,cD={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"},cM=0;cO.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(a){function d(a){var c={line:a,ch:0};b.pos={from:c,to:c},b.atOccurrence=!1;return!1}var b=this,c=cc(a?this.pos.from:this.pos.to);for(;;){if(this.pos=this.matches(a,c)){this.atOccurrence=!0;return this.pos.match||!0}if(a){if(!c.line)return d(0);c={line:c.line-1,ch:W[c.line-1].text.length}}else{if(c.line==W.length-1)return d(W.length);c={line:c.line+1,ch:0}}}},from:function(){if(this.atOccurrence)return D(this.pos.from)},to:function(){if(this.atOccurrence)return D(this.pos.to)}};for(var cP in d)d.propertyIsEnumerable(cP)&&!br.propertyIsEnumerable(cP)&&(br[cP]=d[cP]);return br}a.defaults={value:"",mode:null,theme:"default",indentUnit:2,indentWithTabs:!1,tabMode:"classic",enterMode:"indent",electricChars:!0,onKeyEvent:null,lineNumbers:!1,gutter:!1,firstLineNumber:1,readOnly:!1,onChange:null,onCursorActivity:null,onGutterClick:null,onHighlightComplete:null,onFocus:null,onBlur:null,onScroll:null,matchBrackets:!1,workTime:100,workDelay:200,undoDepth:40,tabindex:null,document:window.document};var b={},c={};a.defineMode=function(c,d){!a.defaults.mode&&c!="null"&&(a.defaults.mode=c),b[c]=d},a.defineMIME=function(a,b){c[a]=b},a.getMode=function(d,e){typeof e=="string"&&c.hasOwnProperty(e)&&(e=c[e]);if(typeof e=="string")var f=e,g={};else if(e!=null)var f=e.name,g=e;var h=b[f];if(!h){window.console&&console.warn("No mode "+f+" found, falling back to plain text.");return a.getMode(d,"text/plain")}return h(d,g||{})},a.listModes=function(){var a=[];for(var c in b)b.propertyIsEnumerable(c)&&a.push(c);return a},a.listMIMEs=function(){var a=[];for(var b in c)c.propertyIsEnumerable(b)&&a.push(b);return a};var d={};a.defineExtension=function(a,b){d[a]=b},a.fromTextArea=function(b,c){function d(){b.value=h.getValue()}c||(c={}),c.value=b.value,!c.tabindex&&b.tabindex&&(c.tabindex=b.tabindex);if(b.form){var e=n(b.form,"submit",d,!0);if(typeof b.form.submit=="function"){var f=b.form.submit;function g(){d(),b.form.submit=f,b.form.submit(),b.form.submit=g}b.form.submit=g}}b.style.display="none";var h=a(function(a){b.parentNode.insertBefore(a,b.nextSibling)},c);h.save=d,h.toTextArea=function(){d(),b.parentNode.removeChild(h.getWrapperElement()),b.style.display="",b.form&&(e(),typeof b.form.submit=="function"&&(b.form.submit=f))};return h},a.startState=f,a.copyState=e,g.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==0},peek:function(){return this.string.charAt(this.pos)},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(a){var b=this.string.charAt(this.pos);if(typeof a=="string")var c=b==a;else var c=b&&(a.test?a.test(b):a(b));if(c){++this.pos;return b}},eatWhile:function(a){var b=this.start;while(this.eat(a));return this.pos>b},eatSpace:function(){var a=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);if(b>-1){this.pos=b;return!0}},backUp:function(a){this.pos-=a},column:function(){return y(this.string,this.start)},indentation:function(){return y(this.string)},match:function(a,b,c){if(typeof a!="string"){var e=this.string.slice(this.pos).match(a);e&&b!==!1&&(this.pos+=e[0].length);return e}function d(a){return c?a.toLowerCase():a}if(d(this.string).indexOf(d(a),this.pos)==this.pos){b!==!1&&(this.pos+=a.length);return!0}},current:function(){return this.string.slice(this.start,this.pos)}},a.StringStream=g,h.prototype={replace:function(a,b,c){var d=[],e=this.marked;i(0,a,this.styles,d),c&&d.push(c,null),i(b,this.text.length,this.styles,d),this.styles=d,this.text=this.text.slice(0,a)+c+this.text.slice(b),this.stateAfter=null;if(e){var f=c.length-(b-a),g=this.text.length;function h(a){return a<=Math.min(b,b+f)?a:a+f}for(var j=0;j<e.length;++j){var k=e[j],l=!1;k.from>=g?l=!0:(k.from=h(k.from),k.to!=null&&(k.to=h(k.to)));if(l||k.from>=k.to)e.splice(j,1),j--}}},split:function(a,b){var c=[b,null];i(a,this.text.length,this.styles,c);return new h(b+this.text.slice(a),c)},addMark:function(a,b,c){var d=this.marked,e={from:a,to:b,style:c};this.marked==null&&(this.marked=[]),this.marked.push(e),this.marked.sort(function(a,b){return a.from-b.from});return e},removeMark:function(a){var b=this.marked;if(!!b)for(var c=0;c<b.length;++c)if(b[c]==a){b.splice(c,1);break}},highlight:function(a,b){var c=new g(this.text),d=this.styles,e=0,f=!1,h=d[0],i;this.text==""&&a.blankLine&&a.blankLine(b);while(!c.eol()){var j=a.token(c,b),k=this.text.slice(c.start,c.pos);c.start=c.pos,e&&d[e-1]==j?d[e-2]+=k:k&&(!f&&(d[e+1]!=j||e&&d[e-2]!=i)&&(f=!0),d[e++]=k,d[e++]=j,i=h,h=d[e]);if(c.pos>5e3){d[e++]=this.text.slice(c.pos),d[e++]=null;break}}d.length!=e&&(d.length=e,f=!0),e&&d[e-2]!=i&&(f=!0);return f||d.length<5&&this.text.length<10},getTokenAt:function(a,b,c){var d=this.text,e=new g(d);while(e.pos<c&&!e.eol()){e.start=e.pos;var f=a.token(e,b)}return{start:e.start,end:e.pos,string:e.current(),className:f||null,state:b}},indentation:function(){return y(this.text)},getHTML:function(a,b,c,d){function f(a,b){!a||(b?e.push('<span class="cm-',b,'">',E(a),"</span>"):e.push(E(a)))}var e=[];c&&e.push(this.className?'<pre class="'+this.className+'">':"<pre>");var g=this.styles,h=this.text,i=this.marked;a==b&&(a=null);var j=h.length;d!=null&&(j=Math.min(d,j));if(!h&&d==null)f(" ",a!=null&&b==null?"CodeMirror-selected":null);else if(!i&&a==null)for(var k=0,l=0;l<j;k+=2){var m=g[k],n=m.length;l+n>j&&(m=m.slice(0,j-l)),l+=n,f(m,g[k+1])}else{var o=0,k=0,p="",q,r=0,s=-1,t=null;function u(){i&&(s+=1,t=s<i.length?i[s]:null)}u();while(o<j){var v=j,w="";if(a!=null)if(a>o)v=a;else if(b==null||b>o)w=" CodeMirror-selected",b!=null&&(v=Math.min(v,b));while(t&&t.to!=null&&t.to<=o)u();t&&(t.from>o?v=Math.min(v,t.from):(w+=" "+t.style,t.to!=null&&(v=Math.min(v,t.to))));for(;;){var x=o+p.length,y=q;w&&(y=q?q+w:w),f(x>v?p.slice(0,v-o):p,y);if(x>=v){p=p.slice(v-o),o=v;break}o=x,p=g[k++],q=g[k++]}}a!=null&&b==null&&f(" ","CodeMirror-selected")}c&&e.push("</pre>");return e.join("")}},j.prototype={addChange:function(a,b,c){this.undone.length=0;var d=+(new Date),e=this.done[this.done.length-1];if(d-this.time>400||!e||e.start>a+b||e.start+e.added<a-e.added+e.old.length)this.done.push({start:a,added:b,old:c});else{var f=0;if(a<e.start){for(var g=e.start-a-1;g>=0;--g)e.old.unshift(c[g]);e.added+=e.start-a,e.start=a}else e.start<a&&(f=a-e.start,b+=f);for(var g=e.added-f,h=c.length;g<h;++g)e.old.push(c[g]);e.added<b&&(e.added=b)}this.time=d}},m.prototype={stop:function(){k.call(this.e)},target:function(){return this.e.target||this.e.srcElement},button:function(){if(this.e.which)return this.e.which;if(this.e.button&1)return 1;if(this.e.button&2)return 3;if(this.e.button&4)return 2},pageX:function(){if(this.e.pageX!=null)return this.e.pageX;var a=this.target().ownerDocument;return this.e.clientX+a.body.scrollLeft+a.documentElement.scrollLeft},pageY:function(){if(this.e.pageY!=null)return this.e.pageY;var a=this.target().ownerDocument;return this.e.clientY+a.body.scrollTop+a.documentElement.scrollTop}},o.prototype={set:function(a,b){clearTimeout(this.id),this.id=setTimeout(b,a)}};var p=function(){var a=document.createElement("pre");a.innerHTML=" ";return!a.innerHTML}(),q=/gecko\/\d{7}/i.test(navigator.userAgent),r=/MSIE \d/.test(navigator.userAgent),s=/Apple Computer/.test(navigator.vendor),t="\n";(function(){var a=document.createElement("textarea");a.value="foo\nbar",a.value.indexOf("\r")>-1&&(t="\r\n")})();var u=8,v=/Mac/.test(navigator.platform),w={};for(var x=35;x<=40;++x)w[x]=w["c"+x]=!0;a.htmlEscape=E;if("\n\nb".split(/\n/).length!=3)var H=function(a){var b=0,c,d=[];while((c=a.indexOf("\n",b))>-1)d.push(a.slice(b,a.charAt(c-1)=="\r"?c-1:c)),b=c+1;d.push(a.slice(b));return d};else var H=function(a){return a.split(/\r?\n/)};a.splitLines=H;if(window.getSelection){var I=function(a){try{return{start:a.selectionStart,end:a.selectionEnd}}catch(b){return null}};if(s)var J=function(a,b,c){b==c?a.setSelectionRange(b,c):(a.setSelectionRange(b,c-1),window.getSelection().modify("extend","forward","character"))};else var J=function(a,b,c){try{a.setSelectionRange(b,c)}catch(d){}}}else var I=function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){return null}if(!b||b.parentElement()!=a)return null;var d=a.value,e=d.length,f=a.createTextRange();f.moveToBookmark(b.getBookmark());var g=a.createTextRange();g.collapse(!1);if(f.compareEndPoints("StartToEnd",g)>-1)return{start:e,end:e};var h=-f.moveStart("character",-e);for(var i=d.indexOf("\r");i>-1&&i<h;i=d.indexOf("\r",i+1),h++);if(f.compareEndPoints("EndToEnd",g)>-1)return{start:h,end:e};var j=-f.moveEnd("character",-e);for(var i=d.indexOf("\r");i>-1&&i<j;i=d.indexOf("\r",i+1),j++);return{start:h,end:j}},J=function(a,b,c){var d=a.createTextRange();d.collapse(!0);var e=d.duplicate(),f=0,g=a.value;for(var h=g.indexOf("\n");h>-1&&h<b;h=g.indexOf("\n",h+1))++f;d.move("character",b-f);for(;h>-1&&h<c;h=g.indexOf("\n",h+1))++f;e.move("character",c-f),d.setEndPoint("EndToEnd",e),d.select()};a.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),a.defineMIME("text/plain","null");return a}();CodeMirror.defineMode("css",function(a){function h(a){return function(b,c){var f=!1,g;while((g=b.next())!=null){if(g==a&&!f)break;f=!f&&g=="\\"}f||(c.tokenize=e);return d("string","string")}}function g(a,b){var c=0,f;while((f=a.next())!=null){if(c>=2&&f==">"){b.tokenize=e;break}c=f=="-"?c+1:0}return d("comment","comment")}function f(a,b){var c=!1,f;while((f=a.next())!=null){if(c&&f=="/"){b.tokenize=e;break}c=f=="*"}return d("comment","comment")}function e(a,b){var c=a.next();if(c=="@"){a.eatWhile(/\w/);return d("meta",a.current())}if(c=="/"&&a.eat("*")){b.tokenize=f;return f(a,b)}if(c=="<"&&a.eat("!")){b.tokenize=g;return g(a,b)}if(c=="=")d(null,"compare");else{if(c!="~"&&c!="|"||!a.eat("=")){if(c=='"'||c=="'"){b.tokenize=h(c);return b.tokenize(a,b)}if(c=="#"){a.eatWhile(/\w/);return d("atom","hash")}if(c=="!"){a.match(/^\s*\w*/);return d("keyword","important")}if(/\d/.test(c)){a.eatWhile(/[\w.%]/);return d("number","unit")}if(/[,.+>*\/]/.test(c))return d(null,"select-op");if(/[;{}:\[\]]/.test(c))return d(null,c);a.eatWhile(/[\w\\\-_]/);return d("variable","variable")}return d(null,"compare")}}function d(a,b){c=b;return a}var b=a.indentUnit,c;return{startState:function(a){return{tokenize:e,baseIndent:a||0,stack:[]}},token:function(a,b){if(a.eatSpace())return null;var d=b.tokenize(a,b),e=b.stack[b.stack.length-1];if(c=="hash"&&e=="rule")d="atom";else if(d=="variable")if(e=="rule")d="number";else if(!e||e=="@media{")d="tag";e=="rule"&&/^[\{\};]$/.test(c)&&b.stack.pop(),c=="{"?e=="@media"?b.stack[b.stack.length-1]="@media{":b.stack.push("{"):c=="}"?b.stack.pop():c=="@media"?b.stack.push("@media"):e=="{"&&c!="comment"&&b.stack.push("rule");return d},indent:function(a,c){var d=a.stack.length;/^\}/.test(c)&&(d-=a.stack[a.stack.length-1]=="rule"?2:1);return a.baseIndent+d*b},electricChars:"}"}}),CodeMirror.defineMIME("text/css","css")