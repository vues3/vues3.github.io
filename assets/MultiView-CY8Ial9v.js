import{defineComponent as y,computed as w,ref as b,watch as B,onUnmounted as C,createElementBlock as M,openBlock as v,Fragment as O,renderList as j,normalizeClass as z,createBlock as D,resolveDynamicComponent as F}from"vue";import{p as L,b as P}from"./vues3-shared-buoSsp4s.js";import{a as R,b as T}from"./vueuse-core-LmErIIkB.js";import{useRouter as U}from"vue-router";import{$ as l,p as _,m as X,t as k,r as Y,a as q,s as A,_ as G}from"./index-BpmUChl2.js";import{v as E}from"./uuid-C_lTrkZC.js";import"./vues3-flat-json-tree-JZymyF9I.js";import"./vueuse-shared-B-8pbEvH.js";import"./ajv-keywords-LfcwNQUd.js";import"./fast-deep-equal-C148XJoK.js";import"./fast-uri-J6I7s6O_.js";import"./unocss-preset-web-fonts-C11LW3ii.js";import"./unocss-core-BiXlDC0r.js";import"./unhead-vue-mOLT5W2h.js";import"./unhead-C9uMQcWG.js";import"./hookable-B8xFkYCm.js";/* empty css                     */import"./unocss-runtime-DjWo5fuJ.js";import"./unocss-preset-attributify-BU0_RE24.js";import"./unocss-preset-icons-BmEkf8AS.js";import"./ofetch-DfaEl5Lr.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./iconify-utils-B5M6Xvbe.js";import"./debug-CWPg8chX.js";import"./ms-CzQ2E3wO.js";import"./unocss-preset-tagify-CW1W8HaZ.js";import"./unocss-preset-typography-B2AEES4M.js";import"./unocss-rule-utils-BYNmh20u.js";import"./magic-string-BGCKWeEl.js";import"./jridgewell-sourcemap-codec-9KHfGwW6.js";import"./unocss-preset-wind3-Dig-PGXt.js";import"./unocss-preset-mini-DPzTm4YX.js";import"./unocss-extractor-arbitrary-variants-vfz8FJzM.js";import"./iconify-vue-BbHJzthi.js";import"./vues3-vue3-sfc-loader-Cjhfn9WY.js";const H=y({__name:"MultiView",setup(S,{expose:h}){h();const i=w(()=>new Map(l.value.map(({id:e=E()})=>[e,!1]))),t=b(new Map(i.value)),u=b([]),c=U(),o=[],a=w(()=>{const[[e,r]=[]]=_;return _.clear(),e&&r&&_.set(e,r),Object.fromEntries(l.value.map(s=>[s.id,X(s)]))}),m=()=>{o.forEach(e=>{e()}),o.length=0},V=({id:e})=>a.value[e];B(u,e=>{m(),setTimeout(()=>{e.forEach(r=>{const{stop:s}=R(r,([{isIntersecting:p,target:{id:n}={}}={}]=[])=>{t.value=new Map(i.value),n&&p!==void 0&&i.value.set(n,p)},{threshold:.1});o.push(s)})})},{deep:!0}),T(window,{behavior:"smooth",onStop:()=>{var e,r;if(!q.value&&k.value&&l.value.length){const{scrollX:s,scrollY:p}=window,[n]=l.value,[d]=L.value;if(d&&n){const{$children:[{id:$}={}]=[]}=d,x=!Math.floor(s)&&!Math.floor(p)&&n.id===$?d.id:((e=[...i.value.entries()].find(([,f])=>f))==null?void 0:e[0])??((r=[...t.value.entries()].find(([,f])=>f))==null?void 0:r[0])??n.id;A.value=!1,c.push({name:x}).catch(P)}}}}),C(m);const g={intersecting:i,$intersecting:t,refs:u,router:c,stops:o,templates:a,clearStops:m,template:V,get v4(){return E},get $siblings(){return l},get resolve(){return Y},get that(){return k}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),I=["id","role"];function J(S,h,i,t,u,c){return v(!0),M(O,null,j(t.$siblings,o=>{var a;return v(),M("div",{id:o.id??t.v4(),key:o.id??t.v4(),ref_for:!0,ref:"refs",class:z(o.class),role:o.id===((a=t.that)==null?void 0:a.id)?"main":"section","un-cloak":""},[(v(),D(F(t.template(o)),{id:o.id,"un-cloak":"",onVnodeMounted:m=>t.resolve(o)},null,8,["id","onVnodeMounted"]))],10,I)}),128)}const Oe=G(H,[["render",J],["__file","MultiView.vue"]]);export{Oe as default};
