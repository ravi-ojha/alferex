(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,a,t){"use strict";t.r(a);var n=t(7),c=t.n(n),l=t(0),r=t.n(l),i=t(168),s=(t(253),t(586)),o=t(581),d=t(205),m=t(584),u=t(179),p=t(178),b=t(263),h=(t(164),t(165),function(e){function a(){return e.apply(this,arguments)||this}return c()(a,e),a.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(u.a,this.props),r.a.createElement(s.a,{basic:!0,style:{background:"#ffffff"}},r.a.createElement(o.a,null,r.a.createElement(s.a,{basic:!0,style:{marginBottom:"0"}},r.a.createElement(d.a,{size:"large"},r.a.createElement(d.a.Section,{link:!0},r.a.createElement(i.Link,{to:"/"},"Home")),r.a.createElement(d.a.Divider,{icon:"right chevron"}),r.a.createElement(d.a.Section,{active:!0},"Contact Us"))),r.a.createElement(s.a,{basic:!0},r.a.createElement(m.a,{as:"h1",textAlign:"center",className:"about-header alferex-header"},"Reach Us"),r.a.createElement(b.a,null)))),r.a.createElement(p.a,null))},a}(r.a.PureComponent));a.default=h},205:function(e,a,t){"use strict";var n=t(151),c=t.n(n),l=(t(152),t(186)),r=t.n(l),i=t(149),s=t.n(i),o=(t(4),t(0)),d=t.n(o),m=t(299),u=t(300),p=t(150),b=t(171),h=t.n(b),f=t(167),g=t.n(f),v=t(328),O=t(332);function j(e){var a=e.children,t=e.className,n=e.content,l=e.icon,r=s()("divider",t),i=Object(m.a)(j,e),o=Object(u.a)(j,e);return g()(l)?g()(n)?d.a.createElement(o,c()({},i,{className:r}),p.a.isNil(a)?"/":a):d.a.createElement(o,c()({},i,{className:r}),n):O.a.create(l,{defaultProps:h()({},i,{className:r}),autoGenerateKey:!1})}j.handledProps=["as","children","className","content","icon"],j.propTypes={},j.create=Object(v.b)(j,function(e){return{icon:e}});var E=j,N=t(154),y=t.n(N),w=t(155),A=t.n(w),k=t(156),P=t.n(k),x=t(157),C=t.n(x),R=t(158),T=t.n(R),z=t(52),S=t.n(z),B=t(51),H=t.n(B),L=t(162),W=t.n(L),D=t(177),_=function(e){function a(){var e,t;y()(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return t=P()(this,(e=C()(a)).call.apply(e,[this].concat(c))),H()(S()(S()(t)),"computeElementType",function(){var e=t.props,a=e.link,n=e.onClick;if(a||n)return"a"}),H()(S()(S()(t)),"handleClick",function(e){return W()(t.props,"onClick",e,t.props)}),t}return T()(a,e),A()(a,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.children,l=e.className,r=e.content,i=e.href,o=s()(Object(D.a)(t,"active"),"section",l),b=Object(m.a)(a,this.props),h=Object(u.a)(a,this.props,this.computeElementType);return d.a.createElement(h,c()({},b,{className:o,href:i,onClick:this.handleClick}),p.a.isNil(n)?r:n)}}]),a}(o.Component);function U(e){var a=e.children,t=e.className,n=e.divider,l=e.icon,i=e.sections,o=e.size,b=s()("ui",o,"breadcrumb",t),h=Object(m.a)(U,e),f=Object(u.a)(U,e);if(!p.a.isNil(a))return d.a.createElement(f,c()({},h,{className:b}),a);var g=[];return r()(i,function(e,a){var t=_.create(e);if(g.push(t),a!==i.length-1){var c="".concat(t.key,"_divider")||!1;g.push(E.create({content:n,icon:l,key:c}))}}),d.a.createElement(f,c()({},h,{className:b}),g)}H()(_,"handledProps",["active","as","children","className","content","href","link","onClick"]),_.propTypes={},_.create=Object(v.b)(_,function(e){return{content:e,link:!0}}),U.handledProps=["as","children","className","divider","icon","sections","size"],U.propTypes={},U.Divider=E,U.Section=_;a.a=U},263:function(e,a,t){"use strict";var n=t(7),c=t.n(n),l=t(0),r=t.n(l),i=t(586),s=t(581),o=t(584),d=t(151),m=t.n(d),u=(t(152),t(187)),p=t.n(u),b=t(149),h=t.n(b),f=(t(4),t(177)),g=t(299),v=t(300),O=t(150);function j(e){var a=e.children,t=e.className,n=h()(t),c=Object(g.a)(j,e),l=Object(v.a)(j,e);return r.a.createElement(l,m()({},c,{className:n}),a)}j.handledProps=["as","children","className"],j.defaultProps={as:"tbody"},j.propTypes={};var E=j,N=t(328),y=t(332);function w(e){var a=e.active,t=e.children,n=e.className,c=e.collapsing,l=e.content,i=e.disabled,s=e.error,o=e.icon,d=e.negative,u=e.positive,p=e.selectable,b=e.singleLine,j=e.textAlign,E=e.verticalAlign,N=e.warning,A=e.width,k=h()(Object(f.a)(a,"active"),Object(f.a)(c,"collapsing"),Object(f.a)(i,"disabled"),Object(f.a)(s,"error"),Object(f.a)(d,"negative"),Object(f.a)(u,"positive"),Object(f.a)(p,"selectable"),Object(f.a)(b,"single line"),Object(f.a)(N,"warning"),Object(f.d)(j),Object(f.f)(E),Object(f.g)(A,"wide"),n),P=Object(g.a)(w,e),x=Object(v.a)(w,e);return O.a.isNil(t)?r.a.createElement(x,m()({},P,{className:k}),y.a.create(o),l):r.a.createElement(x,m()({},P,{className:k}),t)}w.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"],w.defaultProps={as:"td"},w.propTypes={},w.create=Object(N.b)(w,function(e){return{content:e}});var A=w;function k(e){var a=e.children,t=e.className,n=e.content,c=e.fullWidth,l=h()(Object(f.a)(c,"full-width"),t),i=Object(g.a)(k,e),s=Object(v.a)(k,e);return r.a.createElement(s,m()({},i,{className:l}),O.a.isNil(a)?n:a)}k.handledProps=["as","children","className","content","fullWidth"],k.defaultProps={as:"thead"},k.propTypes={};var P=k;function x(e){var a=e.as,t=Object(g.a)(x,e);return r.a.createElement(P,m()({},t,{as:a}))}x.handledProps=["as"],x.propTypes={},x.defaultProps={as:"tfoot"};var C=x;function R(e){var a=e.as,t=e.className,n=e.sorted,c=h()(Object(f.e)(n,"sorted"),t),l=Object(g.a)(R,e);return r.a.createElement(A,m()({},l,{as:a,className:c}))}R.handledProps=["as","className","sorted"],R.propTypes={},R.defaultProps={as:"th"};var T=R;function z(e){var a=e.active,t=e.cellAs,n=e.cells,c=e.children,l=e.className,i=e.disabled,s=e.error,o=e.negative,d=e.positive,u=e.textAlign,b=e.verticalAlign,j=e.warning,E=h()(Object(f.a)(a,"active"),Object(f.a)(i,"disabled"),Object(f.a)(s,"error"),Object(f.a)(o,"negative"),Object(f.a)(d,"positive"),Object(f.a)(j,"warning"),Object(f.d)(u),Object(f.f)(b),l),N=Object(g.a)(z,e),y=Object(v.a)(z,e);return O.a.isNil(c)?r.a.createElement(y,m()({},N,{className:E}),p()(n,function(e){return A.create(e,{defaultProps:{as:t}})})):r.a.createElement(y,m()({},N,{className:E}),c)}z.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"],z.defaultProps={as:"tr",cellAs:"td"},z.propTypes={},z.create=Object(N.b)(z,function(e){return{cells:e}});var S=z;function B(e){var a=e.attached,t=e.basic,n=e.celled,c=e.children,l=e.className,i=e.collapsing,s=e.color,o=e.columns,d=e.compact,u=e.definition,b=e.fixed,j=e.footerRow,N=e.headerRow,y=e.inverted,w=e.padded,A=e.renderBodyRow,k=e.selectable,x=e.singleLine,R=e.size,T=e.sortable,z=e.stackable,H=e.striped,L=e.structured,W=e.tableData,D=e.textAlign,_=e.unstackable,U=e.verticalAlign,F=h()("ui",s,R,Object(f.a)(n,"celled"),Object(f.a)(i,"collapsing"),Object(f.a)(u,"definition"),Object(f.a)(b,"fixed"),Object(f.a)(y,"inverted"),Object(f.a)(k,"selectable"),Object(f.a)(x,"single line"),Object(f.a)(T,"sortable"),Object(f.a)(z,"stackable"),Object(f.a)(H,"striped"),Object(f.a)(L,"structured"),Object(f.a)(_,"unstackable"),Object(f.b)(a,"attached"),Object(f.b)(t,"basic"),Object(f.b)(d,"compact"),Object(f.b)(w,"padded"),Object(f.d)(D),Object(f.f)(U),Object(f.g)(o,"column"),"table",l),G=Object(g.a)(B,e),J=Object(v.a)(B,e);return O.a.isNil(c)?r.a.createElement(J,m()({},G,{className:F}),N&&r.a.createElement(P,null,S.create(N,{defaultProps:{cellAs:"th"}})),r.a.createElement(E,null,A&&p()(W,function(e,a){return S.create(A(e,a))})),j&&r.a.createElement(C,null,S.create(j))):r.a.createElement(J,m()({},G,{className:F}),c)}B.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"],B.defaultProps={as:"table"},B.propTypes={},B.Body=E,B.Cell=A,B.Footer=C,B.Header=P,B.HeaderCell=T,B.Row=S;var H=B,L=(t(164),t(165),function(e){function a(){return e.apply(this,arguments)||this}return c()(a,e),a.prototype.render=function(){return r.a.createElement(i.a,{vertical:!0,style:{padding:"5em 0"}},r.a.createElement(s.a,null,r.a.createElement(o.a,{as:"h1",textAlign:"center",style:{fontWeight:"400",fontSize:"2em"},className:"about-header"},"Reach us via any of these mediums"),r.a.createElement(H,{basic:"very",celled:!0,collapsing:!0,style:{margin:"auto"}},r.a.createElement(H.Body,null,r.a.createElement(H.Row,null,r.a.createElement(H.Cell,null,r.a.createElement(o.a,{as:"h4",color:"grey"},"Email")),r.a.createElement(H.Cell,null,r.a.createElement(o.a,{as:"h4"},r.a.createElement("a",{href:"mailto:info@alferex.com"},"info@alferex.com")))),r.a.createElement(H.Row,null,r.a.createElement(H.Cell,null,r.a.createElement(o.a,{as:"h4",color:"grey"},"Mobile")),r.a.createElement(H.Cell,null,r.a.createElement(o.a,{as:"h4"},r.a.createElement("a",{href:"tel:+918971895463"},"+91 8971895463")))))),r.a.createElement("div",{style:{marginTop:"2em"}},r.a.createElement(o.a,{as:"h2",textAlign:"center",style:{fontWeight:"400",fontSize:"1.8em"},className:"about-header"},"Or send us a post like good ol' days"),r.a.createElement(o.a,{as:"h4",color:"grey",textAlign:"center"},"Registered Address"),r.a.createElement(o.a,{as:"h4",textAlign:"center"},"#20, Shri Hari Villas, Near Adani Circle,",r.a.createElement("br",null),"SP Ring Road, Ahmedabad - 382445"),r.a.createElement(o.a,{as:"h4",color:"grey",textAlign:"center"},"Google Maps"),r.a.createElement("div",{className:"mapouter",style:{textAlign:"center"}},r.a.createElement("div",{className:"gmap_canvas"},r.a.createElement("iframe",{title:"alferex_gmaps",width:"260",height:"260",id:"gmap_canvas",src:"https://maps.google.com/maps?q=20%2C%20Shree%20Hari%20Villas%20Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"},"Loading..."))))))},a}(r.a.PureComponent));a.a=L}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-dd631ab2251b0f0a1ba6.js.map