(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{61:function(e,t,a){e.exports=a(89)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=(a(66),a(67),a(40)),o=a.n(i);a(68);var s=function(e){var t=e.active,a=e.text,n=e.Icon;return c.a.createElement("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active")},c.a.createElement(n,null),c.a.createElement("h2",null,a))},m=a(45),u=a.n(m),d=a(32),p=a.n(d),E=a(46),f=a.n(E),v=a(47),h=a.n(v),w=a(48),_=a.n(w),N=a(49),g=a.n(N),b=a(50),x=a.n(b),I=a(51),B=a.n(I),S=a(102);var y=function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement(o.a,{className:"sidebar__twitterIcon"}),c.a.createElement(s,{active:!0,Icon:u.a,text:"Home"}),c.a.createElement(s,{Icon:p.a,text:"Explore"}),c.a.createElement(s,{Icon:f.a,text:"Notifications"}),c.a.createElement(s,{Icon:h.a,text:"Messages"}),c.a.createElement(s,{Icon:_.a,text:"Bookmarks"}),c.a.createElement(s,{Icon:g.a,text:"Lists"}),c.a.createElement(s,{Icon:x.a,text:"Profile"}),c.a.createElement(s,{Icon:B.a,text:"More"}),c.a.createElement(S.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0},"Tweet"))},j=a(29),O=(a(74),a(103)),k=a(52),W=a.n(k).a.initializeApp({apiKey:"AIzaSyBh15UpYm6FUR6ETHQlWWrbAmeaAXbqi94",authDomain:"twitter-clone-6b34a.firebaseapp.com",projectId:"twitter-clone-6b34a",storageBucket:"twitter-clone-6b34a.appspot.com",messagingSenderId:"992621736214",appId:"1:992621736214:web:34d3a56bed191649f26037",measurementId:"G-ZG36ER3Q92"}).firestore();var z=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(j.a)(l,2),o=i[0],s=i[1];return c.a.createElement("div",{className:"tweetBox"},c.a.createElement("form",null,c.a.createElement("div",{className:"tweetBox__input"},c.a.createElement(O.a,null,"BS"),c.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:a,placeholder:"What's happening?",type:"text"})),c.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},className:"tweetBox__imageInput",placeholder:"Optional: Enter image URL",type:"text"}),c.a.createElement(S.a,{onClick:function(e){e.preventDefault(),W.collection("posts").add({displayName:"Biswajit Sahoo",username:"Biswaji70535250",verified:!0,text:a,image:o}),r(""),s("")},type:"submit",className:"tweetBox__tweetButton"},"Tweet")))},T=(a(85),a(53)),A=a.n(T),C=a(54),H=a.n(C),R=a(55),D=a.n(R),M=a(56),U=a.n(M),G=a(57),J=a.n(G),L=Object(n.forwardRef)((function(e,t){var a=e.displayName,n=e.username,r=e.verified,l=e.text,i=e.image,o=e.avatar;return c.a.createElement("div",{className:"post",ref:t},c.a.createElement("div",{className:"post__avatar"},c.a.createElement(O.a,{src:o})),c.a.createElement("div",{className:"post__body"},c.a.createElement("div",{className:"post__header"},c.a.createElement("div",{className:"post__headerText"},c.a.createElement("h3",null,a," ",c.a.createElement("span",{className:"post__headerSpecial"},r&&c.a.createElement(A.a,{className:"post__badge"})," @",n))),c.a.createElement("div",{className:"post__headerDescription"},c.a.createElement("p",null,l))),c.a.createElement("img",{src:i,alt:""}),c.a.createElement("div",{className:"post__footer"},c.a.createElement(H.a,{fontSize:"small"}),c.a.createElement(D.a,{fontSize:"small"}),c.a.createElement(U.a,{fontSize:"small"}),c.a.createElement(J.a,{fontSize:"small"}))))})),Q=(a(86),a(58));var q=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){W.collection("posts").onSnapshot((function(e){return r(e.docs.map((function(e){return e.data()})))}))}),[]),c.a.createElement("div",{className:"feed"},c.a.createElement("div",{className:"feed__header"},c.a.createElement("h2",null,"Home")),c.a.createElement(z,null),c.a.createElement(Q.a,null,a.map((function(e){return c.a.createElement(L,{key:e.text,displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image})}))))},F=(a(87),a(33));var K=function(){return c.a.createElement("div",{className:"widgets"},c.a.createElement("div",{className:"widgets__input"},c.a.createElement(p.a,{className:"widgets__searchIcon"}),c.a.createElement("input",{placeholder:"Search Twitter",type:"text"})),c.a.createElement("div",{className:"widgets__widgetContainer"},c.a.createElement("h2",null,"What's happening"),c.a.createElement(F.c,{tweetId:"1459399439370502145"}),c.a.createElement(F.b,{sourceType:"profile",screenName:"Biswaji70535250",options:{height:400}}),c.a.createElement(F.a,{url:"https://facebook.com/BiswajitSahoo",options:{text:"Hello",via:"Biswaji70535250"}})))};a(88);var P=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(y,null),c.a.createElement(q,null),c.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.99da48a4.chunk.js.map