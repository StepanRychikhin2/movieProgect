"use strict";(self.webpackChunkmovrog=self.webpackChunkmovrog||[]).push([[875],{875:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var r=t(733),i=t(43),o=t(957),n=t(579);const a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q"}},c=()=>{const[e,s]=(0,i.useState)([]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:o.A.inputContainerBox,children:(0,n.jsxs)("div",{className:o.A.inputContainer,children:[(0,n.jsx)("input",{id:"inputSerh",type:"text",name:"text",className:o.A.input,placeholder:"search..."}),(0,n.jsx)("button",{onClick:e=>{return t=document.getElementById("inputSerh").value,void fetch("https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=".concat(t),a).then((e=>e.json())).then((e=>s(e)));var t},className:o.A.icon,children:(0,n.jsx)("span",{children:(0,n.jsxs)("svg",{width:"19px",height:"19px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,n.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,n.jsx)("path",{opacity:"1",d:"M14 5H20",stroke:"#000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})," ",(0,n.jsx)("path",{opacity:"1",d:"M14 8H17",stroke:"#000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})," ",(0,n.jsx)("path",{d:"M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2",stroke:"#000","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})," ",(0,n.jsx)("path",{opacity:"1",d:"M22 22L20 20",stroke:"#000","stroke-width":"3.5","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]})})})]})}),(0,n.jsxs)("ul",{className:o.A.serhList,children:[e&&e.results?e.results.map((e=>(0,n.jsx)("li",{className:o.A.serhItyem,children:(0,n.jsxs)(r.N_,{className:o.A.serhtextName,to:"/Loadpage/".concat(e.id),children:[(0,n.jsx)("img",{className:o.A.serhPoster,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),(0,n.jsx)("p",{children:e.original_title})]})},e.id))):(0,n.jsx)(n.Fragment,{}),console.log(e)]}),(0,n.jsx)(r.sv,{})]})}}}]);
//# sourceMappingURL=875.3732f5aa.chunk.js.map