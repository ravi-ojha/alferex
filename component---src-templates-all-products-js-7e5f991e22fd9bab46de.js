(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{140:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t.n(n),c=t(0),l=t.n(c),i=t(170),s=t(626),o=t(616),u=t(622),d=t(624),m=t(621),p=t(193),h=t(625),f=t(176),b=t(175),E=(t(165),t(166),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).productCard=function(e){return l.a.createElement(s.a.Column,{key:e.node.slug},l.a.createElement(i.Link,{to:""+e.node.slug},l.a.createElement(o.a,null,l.a.createElement(u.a,{alt:e.node.title,src:e.node.images[0]}),l.a.createElement(o.a.Content,null,l.a.createElement(o.a.Header,null,e.node.title),l.a.createElement(o.a.Description,null,"Material: "+e.node.material)))))},a}return r()(a,e),a.prototype.render=function(){var e=this;console.log(this.props);var a=this.props.pageContext;a.previous,a.next;console.log(a.allProducts);var t=a.allProducts.filter(function(e){if("pulleys"===e.node.categorySlug)return e}).map(function(a){return e.productCard(a)}),n=a.allProducts.filter(function(a){if("gears"===a.node.categorySlug)return e.productCard(a)}).map(function(a){return e.productCard(a)});return l.a.createElement("div",null,l.a.createElement(f.a,this.props),l.a.createElement(d.a,{basic:!0,style:{background:"#ffffff"}},l.a.createElement(m.a,null,l.a.createElement(d.a,{basic:!0,style:{marginBottom:"0"}},l.a.createElement(p.a,{size:"large"},l.a.createElement(p.a.Section,{link:!0},l.a.createElement(i.Link,{to:"/"},"Home")),l.a.createElement(p.a.Divider,{icon:"right chevron"}),l.a.createElement(p.a.Section,{active:!0},"Products"))),l.a.createElement(d.a,{basic:!0},l.a.createElement(h.a,{as:"h1",textAlign:"center",className:"about-header alferex-header"},"Product Range"),l.a.createElement(d.a,{basic:!0,style:{padding:"5em 0"}},l.a.createElement(h.a,{as:"h3",className:"alferex-product-header"},l.a.createElement("span",null,"Pulleys")),l.a.createElement(m.a,null,l.a.createElement(s.a,{stackable:!0,columns:3},t))),l.a.createElement(d.a,{basic:!0,style:{padding:"5em 0"}},l.a.createElement(h.a,{as:"h3",className:"alferex-product-header"},l.a.createElement("span",null,"Gears")),l.a.createElement(m.a,null,l.a.createElement(s.a,{stackable:!0,columns:3},n)))))),l.a.createElement(b.a,null))},a}(l.a.PureComponent));a.default=E},193:function(e,a,t){"use strict";var n=t(153),r=t.n(n),c=(t(154),t(178)),l=t.n(c),i=t(151),s=t.n(i),o=(t(4),t(0)),u=t.n(o),d=t(311),m=t(312),p=t(152),h=t(171),f=t.n(h),b=t(169),E=t.n(b),N=t(340),v=t(346);function k(e){var a=e.children,t=e.className,n=e.content,c=e.icon,l=s()("divider",t),i=Object(d.a)(k,e),o=Object(m.a)(k,e);return E()(c)?E()(n)?u.a.createElement(o,r()({},i,{className:l}),p.a.isNil(a)?"/":a):u.a.createElement(o,r()({},i,{className:l}),n):v.a.create(c,{defaultProps:f()({},i,{className:l}),autoGenerateKey:!1})}k.handledProps=["as","children","className","content","icon"],k.propTypes={},k.create=Object(N.b)(k,function(e){return{icon:e}});var g=k,j=t(155),y=t.n(j),O=t(156),C=t.n(O),x=t(157),P=t.n(x),A=t(158),w=t.n(A),T=t(159),G=t.n(T),K=t(52),S=t.n(K),D=t(51),z=t.n(D),H=t(164),R=t.n(H),J=t(183),L=function(e){function a(){var e,t;y()(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=P()(this,(e=w()(a)).call.apply(e,[this].concat(r))),z()(S()(S()(t)),"computeElementType",function(){var e=t.props,a=e.link,n=e.onClick;if(a||n)return"a"}),z()(S()(S()(t)),"handleClick",function(e){return R()(t.props,"onClick",e,t.props)}),t}return G()(a,e),C()(a,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.children,c=e.className,l=e.content,i=e.href,o=s()(Object(J.a)(t,"active"),"section",c),h=Object(d.a)(a,this.props),f=Object(m.a)(a,this.props,this.computeElementType);return u.a.createElement(f,r()({},h,{className:o,href:i,onClick:this.handleClick}),p.a.isNil(n)?l:n)}}]),a}(o.Component);function M(e){var a=e.children,t=e.className,n=e.divider,c=e.icon,i=e.sections,o=e.size,h=s()("ui",o,"breadcrumb",t),f=Object(d.a)(M,e),b=Object(m.a)(M,e);if(!p.a.isNil(a))return u.a.createElement(b,r()({},f,{className:h}),a);var E=[];return l()(i,function(e,a){var t=L.create(e);if(E.push(t),a!==i.length-1){var r="".concat(t.key,"_divider")||!1;E.push(g.create({content:n,icon:c,key:r}))}}),u.a.createElement(b,r()({},f,{className:h}),E)}z()(L,"handledProps",["active","as","children","className","content","href","link","onClick"]),L.propTypes={},L.create=Object(N.b)(L,function(e){return{content:e,link:!0}}),M.handledProps=["as","children","className","divider","icon","sections","size"],M.propTypes={},M.Divider=g,M.Section=L;a.a=M},616:function(e,a,t){"use strict";var n=t(153),r=t.n(n),c=t(155),l=t.n(c),i=t(156),s=t.n(i),o=t(157),u=t.n(o),d=t(158),m=t.n(d),p=t(159),h=t.n(p),f=t(52),b=t.n(f),E=t(51),N=t.n(E),v=t(151),k=t.n(v),g=(t(4),t(0)),j=t.n(g),y=t(183),O=t(311),C=t(312),x=t(152),P=t(622),A=(t(154),t(340));function w(e){var a=e.children,t=e.className,n=e.content,c=e.textAlign,l=k()(Object(y.d)(c),"description",t),i=Object(O.a)(w,e),s=Object(C.a)(w,e);return j.a.createElement(s,r()({},i,{className:l}),x.a.isNil(a)?n:a)}w.handledProps=["as","children","className","content","textAlign"],w.propTypes={};var T=w;function G(e){var a=e.children,t=e.className,n=e.content,c=e.textAlign,l=k()(Object(y.d)(c),"header",t),i=Object(O.a)(G,e),s=Object(C.a)(G,e);return j.a.createElement(s,r()({},i,{className:l}),x.a.isNil(a)?n:a)}G.handledProps=["as","children","className","content","textAlign"],G.propTypes={};var K=G;function S(e){var a=e.children,t=e.className,n=e.content,c=e.textAlign,l=k()(Object(y.d)(c),"meta",t),i=Object(O.a)(S,e),s=Object(C.a)(S,e);return j.a.createElement(s,r()({},i,{className:l}),x.a.isNil(a)?n:a)}S.handledProps=["as","children","className","content","textAlign"],S.propTypes={};var D=S;function z(e){var a=e.children,t=e.className,n=e.content,c=e.description,l=e.extra,i=e.header,s=e.meta,o=e.textAlign,u=k()(Object(y.a)(l,"extra"),Object(y.d)(o),"content",t),d=Object(O.a)(z,e),m=Object(C.a)(z,e);return x.a.isNil(a)?x.a.isNil(n)?j.a.createElement(m,r()({},d,{className:u}),Object(A.a)(K,function(e){return{content:e}},i,{autoGenerateKey:!1}),Object(A.a)(D,function(e){return{content:e}},s,{autoGenerateKey:!1}),Object(A.a)(T,function(e){return{content:e}},c,{autoGenerateKey:!1})):j.a.createElement(m,r()({},d,{className:u}),n):j.a.createElement(m,r()({},d,{className:u}),a)}z.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],z.propTypes={};var H=z,R=t(184),J=t.n(R);function L(e){var a=e.centered,t=e.children,n=e.className,c=e.content,l=e.doubling,i=e.items,s=e.itemsPerRow,o=e.stackable,u=e.textAlign,d=k()("ui",Object(y.a)(a,"centered"),Object(y.a)(l,"doubling"),Object(y.a)(o,"stackable"),Object(y.d)(u),Object(y.g)(s),"cards",n),m=Object(O.a)(L,e),p=Object(C.a)(L,e);if(!x.a.isNil(t))return j.a.createElement(p,r()({},m,{className:d}),t);if(!x.a.isNil(c))return j.a.createElement(p,r()({},m,{className:d}),c);var h=J()(i,function(e){var a=e.key||[e.header,e.description].join("-");return j.a.createElement(B,r()({key:a},e))});return j.a.createElement(p,r()({},m,{className:d}),h)}L.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],L.propTypes={};var M=L;t.d(a,"a",function(){return B});var B=function(e){function a(){var e,t;l()(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=u()(this,(e=m()(a)).call.apply(e,[this].concat(r))),N()(b()(b()(t)),"handleClick",function(e){var a=t.props.onClick;a&&a(e,t.props)}),t}return h()(a,e),s()(a,[{key:"render",value:function(){var e=this.props,t=e.centered,n=e.children,c=e.className,l=e.color,i=e.content,s=e.description,o=e.extra,u=e.fluid,d=e.header,m=e.href,p=e.image,h=e.link,f=e.meta,b=e.onClick,E=e.raised,N=k()("ui",l,Object(y.a)(t,"centered"),Object(y.a)(u,"fluid"),Object(y.a)(h,"link"),Object(y.a)(E,"raised"),"card",c),v=Object(O.a)(a,this.props),g=Object(C.a)(a,this.props,function(){if(b)return"a"});return x.a.isNil(n)?x.a.isNil(i)?j.a.createElement(g,r()({},v,{className:N,href:m,onClick:this.handleClick}),P.a.create(p,{autoGenerateKey:!1}),(s||d||f)&&j.a.createElement(H,{description:s,header:d,meta:f}),o&&j.a.createElement(H,{extra:!0},o)):j.a.createElement(g,r()({},v,{className:N,href:m,onClick:this.handleClick}),i):j.a.createElement(g,r()({},v,{className:N,href:m,onClick:this.handleClick}),n)}}]),a}(g.Component);N()(B,"Content",H),N()(B,"Description",T),N()(B,"Group",M),N()(B,"Header",K),N()(B,"Meta",D),N()(B,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),B.propTypes={}}}]);
//# sourceMappingURL=component---src-templates-all-products-js-7e5f991e22fd9bab46de.js.map