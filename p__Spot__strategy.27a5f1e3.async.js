"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[35],{65496:function(Q,k,t){var E=t(98037),r=t(75271),R=t(22800),P=t(58720),W=function(w,L){return r.createElement(P.Z,(0,E.Z)((0,E.Z)({},w),{},{ref:L,icon:R.Z}))},h=r.forwardRef(W);k.Z=h},81260:function(Q,k,t){t.d(k,{Jy:function(){return s},M7:function(){return u},T9:function(){return F},UW:function(){return I},Zs:function(){return V},vb:function(){return w},y7:function(){return M}});var E=t(90228),r=t.n(E),R=t(26068),P=t.n(R),W=t(87999),h=t.n(W),Z=t(17652);function w(n,p){return L.apply(this,arguments)}function L(){return L=h()(r()().mark(function n(p,g){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,Z.request)("api/manage/spot/list",P()({method:"POST",params:P()({},p)},g||{})));case 1:case"end":return e.stop()}},n)})),L.apply(this,arguments)}function M(n,p){return H.apply(this,arguments)}function H(){return H=h()(r()().mark(function n(p,g){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,Z.request)("api/manage/spot/strategy/list",P()({method:"POST",params:P()({},p)},g||{})));case 1:case"end":return e.stop()}},n)})),H.apply(this,arguments)}function s(n,p){return D.apply(this,arguments)}function D(){return D=h()(r()().mark(function n(p,g){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,Z.request)("api/manage/spot/strategy/add",P()({data:p,method:"POST"},g||{})));case 1:case"end":return e.stop()}},n)})),D.apply(this,arguments)}function I(n,p){return b.apply(this,arguments)}function b(){return b=h()(r()().mark(function n(p,g){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,Z.request)("api/manage/spot/strategy/update",P()({data:p,method:"PUT"},g||{})));case 1:case"end":return e.stop()}},n)})),b.apply(this,arguments)}function F(n,p){return B.apply(this,arguments)}function B(){return B=h()(r()().mark(function n(p,g){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,Z.request)("api/manage/spot/strategy/delete",P()({data:p,method:"DELETE"},g||{})));case 1:case"end":return e.stop()}},n)})),B.apply(this,arguments)}function V(n,p){return o.apply(this,arguments)}function o(){return o=h()(r()().mark(function n(p,g){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,Z.request)("api/manage/spot/trade/list",P()({method:"POST",params:P()({},p)},g||{})));case 1:case"end":return e.stop()}},n)})),o.apply(this,arguments)}function u(n,p){return c.apply(this,arguments)}function c(){return c=h()(r()().mark(function n(p,g){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,Z.request)(host.api+"api/manage/spot/trade/get",P()({params:P()({},p),method:"POST"},g||{})));case 1:case"end":return e.stop()}},n)})),c.apply(this,arguments)}},79037:function(Q,k,t){t.r(k),t.d(k,{default:function(){return ve}});var E=t(90228),r=t.n(E),R=t(26068),P=t.n(R),W=t(87999),h=t.n(W),Z=t(48305),w=t.n(Z),L=t(65496),M=t(30321),H=t(50494),s=t(17652),D=t(75271),I=t(98417),b=t(71855),F=t(28388),B=t(81260),V=t(37476),o=t(5966),u=t(64317),c=t(31199),n={standardList:"standardList___vUa2A",headerInfo:"headerInfo___fN9Cm",listContent:"listContent___CbqM9",listContentItem:"listContentItem___mgEMg",extraContentSearch:"extraContentSearch___v3nYf",listCard:"listCard___bykKp",standardListForm:"standardListForm___Vor6X",formResult:"formResult___rWRlC"},p=t(81475),g=t(28858),v=t(24954),e=t(52676),G=function(i){var O=i.done,U=i.visible,K=i.onDone,a=i.current,z=i.onSubmit,$=i.children,l=(0,s.useIntl)();return U?(0,e.jsxs)(V.Y,{visible:U,title:O?null:"".concat(a.id?l.formatMessage({id:"pages.edit"}):l.formatMessage({id:"pages.new"})),className:n.standardListForm,width:800,onFinish:function(){var S=h()(r()().mark(function T(C){return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:z(C);case 1:case"end":return y.stop()}},T)}));return function(T){return S.apply(this,arguments)}}(),initialValues:a,submitter:{render:function(T,C){return O?null:C}},trigger:(0,e.jsx)(e.Fragment,{children:$}),modalProps:{onCancel:function(){return K()},destroyOnClose:!0,bodyStyle:O?{padding:"72px 0"}:{}},children:[(0,e.jsx)(o.Z,{name:"id",hidden:!0,initialValue:a.id}),(0,e.jsxs)(p.Z,{title:"\u57FA\u672C\u4FE1\u606F",bordered:!1,className:n.card,children:[(0,e.jsx)(g.Z,{gutter:16,children:(0,e.jsx)(v.Z,{lg:6,md:12,sm:24,children:(0,e.jsx)(o.Z,{name:"name",label:l.formatMessage({id:"pages.spot.strategy.name"}),width:"md",rules:[{required:!0,message:l.formatMessage({id:"pages.spot.strategy.name.required"})}],initialValue:a.name})})}),(0,e.jsxs)(g.Z,{gutter:16,children:[(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(u.Z,{name:"state",label:l.formatMessage({id:"pages.spot.strategy.state"}),width:"sm",placeholder:l.formatMessage({id:"pages.spot.strategy.state.placeholder"}),options:[{label:l.formatMessage({id:"pages.close"}),value:!1},{label:l.formatMessage({id:"pages.open"}),value:!0}],rules:[{required:!0,message:l.formatMessage({id:"pages.spot.strategy.state.required"})}],initialValue:a.state})}),(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(u.Z,{name:"handOperation",label:l.formatMessage({id:"pages.spot.strategy.handOperation"}),width:"sm",rules:[{required:!0,message:l.formatMessage({id:"pages.spot.strategy.handOperation.required"})}],options:[{label:l.formatMessage({id:"pages.close"}),value:!1},{label:l.formatMessage({id:"pages.open"}),value:!0}],initialValue:a.handOperation})})]}),(0,e.jsxs)(g.Z,{gutter:16,children:[(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(c.Z,{name:"everyTradePercent",label:"\u5EFA/\u8865\u4ED3\u6BD4\u4F8B",width:120,rules:[{required:!0}],initialValue:a.everyTradePercent,tooltip:"\u5EFA/\u8865\u4ED3\u6BD4\u4F8B\u5360\u672C\u91D1\u7684\u6BD4\u4F8B",fieldProps:{addonAfter:"%"}})}),(0,e.jsx)(v.Z,{lg:12,md:12,sm:24})]}),(0,e.jsxs)(g.Z,{gutter:16,children:[(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(c.Z,{name:"planSellPercent",label:"\u8BA1\u5212\u5E73\u4ED3\u76C8\u5229",tooltip:"\u6301\u4ED3\u4EF7\u4E0E\u73B0\u4EF7\u4E0A\u6D6E\u767E\u5206\u6BD4",width:160,rules:[{required:!0}],initialValue:a.planSellPercent,fieldProps:{addonAfter:"%"},min:0,max:.1})}),(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(c.Z,{name:"pauseMinute",label:"\u4EA4\u6613\u540E\u6682\u505C\u65F6\u957F",width:120,fieldProps:{addonAfter:"\u5206\u949F"},rules:[{required:!0}],initialValue:a.pauseMinute,tooltip:"\u5355\u4F4D\u5206\u949F\uFF0C\u5927\u4E8E\u6B64\u503C\u6267\u884C"})})]}),(0,e.jsxs)(g.Z,{gutter:16,children:[(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(c.Z,{name:"initPlanBuyPercent",label:"\u8BA1\u5212\u8865\u4ED3\u521D\u59CB\u6BD4\u4F8B",width:120,rules:[{required:!0}],initialValue:a.initPlanBuyPercent,tooltip:"-0.08~-0.03 \u521D\u4ED3\u9996\u6B21\u4E0B\u6D6E\u6BD4\u4F8B,\u968F\u9996\u6B21\u6570\u589E\u52A0\u6BD4\u4F8B\u589E\u5927",fieldProps:{addonAfter:"%"},min:-1,max:0})}),(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(c.Z,{name:"initPlanBuyDecrease",label:"\u8BA1\u5212\u8865\u4ED3\u9012\u51CF\u53C2\u6570",width:120,rules:[{required:!0}],initialValue:a.initPlanBuyDecrease,tooltip:"0.15~0.5 \u4E0B\u4E00\u6B21\u8865\u4ED3\u9012\u51CF\u53C2\u6570",fieldProps:{addonAfter:"%"}})})]})]}),(0,e.jsxs)(p.Z,{title:"\u8DDF\u8E2A\u53C2\u6570",bordered:!1,className:n.card,children:[(0,e.jsx)(g.Z,{gutter:16,children:(0,e.jsx)(v.Z,{lg:24,md:24,sm:24,children:(0,e.jsx)(o.Z,{name:"interval",label:l.formatMessage({id:"pages.spot.strategy.interval"}),width:"md",rules:[{required:!0,message:l.formatMessage({id:"pages.spot.strategy.interval.required"})}],fieldProps:{addonAfter:"MIN5/MIN10/MIN15"},initialValue:a.interval})})}),(0,e.jsxs)(g.Z,{gutter:16,children:[(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(c.Z,{name:"maxNumber",label:"\u8FFD\u9AD8\u5356\u6216\u8FFD\u4F4E\u4E70\u6B21\u6570",width:200,tooltip:"\u53C2\u8003\u503C1~10",rules:[{required:!0,message:l.formatMessage({id:"pages.spot.strategy.maxNumber.required"})}],initialValue:a.maxNumber})}),(0,e.jsx)(v.Z,{lg:12,md:12,sm:24,children:(0,e.jsx)(c.Z,{name:"records",label:"\u8DDF\u8E2A\u6700\u65B0\u8BB0\u5F55\u6761\u6570",width:100,rules:[{required:!0,message:l.formatMessage({id:"pages.spot.strategy.records.required"})}],fieldProps:{addonAfter:"\u6761"},initialValue:a.records})})]})]})]}):null},J=G,A=function(i){var O=i.done,U=i.visible,K=i.onDone,a=i.current,z=i.onSubmit,$=i.children,l=(0,s.useIntl)();return U?(0,e.jsxs)(V.Y,{visible:U,title:O?null:"".concat(a.id?l.formatMessage({id:"pages.edit"}):l.formatMessage({id:"pages.new"})),className:n.standardListForm,width:800,onFinish:function(){var S=h()(r()().mark(function T(C){return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:z(C);case 1:case"end":return y.stop()}},T)}));return function(T){return S.apply(this,arguments)}}(),initialValues:a,submitter:{render:function(T,C){return O?null:C}},trigger:(0,e.jsx)(e.Fragment,{children:$}),modalProps:{onCancel:function(){return K()},destroyOnClose:!0,bodyStyle:O?{padding:"72px 0"}:{}},children:[(0,e.jsx)(o.Z,{name:"id",hidden:!0,initialValue:a.id}),(0,e.jsx)(u.Z,{name:"trackDown",label:"\u8FFD\u8DCC\u72B6\u6001",width:"sm",options:[{label:l.formatMessage({id:"pages.close"}),value:!1},{label:l.formatMessage({id:"pages.open"}),value:!0}],rules:[{required:!0}],initialValue:a.trackDown}),(0,e.jsx)(o.Z,{name:"trackDownInterval",label:"",width:600,rules:[{required:!0}],fieldProps:{addonAfter:"MIN5/MIN10/MIN15/MIN30/HOUR1/HOUR4"},initialValue:a.trackDownInterval}),(0,e.jsx)(c.Z,{name:"trackDownPercent",label:"\u8DCC\u5E45\u89E6\u53D1(\u8D1F\u6570)",width:200,rules:[{required:!0}],min:-1,max:0,fieldProps:{addonAfter:"%"},initialValue:a.trackDownPercent}),(0,e.jsx)(c.Z,{name:"trackDownMaxNumber",label:"\u5E95\u4EF7\u8FFD\u8E2A\u8865\u4ED3\u6700\u5927\u6B21\u6570",tooltip:"\u6570\u503C\u8303\u56F41~10",width:140,rules:[{required:!0}],fieldProps:{addonAfter:"\u6B21"},initialValue:a.trackDownMaxNumber}),(0,e.jsx)(c.Z,{name:"trackDownMaxHoldPercent",label:"\u6700\u5927\u6301\u4ED3\u9650\u5236",width:140,rules:[{required:!0}],fieldProps:{addonAfter:"%"},initialValue:a.trackDownMaxHoldPercent})]}):null},pe=A,ce=function(i){var O=i.done,U=i.visible,K=i.onDone,a=i.current,z=i.onSubmit,$=i.children,l=(0,s.useIntl)();return U?(0,e.jsxs)(V.Y,{visible:U,title:O?null:"".concat(a.id?l.formatMessage({id:"pages.edit"}):l.formatMessage({id:"pages.new"})),className:n.standardListForm,width:800,onFinish:function(){var S=h()(r()().mark(function T(C){return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:z(C);case 1:case"end":return y.stop()}},T)}));return function(T){return S.apply(this,arguments)}}(),initialValues:a,submitter:{render:function(T,C){return O?null:C}},trigger:(0,e.jsx)(e.Fragment,{children:$}),modalProps:{onCancel:function(){return K()},destroyOnClose:!0,bodyStyle:O?{padding:"72px 0"}:{}},children:[(0,e.jsx)(o.Z,{name:"id",hidden:!0,initialValue:a.id}),(0,e.jsx)(u.Z,{name:"trackUp",label:"\u8FFD\u6DA8\u72B6\u6001",width:"sm",options:[{label:l.formatMessage({id:"pages.close"}),value:!1},{label:l.formatMessage({id:"pages.open"}),value:!0}],rules:[{required:!0}],initialValue:a.trackUp}),(0,e.jsx)(o.Z,{name:"trackUpInterval",label:"",width:600,rules:[{required:!0}],fieldProps:{addonAfter:"MIN5/MIN10/MIN15/MIN30/HOUR1/HOUR4"},initialValue:a.trackUpInterval}),(0,e.jsx)(c.Z,{name:"trackUpPercent",label:"\u6DA8\u5E45\u89E6\u53D1",width:200,rules:[{required:!0}],min:0,max:1,fieldProps:{addonAfter:"%"},initialValue:a.trackUpPercent}),(0,e.jsx)(c.Z,{name:"trackUpMaxNumber",label:"\u5E95\u4EF7\u8FFD\u8E2A\u8865\u4ED3\u6700\u5927\u6B21\u6570",tooltip:"\u6570\u503C\u8303\u56F41~10",width:140,rules:[{required:!0}],fieldProps:{addonAfter:"\u6B21"},initialValue:a.trackUpMaxNumber}),(0,e.jsx)(c.Z,{name:"trackUpMaxHoldPercent",label:"\u6700\u5927\u6301\u4ED3\u9650\u5236",width:140,rules:[{required:!0}],fieldProps:{addonAfter:"%"},initialValue:a.trackUpMaxHoldPercent})]}):null},me=ce,ge=function(i){var O=i.done,U=i.visible,K=i.onDone,a=i.current,z=i.onSubmit,$=i.children,l=(0,s.useIntl)();return U?(0,e.jsxs)(V.Y,{visible:U,title:O?null:"".concat(a.id?l.formatMessage({id:"pages.edit"}):l.formatMessage({id:"pages.new"})),className:n.standardListForm,width:800,onFinish:function(){var S=h()(r()().mark(function T(C){return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:z(C);case 1:case"end":return y.stop()}},T)}));return function(T){return S.apply(this,arguments)}}(),initialValues:a,submitter:{render:function(T,C){return O?null:C}},trigger:(0,e.jsx)(e.Fragment,{children:$}),modalProps:{onCancel:function(){return K()},destroyOnClose:!0,bodyStyle:O?{padding:"72px 0"}:{}},children:[(0,e.jsx)(o.Z,{name:"id",hidden:!0,initialValue:a.id}),(0,e.jsxs)(p.Z,{title:"\u9996\u5C3E\u51CF\u4ED3\u6A21\u5F0F",bordered:!1,className:n.card,children:[(0,e.jsx)(u.Z,{name:"subFristLastHold",label:"\u72B6\u6001",width:"sm",options:[{label:l.formatMessage({id:"pages.close"}),value:!1},{label:l.formatMessage({id:"pages.open"}),value:!0}],rules:[{required:!0}],initialValue:a.subFristLastHold}),(0,e.jsx)(c.Z,{name:"subFristLastHoldPercent",label:"\u9996\u4ED3+\u5C3E\u4ED3\u76C8\u5229\u8FBE",width:140,rules:[{required:!0}],fieldProps:{addonAfter:"%"},initialValue:a.subFristLastHoldPercent})]}),(0,e.jsxs)(p.Z,{title:"\u5C3E\u4ED3\u51CF\u4ED3\u6A21\u5F0F",bordered:!1,className:n.card,children:[(0,e.jsx)(u.Z,{name:"subLastHold",label:"\u72B6\u6001",width:"sm",options:[{label:l.formatMessage({id:"pages.close"}),value:!1},{label:l.formatMessage({id:"pages.open"}),value:!0}],rules:[{required:!0}],initialValue:a.subLastHold}),(0,e.jsx)(c.Z,{name:"subLastHoldPercent",label:"\u5C3E\u4ED3\u76C8\u5229\u8FBE",width:140,rules:[{required:!0}],fieldProps:{addonAfter:"%"},initialValue:a.subLastHoldPercent})]}),(0,e.jsxs)(p.Z,{title:"\u500D\u6295\u6A21\u5F0F",bordered:!1,className:n.card,children:[(0,e.jsx)(u.Z,{name:"doubleHold",label:"\u72B6\u6001",width:"sm",options:[{label:l.formatMessage({id:"pages.close"}),value:!1},{label:l.formatMessage({id:"pages.open"}),value:!0}],rules:[{required:!0}],initialValue:a.doubleHold}),(0,e.jsx)(c.Z,{name:"doubleHoldPercent",label:"\u500D\u6295\u542F\u52A8",width:140,rules:[{required:!0}],fieldProps:{addonAfter:"%"},initialValue:a.doubleHoldPercent,min:-1,max:0})]})]}):null},fe=ge,he=function(){var i=(0,D.useRef)(),O=(0,D.useState)(!1),U=w()(O,2),K=U[0],a=U[1],z=(0,D.useState)(!1),$=w()(z,2),l=$[0],S=$[1],T=(0,D.useState)(!1),C=w()(T,2),X=C[0],y=C[1],_e=(0,D.useState)(!1),le=w()(_e,2),Pe=le[0],ie=le[1],xe=(0,D.useState)(!1),oe=w()(xe,2),Me=oe[0],ee=oe[1],Ee=(0,D.useState)(),de=w()(Ee,2),ne=de[0],N=de[1],Y=(0,s.useIntl)(),se=function(){var j=h()(r()().mark(function m(_){var x,q,f,te,re;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(x=I.ZP.loading(Y.formatMessage({id:"pages.tip.loading"})),x(),d.prev=2,_.id==null){d.next=13;break}return d.next=6,(0,B.UW)(P()({},_));case 6:if(q=d.sent,f=q.success,!f){d.next=11;break}return I.ZP.success(Y.formatMessage({id:"pages.tip.success"})),d.abrupt("return",!0);case 11:d.next=20;break;case 13:return d.next=15,(0,B.Jy)(P()({},_));case 15:if(te=d.sent,re=te.success,!re){d.next=20;break}return I.ZP.success(Y.formatMessage({id:"pages.tip.success"})),d.abrupt("return",!0);case 20:return d.abrupt("return",!1);case 23:return d.prev=23,d.t0=d.catch(2),I.ZP.error(Y.formatMessage({id:"pages.tip.error"})),d.abrupt("return",!1);case 27:case"end":return d.stop()}},m,null,[[2,23]])}));return function(_){return j.apply(this,arguments)}}(),De=function(m){b.Z.confirm({title:Y.formatMessage({id:"pages.tip.title"}),content:Y.formatMessage({id:"pages.tip.content"}),okText:Y.formatMessage({id:"pages.tip.ok"}),cancelText:Y.formatMessage({id:"pages.tip.cancel"}),onOk:function(){var _=h()(r()().mark(function q(){var f,te,re;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(m){d.next=2;break}return d.abrupt("return",!0);case 2:return d.prev=2,f=I.ZP.loading(Y.formatMessage({id:"pages.tip.loading"})),d.next=6,(0,B.T9)({id:m.id});case 6:if(te=d.sent,re=te.success,!re){d.next=13;break}return f(),I.ZP.success(Y.formatMessage({id:"pages.tip.success"})),i.current&&i.current.reload(),d.abrupt("return",!0);case 13:return d.abrupt("return",!1);case 16:return d.prev=16,d.t0=d.catch(2),d.abrupt("return",!1);case 19:case"end":return d.stop()}},q,null,[[2,16]])}));function x(){return _.apply(this,arguments)}return x}()})},ue=function(){a(!1),S(!1),y(!1),ie(!1),ee(!1),N(void 0)},be={showSizeChanger:!0,showQuickJumper:!0},Fe=[{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.name"}),dataIndex:"name",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"120px"},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.state"}),dataIndex:"state",hideInSearch:!0,valueType:"text",width:"120px",valueEnum:{false:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.close"}),state:!1},true:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.open"}),state:!0}}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.handOperation"}),dataIndex:"handOperation",valueType:"text",width:"120px",hideInSearch:!0,valueEnum:{false:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.close"}),handOperation:!1},true:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.open"}),handOperation:!0}}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.interval"}),dataIndex:"interval",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md"},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.trackDown"}),dataIndex:"trackDown",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md",valueEnum:{false:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.close"}),trackDown:!1},true:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.open"}),trackDown:!0}},render:function(m,_){return(0,e.jsx)("a",{onClick:function(){N(_),y(!0)},children:m},"detail")}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.trackUp"}),dataIndex:"trackUp",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md",valueEnum:{false:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.close"}),trackUp:!1},true:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.open"}),trackUp:!0}},render:function(m,_){return(0,e.jsx)("a",{onClick:function(){N(_),ie(!0)},children:m},"detail")}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.subFristLastHold"}),dataIndex:"subFristLastHold",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md",valueEnum:{false:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.close"}),subFristLastHold:!1},true:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.open"}),subFristLastHold:!0}},render:function(m,_){return(0,e.jsx)("a",{onClick:function(){N(_),ee(!0)},children:m},"detail")}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.subLastHold"}),dataIndex:"subLastHold",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md",valueEnum:{false:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.close"}),subLastHold:!1},true:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.open"}),subLastHold:!0}},render:function(m,_){return(0,e.jsx)("a",{onClick:function(){N(_),ee(!0)},children:m},"detail")}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.spot.strategy.doubleHold"}),dataIndex:"doubleHold",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md",valueEnum:{false:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.close"}),doubleHold:!1},true:{text:(0,e.jsx)(s.FormattedMessage,{id:"pages.open"}),doubleHold:!0}},render:function(m,_){return(0,e.jsx)("a",{onClick:function(){N(_),ee(!0)},children:m},"detail")}},{title:(0,e.jsx)(s.FormattedMessage,{id:"pages.option"}),dataIndex:"option",valueType:"option",hideInDescriptions:!0,render:function(m,_){return[(0,e.jsx)("a",{onClick:function(){S(!0),N(_)},children:(0,e.jsx)(s.FormattedMessage,{id:"pages.edit"})},"edit"),(0,e.jsx)("a",{onClick:function(){De(_)},children:(0,e.jsx)(s.FormattedMessage,{id:"pages.delete"})},"delete")]}}];return(0,e.jsxs)(H._z,{children:[(0,e.jsx)(M.ZP,{actionRef:i,pagination:be,search:!1,rowKey:function(m){return m.id},toolBarRender:function(){return[(0,e.jsxs)(F.ZP,{type:"primary",onClick:function(){S(!0)},children:[(0,e.jsx)(L.Z,{})," ",(0,e.jsx)(s.FormattedMessage,{id:"pages.new"})]},"primary")]},request:B.y7,columns:Fe}),(0,e.jsx)(J,{done:K,visible:l,current:ne||{},onDone:ue,onSubmit:function(){var j=h()(r()().mark(function m(_){var x;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,se(_);case 2:x=f.sent,x&&(S(!1),N(void 0),i.current&&i.current.reload());case 4:case"end":return f.stop()}},m)}));return function(m){return j.apply(this,arguments)}}()}),(0,e.jsx)(pe,{done:K,visible:X,current:ne||{},onDone:ue,onSubmit:function(){var j=h()(r()().mark(function m(_){var x;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,se(_);case 2:x=f.sent,x&&(y(!1),N(void 0),i.current&&i.current.reload());case 4:case"end":return f.stop()}},m)}));return function(m){return j.apply(this,arguments)}}()}),(0,e.jsx)(me,{done:K,visible:Pe,current:ne||{},onDone:ue,onSubmit:function(){var j=h()(r()().mark(function m(_){var x;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,se(_);case 2:x=f.sent,x&&(ie(!1),N(void 0),i.current&&i.current.reload());case 4:case"end":return f.stop()}},m)}));return function(m){return j.apply(this,arguments)}}()}),(0,e.jsx)(fe,{done:K,visible:Me,current:ne||{},onDone:ue,onSubmit:function(){var j=h()(r()().mark(function m(_){var x;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,se(_);case 2:x=f.sent,x&&(ee(!1),N(void 0),i.current&&i.current.reload());case 4:case"end":return f.stop()}},m)}));return function(m){return j.apply(this,arguments)}}()})]})},ve=he},31199:function(Q,k,t){var E=t(1413),r=t(91),R=t(75271),P=t(71165),W=t(52676),h=["fieldProps","min","proFieldProps","max"],Z=function(M,H){var s=M.fieldProps,D=M.min,I=M.proFieldProps,b=M.max,F=(0,r.Z)(M,h);return(0,W.jsx)(P.Z,(0,E.Z)({valueType:"digit",fieldProps:(0,E.Z)({min:D,max:b},s),ref:H,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:I},F))},w=R.forwardRef(Z);k.Z=w},64317:function(Q,k,t){var E=t(1413),r=t(91),R=t(22270),P=t(75271),W=t(66758),h=t(71165),Z=t(52676),w=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],L=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],M=function(F,B){var V=F.fieldProps,o=F.children,u=F.params,c=F.proFieldProps,n=F.mode,p=F.valueEnum,g=F.request,v=F.showSearch,e=F.options,G=(0,r.Z)(F,w),J=(0,P.useContext)(W.Z);return(0,Z.jsx)(h.Z,(0,E.Z)((0,E.Z)({valueEnum:(0,R.h)(p),request:g,params:u,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,E.Z)({options:e,mode:n,showSearch:v,getPopupContainer:J.getPopupContainer},V),ref:B,proFieldProps:c},G),{},{children:o}))},H=P.forwardRef(function(b,F){var B=b.fieldProps,V=b.children,o=b.params,u=b.proFieldProps,c=b.mode,n=b.valueEnum,p=b.request,g=b.options,v=(0,r.Z)(b,L),e=(0,E.Z)({options:g,mode:c||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},B),G=(0,P.useContext)(W.Z);return(0,Z.jsx)(h.Z,(0,E.Z)((0,E.Z)({valueEnum:(0,R.h)(n),request:p,params:o,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,E.Z)({getPopupContainer:G.getPopupContainer},e),ref:F,proFieldProps:u},v),{},{children:V}))}),s=P.forwardRef(M),D=H,I=s;I.SearchSelect=D,I.displayName="ProFormComponent",k.Z=I},5966:function(Q,k,t){var E=t(97685),r=t(1413),R=t(91),P=t(18542),W=t(76371),h=t(58245),Z=t(71770),w=t(75271),L=t(71165),M=t(52676),H=["fieldProps","proFieldProps"],s=["fieldProps","proFieldProps"],D="text",I=function(o){var u=o.fieldProps,c=o.proFieldProps,n=(0,R.Z)(o,H);return(0,M.jsx)(L.Z,(0,r.Z)({valueType:D,fieldProps:u,filedConfig:{valueType:D},proFieldProps:c},n))},b=function(o){var u=(0,P.Z)(o.open||!1,{value:o.open,onChange:o.onOpenChange}),c=(0,E.Z)(u,2),n=c[0],p=c[1];return(0,M.jsx)(W.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(v){var e,G=v.getFieldValue(o.name||[]);return(0,M.jsx)(h.Z,(0,r.Z)((0,r.Z)({getPopupContainer:function(A){return A&&A.parentNode?A.parentNode:A},onOpenChange:function(A){return p(A)},content:(0,M.jsxs)("div",{style:{padding:"4px 0"},children:[(e=o.statusRender)===null||e===void 0?void 0:e.call(o,G),o.strengthText?(0,M.jsx)("div",{style:{marginTop:10},children:(0,M.jsx)("span",{children:o.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},o.popoverProps),{},{open:n,children:o.children}))}})},F=function(o){var u=o.fieldProps,c=o.proFieldProps,n=(0,R.Z)(o,s),p=(0,w.useState)(!1),g=(0,E.Z)(p,2),v=g[0],e=g[1];return u!=null&&u.statusRender&&n.name?(0,M.jsx)(b,{name:n.name,statusRender:u==null?void 0:u.statusRender,popoverProps:u==null?void 0:u.popoverProps,strengthText:u==null?void 0:u.strengthText,open:v,onOpenChange:e,children:(0,M.jsx)("div",{children:(0,M.jsx)(L.Z,(0,r.Z)({valueType:"password",fieldProps:(0,r.Z)((0,r.Z)({},(0,Z.Z)(u,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(J){var A;u==null||(A=u.onBlur)===null||A===void 0||A.call(u,J),e(!1)},onClick:function(J){var A;u==null||(A=u.onClick)===null||A===void 0||A.call(u,J),e(!0)}}),proFieldProps:c,filedConfig:{valueType:D}},n))})}):(0,M.jsx)(L.Z,(0,r.Z)({valueType:"password",fieldProps:u,proFieldProps:c,filedConfig:{valueType:D}},n))},B=I;B.Password=F,B.displayName="ProFormComponent",k.Z=B}}]);