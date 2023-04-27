"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(u,o(o({ref:t},k),{},{components:n})):i.createElement(u,o({ref:t},k))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={description:"Husky,Lint Staged,Commitlint,Prettier Configuration",keywords:["Husky","Git hooks","Prettier"],image:"https://raw.githubusercontent.com/Minghaoox/pics/main/myicon.png",tags:["\u7f16\u7a0b"]},o=void 0,p={unversionedId:"Git/Git Hooks \u914d\u7f6e",id:"Git/Git Hooks \u914d\u7f6e",title:"Git Hooks \u914d\u7f6e",description:"Husky,Lint Staged,Commitlint,Prettier Configuration",source:"@site/docs/Git/Git Hooks \u914d\u7f6e.md",sourceDirName:"Git",slug:"/Git/Git Hooks \u914d\u7f6e",permalink:"/docs/Git/Git Hooks \u914d\u7f6e",draft:!1,editUrl:"https://github.com/Minghaoox/docs/Git/Git Hooks \u914d\u7f6e.md",tags:[{label:"\u7f16\u7a0b",permalink:"/docs/tags/\u7f16\u7a0b"}],version:"current",frontMatter:{description:"Husky,Lint Staged,Commitlint,Prettier Configuration",keywords:["Husky","Git hooks","Prettier"],image:"https://raw.githubusercontent.com/Minghaoox/pics/main/myicon.png",tags:["\u7f16\u7a0b"]},sidebar:"tutorialSidebar",previous:{title:"Anaconda3\ud83d\udc0d",permalink:"/docs/Python/Anaconda3\u5b89\u88c5"},next:{title:"Git\u4f7f\u7528\u89c4\u8303",permalink:"/docs/Git/Git\u4f7f\u7528\u89c4\u8303"}},l={},s=[{value:"Get Started",id:"get-started",level:2},{value:"Husky",id:"husky",level:3},{value:"\u5b89\u88c5 <code>husky</code>",id:"\u5b89\u88c5-husky",level:4},{value:"\u521b\u5efa hook",id:"\u521b\u5efa-hook",level:4},{value:"Lint Staged",id:"lint-staged",level:3},{value:"ESlint",id:"eslint",level:3},{value:"Commitlint",id:"commitlint",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u914d\u7f6e\u89c4\u5219",id:"\u914d\u7f6e\u89c4\u5219",level:4},{value:"Prettier",id:"prettier",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:4}],k={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".git/hooks/"),"\u76ee\u5f55\u4e0b\uff0c\u6709\u8bb8\u591a",(0,a.kt)("inlineCode",{parentName:"p"},".example"),"\u7ed3\u5c3e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"hook"),"\u6587\u4ef6\uff0c\u7528\u4e8e\u5728\u7279\u5b9a\u65f6\u673a\u6267\u884c\u811a\u672c\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"pre-commit"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"pre-push"),"\u7b49\u7b49\uff0c\u8fd9\u4e9b\u6587\u4ef6\u90fd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\u81ea\u5e26\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5199\u811a\u672c\uff0c\u7136\u540e\u653e\u5230\u8fd9\u4e2a\u76ee\u5f55\u4e0b\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u7279\u5b9a\u65f6\u673a\u6267\u884c\u6211\u4eec\u81ea\u5df1\u7684\u811a\u672c\u4e86\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u901a\u5e38\u6211\u4eec\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"husky"),"\u6765\u7ba1\u7406\u8fd9\u4e9b",(0,a.kt)("inlineCode",{parentName:"p"},"hooks"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"husky")," \u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"git hooks"),"\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u89e6\u53d1 git \u63d0\u4ea4\u7684\u5404\u4e2a\u9636\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-commit"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"commit-msg"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pre-push"),",\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\u5728\u63d0\u4ea4\u65f6\u5bf9\u4ee3\u7801\u8fdb\u884c\u4ee3\u7801\u98ce\u683c\u68c0\u67e5\u7b49\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u7684\u9879\u76ee\u73af\u5883\uff0c\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"Husky"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Lint Staged"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ESlint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CommitLint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Prettier")),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("h3",{id:"husky"},(0,a.kt)("a",{parentName:"h3",href:"https://typicode.github.io/husky/"},"Husky")),(0,a.kt)("h4",{id:"\u5b89\u88c5-husky"},"\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h4"},"husky")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install husky --save-dev\n")),(0,a.kt)("h4",{id:"\u521b\u5efa-hook"},"\u521b\u5efa hook"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"husky"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx husky install\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"hook"))),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a\u5728 commit \u4e4b\u95f4\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm test")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'npx husky add .husky/pre-commit "npm test"\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u66f4\u65b0",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"))),(0,a.kt)("p",null,"\u8fd9\u91cc\u6dfb\u52a0\u4e00\u4e2a\u811a\u672c\uff0c\u65b9\u4fbf\u522b\u4eba\u5728\u9879\u76ee\u4e2d\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"husky hooks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  "scripts": {\n    "prepare": "husky install"\n  }\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u2753 ",(0,a.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u4e0d\u50cf\u4ee5\u524d\u4e00\u6837\u5728 package.json \u4e2d\u914d\u7f6e hooks")," ?"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Husky")," \u4e00\u76f4\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"JavaScript")," \u914d\u7f6e ",(0,a.kt)("strong",{parentName:"p"},"Git Hooks"),"\uff0c\u53ef\u4ee5\u4f7f\u7528 .",(0,a.kt)("strong",{parentName:"p"},"huskyrc"),".js \u6587\u4ef6\u6216 ",(0,a.kt)("strong",{parentName:"p"},"package"),".",(0,a.kt)("strong",{parentName:"p"},"json")," \u4e2d\u7684\u5b57\u6bb5\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5728 husky(6.0.0) \u7248\u672c\u505a\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"Breaking change"),": \u5728\u6839\u76ee\u5f55\u521b\u5efa .husky \u6587\u4ef6\u5939\uff0c\u5e76\u5728\u5185\u90e8\u8fdb\u884c\u94a9\u5b50\u7684\u6309\u9700\u914d\u7f6e\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f5c\u8005\u539f\u6587\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://blog.typicode.com/husky-git-hooks-javascript-config/"},"https://blog.typicode.com/husky-git-hooks-javascript-config/"))),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5c31\u5b89\u88c5\u597d\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Husky")),(0,a.kt)("h3",{id:"lint-staged"},"Lint Staged"),(0,a.kt)("p",null,"lint-staged \u662f\u4e00\u4e2a\u5728 git \u6682\u5b58\u6587\u4ef6\u4e0a\u8fd0\u884c linters \u7684\u5de5\u5177\u3002\u5b83\u53ef\u4ee5\u5728\u63d0\u4ea4\u4e4b\u524d\u8fd0\u884c linters\uff0c\u4ee5\u786e\u4fdd\u63d0\u4ea4\u7684\u4ee3\u7801\u7b26\u5408\u4ee3\u7801\u89c4\u8303\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Prettier")," \u5c31\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Lint Staged")," \u6765\u8fd0\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add --dev lint-staged\n")),(0,a.kt)("h3",{id:"eslint"},"ESlint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add --dev eslint\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm init @eslint/config\n")),(0,a.kt)("p",null,"\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintignore")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public\ndist\n")),(0,a.kt)("p",null,"\u5728 package.json \u4e2d\u6dfb\u52a0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "**/*.ts?(x)": ["eslint --cache --fix"]\n}\n')),(0,a.kt)("h3",{id:"commitlint"},"Commitlint"),(0,a.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @commitlint/config-conventional @commitlint/cli\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".husky/commit-msg")," \u4e2d\u5199\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\nnpx --no -- commitlint --edit ${1}\n')),(0,a.kt)("h4",{id:"\u914d\u7f6e\u89c4\u5219"},"\u914d\u7f6e\u89c4\u5219"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shel"},"echo \"module.exports = { extends: ['@commitlint/config-conventional'] };\" > commitlint.config.js\n")),(0,a.kt)("p",null,"\u89c4\u5219\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"https://www.conventionalcommits.org/en/v1.0.0/")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9047\u5230\u62a5\u9519\u4fe1\u606f:"),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"Error ","[ERR_REQUIRE_ESM]",": require() of ES Module")),(0,a.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u5c06 commitlint.config.",(0,a.kt)("strong",{parentName:"p"},"js")," \u66f4\u540d\u4e3a commitlint.config.",(0,a.kt)("strong",{parentName:"p"},"cjs"))),(0,a.kt)("h3",{id:"prettier"},"Prettier"),(0,a.kt)("h4",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add --dev --exact prettier\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"echo {}> .prettierrc.json\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".prettierrc.json"),"\u4e2d\u6dfb\u52a0\u89c4\u5219\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "singleQuote": true,\n  "trailingComma": "all",\n  "printWidth": 80\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u901a\u5e38\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Prettier")," \u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit"),"\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"hook"),"\u6765\u8fd0\u884c\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u6240\u6709\u7684\u63d0\u4ea4\u90fd\u662f\u683c\u5f0f\u5316\u7684\uff0c\u800c\u4e0d\u5fc5\u7b49\u5f85 CI \u6784\u5efa\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff0c\u4ee5\u4fbf\u5728\u6bcf\u6b21\u63d0\u4ea4\u4e4b\u524d\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"Prettier"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'npx husky add .husky/pre-commit "npx lint-staged"\n')),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lint-staged": {\n    "**/*.{js,jsx,ts,tsx,less,md,json}": "prettier --write --ignore-unknown"\n  }\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u5728\u9879\u76ee\u4e2d\u5df2\u7ecf\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESlint"),",\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prettier/eslint-config-prettier#installation"},"eslint-config-prettier")," \uff0c\u4ee5\u66f4\u597d\u7684\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"Eslint"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add --dev eslint-config-prettier\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ESlint \u914d\u7f6e\u4e2d\u6dfb\u52a0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": ["some-other-config-you-use", "prettier"]\n}\n')))}c.isMDXComponent=!0}}]);