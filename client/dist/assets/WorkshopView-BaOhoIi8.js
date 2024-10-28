import{_ as p,b as _,r as k,c as a,d as t,e as m,w as f,F as b,f as v,o as c,g as d,t as r,h as w}from"./main-B7DtEGcZ.js";const y={data(){return{price:[],workshops:[],sortedWorkshops:[]}},created(){_.get("https://hidden-valley-workshops.onrender.com/getData").then(e=>{this.workshops=e.data,this.sortWorkshops(),this.selectedWorkshop=this.sortedWorkshops[0]}).catch(e=>{console.error("Error fetching data:",e)}),_.get("https://hidden-valley-workshops.onrender.com/getPriceData").then(e=>{this.price=e.data}).catch(e=>{console.error("Error fetching price data:",e)})},computed:{filteredWorkshops(){const e=new Date().setHours(0,0,0,0),o=new Date;return o.setMonth(o.getMonth()+6),this.workshops.filter(n=>{const l=new Date(n.date).setHours(0,0,0,0);return l>=e&&l<=o})}},methods:{sortWorkshops(){this.sortedWorkshops=[...this.workshops].sort((e,o)=>new Date(e.date)-new Date(o.date))},toggleText(e){const o=this.workshops.find(n=>n.name===e);o&&(o.show=!o.show)},formatDate(e){const o={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString("en-UK",o)},calcPrice(e){const o=this.price.find(n=>n.type===e);return o&&o.singlePrice!==void 0?o.singlePrice:"N/A"},calcDoublePrice(e){const o=this.price.find(n=>n.type===e);return o&&o.doublePrice!==void 0?o.doublePrice:"N/A"},redirectToExternalLink(e){e&&e.link?window.location.href=e.link:console.error("Invalid workshop data or link not available.")}}},D={class:"main"},x={class:"main-container"},W={class:"other-heading"},C=t("h1",null,"Hidden Valley",-1),P=t("h2",null,"Sustainable Living Workshops",-1),N={class:"workshop-booking-container"},T={class:"home-booking"},L=t("h3",null,"Can't get to a scheduled workshop? Arrange one at a date and time that suits you for $399",-1),V={class:"about-other"},E={class:"main-left"},B={class:"main-text"},A=["onClick"],F={key:0,class:"main-li"},H={class:"price-li"},M={class:"booking-container"},S={class:"booking"},U={class:"booking-left"},q={class:"booking-text"},I=t("br",null,null,-1),K=["onClick"],j={class:"main-right"},z={class:"main-opaque"},G=["src"];function J(e,o,n,l,h,i){const u=k("router-link");return c(),a("div",D,[t("div",x,[t("div",W,[C,P,t("div",N,[t("div",T,[L,m(u,{to:"/contactUs",tag:"button",class:"button button3"},{default:f(()=>[d("Contact")]),_:1})])])]),t("div",V,[(c(!0),a(b,null,v(i.filteredWorkshops,s=>(c(),a("div",{class:"block",key:s.name},[t("div",E,[t("ul",B,[t("h3",{class:"h3-link",onClick:g=>i.toggleText(s.name)},r(s.name),9,A),s.show?(c(),a("li",F,r(s.text),1)):w("",!0),t("li",H,r(h.price.length>0?i.calcPrice(s.type):"Loading...")+" (or bring a friend for "+r(h.price.length>0?i.calcDoublePrice(s.type):"Loading...")+")",1),t("div",M,[t("div",S,[t("div",U,[t("div",q,[d("Next Date:"),I,d(r(i.formatDate(s.date)),1)])]),t("button",{class:"button button2",onClick:g=>i.redirectToExternalLink(s)},"Book Now",8,K)])])])]),t("div",j,[t("div",z,[t("img",{class:"about-img",src:`/${s.image}.png`},null,8,G)])])]))),128))])])])}const Q=p(y,[["render",J]]);export{Q as default};