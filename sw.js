if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const c=e=>n(e,s),a={module:{uri:s},exports:d,require:c};i[s]=Promise.all(r.map((e=>a[e]||c(e)))).then((e=>(o(...e),d)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"55cd88a0e0dd5072dc946b654d9cba31"},{url:"android-chrome-512x512.png",revision:"3ab1e10dec4a35f3cca5999a9e30e315"},{url:"apple-touch-icon.png",revision:"10947a64b5b637980430d555955bf423"},{url:"assets/brown-noise-339a700d.ogg",revision:null},{url:"assets/index-1ded0d1b.js",revision:null},{url:"assets/pink-noise-3b79b0a5.ogg",revision:null},{url:"assets/purple-noise-f88df28b.ogg",revision:null},{url:"assets/vendor-0edd8087.js",revision:null},{url:"assets/white-noise-dde19c99.ogg",revision:null},{url:"favicon-16x16.png",revision:"aaae97d1c136dcc2307166947eecc493"},{url:"favicon-32x32.png",revision:"d5ec1de07af58e9bce7491552fe7b1f1"},{url:"favicon.ico",revision:"1bd193647ae9d70b1d44b8e0dacc4680"},{url:"index.html",revision:"174372a6e97e5b923d76f1a74606e264"},{url:"manifest.webmanifest",revision:"04c7b6cedfced9da6bf9f00768387b63"},{url:"registerSW.js",revision:"308a9ae53773e72bc413748aaaf8bd3c"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"0c2543bdbb4fa1322959ca2fc5ca08ff"},{url:"android-chrome-192x192.png",revision:"55cd88a0e0dd5072dc946b654d9cba31"},{url:"android-chrome-512x512.png",revision:"3ab1e10dec4a35f3cca5999a9e30e315"},{url:"apple-touch-icon.png",revision:"10947a64b5b637980430d555955bf423"},{url:"favicon-16x16.png",revision:"aaae97d1c136dcc2307166947eecc493"},{url:"favicon-32x32.png",revision:"d5ec1de07af58e9bce7491552fe7b1f1"},{url:"favicon.ico",revision:"1bd193647ae9d70b1d44b8e0dacc4680"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"0c2543bdbb4fa1322959ca2fc5ca08ff"},{url:"manifest.webmanifest",revision:"04c7b6cedfced9da6bf9f00768387b63"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));