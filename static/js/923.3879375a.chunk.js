"use strict";(self.webpackChunkmovrog=self.webpackChunkmovrog||[]).push([[923],{923:(e,s,o)=>{o.r(s),o.d(s,{default:()=>n});var a=o(43),t=o(733),c=o(957),i=o(579);const l={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q"}},n=()=>{let e=(0,t.g)();console.log(e.id);const[s,o]=(0,a.useState)([]);return(0,a.useEffect)((()=>{fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"?language=en-US"),l).then((e=>e.json())).then((e=>o(e))).catch((e=>console.error(e))),console.log(e.id)}),[]),console.log(s.id),s.id?(0,i.jsx)("div",{children:s&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:c.A.boxLOad,children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:c.A.imgPoster,src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path)})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:c.A.titleLoad,children:s.title}),(0,i.jsxs)("p",{className:c.A.textLload,children:["release date: ",s.release_date]}),(0,i.jsxs)("p",{className:c.A.textLload,children:["rating: ",s.vote_average]}),(0,i.jsx)("p",{className:c.A.textLloadabout,children:s.overview})]})]}),(0,i.jsxs)("div",{className:c.A.loadLinks,children:[(0,i.jsx)(t.N_,{className:c.A.tocast,to:"cast/".concat(e.id),children:"Cast"}),(0,i.jsx)(t.N_,{to:"reviews/".concat(e.id),children:"Reviews"}),(0,i.jsx)(t.sv,{})]})]})}):(0,i.jsxs)("div",{className:c.A.notFoundLoadPage,children:[(0,i.jsx)("h2",{className:c.A.notFoundLoad,children:"movie not found :)"}),(0,i.jsx)("img",{className:c.A.notFoundLoadimg,src:"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"})]})}}}]);
//# sourceMappingURL=923.3879375a.chunk.js.map