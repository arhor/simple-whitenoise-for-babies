var C=Object.defineProperty;var T=(r,n,o)=>n in r?C(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o;var f=(r,n,o)=>(T(r,typeof n!="symbol"?n+"":n,o),o);import{r as l,j as e,B as d,I as w,d as P,a as B,u as S,b as u,T as m,c as E,e as I,R as L,f as p,g as N,h as k,i as A,C as D,k as M,l as R}from"./vendor-aa95cedc.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const j="/simple-whitenoise-for-babies/assets/white-noise-dde19c99.ogg",O=()=>{const r=l.useMemo(()=>new(window.AudioContext??window.webkitAudioContext),[]),[n,o]=l.useState(!1),[i,t]=l.useState(!0),[s,c]=l.useState(null),[x,h]=l.useState(null);l.useEffect(()=>(fetch(j,{mode:"cors"}).then(a=>a.arrayBuffer()).then(a=>r.decodeAudioData(a)).then(a=>{c(a),o(!0)}),()=>{}),[]);function v(){const a=r.createBufferSource();a.buffer=s,a.connect(r.destination),a.loop=!0,a.start(),h(a),t(!1),console.log("play")}function b(){x.stop(),h(null),t(!0),console.log("stop")}return e(d,{sx:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:n&&e(w,{size:"large",sx:{background:"#9900ff"},onClick:async()=>{i?v():b()},"aria-label":"toggle white noise",children:i?e(P,{}):e(B,{})})})},F=()=>{const r=S();return u(d,{sx:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e(d,{mb:0,children:e(m,{variant:"h4",children:"Ups, page not found"})}),e(d,{mb:2,children:e(m,{variant:"body1",children:"Please, try to find somewhere else"})}),e(E,{variant:"outlined",onClick:()=>{r("/")},children:"Bring me home"})]})},U=()=>e(I,{basename:"/simple-whitenoise-for-babies/".slice(0,-1),children:u(L,{children:[e(p,{path:"/",element:e(O,{})}),e(p,{path:"*",element:e(F,{})})]})}),g="Ups, something went wrong...",_="Please, contact system administrator if you have nothing else to do";class $ extends l.Component{constructor(){super(...arguments);f(this,"state",{error:null,errorInfo:null})}static getDerivedStateFromError(o){return{error:o}}componentDidCatch(o,i){this.setState({error:o,errorInfo:i})}render(){const{error:o,errorInfo:i}=this.state;if(i){const[t,s]={}.NODE_ENV==="development"?[(o==null?void 0:o.toString())??g,i.componentStack]:[g,_];return u(Box,{sx:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[e(Box,{mb:0,children:e(Typography,{variant:"h4",children:t})}),e(Box,{mb:2,children:e(Typography,{variant:"body1",children:s})})]})}return this.props.children}}const H=l.createContext({});function y(r){return r?"dark":"light"}const q=({children:r})=>{const[n,o]=l.useState(),i=N("(prefers-color-scheme: dark)"),t=l.useMemo(()=>k({palette:{mode:n??y(i)}}),[n,i]),s={toggleColorMode(){o(c=>y(c==="light"))}};return e(H.Provider,{value:s,children:e(A,{theme:t,children:r})})},z=()=>u(q,{children:[e(D,{}),e($,{children:e(M,{component:"main",maxWidth:"sm",children:e(U,{})})})]});R(document.getElementById("root")).render(e(l.StrictMode,{children:e(z,{})}));
