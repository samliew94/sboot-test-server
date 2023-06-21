var Dt=Object.defineProperty;var Ht=(t,e,n)=>e in t?Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xe=(t,e,n)=>(Ht(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function de(){}function It(t,e){for(const n in e)t[n]=e[n];return t}function Tt(t){return t()}function ht(){return Object.create(null)}function ue(t){t.forEach(Tt)}function et(t){return typeof t=="function"}function ge(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Jt(t){return Object.keys(t).length===0}function Rt(t,e,n,l){if(t){const i=Lt(t,e,n,l);return t[0](i)}}function Lt(t,e,n,l){return t[1]&&l?It(n.ctx.slice(),t[1](l(e))):n.ctx}function Kt(t,e,n,l){if(t[2]&&l){const i=t[2](l(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],r=Math.max(e.dirty.length,i.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|i[c];return o}return e.dirty|i}return e.dirty}function Ut(t,e,n,l,i,o){if(i){const r=Lt(e,n,l,o);t.p(r,i)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function s(t,e){t.appendChild(e)}function F(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function Ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function g(){return R(" ")}function Me(){return R("")}function le(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qt(t){return Array.from(t.childNodes)}function Y(t,e){e=""+e,t.data!==e&&(t.data=e)}function Re(t,e){t.value=e??""}function wt(t,e,n){for(let l=0;l<t.options.length;l+=1){const i=t.options[l];if(i.__value===e){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Vt(t){const e=t.querySelector(":checked");return e&&e.__value}function Wt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,l,e),i}let je;function Ae(t){je=t}function Mt(){if(!je)throw new Error("Function called outside component initialization");return je}function Ot(t){Mt().$$.on_mount.push(t)}function qt(){const t=Mt();return(e,n,{cancelable:l=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=Wt(e,n,{cancelable:l});return i.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}const Ne=[],me=[];let Ee=[];const Ze=[],Xt=Promise.resolve();let xe=!1;function Yt(){xe||(xe=!0,Xt.then(zt))}function Ke(t){Ee.push(t)}function Te(t){Ze.push(t)}const Ye=new Set;let Fe=0;function zt(){if(Fe!==0)return;const t=je;do{try{for(;Fe<Ne.length;){const e=Ne[Fe];Fe++,Ae(e),Zt(e.$$)}}catch(e){throw Ne.length=0,Fe=0,e}for(Ae(null),Ne.length=0,Fe=0;me.length;)me.pop()();for(let e=0;e<Ee.length;e+=1){const n=Ee[e];Ye.has(n)||(Ye.add(n),n())}Ee.length=0}while(Ne.length);for(;Ze.length;)Ze.pop()();xe=!1,Ye.clear(),Ae(t)}function Zt(t){if(t.fragment!==null){t.update(),ue(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ke)}}function xt(t){const e=[],n=[];Ee.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Ee=e}const Je=new Set;let pe;function Ge(){pe={r:0,c:[],p:pe}}function Qe(){pe.r||ue(pe.c),pe=pe.p}function y(t,e){t&&t.i&&(Je.delete(t),t.i(e))}function N(t,e,n,l){if(t&&t.o){if(Je.has(t))return;Je.add(t),pe.c.push(()=>{Je.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Le(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function q(t){t&&t.c()}function L(t,e,n,l){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),l||Ke(()=>{const r=t.$$.on_mount.map(Tt).filter(et);t.$$.on_destroy?t.$$.on_destroy.push(...r):ue(r),t.$$.on_mount=[]}),o.forEach(Ke)}function M(t,e){const n=t.$$;n.fragment!==null&&(xt(n.after_update),ue(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function en(t,e){t.$$.dirty[0]===-1&&(Ne.push(t),Yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,l,i,o,r,c=[-1]){const u=je;Ae(t);const p=t.$$={fragment:null,ctx:[],props:o,update:de,not_equal:i,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ht(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};r&&r(p.root);let _=!1;if(p.ctx=n?n(t,e.props||{},(w,b,...k)=>{const E=k.length?k[0]:b;return p.ctx&&i(p.ctx[w],p.ctx[w]=E)&&(!p.skip_bound&&p.bound[w]&&p.bound[w](E),_&&en(t,w)),b}):[],p.update(),_=!0,ue(p.before_update),p.fragment=l?l(p.ctx):!1,e.target){if(e.hydrate){const w=Qt(e.target);p.fragment&&p.fragment.l(w),w.forEach(C)}else p.fragment&&p.fragment.c();e.intro&&y(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),zt()}Ae(u)}class be{$destroy(){M(this,1),this.$destroy=de}$on(e,n){if(!et(n))return de;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!Jt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class tn{constructor(){Xe(this,"origin");Xe(this,"hostName");this.origin=window.location.origin,this.hostName=window.location.host}}const Pe=new tn;function yt(t){let e,n,l;const i=t[2].default,o=Rt(i,t,t[1],null);return{c(){e=d("div"),n=d("div"),o&&o.c(),m(n,"class","bg-transparent h-5/6 w-full mx-4 rounded-xl flex justify-center items-center"),m(e,"class","bg-black/75 flex justify-center items-center fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none")},m(r,c){F(r,e,c),s(e,n),o&&o.m(n,null),l=!0},p(r,c){o&&o.p&&(!l||c&2)&&Ut(o,i,r,r[1],l?Kt(i,r[1],c,null):Gt(r[1]),null)},i(r){l||(y(o,r),l=!0)},o(r){N(o,r),l=!1},d(r){r&&C(e),o&&o.d(r)}}}function nn(t){let e,n,l=t[0]&&yt(t);return{c(){l&&l.c(),e=Me()},m(i,o){l&&l.m(i,o),F(i,e,o),n=!0},p(i,[o]){i[0]?l?(l.p(i,o),o&1&&y(l,1)):(l=yt(i),l.c(),y(l,1),l.m(e.parentNode,e)):l&&(Ge(),N(l,1,1,()=>{l=null}),Qe())},i(i){n||(y(l),n=!0)},o(i){N(l),n=!1},d(i){l&&l.d(i),i&&C(e)}}}function ln(t,e,n){let{$$slots:l={},$$scope:i}=e,{show:o}=e;return t.$$set=r=>{"show"in r&&n(0,o=r.show),"$$scope"in r&&n(1,i=r.$$scope)},[o,i,l]}class rn extends be{constructor(e){super(),_e(this,e,ln,nn,ge,{show:0})}}function on(t){let e;return{c(){e=d("span")},m(n,l){F(n,e,l)},d(n){n&&C(e)}}}function sn(t){let e;return{c(){e=d("span"),e.textContent="*",m(e,"class","text-red-500")},m(n,l){F(n,e,l)},d(n){n&&C(e)}}}function un(t){let e,n,l,i;return{c(){e=d("input"),e.disabled=t[5],m(e,"class",n="col-span-3 border border-gray-500 p-2 rounded "+(t[5]?"bg-gray-300":"")),m(e,"name",t[1])},m(o,r){F(o,e,r),Re(e,t[0][t[1]]),l||(i=[le(e,"input",t[10]),le(e,"input",t[11])],l=!0)},p(o,r){r&32&&(e.disabled=o[5]),r&32&&n!==(n="col-span-3 border border-gray-500 p-2 rounded "+(o[5]?"bg-gray-300":""))&&m(e,"class",n),r&2&&m(e,"name",o[1]),r&3&&e.value!==o[0][o[1]]&&Re(e,o[0][o[1]])},d(o){o&&C(e),l=!1,ue(i)}}}function fn(t){let e,n,l;return{c(){e=d("textarea"),m(e,"class","col-span-3 border border-gray-500 p-2 rounded h-36"),m(e,"name",t[1])},m(i,o){F(i,e,o),Re(e,t[0][t[1]]),n||(l=[le(e,"input",t[8]),le(e,"input",t[9])],n=!0)},p(i,o){o&2&&m(e,"name",i[1]),o&3&&Re(e,i[0][i[1]])},d(i){i&&C(e),n=!1,ue(l)}}}function cn(t){let e,n,l,i,o;function r(b,k){return b[3]?sn:on}let c=r(t),u=c(t);function p(b,k){return b[4]?fn:un}let _=p(t),w=_(t);return{c(){e=d("div"),n=d("p"),l=R(t[2]),i=R(": "),u.c(),o=g(),w.c(),m(n,"class","col-span-1"),m(e,"class","grid grid-cols-4 gap-1 flex justify-center items-center")},m(b,k){F(b,e,k),s(e,n),s(n,l),s(n,i),u.m(n,null),s(e,o),w.m(e,null)},p(b,[k]){k&4&&Y(l,b[2]),c!==(c=r(b))&&(u.d(1),u=c(b),u&&(u.c(),u.m(n,null))),_===(_=p(b))&&w?w.p(b,k):(w.d(1),w=_(b),w&&(w.c(),w.m(e,null)))},i:de,o:de,d(b){b&&C(e),u.d(),w.d()}}}function an(t,e,n){let{name:l}=e,{title:i}=e,{inputFields:o}=e,{limit:r}=e,{required:c=!1}=e,{isTextArea:u=!1}=e,{disabled:p=!1}=e;function _(v){let z=v.target.value,J=v.target.name;z.length>r&&n(0,o[J]=z.slice(0,-1),o)}function w(){o[l]=this.value,n(0,o)}const b=v=>_(v);function k(){o[l]=this.value,n(0,o)}const E=v=>_(v);return t.$$set=v=>{"name"in v&&n(1,l=v.name),"title"in v&&n(2,i=v.title),"inputFields"in v&&n(0,o=v.inputFields),"limit"in v&&n(7,r=v.limit),"required"in v&&n(3,c=v.required),"isTextArea"in v&&n(4,u=v.isTextArea),"disabled"in v&&n(5,p=v.disabled)},[o,l,i,c,u,p,_,r,w,b,k,E]}class ne extends be{constructor(e){super(),_e(this,e,an,cn,ge,{name:1,title:2,inputFields:0,limit:7,required:3,isTextArea:4,disabled:5})}}function $t(t,e,n){const l=t.slice();return l[6]=e[n],l}function vt(t){let e,n,l,i,o,r,c,u,p,_,w,b,k,E,v,z,J,j,I,K,D,U,O,Q,S=t[1],a=[];for(let f=0;f<S.length;f+=1)a[f]=kt($t(t,S,f));return r=new ne({props:{inputFields:t[2],name:"code",limit:9,title:"Code",required:!0}}),u=new ne({props:{inputFields:t[2],name:"name",limit:90,title:"Name",required:!0}}),_=new ne({props:{inputFields:t[2],name:"category",limit:28,title:"Category",required:!0}}),b=new ne({props:{inputFields:t[2],name:"brand",limit:28,title:"Brand"}}),E=new ne({props:{inputFields:t[2],name:"type",limit:21,title:"Type"}}),z=new ne({props:{inputFields:t[2],name:"description",limit:180,title:"Description",isTextArea:!0}}),{c(){e=d("div"),n=d("p"),n.textContent="Create New Product",l=g(),i=d("div");for(let f=0;f<a.length;f+=1)a[f].c();o=g(),q(r.$$.fragment),c=g(),q(u.$$.fragment),p=g(),q(_.$$.fragment),w=g(),q(b.$$.fragment),k=g(),q(E.$$.fragment),v=g(),q(z.$$.fragment),J=g(),j=d("div"),I=d("button"),I.textContent="Save",K=g(),D=d("button"),D.textContent="Cancel",m(n,"class","text-2xl mb-2"),m(i,"class","grid grid-cols-1 gap-1 flex justify-center items-center"),m(I,"class","bg-blue-500 rounded px-4 py-1"),m(D,"class","bg-red-500 rounded px-4 py-1"),m(j,"class","text-center text-white m-2"),m(e,"class","p-4 rounded-xl bg-white border border-black border-2 border-gray-500")},m(f,T){F(f,e,T),s(e,n),s(e,l),s(e,i);for(let P=0;P<a.length;P+=1)a[P]&&a[P].m(i,null);s(i,o),L(r,i,null),s(i,c),L(u,i,null),s(i,p),L(_,i,null),s(i,w),L(b,i,null),s(i,k),L(E,i,null),s(i,v),L(z,i,null),s(e,J),s(e,j),s(j,I),s(j,K),s(j,D),U=!0,O||(Q=[le(I,"click",t[3]),le(D,"click",t[4])],O=!0)},p(f,T){if(T&2){S=f[1];let P;for(P=0;P<S.length;P+=1){const G=$t(f,S,P);a[P]?a[P].p(G,T):(a[P]=kt(G),a[P].c(),a[P].m(i,o))}for(;P<a.length;P+=1)a[P].d(1);a.length=S.length}},i(f){U||(y(r.$$.fragment,f),y(u.$$.fragment,f),y(_.$$.fragment,f),y(b.$$.fragment,f),y(E.$$.fragment,f),y(z.$$.fragment,f),U=!0)},o(f){N(r.$$.fragment,f),N(u.$$.fragment,f),N(_.$$.fragment,f),N(b.$$.fragment,f),N(E.$$.fragment,f),N(z.$$.fragment,f),U=!1},d(f){f&&C(e),Ue(a,f),M(r),M(u),M(_),M(b),M(E),M(z),O=!1,ue(Q)}}}function kt(t){let e,n=t[6]+"",l;return{c(){e=d("p"),l=R(n),m(e,"class","text-red-500 text-sm italic")},m(i,o){F(i,e,o),s(e,l)},p(i,o){o&2&&n!==(n=i[6]+"")&&Y(l,n)},d(i){i&&C(e)}}}function dn(t){let e,n,l=t[0]&&vt(t);return{c(){l&&l.c(),e=Me()},m(i,o){l&&l.m(i,o),F(i,e,o),n=!0},p(i,[o]){i[0]?l?(l.p(i,o),o&1&&y(l,1)):(l=vt(i),l.c(),y(l,1),l.m(e.parentNode,e)):l&&(Ge(),N(l,1,1,()=>{l=null}),Qe())},i(i){n||(y(l),n=!0)},o(i){N(l),n=!1},d(i){l&&l.d(i),i&&C(e)}}}function pn(t,e,n){let{show:l}=e;const i=qt();let o={name:"",code:"",category:"",brand:"",type:"",description:""},r=[];async function c(){const p=`${Pe.origin}/api/products`,_=await fetch(p,{method:"POST",body:JSON.stringify({name:o.name,code:o.code,category:o.category,brand:o.brand,type:o.type,description:o.description}),headers:{"content-type":"application/json"}});if(_.status!==200){const w=await _.json();n(1,r=w.errors),console.log(r);return}_.status===200&&i("success",{})}const u=()=>n(0,l=!1);return t.$$set=p=>{"show"in p&&n(0,l=p.show)},[l,r,o,c,u]}class mn extends be{constructor(e){super(),_e(this,e,pn,dn,ge,{show:0})}}function gn(t){let e,n,l,i,o;return{c(){e=d("button"),n=R(t[1]),m(e,"class",l="py-2 px-4 rounded text-white "+t[2])},m(r,c){F(r,e,c),s(e,n),i||(o=le(e,"click",function(){et(t[0])&&t[0].apply(this,arguments)}),i=!0)},p(r,[c]){t=r,c&2&&Y(n,t[1]),c&4&&l!==(l="py-2 px-4 rounded text-white "+t[2])&&m(e,"class",l)},i:de,o:de,d(r){r&&C(e),i=!1,o()}}}function _n(t,e,n){let{color:l}=e,{onClick:i}=e,{title:o}=e,{base:r=500}=e,c;return t.$$set=u=>{"color"in u&&n(3,l=u.color),"onClick"in u&&n(0,i=u.onClick),"title"in u&&n(1,o=u.title),"base"in u&&n(4,r=u.base)},t.$$.update=()=>{t.$$.dirty&24&&n(2,c=`bg-${l}-${r} hover:bg-${l}-${r+100} active:bg-${l}-${r+300}`)},[i,o,c,l,r]}class te extends be{constructor(e){super(),_e(this,e,_n,gn,ge,{color:3,onClick:0,title:1,base:4})}}function Ct(t,e,n){const l=t.slice();return l[9]=e[n],l}function Ft(t){let e,n,l,i,o,r,c,u,p,_,w,b,k,E,v,z,J,j,I,K,D,U,O,Q,S=t[2],a=[];for(let f=0;f<S.length;f+=1)a[f]=Nt(Ct(t,S,f));return r=new ne({props:{inputFields:t[1],name:"code",limit:9,title:"Code",required:!0,disabled:!0}}),u=new ne({props:{inputFields:t[1],name:"name",limit:90,title:"Name",required:!0}}),_=new ne({props:{inputFields:t[1],name:"category",limit:28,title:"Category",required:!0}}),b=new ne({props:{inputFields:t[1],name:"brand",limit:28,title:"Brand"}}),E=new ne({props:{inputFields:t[1],name:"type",limit:21,title:"Type"}}),z=new ne({props:{inputFields:t[1],name:"description",limit:180,title:"Description",isTextArea:!0}}),I=new te({props:{title:"Save",color:"blue",onClick:t[3]}}),D=new te({props:{title:"Cancel",color:"red",onClick:t[6]}}),O=new te({props:{title:"Delete",color:"red",onClick:t[4],base:500}}),{c(){e=d("div"),n=d("p"),n.textContent="Edit Product",l=g(),i=d("div");for(let f=0;f<a.length;f+=1)a[f].c();o=g(),q(r.$$.fragment),c=g(),q(u.$$.fragment),p=g(),q(_.$$.fragment),w=g(),q(b.$$.fragment),k=g(),q(E.$$.fragment),v=g(),q(z.$$.fragment),J=g(),j=d("div"),q(I.$$.fragment),K=g(),q(D.$$.fragment),U=g(),q(O.$$.fragment),m(n,"class","text-2xl mb-2"),m(i,"class","grid grid-cols-1 gap-1 flex justify-center items-center"),m(j,"class","text-center text-white m-2"),m(e,"class","p-4 rounded-xl bg-white p-4 rounded-xl bg-white border border-black border-2 border-gray-500")},m(f,T){F(f,e,T),s(e,n),s(e,l),s(e,i);for(let P=0;P<a.length;P+=1)a[P]&&a[P].m(i,null);s(i,o),L(r,i,null),s(i,c),L(u,i,null),s(i,p),L(_,i,null),s(i,w),L(b,i,null),s(i,k),L(E,i,null),s(i,v),L(z,i,null),s(e,J),s(e,j),L(I,j,null),s(j,K),L(D,j,null),s(j,U),L(O,j,null),Q=!0},p(f,T){if(T&4){S=f[2];let H;for(H=0;H<S.length;H+=1){const fe=Ct(f,S,H);a[H]?a[H].p(fe,T):(a[H]=Nt(fe),a[H].c(),a[H].m(i,o))}for(;H<a.length;H+=1)a[H].d(1);a.length=S.length}const P={};T&2&&(P.inputFields=f[1]),r.$set(P);const G={};T&2&&(G.inputFields=f[1]),u.$set(G);const ie={};T&2&&(ie.inputFields=f[1]),_.$set(ie);const re={};T&2&&(re.inputFields=f[1]),b.$set(re);const se={};T&2&&(se.inputFields=f[1]),E.$set(se);const V={};T&2&&(V.inputFields=f[1]),z.$set(V);const oe={};T&1&&(oe.onClick=f[6]),D.$set(oe)},i(f){Q||(y(r.$$.fragment,f),y(u.$$.fragment,f),y(_.$$.fragment,f),y(b.$$.fragment,f),y(E.$$.fragment,f),y(z.$$.fragment,f),y(I.$$.fragment,f),y(D.$$.fragment,f),y(O.$$.fragment,f),Q=!0)},o(f){N(r.$$.fragment,f),N(u.$$.fragment,f),N(_.$$.fragment,f),N(b.$$.fragment,f),N(E.$$.fragment,f),N(z.$$.fragment,f),N(I.$$.fragment,f),N(D.$$.fragment,f),N(O.$$.fragment,f),Q=!1},d(f){f&&C(e),Ue(a,f),M(r),M(u),M(_),M(b),M(E),M(z),M(I),M(D),M(O)}}}function Nt(t){let e,n=t[9]+"",l;return{c(){e=d("p"),l=R(n),m(e,"class","text-red-500 text-sm italic")},m(i,o){F(i,e,o),s(e,l)},p(i,o){o&4&&n!==(n=i[9]+"")&&Y(l,n)},d(i){i&&C(e)}}}function bn(t){let e,n,l=t[0]&&Ft(t);return{c(){l&&l.c(),e=Me()},m(i,o){l&&l.m(i,o),F(i,e,o),n=!0},p(i,[o]){i[0]?l?(l.p(i,o),o&1&&y(l,1)):(l=Ft(i),l.c(),y(l,1),l.m(e.parentNode,e)):l&&(Ge(),N(l,1,1,()=>{l=null}),Qe())},i(i){n||(y(l),n=!0)},o(i){N(l),n=!1},d(i){l&&l.d(i),i&&C(e)}}}function hn(t,e,n){let{show:l}=e,{productCode:i}=e;const o=qt();let r={name:"",code:"",category:"",brand:"",type:"",description:""},c=[];async function u(){const b=`${Pe.origin}/api/products/${i}`,k=await fetch(b,{method:"PUT",body:JSON.stringify({name:r.name,code:r.code,category:r.category,brand:r.brand,type:r.type,description:r.description}),headers:{"content-type":"application/json"}});if(k.status!==200){const E=await k.json();n(2,c=E.errors),console.log(c);return}k.status===200&&o("success",{})}async function p(){const b=`${Pe.origin}/api/products/${i}`,k=await fetch(b,{method:"DELETE"});if(k.status!==200){const E=await k.json();n(2,c=E.errors),console.log(c);return}k.status===200&&o("success",{})}async function _(){const b=`${Pe.origin}/api/products/${i}`,k=await fetch(b);n(1,r=await k.json())}Ot(_);const w=()=>n(0,l=!1);return t.$$set=b=>{"show"in b&&n(0,l=b.show),"productCode"in b&&n(5,i=b.productCode)},[l,r,c,u,p,i,w]}class wn extends be{constructor(e){super(),_e(this,e,hn,bn,ge,{show:0,productCode:5})}}function yn(t){let e,n,l,i,o,r;return o=new te({props:{color:"green",base:600,onClick:t[1],title:"OK"}}),{c(){e=d("div"),n=d("p"),n.textContent="Success",l=g(),i=d("div"),q(o.$$.fragment),m(n,"class","text-black text-2xl"),m(e,"class","grid grid-cols-1 gap-1 bg-white h-1/3 w-1/4 rounded flex justify-center items-center text-center")},m(c,u){F(c,e,u),s(e,n),s(e,l),s(e,i),L(o,i,null),r=!0},p(c,[u]){const p={};u&1&&(p.onClick=c[1]),o.$set(p)},i(c){r||(y(o.$$.fragment,c),r=!0)},o(c){N(o.$$.fragment,c),r=!1},d(c){c&&C(e),M(o)}}}function $n(t,e,n){let{show:l}=e;const i=()=>n(0,l=!1);return t.$$set=o=>{"show"in o&&n(0,l=o.show)},[l,i]}class vn extends be{constructor(e){super(),_e(this,e,$n,yn,ge,{show:0})}}function Et(t,e,n){const l=t.slice();return l[23]=e[n],l[25]=n,l}function Pt(t,e,n){const l=t.slice();return l[26]=e[n],l}function kn(t){let e,n,l;function i(r){t[18](r)}let o={};return t[3]!==void 0&&(o.show=t[3]),e=new vn({props:o}),me.push(()=>Le(e,"show",i)),{c(){q(e.$$.fragment)},m(r,c){L(e,r,c),l=!0},p(r,c){const u={};!n&&c&8&&(n=!0,u.show=r[3],Te(()=>n=!1)),e.$set(u)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){N(e.$$.fragment,r),l=!1},d(r){M(e,r)}}}function Cn(t){let e,n,l,i;function o(u){t[16](u)}function r(u){t[17](u)}let c={};return t[3]!==void 0&&(c.show=t[3]),t[5]!==void 0&&(c.productCode=t[5]),e=new wn({props:c}),me.push(()=>Le(e,"show",o)),me.push(()=>Le(e,"productCode",r)),e.$on("success",t[14]),{c(){q(e.$$.fragment)},m(u,p){L(e,u,p),i=!0},p(u,p){const _={};!n&&p&8&&(n=!0,_.show=u[3],Te(()=>n=!1)),!l&&p&32&&(l=!0,_.productCode=u[5],Te(()=>l=!1)),e.$set(_)},i(u){i||(y(e.$$.fragment,u),i=!0)},o(u){N(e.$$.fragment,u),i=!1},d(u){M(e,u)}}}function Fn(t){let e,n,l;function i(r){t[15](r)}let o={};return t[3]!==void 0&&(o.show=t[3]),e=new mn({props:o}),me.push(()=>Le(e,"show",i)),e.$on("success",t[14]),{c(){q(e.$$.fragment)},m(r,c){L(e,r,c),l=!0},p(r,c){const u={};!n&&c&8&&(n=!0,u.show=r[3],Te(()=>n=!1)),e.$set(u)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){N(e.$$.fragment,r),l=!1},d(r){M(e,r)}}}function Nn(t){let e,n,l,i;const o=[Fn,Cn,kn],r=[];function c(u,p){return u[4]==="create"?0:u[4]==="edit"?1:u[4]==="success"?2:-1}return~(e=c(t))&&(n=r[e]=o[e](t)),{c(){n&&n.c(),l=Me()},m(u,p){~e&&r[e].m(u,p),F(u,l,p),i=!0},p(u,p){let _=e;e=c(u),e===_?~e&&r[e].p(u,p):(n&&(Ge(),N(r[_],1,1,()=>{r[_]=null}),Qe()),~e?(n=r[e],n?n.p(u,p):(n=r[e]=o[e](u),n.c()),y(n,1),n.m(l.parentNode,l)):n=null)},i(u){i||(y(n),i=!0)},o(u){N(n),i=!1},d(u){~e&&r[e].d(u),u&&C(l)}}}function St(t){let e,n=t[26]+"",l,i;return{c(){e=d("option"),l=R(n),i=g(),e.__value=t[26],e.value=e.__value},m(o,r){F(o,e,r),s(e,l),s(e,i)},p:de,d(o){o&&C(e)}}}function At(t){let e,n=t[2].products,l=[];for(let i=0;i<n.length;i+=1)l[i]=jt(Et(t,n,i));return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=Me()},m(i,o){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(i,o);F(i,e,o)},p(i,o){if(o&8196){n=i[2].products;let r;for(r=0;r<n.length;r+=1){const c=Et(i,n,r);l[r]?l[r].p(c,o):(l[r]=jt(c),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(i){Ue(l,i),i&&C(e)}}}function jt(t){let e,n=t[25]+1+"",l,i,o,r,c=t[23].code+"",u,p,_,w=t[23].name+"",b,k,E,v=t[23].category+"",z,J,j,I=t[23].brand+"",K,D,U,O=(t[23].type?t[23].type:"-")+"",Q,S,a,f=t[23].description+"",T,P,G,ie=t[23].createdAt+"",re,se,V,oe=t[23].updatedAt+"",H,fe,ce,B;function he(){return t[21](t[23])}return{c(){e=d("div"),l=R(n),i=g(),o=d("div"),r=d("button"),u=R(c),p=g(),_=d("div"),b=R(w),k=g(),E=d("div"),z=R(v),J=g(),j=d("div"),K=R(I),D=g(),U=d("div"),Q=R(O),S=g(),a=d("div"),T=R(f),P=g(),G=d("div"),re=R(ie),se=g(),V=d("div"),H=R(oe),fe=g(),m(e,"class","border "+(t[25]%2==0?"bg-zinc-100":"")),m(r,"class","text-white px-4 py-2 border rounded-lg bg-purple-500 hover:bg-purple-600 active:bg-purple-800"),m(o,"class","border "+(t[25]%2==0?"bg-zinc-100":"")),m(_,"class","border col-span-2 "+(t[25]%2==0?"bg-zinc-100":"")),m(E,"class","border "+(t[25]%2==0?"bg-zinc-100":"")),m(j,"class","border "+(t[25]%2==0?"bg-zinc-100":"")),m(U,"class","border "+(t[25]%2==0?"bg-zinc-100":"")),m(a,"class","border col-span-2 "+(t[25]%2==0?"bg-zinc-100":"")),m(G,"class","border "+(t[25]%2==0?"bg-zinc-100":"")),m(V,"class","border "+(t[25]%2==0?"bg-zinc-100":""))},m($,A){F($,e,A),s(e,l),F($,i,A),F($,o,A),s(o,r),s(r,u),F($,p,A),F($,_,A),s(_,b),F($,k,A),F($,E,A),s(E,z),F($,J,A),F($,j,A),s(j,K),F($,D,A),F($,U,A),s(U,Q),F($,S,A),F($,a,A),s(a,T),F($,P,A),F($,G,A),s(G,re),F($,se,A),F($,V,A),s(V,H),s(V,fe),ce||(B=le(r,"click",he),ce=!0)},p($,A){t=$,A&4&&c!==(c=t[23].code+"")&&Y(u,c),A&4&&w!==(w=t[23].name+"")&&Y(b,w),A&4&&v!==(v=t[23].category+"")&&Y(z,v),A&4&&I!==(I=t[23].brand+"")&&Y(K,I),A&4&&O!==(O=(t[23].type?t[23].type:"-")+"")&&Y(Q,O),A&4&&f!==(f=t[23].description+"")&&Y(T,f),A&4&&ie!==(ie=t[23].createdAt+"")&&Y(re,ie),A&4&&oe!==(oe=t[23].updatedAt+"")&&Y(H,oe)},d($){$&&C(e),$&&C(i),$&&C(o),$&&C(p),$&&C(_),$&&C(k),$&&C(E),$&&C(J),$&&C(j),$&&C(D),$&&C(U),$&&C(S),$&&C(a),$&&C(P),$&&C(G),$&&C(se),$&&C(V),ce=!1,B()}}}function En(t){let e,n,l,i,o,r,c,u,p,_,w,b,k,E,v,z,J,j,I,K,D,U,O,Q,S,a,f,T,P,G,ie,re,se,V,oe,H,fe,ce,B,he,$,A,tt,Oe,nt,qe,lt,ze,it,Be,rt,De,ot,He,st,Ie,ut,ft,x,we,ct,ye,at,Se,dt,Ve,pt,$e,mt,ve,ke,We,gt;function Bt(h){t[19](h)}let _t={$$slots:{default:[Nn]},$$scope:{ctx:t}};t[3]!==void 0&&(_t.show=t[3]),e=new rn({props:_t}),me.push(()=>Le(e,"show",Bt));let Ce=t[6],W=[];for(let h=0;h<Ce.length;h+=1)W[h]=St(Pt(t,Ce,h));a=new te({props:{onClick:t[7],color:"blue",title:"First"}}),T=new te({props:{onClick:t[8],color:"blue",title:"Previous"}}),V=new te({props:{onClick:t[9],color:"green",base:600,title:"Next"}}),H=new te({props:{onClick:t[10],color:"green",base:600,title:"Last"}});let X=t[2]&&t[2].products&&At(t);return we=new te({props:{onClick:t[7],color:"blue",title:"First"}}),ye=new te({props:{onClick:t[8],color:"blue",title:"Previous"}}),$e=new te({props:{onClick:t[9],color:"green",base:600,title:"Next"}}),ve=new te({props:{onClick:t[10],color:"green",base:600,title:"Last"}}),{c(){q(e.$$.fragment),l=g(),i=d("main"),o=d("div"),r=d("div"),c=d("p"),c.textContent="Developed by Sam Liew for Fourtitude Asia Spring Boot Test",u=g(),p=d("p"),p.innerHTML='Frontend: <span class="font-bold">Svelte-TS, TailwindCSS</span>',_=g(),w=d("p"),w.innerHTML='Backend: <span class="font-bold">Java 17, Spring Boot 3.1.0</span>',b=g(),k=d("p"),k.innerHTML='Misc: <span class="font-bold">H2(db), Hibernate, Lombok, JpaRepository</span>',E=g(),v=d("p"),v.textContent="Products",z=g(),J=d("div"),j=d("button"),j.textContent="Create New Product",I=g(),K=d("span"),D=d("span"),D.textContent="Max Results:",U=g(),O=d("select");for(let h=0;h<W.length;h+=1)W[h].c();Q=g(),S=d("div"),q(a.$$.fragment),f=g(),q(T.$$.fragment),P=g(),G=d("span"),ie=R("Page "),re=R(t[0]),se=g(),q(V.$$.fragment),oe=g(),q(H.$$.fragment),fe=g(),ce=d("div"),B=d("div"),he=d("div"),he.textContent="No.",$=g(),A=d("div"),A.textContent="Code",tt=g(),Oe=d("div"),Oe.textContent="Name",nt=g(),qe=d("div"),qe.textContent="Category",lt=g(),ze=d("div"),ze.textContent="Brand",it=g(),Be=d("div"),Be.textContent="Type",rt=g(),De=d("div"),De.textContent="Description",ot=g(),He=d("div"),He.textContent="Created At",st=g(),Ie=d("div"),Ie.textContent="Updated At",ut=g(),X&&X.c(),ft=g(),x=d("div"),q(we.$$.fragment),ct=g(),q(ye.$$.fragment),at=g(),Se=d("span"),dt=R("Page "),Ve=R(t[0]),pt=g(),q($e.$$.fragment),mt=g(),q(ve.$$.fragment),m(k,"class","italic"),m(v,"class","text-4xl font-bold"),m(j,"class","bg-green-600 text-white p-2 border rounded-lg hover:bg-green-800 active:bg-green-900"),m(O,"class","border border-black rounded p-1"),t[1]===void 0&&Ke(()=>t[20].call(O)),m(K,"class","text-right"),m(J,"class","mb-2 text-right"),m(G,"class","text-gray-800"),m(S,"class","text-center text-white mb-4"),m(he,"class","font-bold text-white text-lg bg-orange-500 py-2"),m(A,"class","font-bold text-white text-lg bg-orange-500 py-2"),m(Oe,"class","font-bold text-white text-lg bg-orange-500 py-2 col-span-2"),m(qe,"class","font-bold text-white text-lg bg-orange-500 py-2"),m(ze,"class","font-bold text-white text-lg bg-orange-500 py-2"),m(Be,"class","font-bold text-white text-lg bg-orange-500 py-2"),m(De,"class","font-bold text-white text-lg bg-orange-500 py-2 col-span-2"),m(He,"class","font-bold text-white text-lg bg-orange-500 py-2"),m(Ie,"class","font-bold text-white text-lg bg-orange-500 py-2"),m(B,"class","grid grid-cols-11 gap-0 border border-gray-300 "),m(ce,"class","text-center "),m(Se,"class","text-gray-800"),m(x,"class","text-center text-white mt-4"),m(r,"class","border border-black rounded-xl p-4"),m(o,"class","p-10 "),m(i,"class","")},m(h,Z){L(e,h,Z),F(h,l,Z),F(h,i,Z),s(i,o),s(o,r),s(r,c),s(r,u),s(r,p),s(r,_),s(r,w),s(r,b),s(r,k),s(r,E),s(r,v),s(r,z),s(r,J),s(J,j),s(J,I),s(J,K),s(K,D),s(K,U),s(K,O);for(let ae=0;ae<W.length;ae+=1)W[ae]&&W[ae].m(O,null);wt(O,t[1],!0),s(r,Q),s(r,S),L(a,S,null),s(S,f),L(T,S,null),s(S,P),s(S,G),s(G,ie),s(G,re),s(S,se),L(V,S,null),s(S,oe),L(H,S,null),s(r,fe),s(r,ce),s(ce,B),s(B,he),s(B,$),s(B,A),s(B,tt),s(B,Oe),s(B,nt),s(B,qe),s(B,lt),s(B,ze),s(B,it),s(B,Be),s(B,rt),s(B,De),s(B,ot),s(B,He),s(B,st),s(B,Ie),s(B,ut),X&&X.m(B,null),s(r,ft),s(r,x),L(we,x,null),s(x,ct),L(ye,x,null),s(x,at),s(x,Se),s(Se,dt),s(Se,Ve),s(x,pt),L($e,x,null),s(x,mt),L(ve,x,null),ke=!0,We||(gt=[le(j,"click",t[12]),le(O,"change",t[20]),le(O,"change",t[11])],We=!0)},p(h,[Z]){const ae={};if(Z&536870968&&(ae.$$scope={dirty:Z,ctx:h}),!n&&Z&8&&(n=!0,ae.show=h[3],Te(()=>n=!1)),e.$set(ae),Z&64){Ce=h[6];let ee;for(ee=0;ee<Ce.length;ee+=1){const bt=Pt(h,Ce,ee);W[ee]?W[ee].p(bt,Z):(W[ee]=St(bt),W[ee].c(),W[ee].m(O,null))}for(;ee<W.length;ee+=1)W[ee].d(1);W.length=Ce.length}Z&66&&wt(O,h[1]),(!ke||Z&1)&&Y(re,h[0]),h[2]&&h[2].products?X?X.p(h,Z):(X=At(h),X.c(),X.m(B,null)):X&&(X.d(1),X=null),(!ke||Z&1)&&Y(Ve,h[0])},i(h){ke||(y(e.$$.fragment,h),y(a.$$.fragment,h),y(T.$$.fragment,h),y(V.$$.fragment,h),y(H.$$.fragment,h),y(we.$$.fragment,h),y(ye.$$.fragment,h),y($e.$$.fragment,h),y(ve.$$.fragment,h),ke=!0)},o(h){N(e.$$.fragment,h),N(a.$$.fragment,h),N(T.$$.fragment,h),N(V.$$.fragment,h),N(H.$$.fragment,h),N(we.$$.fragment,h),N(ye.$$.fragment,h),N($e.$$.fragment,h),N(ve.$$.fragment,h),ke=!1},d(h){M(e,h),h&&C(l),h&&C(i),Ue(W,h),M(a),M(T),M(V),M(H),X&&X.d(),M(we),M(ye),M($e),M(ve),We=!1,ue(gt)}}}function Pn(t,e,n){let l=1,i=10,o,r=!1,c="",u;const p=[];for(let a=10;a<=25;a++)p.push(a);async function _(a){const f=`${Pe.origin}/api/products?page=${a}&max=${i}`,T=await fetch(f);n(2,o=await T.json()),n(0,l=o.page+1),console.log(`new page is ${l}`),n(1,i=o.max)}async function w(){_(1)}async function b(){_(l-1)}async function k(){_(l+1)}async function E(){const a=`${Pe.origin}/api/products/last?max=${i}`,f=await fetch(a);n(2,o=await f.json()),n(0,l=o.page+1),n(1,i=o.max)}function v(){_(l)}function z(){n(3,r=!0),n(4,c="create")}function J(a){n(5,u=a),n(3,r=!0),n(4,c="edit")}function j(a){n(4,c="success"),_(l)}Ot(()=>_(l));function I(a){r=a,n(3,r)}function K(a){r=a,n(3,r)}function D(a){u=a,n(5,u)}function U(a){r=a,n(3,r)}function O(a){r=a,n(3,r)}function Q(){i=Vt(this),n(1,i),n(6,p)}return[l,i,o,r,c,u,p,w,b,k,E,v,z,J,j,I,K,D,U,O,Q,a=>J(a.code)]}class Sn extends be{constructor(e){super(),_e(this,e,Pn,En,ge,{})}}new Sn({target:document.getElementById("app")});