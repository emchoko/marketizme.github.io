(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{605:function(e,a,t){"use strict";t.r(a),t.d(a,"PromoCard",(function(){return g})),t.d(a,"query",(function(){return p}));t(311),t(25);var r=t(0),n=t.n(r),l=t(151),i=t(50),c=t(647),m=t(603),o=(t(607),t(602)),s=t(604),d=function(e){var a=e.arr,t=e.order;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row d-flex p-0 m-0"},n.a.createElement("div",{className:"col-12 col-xl-4 p-0 m-0 "+(t?"order-0":"order-1")},n.a.createElement("div",{className:"row p-0 m-0"},n.a.createElement("div",{className:"col-12 col-xl-12 p-0 m-0"},null!=a[2]&&n.a.createElement(g,Object.assign({},a[2].node.frontmatter,{slug:a[2].node.fields.slug,isBig:!1}))),n.a.createElement("div",{className:"col-12 col-xl-12 p-0 m-0"},null!=a[1]&&n.a.createElement(g,Object.assign({},a[1].node.frontmatter,{slug:a[1].node.fields.slug,isBig:!1}))))),n.a.createElement("div",{className:"col-12 col-xl-8 p-0 m-0 order-0"+(t?"order-1":"order-0")},null!=a[0]&&n.a.createElement(g,Object.assign({},a[0].node.frontmatter,{slug:a[0].node.fields.slug,isBig:!0})))))},g=function(e){var a=e.title,t=e.subtitle,r=e.image,c=e.slug,m=e.isBig,o=l.a.div.withConfig({displayName:"promocii__CardWrapper",componentId:"sc-1hq4u1g-0"})(["background:#FFFFFF;box-shadow:0px 0px 30px rgba(51,1,109,0.1);border-radius:8px;width:100%;padding:0;min-height:15rem;@media screen and (min-width:1200px){height:",";}"],m?"34.5rem":"17rem");l.a.div.withConfig({displayName:"promocii__SquareImg",componentId:"sc-1hq4u1g-1"})(["background-image:url(",");width:100%;padding-bottom:100%;background-size:cover;background-position:center;"],(function(e){return e.bgImage}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"p-1"},n.a.createElement(o,{isBig:m},n.a.createElement(i.Link,{to:c},n.a.createElement("img",{src:r.childImageSharp.fixed.src,className:"img-thumbnail promo-card",alt:a}),n.a.createElement("div",{className:"text-left p-2"},n.a.createElement("h3",null,a),n.a.createElement("p",null,t))))))},u=function(e){for(var a=[],t=0,r=0;t<e.length;){if(t+1>e.length-1||t+2>e.length-1||t+3>e.length-1){a[r]=e.slice(t,e.length);break}a[r++]=e.slice(t,t+3),t+=3}return a},p="4159434933";a.default=function(e){var a=e.data,t=u(a.homePromotions.edges);return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{activeTab:"/promocii"},n.a.createElement(o.a,{title:s.a.promo.title,description:s.a.promo.metaDescription}),n.a.createElement(c.a,{heroImage:a.heroImage.childImageSharp.fluid.src,imageClass:"promo-all-hero",title:n.a.createElement("h1",{className:"text-white mt-3"},"Нашите пакети – по-добри",n.a.createElement("br",null),"от тези под коледната елха")}),n.a.createElement("div",{className:"container text-center my-5"},n.a.createElement("div",{className:"mt-5"},t.map((function(e,a){return n.a.createElement(d,{key:a,arr:e,order:a%2!=0})}))))))}},647:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(151),i=l.a.div.withConfig({displayName:"hero__Container",componentId:"sc-33j45f-0"})(["width:100%;min-height:40rem;position:relative;display:inline-block;overflow:hidden;"]),c=l.a.div.withConfig({displayName:"hero__HeroText",componentId:"sc-33j45f-1"})(["padding-top:7rem;position:relative;z-index:0;"]);a.a=function(e){var a=e.heroImage,t=e.title,r=e.imageClass;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{id:"business-hero"},n.a.createElement("div",{className:"row w-100"},n.a.createElement(i,{className:"text-center pt-5"},n.a.createElement("div",{className:"col-12 mx-lg-5 "+r},n.a.createElement("img",{src:a,className:"",alt:"Бизнес решения от NetSurf"})),n.a.createElement(c,null,t,n.a.createElement("hr",{className:"center white"}))))))}}}]);
//# sourceMappingURL=component---src-pages-promocii-js-61b5c98d2a71d786cb56.js.map