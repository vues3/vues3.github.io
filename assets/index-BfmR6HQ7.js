const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MultiView-WE-qAhXy.js","./vues3-shared-CG0rzS_C.js","./vues3-flat-json-tree-DWn-WHoD.js","./vueuse-shared-C_TsAxLO.js","./uuid-C_lTrkZC.js","./ajv-keywords-CuM6mo8B.js","./fast-deep-equal-C148XJoK.js","./fast-uri-J6I7s6O_.js","./vueuse-core-oETn3pEl.js","./unocss-preset-web-fonts-B9GE9DkF.js","./unocss-core-D551XE6q.js","./unhead-vue-DODUQR-r.js","./unhead-Cc5VaV_e.js","./hookable-B7_1qfUG.js","./unocss-runtime-DcS1hwRb.js","./unocss-preset-attributify-B43C78ya.js","./unocss-preset-icons-DCdkrEjQ.js","./ofetch-DKyuTA_G.js","./destr-Cx7WjB9q.js","./ufo-LxZlbPj-.js","./iconify-utils-_zRJGn6S.js","./debug-CP4J2T3R.js","./ms-CzQ2E3wO.js","./unocss-preset-tagify-C_-PbrOu.js","./unocss-preset-typography-DM_u03oK.js","./unocss-rule-utils-DjuvZIE4.js","./magic-string-BGCKWeEl.js","./jridgewell-sourcemap-codec-9KHfGwW6.js","./unocss-preset-wind3-nvR3uG2n.js","./unocss-preset-mini-BuCoYosa.js","./unocss-extractor-arbitrary-variants-BEoR-_Vl.js","./iconify-vue-C320287R.js","./vues3-vue3-sfc-loader-CUyMkKBN.js","./unocss-reset-DeJTMLhw.css","./SingleView-Bq25LA1Y.js","./NotFoundView-zIxKqp1q.js"])))=>i.map(i=>d[i]);
import{_ as m,p as L}from"./unocss-preset-web-fonts-B9GE9DkF.js";import{u as T,a as C,c as P}from"./unhead-vue-DODUQR-r.js";/* empty css                     */import{i as B}from"./unocss-runtime-DcS1hwRb.js";import{p as d,i as x,n as D,a as F,g as U,c as k,b as M}from"./vues3-shared-CG0rzS_C.js";import*as W from"vue";import{defineComponent as V,computed as u,ref as w,watch as H,resolveComponent as N,openBlock as _,createBlock as y,withCtx as q,resolveDynamicComponent as K,defineAsyncComponent as z,nextTick as G,createApp as J}from"vue";import{p as Q}from"./unocss-preset-attributify-B43C78ya.js";import{p as X}from"./unocss-preset-icons-DCdkrEjQ.js";import{p as Y}from"./unocss-preset-tagify-C_-PbrOu.js";import{p as Z}from"./unocss-preset-typography-DM_u03oK.js";import{p as ee}from"./unocss-preset-wind3-nvR3uG2n.js";import{i as te,g as oe,l as re}from"./iconify-vue-C320287R.js";import*as se from"vue-router";import{useRoute as ne,createRouter as ie,createWebHistory as ae}from"vue-router";import{i as pe}from"./vues3-vue3-sfc-loader-CUyMkKBN.js";import{u as ce}from"./vueuse-core-oETn3pEl.js";import{v as ue}from"./uuid-C_lTrkZC.js";import"./unocss-core-D551XE6q.js";import"./unhead-Cc5VaV_e.js";import"./hookable-B7_1qfUG.js";import"./vues3-flat-json-tree-DWn-WHoD.js";import"./vueuse-shared-C_TsAxLO.js";import"./ajv-keywords-CuM6mo8B.js";import"./fast-deep-equal-C148XJoK.js";import"./fast-uri-J6I7s6O_.js";import"./ofetch-DKyuTA_G.js";import"./destr-Cx7WjB9q.js";import"./ufo-LxZlbPj-.js";import"./iconify-utils-_zRJGn6S.js";import"./debug-CP4J2T3R.js";import"./ms-CzQ2E3wO.js";import"./unocss-rule-utils-DjuvZIE4.js";import"./magic-string-BGCKWeEl.js";import"./jridgewell-sourcemap-codec-9KHfGwW6.js";import"./unocss-preset-mini-BuCoYosa.js";import"./unocss-extractor-arbitrary-variants-BEoR-_Vl.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const h={presets:[ee(),Z(),X({cdn:"https://cdn.jsdelivr.net/npm/"}),Y(),Q()]},le=V({__name:"App",setup(o,{expose:s}){s();const n=ne(),t=u(()=>d.value.find(({id:e})=>e===n.name)),r=w(""),i=u(()=>{var e;return((e=t.value)==null?void 0:e.to)&&`${window.location.origin}${t.value.to==="/"?"":t.value.to}`});H(t,async e=>{let p="/favicon.ico";if(e!=null&&e.icon){const c=te(e.icon)?oe(e.icon):await re(e.icon);if(c){const{body:E,height:I,left:O,top:j,width:A}=c;p=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${O.toString()} ${j.toString()} ${A.toString()} ${I.toString()}">${E}</svg>`}}r.value=p}),T({link:[[r,"icon","icon"],[i,"canonical"]].map(([e,p,c])=>({href:e,key:c,rel:p}))}),C({description:()=>{var e;return((e=t.value)==null?void 0:e.description)??void 0},keywords:()=>{var e;return(e=t.value)==null?void 0:e.keywords.join()},ogDescription:()=>{var e;return((e=t.value)==null?void 0:e.description)??void 0},ogImage:()=>{var e;return((e=t.value)==null?void 0:e.images.filter(({url:p})=>p).map(({alt:p="",url:c})=>({alt:p,url:c?`${window.location.origin}/${c}`:""})))??[]},ogTitle:()=>{var e;return(e=t.value)==null?void 0:e.title},ogType:()=>{var e;return(e=t.value)!=null&&e.type?t.value.type:void 0},ogUrl:i,title:()=>{var e;return((e=t.value)==null?void 0:e.title)??""}});const a={route:n,a:t,favicon:r,ogUrl:i,get pages(){return d}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),me=(o,s)=>{const n=o.__vccOpts||o;for(const[t,r]of s)n[t]=r;return n};function de(o,s,n,t,r,i){const a=N("router-view");return _(),y(a,null,{default:q(({Component:e})=>{var p;return[(_(),y(K(e),{id:(p=t.pages[0])==null?void 0:p.id},null,8,["id"]))]}),_:1})}const fe=me(le,[["render",de],["__file","App.vue"]]);let v;const{pathname:ve}=new URL(document.baseURI),l=ie({history:ae(ve),routes:[],scrollBehavior:(o,s,n)=>v&&v(o,s,n)}),$=u(()=>d.value.find(({id:o})=>o===l.currentRoute.value.name)),ge="smooth",b=w(!0),f=new Map,we=()=>{let o,s;return{promise:new Promise((t,r)=>{o=t,s=r}),reject:s,resolve:o}},R=w(!0),g=u(()=>{var o;return l.currentRoute.value.path==="/"?(o=$.value)==null?void 0:o.$children[0]:$.value}),_e=u(()=>{var o;return((o=g.value)==null?void 0:o.siblings)??[]}),ot=u(()=>_e.value.filter(({enabled:o})=>o)),rt=({id:o=ue()})=>(f.set(o,we()),z(async()=>pe(`${o}.vue`,{addStyle:(s,n)=>{ce(s,{...n&&{id:n}})},getFile:async s=>{const{imports:n}=x,t=s.split("/").pop();switch(!0){case s===`${o}.vue`:return(await fetch(`./pages/${s}`)).text();case Object.keys(n).some(r=>s.startsWith(r)):return{getContentData:()=>import(s),type:"js"};default:return(await fetch(t===(t==null?void 0:t.split(".").pop())?`${s}.js`:s)).text()}},handleModule:async(s,n,t,r)=>{switch(s){case".css":return r.addStyle(await n(!1),t.toString()),null;case"js":return n(!1);default:return}},log:(s,...n)=>{window.console[s](...n.map(t=>decodeURIComponent(t)))},moduleCache:{vue:W,"vue-router":se}}))),st=({id:o}={})=>{var s;o&&((s=f.get(o))==null||s.resolve(void 0))},ye=({extractAll:o,toggleObserver:s})=>{v=async({name:n})=>{var t,r;if(n){b.value=!0,s(!1);const[{promise:i}={}]=f.values();await i,await Promise.all([...f.values()].map(({promise:e})=>e)),await o(),s(!0);const a=R.value&&{behavior:ge,...(r=(t=g.value)==null?void 0:t.parent)!=null&&r.flat&&g.value.index?{el:`#${String(n)}`}:{left:0,top:0}};return b.value=!1,R.value=!0,a}else return!1}};l.beforeEach(({path:o})=>o!==decodeURI(o)?decodeURI(o):void 0);const he=(async()=>{const[{imports:o},[s={}]]=await Promise.all(["index.importmap","index.json"].map(async(n,t)=>{const r=t?"[]":"{}",i=await fetch(n);return(i.ok?i:new Response(r)).json()}));x.imports=o,D.push(s),await G(),window.app.provide("pages",F),d.value.forEach(({flat:n,id:t,loc:r,parent:i,path:a})=>{if(a!==void 0){const e=r==null?void 0:r.replaceAll(" ","_").replace(/^\/?/,"/").replace(/\/?$/,"/");l.addRoute({...e&&r?{alias:e}:{undefined:void 0},children:[{component:(i==null?void 0:i.flat)??n?()=>m(()=>import("./MultiView-WE-qAhXy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url):()=>m(()=>import("./SingleView-Bq25LA1Y.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,8,33]),import.meta.url),name:t,path:""}],component:()=>m(()=>import("./SingleView-Bq25LA1Y.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,8,33]),import.meta.url),path:a.replace(/^\/?/,"/").replace(/\/?$/,"/")})}}),l.addRoute({component:()=>m(()=>import("./NotFoundView-zIxKqp1q.js"),__vite__mapDeps([35,11,12,13,9,10,14,1,2,3,4,5,6,7,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,8,33]),import.meta.url),name:"404",path:"/:pathMatch(.*)*"})})(),S=()=>document.getElementById("app")??void 0;window.app=J(fe);window.app.use(P());(async()=>{const o=await fetch("fonts.json"),s=U(await(o.ok?o:new Response("[]")).json());h.presets.push(L({customFetch:k,fonts:s})),await B({defaults:h,ready:async n=>{const{toggleObserver:t}=n;return ye(n),await he,window.app.use(l),window.app.mount(S()),t(!0),!1},rootElement:S})})().catch(M);window.console.info("⛵","vueS3","ver.: 0.2.15","https://github.com/vues3");export{ot as $,me as _,b as a,rt as m,f as p,st as r,R as s,g as t};
