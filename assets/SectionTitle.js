import{j as t,a as o}from"./index.js";function r(e){return t("div",{className:`layout layout__column ${e.size??!1?`layout--${e.size}`:""} ${e.noGap??!1?"layout--nogap":""} `,children:e.children})}function d(e,n=null){function i(l){let a=new URL(l,import.meta.url).pathname;return a.includes("base64")&&(a=`data:${a}`),a}if(typeof e=="string")return[{path:e,thumbnail:n}];n!=null&&(n=Object.values(n));let c=[];return Object.values(e).forEach((l,s)=>{let a={path:i(l.default),thumbnail:n?i(n[s].default):null};c.push(a)}),c}function f(e){return o("div",{className:"section__image",children:[e.children,t("span",{className:"image__action"}),t("span",{className:"image__action-text"})]})}function h(e){return t("div",{className:`section ${e.type??!1?`section--${e.type}`:""} ${e.align??!1?`section--${e.align}`:""}`,children:t("div",{className:"content layout layout__column layout--small",children:e.children})})}function m(e){return t("img",{src:e.src,className:"section__logo",width:"300px",loading:"lazy",decoding:"async"})}function _(e){return t("div",{className:"section__subtitle",children:e.children})}function y(e){return t("div",{className:"section__title",children:e.children})}export{r as C,h as S,y as a,m as b,_ as c,f as d,d as u};
