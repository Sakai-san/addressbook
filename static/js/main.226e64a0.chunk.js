(this.webpackJsonpaddressbookts=this.webpackJsonpaddressbookts||[]).push([[0],{101:function(e,n,t){e.exports=t(175)},168:function(e,n,t){},169:function(e,n,t){},170:function(e,n,t){},173:function(e,n,t){},174:function(e,n,t){},175:function(e,n,t){"use strict";t.r(n);var l={};t.r(l),t.d(l,"home",(function(){return b})),t.d(l,"settings",(function(){return O})),t.d(l,"search",(function(){return R}));var a,o=t(0),i=t.n(o),r=t(17),u=t.n(r),c=t(12),d=t(26),s=t(95),v=t(74),m=t(49);!function(e){e.FETCH_USERS="@USERS/fetch",e.FETCHING_USERS="@USERS/fetching"}(a||(a={}));var f,E=function(e){return{type:a.FETCHING_USERS,payload:e}},h=function(e){return{type:a.FETCH_USERS,payload:e}},p=function(e,n,t){return function(l){l(E(!0)),fetch("https://randomuser.me/api/?nat=".concat(n,"&page=").concat(e,"&results=").concat(t)).then((function(e){return e.json()})).then((function(e){return l(h(e.results))}))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[],isFetching:!1},n=arguments.length>1?arguments[1]:void 0;return n.type===a.FETCHING_USERS?Object(m.a)({},e,{isFetching:n.payload}):n.type===a.FETCH_USERS?{users:[].concat(Object(v.a)(e.users),Object(v.a)(n.payload)),isFetching:!1}:e};!function(e){e.SET_NATIONALITY="@USERS/setNationality"}(f||(f={}));var S,g=function(e){return{type:f.SET_NATIONALITY,payload:e}},y=function(e){return function(n){return n(g(e))}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ch",n=arguments.length>1?arguments[1]:void 0;return n.type===f.SET_NATIONALITY?n.payload:e};!function(e){e.SEARCH_SEARCH="@SEARCH/search"}(S||(S={}));var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{terms:null},n=arguments.length>1?arguments[1]:void 0;return n.type===S.SEARCH_SEARCH?Object(m.a)({},e,{terms:(null===n||void 0===n?void 0:n.payload)?{first:n.payload.first,last:n.payload.last}:n.payload}):e},C=t(31),j=t(8),w=t(50),N=t(100),T=(t(168),function(e){return Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/2<function(e){return e.getBoundingClientRect().top}(e)}),_=function(e){var n,t,l,a,r,u,c,d,s,v,m,f,E,h=e.user,p=e.style,b=Object(o.useRef)(null),S=Object(o.useRef)(null),g=Object(o.useState)(!1),y=Object(N.a)(g,2),O=y[0],R=y[1];return Object(o.useEffect)((function(){var e,n,t,l,a,o;(null===b||void 0===b?void 0:b.current)&&T(b.current)?null===S||void 0===S||null===(e=S.current)||void 0===e||null===(n=e.classList)||void 0===n||null===(t=n.add)||void 0===t||t.call(n,"ModalBotton"):null===S||void 0===S||null===(l=S.current)||void 0===l||null===(a=l.classList)||void 0===a||null===(o=a.add)||void 0===o||o.call(a,"ModalTop")})),i.a.createElement("div",{ref:b,className:"Row",style:p,onClick:function(e){return R(!0)}},i.a.createElement("img",{src:null===h||void 0===h||null===(n=h.picture)||void 0===n?void 0:n.thumbnail,alt:"".concat(null===h||void 0===h||null===(t=h.name)||void 0===t?void 0:t.first," ").concat(null===h||void 0===h||null===(l=h.name)||void 0===l?void 0:l.last)}),i.a.createElement("div",null,null===h||void 0===h||null===(a=h.name)||void 0===a?void 0:a.first),i.a.createElement("div",null,null===h||void 0===h||null===(r=h.name)||void 0===r?void 0:r.last),i.a.createElement("div",null,null===h||void 0===h||null===(u=h.login)||void 0===u?void 0:u.username),i.a.createElement("div",null,null===h||void 0===h?void 0:h.email),O&&i.a.createElement("div",{ref:S,className:"Modal"},i.a.createElement("span",{className:"Close",onClick:function(e){e.stopPropagation(),R(!1)}},"\u2718"),i.a.createElement("div",{className:"ModalContent"},i.a.createElement("div",null,null===h||void 0===h||null===(c=h.location)||void 0===c||null===(d=c.street)||void 0===d?void 0:d.number,", ",null===h||void 0===h||null===(s=h.location)||void 0===s||null===(v=s.street)||void 0===v?void 0:v.name),i.a.createElement("div",null,null===h||void 0===h||null===(m=h.location)||void 0===m?void 0:m.postcode,", ",null===h||void 0===h||null===(f=h.location)||void 0===f?void 0:f.city),i.a.createElement("div",null,null===h||void 0===h||null===(E=h.location)||void 0===E?void 0:E.state),i.a.createElement("div",null,null===h||void 0===h?void 0:h.phone),i.a.createElement("div",null,null===h||void 0===h?void 0:h.cell))))},k=function(e){return{type:S.SEARCH_SEARCH,payload:e}},H=(t(169),function(){var e=Object(o.useRef)(null),n=Object(o.useRef)(null),t=Object(c.b)();return i.a.createElement("form",{className:"SearchComponent",onSubmit:function(l){var a,o;l.preventDefault(),t(k({first:null===e||void 0===e||null===(a=e.current)||void 0===a?void 0:a.value,last:null===n||void 0===n||null===(o=n.current)||void 0===o?void 0:o.value}))}},i.a.createElement("div",null,i.a.createElement("input",{ref:e,placeholder:"first name"})),i.a.createElement("div",null,i.a.createElement("input",{ref:n,placeholder:"last name"})),i.a.createElement("button",{type:"submit"},"Search"),i.a.createElement("button",{onClick:function(e){return t(k(null))},type:"reset"},"Reset"))}),U=(t(170),t(171),function(){var e=Object(o.useRef)(-1),n=Object(c.c)((function(e){return e.search.terms})),t=Object(c.c)((function(e){return n?function(e,n){return e.filter((function(e){var t,l,a,o,i,r,u,c,d,s;return(null===e||void 0===e||null===(t=e.name)||void 0===t||null===(l=t.first)||void 0===l||null===(a=l.toUpperCase)||void 0===a?void 0:a.call(l))===(null===n||void 0===n||null===(o=n.first)||void 0===o||null===(i=o.toUpperCase)||void 0===i?void 0:i.call(o))&&(null===e||void 0===e||null===(r=e.name)||void 0===r||null===(u=r.last)||void 0===u||null===(c=u.toUpperCase)||void 0===c?void 0:c.call(u))===(null===n||void 0===n||null===(d=n.last)||void 0===d||null===(s=d.toUpperCase)||void 0===s?void 0:s.call(d))}))}(e.home.users,e.search.terms):e.home.users})),l=Object(c.c)((function(e){return e.home.isFetching})),a=Object(c.c)((function(e){return e.settings})),r=Object(c.b)();Object(o.useEffect)((function(){u({})}),[]);var u=function(n){n.startIndex,n.stopIndex;return e.current=e.current+1,Promise.resolve(r(p(e.current,a,50)))},d=function(e){var n=e.key,l=e.index,a=e.style;return i.a.createElement(_,{key:n,user:t[l],style:a})};return i.a.createElement("div",null,i.a.createElement("div",{className:"Sticky"},i.a.createElement(H,null)),i.a.createElement("div",{className:"LinkToSettings"},i.a.createElement(C.b,{to:"/settings"},"Settings")),n&&i.a.createElement("div",{className:"LoadingSuspended"},"Infinite loader is disabled while the search is in use \ud83e\udd16"),!n&&l&&i.a.createElement("div",{className:"Loading"},"Loading... \u23f3"),i.a.createElement(w.b,{isRowLoaded:function(e){var n=e.index;return!!t[n]},loadMoreRows:u,rowCount:1e3},(function(e){var n=e.onRowsRendered,l=e.registerChild;return i.a.createElement(w.a,null,(function(e){e.height;var a=e.width;return i.a.createElement(w.c,{width:a,height:500,onRowsRendered:n,ref:l,rowCount:t.length,rowHeight:50,rowRenderer:d})}))})))}),I=["ch","es","fr","gb"],A=function(){var e=Object(c.b)(),n=Object(c.c)((function(e){return e.settings})),t=function(n){return e(y(n.target.value))};return i.a.createElement("div",null,i.a.createElement(C.b,{to:"/"},"Home"),i.a.createElement("p",null,"Select the nationality you want the search to done in. "),I.map((function(e){return i.a.createElement("div",{key:e},i.a.createElement("label",null,e.toUpperCase(),i.a.createElement("input",{type:"radio",name:"nationality",value:e,checked:e===n,onChange:t})))})))},L=(t(173),function(){return i.a.createElement("div",{className:"Wrapper"},i.a.createElement(C.a,null,i.a.createElement(j.c,null,i.a.createElement(j.a,{path:"/settings"},i.a.createElement(A,null)),i.a.createElement(j.a,{path:"/"},i.a.createElement(U,null)))))});t(174),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,M=Object(d.e)(Object(d.c)(l),F(Object(d.a)(s.a)));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{store:M},i.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.226e64a0.chunk.js.map