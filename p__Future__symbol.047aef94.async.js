"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[494],{92930:function(A,F,i){i.d(F,{Ai:function(){return w},KN:function(){return C},PH:function(){return j},PM:function(){return K},TD:function(){return U},UM:function(){return R},Wq:function(){return o},fx:function(){return h},oy:function(){return P},pY:function(){return n}});var O=i(90228),u=i.n(O),b=i(26068),d=i.n(b),E=i(87999),a=i.n(E),l=i(25519);function h(t,r){return p.apply(this,arguments)}function p(){return p=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/list",d()({method:"POST",params:d()({},r)},s||{})));case 1:case"end":return e.stop()}},t)})),p.apply(this,arguments)}function n(t,r){return S.apply(this,arguments)}function S(){return S=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/get",d()({params:d()({},r),method:"POST"},s||{})));case 1:case"end":return e.stop()}},t)})),S.apply(this,arguments)}function K(t,r){return f.apply(this,arguments)}function f(){return f=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/strategy/list",d()({method:"POST",params:d()({},r)},s||{})));case 1:case"end":return e.stop()}},t)})),f.apply(this,arguments)}function w(t,r){return g.apply(this,arguments)}function g(){return g=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/strategy/add",d()({data:r,method:"POST"},s||{})));case 1:case"end":return e.stop()}},t)})),g.apply(this,arguments)}function C(t,r){return x.apply(this,arguments)}function x(){return x=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/strategy/update",d()({data:r,method:"PUT"},s||{})));case 1:case"end":return e.stop()}},t)})),x.apply(this,arguments)}function j(t,r){return v.apply(this,arguments)}function v(){return v=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/strategy/delete",d()({data:r,method:"DELETE"},s||{})));case 1:case"end":return e.stop()}},t)})),v.apply(this,arguments)}function o(t,r){return y.apply(this,arguments)}function y(){return y=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/trade/list",d()({method:"POST",params:d()({},r)},s||{})));case 1:case"end":return e.stop()}},t)})),y.apply(this,arguments)}function R(t,r){return I.apply(this,arguments)}function I(){return I=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/trade/get",d()({params:d()({},r),method:"POST"},s||{})));case 1:case"end":return e.stop()}},t)})),I.apply(this,arguments)}function U(t,r){return T.apply(this,arguments)}function T(){return T=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/side/order/list",d()({method:"POST",params:d()({},r)},s||{})));case 1:case"end":return e.stop()}},t)})),T.apply(this,arguments)}function P(t,r){return M.apply(this,arguments)}function M(){return M=a()(u()().mark(function t(r,s){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("api/manage/future/side/order/get",d()({params:d()({},r),method:"POST"},s||{})));case 1:case"end":return e.stop()}},t)})),M.apply(this,arguments)}},53785:function(A,F,i){i.r(F);var O=i(48305),u=i.n(O),b=i(98097),d=i(50494),E=i(16894),a=i(25519),l=i(69390),h=i(75271),p=i(92930),n=i(52676),S=function(){var f=(0,h.useRef)(),w=(0,h.useState)(!1),g=u()(w,2),C=g[0],x=g[1],j=(0,h.useState)(void 0),v=u()(j,2),o=v[0],y=v[1],R=(0,h.useState)(void 0),I=u()(R,2),U=I[0],T=I[1],P=(0,a.useIntl)(),M={showSizeChanger:!0,showQuickJumper:!0},t={showSizeChanger:!0,showQuickJumper:!0,pageSize:5},r=[{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.updateTime"}),dataIndex:"updateTime",hideInSearch:!0,valueType:"date",width:"120px",hideInTable:!0},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.bill.username.search"}),dataIndex:"username",hideInForm:!0,hideInDescriptions:!0,hideInTable:!0,valueType:"text"},{title:"id",dataIndex:"id",valueType:"text",hideInSearch:!1,hideInForm:!0,width:"60px"},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.symbol"}),dataIndex:"symbol",valueType:"text",hideInSearch:!1,hideInForm:!0,width:"120px"},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.username"}),dataIndex:["user","name"],hideInSearch:!0,valueType:"text",copyable:!0,render:function(e,D){return(0,n.jsx)("a",{onClick:function(){var c,L,B={userId:D.user.id};T(B),(c=f.current)===null||c===void 0||(L=c.reloadAndRest)===null||L===void 0||L.call(c)},children:e})}},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.leverage"}),dataIndex:"leverage",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md"},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.capital"}),dataIndex:"capital",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md",hideInTable:!0},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.balance"}),dataIndex:"balance",valueType:"text",hideInSearch:!0,hideInForm:!0,hideInTable:!0,width:"md"},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.frequency"}),dataIndex:"frequency",valueType:"text",hideInSearch:!0,hideInForm:!0,hideInTable:!0,width:"md"},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.state"}),dataIndex:"state",hideInSearch:!0,valueType:"text",width:"120px"},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.runEnvironment"}),dataIndex:"runEnvironment",valueType:"text",width:"120px",valueEnum:{TEST:{text:"\u4F53\u9A8C",runEnvironment:"TEST"},PRO:{text:"\u6B63\u5F0F",runEnvironment:"PRO"}}},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.coin.profitSum"}),dataIndex:"profitSum",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md"},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.option"}),dataIndex:"option",valueType:"option",hideInDescriptions:!0,render:function(e,D){return[(0,n.jsx)("a",{onClick:function(c){y(D),x(!0)},children:(0,n.jsx)(a.FormattedMessage,{id:"pages.detail"})},"detail")]}}],s=[{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.update.time"}),dataIndex:"updateTime",hideInSearch:!0,valueType:"dateTime",width:"160px"},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.side.order.state"}),dataIndex:"state",valueType:"text",hideInSearch:!1,hideInForm:!0},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.side.order.orderType"}),dataIndex:"orderType",valueType:"text",hideInSearch:!1,hideInForm:!0},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.side.order.moneyTotal"}),dataIndex:"moneyTotal",valueType:"text",hideInSearch:!1,hideInForm:!0},{title:(0,n.jsx)(a.FormattedMessage,{id:"pages.future.side.order.profit"}),dataIndex:"profit",valueType:"text",hideInSearch:!1,hideInForm:!0}];return(0,n.jsxs)(d._z,{children:[(0,n.jsx)(E.ZP,{actionRef:f,rowKey:function(e){return e.id},search:{labelWidth:80},toolBarRender:function(){return[]},pagination:M,params:U,request:p.fx,columns:r,onChange:function(e,D,m){if(m){m.order=m.order==="descend"?"DESC":"ASC";var c={sorter:m.order,filter:m.field};T(c)}}}),(0,n.jsxs)(l.Z,{width:600,open:C,onClose:function(){y(void 0),x(!1)},closable:!1,children:[(o==null?void 0:o.id)&&(0,n.jsx)(b.ZP,{column:1,title:o==null?void 0:o.name,request:p.pY,params:{id:o==null?void 0:o.id},columns:r}),o?(0,n.jsx)(E.ZP,{headerTitle:P.formatMessage({id:"pages.future.side.order.long.title"}),search:!1,pagination:t,options:!1,params:{futureExtId:o==null?void 0:o.longFutureSideId},rowKey:function(e){return e.id},request:p.TD,columns:s}):"",o?(0,n.jsx)(E.ZP,{headerTitle:P.formatMessage({id:"pages.future.side.order.short.title"}),search:!1,pagination:t,options:!1,params:{futureExtId:o==null?void 0:o.shortFutureSideId},rowKey:function(e){return e.id},request:p.TD,columns:s}):""]})]})};F.default=S}}]);
