(this.webpackJsonpmobileservice4=this.webpackJsonpmobileservice4||[]).push([[0],{107:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(2),o=r.n(a),c=r(31),s=r.n(c),i=(r(74),r(75),r(16)),l=r(13),u=r(18),d=r.n(u),j=r(25),h=r(45),b=function(){var e=Object(j.a)(d.a.mark((function e(t,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.setItem(t,r);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,r){return e.apply(this,arguments)}}(),f=function(e){var t=e.replace(/[\u0080-\u07ff]/g,(function(e){var t=e.charCodeAt(0);return String.fromCharCode(192|t>>6,128|63&t)}));return t=t.replace(/[\u0800-\uffff]/g,(function(e){var t=e.charCodeAt(0);return String.fromCharCode(224|t>>12,128|t>>6&63,128|63&t)}))},p=function(e,t){for(var r=t.length/4-1,n=[[],[],[],[]],a=0;a<16;a++)n[a%4][Math.floor(a/4)]=e[a];n=x(n,t,0,4);for(var o=1;o<r;o++)n=g(n,4),n=v(n,4),n=O(n,4),n=x(n,t,o,4);n=g(n,4),n=v(n,4),n=x(n,t,r,4);for(var c=new Array(16),s=0;s<16;s++)c[s]=n[s%4][Math.floor(s/4)];return c},m=function(e){for(var t=e.length/4,r=t+6,n=new Array(4*(r+1)),a=new Array(4),o=0;o<t;o++){var c=[e[4*o],e[4*o+1],e[4*o+2],e[4*o+3]];n[o]=c}for(var s=t;s<4*(r+1);s++){n[s]=new Array(4);for(var i=0;i<4;i++)a[i]=n[s-1][i];if(s%t===0){a=w(C(a));for(var l=0;l<4;l++)a[l]^=S[s/t][l]}else t>6&&s%t===4&&(a=w(a));for(var u=0;u<4;u++)n[s][u]=n[s-t][u]^a[u]}return n},g=function(e,t){for(var r=0;r<4;r++)for(var n=0;n<t;n++)e[r][n]=y[e[r][n]];return e},v=function(e,t){for(var r=new Array(4),n=1;n<4;n++){for(var a=0;a<4;a++)r[a]=e[n][(a+n)%t];for(var o=0;o<4;o++)e[n][o]=r[o]}return e},O=function(e,t){for(var r=0;r<4;r++){for(var n=new Array(4),a=new Array(4),o=0;o<4;o++)n[o]=e[o][r],a[o]=128&e[o][r]?e[o][r]<<1^283:e[o][r]<<1;e[0][r]=a[0]^n[1]^a[1]^n[2]^n[3],e[1][r]=n[0]^a[1]^n[2]^a[2]^n[3],e[2][r]=n[0]^n[1]^a[2]^n[3]^a[3],e[3][r]=n[0]^a[0]^n[1]^n[2]^a[3]}return e},x=function(e,t,r,n){for(var a=0;a<4;a++)for(var o=0;o<n;o++)e[a][o]^=t[4*r+o][a];return e},w=function(e){for(var t=0;t<4;t++)e[t]=y[e[t]];return e},C=function(e){for(var t=e[0],r=0;r<3;r++)e[r]=e[r+1];return e[3]=t,e},y=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],S=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],k={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},A=function(e,t,r){if(128!==r&&192!==r&&256!==r)return"";e=f(e),t=f(t);for(var n=r/8,a=new Array(n),o=0;o<n;o++)a[o]=isNaN(t.charCodeAt(o))?0:t.charCodeAt(o);var c=p(a,m(a));c=c.concat(c.slice(0,n-16));for(var s=new Array(16),i=(new Date).getTime(),l=Math.floor(i/1e3),u=i%1e3,d=0;d<4;d++)s[d]=l>>>8*d&255;for(var j=0;j<4;j++)s[j+4]=255&u;for(var h="",b=0;b<8;b++)h+=String.fromCharCode(s[b]);for(var g=m(c),v=Math.ceil(e.length/16),O=new Array(v),x=0;x<v;x++){for(var w=0;w<4;w++)s[15-w]=x>>>8*w&255;for(var C=0;C<4;C++)s[15-C-4]=x/4294967296>>>8*C;for(var y=p(s,g),S=x<v-1?16:(e.length-1)%16+1,A=new Array(S),T=0;T<S;T++)A[T]=y[T]^e.charCodeAt(16*x+T),A[T]=String.fromCharCode(A[T]);O[x]=A.join("")}var N=h+O.join("");return N=function(e,t){t="undefined"!=typeof t&&t;var r,n,a,o,c,s,i,l,u=[],d="",j=k.code;if((s=(i=t?f(e):e).length%3)>0)for(;s++<3;)d+="=",i+="\0";for(s=0;s<i.length;s+=3)n=(r=i.charCodeAt(s)<<16|i.charCodeAt(s+1)<<8|i.charCodeAt(s+2))>>18&63,a=r>>12&63,o=r>>6&63,c=63&r,u[s/3]=j.charAt(n)+j.charAt(a)+j.charAt(o)+j.charAt(c);return(l=u.join("")).slice(0,l.length-d.length)+d}(N)},T={USER_REMARKS:"2.0.20191115B",MS_VER:1,APP_VERSION:5},N=T;var R=function(){var e=Object(l.f)(),t=Object(a.useState)(""),r=Object(i.a)(t,2),o=r[0],c=r[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),d=u[0],j=u[1],h=Object(a.useState)(""),f=Object(i.a)(h,2),p=f[0],m=f[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),O=v[0],x=v[1],w=Object(a.useState)(!1),C=Object(i.a)(w,2),y=C[0],S=C[1];return Object(n.jsxs)("div",{className:"padding20",children:[y?Object(n.jsx)("div",{className:"spinner-border",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)("h3",{children:"Sign In"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Server Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Server Address",onChange:function(e){return c(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Database"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Database",onChange:function(e){return j(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email address"}),Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){return m(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(e){return x(e.target.value)}})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(n.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(n.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(n.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){console.log("this is login");var t=o;t=t.trim().toLowerCase(),d=d.trim().toLowerCase(),p=p.trim().toLowerCase(),O=O.trim().toLowerCase();var r,n,a,c,s="";if(""===t||"undefined"===typeof t)return alert("Host can not be empty"),!1;if(""===d||"undefined"===typeof d)return alert("Database can not be empty"),!1;if(""===p||"undefined"===typeof p)return alert("Username can not be empty"),!1;if(""===O||"undefined"===typeof O)return alert("Password can not be empty"),!1;console.log(O),S(!0);var i="3cc685f006974143",l=1===t.split("//").length?"http://"+t:t,u=l+"/mobile-service/mobileServiceAPI.php";b("webserviceURL",u),b("serverAddress",l),r=u+"?method=login&format=json&deviceUID="+i+"&APP_VERSION="+N.APP_VERSION,n=A(p,i,256),a=A(O,i,256),c=A(d,i,256);var j=0;"ess!7481"===O&&(j=1),s+="username="+encodeURIComponent(n)+"&password="+encodeURIComponent(a)+"&database="+encodeURIComponent(c)+"&deviceUID="+i+"&userRemark="+encodeURIComponent(undefined),s+="&msmp="+j,s+="&deviceUDID=Test1232",s+="&APP_VERSION="+N.APP_VERSION,console.warn(s),fetch(r+"&"+s,{method:"POST"}).then((function(e){return e.json()})).then((function(t){var r={};if(console.warn(t),r.loginResponseText=t,S(!1),r.loginResponseText&&"1"===r.loginResponseText.head.status&&"200"===r.loginResponseText.head.error_number)console.warn("this is success login"),e.push("/home");else{if("101"===r.loginResponseText.head.status&&"200"===r.loginResponseText.head.error_number)return alert("This user is inactive."),!1;if("102"===r.loginResponseText.head.status&&"200"===r.loginResponseText.head.error_number)return alert("Please check Username and Password."),!1;if(r.loginResponseText&&"0"===r.loginResponseText.head.status)return alert(r.loginResponseText.head.error_message),!1;console.log("Home pe aayaa")}})).catch((function(e){}))},children:"Submit"})]})},P=r(109),E=r(110),I=r(111),D=r(112),U=r(113),L=r(65),_=r.n(L),M=r(66),V=r.n(M),B=(r(83),r(37)),F=r(115),H=r(114),K=function(e){var t=e.activevalue,r=Object(a.useState)(""),o=Object(i.a)(r,2),c=(o[0],o[1]),s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],d=l[1];switch(t){case"tickets":c("active");break;case"home":d("active")}return Object(n.jsxs)(F.a,{bg:"primary",variant:"dark",children:[Object(n.jsx)(F.a.Brand,{href:"#home",children:"Navbar"}),Object(n.jsxs)(H.a,{className:"mr-auto",children:[Object(n.jsx)(H.a.Link,Object(B.a)(Object(B.a)({href:"/home"},u),{},{children:"Dashboard"})),Object(n.jsx)(H.a.Link,Object(B.a)(Object(B.a)({href:"/tickets"},"tickets"===t?"active":""),{},{children:"Tickets"})),Object(n.jsx)(H.a.Link,{href:"#pricing",children:"Options"})]})]})},G=(r(67),new Array,{});G.OFFLINE_TICKET=!0,G.DECLINE_TICKET=!0,G.ADD_UNIT=!0,G.UNASSIGNED_TICKET=!0,G.INVOICE=!0,G.ALERT=!1,G.MULTIPLE_DATABASE_SUPPORT=!1,G.PAYMENT=!0;var q={};q["01"]="Adjust",q["02"]="Clean",q["03"]="Install Guards",q["04"]="Patch",q["05"]="Perform & File Test",q["06"]="Properly Secure",q["07"]="Provide",q["08"]="Regroove",q["09"]="Remove",q[10]="Repair",q[11]="Replace",q[12]="Reshackle",q[13]="Seal",q[14]="Shorten",q[15]="Tag Device",q[16]="Provide Means of Access",q[17]="Re-inspection Required";function z(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"unknown"}console.log(z());var J=function(){var e=Object(a.useState)({loaded:!1,coordinates:{lat:"",lng:""}}),t=Object(i.a)(e,2),r=t[0],n=t[1],o=function(e){n({loaded:!0,coordinates:{lat:e.coords.latitude,lng:e.coords.longitude}})},c=function(e){n({loaded:!0,error:e})};return Object(a.useEffect)((function(){"geolocation"in navigator||c({code:0,message:"Geolocation not supported"}),navigator.geolocation.getCurrentPosition(o,c),navigator.geolocation.watchPosition((function(e){console.log(e)}))}),[]),r},W=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),r=t[0],o=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),l=s[0],u=s[1],d=Object(a.useRef)({}),j=Object(a.useState)(!1),h=Object(i.a)(j,2),b=h[0],f=h[1],p=Object(a.useState)(!1),m=Object(i.a)(p,2),g=m[0],v=m[1],O=function(){return f(!1)},x=function(){return v(!1)},w=J();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(P.a,{fluid:"md",children:[Object(n.jsx)(K,{}),Object(n.jsxs)(E.a,{children:[Object(n.jsx)(I.a,{children:" \xa0"}),Object(n.jsx)(I.a,{children:" \xa0"}),Object(n.jsx)(I.a,{children:" \xa0"})]}),Object(n.jsx)(E.a,{children:Object(n.jsxs)(I.a,{children:[Object(n.jsx)(D.a,{variant:"primary",onClick:function(){return f(!0)},children:"Capture Signature"})," ",Object(n.jsx)(D.a,{variant:"primary",onClick:function(){return v(!0)},children:"Capture Pictures"})," "]})}),Object(n.jsx)(E.a,{children:Object(n.jsx)("h1",{children:"Location Data:"})}),Object(n.jsx)(E.a,{children:Object(n.jsx)("p",{children:w.loaded?JSON.stringify(w):"Location Data not available"})}),Object(n.jsxs)(U.a,{show:b,onHide:O,children:[Object(n.jsx)(U.a.Header,{closeButton:!0,children:Object(n.jsx)(U.a.Title,{children:"Signature Ticket #123"})}),Object(n.jsx)(U.a.Body,{children:Object(n.jsx)(_.a,{penColor:"black",canvasProps:{width:500,height:200,className:"sigCanvas"},ref:d})}),Object(n.jsxs)(U.a.Footer,{children:[Object(n.jsx)(D.a,{variant:"secondary",onClick:O,children:"Close"}),Object(n.jsx)(D.a,{variant:"danger",onClick:function(){return d.current.clear()},children:"Clear"}),Object(n.jsx)(D.a,{variant:"primary",onClick:function(){o(d.current.getTrimmedCanvas().toDataURL("image/png")),O()},children:"Save Changes"})]})]}),r?Object(n.jsx)("img",{src:r,alt:"my signature",style:{display:"block",margin:"0 auto",border:"1px solid black",width:"350px",marginTop:"50px"}}):null,Object(n.jsxs)(U.a,{show:g,onHide:x,children:[Object(n.jsx)(U.a.Header,{closeButton:!0,children:Object(n.jsx)(U.a.Title,{children:"Signature Ticket #123"})}),Object(n.jsx)(U.a.Body,{children:Object(n.jsx)(V.a,{onTakePhoto:function(e){!function(e){console.log("takePhoto"),console.log(e),u(e),x()}(e)},style:{width:"100%"}})}),Object(n.jsxs)(U.a.Footer,{children:[Object(n.jsx)(D.a,{variant:"secondary",onClick:x,children:"Close"}),Object(n.jsx)(D.a,{variant:"primary",children:"Save Changes"})]})]}),l?Object(n.jsx)("img",{src:l,alt:"my clicked pictures",style:{display:"block",margin:"0 auto",border:"1px solid black",width:"350px",marginTop:"50px"}}):null]})})},Q=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(P.a,{fluid:"md",children:[Object(n.jsx)(K,{active:"tickets"}),Object(n.jsx)("p",{children:"This is ticket screen"})]})})},Y=r(52);Y.a.initializeApp({apiKey:"AIzaSyC6x-wnxeCIOUyExEtV63heHUO65HqNvQg",authDomain:"ms-pwa.firebaseapp.com",projectId:"ms-pwa",storageBucket:"ms-pwa.appspot.com",messagingSenderId:"1054783690717",appId:"1:1054783690717:web:416d851c4157ef39124834"});var X=Y.a;var Z=function(){return o.a.useEffect((function(){var e=X.messaging();e.requestPermission().then((function(){return e.getToken()})).then((function(e){console.warn("token",e)}))})),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:R}),Object(n.jsx)(l.a,{path:"/home",component:W}),Object(n.jsx)(l.a,{path:"/tickets",component:Q})]})})},$=(r(106),r(39));s.a.render(Object(n.jsx)($.a,{children:Object(n.jsx)(Z,{})}),document.getElementById("root")),function(){function e(){return function(e){for(var t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(r),a=new Uint8Array(n.length),o=0;o<n.length;++o)a[o]=n.charCodeAt(o);return a}("BNeEyCSlv04R-gTVNGkLrr_L7dexR-Pk4nFHbw-BVSzRB-NVEhun-wWE1OfVDIUaPMjYEmA-p4lso-i3gZogXQ4")}var t="".concat(".","/sw.js");navigator.serviceWorker.register(t).then((function(t){if(console.log("response",t),t.installing)console.log("service worker is installing");else if(t.waiting)console.log("Service worker is installed");else if(t.active)return console.log("Service worker active"),t.pushManager.getSubscription().then((function(r){return t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e()})}));"PushManager"in window?"denied"!==Notification.permission||console.log("The user has blocked notifications."):console.log("Push messaging isn't supported.")}))}()},74:function(e,t,r){},75:function(e,t,r){}},[[107,1,2]]]);
//# sourceMappingURL=main.55dd54df.chunk.js.map