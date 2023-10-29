"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8557],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=i,m=c["".concat(a,".").concat(f)]||c[f]||g[f]||o;return t?r.createElement(m,u(u({ref:n},s),{},{components:t})):r.createElement(m,u({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,u=new Array(o);u[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[c]="string"==typeof e?e:i,u[1]=l;for(var p=2;p<o;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(1163),i=(t(9496),t(9613));const o={},u="Overview",l={unversionedId:"plugins/writing-plugins/overview",id:"plugins/writing-plugins/overview",title:"Overview",description:"To use a Rust plugin, configuring plugins in farm.config.ts.",source:"@site/docs/plugins/writing-plugins/overview.md",sourceDirName:"plugins/writing-plugins",slug:"/plugins/writing-plugins/overview",permalink:"/docs/plugins/writing-plugins/overview",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/writing-plugins/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"Community Plugins",permalink:"/docs/plugins/community-plugins"},next:{title:"Rust Plugins",permalink:"/docs/plugins/writing-plugins/rust-plugin"}},a={},p=[],s={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"To use a Rust plugin, configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"farm.config.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineFarmConfig } from '@farmfe/core/dist/config';\n\ndefineFarmConfig({\n  // ...\n  plugins: [\n    { /*..*/ }, // Js plugin, a object with hook defined\n    '@farmfe/plugin-react', // rust plugin package name\n  ]\n})\n\n")),(0,i.kt)("p",null,"Farm support both rust plugins and js plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/plugins/rust-plugin"},"Rust Plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/plugins/js-plugin"},"Js plugin"))))}g.isMDXComponent=!0}}]);