(this["webpackJsonpchat-demo"]=this["webpackJsonpchat-demo"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(4),a=n.n(r),i=n(13),s=n.n(i),o=(n(22),n(12)),u=n.n(o),d=n(14),j=n(9),b=(n(24),n(8)),h=(n(25),n(28),n(15)),l=n(16);b.a.initializeApp({apiKey:"AIzaSyC-S3P93QI44MLMxKRCaD-tiMpmeaG5lnI",authDomain:"chat-demo-ed6cc.firebaseapp.com",databaseURL:"https://chat-demo-ed6cc.firebaseio.com",projectId:"chat-demo-ed6cc",storageBucket:"chat-demo-ed6cc.appspot.com",messagingSenderId:"113236022379",appId:"1:113236022379:web:c49d2afd7a3bd01f84cd2e",measurementId:"G-3W6FRTGGMF"});var p=b.a.auth(),m=b.a.firestore();function f(){return Object(c.jsx)("button",{className:"sign-in",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"})}function O(){return p.currentUser&&Object(c.jsx)("button",{onClick:function(){return p.signOut()},children:"Sign Out"})}function x(){var e=Object(r.useRef)(),t=m.collection("messages"),n=t.orderBy("createdAt"),a=Object(l.a)(n,{idField:"id"}),i=Object(j.a)(a,1)[0],s=Object(r.useState)(""),o=Object(j.a)(s,2),h=o[0],f=o[1],O=function(){var n=Object(d.a)(u.a.mark((function n(c){var r,a,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),""===h){n.next=7;break}return r=p.currentUser,a=r.uid,i=r.photoURL,n.next=5,t.add({text:h,createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 5:f(""),e.current.scrollIntoView({behavior:"smooth"});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("main",{children:[i&&i.map((function(e){return Object(c.jsx)(g,{message:e},e.id)})),Object(c.jsx)("span",{ref:e})]}),Object(c.jsxs)("form",{onSubmit:O,children:[Object(c.jsx)("input",{value:h,onChange:function(e){return f(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]})]})}function g(e){var t=e.message,n=t.text,r=t.uid,a=t.photoURL,i=r===p.currentUser.uid?"sent":"received";return Object(c.jsxs)("div",{className:"message ".concat(i),children:[Object(c.jsx)("img",{src:a,alt:"whatever"}),Object(c.jsx)("p",{children:n})]})}var v=function(){var e=Object(h.a)(p),t=Object(j.a)(e,1)[0];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("h1",{children:"Welcome to my chat!"}),Object(c.jsx)(O,{})]}),Object(c.jsx)("section",{children:t?Object(c.jsx)(x,{}):Object(c.jsx)(f,{})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),I()}},[[30,1,2]]]);
//# sourceMappingURL=main.b79bb5db.chunk.js.map