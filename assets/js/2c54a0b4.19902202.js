"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[3696],{9613:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(9496);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),u=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(a.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=i,m=c["".concat(a,".").concat(f)]||c[f]||g[f]||o;return r?t.createElement(m,s(s({ref:n},p),{},{components:r})):t.createElement(m,s({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7797:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=r(1163),i=(r(9496),r(9613));const o={},s="Js Plugins",l={unversionedId:"plugins/writing-plugins/js-plugin",id:"plugins/writing-plugins/js-plugin",title:"Js Plugins",description:"A Js plugin is a plain Javascript object.",source:"@site/docs/plugins/writing-plugins/js-plugin.md",sourceDirName:"plugins/writing-plugins",slug:"/plugins/writing-plugins/js-plugin",permalink:"/docs/plugins/writing-plugins/js-plugin",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/writing-plugins/js-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"Rust Plugins",permalink:"/docs/plugins/writing-plugins/rust-plugin"}},a={},u=[],p={toc:u},c="wrapper";function g(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"js-plugins"},"Js Plugins"),(0,i.kt)("p",null,"A Js plugin is a plain Javascript object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// farm.config.ts\nimport { UserConfig } from '@farmfe/core';\n\nexport default <UserConfig>{\n  // ...\n  plugins: [\n    // a plugin object\n    {\n      name: 'my-resolve-plugin',\n      priority: 1000, // the priority of this plugin, the larger the value, the earlier the execution. Normally internal plugins is 100.\n      resolve: {\n        filters: { // Only execute the hook when following conditions satisfied\n          sources: ['\\\\./index.ts'], // a regex array\n          importers: ['None'],\n        },\n        executor: async (param) => { // this hook executor\n          console.log(param); // resolve params\n          // return the resolve result\n          return {\n            resolvedPath: 'virtual:my-module',\n            query: {},\n            sideEffects: false,\n            external: false,\n          };\n        },\n      },\n    },\n    // load, transform are similar to resolve, refer to their types\n  ],\n};\n")),(0,i.kt)("p",null,"If you want to pass args to your plugins\uff0cyou can use a closure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// my-resolve-plugin.ts\nexport function myResolvePlugin(options: Options) {\n  const { xx } = options\n\n  return {\n    name: 'my-resolve-plugin',\n    resolve: {\n      // ...\n    }\n  };\n}\n\n// farm.config.ts\nimport { defineFarmConfig } from '@farmfe/core/dist/config';\nimport { myResolvePlugin } from './myResolvePlugin.ts';\n\nexport default defineFarmConfig({\n  // ...\n  plugins: [myResolvePlugin({ xx:'xx' })],\n});\n")))}g.isMDXComponent=!0}}]);