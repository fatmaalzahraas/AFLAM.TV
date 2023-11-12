"use strict";(self.webpackChunkaflam_tv=self.webpackChunkaflam_tv||[]).push([[657],{1687:function(e,t,s){s.d(t,{$h:function(){return a},Wc:function(){return n}});var l=s(1243),n="https://image.tmdb.org/t/p/",a="e4997fa5c977c3bda84aaa43465c7a03",r=l.Z.create({baseURL:"https://api.themoviedb.org/3/"});t.ZP=r},558:function(e,t,s){s(2791);var l=s(184);t.Z=function(){return(0,l.jsx)("div",{className:"flex flex-col animate-pulse",children:(0,l.jsx)("div",{className:"h-[300px] xs:h-[260px] xxs:h-[250px] xs:w-[180px] w-[200px] sm:w-[190px] md:w-[220px] bg-slate-200 rounded-md"})})}},6961:function(e,t,s){var l=s(2791),n=s(184);t.Z=function(e){var t=e.children,s=e.title;return(0,l.useEffect)((function(){document.title="AFLAM.TV | ".concat(s||"Watch Movies")}),[s]),(0,n.jsx)("div",{children:t})}},427:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var l=s(9439),n=s(2791),a=s(1687),r=s(6899),i=s(794),o=(s(4676),s(7689)),d=s(9751),c=s(184),x=function(){var e=(0,n.useState)([]),t=(0,l.Z)(e,2),s=t[0],x=t[1],u=(0,n.useState)(!1),p=(0,l.Z)(u,2),m=p[0],h=p[1],g=(0,o.s0)();return(0,n.useEffect)((function(){h(!0),a.ZP.get("movie/popular?api_key=".concat(a.$h,"&language=en-US&page=1")).then((function(e){x(e.data.results),h(!1)})).catch((function(e){h(!1),console.log(e.message)}))}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"w-full p-5 sm:p-4 md:p-7 lg:p-9 flex justify-items-center items-center bg-lightColor dark:bg-darkBlue transition-colors duration-[0.3s]",children:(0,c.jsx)(i.tq,{className:"w-full md:h-[300px] lg:h-[450px] h-56 rounded md:rounded-md",slidesPerView:1,direction:"vertical",spaceBetween:0,speed:1e3,loop:!0,modules:[r.pt],autoplay:{delay:3e3,disableOnInteraction:!1},children:m?(0,c.jsx)(d.Z,{styles:"justify-center mt-[3rem]"}):(0,c.jsx)(c.Fragment,{children:null===s||void 0===s?void 0:s.map((function(e){return(0,c.jsx)(i.o5,{className:"rounded md:rounded-md",children:(0,c.jsxs)("div",{className:"h-full",children:[(0,c.jsx)("div",{className:"absolute w-full h-full bg-darkColor opacity-50"}),(0,c.jsx)("img",{className:"w-full h-full object-cover",src:"".concat(a.Wc,"original/").concat(null===e||void 0===e?void 0:e.backdrop_path),alt:null===e||void 0===e?void 0:e.title,loading:"lazy"}),(0,c.jsxs)("div",{className:"absolute w-3/4 top-[35px] md:top-1/4 z-10 left-14 xxs:top-4 xxs:left-6",children:[(0,c.jsx)("h2",{className:"text-lightColor text-xl md:text-2xl font-semibold mb-4 xxs:text-lg",children:null===e||void 0===e?void 0:e.title}),(0,c.jsx)("p",{className:"text-lightColor mb-2 text-xs",children:null===e||void 0===e?void 0:e.release_date}),(0,c.jsxs)("p",{className:"text-lightColor text-xs mb-7",children:["Rating: ",null===e||void 0===e?void 0:e.vote_average]}),(0,c.jsx)("div",{className:"flex items-center gap-x-4 md:gap-x-5",children:(0,c.jsx)("button",{className:"bg-main text-lightColor hover:text-grayColor transition px-3 md:px-4 py-2 text-xs md:text-sm rounded",onClick:function(){return g("/movie/".concat(e.id))},children:"Watch"})})]})]})},e.id)}))})})})})},u=s(6961),p=s(4165),m=s(5861),h=(s(4432),s(9126)),g=s(6053),f=(0,n.memo)((function(e){var t=e.start,s=e.end,l=(0,i.oc)();return(0,c.jsxs)("div",{className:"flex justify-center items-center mt-8 gap-x-[1rem] mb-4",children:[(0,c.jsx)("button",{className:"py-2 px-4 xxs:px-3 bg-grayColor dark:bg-lightColor dark:disabled:bg-lightColor/50 cursor-pointer xxs:text-[15px] text-[17px] md:text-[17px] rounded disabled:cursor-not-allowed disabled:bg-grayColor/50",onClick:function(){return l.slidePrev()},disabled:t,children:(0,c.jsx)(g.Ugn,{})}),(0,c.jsx)("button",{className:"py-2 px-4 xxs:px-3 bg-grayColor dark:bg-lightColor dark:disabled:bg-lightColor/50 cursor-pointer xxs:text-[15px] text-[17px] md:text-[17px] rounded disabled:cursor-not-allowed disabled:bg-grayColor/50",onClick:function(){return l.slideNext()},disabled:s,children:(0,c.jsx)(g.ULj,{})})]})})),v=s(2479),b=s(558),j=(0,n.lazy)((function(){return(0,v.D)(1500).then((function(){return Promise.all([s.e(856),s.e(860),s.e(30),s.e(235)]).then(s.bind(s,4235))}))})),w=function(e){var t=e.title,s=e.url,o=(0,n.useState)([]),d=(0,l.Z)(o,2),x=d[0],u=d[1],g=(0,n.useState)(!1),v=(0,l.Z)(g,2),w=v[0],k=v[1],y=(0,n.useState)(!0),C=(0,l.Z)(y,2),N=C[0],Z=C[1];return(0,n.useEffect)((function(){var e=function(){var e=(0,m.Z)((0,p.Z)().mark((function e(){var t;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.ZP.get("movie/".concat(s,"?api_key=").concat(a.$h,"&language=en-US&page=1"));case 3:t=e.sent,u(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]),(0,c.jsx)("div",{className:"bg-lightColor dark:bg-darkBlue py-7",children:(0,c.jsxs)("div",{className:"container px-[10px] md:px-[30px] lg:px-[45px] py-3.5 mx-auto",children:[(0,c.jsxs)("div",{className:"flex items-center gap-x-3 mb-[1.7rem]",children:[(0,c.jsx)("h2",{className:"text-darkBlue dark:text-lightColor text-[1.1rem] md:text-[1.3rem] font-bold xxs:text-[1rem]",children:t}),(0,c.jsx)(h.ACo,{className:"text-darkBlue dark:text-lightColor text-[20px] xxs:text-[18px]"})]}),(0,c.jsx)("div",{children:(0,c.jsxs)(i.tq,{className:"w-full h-full",speed:1200,autoplay:{delay:2e3,disableOnInteraction:!1},modules:[r.pt,r.W_],onSlideChange:function(e){Z(e.isBeginning),k(e.isEnd)},breakpoints:{0:{slidesPerView:2,spaceBetween:10},415:{slidesPerView:3,spaceBetween:8},639:{slidesPerView:3,spaceBetween:6},865:{slidesPerView:4,spaceBetween:10},1280:{slidesPerView:5,spaceBetween:8},1500:{slidesPerView:6,spaceBetween:10}},children:[(0,c.jsx)("div",{children:null===x||void 0===x?void 0:x.map((function(e){return(0,c.jsx)(i.o5,{children:(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(b.Z,{}),children:(0,c.jsx)(j,{movie:e})})},e.id)}))}),(0,c.jsx)(f,{start:N,end:w})]})})]})})},k=function(){return(0,c.jsxs)(u.Z,{title:"Watch Any Movies you want",children:[(0,c.jsx)(x,{}),(0,c.jsx)(w,{title:"Upcoming",url:"upcoming"}),(0,c.jsx)(w,{title:"Top-rated",url:"top_rated"}),(0,c.jsx)(w,{title:"Trending",url:"popular"}),(0,c.jsx)(w,{title:"Popular",url:"popular"})]})}}}]);
//# sourceMappingURL=657.9abb4bfd.chunk.js.map