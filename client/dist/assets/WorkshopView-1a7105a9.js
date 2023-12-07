import{a as h}from"./axios-28bc18a3.js";import{_ as m,r as g,o as r,c,b as t,d as p,w as k,F as f,e as b,f as d,t as a,g as v}from"./main-c0e4a1f2.js";const x={data(){return{price:[],workshops:[],sortedWorkshops:[]}},created(){h.get("${({}).VITE_BASE_URL}/getData").then(e=>{this.workshops=e.data,this.sortWorkshops(),this.selectedWorkshop=this.sortedWorkshops[0]}).catch(e=>{console.error("Error fetching data:",e)}),h.get("${({}).VITE_BASE_URL}/getPriceData").then(e=>{this.price=e.data}).catch(e=>{console.error("Error fetching price data:",e)})},methods:{sortWorkshops(){this.sortedWorkshops=[...this.workshops].sort((e,s)=>new Date(e.date)-new Date(s.date))},toggleText(e){const s=this.workshops.find(o=>o.name===e);s&&(s.show=!s.show)},formatDate(e){const s={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString("en-UK",s)},calcPrice(e){const s=e?this.price.find(o=>o.type==="premium"):this.price.find(o=>o.type==="standard");return s&&s.singlePrice!==void 0?s.singlePrice:"N/A"},calcDoublePrice(e){const s=e?this.price.find(o=>o.type==="premium"):this.price.find(o=>o.type==="standard");return s&&s.doublePrice!==void 0?s.doublePrice:"N/A"},redirectToExternalLink(e){e&&e.link?window.location.href=e.link:console.error("Invalid workshop data or link not available.")}}},y={class:"main"},D={class:"main-container"},w={class:"other-heading"},C=t("h1",null,"Hidden Valley",-1),E=t("h2",null,"Sustainable Living Workshops",-1),L={class:"workshop-booking-container"},P={class:"home-booking"},T=t("h3",null,"Can't get to a scheduled workshop? Arrange one at a date and time that suits you",-1),W={class:"about-other"},N={class:"main-left"},V={class:"main-text"},B=["onClick"],A={key:0,class:"main-li"},S={class:"price-li"},U={class:"booking-container"},I={class:"booking"},F={class:"booking-left"},R={class:"booking-text"},q=t("br",null,null,-1),H=["onClick"],K={class:"main-right"},$={class:"main-opaque"},j=["src"];function z(e,s,o,G,l,i){const _=g("router-link");return r(),c("div",y,[t("div",D,[t("div",w,[C,E,t("div",L,[t("div",P,[T,p(_,{to:"/contactUs",tag:"button",class:"button button3"},{default:k(()=>[d("Contact")]),_:1})])])]),t("div",W,[(r(!0),c(f,null,b(l.sortedWorkshops,n=>(r(),c("div",{class:"block",key:n.name},[t("div",N,[t("ul",V,[t("h3",{class:"h3-link",onClick:u=>i.toggleText(n.name)},a(n.name),9,B),n.show?(r(),c("li",A,a(n.text),1)):v("",!0),t("li",S,a(l.price.length>0?i.calcPrice(n.premium):"Loading...")+" (or bring a friend for "+a(l.price.length>0?i.calcDoublePrice(n.premium):"Loading...")+")",1),t("div",U,[t("div",I,[t("div",F,[t("div",R,[d("Next Date:"),q,d(a(i.formatDate(n.date)),1)])]),t("button",{class:"button button2",onClick:u=>i.redirectToExternalLink(n)},"Book Now",8,H)])])])]),t("div",K,[t("div",$,[t("img",{class:"about-img",src:`/${n.image}.png`},null,8,j)])])]))),128))])])])}const O=m(x,[["render",z]]);export{O as default};
