(this["webpackJsonppurgon-media"]=this["webpackJsonppurgon-media"]||[]).push([[0],{244:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),c=n(63),s=n.n(c),o=(n(71),n(72),n(20)),r=n(26),j={phone1:"+48 662 619 164",phone2:"+48 730 223 819",email:"kontakt@pugon.pl"},l={home:{id:1,path:"",name:"Home"},offer:{id:2,path:"offer",name:"Oferta"},complex:{id:3,path:"complex",name:"Kompleksowa obs\u0142uga"},contact:{id:4,path:"contact",name:"Kontakt"}},d={facebook:"https://www.facebook.com/pugonmedia",instagram:"https://www.instagram.com",linkedin:"https://www.linkedin.com"},m=n(1),b=Object(a.createContext)(null),p=function(e){var t=e.children,n=Object(a.useState)(j),i=Object(r.a)(n,2),c=i[0],s=i[1],o=Object(a.useState)(l),p=Object(r.a)(o,2),h=p[0],u=p[1],O=Object(a.useState)(d),y=Object(r.a)(O,2),x=y[0],w=y[1],k=Object(a.useRef)(null);Object(a.useEffect)((function(){}),[]);var z={contact:c,setContact:s,pages:h,setPages:u,social:x,setSocial:w,currRef:k};return Object(m.jsx)(b.Provider,{value:z,children:t})},h=n(19),u=n(34),O=function(){var e=Object(a.useContext)(b),t=e.contact,n=e.social;return Object(m.jsxs)("div",{className:"info-banner",children:[Object(m.jsxs)("div",{className:"elem social",children:[Object(m.jsx)("a",{target:"blank",href:n.facebook,children:Object(m.jsx)(h.a,{})}),Object(m.jsx)("a",{target:"blank",href:n.instagram,children:Object(m.jsx)(h.b,{})}),Object(m.jsx)("a",{target:"blank",href:n.linkedin,children:Object(m.jsx)(h.c,{})})]}),Object(m.jsxs)("div",{className:"elem info",children:[Object(m.jsxs)("a",{href:"mailto: ".concat(t.email),children:[Object(m.jsx)(u.a,{}),Object(m.jsx)("span",{children:t.email})]}),Object(m.jsxs)("a",{href:"tel: ".concat(t.phone1),children:[Object(m.jsx)(h.d,{}),Object(m.jsx)("span",{children:t.phone1})]})]})]})},y=n.p+"static/media/logo.970623fb.png",x=function(){var e=Object(a.useContext)(b),t=e.currRef,n=e.pages,i=Object(a.useState)(!1),c=Object(r.a)(i,2),s=c[0],j=c[1],l="mobile".concat(s?" active":""),d="elem navi".concat(s?" active":"");return Object(m.jsxs)("header",{className:"page-menu",children:[Object(m.jsx)("div",{className:"elem logo",children:Object(m.jsx)(o.b,{exact:!0,to:"/",children:Object(m.jsx)("img",{src:y,alt:"page logo"})})}),Object(m.jsx)("nav",{className:d,children:Object(m.jsxs)("ul",{className:"links",children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{exact:!0,to:"./".concat(n.home.path),children:n.home.name})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{exact:!0,to:"./".concat(n.offer.path),children:n.offer.name})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{exact:!0,to:"./".concat(n.complex.path),children:n.complex.name})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{exact:!0,to:"./".concat(n.contact.path),children:n.contact.name})})]})}),Object(m.jsxs)("div",{className:"elem info",children:[Object(m.jsx)("button",{className:l,onClick:function(){return j((function(e){return!e}))}}),Object(m.jsx)("button",{className:"desktop",onClick:function(){return t.current.scrollIntoView()},children:"Contact us!"})]})]})},w=function(){var e=Object(a.useContext)(b).currRef;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"my-2 p-2",children:"Napisz do nas!"}),Object(m.jsxs)("form",{className:"form-grup col-12",ref:e,children:[Object(m.jsx)("input",{className:"form-control my-2 p-2",type:"text",name:"name",placeholder:"Imi\u0119 i nazwisko"}),Object(m.jsx)("input",{className:"form-control my-2 p-2",type:"phone",name:"tel",placeholder:"Numer telefonu"}),Object(m.jsx)("input",{className:"form-control my-2 p-2",type:"email",name:"email",placeholder:"Adres email"}),Object(m.jsx)("textarea",{className:"form-control my-2 p-2",rows:"7",name:"body",placeholder:"Twoja wiadomo\u015b\u0107 ..."}),Object(m.jsx)("button",{className:"btn btn-success my-2 p-3",children:"Wy\u015blij!"})]})]})},k=function(){var e=Object(a.useContext)(b),t=e.contact,n=e.social;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("footer",{className:"page-footer",children:Object(m.jsxs)("div",{className:"content-wraper",children:[Object(m.jsxs)("div",{className:"elem",children:[Object(m.jsxs)("div",{className:"contact",children:[Object(m.jsx)("h3",{children:"Kontakt do nas"}),Object(m.jsxs)("a",{href:"mailto: ".concat(t.email),children:[Object(m.jsx)(u.a,{}),Object(m.jsx)("span",{children:t.email})]}),Object(m.jsxs)("a",{href:"tel: ".concat(t.phone1),children:[Object(m.jsx)(h.d,{}),Object(m.jsx)("span",{children:t.phone1})]}),Object(m.jsxs)("a",{href:"tel: ".concat(t.phone2),children:[Object(m.jsx)(h.d,{}),Object(m.jsx)("span",{children:t.phone2})]})]}),Object(m.jsxs)("div",{className:"social",children:[Object(m.jsx)("h3",{children:"Znajdziesz nas"}),Object(m.jsx)("a",{target:"blank",href:n.facebook,children:Object(m.jsx)(h.a,{})}),Object(m.jsx)("a",{target:"blank",href:n.instagram,children:Object(m.jsx)(h.b,{})}),Object(m.jsx)("a",{target:"blank",href:n.linkedin,children:Object(m.jsx)(h.c,{})})]})]}),Object(m.jsx)("div",{className:"elem",children:Object(m.jsx)(w,{})})]})}),Object(m.jsx)("section",{className:"creator",children:"Purgon Media & Kamil Pawlik 2021 \xa9 - All rights reserved"})]})},z=n(8),f=n(65),g=n.n(f),v=function(){return Object(m.jsx)(g.a,{className:"particles",options:{detectRetina:!0,fpsLimit:60,interactivity:{detectsOn:"canvas",resize:!0,modes:{bubble:{distance:400,duration:2,opacity:.7,size:40}}},particles:{color:{value:"#999999"},links:{color:"#999999",distance:150,enable:!0,opacity:.3,width:1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:60},shape:{type:"circle"},size:{random:!0,value:1}}}})},N=n.p+"static/media/dog.a009b33c.png",I=function(){return Object(m.jsxs)("div",{className:"page-banner",children:[Object(m.jsx)(v,{}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"elem text animJumpIn",children:[Object(m.jsx)("h4",{className:"animFadeIn",children:"RAZEM Z MOIMI LUD\u0179MI"}),Object(m.jsxs)("h2",{className:"animFadeIn",children:["W\u0142\u0105czam ",Object(m.jsx)("span",{children:"Skuteczny Marketing"})]})]}),Object(m.jsx)("div",{className:"elem photo animJumpIn",children:Object(m.jsx)("img",{className:"animFadeIn",src:N,alt:"big fafik baner"})})]})]})},L=function(e){var t=e.type,n=e.icon,a=e.title,i=e.body;return Object(m.jsxs)("div",{className:t,children:[Object(m.jsx)("span",{children:Object(m.jsx)("img",{src:n,alt:"card pictogram"})}),Object(m.jsx)("h3",{children:a}),Object(m.jsx)("p",{children:i})]})},C=n.p+"static/media/logo_min.39f72857.png",E=n.p+"static/media/icon_1.2f7223f7.png",S=n.p+"static/media/icon_2.3b0460c8.png",T=n.p+"static/media/icon_3.048073ec.png",P=n.p+"static/media/icon_4.f657a3a5.png",A=n.p+"static/media/icon_5.ddb2e337.png",M=n.p+"static/media/icon_6.b5762708.png",_=n.p+"static/media/icon_7.cf5409ad.png",F=[{id:1,title:"Gwarancj\u0119 skuteczno\u015bci",body:"Niezale\u017cnie od tego jak ambitne cele biznesowe Ci przy\u015bwiecaj\u0105, z nami zrealizujesz je w ca\u0142o\u015bci.",icon:C},{id:2,title:"Wsparcie zawodowc\xf3w",body:"Bogate know-how przekuwamy na Twoje wyniki biznesowe. Jeste\u015bmy do\u015bwiadczonym zespo\u0142em, kt\xf3ry zna tajniki marketingu i jest w stanie znale\u017a\u0107 remedium na ka\u017cdy problem.",icon:C},{id:3,title:"Rozwi\u0105zania szyte na miar\u0119",body:"Nasze dzia\u0142ania dostosowujemy do Twoich potrzeb oraz bud\u017cetu, wykorzystuj\u0105c narz\u0119dzia, kt\xf3re pozwalaj\u0105 skutecznie dotrze\u0107 do grupy docelowej.",icon:C},{id:4,title:"Nieszablonowe podej\u015bcie",body:"Stale szukamy innowacyjnych rozwi\u0105za\u0144, kt\xf3re pozwol\u0105 Tobie wyr\xf3\u017cni\u0107 si\u0119 na tle innych firm i osi\u0105gn\u0105\u0107 przewag\u0119 konkurencyjn\u0105. Skontaktuj si\u0119 z nami i do\u0142\u0105cz do grona klient\xf3w, kt\xf3rzy przekonali si\u0119, \u017ce marketing mo\u017cna robi\u0107 lepiej. Sprzedawaj skuteczniej i dzia\u0142aj online!",icon:C}],R=[{id:1,title:"Social Media",body:"Sta\u0142y kontakt z klientami, budowanie zaufania oraz poszerzanie grona odbiorc\xf3w - to wszystko mo\u017cesz osi\u0105gn\u0105\u0107 dzia\u0142aj\u0105c w mediach spo\u0142eczno\u015bciowych. Tworzymy atrakcyjne wpisy, kt\xf3re przyci\u0105gaj\u0105 klienta i zwi\u0119kszaj\u0105 zapytania ofertowe.",icon:E},{id:2,title:"Strony Internetowe",body:"to cz\u0119sto pierwszy kontakt klienta z Twoj\u0105 firm\u0105. Profesjonalna witryna zach\u0119ci go do skorzystania z Twoich us\u0142ug. Tworzymy od zera i modernizujemy ju\u017c istniej\u0105ce strony internetowe. Dok\u0142adnie analizujemy potrzeby klienta i dostosowujemy do nich nasze projekty.",icon:S},{id:3,title:"Reklamy Google",body:"Google Ads to gwarancja zwi\u0119kszenia wizyt na stronie internetowej, kt\xf3re przek\u0142adaj\u0105 si\u0119 na wzrost sprzeda\u017cy. Efektywnie wykorzystujemy ustalony bud\u017cet, dostosowuj\u0105c przekaz do grupy odbiorc\xf3w, kt\xf3ra jest rzeczywi\u015bcie zainteresowana danym produktem lub us\u0142ug\u0105.",icon:T},{id:4,title:"Pozycjonowanie stron",body:"Dzia\u0142ania SEO pomagaj\u0105 Twoim potencjalnym klientom znale\u017a\u0107 Twoj\u0105 firm\u0119 w wyszukiwarkach internetowych. Dzia\u0142amy kompleksowo \u2013 zajmujemy si\u0119 ka\u017cdym aspektem, kt\xf3ry wp\u0142ywa na pozycj\u0119 strony www w wynikach wyszukiwania.",icon:P},{id:5,title:"Projekty graficzne",body:"\u201cJak Ci\u0119 widz\u0105 - tak Ci\u0119 pisz\u0105\u201d, a jakie masz grafiki - takie masz wyniki. Nasze projekty graficzne zapadaj\u0105 w pami\u0119\u0107 i wzbudzaj\u0105 zainteresowanie. To oryginalne i pomys\u0142owe prace wykonane wed\u0142ug najnowszych trend\xf3w.",icon:A},{id:6,title:"Video i zdj\u0119cia",body:"Efektowny spot reklamowy to skuteczny spos\xf3b na pozyskanie klienta i promocj\u0119 marki. Produkujemy wysokiej jako\u015bci materia\u0142y video oraz wykonujemy sesje zdj\u0119ciowe.",icon:M},{id:7,title:"Akcesoria Marketingowe",body:"Oferujemy r\xf3\u017cnorodne akcesoria marketingowe, w tym m.in. plakaty, ulotki roll-upy, koszulki, kubki, d\u0142ugopisy. To wysokiej jako\u015bci gad\u017cety promocyjne, kt\xf3re wykorzysta\u0107 mo\u017cna podczas kampanii reklamowych lub jako upominki dla klient\xf3w.",icon:_}],J=["Zwi\u0119kszamy sprzeda\u017c i ruch na stronie internetowej","Pozyskujemy nowych klient\xf3w","Pomagamy w zbudowaniu wizerunku eksperta w sieci","Poprawiamy widoczno\u015b\u0107 oferty w sieci","Aktywujemy klient\xf3w","Usprawniamy procesy zakupowe."],U=function(){var e=F.map((function(e){return Object(m.jsx)(L,{type:"simple-card animEaseIn",title:e.title,body:e.body,icon:e.icon},e.id)})),t=R.map((function(e){return Object(m.jsx)(L,{type:"service-card animEaseIn",title:e.title,body:e.body,icon:e.icon},e.id)})),n=J.map((function(e,t){return Object(m.jsx)("li",{className:"animEaseIn",children:e},t)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I,{}),Object(m.jsxs)("section",{className:"home",children:[Object(m.jsxs)("div",{className:"entry-text animEaseIn",children:["Potrzebujesz ",Object(m.jsx)("span",{children:"marketingu"}),", kt\xf3ry wyr\xf3\u017cni Ci\u0119 na tle ",Object(m.jsx)("span",{children:"konkurencji?"})," Chcesz ",Object(m.jsx)("span",{children:"zaistnie\u0107"})," w sieci, a mo\u017ce dzia\u0142asz ",Object(m.jsx)("span",{children:"online"}),", jednak nie przynosi to widocznych ",Object(m.jsx)("span",{children:"efekt\xf3w?"})," Nasza agencja marketingowa to odpowied\u017a na ",Object(m.jsx)("span",{children:"Twoje potrzeby."})," Sprawd\u017a, co mo\u017cesz ",Object(m.jsx)("span",{children:"zyska\u0107 wsp\xf3\u0142pracuj\u0105c z nami!"})]}),Object(m.jsx)("div",{className:"simple-cards",children:e}),Object(m.jsxs)("div",{className:"simple-list",children:[Object(m.jsx)("h2",{className:"animEaseIn",children:"Naszymi dzia\u0142aniami:"}),Object(m.jsx)("ul",{children:n})]}),Object(m.jsxs)("div",{className:"service-cards",children:[Object(m.jsx)("div",{className:"card-row",children:t.slice(0,3)}),Object(m.jsx)("div",{className:"card-row",children:t.slice(3,5)}),Object(m.jsx)("div",{className:"card-row",children:t.slice(5,7)})]})]})]})},W=function(){return Object(m.jsx)(m.Fragment,{children:"Complex"})},D=function(){return Object(m.jsx)(m.Fragment,{children:"Contact"})},K=n.p+"static/media/in_build.a911586e.png",Z=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("img",{src:K,alt:"page in build"})})},G=function(){var e=Object(a.useContext)(b).pages;return Object(m.jsx)("main",{children:Object(m.jsxs)(z.c,{children:[Object(m.jsx)(z.a,{exact:!0,path:"/".concat(e.home.path),render:function(){return Object(m.jsx)(U,{})}}),Object(m.jsx)(z.a,{exact:!0,path:"/".concat(e.complex.path),render:function(){return Object(m.jsx)(W,{})}}),Object(m.jsx)(z.a,{exact:!0,path:"/".concat(e.contact.path),render:function(){return Object(m.jsx)(D,{})}}),Object(m.jsx)(z.a,{render:function(){return Object(m.jsx)(Z,{})}})]})})},q=n(35),B=function e(t){var n=this;Object(q.a)(this,e),this.setUp=function(e){n.animation=e,n.nodeList=document.querySelectorAll(n.selector),n.nodeList.length>0&&n.nodeList.forEach((function(e){return e.style.animation=n.animation}))},this.selector=t,this.animation=null,this.nodeList=[]},H=n(66),V=function e(t){var n=this;Object(q.a)(this,e),this.setUp=function(e){n.animation=e,n.nodeList=document.querySelectorAll(n.selector),n.nodeList.length>0&&(n.nodeList=Object(H.a)(n.nodeList),n.startListening(n.checkWidth))},this.startListening=function(e){document.addEventListener("scroll",e)},this.stopListening=function(e){document.removeEventListener("scroll",e)},this.checkWidth=function(){n.nodeList.forEach((function(e){e.offsetTop-window.innerHeight<window.pageYOffset&&(n.addAnimation(e),n.nodeList=n.nodeList.filter((function(t){return t!==e})))})),0===n.nodeList.length&&n.stopListening(n.checkWidth)},this.addAnimation=function(e){e.style.animation=n.animation},this.selector=t,this.animation=null,this.nodeList=[]},Y=function(){return Object(a.useEffect)((function(){new B(".animJumpIn").setUp("jumpIn 0.5s ease-in-out 1 0.4s normal both"),new V(".animEaseIn").setUp("easeIn 1s ease-in-out 1 0.2s normal both")}),[]),Object(m.jsxs)(p,{children:[Object(m.jsx)(O,{}),Object(m.jsxs)(o.a,{children:[Object(m.jsx)(x,{}),Object(m.jsx)(G,{})]}),Object(m.jsx)(k,{})]})};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root"))},72:function(e,t,n){}},[[244,1,2]]]);
//# sourceMappingURL=main.1188dc78.chunk.js.map