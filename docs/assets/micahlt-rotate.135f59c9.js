import{_ as v,r as i,o as d,c as u,a as l,d as n,w as r,b as a,p,e as m}from"./index.636d1b0d.js";var $="/assets/micahlt-small.png";const _={title:"NavBar",emits:["hoverIn","hoverOut"],methods:{open(o){window.open(o)}}},f=o=>(p("data-v-8af6e69e"),o=o(),m(),o),g={class:"logo-left"},k=f(()=>l("img",{src:$,class:"logo"},null,-1)),I={class:"nav-links"};function M(o,e,N,B,h,w){const s=i("router-link");return d(),u("nav",null,[l("div",g,[n(s,{to:"/",class:"logo-link",onMouseenter:e[0]||(e[0]=t=>o.$emit("hoverIn")),onMouseleave:e[1]||(e[1]=t=>o.$emit("hoverOut"))},{default:r(()=>[k]),_:1})]),l("div",I,[n(s,{to:"/",class:"logo-link mobile-hidden",onMouseenter:e[2]||(e[2]=t=>o.$emit("hoverIn")),onMouseleave:e[3]||(e[3]=t=>o.$emit("hoverOut"))},{default:r(()=>[a("Home")]),_:1}),n(s,{to:"/projects",class:"logo-link",onMouseenter:e[4]||(e[4]=t=>o.$emit("hoverIn")),onMouseleave:e[5]||(e[5]=t=>o.$emit("hoverOut"))},{default:r(()=>[a("Projects")]),_:1}),n(s,{to:"/contact",class:"logo-link",onMouseenter:e[6]||(e[6]=t=>o.$emit("hoverIn")),onMouseleave:e[7]||(e[7]=t=>o.$emit("hoverOut"))},{default:r(()=>[a("Contact")]),_:1})])])}var C=v(_,[["render",M],["__scopeId","data-v-8af6e69e"]]),S="/assets/micahlt-rotate.png";export{C as N,S as _};