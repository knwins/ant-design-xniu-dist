"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[295],{88881:function(Oe,ae,s){s.d(ae,{Z:function(){return fe}});var a=s(75271),le=s(82187),Z=s.n(le),G=s(40493),ee=s(53363),se=s(35047),H=s(88356);function ie(u){let m;const g=C=>()=>{m=null,u.apply(void 0,(0,se.Z)(C))},S=function(){if(m==null){for(var C=arguments.length,E=new Array(C),R=0;R<C;R++)E[R]=arguments[R];m=(0,H.Z)(g(E))}};return S.cancel=()=>{H.Z.cancel(m),m=null},S}var te=ie,re=s(21342),K=s(97951);const ce=u=>{const{componentCls:m}=u;return{[m]:{position:"fixed",zIndex:u.zIndexPopup}}},ue=u=>({zIndexPopup:u.zIndexBase+10});var ne=(0,K.I$)("Affix",ce,ue);function D(u){return u!==window?u.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function U(u,m,g){if(g!==void 0&&Math.round(m.top)>Math.round(u.top)-g)return g+m.top}function W(u,m,g){if(g!==void 0&&Math.round(m.bottom)<Math.round(u.bottom)+g){const S=window.innerHeight-m.bottom;return g+S}}const Q=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function de(){return typeof window!="undefined"?window:null}const J=0,Y=1;var fe=a.forwardRef((u,m)=>{var g;const{style:S,offsetTop:C,offsetBottom:E,prefixCls:R,className:me,rootClassName:k,children:pe,target:z,onChange:e}=u,{getPrefixCls:r,getTargetContainer:o}=a.useContext(re.E_),t=r("affix",R),[n,p]=a.useState(!1),[c,v]=a.useState(),[N,X]=a.useState(),j=a.useRef(J),I=a.useRef(null),O=a.useRef(null),b=a.useRef(null),y=a.useRef(null),x=a.useRef(null),d=(g=z!=null?z:o)!==null&&g!==void 0?g:de,T=E===void 0&&C===void 0?0:C,q=()=>{if(j.current!==Y||!y.current||!b.current||!d)return;const f=d();if(f){const i={status:J},l=D(b.current);if(l.top===0&&l.left===0&&l.width===0&&l.height===0)return;const F=D(f),L=U(l,F,T),oe=W(l,F,E);L!==void 0?(i.affixStyle={position:"fixed",top:L,width:l.width,height:l.height},i.placeholderStyle={width:l.width,height:l.height}):oe!==void 0&&(i.affixStyle={position:"fixed",bottom:oe,width:l.width,height:l.height},i.placeholderStyle={width:l.width,height:l.height}),i.lastAffix=!!i.affixStyle,n!==i.lastAffix&&(e==null||e(i.lastAffix)),j.current=i.status,v(i.affixStyle),X(i.placeholderStyle),p(i.lastAffix)}},B=()=>{var f;j.current=Y,q()},h=te(()=>{B()}),w=te(()=>{if(d&&c){const f=d();if(f&&b.current){const i=D(f),l=D(b.current),F=U(l,i,T),L=W(l,i,E);if(F!==void 0&&c.top===F||L!==void 0&&c.bottom===L)return}}B()}),A=()=>{const f=d==null?void 0:d();f&&(Q.forEach(i=>{var l;O.current&&((l=I.current)===null||l===void 0||l.removeEventListener(i,O.current)),f==null||f.addEventListener(i,w)}),I.current=f,O.current=w)},ge=()=>{x.current&&(clearTimeout(x.current),x.current=null);const f=d==null?void 0:d();Q.forEach(i=>{var l;f==null||f.removeEventListener(i,w),O.current&&((l=I.current)===null||l===void 0||l.removeEventListener(i,O.current))}),h.cancel(),w.cancel()};a.useImperativeHandle(m,()=>({updatePosition:h})),a.useEffect(()=>(x.current=setTimeout(A),()=>ge()),[]),a.useEffect(()=>{A()},[z,c]),a.useEffect(()=>{h()},[z,C,E]);const[$,M,P]=ne(t),V=Z()(k,M,t,P),ve=Z()({[V]:c});let _=(0,ee.Z)(u,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return $(a.createElement(G.default,{onResize:h},a.createElement("div",Object.assign({style:S,className:me,ref:b},_),c&&a.createElement("div",{style:N,"aria-hidden":"true"}),a.createElement("div",{className:ve,ref:y,style:c},a.createElement(G.default,{onResize:h},pe)))))})},25351:function(Oe,ae,s){s.d(ae,{Z:function(){return z}});var a=s(75271),le=s(82187),Z=s.n(le),G=s(11986),ee=s(39894),se=s(15771),H=s(21342),ie=s(77855),te=s(87247);const re=e=>{let{children:r}=e;const{getPrefixCls:o}=a.useContext(H.E_),t=o("breadcrumb");return a.createElement("li",{className:`${t}-separator`,"aria-hidden":"true"},r===""?r:r||"/")};re.__ANT_BREADCRUMB_SEPARATOR=!0;var K=re,ce=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};function ue(e,r){if(e.title===void 0||e.title===null)return null;const o=Object.keys(r).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${o})`,"g"),(t,n)=>r[n]||t)}function ne(e,r,o,t){if(o==null)return null;const{className:n,onClick:p}=r,c=ce(r,["className","onClick"]),v=Object.assign(Object.assign({},(0,ee.Z)(c,{data:!0,aria:!0})),{onClick:p});return t!==void 0?a.createElement("a",Object.assign({},v,{className:Z()(`${e}-link`,n),href:t}),o):a.createElement("span",Object.assign({},v,{className:Z()(`${e}-link`,n)}),o)}function D(e,r){return(t,n,p,c,v)=>{if(r)return r(t,n,p,c);const N=ue(t,n);return ne(e,t,N,v)}}var U=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const W=e=>{const{prefixCls:r,separator:o="/",children:t,menu:n,overlay:p,dropdownProps:c,href:v}=e,X=(j=>{if(n||p){const I=Object.assign({},c);if(n){const O=n||{},{items:b}=O,y=U(O,["items"]);I.menu=Object.assign(Object.assign({},y),{items:b==null?void 0:b.map((x,d)=>{var{key:T,title:q,label:B,path:h}=x,w=U(x,["key","title","label","path"]);let A=B!=null?B:q;return h&&(A=a.createElement("a",{href:`${v}${h}`},A)),Object.assign(Object.assign({},w),{key:T!=null?T:d,label:A})})})}else p&&(I.overlay=p);return a.createElement(te.Z,Object.assign({placement:"bottom"},I),a.createElement("span",{className:`${r}-overlay-link`},j,a.createElement(ie.Z,null)))}return j})(t);return X!=null?a.createElement(a.Fragment,null,a.createElement("li",null,X),o&&a.createElement(K,null,o)):null},Q=e=>{const{prefixCls:r,children:o,href:t}=e,n=U(e,["prefixCls","children","href"]),{getPrefixCls:p}=a.useContext(H.E_),c=p("breadcrumb",r);return a.createElement(W,Object.assign({},n,{prefixCls:c}),ne(c,n,o,t))};Q.__ANT_BREADCRUMB_ITEM=!0;var de=Q,J=s(14342),Y=s(51087),xe=s(97951),fe=s(83509);const u=e=>{const{componentCls:r,iconCls:o,calc:t}=e;return{[r]:Object.assign(Object.assign({},(0,Y.Wf)(e)),{color:e.itemColor,fontSize:e.fontSize,[o]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${(0,J.unit)(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:t(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,Y.Qy)(e)),"li:last-child":{color:e.lastItemColor},[`${r}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${r}-link`]:{[`
          > ${o} + span,
          > ${o} + a
        `]:{marginInlineStart:e.marginXXS}},[`${r}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${(0,J.unit)(e.paddingXXS)}`,marginInline:t(e.marginXXS).mul(-1).equal(),[`> ${o}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},m=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS});var g=(0,xe.I$)("Breadcrumb",e=>{const r=(0,fe.mergeToken)(e,{});return u(r)},m),S=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};function C(e){const{breadcrumbName:r,children:o}=e,t=S(e,["breadcrumbName","children"]),n=Object.assign({title:r},t);return o&&(n.menu={items:o.map(p=>{var{breadcrumbName:c}=p,v=S(p,["breadcrumbName"]);return Object.assign(Object.assign({},v),{title:c})})}),n}function E(e,r){return(0,a.useMemo)(()=>e||(r?r.map(C):null),[e,r])}var R=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const me=(e,r)=>{if(r===void 0)return r;let o=(r||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{o=o.replace(`:${t}`,e[t])}),o},k=e=>{const{prefixCls:r,separator:o="/",style:t,className:n,rootClassName:p,routes:c,items:v,children:N,itemRender:X,params:j={}}=e,I=R(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:O,direction:b,breadcrumb:y}=a.useContext(H.E_);let x;const d=O("breadcrumb",r),[T,q,B]=g(d),h=E(v,c),w=D(d,X);if(h&&h.length>0){const $=[],M=v||c;x=h.map((P,V)=>{const{path:ve,key:_,type:f,menu:i,overlay:l,onClick:F,className:L,separator:oe,dropdownProps:Se}=P,he=me(j,ve);he!==void 0&&$.push(he);const Ce=_!=null?_:V;if(f==="separator")return a.createElement(K,{key:Ce},oe);const be={},Ee=V===h.length-1;i?be.menu=i:l&&(be.overlay=l);let{href:ye}=P;return $.length&&he!==void 0&&(ye=`#/${$.join("/")}`),a.createElement(W,Object.assign({key:Ce},be,(0,ee.Z)(P,{data:!0,aria:!0}),{className:L,dropdownProps:Se,href:ye,separator:Ee?"":o,onClick:F,prefixCls:d}),w(P,j,M,$,ye))})}else if(N){const $=(0,G.Z)(N).length;x=(0,G.Z)(N).map((M,P)=>{if(!M)return M;const V=P===$-1;return(0,se.Tm)(M,{separator:V?"":o,key:P})})}const A=Z()(d,y==null?void 0:y.className,{[`${d}-rtl`]:b==="rtl"},n,p,q,B),ge=Object.assign(Object.assign({},y==null?void 0:y.style),t);return T(a.createElement("nav",Object.assign({className:A,style:ge},I),a.createElement("ol",null,x)))};k.Item=de,k.Separator=K;var pe=k,z=pe}}]);