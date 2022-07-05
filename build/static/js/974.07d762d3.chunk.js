"use strict";(self.webpackChunkgarn_enterprise=self.webpackChunkgarn_enterprise||[]).push([[974],{87534:function(e,a,l){l.d(a,{k:function(){return s}});var s=function(e){var a=new Date(0).setUTCSeconds(e);return((a=new Date(a)).getDate()<=9?"0"+a.getDate():a.getDate())+"-"+(a.getMonth()<=9?"0"+(a.getMonth()+1):a.getMonth()+1)+"-"+a.getFullYear()}},22571:function(e,a,l){l.d(a,{Z:function(){return i}});var s=l(43144),d=l(15671),i=(0,s.Z)((function e(){(0,d.Z)(this,e)}));i.BASE_URL="https://staging.admin.garnenterprise.com/",i.END_POINT={LOGIN:"api/VnLoginApi",GET_CATEGORIES:"api/vendor_categories",GET_CAT_PRODUCTS:"api/GnProductsApi/",GET_WHOLESALERS:"api/vendor_vendors",GET_WHOLESALERS_PRODUCTS:"api/vendor_products",GET_FEATURES:"api/vendor_features",CART:"api/cart/",STOCK_REQUEST:"api/stock_requests/",BACKORDER:"api/backorder/"}},17265:function(e,a,l){l.d(a,{Yu:function(){return c},qC:function(){return t}});var s=l(74569),d=l.n(s),i=l(22571),n=l(90746),c=(l(19778),function(e,a){var l;return a.params.user_id=null===(l=(0,n.$)())||void 0===l?void 0:l.user_id,console.log(a),d().get(i.Z.BASE_URL+e.toString(),{params:a.params,auth:{username:"wholesaler_app@ecarter.co",password:"09i4u73157N5Jnl3f6C6t2XAKa5qFO31"}},{headers:{"Content-Type":"application/json"}}).then((function(e){return 401===e.status&&localStorage.removeItem("jwt"),console.log(e.data),e.data})).catch((function(e){return console.log(e),401===e.response.status&&localStorage.removeItem("jwt"),e}))}),t=function(e,a){return d().post(i.Z.BASE_URL+e.toString(),a,{auth:{username:"wholesaler_app@ecarter.co",password:"09i4u73157N5Jnl3f6C6t2XAKa5qFO31"}},{headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e.data),e.data})).catch((function(e){return console.log(e.response),e}))}},4974:function(e,a,l){l.r(a),l.d(a,{default:function(){return m}});var s=l(70885),d=l(72791),i=l(78983),n=l(20501),c=l(92936),t=l(17265),r=l(22571),o=l(87534),u=l(80184);function m(){var e=(0,n.lr)(),a=(0,s.Z)(e,2),l=a[0],m=(a[1],l.get("id"));(0,d.useEffect)((function(){j()}),[m]);var h=(0,d.useState)([]),p=(0,s.Z)(h,2),v=p[0],x=p[1],j=function(){(0,t.Yu)(r.Z.END_POINT.BACKORDER+"/"+m,{params:{}}).then((function(e){console.log(e),x(e)})).catch((function(e){console.log(e)}))};return(0,u.jsxs)("div",{children:[(0,u.jsx)(i.xH,{className:"my-2",children:(0,u.jsx)(i.sl,{className:"p-2",children:(0,u.jsx)("div",{className:"row text-uppercase paragraph3",children:(0,u.jsxs)("div",{className:"col-8 row",children:[(0,u.jsxs)("div",{className:"col",children:["ORDER NO.",(0,u.jsx)("div",{className:"paragraph2 text_bold text-black",children:null===v||void 0===v?void 0:v.backorder_id})]}),(0,u.jsxs)("div",{className:"col",children:["REQUESTED DATE",(0,u.jsx)("div",{className:"paragraph2 text_bold text-black",children:(null===v||void 0===v?void 0:v.date)&&(0,o.k)(null===v||void 0===v?void 0:v.date)})]}),(0,u.jsxs)("div",{className:"col",children:["PICK UP DATE",(0,u.jsx)("div",{className:"paragraph2 text_bold text-black",children:(null===v||void 0===v?void 0:v.pickup_date)&&(0,o.k)(null===v||void 0===v?void 0:v.pickup_date)})]})]})})})}),(0,u.jsxs)("div",{className:"row mt-4",children:[(0,u.jsx)("div",{className:"col-md-5 col-12",children:(0,u.jsx)("p",{className:"text_medium",children:"PRODUCTS"})}),(0,u.jsx)("div",{className:"col-md-7 col-12",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-md-2",children:(0,u.jsx)("p",{className:"text_medium",children:"WEIGHT"})}),(0,u.jsx)("div",{className:"col-md-2",children:(0,u.jsx)("p",{className:"text_medium",children:"SIZE"})}),(0,u.jsx)("div",{className:"col-md-2",children:(0,u.jsx)("p",{className:"text_medium",children:"QUANTITY"})}),(0,u.jsx)("div",{className:"col-md-3",children:(0,u.jsx)("p",{className:"text_medium",children:"SYSTEM WEIGHT"})}),(0,u.jsx)("div",{className:"col-md-3",children:(0,u.jsx)("p",{className:"text_medium",children:"ACTUAL WEIGHT"})})]})})]}),(0,u.jsx)(i.xH,{className:"",children:(0,u.jsx)(i.sl,{className:"p-0",children:(null===v||void 0===v?void 0:v.product_data)&&Object.keys(null===v||void 0===v?void 0:v.product_data).map((function(e,a){var l,s,d,n,c,t;return(0,u.jsxs)(i.rb,{className:"mb-2 p-2",children:[(0,u.jsx)(i.b7,{md:5,children:(0,u.jsxs)(i.rb,{className:"",children:[(0,u.jsx)(i.b7,{md:3,children:(0,u.jsx)("div",{className:"stock_bg rounded p-1",children:(0,u.jsx)("img",{src:null===v||void 0===v||null===(l=v.product_data[e])||void 0===l||null===(s=l.image_pairs)||void 0===s||null===(d=s.detailed)||void 0===d?void 0:d.https_image_path,alt:"",className:"w-50  m-auto d-block"})})}),(0,u.jsx)(i.b7,{md:9,children:(0,u.jsx)("p",{className:"",children:null===v||void 0===v||null===(n=v.product_data[e])||void 0===n?void 0:n.product})})]})}),(0,u.jsx)(i.b7,{md:7,children:(0,u.jsxs)(i.rb,{children:[(0,u.jsx)(i.b7,{md:2,children:(0,u.jsx)("p",{className:"heading6 text_semibold"})}),(0,u.jsx)(i.b7,{md:2,children:(0,u.jsx)("p",{className:"heading6 text_semibold"})}),(0,u.jsx)(i.b7,{md:2,children:(0,u.jsx)("p",{className:"heading6 text_semibold",children:null===v||void 0===v||null===(c=v.product_data[e])||void 0===c?void 0:c.amount})}),(0,u.jsx)(i.b7,{md:3,children:(0,u.jsx)("p",{className:"heading6 text_semibold",children:null===v||void 0===v?void 0:v.total_system_weight})}),(0,u.jsx)(i.b7,{md:3,children:(0,u.jsx)("p",{className:"heading6 text_semibold ",children:null===v||void 0===v||null===(t=v.product_data[e])||void 0===t?void 0:t.actual_weight})})]})})]},a)}))})}),null!==v&&void 0!==v&&v.backorder&&Object.keys(null===v||void 0===v?void 0:v.backorder).length?Object.keys(null===v||void 0===v?void 0:v.backorder).map((function(e,a){var l,s,d,n,t,r,m,h;return(0,u.jsx)(i.xH,{className:"my-2",children:(0,u.jsx)(i.sl,{className:"p-2",children:(0,u.jsxs)("div",{className:"row text-uppercase paragraph3",children:[(0,u.jsxs)("div",{className:"col-8 row",children:[(0,u.jsxs)("div",{className:"col",children:["WHOLESALER NAME&PHONE",(0,u.jsx)("div",{className:"paragraph2 text_bold text-black",children:null===v||void 0===v||null===(l=v.backorder[e])||void 0===l||null===(s=l.user_data)||void 0===s?void 0:s.company}),(0,u.jsxs)("div",{className:"paragraph2 text_bold text-black",children:[" ",null===v||void 0===v||null===(d=v.backorder[e])||void 0===d||null===(n=d.user_data)||void 0===n?void 0:n.phone]})]}),(0,u.jsxs)("div",{className:"col",children:["ADDRESS",(0,u.jsxs)("div",{className:"paragraph2 text_bold text-black",children:[" ",null===v||void 0===v||null===(t=v.backorder[e])||void 0===t||null===(r=t.user_data)||void 0===r?void 0:r.address]})]}),(0,u.jsxs)("div",{className:"col",children:["PURCHASING DATE",(0,u.jsxs)("div",{className:"paragraph2 text_bold text-black",children:[" ",(null===v||void 0===v||null===(m=v.backorder[e])||void 0===m?void 0:m.date)&&(0,o.k)(null===v||void 0===v||null===(h=v.backorder[e])||void 0===h?void 0:h.date)]})]})]}),(0,u.jsx)("div",{className:"col-3 offset-1 p-0",children:(0,u.jsxs)(c.Z.Select,{"aria-label":"Default  select example",className:"qr_button p-2",children:[(0,u.jsx)("option",{children:" Processing"}),(0,u.jsx)("option",{value:"Pending",children:"Pending"}),(0,u.jsx)("option",{value:"On Client",children:"On Client"}),(0,u.jsx)("option",{value:"Confirmed",children:"Confirmed"}),(0,u.jsx)("option",{value:"Ready to Dispatch",children:"Ready to Dispatch"})]})})]})})},a)})):null]})}}}]);
//# sourceMappingURL=974.07d762d3.chunk.js.map