import{_ as k,o as i,c,d as o,F as f,f as W,t as b,p as P,i as C,W as N,b as g,r as l,h as d,e as u,w as x,g as y}from"./main-5f9dc003.js";const G={props:{premiumWorkshops:Array,standardWorkshops:Array},methods:{selectWorkshop(e){this.$emit("workshopSelected",e)}}},v=e=>(P("data-v-97724b87"),e=e(),C(),e),S={class:"content"},U=v(()=>o("thead",null,[o("tr",null,[o("th",null,"Premium Workshops")])],-1)),D=["onClick"],V=v(()=>o("thead",null,[o("tr",null,[o("th",null,"Standard Workshops")])],-1)),B=["onClick"];function $(e,s,n,p,t,r){return i(),c("div",S,[o("table",null,[U,o("tbody",null,[(i(!0),c(f,null,W(n.premiumWorkshops,(a,h)=>(i(),c("tr",{key:h},[o("td",null,[o("a",{onClick:m=>r.selectWorkshop(a.name),class:"workshop-a"},b(a.name),9,D)])]))),128))])]),o("table",null,[V,o("tbody",null,[(i(!0),c(f,null,W(n.standardWorkshops,(a,h)=>(i(),c("tr",{key:h},[o("td",null,[o("a",{onClick:m=>r.selectWorkshop(a.name),class:"workshop-a"},b(a.name),9,B)])]))),128))])])])}const A=k(G,[["render",$],["__scopeId","data-v-97724b87"]]);(function(e,s,n,p,t,r,a){e[t]=e[t]||function(){(e[t].q=e[t].q||[]).push(arguments)},r=s.createElement(n),r.async=1,r.src=p,a=s.getElementsByTagName(n)[0],a.parentNode.insertBefore(r,a)})(window,document,"script","https://cdn.giftup.app/dist/gift-up.js","giftup");const E={},I={class:"gift-up-target","data-site-id":"62fb37cd-4252-431f-358f-08dbf53bfc37","data-platform":"Other"};function T(e,s,n,p,t,r){return i(),c("div",I)}const q=k(E,[["render",T]]),F={components:{PremiumWorkshops:A,WorkshopDetails:N,GiftUp:q},data(){return{workshops:[],selectedWorkshop:null,selectedWorkshopName:"",sortedWorkshops:[],price:[],showGiftUpComponent:!1}},created(){g.get("https://hidden-valley-workshops.onrender.com/getData").then(e=>{this.workshops=e.data,this.sortWorkshops(),this.selectedWorkshop=this.sortedWorkshops[0]}).catch(e=>{console.error("Error fetching data:",e)}),g.get("https://hidden-valley-workshops.onrender.com/getPriceData").then(e=>{this.price=e.data}).catch(e=>{console.error("Error fetching price data:",e)})},computed:{premiumWorkshops(){return this.sortedWorkshops.filter(e=>this.isPremium||e.premium)},standardWorkshops(){return this.sortedWorkshops.filter(e=>this.isStandard||!e.premium)}},methods:{handleWorkshopSelected(e){this.selectedWorkshopName=e,this.selectedWorkshop=this.sortedWorkshops.find(s=>s.name===e)},sortWorkshops(){this.sortedWorkshops=[...this.workshops].sort((e,s)=>new Date(e.date)-new Date(s.date))},loadGiftUpComponent(){this.showGiftUpComponent=!0},calcPrice(e){const s=e?this.price.find(n=>n.type==="premium"):this.price.find(n=>n.type==="standard");return s&&s.singlePrice!==void 0?s.singlePrice:"N/A"},calcDoublePrice(e){const s=e?this.price.find(n=>n.type==="premium"):this.price.find(n=>n.type==="standard");return s&&s.doublePrice!==void 0?s.doublePrice:"N/A"},printPremium(){return premiumPrice=price.find(e=>e.type==="premium"),premiumPrice.singlePrice},printDoublePremium(){return premiumPrice=price.find(e=>e.type==="premium"),premiumPrice.doublePrice}}},L={class:"main"},j={class:"main-container"},H={class:"main-heading"},O=o("h1",null,"Hidden Valley",-1),z={key:0},J={key:1},K={key:0,class:"workshop-booking-container"},M={class:"home-booking"},Q=o("h3",null,"Can't get to a scheduled workshop? Arrange one at a date and time that suits you",-1),R={key:1,class:"main-other"},X={class:"main-left"},Y={class:"main-right"},Z={key:0,class:"main-text"},ee=o("li",{class:"main-li"},[y("Give an experience as a gift and buy a gift voucher to either our premium workshops (maximum 5 to 6 participants) or our standard workshops (maximum 10 to 12 participants)."),o("br"),o("br")],-1),oe=o("h3",null,"Premium Voucher",-1),se={class:"booking-container"},te={class:"booking"},re=o("div",{class:"booking-left"},[o("div",{class:"booking-text"},"$129 (or bring a friend for $199)")],-1),ne=o("h3",null,"Standard Voucher",-1),ie={class:"booking-container"},ce={class:"booking"},ae=o("div",{class:"booking-left"},[o("div",{class:"booking-text"},"$89 (or bring a friend for $135)")],-1),de={key:1,class:"main-text"},he={key:2,class:"about-other"};function pe(e,s,n,p,t,r){const a=l("router-link"),h=l("PremiumWorkshops"),m=l("GiftUp"),w=l("WorkshopDetails");return i(),c("div",L,[o("div",j,[o("div",H,[O,t.selectedWorkshopName==""?(i(),c("h2",z,"Gift Vouchers")):d("",!0),t.selectedWorkshopName&&t.selectedWorkshopName!==""?(i(),c("h2",J,"Sustainable Living Workshops")):d("",!0)]),t.selectedWorkshopName&&t.selectedWorkshopName!==""?(i(),c("div",K,[o("div",M,[Q,u(a,{to:"/contactUs",tag:"button",class:"button button3"},{default:x(()=>[y("Contact")]),_:1})])])):d("",!0),t.selectedWorkshopName==""?(i(),c("div",R,[o("div",X,[u(h,{premiumWorkshops:r.premiumWorkshops,standardWorkshops:r.standardWorkshops,onWorkshopSelected:r.handleWorkshopSelected},null,8,["premiumWorkshops","standardWorkshops","onWorkshopSelected"])]),o("div",Y,[t.showGiftUpComponent?d("",!0):(i(),c("ul",Z,[ee,oe,o("div",se,[o("div",te,[re,o("button",{class:"button button2",onClick:s[0]||(s[0]=(..._)=>r.loadGiftUpComponent&&r.loadGiftUpComponent(..._))},"Buy Now")])]),ne,o("div",ie,[o("div",ce,[ae,o("button",{class:"button button2",onClick:s[1]||(s[1]=(..._)=>r.loadGiftUpComponent&&r.loadGiftUpComponent(..._))},"Buy Now")])])])),t.showGiftUpComponent?(i(),c("ul",de,[u(m)])):d("",!0)])])):d("",!0),t.selectedWorkshopName&&t.selectedWorkshopName!==""?(i(),c("div",he,[u(w,{selectedWorkshop:t.selectedWorkshop,workshops:t.sortedWorkshops},null,8,["selectedWorkshop","workshops"])])):d("",!0)])])}const ue=k(F,[["render",pe]]);export{ue as default};