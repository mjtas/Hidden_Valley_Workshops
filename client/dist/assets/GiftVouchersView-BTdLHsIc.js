import{_ as k,o as r,c as n,d as s,F as _,f as W,t as f,W as v,b as y,r as l,h as d,e as m,w,g}from"./main-D54dwgcD.js";const N={props:{premiumWorkshops:Array,standardWorkshops:Array},methods:{selectWorkshop(e){this.$emit("workshopSelected",e)}}},x={class:"content"},$={class:"premium-table"},C=s("thead",null,[s("tr",null,[s("th",{class:"premium-th"},"Premium Workshops")])],-1),S={class:"premium-td"},V=["onClick"],D=s("thead",null,[s("tr",null,[s("th",{class:"premium-th"},"Standard Workshops")])],-1),G={class:"premium-td"},B=["onClick"];function P(e,c,i,p,o,t){return r(),n("div",x,[s("table",$,[C,s("tbody",null,[(r(!0),n(_,null,W(i.premiumWorkshops,(a,h)=>(r(),n("tr",{key:h},[s("td",S,[s("a",{onClick:u=>t.selectWorkshop(a.name),class:"workshop-a"},f(a.name),9,V)])]))),128))])]),s("table",null,[D,s("tbody",null,[(r(!0),n(_,null,W(i.standardWorkshops,(a,h)=>(r(),n("tr",{key:h},[s("td",G,[s("a",{onClick:u=>t.selectWorkshop(a.name),class:"workshop-a"},f(a.name),9,B)])]))),128))])])])}const E=k(N,[["render",P]]);(function(e,c,i,p,o,t,a){e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},t=c.createElement(i),t.async=1,t.src=p,a=c.getElementsByTagName(i)[0],a.parentNode.insertBefore(t,a)})(window,document,"script","https://cdn.giftup.app/dist/gift-up.js","giftup");const U={},A={class:"gift-up-target","data-site-id":"62fb37cd-4252-431f-358f-08dbf53bfc37","data-platform":"Other"};function q(e,c,i,p,o,t){return r(),n("div",A)}const F=k(U,[["render",q]]),L={components:{PremiumWorkshops:E,WorkshopDetails:v,GiftUp:F},data(){return{workshops:[],selectedWorkshop:null,selectedWorkshopName:"",sortedWorkshops:[],price:[]}},created(){y.get("https://hidden-valley-workshops.onrender.com/getData").then(e=>{this.workshops=e.data,this.sortWorkshops(),this.selectedWorkshop=this.sortedWorkshops[0]}).catch(e=>{console.error("Error fetching data:",e)})},computed:{premiumWorkshops(){return this.sortedWorkshops.filter(e=>this.isPremium||e.premium)},standardWorkshops(){return this.sortedWorkshops.filter(e=>this.isStandard||!e.premium)}},methods:{handleWorkshopSelected(e){this.selectedWorkshopName=e,this.selectedWorkshop=this.sortedWorkshops.find(c=>c.name===e)},sortWorkshops(){this.sortedWorkshops=[...this.workshops].sort((e,c)=>new Date(e.date)-new Date(c.date))}}},T={class:"main"},j={class:"main-container"},H={class:"main-heading"},O=s("h1",null,"Hidden Valley",-1),z={key:0},I={key:1},J={key:0,class:"workshop-booking-container"},K={class:"home-booking"},M=s("h3",null,"Can't get to a scheduled workshop? Arrange one at a date and time that suits you",-1),Q={key:1,class:"main-other"},R={class:"main-left"},X={class:"main-right"},Y={class:"main-text"},Z=s("li",{class:"main-li"},[g("Give an experience as a gift and buy a gift voucher to either our premium workshops (maximum 5 to 6 participants) or our standard workshops (maximum 10 to 12 participants)"),s("br"),s("br")],-1),ss={key:2,class:"about-other"};function es(e,c,i,p,o,t){const a=l("router-link"),h=l("PremiumWorkshops"),u=l("GiftUp"),b=l("WorkshopDetails");return r(),n("div",T,[s("div",j,[s("div",H,[O,o.selectedWorkshopName==""?(r(),n("h2",z,"Gift Vouchers")):d("",!0),o.selectedWorkshopName&&o.selectedWorkshopName!==""?(r(),n("h2",I,"Sustainable Living Workshops")):d("",!0)]),o.selectedWorkshopName&&o.selectedWorkshopName!==""?(r(),n("div",J,[s("div",K,[M,m(a,{to:"/contactUs",tag:"button",class:"button button3"},{default:w(()=>[g("Contact")]),_:1})])])):d("",!0),o.selectedWorkshopName==""?(r(),n("div",Q,[s("div",R,[m(h,{premiumWorkshops:t.premiumWorkshops,standardWorkshops:t.standardWorkshops,onWorkshopSelected:t.handleWorkshopSelected},null,8,["premiumWorkshops","standardWorkshops","onWorkshopSelected"])]),s("div",X,[s("ul",Y,[Z,m(u)])])])):d("",!0),o.selectedWorkshopName&&o.selectedWorkshopName!==""?(r(),n("div",ss,[m(b,{selectedWorkshop:o.selectedWorkshop,workshops:o.sortedWorkshops},null,8,["selectedWorkshop","workshops"])])):d("",!0)])])}const ts=k(L,[["render",es]]);export{ts as default};