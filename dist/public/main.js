!function(){var t={637:function(t){t.exports={footer:"PsTLU"}},23:function(t){t.exports={corner:"_306MB",link:"_222UC",octoArm:"_1W8MA","octocat-wave":"_1SnV-"}},954:function(t){t.exports={header:"_1l6ve",type:"PnrWH"}},14:function(t){t.exports={menubar:"_3zRib",success:"_3zKm-"}},86:function(t){t.exports={left:"_39cf6",right:"_1UspK"}},126:function(t){t.exports={gitColor:"_13D9u",webColor:"_2J_Pw",title:"_18Za6"}},834:function(t){t.exports={box:"_2-RUO",rightText:"_1qEkE"}},722:function(t){t.exports={updateTime:"_39Ujn"}},818:function(t){t.exports={main:"SuvIl"}},614:function(t){
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
var e;e=function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),r=n(1),i=n(3),o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r.initializer.load(this,n,e),this.begin()}return s(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=i.htmlParser.typeHtmlChars(t,e,n);var s=0,o=t.substr(e);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;a+=(o=/\d+/.exec(o)[0]).length,s=parseInt(o),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===o.charAt(0)){for(;"`"!==t.substr(e+r).charAt(0)&&(r++,!(e+r>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+r),l=t.substring(e+r+1);t=u+c+l,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var s=t.substr(0,e);this.replaceText(s),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=i.htmlParser.backSpaceHtmlChars(t,e,n);var s=t.substr(0,e);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];r&&s===r.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),s)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=o,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=n(2),a=(s=o)&&s.__esModule?s:{default:s},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=r({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var s=Array.prototype.slice.apply(t.stringsElement.children),i=s.length;if(i)for(var o=0;o<i;o+=1){var u=s[o];t.strings.push(u.innerHTML.trim())}}for(var o in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var s="";t.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=s,document.body.appendChild(n))}}}]),t}();e.default=u;var c=new u;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if("<"===s||"&"===s){var r="";for(r="<"===s?">":";";t.substr(e+1).charAt(0)!==r&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if(">"===s||";"===s){var r="";for(r=">"===s?"<":"&";t.substr(e-1).charAt(0)!==r&&!(--e<0););e--}return e}}]),t}();e.default=s;var r=new s;e.htmlParser=r}])},t.exports=e()},306:function(t){"use strict";t.exports=JSON.parse('{"name":"javascript-fun","version":"1.4.3","description":"source code generator for javascript.fun","engines":{"node":">=12.14.1"},"scripts":{"daily":"yarn collect && yarn render && yarn cp","lint":"eslint ./webpack ./src","test":"jest --coverage","dev":"webpack --config ./webpack/develop.js","build":"webpack --config ./webpack/production.js","web":"node ./dist/node/server.js","render":"node ./dist/node/render.js","collect":"node -r dotenv/config dist/node/collect.js","cp":". ./cp.sh"},"repository":"git+https://github.com/im6/javascript-fun.git","author":"im6","license":"ISC","bugs":{"url":"https://github.com/im6/javascript-fun/issues"},"homepage":"https://github.com/im6/javascript-fun#readme","dependencies":{"@babel/core":"^7.12.9","@babel/preset-env":"^7.12.7","@babel/preset-react":"^7.12.7","@testing-library/react":"^11.2.2","async":"^3.2.0","autoprefixer":"^10.1.0","babel-loader":"^8.2.2","cheerio":"^1.0.0-rc.3","classnames":"^2.2.6","clean-webpack-plugin":"^3.0.0","css-loader":"^5.0.1","dotenv":"^8.2.0","eslint":"^7.15.0","eslint-config-airbnb":"^18.2.1","eslint-config-prettier":"^7.0.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest":"^24.1.3","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-prettier":"^3.2.0","eslint-plugin-react":"^7.21.5","express":"^4.17.1","jest":"^26.6.3","less":"^3.12.2","less-loader":"^7.1.0","lodash.groupby":"^4.6.0","lodash.orderby":"^4.6.0","mini-css-extract-plugin":"^1.3.2","mysql":"^2.18.1","node-fetch":"^2.6.1","numeral":"^2.0.6","optimize-css-assets-webpack-plugin":"^5.0.4","postcss":"^8.2.0","postcss-loader":"^4.1.0","prettier":"^2.2.1","progress":"^2.0.3","purecss":"^2.0.3","react":"^17.0.1","react-dom":"^17.0.1","typed.js":"^2.0.11","webpack":"^5.10.0","webpack-cli":"^4.2.0","webpack-node-externals":"^2.5.2"},"browserslist":["defaults","cover 99.5%"],"prettier":{"endOfLine":"auto","trailingComma":"es5","tabWidth":2,"semi":true,"singleQuote":true},"eslintConfig":{"extends":["airbnb","prettier"],"plugins":["react","jsx-a11y","import","prettier","jest"],"env":{"browser":true,"jest/globals":true}},"babel":{"presets":["@babel/preset-env",["@babel/preset-react",{"runtime":"automatic"}]]},"jest":{"verbose":false,"clearMocks":true,"moduleDirectories":["node_modules"],"moduleNameMapper":{"\\\\.(css|less)$":"<rootDir>/src/testing/styleMock.js"},"coverageDirectory":"coverage","coverageThreshold":{"global":{"branches":100,"functions":100,"lines":100,"statements":-10}}}}')}},e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=n(614),e=n.n(t),s=(n(14),n(637),n(23),n(86),n(126),n(818),n(306)),r=s.name,i=s.author,o=s.version,a="".concat(i,"/").concat(r),u="dist/public",c=("https://cdn.jsdelivr.net/gh/".concat(a,"@v").concat(o,"/").concat(u),"//dkny.oss-cn-hangzhou.aliyuncs.com/1/icons"),l=("".concat(c,"/deno.svg"),"".concat(c,"/deno-fav.png"),"".concat("https://github.com","/").concat(a)),p=[((new Date).getFullYear()+((new Date).getMonth()<11?0:1)).toString(),"Developer","Designer","Architect","Beginner","Fun!"],h=[["#7bd0ff","#F38181"],["#e8ec8b","#57cc9d"],["#EAFFD0","#a7e5e4"],["#ffb077","#b0cadb"]],f=([{to:"/",img:"vue.svg",title:"Front End",alt:"framework",asset:"main"},{to:"/node/",img:"deno.svg",title:"Node.js",alt:"node",asset:"main"},{to:"/library/",img:"vscode.svg",title:"Miscellaneous",alt:"library",asset:"main"},{to:"/site/",img:"javascript.svg",title:"Website",alt:"site",asset:"site"},{to:"".concat(l,"/issues/5"),img:"fa-plus-wht.svg",title:"Submit Github Link",alt:"add"}].reduce((function(t,e,n){return t[e.to]=e,t[e.to].link=n+1,t}),{}),"".concat(u,"/main.css"),"".concat(u,"/site.css"),n(954));function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],s=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(s=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);s=!0);}catch(t){r=!0,i=t}finally{try{s||null==a.return||a.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}var g=document.getElementsByClassName(f.type),m=document.getElementsByClassName(f.header);if(g.length&&m.length){var v=g[0],b=m[0].children[1],k=h.length;v.innerText="",new(e())(".".concat(f.type),{strings:p,typeSpeed:70,backSpeed:40,smartBackspace:!1,loop:!0,autoInsertCss:!0,preStringTyped:function(t){var e=h[t%k],n=d(document.getElementsByClassName("typed-cursor"),1)[0];v.style.color=e[0],n.style.color=e[0],b.style.color=e[1]}})}else console.error("render error.");n(834);var C,w,S,P=n(722),T=(C=function(){!function(){for(var t=document.getElementsByTagName("img"),e=t.length,n=0;n<e;n+=1){var s=t[n],r=s.dataset.i;r&&(s.src=s.src.replace("github2.svg",r),s.removeAttribute("data-i"))}}(),window.removeEventListener("scroll",T)},w=500,function(){var t=this,e=function(){S=null},n=Boolean(!S);clearTimeout(S),S=setTimeout(e,w);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];n&&C.apply(t,r)});window.addEventListener("scroll",T),document.getElementsByClassName(P.updateTime)[0].innerText="Last Update:  ".concat((new Date).toDateString())}()}();