"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{646:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},901:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext(null)},1193:(e,t)=>{function r(e){var t;let{config:r,src:n,width:o,quality:i}=e,a=i||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+o+"&q="+a+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},1469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return l}});let n=r(8229),o=r(8883),i=r(3063),a=n._(r(1193));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/semantic/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=i.Image},2138:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},2464:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext({})},2757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return l},urlObjectKeys:function(){return a}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",a=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(n.urlQueryToSearchParams(u)));let d=e.search||u&&"?"+u||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),""+i+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(d=d.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return i(e)}},3063:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(8229),o=r(6966),i=r(5155),a=o._(r(2115)),l=n._(r(7650)),u=n._(r(5564)),s=r(8883),d=r(5840),c=r(6752);r(3230);let f=r(901),p=n._(r(1193)),h=r(6654),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/semantic/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,o,i,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:u,decoding:s,className:d,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:b,fill:v,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:P,setShowAltText:j,sizesInput:O,onLoad:x,onError:E,...C}=e,S=(0,a.useCallback)(e=>{e&&(E&&(e.src=e.src),e.complete&&m(e,p,_,w,P,b,O))},[r,p,_,w,P,E,b,O]),k=(0,h.useMergedRef)(t,S);return(0,i.jsx)("img",{...C,...y(f),loading:g,width:u,height:l,decoding:s,"data-nimg":v?"fill":"1",className:d,style:c,sizes:o,srcSet:n,src:r,ref:k,onLoad:e=>{m(e.currentTarget,p,_,w,P,b,O)},onError:e=>{j(!0),"empty"!==p&&P(!0),E&&E(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,i.jsx)(u.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),o=(0,a.useMemo)(()=>{var e;let t=g||n||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),o=t.deviceSizes.sort((e,t)=>e-t),i=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:o,qualities:i}},[n]),{onLoad:l,onLoadingComplete:u}=e,h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let m=(0,a.useRef)(u);(0,a.useEffect)(()=>{m.current=u},[u]);let[y,_]=(0,a.useState)(!1),[w,P]=(0,a.useState)(!1),{props:j,meta:O}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:w});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...j,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:_,setShowAltText:P,sizesInput:e.sizes,ref:t}),O.priority?(0,i.jsx)(v,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4213:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},4498:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},4869:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]])},5029:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(2115),o=n.useLayoutEffect,i=n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5100:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n?40*n:t,u=o?40*o:r,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5564:(e,t,r)=>{var n=r(1890);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return f}});let o=r(8229),i=r(6966),a=r(5155),l=i._(r(2115)),u=o._(r(5029)),s=r(2464),d=r(2830),c=r(7544);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(3230);let h=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let o=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:o})})}let m=function(e){let{children:t}=e,r=(0,l.useContext)(s.AmpStateContext),n=(0,l.useContext)(d.HeadManagerContext);return(0,a.jsx)(u.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5840:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},6654:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6752:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=r(8229)._(r(2115)),o=r(5840),i=n.default.createContext(o.imageConfigDefault)},6766:(e,t,r)=>{r.d(t,{default:()=>o.a});var n=r(1469),o=r.n(n)},6767:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]])},6874:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8229),o=r(5155),i=n._(r(2115)),a=r(2757),l=r(5227),u=r(9818),s=r(6654),d=r(9991),c=r(5929);r(3230);let f=r(4930);function p(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let h=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:g,prefetch:m=null,passHref:y,replace:b,shallow:v,scroll:_,onClick:w,onMouseEnter:P,onTouchStart:j,legacyBehavior:O=!1,...x}=e;r=g,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let E=i.default.useContext(l.AppRouterContext),C=!1!==m,S=null===m?u.PrefetchKind.AUTO:u.PrefetchKind.FULL,{href:k,as:M}=i.default.useMemo(()=>{let e=p(a);return{href:e,as:h?p(h):e}},[a,h]);O&&(n=i.default.Children.only(r));let A=O?n&&"object"==typeof n&&n.ref:t,R=i.default.useCallback(e=>(C&&null!==E&&(0,f.mountLinkInstance)(e,k,E,S),()=>{(0,f.unmountLinkInstance)(e)}),[C,k,E,S]),z={ref:(0,s.useMergedRef)(R,A),onClick(e){O||"function"!=typeof w||w(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),E&&!e.defaultPrevented&&!function(e,t,r,n,o,a,l){let{nodeName:u}=e.currentTarget;!("A"===u.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),i.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,E,k,M,b,v,_)},onMouseEnter(e){O||"function"!=typeof P||P(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),E&&C&&(0,f.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){O||"function"!=typeof j||j(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),E&&C&&(0,f.onNavigationIntent)(e.currentTarget)}};return(0,d.isAbsoluteUrl)(M)?z.href=M:O&&!y&&("a"!==n.type||"href"in n.props)||(z.href=(0,c.addBasePath)(M)),O?i.default.cloneElement(n,z):(0,o.jsx)("a",{...x,...z,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7544:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},7580:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},8859:(e,t)=>{function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},8883:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(3230);let n=r(5100),o=r(5840);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r,l;let u,s,d,{src:c,sizes:f,unoptimized:p=!1,priority:h=!1,loading:g,className:m,quality:y,width:b,height:v,fill:_=!1,style:w,overrideSrc:P,onLoad:j,onLoadingComplete:O,placeholder:x="empty",blurDataURL:E,fetchPriority:C,decoding:S="async",layout:k,objectFit:M,objectPosition:A,lazyBoundary:R,lazyRoot:z,...I}=e,{imgConf:N,showAltText:T,blurComplete:L,defaultLoader:U}=t,D=N||o.imageConfigDefault;if("allSizes"in D)u=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t),n=null==(r=D.qualities)?void 0:r.sort((e,t)=>e-t);u={...D,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===U)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=I.loader||U;delete I.loader,delete I.srcSet;let B="__next_img_default"in F;if(B){if("custom"===u.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(k){"fill"===k&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!f&&(f=t)}let q="",W=a(b),G=a(v);if((l=c)&&"object"==typeof l&&(i(l)||void 0!==l.src)){let e=i(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(s=e.blurWidth,d=e.blurHeight,E=E||e.blurDataURL,q=e.src,!_){if(W||G){if(W&&!G){let t=W/e.width;G=Math.round(e.height*t)}else if(!W&&G){let t=G/e.height;W=Math.round(e.width*t)}}else W=e.width,G=e.height}}let V=!h&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:q)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,V=!1),u.unoptimized&&(p=!0),B&&!u.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let K=a(y),X=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:A}:{},T?{}:{color:"transparent"},w),H=L||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:W,heightInt:G,blurWidth:s,blurHeight:d,blurDataURL:E||"",objectFit:X.objectFit})+'")':'url("'+x+'")',$=H?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),d=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:i,width:u[d]})}}({config:u,src:c,unoptimized:p,width:W,quality:K,sizes:f,loader:F});return{props:{...I,loading:V?"lazy":g,fetchPriority:C,width:W,height:G,decoding:S,className:m,style:{...X,...$},sizes:Z.sizes,srcSet:Z.srcSet,src:P||Z.src},meta:{unoptimized:p,priority:h,placeholder:x,fill:_}}}},9621:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]])},9946:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:s="",children:d,iconNode:c,...f}=e;return(0,n.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:r,strokeWidth:u?24*Number(l)/Number(o):l,className:i("lucide",s),...f},[...c.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),u=(e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:u,...s}=r;return(0,n.createElement)(l,{ref:a,iconNode:t,className:i("lucide-".concat(o(e)),u),...s})});return r.displayName="".concat(e),r}},9991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return m},SP:function(){return f},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return l},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return d},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function d(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Object.defineProperty(Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let f="undefined"!=typeof performance,p=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);