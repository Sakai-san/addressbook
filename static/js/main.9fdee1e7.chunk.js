(this.webpackJsonpaddressbookts=this.webpackJsonpaddressbookts||[]).push([[0],{104:function(e,t,n){e.exports=n(178)},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"home",(function(){return b})),n.d(a,"settings",(function(){return O})),n.d(a,"search",(function(){return j}));var l,r=n(0),o=n.n(r),i=n(18),c=n.n(i),u=n(13),s=n(27),d=n(96),v=n(75),m=n(51);!function(e){e.FETCH_USERS="@USERS/fetch",e.FETCHING_USERS="@USERS/fetching"}(l||(l={}));var E,f=function(e){return{type:l.FETCHING_USERS,payload:e}},p=function(e){return{type:l.FETCH_USERS,payload:e}},h=function(e,t,n){return function(a){a(f(!0)),fetch("https://randomuser.me/api/?nat=".concat(t,"&page=").concat(e,"&results=").concat(n)).then((function(e){return e.json()})).then((function(e){return a(p(e.results))}))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[],isFetching:!1},t=arguments.length>1?arguments[1]:void 0;return t.type===l.FETCHING_USERS?Object(m.a)({},e,{isFetching:t.payload}):t.type===l.FETCH_USERS?{users:[].concat(Object(v.a)(e.users),Object(v.a)(t.payload)),isFetching:!1}:e};!function(e){e.SET_NATIONALITY="@USERS/setNationality"}(E||(E={}));var S,g=function(e){return{type:E.SET_NATIONALITY,payload:e}},y=function(e){return function(t){return t(g(e))}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ch",t=arguments.length>1?arguments[1]:void 0;return t.type===E.SET_NATIONALITY?t.payload:e};!function(e){e.SEARCH_SEARCH="@SEARCH/search"}(S||(S={}));var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{terms:null},t=arguments.length>1?arguments[1]:void 0;return t.type===S.SEARCH_SEARCH?Object(m.a)({},e,{terms:(null===t||void 0===t?void 0:t.payload)?{first:t.payload.first,last:t.payload.last}:t.payload}):e},C=n(32),R=n(8),w=n(52),N=n(10),_=n(182),T=n(101),H=(n(171),function(e){var t,n,a,l,i,c,u,s,d,v,m,E,f,p=e.user,h=e.style,b=Object(T.a)(),S=Object(N.a)(b,2),g=S[0],y=S[1],O=Object(r.useState)(null),j=Object(N.a)(O,2),C=j[0],R=j[1],w=Object(r.useState)(null),H=Object(N.a)(w,2),U=H[0],I=H[1],k=Object(r.useState)(null),A=Object(N.a)(k,2),F=A[0],L=A[1],x=Object(_.a)(C,U,{modifiers:[{name:"arrow",options:{element:F}}]}),D=x.styles,G=x.attributes;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",Object.assign({className:"Row",ref:R,style:h},y),o.a.createElement("div",{className:"Column_10"},(null===p||void 0===p||null===(t=p.picture)||void 0===t?void 0:t.thumbnail)&&o.a.createElement("img",{src:p.picture.thumbnail,alt:"".concat((null===p||void 0===p||null===(n=p.name)||void 0===n?void 0:n.first)||""," ").concat((null===p||void 0===p||null===(a=p.name)||void 0===a?void 0:a.last)||"")})),o.a.createElement("div",{className:"Column_20"},null===p||void 0===p||null===(l=p.name)||void 0===l?void 0:l.first),o.a.createElement("div",{className:"Column_20"},null===p||void 0===p||null===(i=p.name)||void 0===i?void 0:i.last),o.a.createElement("div",{className:"Column_20"},null===p||void 0===p||null===(c=p.login)||void 0===c?void 0:c.username),o.a.createElement("div",{className:"Column_30"},null===p||void 0===p?void 0:p.email)),g&&o.a.createElement("div",Object.assign({className:"Popper",ref:I,style:D.popper},G.popper),o.a.createElement("div",null,o.a.createElement("div",null,null===p||void 0===p||null===(u=p.location)||void 0===u||null===(s=u.street)||void 0===s?void 0:s.number,", ",null===p||void 0===p||null===(d=p.location)||void 0===d||null===(v=d.street)||void 0===v?void 0:v.name),o.a.createElement("div",null,null===p||void 0===p||null===(m=p.location)||void 0===m?void 0:m.postcode,", ",null===p||void 0===p||null===(E=p.location)||void 0===E?void 0:E.city),o.a.createElement("div",null,null===p||void 0===p||null===(f=p.location)||void 0===f?void 0:f.state),o.a.createElement("div",null,null===p||void 0===p?void 0:p.phone),o.a.createElement("div",null,null===p||void 0===p?void 0:p.cell)),o.a.createElement("div",{ref:L,style:D.arrow})))}),U=function(e){return{type:S.SEARCH_SEARCH,payload:e}},I=(n(172),function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(u.b)();return o.a.createElement("form",{className:"SearchComponent",onSubmit:function(a){var l,r;a.preventDefault(),n(U({first:null===e||void 0===e||null===(l=e.current)||void 0===l?void 0:l.value,last:null===t||void 0===t||null===(r=t.current)||void 0===r?void 0:r.value}))}},o.a.createElement("div",null,o.a.createElement("input",{ref:e,placeholder:"first name"})),o.a.createElement("div",null,o.a.createElement("input",{ref:t,placeholder:"last name"})),o.a.createElement("button",{type:"submit"},"Search"),o.a.createElement("button",{onClick:function(e){return n(U(null))},type:"reset"},"Reset"))}),k=(n(173),n(174),function(){var e=Object(r.useRef)(-1),t=Object(u.c)((function(e){return e.search.terms})),n=Object(u.c)((function(e){return t?function(e,t){var n=e.filter((function(e){var n,a,l,r,o,i,c,u,s,d;return(null===e||void 0===e||null===(n=e.name)||void 0===n||null===(a=n.first)||void 0===a||null===(l=a.toUpperCase)||void 0===l?void 0:l.call(a))===(null===t||void 0===t||null===(r=t.first)||void 0===r||null===(o=r.toUpperCase)||void 0===o?void 0:o.call(r))&&(null===e||void 0===e||null===(i=e.name)||void 0===i||null===(c=i.last)||void 0===c||null===(u=c.toUpperCase)||void 0===u?void 0:u.call(c))===(null===t||void 0===t||null===(s=t.last)||void 0===s||null===(d=s.toUpperCase)||void 0===d?void 0:d.call(s))}));return n.length>0?n.concat([{},{},{}]):n}(e.home.users,e.search.terms):e.home.users})),a=Object(u.c)((function(e){return e.home.isFetching})),l=Object(u.c)((function(e){return e.settings})),i=Object(u.b)();Object(r.useEffect)((function(){c({})}),[]);var c=function(t){t.startIndex,t.stopIndex;return e.current=e.current+1,Promise.resolve(i(h(e.current,l,50)))},s=function(e){var t=e.key,a=e.index,l=e.style;return o.a.createElement(H,{key:t,user:n[a],style:l})};return o.a.createElement("div",null,o.a.createElement("div",{className:"Sticky"},o.a.createElement(I,null)),o.a.createElement("div",{className:"LinkToSettings"},o.a.createElement(C.b,{to:"/settings"},"Settings")),t&&o.a.createElement("div",{className:"LoadingSuspended"},"Infinite loader is disabled while the search is in use \ud83e\udd16"),!t&&a&&o.a.createElement("div",{className:"Loading"},"Loading... \u23f3"),o.a.createElement(w.b,{isRowLoaded:function(e){var t=e.index;return!!n[t]},loadMoreRows:c,rowCount:1e3},(function(e){var t=e.onRowsRendered,a=e.registerChild;return o.a.createElement(w.a,{disableHeight:!0},(function(e){var l=e.width;return o.a.createElement(w.c,{width:l,height:500,onRowsRendered:t,ref:a,rowCount:n.length,rowHeight:50,rowRenderer:s})}))})))}),A=["ch","es","fr","gb"],F=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.settings})),n=function(t){return e(y(t.target.value))};return o.a.createElement("div",null,o.a.createElement(C.b,{to:"/"},"Home"),o.a.createElement("p",null,"Select the nationality you want the search to done in. "),A.map((function(e){return o.a.createElement("div",{key:e},o.a.createElement("label",null,e.toUpperCase(),o.a.createElement("input",{type:"radio",name:"nationality",value:e,checked:e===t,onChange:n})))})))},L=(n(176),function(){return o.a.createElement("div",{className:"Wrapper"},o.a.createElement(C.a,null,o.a.createElement(R.c,null,o.a.createElement(R.a,{path:"/settings"},o.a.createElement(F,null)),o.a.createElement(R.a,{path:"/"},o.a.createElement(k,null)))))});n(177),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,D=Object(s.e)(Object(s.c)(a),x(Object(s.a)(d.a)));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,{store:D},o.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.9fdee1e7.chunk.js.map