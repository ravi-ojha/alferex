(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{141:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(0),i=a.n(c),l=a(170),s=a(626),o=a(616),d=a(622),u=a(624),m=a(621),p=a(193),h=a(625),f=a(176),b=a(175),v=(a(165),a(166),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).productCard=function(e){return i.a.createElement(s.a.Column,{key:e.node.slug},i.a.createElement(l.Link,{to:""+e.node.slug},i.a.createElement(o.a,null,i.a.createElement(d.a,{alt:e.node.title,src:e.node.images[0]}),i.a.createElement(o.a.Content,null,i.a.createElement(o.a.Header,null,e.node.title),i.a.createElement(o.a.Description,null,"Material: "+e.node.material)))))},t}return r()(t,e),t.prototype.render=function(){var e=this;console.log(this.props);var t=this.props.pageContext;t.previous,t.next;console.log(t.allProducts);var a="Products",n=t.allProducts.filter(function(e){if(e.node.categorySlug===t.categorySlug)return a=e.node.category,e}).map(function(t){return e.productCard(t)});return i.a.createElement("div",null,i.a.createElement(f.a,this.props),i.a.createElement(u.a,{basic:!0,style:{background:"#ffffff"}},i.a.createElement(m.a,null,i.a.createElement(u.a,{basic:!0,style:{marginBottom:"0"}},i.a.createElement(p.a,{size:"large"},i.a.createElement(p.a.Section,{link:!0},i.a.createElement(l.Link,{to:"/"},"Home")),i.a.createElement(p.a.Divider,{icon:"right chevron"}),i.a.createElement(p.a.Section,{link:!0},i.a.createElement(l.Link,{to:"/products"},"Products")),i.a.createElement(p.a.Divider,{icon:"right chevron"}),i.a.createElement(p.a.Section,{active:!0},a))),i.a.createElement(u.a,{basic:!0},i.a.createElement(h.a,{as:"h1",textAlign:"center",className:"about-header alferex-header"},"Product Range"),i.a.createElement(u.a,{basic:!0,style:{padding:"5em 0"}},i.a.createElement(h.a,{as:"h3",dividing:!0,className:"alferex-product-header"},a),i.a.createElement(m.a,null,i.a.createElement(s.a,{stackable:!0,columns:3},n)))))),i.a.createElement(b.a,null))},t}(i.a.PureComponent));t.default=v},193:function(e,t,a){"use strict";var n=a(153),r=a.n(n),c=(a(154),a(178)),i=a.n(c),l=a(151),s=a.n(l),o=(a(4),a(0)),d=a.n(o),u=a(311),m=a(312),p=a(152),h=a(171),f=a.n(h),b=a(169),v=a.n(b),N=a(340),E=a(346);function k(e){var t=e.children,a=e.className,n=e.content,c=e.icon,i=s()("divider",a),l=Object(u.a)(k,e),o=Object(m.a)(k,e);return v()(c)?v()(n)?d.a.createElement(o,r()({},l,{className:i}),p.a.isNil(t)?"/":t):d.a.createElement(o,r()({},l,{className:i}),n):E.a.create(c,{defaultProps:f()({},l,{className:i}),autoGenerateKey:!1})}k.handledProps=["as","children","className","content","icon"],k.propTypes={},k.create=Object(N.b)(k,function(e){return{icon:e}});var g=k,j=a(155),O=a.n(j),y=a(156),C=a.n(y),x=a(157),P=a.n(x),A=a(158),w=a.n(A),T=a(159),G=a.n(T),S=a(52),D=a.n(S),K=a(51),z=a.n(K),H=a(164),L=a.n(H),R=a(183),J=function(e){function t(){var e,a;O()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=P()(this,(e=w()(t)).call.apply(e,[this].concat(r))),z()(D()(D()(a)),"computeElementType",function(){var e=a.props,t=e.link,n=e.onClick;if(t||n)return"a"}),z()(D()(D()(a)),"handleClick",function(e){return L()(a.props,"onClick",e,a.props)}),a}return G()(t,e),C()(t,[{key:"render",value:function(){var e=this.props,a=e.active,n=e.children,c=e.className,i=e.content,l=e.href,o=s()(Object(R.a)(a,"active"),"section",c),h=Object(u.a)(t,this.props),f=Object(m.a)(t,this.props,this.computeElementType);return d.a.createElement(f,r()({},h,{className:o,href:l,onClick:this.handleClick}),p.a.isNil(n)?i:n)}}]),t}(o.Component);function M(e){var t=e.children,a=e.className,n=e.divider,c=e.icon,l=e.sections,o=e.size,h=s()("ui",o,"breadcrumb",a),f=Object(u.a)(M,e),b=Object(m.a)(M,e);if(!p.a.isNil(t))return d.a.createElement(b,r()({},f,{className:h}),t);var v=[];return i()(l,function(e,t){var a=J.create(e);if(v.push(a),t!==l.length-1){var r="".concat(a.key,"_divider")||!1;v.push(g.create({content:n,icon:c,key:r}))}}),d.a.createElement(b,r()({},f,{className:h}),v)}z()(J,"handledProps",["active","as","children","className","content","href","link","onClick"]),J.propTypes={},J.create=Object(N.b)(J,function(e){return{content:e,link:!0}}),M.handledProps=["as","children","className","divider","icon","sections","size"],M.propTypes={},M.Divider=g,M.Section=J;t.a=M},616:function(e,t,a){"use strict";var n=a(153),r=a.n(n),c=a(155),i=a.n(c),l=a(156),s=a.n(l),o=a(157),d=a.n(o),u=a(158),m=a.n(u),p=a(159),h=a.n(p),f=a(52),b=a.n(f),v=a(51),N=a.n(v),E=a(151),k=a.n(E),g=(a(4),a(0)),j=a.n(g),O=a(183),y=a(311),C=a(312),x=a(152),P=a(622),A=(a(154),a(340));function w(e){var t=e.children,a=e.className,n=e.content,c=e.textAlign,i=k()(Object(O.d)(c),"description",a),l=Object(y.a)(w,e),s=Object(C.a)(w,e);return j.a.createElement(s,r()({},l,{className:i}),x.a.isNil(t)?n:t)}w.handledProps=["as","children","className","content","textAlign"],w.propTypes={};var T=w;function G(e){var t=e.children,a=e.className,n=e.content,c=e.textAlign,i=k()(Object(O.d)(c),"header",a),l=Object(y.a)(G,e),s=Object(C.a)(G,e);return j.a.createElement(s,r()({},l,{className:i}),x.a.isNil(t)?n:t)}G.handledProps=["as","children","className","content","textAlign"],G.propTypes={};var S=G;function D(e){var t=e.children,a=e.className,n=e.content,c=e.textAlign,i=k()(Object(O.d)(c),"meta",a),l=Object(y.a)(D,e),s=Object(C.a)(D,e);return j.a.createElement(s,r()({},l,{className:i}),x.a.isNil(t)?n:t)}D.handledProps=["as","children","className","content","textAlign"],D.propTypes={};var K=D;function z(e){var t=e.children,a=e.className,n=e.content,c=e.description,i=e.extra,l=e.header,s=e.meta,o=e.textAlign,d=k()(Object(O.a)(i,"extra"),Object(O.d)(o),"content",a),u=Object(y.a)(z,e),m=Object(C.a)(z,e);return x.a.isNil(t)?x.a.isNil(n)?j.a.createElement(m,r()({},u,{className:d}),Object(A.a)(S,function(e){return{content:e}},l,{autoGenerateKey:!1}),Object(A.a)(K,function(e){return{content:e}},s,{autoGenerateKey:!1}),Object(A.a)(T,function(e){return{content:e}},c,{autoGenerateKey:!1})):j.a.createElement(m,r()({},u,{className:d}),n):j.a.createElement(m,r()({},u,{className:d}),t)}z.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],z.propTypes={};var H=z,L=a(184),R=a.n(L);function J(e){var t=e.centered,a=e.children,n=e.className,c=e.content,i=e.doubling,l=e.items,s=e.itemsPerRow,o=e.stackable,d=e.textAlign,u=k()("ui",Object(O.a)(t,"centered"),Object(O.a)(i,"doubling"),Object(O.a)(o,"stackable"),Object(O.d)(d),Object(O.g)(s),"cards",n),m=Object(y.a)(J,e),p=Object(C.a)(J,e);if(!x.a.isNil(a))return j.a.createElement(p,r()({},m,{className:u}),a);if(!x.a.isNil(c))return j.a.createElement(p,r()({},m,{className:u}),c);var h=R()(l,function(e){var t=e.key||[e.header,e.description].join("-");return j.a.createElement(B,r()({key:t},e))});return j.a.createElement(p,r()({},m,{className:u}),h)}J.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],J.propTypes={};var M=J;a.d(t,"a",function(){return B});var B=function(e){function t(){var e,a;i()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=d()(this,(e=m()(t)).call.apply(e,[this].concat(r))),N()(b()(b()(a)),"handleClick",function(e){var t=a.props.onClick;t&&t(e,a.props)}),a}return h()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,c=e.className,i=e.color,l=e.content,s=e.description,o=e.extra,d=e.fluid,u=e.header,m=e.href,p=e.image,h=e.link,f=e.meta,b=e.onClick,v=e.raised,N=k()("ui",i,Object(O.a)(a,"centered"),Object(O.a)(d,"fluid"),Object(O.a)(h,"link"),Object(O.a)(v,"raised"),"card",c),E=Object(y.a)(t,this.props),g=Object(C.a)(t,this.props,function(){if(b)return"a"});return x.a.isNil(n)?x.a.isNil(l)?j.a.createElement(g,r()({},E,{className:N,href:m,onClick:this.handleClick}),P.a.create(p,{autoGenerateKey:!1}),(s||u||f)&&j.a.createElement(H,{description:s,header:u,meta:f}),o&&j.a.createElement(H,{extra:!0},o)):j.a.createElement(g,r()({},E,{className:N,href:m,onClick:this.handleClick}),l):j.a.createElement(g,r()({},E,{className:N,href:m,onClick:this.handleClick}),n)}}]),t}(g.Component);N()(B,"Content",H),N()(B,"Description",T),N()(B,"Group",M),N()(B,"Header",S),N()(B,"Meta",K),N()(B,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),B.propTypes={}}}]);
//# sourceMappingURL=component---src-templates-category-products-js-1883804f97c32d3aea10.js.map