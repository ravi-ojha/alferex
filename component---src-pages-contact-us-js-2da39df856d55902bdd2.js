(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,a,t){"use strict";t.r(a);var n=t(7),c=t.n(n),l=t(0),r=t.n(l),i=t(168),s=t(175),o=t.n(s),d=t(173),m=t.n(d),p=t(584),u=t(579),b=t(207),h=t(582),f=t(181),g=t(180),v=t(264),O=(t(164),t(165),function(e){function a(){return e.apply(this,arguments)||this}return c()(a,e),a.prototype.render=function(){var e=m()(this,"props.data.site.siteMetadata.title"),a=m()(this,"props.data.site.siteMetadata.description");return r.a.createElement("div",null,r.a.createElement(o.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:""+e}),r.a.createElement(f.a,this.props),r.a.createElement(p.a,{basic:!0,style:{background:"#ffffff"}},r.a.createElement(u.a,null,r.a.createElement(p.a,{basic:!0,style:{marginBottom:"0"}},r.a.createElement(b.a,{size:"large"},r.a.createElement(b.a.Section,{link:!0},r.a.createElement(i.Link,{to:"/"},"Home")),r.a.createElement(b.a.Divider,{icon:"right chevron"}),r.a.createElement(b.a.Section,{active:!0},"Contact Us"))),r.a.createElement(p.a,{basic:!0},r.a.createElement(h.a,{as:"h1",textAlign:"center",className:"about-header alferex-header"},"Reach Us"),r.a.createElement(v.a,null)))),r.a.createElement(g.a,null))},a}(r.a.PureComponent));a.default=O},207:function(e,a,t){"use strict";var n=t(151),c=t.n(n),l=(t(152),t(188)),r=t.n(l),i=t(149),s=t.n(i),o=(t(4),t(0)),d=t.n(o),m=t(301),p=t(302),u=t(150),b=t(171),h=t.n(b),f=t(167),g=t.n(f),v=t(328),O=t(332);function j(e){var a=e.children,t=e.className,n=e.content,l=e.icon,r=s()("divider",t),i=Object(m.a)(j,e),o=Object(p.a)(j,e);return g()(l)?g()(n)?d.a.createElement(o,c()({},i,{className:r}),u.a.isNil(a)?"/":a):d.a.createElement(o,c()({},i,{className:r}),n):O.a.create(l,{defaultProps:h()({},i,{className:r}),autoGenerateKey:!1})}j.handledProps=["as","children","className","content","icon"],j.propTypes={},j.create=Object(v.b)(j,function(e){return{icon:e}});var E=j,N=t(154),y=t.n(N),A=t(155),w=t.n(A),k=t(156),P=t.n(k),x=t(157),C=t.n(x),R=t(158),T=t.n(R),z=t(52),S=t.n(z),B=t(51),H=t.n(B),L=t(162),W=t.n(L),D=t(179),M=function(e){function a(){var e,t;y()(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return t=P()(this,(e=C()(a)).call.apply(e,[this].concat(c))),H()(S()(S()(t)),"computeElementType",function(){var e=t.props,a=e.link,n=e.onClick;if(a||n)return"a"}),H()(S()(S()(t)),"handleClick",function(e){return W()(t.props,"onClick",e,t.props)}),t}return T()(a,e),w()(a,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.children,l=e.className,r=e.content,i=e.href,o=s()(Object(D.a)(t,"active"),"section",l),b=Object(m.a)(a,this.props),h=Object(p.a)(a,this.props,this.computeElementType);return d.a.createElement(h,c()({},b,{className:o,href:i,onClick:this.handleClick}),u.a.isNil(n)?r:n)}}]),a}(o.Component);function _(e){var a=e.children,t=e.className,n=e.divider,l=e.icon,i=e.sections,o=e.size,b=s()("ui",o,"breadcrumb",t),h=Object(m.a)(_,e),f=Object(p.a)(_,e);if(!u.a.isNil(a))return d.a.createElement(f,c()({},h,{className:b}),a);var g=[];return r()(i,function(e,a){var t=M.create(e);if(g.push(t),a!==i.length-1){var c="".concat(t.key,"_divider")||!1;g.push(E.create({content:n,icon:l,key:c}))}}),d.a.createElement(f,c()({},h,{className:b}),g)}H()(M,"handledProps",["active","as","children","className","content","href","link","onClick"]),M.propTypes={},M.create=Object(v.b)(M,function(e){return{content:e,link:!0}}),_.handledProps=["as","children","className","divider","icon","sections","size"],_.propTypes={},_.Divider=E,_.Section=M;a.a=_},264:function(e,a,t){"use strict";var n=t(7),c=t.n(n),l=t(0),r=t.n(l),i=t(584),s=t(579),o=t(582),d=t(151),m=t.n(d),p=(t(152),t(189)),u=t.n(p),b=t(149),h=t.n(b),f=(t(4),t(179)),g=t(301),v=t(302),O=t(150);function j(e){var a=e.children,t=e.className,n=h()(t),c=Object(g.a)(j,e),l=Object(v.a)(j,e);return r.a.createElement(l,m()({},c,{className:n}),a)}j.handledProps=["as","children","className"],j.defaultProps={as:"tbody"},j.propTypes={};var E=j,N=t(328),y=t(332);function A(e){var a=e.active,t=e.children,n=e.className,c=e.collapsing,l=e.content,i=e.disabled,s=e.error,o=e.icon,d=e.negative,p=e.positive,u=e.selectable,b=e.singleLine,j=e.textAlign,E=e.verticalAlign,N=e.warning,w=e.width,k=h()(Object(f.a)(a,"active"),Object(f.a)(c,"collapsing"),Object(f.a)(i,"disabled"),Object(f.a)(s,"error"),Object(f.a)(d,"negative"),Object(f.a)(p,"positive"),Object(f.a)(u,"selectable"),Object(f.a)(b,"single line"),Object(f.a)(N,"warning"),Object(f.d)(j),Object(f.f)(E),Object(f.g)(w,"wide"),n),P=Object(g.a)(A,e),x=Object(v.a)(A,e);return O.a.isNil(t)?r.a.createElement(x,m()({},P,{className:k}),y.a.create(o),l):r.a.createElement(x,m()({},P,{className:k}),t)}A.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"],A.defaultProps={as:"td"},A.propTypes={},A.create=Object(N.b)(A,function(e){return{content:e}});var w=A;function k(e){var a=e.children,t=e.className,n=e.content,c=e.fullWidth,l=h()(Object(f.a)(c,"full-width"),t),i=Object(g.a)(k,e),s=Object(v.a)(k,e);return r.a.createElement(s,m()({},i,{className:l}),O.a.isNil(a)?n:a)}k.handledProps=["as","children","className","content","fullWidth"],k.defaultProps={as:"thead"},k.propTypes={};var P=k;function x(e){var a=e.as,t=Object(g.a)(x,e);return r.a.createElement(P,m()({},t,{as:a}))}x.handledProps=["as"],x.propTypes={},x.defaultProps={as:"tfoot"};var C=x;function R(e){var a=e.as,t=e.className,n=e.sorted,c=h()(Object(f.e)(n,"sorted"),t),l=Object(g.a)(R,e);return r.a.createElement(w,m()({},l,{as:a,className:c}))}R.handledProps=["as","className","sorted"],R.propTypes={},R.defaultProps={as:"th"};var T=R;function z(e){var a=e.active,t=e.cellAs,n=e.cells,c=e.children,l=e.className,i=e.disabled,s=e.error,o=e.negative,d=e.positive,p=e.textAlign,b=e.verticalAlign,j=e.warning,E=h()(Object(f.a)(a,"active"),Object(f.a)(i,"disabled"),Object(f.a)(s,"error"),Object(f.a)(o,"negative"),Object(f.a)(d,"positive"),Object(f.a)(j,"warning"),Object(f.d)(p),Object(f.f)(b),l),N=Object(g.a)(z,e),y=Object(v.a)(z,e);return O.a.isNil(c)?r.a.createElement(y,m()({},N,{className:E}),u()(n,function(e){return w.create(e,{defaultProps:{as:t}})})):r.a.createElement(y,m()({},N,{className:E}),c)}z.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"],z.defaultProps={as:"tr",cellAs:"td"},z.propTypes={},z.create=Object(N.b)(z,function(e){return{cells:e}});var S=z;function B(e){var a=e.attached,t=e.basic,n=e.celled,c=e.children,l=e.className,i=e.collapsing,s=e.color,o=e.columns,d=e.compact,p=e.definition,b=e.fixed,j=e.footerRow,N=e.headerRow,y=e.inverted,A=e.padded,w=e.renderBodyRow,k=e.selectable,x=e.singleLine,R=e.size,T=e.sortable,z=e.stackable,H=e.striped,L=e.structured,W=e.tableData,D=e.textAlign,M=e.unstackable,_=e.verticalAlign,U=h()("ui",s,R,Object(f.a)(n,"celled"),Object(f.a)(i,"collapsing"),Object(f.a)(p,"definition"),Object(f.a)(b,"fixed"),Object(f.a)(y,"inverted"),Object(f.a)(k,"selectable"),Object(f.a)(x,"single line"),Object(f.a)(T,"sortable"),Object(f.a)(z,"stackable"),Object(f.a)(H,"striped"),Object(f.a)(L,"structured"),Object(f.a)(M,"unstackable"),Object(f.b)(a,"attached"),Object(f.b)(t,"basic"),Object(f.b)(d,"compact"),Object(f.b)(A,"padded"),Object(f.d)(D),Object(f.f)(_),Object(f.g)(o,"column"),"table",l),F=Object(g.a)(B,e),G=Object(v.a)(B,e);return O.a.isNil(c)?r.a.createElement(G,m()({},F,{className:U}),N&&r.a.createElement(P,null,S.create(N,{defaultProps:{cellAs:"th"}})),r.a.createElement(E,null,w&&u()(W,function(e,a){return S.create(w(e,a))})),j&&r.a.createElement(C,null,S.create(j))):r.a.createElement(G,m()({},F,{className:U}),c)}B.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"],B.defaultProps={as:"table"},B.propTypes={},B.Body=E,B.Cell=w,B.Footer=C,B.Header=P,B.HeaderCell=T,B.Row=S;var H=B,L=(t(164),t(165),function(e){function a(){return e.apply(this,arguments)||this}return c()(a,e),a.prototype.render=function(){return r.a.createElement(i.a,{vertical:!0,style:{padding:"5em 0"}},r.a.createElement(s.a,null,r.a.createElement(o.a,{as:"h1",textAlign:"center",style:{fontWeight:"400",fontSize:"2em"},className:"about-header"},"Reach us via any of these mediums"),r.a.createElement(H,{basic:"very",celled:!0,collapsing:!0,style:{margin:"auto"}},r.a.createElement(H.Body,null,r.a.createElement(H.Row,null,r.a.createElement(H.Cell,null,r.a.createElement(o.a,{as:"h4",color:"grey"},"Email")),r.a.createElement(H.Cell,null,r.a.createElement(o.a,{as:"h4"},r.a.createElement("a",{href:"mailto:info@alferex.com"},"info@alferex.com")))),r.a.createElement(H.Row,null,r.a.createElement(H.Cell,null,r.a.createElement(o.a,{as:"h4",color:"grey"},"Mobile")),r.a.createElement(H.Cell,null,r.a.createElement(o.a,{as:"h4"},r.a.createElement("a",{href:"tel:+918971895463"},"+91 8971895463")))))),r.a.createElement("div",{style:{marginTop:"2em"}},r.a.createElement(o.a,{as:"h2",textAlign:"center",style:{fontWeight:"400",fontSize:"1.8em"},className:"about-header"},"Or send us a post like good ol' days"),r.a.createElement(o.a,{as:"h4",color:"grey",textAlign:"center"},"Registered Address"),r.a.createElement(o.a,{as:"h4",textAlign:"center"},"#20, Shri Hari Villas, Near Adani Circle,",r.a.createElement("br",null),"SP Ring Road, Ahmedabad - 382445"),r.a.createElement(o.a,{as:"h4",color:"grey",textAlign:"center"},"Google Maps"),r.a.createElement("div",{className:"mapouter",style:{textAlign:"center"}},r.a.createElement("div",{className:"gmap_canvas"},r.a.createElement("iframe",{title:"alferex_gmaps",width:"260",height:"260",id:"gmap_canvas",src:"https://maps.google.com/maps?q=20%2C%20Shree%20Hari%20Villas%20Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"},"Loading..."))))))},a}(r.a.PureComponent));a.a=L}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-2da39df856d55902bdd2.js.map