import{_ as u,S as _,r as m,o as r,c as a,d as s,t as b,n as f,h as l,i as g,v as k,j as v,k as y,F as p,b as w,f as B,e as S}from"./main-11f258cb.js";const x={components:{SubscriptionForm:_},props:{post:Object},data(){return{searchQuery:""}},created(){axios.get("https://hidden-valley-workshops.onrender.com/getBlogData").then(e=>{this.blogPosts=e.data}).catch(e=>{console.error("Error fetching blog posts:",e)})},computed:{mainTextWithHighlights(){return this.mainText.map(e=>this.highlightSearchTerms(e,this.searchQuery))}},methods:{toggleText(){post.show=!post.show}},isHighlighted(e){if(!this.searchQuery)return!1;const t=new RegExp(this.searchQuery,"gi");return e.match(t)!==null},highlightSearchTerms(e,t){if(!t)return e;const o=new RegExp(t,"gi");return e.replace(o,c=>`<span class="highlight">${c}</span>`)},clearSearch(){this.searchQuery=""},renderHtml(e){return e}},P={class:"table-left"},T={class:"main-text"},H={key:0,class:"main-li"},Q=["innerHTML"],$={class:"main-right"},D={key:0,class:"booking-container"},V={key:2,class:"main-opaque"},C=["src"];function E(e,t,o,c,i,h){const d=m("SubscriptionForm");return r(),a(p,null,[s("div",P,[s("ul",T,[s("h3",{class:"h3-link",onClick:t[0]||(t[0]=n=>h.toggleText())},b(o.post.title),1),o.post.show?(r(),a("li",H,[s("span",{class:f({highlight:e.isHighlighted(o.post.text)}),innerHTML:e.renderHtml(o.post.text)},null,10,Q)])):l("",!0)])]),s("div",$,[e.latest?(r(),a("div",D,[g(s("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>i.searchQuery=n),class:"search-input",placeholder:"Search for keywords"},null,512),[[k,i.searchQuery]]),g(s("button",{onClick:t[2]||(t[2]=(...n)=>e.clearSearch&&e.clearSearch(...n)),class:"clear-button"},"X",512),[[v,i.searchQuery]])])):l("",!0),e.latest?(r(),y(d,{key:1})):l("",!0),o.post.show?(r(),a("div",V,[s("img",{class:"about-img",src:`/${o.post.image}.png`},null,8,C)])):l("",!0)])],64)}const F=u(x,[["render",E]]),L={components:{BlogPost:F},data(){return{blogPosts:[]}},computed:{sortedBlogPosts(){return this.blogPosts.slice().sort((e,t)=>new Date(t.date)-new Date(e.date))}},created(){w.get("https://hidden-valley-workshops.onrender.com/getBlogData").then(e=>{this.blogPosts=e.data}).catch(e=>{console.error("Error fetching blog posts:",e)})}},M={class:"main"},N={class:"main-container"},j=s("div",{class:"other-heading"},[s("h1",null,"Hidden Valley"),s("h2",null,"Blog")],-1),R={class:"about-other"};function q(e,t,o,c,i,h){const d=m("BlogPost");return r(),a("div",M,[s("div",N,[j,s("div",R,[(r(!0),a(p,null,B(h.sortedBlogPosts,n=>(r(),a("div",{class:"block",key:n.title},[S(d,{post:n},null,8,["post"])]))),128))])])])}const O=u(L,[["render",q]]);export{O as default};
