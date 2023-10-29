"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[94],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var i=t(9496);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,u=function(e,n){if(null==e)return{};var t,i,u={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var p=i.createContext({}),o=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=o(e.components);return i.createElement(p.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,u=e.mdxType,r=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=o(t),c=u,f=m["".concat(p,".").concat(c)]||m[c]||g[c]||r;return t?i.createElement(f,l(l({ref:n},s),{},{components:t})):i.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var r=t.length,l=new Array(r);l[0]=c;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[m]="string"==typeof e?e:u,l[1]=a;for(var o=2;o<r;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=t(1163),u=(t(9496),t(9613));const r={},l="\u793e\u533a\u63d2\u4ef6",a={unversionedId:"plugins/community-plugins",id:"plugins/community-plugins",title:"\u793e\u533a\u63d2\u4ef6",description:"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u201cVite/Rollup\u201d\u63d2\u4ef6\u3002 \u6240\u4ee5 Vite/Rollup \u6216\u8005 unplugin \u63d2\u4ef6\u53ef\u4ee5\u76f4\u63a5\u5728 Farm \u4e2d\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/community-plugins.md",sourceDirName:"plugins",slug:"/plugins/community-plugins",permalink:"/zh/docs/plugins/community-plugins",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/community-plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-dts",permalink:"/zh/docs/plugins/official-plugins/js-dts"},next:{title:"\u6982\u89c8",permalink:"/zh/docs/plugins/writing-plugins/overview"}},p={},o=[{value:"Vite/Rollup Plugins",id:"viterollup-plugins",level:2},{value:"unplugin",id:"unplugin",level:2}],s={toc:o},m="wrapper";function g(e){let{components:n,...t}=e;return(0,u.kt)(m,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u793e\u533a\u63d2\u4ef6"},"\u793e\u533a\u63d2\u4ef6"),(0,u.kt)("p",null,"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u201cVite/Rollup\u201d\u63d2\u4ef6\u3002 \u6240\u4ee5 ",(0,u.kt)("inlineCode",{parentName:"p"},"Vite/Rollup")," \u6216\u8005 ",(0,u.kt)("inlineCode",{parentName:"p"},"unplugin")," \u63d2\u4ef6\u53ef\u4ee5\u76f4\u63a5\u5728 Farm \u4e2d\u4f7f\u7528\u3002"),(0,u.kt)("admonition",{type:"tip"},(0,u.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u5f00\u53d1\u4e86\u517c\u5bb9 Farm \u7684\u63d2\u4ef6\u5e76\u4e14\u60f3\u5728\u6b64\u5904\u5217\u51fa\uff0c\u6b22\u8fce PR\u3002")),(0,u.kt)("p",null,"\u76ee\u524d\u6d4b\u8bd5\u517c\u5bb9\u7684",(0,u.kt)("inlineCode",{parentName:"p"},"Vite/Rollup/unplugin"),"\u63d2\u4ef6\u5982\u4e0b\uff1a"),(0,u.kt)("h2",{id:"viterollup-plugins"},"Vite/Rollup Plugins"),(0,u.kt)("p",null,"\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"p"},"farm.config.ts")," \u4e2d\u7684 ",(0,u.kt)("inlineCode",{parentName:"p"},"vitePlugins")," \u6765\u914d\u7f6e ",(0,u.kt)("inlineCode",{parentName:"p"},"Vite/Rollup")," \u63d2\u4ef6\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\nimport vue from '@vitejs/plugin-vue';\nimport vueJsx from '@vitejs/plugin-vue-jsx';\n\nconst config: UserConfig = {\n  vitePlugins: [\n    vue(),\n    vueJsx(),\n  ]\n}\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("a",{parentName:"strong",href:"https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md"},(0,u.kt)("inlineCode",{parentName:"a"},"@vitejs/plugin-vue"))),": Vue \u652f\u6301."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("a",{parentName:"strong",href:"https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx"},(0,u.kt)("inlineCode",{parentName:"a"},"@vitejs/plugin-vue-jsx"))),": Vue Jsx/Tsx \u652f\u6301."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/vite-plugin-solid"},(0,u.kt)("inlineCode",{parentName:"a"},"vite-plugin-solid"))),": Solid \u652f\u6301"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/vite-plugin-solid"},(0,u.kt)("inlineCode",{parentName:"a"},"vite-plugin-mock"))),": Mock \u6570\u636e."),(0,u.kt)("li",{parentName:"ul"},"...")),(0,u.kt)("h2",{id:"unplugin"},"unplugin"),(0,u.kt)("admonition",{type:"note"},(0,u.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0c\u60a8\u53ef\u4ee5\u5728 Farm \u4e2d\u4f7f\u7528\u201cunplugin/vite\u201d\u8fdb\u884c\u201cunplugin/rollup\u201d\u3002 \u5f53",(0,u.kt)("a",{parentName:"p",href:"https://github.com/unjs/unplugin/pull/341"},"\u6b64 PR")," \u5408\u5e76\u5230 unplugin \u65f6\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"unplugin/farm")," \u5c06\u53ef\u7528\u3002")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"import Icons from 'unplugin-icons/vite';\nimport IconsResolver from 'unplugin-icons/resolver';\nimport Components from 'unplugin-vue-components/rollup';\nimport { NaiveUiResolver } from 'unplugin-vue-components/resolvers';\nimport { FileSystemIconLoader } from 'unplugin-icons/loaders';\n\nconst config: UserConfig = {\n  vitePlugins: [\n    Icons({\n      compiler: 'vue3',\n      customCollections: {\n        [collectionName]: FileSystemIconLoader(localIconPath, svg =>\n          svg.replace(/^<svg\\s/, '<svg width=\"1em\" height=\"1em\" ')\n        )\n      },\n      scale: 1,\n      defaultClass: 'inline-block'\n    }),\n    Components({\n      dts: 'src/typings/components.d.ts',\n      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],\n      resolvers: [\n        NaiveUiResolver(),\n        IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFIX })\n      ]\n    })\n  ]\n}\n")),(0,u.kt)("p",null,"Farm \u652f\u6301\u6240\u6709 unplugin \u63d2\u4ef6:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/antfu/unplugin-vue2-script-setup"},"unplugin-vue2-script-setup")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/antfu/unplugin-icons"},"unplugin-icons")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/zenotsai/unplugin-upload-cdn"},"unplugin-upload-cdn")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/jwr12135/unplugin-web-ext"},"unplugin-web-ext")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/pd4d10/unplugin-properties"},"unplugin-properties")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/1247748612/unplugin-moment-to-dayjs"},"unplugin-moment-to-dayjs")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/m0ksem/unplugin-object-3d"},"unplugin-object-3d")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/ssssota/unplugin-parcel-css"},"unplugin-parcel-css")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/sxzz/unplugin-vue"},"unplugin-vue")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/sxzz/unplugin-vue-macros"},"unplugin-vue-macros")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/sxzz/unplugin-vue-macros/tree/main/packages/define-options"},"unplugin-vue-define-options")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/sxzz/unplugin-jsx-string"},"unplugin-jsx-string")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/sxzz/unplugin-ast"},"unplugin-ast")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/element-plus/unplugin-element-plus"},"unplugin-element-plus")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/sxzz/unplugin-glob"},"unplugin-glob")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/kricsleo/unplugin-sentry"},"unplugin-sentry")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/ErKeLost/unplugin-imagemin"},"unplugin-imagemin")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/ssssota/typedotenv"},"unplugin-typedotenv")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/cssninjaStudio/unplugin-fonts"},"unplugin-fonts")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/getsentry/sentry-javascript-bundler-plugins"},"sentry-javascript-bundler-plugins")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/Jevon617/unplugin-svg-component"},"unplugin-svg-component")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/baiwusanyu-c/unplugin-vue-cssvars"},"unplugin-vue-cssvars"))))}g.isMDXComponent=!0}}]);