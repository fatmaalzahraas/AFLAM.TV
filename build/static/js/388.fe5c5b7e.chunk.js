"use strict";(self.webpackChunkaflam_tv=self.webpackChunkaflam_tv||[]).push([[388],{388:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var s=r(9439),l=r(2791),x=r(4165),a=r(5861),o=r(1087),n=r(7425),i=r(6856),c=r(5906),d=r(7689),u=r(1012),p=r(9085),m=r(673),h=r(7799),g=r(184),f=function(){var e=(0,l.useContext)(c.v),t=(0,s.Z)(e,2),r=t[0],f=t[1],v=(0,u._)(),j=v.user,b=v.logOut,k=(0,l.useState)(!1),N=(0,s.Z)(k,2),C=N[0],w=N[1],y=(0,l.useState)(""),B=(0,s.Z)(y,2),A=B[0],M=B[1],Z=(0,l.useState)(0),U=(0,s.Z)(Z,2),F=U[0],L=U[1],S={s:"".concat(A)},D=(0,d.s0)(),z=function(){w(!C)},_=function(e){e.preventDefault(),A&&(D({pathname:"search-movies",search:"".concat((0,o.fW)(S))}),M(""))},Q=function(){var e=(0,a.Z)((0,x.Z)().mark((function e(){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:D("/AFLAM.TV"),p.Am.success("Logged out successfully"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){(0,h.cf)((0,h.JU)(m.db,"users","".concat(null===j||void 0===j?void 0:j.email)),(function(e){var t,r;L(null===(t=e.data())||void 0===t||null===(r=t.savedMovies)||void 0===r?void 0:r.length)}))}),[null===j||void 0===j?void 0:j.email]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"w-full bg-lightColor dark:bg-darkBlue/95 sm:dark:shadow-lightBlue dark:border-darkColor sm:shadow-lg sm:shadow-neutral-500 border-gray-200 border-b transition-colors duration-[0.4s]",children:[(0,g.jsxs)("div",{className:"container flex justify-between items-center px-[10px] sm:px-[15px] md:px-[30px] lg:px-[45px] py-5 mx-auto",children:[(0,g.jsx)("h1",{className:"xxs:text-xl text-2xl md:text-3xl text-main font-bold italic cursor-pointer",onClick:function(){return D("home")},children:"AFLAM.TV"}),(0,g.jsxs)("div",{className:"flex items-center gap-x-3 md:gap-x-4",children:[(0,g.jsxs)("div",{className:"cursor-pointer items-center relative mr-1 hidden sm:flex",children:[(0,g.jsx)("input",{className:"placeholder:italic placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] text-[0.9rem]  outline-0 w-full py-[3px] md:py-[5px] px-3 bg-lightColor border-borderColor border-[1px] rounded sm:focus:w-[260px] md:focus:w-[280px] lg:focus:w-[500px] xl:focus:w-[750px] transition-[width] duration-[0.5s]",placeholder:"Search Any Movie....",value:A||"",onChange:function(e){return M(e.target.value)}}),(0,g.jsx)("button",{className:"absolute right-2 z-[5]",onClick:_,children:(0,g.jsx)(n.Qcu,{className:"text-lightBlue/70 text-[14px] md:text-[16px] "})})]}),(0,g.jsxs)("div",{className:"flex items-center gap-x-3 md:gap-x-4 xxs:gap-x-2",children:[(0,g.jsx)("p",{className:"cursor-pointer text-darkBlue dark:text-lightColor font-medium text-[14px] md:text-[15px] xxs:text-[13px]",children:(0,g.jsx)(o.rU,{to:"movies",children:"Movies"})}),(null===j||void 0===j?void 0:j.email)&&(0,g.jsxs)("div",{className:"relative",children:[(0,g.jsx)("span",{className:"absolute rounded-full xxs:w-3 xxs:h-3 w-3.5 h-3.5 bg-main flex items-center text-lightColor justify-center xxs:text-[8px] text-[9px] md:text-[10px] xxs:top[-5px] top-[-12px] right-[-4px] ",children:F||"0"}),(0,g.jsx)(o.rU,{to:"my-account",children:(0,g.jsx)(i.Yqy,{className:"cursor-pointer text-darkBlue dark:text-lightColor xxs:text-[15px] text-[17px] md:text-[19px]"})})]}),null!==j&&void 0!==j&&j.email?(0,g.jsx)(o.rU,{className:"cursor-pointer xxs:text-[13px] text-[15px] md:text-[17px] text-main underline",onClick:Q,children:"Logout"}):(0,g.jsxs)("div",{className:C?"triangle":"after:hidden",children:[(0,g.jsx)(n.s60,{className:"cursor-pointer text-darkBlue dark:text-lightColor text-[17px] xxs:text-[15px]",onClick:z}),C&&(0,g.jsxs)("div",{className:"absolute bg-lightBlue/90 dark:bg-lightColor/90 z-10 w-[110px] md:w-[130px] min-h-[60px] top-[40px] left-[-35px] md:left-[-70px] flex items-center flex-col p-[8px] md:p-[10px] gap-y-[0.4rem]",onClick:z,children:[(0,g.jsx)(o.rU,{to:"login",className:"text-darkBlue text-[15px] md:text-[16px] hover:text-main transition xxs:text-[14px]",children:"Login"}),(0,g.jsx)(o.rU,{to:"register",className:"text-darkBlue text-[15px] md:text-[16px] hover:text-main transition xxs:text-[14px]",children:"Register"})]})]})]}),(0,g.jsx)("div",{className:"px-2 xxs:px-1 border-[#D3D3D3] border-l",onClick:function(){return f(!r)},children:r?(0,g.jsx)(i.A9M,{className:"text-switchMode ml-2 cursor-pointer text-[1.4rem] xxs:text-[1.2rem]"}):(0,g.jsx)(n.AjM,{className:"text-lightBlue ml-2 cursor-pointer text-[1.4rem] xxs:text-[1.2rem]"})})]})]}),(0,g.jsx)("div",{className:"container px-[10px] mx-auto sm:hidden w-full  ",children:(0,g.jsxs)("div",{className:"cursor-pointer flex items-center relative mr-1 sm:hidden bg-lightColor dark:bg-darkBlue/95 mb-3",children:[(0,g.jsx)("input",{className:"placeholder:italic placeholder:text-[0.75rem] text-[0.9rem]  outline-0 w-full xxs:py-[2px] py-[3px] px-3 bg-lightColor border-borderColor border-[1px] rounded",placeholder:"Search Any Movie....",value:A||"",onChange:function(e){return M(e.target.value)}}),(0,g.jsx)(n.Qcu,{className:"text-lightBlue/70 text-[14px] md:text-[16px] absolute right-2 z-[5] cursor-pointer",onClick:_})]})})]})})},v=function(){return(0,g.jsx)("div",{className:"w-full py-4 sm:py-5  bg-lightColor dark:bg-darkBlue/95 dark:shadow-darkBlue dark:border-darkColor shadow-lg shadow-border border-gray-200 border-t transition-colors duration-[0.4s] flex justify-center",children:(0,g.jsx)("span",{className:"text-darkBlue dark:text-lightColor text-[0.9rem] xxs:text-[0.8rem]",children:"\xa9 Fatma-All rights reserved"})})},j=function(){var e=(0,l.useContext)(c.v),t=(0,s.Z)(e,1)[0];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:t?"dark":"",children:[(0,g.jsx)(f,{}),(0,g.jsx)(d.j3,{}),(0,g.jsx)(v,{})]})})}}}]);
//# sourceMappingURL=388.fe5c5b7e.chunk.js.map