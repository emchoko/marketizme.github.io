(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1oc3":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("TSYQ"),c=a.n(r),o=a("vOnD"),l=a("G85M"),s=a.n(l),d=o.a.div.withConfig({displayName:"Hero__Wrapper",componentId:"y2bpdt-0"})(["position:relative;width:100vw;min-height:",";height:",";overflow:hidden;@media screen and (max-width:991px){min-height:400px;.hero{margin-top:70px;width:100%;height:75vh;object-fit:cover;}}.video-wrapper{height:100%;top:0;left:0;overflow:hidden;position:absolute;width:100%;z-index:0;video{width:100%;height:100%;object-fit:cover;}}.content{background:rgba(17,17,17,.4);width:100%;height:100%;display:flex;justify-content:center;align-items:center;}&:before{background:url(",");","}.chevron-down{position:absolute;bottom:30px;left:50%;transform:translate(-50%);cursor:pointer;}"],(function(e){return e.isBig?"100vh":"75vh"}),(function(e){return e.isVideo?"100vh":"none"}),(function(e){return e.bgImage}),(function(e){return!e.isVideo&&'\n            @media screen and (min-width: 991px) {\n                content: "";\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 75vh;\n                object-fit: cover;\n                background-attachment: fixed;\n                background-repeat: no-repeat;\n                background-size: cover;\n                background-position: center center;\n            }\n        '})),m=function(e){var t=e.isBig,a=e.img,r=e.title,o=e.subtitle,l=e.children,m=e.isVideo,h=Object(n.useRef)();return Object(n.useEffect)((function(){if((t=navigator.userAgent.toLowerCase()).indexOf("safari")>-1&&t.indexOf("chrome")<0&&h.current){var e=h.current.children[0];e&&(e.controls=!1,e.playsinline=!0,e.muted=!0,e.setAttribute("muted",""),e.autoplay=!0,setTimeout((function(){if(e.play){var t=e.play();t.then&&t.then((function(){})).catch((function(){}))}}),0))}var t}),[h]),i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement(d,{bgImage:a,isBig:t,isVideo:m,className:c()("header-wrapper")},t&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"video-wrapper"},i.a.createElement("video",{ref:h,controls:!1,muted:!0,autoPlay:!0,playsInline:!0,loop:!0,width:"100%"},i.a.createElement("source",{src:s.a,type:"video/mp4"})))),i.a.createElement("img",{className:"img-fluid hero d-lg-none",src:a,alt:r}),i.a.createElement("div",{className:"content"},i.a.createElement("div",null,i.a.createElement("h1",null,r),i.a.createElement("hr",{className:"my-4 white"}),o&&i.a.createElement("p",{className:"text-heading"},o),i.a.createElement("div",null,l),t&&i.a.createElement("a",{href:"#chevron",className:"chevron-down",id:"chevron"},i.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",class:"bi bi-chevron-down",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}))))))))};m.defaultProps={isBig:!1,img:"",title:"",subtitle:""},t.a=m},G85M:function(e,t,a){e.exports=a.p+"static/hero-89910070c1d9e4e314025d5707b3cb7c.mp4"},zIjM:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return l}));var n=a("q1tI"),i=a.n(n),r=a("7oih"),c=a("1oc3"),o=a("EwW3"),l="3635145071";t.default=Object(o.a)((function(e){var t=e.data,a=e.t,o=Object(n.useState)(0),l=o[0],s=o[1];Object(n.useEffect)((function(){window.location.hash&&s(window.location.hash.slice(1))}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{title:a("site.pages.FaqPage.meta.title"),description:a("site.pages.FaqPage.meta.description"),img:t.header.childImageSharp.fluid.src},i.a.createElement(c.a,{isDark:!0,title:a("site.pages.FaqPage.title"),alt:a("site.pages.FaqPage.headerAlt"),img:t.header.childImageSharp.fluid.src}),i.a.createElement("div",{className:"container my-5"},i.a.createElement("div",{id:"accordion"},a("site.pages.FaqPage.list").map((function(e,t){return i.a.createElement("div",{className:"card",key:t},i.a.createElement("div",{id:t,className:"fixanchor"}),i.a.createElement("div",{className:"card-header py-3 text-center",id:"heading"+t,"data-toggle":"collapse","data-target":"#collapse"+t,"aria-expanded":t==l,"aria-controls":"collapse"+t},i.a.createElement("h5",{className:"mb-0"},i.a.createElement("span",{className:"faq-question"},e.question))),i.a.createElement("div",{id:"collapse"+t,className:"collapse "+(t==l&&"show"),"aria-labelledby":"heading"+t,"data-parent":"#accordion"},i.a.createElement("div",{className:"card-body",dangerouslySetInnerHTML:(n=e.text,{__html:""+a(n)})})));var n}))))))}))}}]);
//# sourceMappingURL=component---src-pages-faq-js-cf31841de5501ac0c957.js.map