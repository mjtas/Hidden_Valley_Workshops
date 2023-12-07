import{_ as f,o as i,c as n,d as e,F as k,f as _,t as W,p as w,i as P,W as x,b,r as u,h,e as m,w as N,g}from"./main-e3848816.js";const S={props:{premiumWorkshops:Array,standardWorkshops:Array},methods:{selectWorkshop(s){this.$emit("workshopSelected",s)}}},v=s=>(w("data-v-97724b87"),s=s(),P(),s),E={class:"content"},V=v(()=>e("thead",null,[e("tr",null,[e("th",null,"Premium Workshops")])],-1)),C=["onClick"],D=v(()=>e("thead",null,[e("tr",null,[e("th",null,"Standard Workshops")])],-1)),T=["onClick"];function L(s,o,t,y,r,c){return i(),n("div",E,[e("table",null,[V,e("tbody",null,[(i(!0),n(k,null,_(t.premiumWorkshops,(a,d)=>(i(),n("tr",{key:d},[e("td",null,[e("a",{onClick:l=>c.selectWorkshop(a.name),class:"workshop-a"},W(a.name),9,C)])]))),128))])]),e("table",null,[D,e("tbody",null,[(i(!0),n(k,null,_(t.standardWorkshops,(a,d)=>(i(),n("tr",{key:d},[e("td",null,[e("a",{onClick:l=>c.selectWorkshop(a.name),class:"workshop-a"},W(a.name),9,T)])]))),128))])])])}const A=f(S,[["render",L],["__scopeId","data-v-97724b87"]]),B={components:{PremiumWorkshops:A,WorkshopDetails:x},data(){return{workshops:[],selectedWorkshop:null,selectedWorkshopName:"",sortedWorkshops:[],price:[]}},created(){b.get("${({}).VITE_BASE_URL}/getData").then(s=>{this.workshops=s.data,this.sortWorkshops(),this.selectedWorkshop=this.sortedWorkshops[0]}).catch(s=>{console.error("Error fetching data:",s)}),b.get("${({}).VITE_BASE_URL}/getPriceData").then(s=>{this.price=s.data}).catch(s=>{console.error("Error fetching price data:",s)})},computed:{premiumWorkshops(){return this.sortedWorkshops.filter(s=>this.isPremium||s.premium)},standardWorkshops(){return this.sortedWorkshops.filter(s=>this.isStandard||!s.premium)}},methods:{handleWorkshopSelected(s){this.selectedWorkshopName=s,this.selectedWorkshop=this.sortedWorkshops.find(o=>o.name===s)},sortWorkshops(){this.sortedWorkshops=[...this.workshops].sort((s,o)=>new Date(s.date)-new Date(o.date))},redirectToExternalLink(){window.location.href="https://www.eventbrite.com.au/d/australia--tasmania/events/"},calcPrice(s){const o=s?this.price.find(t=>t.type==="premium"):this.price.find(t=>t.type==="standard");return o&&o.singlePrice!==void 0?o.singlePrice:"N/A"},calcDoublePrice(s){const o=s?this.price.find(t=>t.type==="premium"):this.price.find(t=>t.type==="standard");return o&&o.doublePrice!==void 0?o.doublePrice:"N/A"},printPremium(){return premiumPrice=price.find(s=>s.type==="premium"),premiumPrice.singlePrice},printDoublePremium(){return premiumPrice=price.find(s=>s.type==="premium"),premiumPrice.doublePrice}}},I={class:"main"},G={class:"main-container"},U={class:"main-heading"},$=e("h1",null,"Hidden Valley",-1),F={key:0},R={key:1},H={key:0,class:"workshop-booking-container"},j={class:"home-booking"},q=e("h3",null,"Can't get to a scheduled workshop? Arrange one at a date and time that suits you",-1),z={key:1,class:"main-other"},J={class:"main-left"},K={class:"main-right"},M={class:"main-text"},O=e("li",{class:"main-li"},[g("Give an experience as a gift and buy a gift voucher to either our premium workshops (maximum 5 to 6 participants) or our standard workshops (maximum 10 to 12 participants)."),e("br"),e("br")],-1),Q=e("h3",null,"Premium Voucher",-1),X={class:"booking-container"},Y={class:"booking"},Z=e("div",{class:"booking-left"},[e("div",{class:"booking-text"},"$129 (or bring a friend for $199)")],-1),ee=e("h3",null,"Standard Voucher",-1),se={class:"booking-container"},oe={class:"booking"},te=e("div",{class:"booking-left"},[e("div",{class:"booking-text"},"$89 (or bring a friend for $135)")],-1),re={key:2,class:"about-other"};function ie(s,o,t,y,r,c){const a=u("router-link"),d=u("PremiumWorkshops"),l=u("WorkshopDetails");return i(),n("div",I,[e("div",G,[e("div",U,[$,r.selectedWorkshopName==""?(i(),n("h2",F,"Gift Vouchers")):h("",!0),r.selectedWorkshopName&&r.selectedWorkshopName!==""?(i(),n("h2",R,"Sustainable Living Workshops")):h("",!0)]),r.selectedWorkshopName&&r.selectedWorkshopName!==""?(i(),n("div",H,[e("div",j,[q,m(a,{to:"/contactUs",tag:"button",class:"button button3"},{default:N(()=>[g("Contact")]),_:1})])])):h("",!0),r.selectedWorkshopName==""?(i(),n("div",z,[e("div",J,[m(d,{premiumWorkshops:c.premiumWorkshops,standardWorkshops:c.standardWorkshops,onWorkshopSelected:c.handleWorkshopSelected},null,8,["premiumWorkshops","standardWorkshops","onWorkshopSelected"])]),e("div",K,[e("ul",M,[O,Q,e("div",X,[e("div",Y,[Z,e("button",{class:"button button2",onClick:o[0]||(o[0]=(...p)=>c.redirectToExternalLink&&c.redirectToExternalLink(...p))},"Buy Now")])]),ee,e("div",se,[e("div",oe,[te,e("button",{class:"button button2",onClick:o[1]||(o[1]=(...p)=>c.redirectToExternalLink&&c.redirectToExternalLink(...p))},"Buy Now")])])])])])):h("",!0),r.selectedWorkshopName&&r.selectedWorkshopName!==""?(i(),n("div",re,[m(l,{selectedWorkshop:r.selectedWorkshop,workshops:r.sortedWorkshops},null,8,["selectedWorkshop","workshops"])])):h("",!0)])])}const ce=f(B,[["render",ie]]);export{ce as default};
