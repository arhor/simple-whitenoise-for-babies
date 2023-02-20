var B=Object.defineProperty;var L=(t,n,r)=>n in t?B(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var m=(t,n,r)=>(L(t,typeof n!="symbol"?n+"":n,r),r);import{r as l,u as N,c as k,j as e,T as A,s as E,P as x,a as d,B as h,L as S,b as F,d as O,e as R,f as D,g as M,S as j,I as U,h as _,i as H,k as W,l as g,m as $,n as z,R as K,o as y,C as q,p as Q,q as V}from"./vendor-69dab9e4.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const G="/simple-whitenoise-for-babies/assets/brown-noise-339a700d.ogg",J="/simple-whitenoise-for-babies/assets/pink-noise-3b79b0a5.ogg",X="/simple-whitenoise-for-babies/assets/purple-noise-f88df28b.ogg",Y="/simple-whitenoise-for-babies/assets/white-noise-dde19c99.ogg",Z=l.createContext({});function b(t){return t?"dark":"light"}const p=Object.freeze({BROWN:"brown",PINK:"pink",PURPLE:"purple",WHITE:"white"}),ee=({children:t})=>{const[n,r]=l.useState(),a=N("(prefers-color-scheme: dark)"),o=l.useMemo(()=>k({palette:{mode:n??b(a),[p.BROWN]:{main:"#A52A2A"},[p.PINK]:{main:"#FFC0CB"},[p.PURPLE]:{main:"#800080"},[p.WHITE]:{main:"#FFFFFF"}}}),[n,a]),s={toggleColorMode(){r(c=>b(c==="light"))}};return e(Z.Provider,{value:s,children:e(A,{theme:o,children:t})})};function v(t){return{get value(){return Object.defineProperty(this,"value",{value:t()}),this.value}}}const te=[{primary:"Brown noise"},{primary:"Pink noise"},{primary:"Purple noise"},{primary:"White noise"}];E(x)(({theme:t})=>({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));const oe=()=>{const[t,n]=l.useState(!1),[r,a]=l.useState(null),[o,s]=l.useState(null),[c,C]=l.useState(0),u=l.useMemo(()=>v(()=>new(window.AudioContext??window.webkitAudioContext)),[]);async function P(i){const T=await(await fetch(i,{mode:"cors"})).arrayBuffer();return v(()=>u.value.decodeAudioData(T))}l.useEffect(()=>{Promise.all([G,J,X,Y].map(i=>P(i))).then(i=>a(i))},[]);const I=async()=>{if(u.value.state==="suspended"&&u.value.resume(),t)o.stop(),o.disconnect(),s(null),n(!1);else{const i=u.value.createBufferSource();i.buffer=await r[c].value,i.connect(u.value.destination),i.loop=!0,i.start(),s(i),n(!0)}};return d(h,{sx:{pb:7},children:[e(S,{children:te.map(({primary:i},f)=>e(F,{children:d(O,{onClick:()=>C(f),children:[e(R,{children:e(D,{})}),e(M,{primary:i})]})},f))}),e(x,{sx:{position:"fixed",bottom:0,left:0,right:0,p:1},elevation:3,children:e(j,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:e(U,{size:"large",sx:{background:"#9900ff"},onClick:I,"aria-label":"toggle white noise",children:t?e(_,{}):e(H,{})})})})]})},ne=()=>{const t=W();return d(h,{sx:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e(h,{mb:0,children:e(g,{variant:"h4",children:"Ups, page not found"})}),e(h,{mb:2,children:e(g,{variant:"body1",children:"Please, try to find somewhere else"})}),e($,{variant:"outlined",onClick:()=>{t("/")},children:"Bring me home"})]})},re=()=>e(z,{basename:"/simple-whitenoise-for-babies/".slice(0,-1),children:d(K,{children:[e(y,{path:"/",element:e(oe,{})}),e(y,{path:"*",element:e(ne,{})})]})}),w="Ups, something went wrong...",se="Please, contact system administrator if you have nothing else to do";class ie extends l.Component{constructor(){super(...arguments);m(this,"state",{error:null,errorInfo:null})}static getDerivedStateFromError(r){return{error:r}}componentDidCatch(r,a){this.setState({error:r,errorInfo:a})}render(){const{error:r,errorInfo:a}=this.state;if(a){const[o,s]={}.NODE_ENV==="development"?[(r==null?void 0:r.toString())??w,a.componentStack]:[w,se];return d(Box,{sx:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e(Box,{mb:0,children:e(Typography,{variant:"h4",children:o})}),e(Box,{mb:2,children:e(Typography,{variant:"body1",children:s})})]})}return this.props.children}}const ae=()=>d(ee,{children:[e(q,{}),e(ie,{children:e(Q,{component:"main",children:e(re,{})})})]});V(document.getElementById("root")).render(e(l.StrictMode,{children:e(ae,{})}));
