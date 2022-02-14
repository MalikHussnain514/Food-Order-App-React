(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3CD7G",total:"Cart_total__2ycvL",actions:"Cart_actions__3M1Is","button--alt":"Cart_button--alt__TSMdo",button:"Cart_button__222Z9"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1pYJV",summary:"CartItem_summary__LEWK5",price:"CartItem_price__3x5rH",amount:"CartItem_amount__32G8-",actions:"CartItem_actions__31BYn"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3G1u4",icon:"HeaderCartButton_icon__3pbWU",badge:"HeaderCartButton_badge__3h-Cb",bump:"HeaderCartButton_bump__1yo7h"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2JLD2",description:"MealItem_description__15Bdo",price:"MealItem_price__1hoAD"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2s1gr",modal:"Modal_modal__1x3O0","slide-down":"Modal_slide-down__4Y0qx"}},,function(e,t,n){e.exports={header:"Header_header__3ZDO-","main-image":"Header_main-image__ag1J4"}},,function(e,t,n){e.exports={card:"Card_card__2efo_"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1waSH","meals-appear":"AvailableMeals_meals-appear__3kqcf"}},function(e,t,n){e.exports={form:"MealItemForm_form__3OiNO"}},function(e,t,n){e.exports={input:"Input_input__2y0gI"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__23RrQ"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/meals.2971f633.jpg",l=n(13),d=n.n(l),m=n(0),u=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(8),b=n.n(j),O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),x=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(O).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(a?b.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:b.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:b.a.badge,children:o})]})},p=function(e){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsxs)("header",{className:d.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(x,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:d.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"A table full of delicious food!"})})]})},h=n(15),_=n.n(h),f=function(e){return Object(m.jsx)("div",{className:_.a.card,children:e.children})},v=n(16),C=n.n(v),g=n(10),A=n.n(g),N=n(17),y=n.n(N),I=n(2),M=n(18),w=n.n(M),k=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:w.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(I.a)({ref:t},e.input))]})})),H=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(k,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},B=function(e){var t=Object(r.useContext)(O);"$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:A.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:A.a.description,children:e.description}),Object(m.jsx)("div",{className:A.a.price,children:e.price})]}),Object(m.jsx)("div",{children:Object(m.jsx)(H,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],S=function(){var e=D.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)})}));return Object(m.jsx)("section",{className:C.a.meals,children:Object(m.jsx)(f,{children:Object(m.jsx)("ul",{children:e})})})},F=n(19),R=n.n(F),E=function(){return Object(m.jsxs)("section",{className:R.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},T=function(){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(E,{}),Object(m.jsx)(S,{})]})},J=n(11),Y=n.n(J),z=function(e){return Object(m.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},G=function(e){return Object(m.jsx)("div",{className:Y.a.modal,children:Object(m.jsx)("div",{className:Y.a.content,children:e.children})})},P=document.getElementById("overlays"),V=function(e){return Object(m.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(m.jsx)(z,{onClose:e.onClose}),P),c.a.createPortal(Object(m.jsx)(G,{children:e.children}),P)]})},q=n(4),L=n.n(q),$=n(5),W=n.n($),Z=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:W.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:W.a.summary,children:[Object(m.jsx)("span",{className:W.a.price,children:t}),Object(m.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:W.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=function(e){var t=Object(r.useContext)(O),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},s=Object(m.jsx)("ul",{className:L.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(Z,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(m.jsxs)(V,{onClose:e.onClose,children:[s,Object(m.jsxs)("div",{className:L.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:L.a.actions,children:[Object(m.jsx)("button",{className:L.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(m.jsx)("button",{className:L.a.button,children:"Order"})]})]})},Q=n(14),U={items:[],totalAmount:0},X=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(I.a)(Object(I.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Q.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(Q.a)(e.items))[o]=m}return{items:s,totalAmount:d}}return U},ee=function(e){var t=Object(r.useReducer)(X,U),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(m.jsx)(O.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(K,{onClose:function(){a(!1)}}),Object(m.jsx)(p,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(T,{})})]})};c.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.21baea0c.chunk.js.map