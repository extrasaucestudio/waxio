(this.webpackJsonpbcbrawlers=this.webpackJsonpbcbrawlers||[]).push([[7],{522:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"f",(function(){return i})),t.d(e,"d",(function(){return o})),t.d(e,"c",(function(){return a})),t.d(e,"e",(function(){return c})),t.d(e,"b",(function(){return d}));var r=function(n){return Math.floor(n)===n?0:n.toString().split(".")[1].length||0},i=function(n){if(void 0!==n)return Math.round(100*n)/100},o=function(n){return n<=0?n.toString():"+".concat(n)},a=function(n){return void 0===n?"":n<1e3?n.toString():"".concat(n/1e3,"k")},c=function(n){return l(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},d=function(n){var e=n.numberToFormat,t=n.decimalPlaces;return s(e,t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},l=function(n){return Math.trunc(n)},s=function(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}},523:function(n,e,t){"use strict";var r,i,o,a=t(31),c=t(1),d=t(14),l=t(514),s=t(27),m=t(515),u=t.p+"static/media/back-icon.29a9ce61.svg",b=t(8),f=function(){var n=Object(d.g)(),e=Object(l.a)().t,t=function(){n("/home")};return Object(b.jsxs)(h,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(n){return Object(m.a)(n,t)},children:[Object(b.jsx)(p,{children:Object(b.jsx)("img",{src:u,alt:"Go back"})}),Object(b.jsx)(j,{children:e("backButton.goBrawl")})]})},h=(e.a=Object(c.memo)(f),s.default.div(r||(r=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  gap: 1.8vw;\n  background: ",";\n  border-radius: 4rem;\n  padding-right: 2rem;\n  cursor: pointer;\n  color: ",";\n  border: 1px solid ",";\n  margin-top: 0.5rem;\n  \n  &:focus {\n    box-shadow: 0px 4px 4px black;\n    outline: none;\n  }\n\n  @media "," {\n    display: none;\n  }\n"])),(function(n){return n.theme.gradients.slate}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.breakpoints.mobile}))),p=s.default.div(i||(i=Object(a.a)(["\n  width: fit-content;\n  padding: 0.8rem 1.1rem 0.8rem 0.9rem;\n  border-radius: 4rem;\n  background: ",";\n  transform: scale(1.4);\n  font-size: calc(12px + 0.4vw);\n  color: ",";\n  border: 1px solid ",";\n\n  img {\n    height: 1.5rem;\n  }\n"])),(function(n){return n.theme.gradients.slate}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.darkGrey})),j=s.default.span(o||(o=Object(a.a)(["\n  font-family: 'DDC Hardware', sans-serif;\n  font-weight: bold;\n  font-size: calc(10px + 0.4vw);\n"])))},524:function(n,e,t){"use strict";var r,i=t(31),o=t(14),a=t(27),c=t(515),d=t.p+"static/media/back-icon.1a055b99.svg",l=t(8),s=(e.a=function(){var n=Object(o.g)(),e=function(){n("/home")};return Object(l.jsx)(s,{role:"button",tabIndex:0,onClick:e,onKeyDown:function(n){return Object(c.a)(n,e)},children:Object(l.jsx)("img",{src:d,alt:"Go back"})})},a.default.div(r||(r=Object(i.a)(["\n  display: none;\n  width: fit-content;\n  padding: 0.8rem 1.1rem 0.8rem 0.9rem;\n  border-radius: 8px;\n  background: ",";\n  border: 1px solid ",";\n  cursor: pointer;\n\n  @media "," {\n    display: block;\n  }\n"])),(function(n){return n.theme.gradients.slate}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.breakpoints.mobile})))},611:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,d,l,s,m,u,b,f,h,p,j,g,x,O,w,v,k,y,S,D,C,T,z,G,F,H,P,L,A,J,M,B,I,U,E,K,N,Q,R,V,q=t(31),W=t(514),X=t(27),Y=t(537),Z=t(536),$=t(523),_=t(524),nn=t(528),en=t(17),tn=t(1),rn=t(517),on=t(144),an=t(139),cn=t(8),dn=function(n){var e=n.onChange,t=Object(W.a)().t;return Object(cn.jsxs)(ln,{children:[Object(cn.jsx)("img",{src:on.a,alt:"referee"}),Object(cn.jsx)(sn,{children:t("leaderboard.errors.general")}),Object(cn.jsx)(mn,{primary:!0,onClick:e,children:t("leaderboard.refetch")})]})},ln=X.default.div(r||(r=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  height: 100%;\n"]))),sn=X.default.div(i||(i=Object(q.a)(["\n  font-family: 'DDC Hardware', sans-serif;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.5rem;\n  text-align: center;\n  max-width: 25rem;\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),mn=Object(X.default)(an.a)(o||(o=Object(q.a)(["\n  width: 40%;\n"]))),un=t(532),bn=t(520),fn={First:{name:"first",translation:"leaderboard.podium.first",imageSrc:t.p+"static/media/belt-world-1.1cca2d16.png"},Second:{name:"second",translation:"leaderboard.podium.second",imageSrc:t.p+"static/media/belt-world-2.c44d801b.png"},Third:{name:"third",translation:"leaderboard.podium.third",imageSrc:t.p+"static/media/belt-world-3.70272c60.png"}},hn=function(n){var e=n.position,t=n.powerScore,r=Object(W.a)().t,i=""!==t.profile.frame;return Object(cn.jsxs)(pn,{children:[Object(cn.jsxs)(jn,{children:[t.profile.avatar?Object(cn.jsx)(gn,{src:Object(bn.a)(t.profile.avatar,"200x200"),alt:"Avatar",hasFrame:i}):Object(cn.jsx)(xn,{src:un.a,alt:"Avatar",hasFrame:i}),t.profile.frame&&Object(cn.jsx)(On,{src:Object(bn.a)(t.profile.frame,"200x200")})]}),Object(cn.jsxs)(wn,{position:e.name,children:[Object(cn.jsx)(vn,{title:t.profile.name||t.account,children:t.profile.name||t.account}),Object(cn.jsx)(kn,{position:e.name,children:r(e.translation)}),Object(cn.jsxs)(yn,{children:[t.score," ","PTS."]})]}),Object(cn.jsx)(Sn,{src:e.imageSrc})]})},pn=X.default.div(a||(a=Object(q.a)(["\n  width: 12rem;\n  height: 19.8rem;\n  position: relative;\n\n  @media "," {\n    width: 9.5rem;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile})),jn=X.default.div(c||(c=Object(q.a)(["\n  position: relative;\n  height: 12rem;\n\n  @media "," {\n    height: 9.5rem;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile})),gn=X.default.img(d||(d=Object(q.a)(["\n  width: 100%;\n  height: 12rem;\n\n  ","\n\n  @media "," {\n    height: 9.5rem;\n    padding: 0.1rem;\n  }\n"])),(function(n){return n.hasFrame&&" \n    padding: 0.5rem;\n  "}),(function(n){return n.theme.breakpoints.mobile})),xn=Object(X.default)(gn)(l||(l=Object(q.a)(["\n  background: ",";\n  padding: 1.5rem;\n"])),(function(n){return n.theme.gradients.slate})),On=X.default.img(s||(s=Object(q.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n"]))),wn=X.default.div(m||(m=Object(q.a)(["\n  height: 9.5rem;\n  margin-top: -0.2rem;\n\n  border: 1px solid;\n  border-bottom-right-radius: 0.4rem;\n  border-bottom-left-radius: 0.4rem;\n\n  display: flex;\n  flex-flow: column;\n  padding-bottom: 2rem;\n  justify-content: space-between;\n  \n  ","\n  \n  ","\n\n  ","\n"])),(function(n){return n.position===fn.First.name&&" \n    background: ".concat(n.theme.gradients.pink,"; \n    border-color: ").concat(n.theme.colors.pink,";\n  ")}),(function(n){return n.position===fn.Second.name&&" \n    background: ".concat(n.theme.gradients.gold,"; \n    border-color: ").concat(n.theme.colors.gold,";\n  ")}),(function(n){return n.position===fn.Third.name&&" \n    background: ".concat(n.theme.gradients.silverInvert,";\n    border-color: #C4C4C4;\n  ")})),vn=X.default.h1(u||(u=Object(q.a)([" \n  font-family: 'DDC Hardware';\n  font-weight: 400; \n  text-transform: uppercase;\n  text-align: center; \n  font-size: 1.2rem;  \n\n  color: ","; \n\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;    \n  text-overflow: ellipsis;\n  line-height: 1.5rem;\n\n  max-height: 4rem;\n  max-width: 87%;\n  margin: 1.3rem auto 0 auto;\n\n  @media "," {\n    margin-top: 1rem;\n    line-height: 1rem;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.mobile})),kn=X.default.h2(b||(b=Object(q.a)(["\n  font-family: 'DDC Hardware';\n  font-weight: 400;\n  \n  text-transform: uppercase;\n  text-align: center;\n\n  font-size: 1rem;\n\n  ","\n  \n  ","\n  \n  ","\n\n  @media "," { \n    line-height: 1rem;\n  }\n"])),(function(n){return n.position===fn.First.name&&" \n    color: #670028;\n  "}),(function(n){return n.position===fn.Second.name&&" \n    color: #5E4900;\n  "}),(function(n){return n.position===fn.Third.name&&" \n    color: #4D4D4D;\n  "}),(function(n){return n.theme.breakpoints.mobile})),yn=X.default.p(f||(f=Object(q.a)(["\n  font-family: 'DDC Hardware';\n  color: white;\n  font-weight: 400;\n  text-align: center;\n\n  @media "," {\n    bottom:  2rem;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile})),Sn=X.default.img(h||(h=Object(q.a)(["\n  position: absolute;\n  width: 9.7rem;\n  left: 0;\n  right: 0;\n  bottom: -6.5rem;\n\n  margin-left: auto;\n  margin-right: auto; \n\n  @media "," {\n    bottom:  -2rem;\n    width: 6rem;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile})),Dn=t.p+"static/media/background.f6f4b6b0.svg",Cn=function(n){var e=n.powerScoreList;return Object(cn.jsx)(Tn,{children:Object(cn.jsxs)(zn,{children:[Object(cn.jsx)(hn,{powerScore:e[1],position:fn.Second}),Object(cn.jsx)(hn,{powerScore:e[0],position:fn.First}),Object(cn.jsx)(hn,{powerScore:e[2],position:fn.Third})]})})},Tn=X.default.div(p||(p=Object(q.a)(["\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"])),Dn),zn=X.default.div(j||(j=Object(q.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 1rem;\n  padding-bottom: 6rem;\n\n  div:nth-child(1) {\n    margin-top: 1rem;\n  }\n\n  div:nth-child(3) {\n    margin-top: 2rem;\n  }\n\n  @media "," {\n    padding-bottom: 1rem;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile})),Gn=t(522),Fn=function(n){var e=n.powerScore,t=n.onJumpToSpot,r=Object(W.a)().t;return Object(cn.jsxs)(Hn,{children:[Object(cn.jsxs)(Pn,{children:[Object(cn.jsxs)(Ln,{children:[e.profile.avatar?Object(cn.jsx)(An,{src:Object(bn.a)(e.profile.avatar,"120x120"),alt:"Avatar"}):Object(cn.jsx)(Jn,{src:un.a,alt:"Avatar"}),e.profile.frame&&Object(cn.jsx)(Mn,{src:Object(bn.a)(e.profile.frame,"120x120")})]}),Object(cn.jsxs)(Bn,{children:[Object(cn.jsx)(In,{children:r("leaderboard.contentProfile.title")}),Object(cn.jsx)(Un,{title:e.profile.name||e.account,children:e.profile.name||e.account}),Object(cn.jsxs)(En,{children:["#"," ",Object(Gn.e)(e.position)]}),Object(cn.jsxs)(Kn,{children:[Object(Gn.b)({numberToFormat:e.score,decimalPlaces:3})," ","PTS"]})]})]}),e.position>3&&e.position<=1e3&&Object(cn.jsx)(an.a,{onClick:t,children:r("leaderboard.contentProfile.jumpToMySpot")})]})},Hn=X.default.div(g||(g=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n  height: 100%;\n"]))),Pn=X.default.div(x||(x=Object(q.a)(["\n  display:flex;\n  gap: 1.2rem;\n  align-items: center;\n  justify-content: center;\n"]))),Ln=X.default.div(O||(O=Object(q.a)(["\n  width: 8rem;\n  height: 8rem;\n  position: relative;\n\n  @media "," {\n    width: 5rem;\n    height: 5rem;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile})),An=X.default.img(w||(w=Object(q.a)(["\n  width: 100%;\n  height: 8rem;\n  padding: 0.5rem;\n\n  @media "," {\n    height: 5rem;\n    padding: 0.1rem;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile})),Jn=Object(X.default)(An)(v||(v=Object(q.a)(["\n  background: ",";\n  padding: 1rem;\n"])),(function(n){return n.theme.gradients.slate})),Mn=X.default.img(k||(k=Object(q.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n"]))),Bn=X.default.div(y||(y=Object(q.a)(["\n  max-width: 50%;\n"]))),In=X.default.h1(S||(S=Object(q.a)(["\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.3rem;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGrey})),Un=X.default.p(D||(D=Object(q.a)([" \n  font-family: 'DDC Hardware';\n  font-size: 1.3rem;\n  color: ",";\n \n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;    \n  max-height: 4rem;\n  line-height: 1.5rem;\n\n  margin-top: 6px;\n  margin-bottom: 6px;\n"])),(function(n){return n.theme.colors.white})),En=X.default.p(C||(C=Object(q.a)([" \n  font-family: 'DDC Hardware';\n  font-size: 1.14rem;\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGrey})),Kn=X.default.p(T||(T=Object(q.a)([" \n  font-family: 'DDC Hardware';\n  font-size: 1rem;\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGrey})),Nn=function(n){var e=n.powerScore,t=n.onJumpToSpot;return Object(cn.jsx)(Qn,{children:Object(cn.jsx)(Rn,{children:Object(cn.jsx)(Fn,{powerScore:e,onJumpToSpot:t})})})},Qn=X.default.div(z||(z=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Rn=X.default.div(G||(G=Object(q.a)(["\n  width: 50%;\n"]))),Vn=t(90),qn=function(n){var e=n.powerScoreList,t=n.positionToScroll,r=n.onScrollToPosition,i=Object(Vn.a)().ual,o=e.reduce((function(n,e){return n[e.position]=Object(tn.createRef)(),n}),{});return Object(tn.useEffect)((function(){null!==t&&(!function(n){var e,t;null===(e=o[n])||void 0===e||null===(t=e.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center"})}(t),r())}),[t]),Object(cn.jsx)(Wn,{children:e.map((function(n){return Object(cn.jsxs)(Xn,{ref:o[n.position],isCurrentUser:n.account===i.activeUser.accountName,children:[Object(cn.jsxs)(Yn,{children:[Object(cn.jsxs)(Zn,{children:[n.profile.avatar?Object(cn.jsx)($n,{src:Object(bn.a)(n.profile.avatar,"100x100"),alt:"Avatar"}):Object(cn.jsx)($n,{src:un.a,alt:"Avatar"}),n.profile.frame&&Object(cn.jsx)(_n,{src:Object(bn.a)(n.profile.frame,"100x100")})]}),Object(cn.jsxs)(ne,{children:[Object(cn.jsx)(ee,{title:n.profile.name||n.account,children:n.profile.name||n.account}),Object(cn.jsxs)(te,{children:["#"," ",Object(Gn.e)(n.position)]})]})]}),Object(cn.jsxs)(re,{children:[Object(Gn.b)({numberToFormat:n.score,decimalPlaces:3})," ","PTS."]})]},n.account)}))})},Wn=X.default.div(F||(F=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n\n  font-family: 'DDC Hardware';\n"]))),Xn=X.default.div(H||(H=Object(q.a)(["  \n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.8rem 1.7rem 0.8rem 0.8rem;\n\n  border: 1px solid ",";\n  border-radius: 0.6rem;\n\n  @media "," {\n    padding: 0.8rem;\n  }\n"])),(function(n){return n.isCurrentUser?n.theme.colors.pink:n.theme.colors.darkGrey}),(function(n){return n.theme.breakpoints.mobile})),Yn=X.default.div(P||(P=Object(q.a)(["\n  display: flex;\n  gap: 1.6rem;\n  width: 75%;\n"]))),Zn=X.default.div(L||(L=Object(q.a)(["\n  position: relative;\n  width: 5rem;\n  height: 5rem;\n"]))),$n=X.default.img(A||(A=Object(q.a)(["\n  width: 100%;\n  height: 5rem;\n  padding: 0.2rem;\n"]))),_n=X.default.img(J||(J=Object(q.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"]))),ne=X.default.div(M||(M=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 65%;\n"]))),ee=X.default.span(B||(B=Object(q.a)(["\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: ",";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;    \n  max-height: 4rem;\n  line-height: 1.5rem;\n\n  @media "," {\n    font-size: 1.1rem;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.mobile})),te=X.default.span(I||(I=Object(q.a)(["\n  display: flex;\n  align-items: center;\n\n  font-size: 1.4rem;\n  line-height: 1.3rem;\n  text-transform: uppercase;\n  color: ",";\n\n  @media "," {\n    font-size: 1.1rem;\n  }\n"])),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.breakpoints.mobile})),re=X.default.div(U||(U=Object(q.a)(["\n  display: flex;\n  align-items: center;\n  \n  width: 35%;\n  justify-content: right;\n  font-size: 1.4rem;\n  text-transform: uppercase; \n  color: ",";\n\n  @media "," {\n    font-size: 1.1rem;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.mobile})),ie=t(57),oe=t(544),ae=function(){var n=Object(ie.useQuery)("powerScore",(function(){return oe.a.get("/v1/leaderboard/powerscore").then((function(n){return n.data}))}));return{isLoading:n.isLoading,error:n.error,powerScoreList:n.data||[],refetch:n.refetch}},ce=function(){var n=Object(tn.useState)(null),e=Object(en.a)(n,2),t=e[0],r=e[1],i=Object(Vn.a)().ual,o=Object(W.a)().t,a=ae(),c=a.powerScoreList,d=a.isLoading,l=a.error,s=a.refetch;if(d)return Object(cn.jsx)(rn.a,{});if(l||0===c.length)return Object(cn.jsx)(dn,{onChange:s});var m=c.slice(0,3),u=c.slice(3,1e3),b=c.find((function(n){return n.account===i.activeUser.accountName}));return Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(Cn,{powerScoreList:m}),Object(cn.jsx)(de,{}),b&&Object(cn.jsx)(Nn,{powerScore:b,onJumpToSpot:function(){void 0!==b&&r(b.position)}}),Object(cn.jsx)(le,{children:Object(cn.jsx)("span",{children:o("leaderboard.top1000")})}),Object(cn.jsx)(qn,{powerScoreList:u,positionToScroll:t,onScrollToPosition:function(){r(null)}})]})},de=X.default.hr(E||(E=Object(q.a)(["\n  border: 1px solid ",";\n  margin-top: 1.8rem;\n  margin-bottom: 1.8rem;\n"])),(function(n){return n.theme.colors.darkGrey})),le=X.default.div(K||(K=Object(q.a)(["\n  position: relative;\n  width: 100%;\n  margin-top: 1.8rem;\n  margin-bottom: 1.8rem;\n\n  span {\n    display: block;\n    font-family: 'DDC Hardware', sans-serif;\n    font-size: 1.4rem;\n    text-transform: uppercase;\n    word-spacing: 0.3rem;\n    color: ",';\n    text-align: center;\n\n    &:before {\n      content: "";\n      border-bottom: 2px solid ',';\n      position: absolute;\n      width: 40%;\n      top: 1rem;\n      left: 0;\n    }\n\n    &:after {\n      content: "";\n      border-bottom: 2px solid ',";\n      position: absolute;\n      width: 40%;\n      top: 1rem;\n      right: 0;\n    }\n\n    @media "," {\n      &:before {\n        width: 35%;\n      }\n\n      &:after {\n        width: 35%;\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.breakpoints.mobile})),se=t.p+"static/media/background.a6db1eca.webp",me=t.p+"static/media/background.121e06d2.mp4",ue=(e.default=function(){var n=Object(W.a)().t;return Object(cn.jsxs)(nn.a,{image:se,video:me,children:[Object(cn.jsxs)(ue,{children:[Object(cn.jsx)($.a,{}),Object(cn.jsx)(Z.a,{})]}),Object(cn.jsxs)(be,{children:[Object(cn.jsxs)(fe,{children:[Object(cn.jsx)(_.a,{}),n("leaderboard.title")]}),Object(cn.jsx)(he,{children:Object(cn.jsx)(ce,{})})]}),Object(cn.jsx)(Y.a,{})]})},X.default.div(N||(N=Object(q.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  @media "," {\n    justify-content: flex-end;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile}))),be=X.default.div(Q||(Q=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  width: 60%;\n  max-width: 60rem;\n  border-radius: 0.6rem;\n  border: 0.07rem solid ",";\n  color: ",";\n\n  @media "," {\n    width: 75%;\n  }\n\n  @media "," {\n    width: 100%;\n    max-height: 75vh;\n  }\n"])),(function(n){return n.theme.gradients.slate}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.mobile})),fe=X.default.div(R||(R=Object(q.a)(['\n  font-family: "DDC Hardware", sans-serif;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: ',";\n  padding: 1rem 1.3rem;\n  border-bottom: 0.07rem solid ",";\n  background: ",";\n  border-top-right-radius: 0.6rem;\n  border-top-left-radius: 0.6rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n\n  @media "," {\n    padding: 1rem;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.gradients.slate}),(function(n){return n.theme.breakpoints.mobile})),he=X.default.div(V||(V=Object(q.a)(["\n  display: flex;\n  flex-direction: column; \n  height: 65vh;\n  overflow-y: auto;\n\n  padding-right: 1.3rem;\n  padding-bottom: 2rem;\n  padding-left: 1.3rem;\n  \n  margin-top: 0.07rem;\n  margin-right: 1.3rem;\n  margin-bottom: 0.07rem;\n\n  ::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: #1c1c22;\n    border-radius: 0.7rem;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ",";\n    border-radius: 0.7rem;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: #ae1d55;\n  }\n\n  @media "," {\n    margin-right: 0;\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n"])),(function(n){return n.theme.colors.pink}),(function(n){return n.theme.breakpoints.mobile}))}}]);