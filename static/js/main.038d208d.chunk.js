(this["webpackJsonphinnox.com"]=this["webpackJsonphinnox.com"]||[]).push([[0],{18:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o="SET_CURRENT_USER"},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o=n(25),a=n.n(o),r=n(39),c=n(20),u=n.n(c),i=(localStorage.getItem("token")&&JSON.parse(localStorage.getItem("token")).user_url,JSON.parse(localStorage.getItem("token"))),l={"Content-Type":"application/json",Authorization:i?"Token ".concat(i._token):""},s=n(9),p={signin:function(){var t=Object(r.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("https://api.hspaces.net/accounts/api/login/",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getCurrentUser:function(t){return u.a.get("https://api.hspaces.net/user/"+t+"/",{headers:s.a?s.a:l})},logout:function(){return u.a.post("https://api.hspaces.net/accounts/api/logout/",{},{headers:s.a?s.a:l})}}},42:function(t,e,n){t.exports=n(74)},47:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(8),c=n.n(r),u=(n(47),n(2)),i=n(17),l=n(19),s=n(9),p=function(t){var e=t.component,n=t.layout,o=Object(l.a)(t,["component","layout"]),r=s.b;return r?a.a.createElement(u.b,Object.assign({},o,{render:function(t){return r?a.a.createElement(n,null,a.a.createElement(e,t)):a.a.createElement(u.a,{to:"/login"})}})):(window.location.href="/login",null)},f=function(t){var e=t.component,n=t.layout,o=Object(l.a)(t,["component","layout"]);return a.a.createElement(u.b,Object.assign({},o,{render:function(t){return a.a.createElement(n,null,a.a.createElement(e,t))}}))},h=a.a.lazy((function(){return n.e(4).then(n.bind(null,77))})),m=a.a.lazy((function(){return n.e(5).then(n.bind(null,78))})),d=a.a.lazy((function(){return n.e(6).then(n.bind(null,80))})),g=a.a.lazy((function(){return n.e(3).then(n.bind(null,79))})),b=[{path:"/",exact:!0,layout:h,component:m,isPrivate:!0},{path:"/login",layout:d,component:d,isPrivate:!1}];b.push({path:"*",layout:g,component:g,isPrivate:!1});var O=b,y=n(15);var E=function(){var t=Object(y.b)(),e=JSON.parse(localStorage.getItem("token"));return Object(o.useEffect)((function(){return e&&(t(Object(s.e)(e.user_url)),e.isRemember||setTimeout((function(){Object(s.c)()}),18e6)),function(){}}),[]),a.a.createElement(i.a,null,function(t){var e=[];return t.length>0&&(e=t.map((function(t,e){return t.isPrivate?a.a.createElement(p,{key:e,path:t.path,exact:t.exact,component:t.component,layout:t.layout}):a.a.createElement(f,{key:e,path:t.path,exact:t.exact,component:t.component,layout:t.layout})}))),a.a.createElement(u.d,null," ",e," ")}(O))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(71),n(72),n(73);var v=n(11),w=n(24),_=n(18),S=function(t){return void 0===t||null===t||"object"===typeof t&&0===Object.keys(t).length||"string"===typeof t&&0===t.trim().length},k={isAuthenticated:!1,user:{}},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _.a:return Object(w.a)(Object(w.a)({},t),{},{isAuthenticated:!S(e.res_api),user:e.res_api});default:return t}},I=Object(v.c)({authReducer:j}),T=n(41),R=Object(v.e)(I,{},Object(v.d)(Object(v.a)(T.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t}));c.a.render(a.a.createElement(y.a,{store:R},a.a.createElement(o.Suspense,{fallback:null},a.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return s}));var o=n(14),a=n(21),r=n(18),c="",u="true"===window.localStorage.getItem("isAuthenticated"),i=function(e,n,r){return function(i){a.a.signin(e).then((function(e){e.data.isRemember=r,t.localStorage.setItem("token",JSON.stringify(e.data)),c={"Content-Type":"application/json",Authorization:"Token ".concat(e.data._token)},u=!0,i(l(e.data.user_url)),n.push("/")})).catch((function(t){console.log("ERROR_LOGIN",t),t.response&&401===t.response.status?o.b.error("Your accout is not actived. Please checkout our email!",{position:o.b.POSITION.TOP_RIGHT}):o.b.error("Please check your email or password again!",{position:o.b.POSITION.TOP_RIGHT})}))}},l=function(t){return function(e){a.a.getCurrentUser(t).then((function(t){u=!0,e({type:r.a,res_api:t.data}),window.localStorage.setItem("isAuthenticated","true")})).catch((function(t){console.log(t.response),p()}))}},s=function(){a.a.logout().then((function(t){t&&p()})).catch((function(){return p()}))},p=function(){window.localStorage.clear(),window.location.href="/login"}}).call(this,n(23))}},[[42,1,2]]]);
//# sourceMappingURL=main.038d208d.chunk.js.map