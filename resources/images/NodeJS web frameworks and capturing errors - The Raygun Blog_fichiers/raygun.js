/*! Raygun4js - v2.1.0 - 2015-12-01
* https://github.com/MindscapeHQ/raygun4js
* Copyright (c) 2015 MindscapeHQ; Licensed MIT */

!function(a,b){function c(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function d(a){return"undefined"==typeof a}var e={},f=a.TraceKit,g=[].slice,h="?";e.noConflict=function(){return a.TraceKit=f,e},e.wrap=function(a){function b(){try{return a.apply(this,arguments)}catch(b){throw e.report(b),b}}return b},e.report=function(){function b(a){i(),m.push(a)}function d(a){for(var b=m.length-1;b>=0;--b)m[b]===a&&m.splice(b,1)}function f(a,b){var d=null;if(!b||e.collectWindowErrors){for(var f in m)if(c(m,f))try{m[f].apply(null,[a].concat(g.call(arguments,2)))}catch(h){d=h}if(d)throw d}}function h(a,b,c,d,g){var h=null;if(g)h=e.computeStackTrace(g);else if(o)e.computeStackTrace.augmentStackTraceWithInitialElement(o,b,c,a),h=o,o=null,n=null;else{var i={url:b,line:c,column:d};i.func=e.computeStackTrace.guessFunctionName(i.url,i.line),i.context=e.computeStackTrace.gatherContext(i.url,i.line),h={mode:"onerror",message:a,url:document.location.href,stack:[i],useragent:navigator.userAgent}}return f(h,"from window.onerror"),k?k.apply(this,arguments):!1}function i(){l!==!0&&(k=a.onerror,a.onerror=h,l=!0)}function j(b){var c=g.call(arguments,1);if(o){if(n===b)return;var d=o;o=null,n=null,f.apply(null,[d,null].concat(c))}var h=e.computeStackTrace(b);throw o=h,n=b,a.setTimeout(function(){n===b&&(o=null,n=null,f.apply(null,[h,null].concat(c)))},h.incomplete?2e3:0),b}var k,l,m=[],n=null,o=null;return j.subscribe=b,j.unsubscribe=d,j}(),e.computeStackTrace=function(){function b(b){if("string"!=typeof b)return[];if(!e.remoteFetching)return"";try{var c=function(){try{return new a.XMLHttpRequest}catch(b){return new a.ActiveXObject("Microsoft.XMLHTTP")}},d=c();return d.open("GET",b,!1),d.send(""),d.responseText}catch(f){return""}}function f(a){if(!c(w,a)){var d="";a=a||"",a.indexOf&&-1!==a.indexOf(document.domain)&&(d=b(a)),w[a]=d?d.split("\n"):[]}return w[a]}function g(a,b){var c,e=/function ([^(]*)\(([^)]*)\)/,g=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,i="",j=10,k=f(a);if(!k.length)return h;for(var l=0;j>l;++l)if(i=k[b-l]+i,!d(i)){if(c=g.exec(i))return c[1];if(c=e.exec(i))return c[1]}return h}function i(a,b){var c=f(a);if(!c.length)return null;var g=[],h=Math.floor(e.linesOfContext/2),i=h+e.linesOfContext%2,j=Math.max(0,b-h-1),k=Math.min(c.length,b+i-1);b-=1;for(var l=j;k>l;++l)d(c[l])||g.push(c[l]);return g.length>0?g:null}function j(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function k(a){return j(a).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function l(a,b){for(var c,d,e=0,g=b.length;g>e;++e)if((c=f(b[e])).length&&(c=c.join("\n"),d=a.exec(c)))return{url:b[e],line:c.substring(0,d.index).split("\n").length,column:d.index-c.lastIndexOf("\n",d.index)-1};return null}function m(a,b,c){var d,e=f(b),g=new RegExp("\\b"+j(a)+"\\b");return c-=1,e&&e.length>c&&(d=g.exec(e[c]))?d.index:null}function n(b){for(var c,d,e,f,g=[a.location.href],h=document.getElementsByTagName("script"),i=""+b,m=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,n=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,o=0;o<h.length;++o){var p=h[o];p.src&&g.push(p.src)}if(e=m.exec(i)){var q=e[1]?"\\s+"+e[1]:"",r=e[2].split(",").join("\\s*,\\s*");c=j(e[3]).replace(/;$/,";?"),d=new RegExp("function"+q+"\\s*\\(\\s*"+r+"\\s*\\)\\s*{\\s*"+c+"\\s*}")}else d=new RegExp(j(i).replace(/\s+/g,"\\s+"));if(f=l(d,g))return f;if(e=n.exec(i)){var s=e[1];if(c=k(e[2]),d=new RegExp("on"+s+"=[\\'\"]\\s*"+c+"\\s*[\\'\"]","i"),f=l(d,g[0]))return f;if(d=new RegExp(c),f=l(d,g))return f}return null}function o(a){if(!a.stack)return null;for(var b,c,d=/^\s*at (.*?) ?\(?((?:file|http|https|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/i,e=/^\s*(.*?)(?:\((.*?)\))?@?((?:file|http|https|chrome):.*?):(\d+)(?::(\d+))?\s*$/i,f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,j=a.stack.split("\n"),k=[],l=/^(.*) is undefined$/.exec(a.message),n=0,o=j.length;o>n;++n){if(b=e.exec(j[n]))c={url:b[3],func:b[1]||h,args:b[2]?b[2].split(","):"",line:+b[4],column:b[5]?+b[5]:null};else if(b=d.exec(j[n]))c={url:b[2],func:b[1]||h,line:+b[3],column:b[4]?+b[4]:null};else{if(!(b=f.exec(j[n])))continue;c={url:b[2],func:b[1]||h,line:+b[3],column:b[4]?+b[4]:null}}!c.func&&c.line&&(c.func=g(c.url,c.line)),c.line&&(c.context=i(c.url,c.line)),k.push(c)}return k[0]&&k[0].line&&!k[0].column&&l?k[0].column=m(l[1],k[0].url,k[0].line):k[0].column||"undefined"==typeof a.columnNumber||(k[0].column=a.columnNumber+1),k.length?{mode:"stack",name:a.name,message:a.message,url:document.location.href,stack:k,useragent:navigator.userAgent}:null}function p(a){for(var b,c=a.stacktrace,d=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,e=null!==c?c.split("\n"):c,f=[],h=0,j=e.length;j>h;h+=2)if(b=d.exec(e[h])){var k={line:+b[1],column:+b[2],func:b[3]||b[4],args:b[5]?b[5].split(","):[],url:b[6]};if(!k.func&&k.line&&(k.func=g(k.url,k.line)),k.line)try{k.context=i(k.url,k.line)}catch(l){}k.context||(k.context=[e[h+1]]),f.push(k)}return f.length?{mode:"stacktrace",name:a.name,message:a.message,url:document.location.href,stack:f,useragent:navigator.userAgent}:null}function q(b){var d=b.message.split("\n");if(d.length<4)return null;var e,h,j,m,n=/^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,o=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,p=/^\s*Line (\d+) of function script\s*$/i,q=[],r=document.getElementsByTagName("script"),s=[];for(h in r)c(r,h)&&!r[h].src&&s.push(r[h]);for(h=2,j=d.length;j>h;h+=2){var t=null;if(e=n.exec(d[h]))t={url:e[2],func:e[3],line:+e[1]};else if(e=o.exec(d[h])){t={url:e[3],func:e[4]};var u=+e[1],v=s[e[2]-1];if(v&&(m=f(t.url))){m=m.join("\n");var w=m.indexOf(v.innerText);w>=0&&(t.line=u+m.substring(0,w).split("\n").length)}}else if(e=p.exec(d[h])){var x=a.location.href.replace(/#.*$/,""),y=e[1],z=new RegExp(k(d[h+1]));m=l(z,[x]),t={url:x,line:m?m.line:y,func:""}}if(t){t.func||(t.func=g(t.url,t.line));var A=i(t.url,t.line),B=A?A[Math.floor(A.length/2)]:null;A&&B.replace(/^\s*/,"")===d[h+1].replace(/^\s*/,"")?t.context=A:t.context=[d[h+1]],q.push(t)}}return q.length?{mode:"multiline",name:b.name,message:d[0],url:document.location.href,stack:q,useragent:navigator.userAgent}:null}function r(a,b,c,d){var e={url:b,line:c};if(e.url&&e.line){a.incomplete=!1,e.func||(e.func=g(e.url,e.line)),e.context||(e.context=i(e.url,e.line));var f=/ '([^']+)' /.exec(d);if(f&&(e.column=m(f[1],e.url,e.line)),a.stack.length>0&&a.stack[0].url===e.url){if(a.stack[0].line===e.line)return!1;if(!a.stack[0].line&&a.stack[0].func===e.func)return a.stack[0].line=e.line,a.stack[0].context=e.context,!1}return a.stack.unshift(e),a.partial=!0,!0}return a.incomplete=!0,!1}function s(a,b){for(var c,d,f,i=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,j=[],k={},l=!1,o=s.caller;o&&!l;o=o.caller)if(o!==t&&o!==e.report){if(d={url:null,func:h,line:null,column:null},o.name?d.func=o.name:(c=i.exec(o.toString()))&&(d.func=c[1]),"undefined"==typeof d.func)try{d.func=c.input.substring(0,c.input.indexOf("{"))}catch(p){}if(f=n(o)){d.url=f.url,d.line=f.line,d.func===h&&(d.func=g(d.url,d.line));var q=/ '([^']+)' /.exec(a.message||a.description);q&&(d.column=m(q[1],f.url,f.line))}k[""+o]?l=!0:k[""+o]=!0,j.push(d)}b&&j.splice(0,b);var u={mode:"callers",name:a.name,message:a.message,url:document.location.href,stack:j,useragent:navigator.userAgent};return r(u,a.sourceURL||a.fileName,a.line||a.lineNumber,a.message||a.description),u}function t(a,b){var c=null;b=null==b?0:+b;try{if(c=p(a))return c}catch(d){if(v)throw d}try{if(c=o(a))return c}catch(d){if(v)throw d}try{if(c=q(a))return c}catch(d){if(v)throw d}try{if(c=s(a,b+1))return c}catch(d){if(v)throw d}return{mode:"failed"}}function u(a){a=(null==a?0:+a)+1;try{throw new Error}catch(b){return t(b,a+1)}}var v=!1,w={};return t.augmentStackTraceWithInitialElement=r,t.guessFunctionName=g,t.gatherContext=i,t.ofCaller=u,t}(),e.extendToAsynchronousCallbacks=function(){var b=function(b){var c=a[b];a[b]=function(){var a=g.call(arguments),b=a[0];return"function"==typeof b&&(a[0]=e.wrap(b)),c.apply?c.apply(this,a):c(a[0],a[1])}};b("setTimeout"),b("setInterval")},e.remoteFetching||(e.remoteFetching=!0),e.collectWindowErrors||(e.collectWindowErrors=!0),(!e.linesOfContext||e.linesOfContext<1)&&(e.linesOfContext=11),a.TraceKit=e}(window),function(a,b){"use strict";if(a&&a.event&&a.event.add){var c=a.event.add;a.event.add=function(d,e,f,g,h){"function"!=typeof f&&"function"!=typeof f.handler&&c.call(this,d,e,f,g,h);var i;return f.handler?(i=f.handler,f.handler=b.wrap(f.handler)):(i=f,f=b.wrap(f)),i.guid?f.guid=i.guid:f.guid=i.guid=a.guid++,c.call(this,d,e,f,g,h)};var d=a.fn.ready;a.fn.ready=function(a){return d.call(this,b.wrap(a))};var e=a.ajax;a.ajax=function(c,d){"object"==typeof c&&(d=c,c=void 0),d=d||{};for(var f,g=["complete","error","success"];f=g.pop();)a.isFunction(d[f])&&(d[f]=b.wrap(d[f]));try{return c?e.call(this,c,d):e.call(this,d)}catch(h){throw b.report(h),h}}}}(window.jQuery,window.TraceKit);var raygunFactory=function(a,b,c){function d(a){var b=a,c=a.split("//")[1];if(c){var d=c.indexOf("?"),e=c.toString().substring(0,d),f=e.split("/").slice(0,4).join("/"),g=e.substring(0,48);b=f.length<g.length?f:g,b!==e&&(b+="..")}return b}function e(a,b,e,f){var g="AJAX Error: "+(b.statusText||"unknown")+" "+(e.type||"unknown")+" "+(d(e.url)||"unknown");(!H||b.getAllResponseHeaders())&&X.send(f||a.type,{status:b.status,statusText:b.statusText,type:e.type,url:e.url,ajaxErrorMessage:g,contentType:e.contentType,requestData:e.data&&e.data.slice?e.data.slice(0,10240):c,responseData:b.responseText&&b.responseText.slice?b.responseText.slice(0,10240):c,activeTarget:a.target&&a.target.activeElement&&a.target.activeElement.outerHTML&&a.target.activeElement.outerHTML.slice?a.target.activeElement.outerHTML.slice(0,10240):c})}function f(){return w&&""!==w?!0:(Y.log("Raygun API key has not been configured, make sure you call Raygun.init(yourApiKey)"),!1)}function g(a,b){var c,d={};for(c in a)d[c]=a[c];for(c in b)d[c]=b[c];return d}function h(a,b){return null!=b?a.concat(b):a}function i(a,b){for(var c=0;c<a.length;c++)b.call(null,c,a[c])}function j(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function k(){return Math.floor(9007199254740992*Math.random())}function l(){var b=document.documentElement,c=document.getElementsByTagName("body")[0],d=a.innerWidth||b.clientWidth||c.clientWidth,e=a.innerHeight||b.clientHeight||c.clientHeight;return{width:d,height:e}}function m(a,b){var c=(new Date).toJSON();try{var d="raygunjs="+c+"="+k();"undefined"==typeof localStorage[d]&&(localStorage[d]=JSON.stringify({url:a,data:b}))}catch(e){Y.log("Raygun4JS: LocalStorage full, cannot save exception")}}function n(){try{return"localStorage"in a&&null!==a.localStorage}catch(b){return!1}}function o(){if(n()&&localStorage&&localStorage.length>0)for(var a in localStorage)if("raygunjs="===a.substring(0,9))try{var b=JSON.parse(localStorage[a]);v(b.url,b.data),localStorage.removeItem(a)}catch(c){Y.log("Raygun4JS: Unable to send saved error")}}function p(){if(!x&&!L){var a,b="raygun4js-userid",c=Y.readCookie(b);c?a=c:(a=Y.getUuid(),Y.createCookie(b,a,744)),X.setUser(a,!0,null,null,null,a)}}function q(a,b){if(z)for(var c=0;c<z.length;c++)if("object"==typeof z[c]&&"function"==typeof z[c].exec){if(null!==z[c].exec(a))return"[removed by filter]"}else if(z[c]===a)return"[removed by filter]";return b}function r(a,b){if(null==a)return a;if("[object Object]"!==Object.prototype.toString.call(a))return a;var c={};for(var d in a){var e=a[d];null!=e&&("[object Object]"===Object.prototype.toString.call(e)?("Details"!==b||"Client"!==d)&&(c[d]=r(q(d,e),d)):"[object Function]"!==Object.prototype.toString.call(e)&&("undefined"!=typeof b||"OccurredOn"!==d)&&(c[d]=q(d,e)))}return c}function s(b,d){var e=[],f={};if(K){if(!b.stack||!b.stack.length)return void Y.log("Raygun4JS: Cancelling send due to null stacktrace");var g=Y.parseUrl("domain"),h="Script error",k=b.message||d.status||h;if(k.substring(0,h.length)===h&&null!==b.stack[0].url&&-1===b.stack[0].url.indexOf(g)&&(0===b.stack[0].line||"?"===b.stack[0].func))return void Y.log("Raygun4JS: cancelling send due to third-party script error with no stacktrace and message");if(null!==b.stack[0].url&&-1===b.stack[0].url.indexOf(g)){var m=!1;for(var n in R)b.stack[0].url.indexOf(R[n])>-1&&(m=!0);if(!m)return void Y.log("Raygun4JS: cancelling send due to error on non-origin, non-whitelisted domain")}}if(T instanceof Array)for(var o in T)if(T.hasOwnProperty(o)&&a.location.hostname&&a.location.hostname.match(T[o]))return void Y.log("Raygun4JS: cancelling send as error originates from an excluded hostname");if(U instanceof Array)for(var p in U)if(U.hasOwnProperty(p)&&navigator.userAgent.match(U[p]))return void Y.log("Raygun4JS: cancelling send as error originates from an excluded user agent");b.stack&&b.stack.length&&i(b.stack,function(a,b){e.push({LineNumber:b.line,ColumnNumber:b.column,ClassName:"line "+b.line+", column "+b.column,FileName:b.url,MethodName:b.func||"[anonymous]"})});var s=Y.parseUrl("?");s.length>0&&i(s.split("&"),function(a,b){var c=b.split("=");if(c&&2===c.length){var d=decodeURIComponent(c[0]),e=q(d,c[1]);f[d]=e}}),d===c&&(d={}),j(d.customData)&&("function"==typeof P?d.customData=P():d.customData=P),j(d.tags)&&("function"==typeof Q?d.tags=Q():d.tags=Q);var u,v=a.screen||{width:l().width,height:l().height,colorDepth:8},w=d.customData&&d.customData.ajaxErrorMessage;u="customData"===V?r(d.customData,"UserCustomData"):d.customData;try{JSON.stringify(u)}catch(z){var k="Cannot add custom data; may contain circular reference";u={error:k},Y.log("Raygun4JS: "+k)}var C=w||b.message||d.status||"Script error";C=C.substring(0,512);var D={OccurredOn:new Date,Details:{Error:{ClassName:b.name,Message:C,StackTrace:e},Environment:{UtcOffset:(new Date).getTimezoneOffset()/-60,"User-Language":navigator.userLanguage,"Document-Mode":document.documentMode,"Browser-Width":l().width,"Browser-Height":l().height,"Screen-Width":v.width,"Screen-Height":v.height,"Color-Depth":v.colorDepth,Browser:navigator.appCodeName,"Browser-Name":navigator.appName,"Browser-Version":navigator.appVersion,Platform:navigator.platform},Client:{Name:"raygun-js",Version:"2.1.0"},UserCustomData:u,Tags:d.tags,Request:{Url:[location.protocol,"//",location.host,location.pathname,location.hash].join(""),QueryString:f,Headers:{"User-Agent":navigator.userAgent,Referer:document.referrer,Host:document.domain}},Version:y||"Not supplied"}};if(D.Details.User=x,"all"===V&&(D=r(D)),"function"==typeof B&&(Y.log("Raygun4JS: calling custom grouping key"),D.Details.GroupingKey=B(D,b,d)),"function"==typeof A){var E=A(D);E&&t(E)}else t(D)}function t(a){if(f()){Y.log("Sending exception data to Raygun:",a);var b=S+"/entries?apikey="+encodeURIComponent(w);v(b,JSON.stringify(a))}}function u(b,c){var d;return d=new a.XMLHttpRequest,"withCredentials"in d?d.open(b,c,!0):a.XDomainRequest&&(G&&(c=c.slice(6)),d=new a.XDomainRequest,d.open(b,c)),d.timeout=1e4,d}function v(b,c){var d=u("POST",b,c);return"withCredentials"in d?(d.onreadystatechange=function(){4===d.readyState&&(202===d.status?o():J&&403!==d.status&&400!==d.status&&429!==d.status&&m(b,c))},d.onload=function(){Y.log("posted to Raygun")}):a.XDomainRequest&&(d.ontimeout=function(){J&&(Y.log("Raygun: saved locally"),m(b,c))},d.onload=function(){Y.log("posted to Raygun"),o()}),d.onerror=function(){Y.log("failed to post to Raygun")},d?void d.send(c):void Y.log("CORS not supported")}var w,x,y,z,A,B,C,D=TraceKit,E=a.Raygun,F=!1,G=!1,H=!1,I=!1,J=!1,K=!1,L=!1,M=!1,N=!0,O=!1,P={},Q=[],R=[],S="https://api.raygun.io",T=null,U=null,V="customData",W=null,X={noConflict:function(){return a.Raygun=E,X},constructNewRaygun:function(){var b=a.raygunFactory(a,a.jQuery);return a.raygunJsUrlFactory(a,b),b},init:function(d,e,f){if(w=d,D.remoteFetching=!1,f&&(P=f),b&&(C=b(document)),e&&(G=e.allowInsecureSubmissions||!1,H=e.ignoreAjaxAbort||!1,I=e.ignoreAjaxError||!1,L=e.disableAnonymousUserTracking||!1,M=e.disableErrorTracking||!1,N=e.disablePulse===c?!0:e.disablePulse,T=e.excludedHostnames||!1,U=e.excludedUserAgents||!1,e.apiUrl&&(S=e.apiUrl),"undefined"!=typeof e.wrapAsynchronousCallbacks&&(O=e.wrapAsynchronousCallbacks),e.debugMode&&(F=e.debugMode),e.ignore3rdPartyErrors&&(K=!0),e.apiEndpoint&&(S=e.apiEndpoint)),p(),X.RealUserMonitoring!==c&&!N){var g=function(){W=new X.RealUserMonitoring(w,S,v,x,y,T,U,F),W.attach()};e&&"onLoad"===e.from?g():a.addEventListener?a.addEventListener("load",g):a.attachEvent("onload",g)}return o(),X},withCustomData:function(a){return P=a,X},withTags:function(a){return Q=a,X},attach:function(){return!f()||M?X:(a.RaygunObject&&a[a.RaygunObject]&&a[a.RaygunObject].q&&(a.onerror=null),D.report.subscribe(s),O&&D.extendToAsynchronousCallbacks(),C&&C.ajaxError&&!I&&C.ajaxError(e),X)},detach:function(){return D.report.unsubscribe(s),C&&C.unbind("ajaxError",e),X},send:function(a,b,c){if(M)return Y.log("Error not sent due to disabled error tracking"),X;try{s(D.computeStackTrace(a),{customData:"function"==typeof P?g(P(),b):g(P,b),tags:h(Q,c)})}catch(d){if(a!==d)throw d}return X},setUser:function(a,b,d,e,f,g){return x={Identifier:a},"boolean"==typeof b&&(x.IsAnonymous=b),d&&(x.Email=d),e&&(x.FullName=e),f&&(x.FirstName=f),g&&(x.UUID=g),W!==c&&null!==W&&W.setUser(x),X},resetAnonymousUser:function(){Y.clearCookie("raygun4js-userid")},setVersion:function(a){return y=a,X},saveIfOffline:function(a){return"undefined"!=typeof a&&"boolean"==typeof a&&(J=a),X},filterSensitiveData:function(a){return z=a,X},setFilterScope:function(a){return("customData"===a||"all"===a)&&(V=a),X},whitelistCrossOriginDomains:function(a){return R=a,X},onBeforeSend:function(a){return A=a,X},groupingKey:function(a){return B=a,X},endSession:function(){X.RealUserMonitoring!==c&&W!==c&&W.endSession()}},Y=X._private=X._private||{},Z=X._seal=X._seal||function(){delete X._private,delete X._seal,delete X._unseal},$=X._unseal=X._unseal||function(){X._private=Y,X._seal=Z,X._unseal=$};return Y.getUuid=function(){function a(a){var b=(Math.random().toString(16)+"000000000").substr(2,8);return a?"-"+b.substr(0,4)+"-"+b.substr(4,4):b}return a()+a(!0)+a(!0)+a()},Y.createCookie=function(a,b,c){var d;if(c){var e=new Date;e.setTime(e.getTime()+60*c*60*1e3),d="; expires="+e.toGMTString()}else d="";document.cookie=a+"="+b+d+"; path=/"},Y.readCookie=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},Y.clearCookie=function(a){Y.createCookie(a,"",-1)},Y.log=function(b,c){a.console&&a.console.log&&F&&(a.console.log(b),c&&a.console.log(c))},a.Raygun||(a.Raygun=X),Date.prototype.toISOString||!function(){function a(a){var b=String(a);return 1===b.length&&(b="0"+b),b}Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}(),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),X};raygunFactory(window,window.jQuery);var raygunRumFactory=function(a,b,c){c.RealUserMonitoring=function(b,c,d,e,f,g,h,i){function j(a){var b=encodeURIComponent(a).match(/%[89ABab]/g);return a.length+(b?b.length:0)}function k(a){var b=n(z.cookieName),c=null===b,d="string"==typeof exisitingCookie&&b.length>0&&-1===b.indexOf("timestamp"),e=null;if(!c&&!d){var f=new Date(m(b,"timestamp")),g=new Date(new Date-18e5);e=g>f}if(c||d||e)z.sessionId=x(32),l(z.cookieName,z.sessionId),a(!0);else{var h=n(z.cookieName),i=m(h,"id");"undefined"===i?(z.sessionId=x(32),l(z.cookieName,z.sessionId),a(!0)):(z.sessionId=i,a(!1))}}function l(a,b,c){var d,e;if(c){var f=new Date;f.setTime(f.getTime()+60*c*60*1e3),d="; expires="+f.toGMTString()}else d="";e=(new Date).toISOString(),document.cookie=a+"=id|"+b+"&timestamp|"+e+d+"; path=/"}function m(a,b){var c=a.split(/[|&]/);return"id"===b?c[1]:"timestamp"===b?c[3]:void 0}function n(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}function o(){var a,b=n(z.cookieName);if(b){var c=new Date(m(b,"timestamp")),d=new Date(new Date-18e5);a=d>c}else a=!0;a&&(z.sessionId=x(32)),l(z.cookieName,z.sessionId),a&&z.pageLoaded(!0)}function p(a){return Math.min(a,3e5)}function q(a){for(var b in a)isNaN(a[b])&&"string"!=typeof a[b]&&(a[b]=0);return a}function r(a,b){var c={du:a.duration,t:"p"};return c.a=b+a.fetchStart,a.domainLookupStart&&a.domainLookupStart>0&&(c.b=b+a.domainLookupStart-c.a),a.domainLookupEnd&&a.domainLookupEnd>0&&(c.c=b+a.domainLookupEnd-c.a),a.connectStart&&a.connectStart>0&&(c.d=b+a.connectStart-c.a),a.connectEnd&&a.connectEnd>0&&(c.e=b+a.connectEnd-c.a),a.responseStart&&a.responseStart>0&&(c.f=b+a.responseStart-c.a),a.responseEnd&&a.responseEnd>0&&(c.g=b+a.responseEnd-c.a),a.domLoading&&a.domLoading>0&&(c.h=b+a.domLoading-c.a),a.domInteractive&&a.domInteractive>0&&(c.i=b+a.domInteractive-c.a),a.domContentLoadedEventEnd&&a.domContentLoadedEventEnd>0&&(c.j=b+a.domContentLoadedEventEnd-c.a),a.domComplete&&a.domComplete>0&&(c.k=p(b+a.domComplete-c.a)),a.loadEventStart&&a.loadEventStart>0&&(c.l=b+a.loadEventStart-c.a),a.loadEventEnd&&a.loadEventEnd>0&&(c.m=b+a.loadEventEnd-c.a),a.secureConnectionStart&&a.secureConnectionStart>0&&(c.n=b+(a.secureConnectionStart-a.connectStart)-c.a),c=q(c)}function s(a,b){var c={du:p(a.duration).toFixed(2),t:"xmlhttprequest"===a.initiatorType?"x":0===a.duration?"e":"c",a:(b+a.fetchStart).toFixed(2)};return a.domainLookupStart&&a.domainLookupStart>0&&(c.b=b+a.domainLookupStart-c.a),a.domainLookupEnd&&a.domainLookupEnd>0&&(c.c=b+a.domainLookupEnd-c.a),a.connectStart&&a.connectStart>0&&(c.d=b+a.connectStart-c.a),a.connectEnd&&a.connectEnd>0&&(c.e=b+a.connectEnd-c.a),a.responseStart&&a.responseStart>0&&(c.f=b+a.responseStart-c.a),a.responseEnd&&a.responseEnd>0&&(c.g=b+a.responseEnd-c.a),a.secureConnectionStart&&a.secureConnectionStart>0&&(c.n=b+(a.secureConnectionStart-a.connectStart)-c.a),c=q(c)}function t(){return{url:a.location.protocol+"//"+a.location.host+a.location.pathname,userAgent:navigator.userAgent,timing:r(a.performance.timing,0),size:0}}function u(b){return{url:b.name.split("?")[0],timing:s(b,a.performance.timing.navigationStart),size:b.decodedBodySize||0}}function v(b){if(void 0!==a.performance&&a.performance.getEntries)try{for(var c=a.performance.getEntries(),d=z.offset;d<c.length;d++){var e=c[d].name.split("?")[0];0!==e.indexOf(z.apiUrl)&&(e.indexOf("favicon.ico")>0||0!==e.indexOf("about:blank")&&("j"!==e[0]||1!==e.indexOf("avascript:"))&&0!==e.indexOf("chrome-extension://")&&0!==e.indexOf("res://")&&0!==e.indexOf("file://")&&b.push(u(c[d])))}z.offset=c.length}catch(f){}}function w(){if(void 0===a.performance||isNaN(a.performance.timing.fetchStart))return null;var b=[];return b.push(t()),v(b),b}function x(a){return Math.round(Math.pow(36,a+1)-Math.random()*Math.pow(36,a)).toString(36).slice(1)}function y(b,c){a.console&&a.console.log&&z.debugMode&&(a.console.log(b),c&&a.console.log(c))}var z=this,A={};this.cookieName="raygun4js-sid",this.apiKey=b,this.apiUrl=c,this.debugMode=i,this.excludedHostNames=g,this.excludedUserAgents=h,this.makePostCorsRequest=function(b,c){if(z.excludedUserAgents instanceof Array)for(var e in z.excludedUserAgents)if(z.excludedUserAgents.hasOwnProperty(e)&&navigator.userAgent.match(z.excludedUserAgents[e]))return void(z.debugMode&&y("Raygun4JS: cancelling send as error originates from an excluded user agent"));if(z.excludedHostNames instanceof Array)for(var f in z.excludedHostNames)if(z.excludedHostNames.hasOwnProperty(f)&&a.location.hostname&&a.location.hostname.match(z.excludedHostNames[f]))return void y("Raygun4JS: cancelling send as error originates from an excluded hostname");d(b,c)},this.sessionId=null,this.user=e,this.version=f,this.heartBeatInterval=null,this.offset=0,this.attach=function(){k(function(a){z.pageLoaded(a)}),a.onbeforeunload=function(){var a=[];if(v(a),a.length>0){var b={eventData:[{sessionId:z.sessionId,timestamp:(new Date).toISOString(),type:"web_request_timing",user:z.user,version:z.version||"Not supplied",device:navigator.userAgent,data:JSON.stringify(a)}]};z.makePostCorsRequest(z.apiUrl+"/events?apikey="+encodeURIComponent(z.apiKey),JSON.stringify(b))}};var b=function(){this.updateCookieTimestamp()}.bind(A),c=function(){"visible"===document.visibilityState&&this.updateCookieTimestamp()}.bind(A);a.addEventListener?(a.addEventListener("click",b),document.addEventListener("visibilitychange",c)):a.attachEvent&&document.attachEvent("onclick",b)},this.pageLoaded=function(a){if(a){var b={eventData:[{sessionId:z.sessionId,timestamp:(new Date).toISOString(),type:"session_start",user:z.user,version:z.version||"Not supplied",device:navigator.userAgent}]};z.makePostCorsRequest(z.apiUrl+"/events?apikey="+encodeURIComponent(z.apiKey),JSON.stringify(b))}z.sendPerformance(),z.heartBeat()},this.setUser=function(a){z.user=a},this.endSession=function(){var a={eventData:[{sessionId:z.sessionId,timestamp:(new Date).toISOString(),type:"session_end"}]};z.makePostCorsRequest(z.apiUrl+"/events?apikey="+encodeURIComponent(z.apiKey),JSON.stringify(a))},this.heartBeat=function(){z.heartBeatInterval=setInterval(function(){var a,b=[];if(v(b),b.length>0){var c=JSON.stringify(b);j(c)<128e3&&(a={eventData:[{sessionId:z.sessionId,timestamp:(new Date).toISOString(),type:"web_request_timing",user:z.user,version:z.version||"Not supplied",device:navigator.userAgent,data:c}]})}void 0!==a&&z.makePostCorsRequest(z.apiUrl+"/events?apikey="+encodeURIComponent(z.apiKey),JSON.stringify(a))},3e4)},this.sendPerformance=function(){var a=w();if(null!==a){var b={eventData:[{sessionId:z.sessionId,timestamp:(new Date).toISOString(),type:"web_request_timing",user:z.user,version:z.version||"Not supplied",device:navigator.userAgent,data:JSON.stringify(a)}]};z.makePostCorsRequest(z.apiUrl+"/events?apikey="+encodeURIComponent(z.apiKey),JSON.stringify(b))}},A.updateCookieTimestamp=o}};raygunRumFactory(window,window.jQuery,window.Raygun);var raygunJsUrlFactory=function(a,b){b._private.parseUrl=function(b,c){function d(a){return!isNaN(parseFloat(a))&&isFinite(a)}return function(b,c){var e=c||a.location.toString();if(!b)return e;b=b.toString(),"//"===e.substring(0,2)?e="http:"+e:1===e.split("://").length&&(e="http://"+e),c=e.split("/");var f={auth:""},g=c[2].split("@");1===g.length?g=g[0].split(":"):(f.auth=g[0],g=g[1].split(":")),f.protocol=c[0],f.hostname=g[0],f.port=g[1]||("https"===f.protocol.split(":")[0].toLowerCase()?"443":"80"),f.pathname=(c.length>3?"/":"")+c.slice(3,c.length).join("/").split("?")[0].split("#")[0];var h=f.pathname;"/"===h.charAt(h.length-1)&&(h=h.substring(0,h.length-1));var i=f.hostname,j=i.split("."),k=h.split("/");if("hostname"===b)return i;if("domain"===b)return/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(i)?i:j.slice(-2).join(".");if("sub"===b)return j.slice(0,j.length-2).join(".");if("port"===b)return f.port;if("protocol"===b)return f.protocol.split(":")[0];if("auth"===b)return f.auth;if("user"===b)return f.auth.split(":")[0];if("pass"===b)return f.auth.split(":")[1]||"";if("path"===b)return f.pathname;if("."===b.charAt(0)){if(b=b.substring(1),d(b))return b=parseInt(b,10),j[0>b?j.length+b:b-1]||""}else{if(d(b))return b=parseInt(b,10),k[0>b?k.length+b:b]||"";if("file"===b)return k.slice(-1)[0];if("filename"===b)return k.slice(-1)[0].split(".")[0];if("fileext"===b)return k.slice(-1)[0].split(".")[1]||"";if("?"===b.charAt(0)||"#"===b.charAt(0)){var l=e,m=null;if("?"===b.charAt(0)?l=(l.split("?")[1]||"").split("#")[0]:"#"===b.charAt(0)&&(l=l.split("#")[1]||""),!b.charAt(1))return l;b=b.substring(1),l=l.split("&");for(var n=0,o=l.length;o>n;n++)if(m=l[n].split("="),m[0]===b)return m[1]||"";return null}}return""}(b,c)}};raygunJsUrlFactory(window,window.Raygun),window.Raygun._seal(),function(a,b){if(a.RaygunObject&&a[a.RaygunObject]){var c,d,e,f,g,h=a[a.RaygunObject].o;c=a[a.RaygunObject].q;var i=function(a){var c=a[0],h=a[1];if(c&&h)switch(c){case"apiKey":d=h;break;case"options":e=h;break;case"attach":case"enableCrashReporting":f=h;break;case"enablePulse":g=h;break;case"setUser":b.setUser(h.identifier,h.isAnonymous,h.email,h.fullName,h.firstName,h.uuid);break;case"onBeforeSend":b.onBeforeSend(h);break;case"withCustomData":b.withCustomData(h);break;case"withTags":b.withTags(h);break;case"setVersion":b.setVersion(h);break;case"filterSensitiveData":b.filterSensitiveData(h);break;case"setFilterScope":b.setFilterScope(h);break;case"whitelistCrossOriginDomains":b.whitelistCrossOriginDomains(h);break;case"saveIfOffline":"boolean"==typeof h&&b.saveIfOffline(h);break;case"groupingKey":b.groupingKey(h)}};for(var j in h){var k=h[j];k&&i(k)}var l=function(){if(d&&(e||(e={}),g&&(e.disablePulse=!1),e.from="onLoad",b.init(d,e,null)),f){b.attach(),c=a[a.RaygunObject].q;for(var h in c)b.send(c[h].e,{handler:"From Raygun4JS snippet global error handler"})}else a.onerror=null};"complete"===document.readyState?l():a.addEventListener?a.addEventListener("load",l):a.attachEvent("onload",l),a[a.RaygunObject]=function(){i(arguments)},a[a.RaygunObject].q=c}}(window,window.Raygun);
//# sourceMappingURL=raygun.min.js.map