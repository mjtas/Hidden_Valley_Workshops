import{_ as c,o as n,c as o,d as e,t as r,F as g,f as y,r as m,i as v,e as p,h as f,b as I}from"./main-CXyUUntO.js";const b={props:{guides:Array,guideType:String,guideTypeName:String},methods:{selectGuide(t){this.$emit("guideSelected",t)}},computed:{filteredGuides(){return this.guides.filter(t=>t.type===this.guideType)}}},k={class:"premium-table"},T={class:"premium-th"},$={class:"premium-td"},G=["onClick"];function S(t,s,i,h,d,l){return n(),o("table",k,[e("thead",null,[e("tr",null,[e("th",T,r(i.guideTypeName),1)])]),e("tbody",null,[(n(!0),o(g,null,y(l.filteredGuides,(u,a)=>(n(),o("tr",{key:a},[e("td",$,[e("a",{onClick:_=>l.selectGuide(u.title),class:"workshop-a"},r(u.title),9,G)])]))),128))])])}const x=c(b,[["render",S]]),C={components:{HowToSection:x},props:{guides:Array},data(){return{guideTypes:[{value:"building",name:"Building"},{value:"chooks",name:"Chooks"},{value:"compost",name:"Compost"},{value:"greenhouse",name:"Greenhouse and Polytunnel Growing"},{value:"berries",name:"Growing Berries"},{value:"noDig",name:"No Dig Gardening"},{value:"preserving",name:"Preserving Fruit and Vegetables"},{value:"pruning",name:"Pruning and Espalier Fruit Trees"},{value:"sourdough",name:"Sourdough"}]}},methods:{handleGuideSelected(t){this.$emit("guideSelected",t)}}},N={class:"content"};function L(t,s,i,h,d,l){const u=m("HowToSection");return n(),o("div",N,[(n(!0),o(g,null,y(d.guideTypes,(a,_)=>(n(),v(u,{key:_,guides:i.guides,guideType:a.value,guideTypeName:a.name,onGuideSelected:s[0]||(s[0]=w=>l.handleGuideSelected(t.guideName))},null,8,["guides","guideType","guideTypeName"]))),128))])}const q=c(C,[["render",L]]),B={},j=e("li",null,"To avoid the plans becoming too wordy, I have assumed some basic building knowledge and skills.",-1),H=e("li",null,"I assume you know to cut on the waste side of the line, so that you leave the line on when you cut to the measurement.",-1),E=e("li",null,"I assume you can cut a straight line within 1mm of square with a circular saw (most of the time!).",-1),M=e("li",null,"I assume you know to always pre-drill your holes 2/3 the depth of the screw.",-1),V=e("li",null,"I teach all of these skills in my building skills workshops, along with a general introduction to hand and power tools so if you’re feeling lost then come along and learn the basics or build on the basics with me in person!",-1);function A(t,s){return n(),o(g,null,[j,H,E,M,V],64)}const F=c(B,[["render",A]]),D={props:{guide:{type:Object,required:!0}},computed:{materialItems(){return this.splitItems(this.guide.materialString)},toolItems(){return this.splitItems(this.guide.toolString)},maxItemsLength(){return Math.max(this.materialItems.length,this.toolItems.length)}},methods:{splitItems(t){return t?t.split(",").map(s=>s.trim()):[]}}},O=e("thead",null,[e("tr",null,[e("th",null,"Materials"),e("th",null,"Tools")])],-1);function K(t,s,i,h,d,l){return n(),o("div",null,[e("table",null,[O,e("tbody",null,[(n(!0),o(g,null,y(l.maxItemsLength,u=>(n(),o("tr",{key:u},[e("td",null,r(l.materialItems[u]||""),1),e("td",null,r(l.toolItems[u]||""),1)]))),128))])])])}const P=c(D,[["render",K]]),z={props:{guide:{type:Object,required:!0}},computed:{cuttingItems(){return this.splitItems(this.guide.cuttingString)},pairedCuttingItems(){const t=this.cuttingItems,s=[];for(let i=0;i<t.length;i+=2)s.push([t[i],t[i+1]||""]);return s}},methods:{splitItems(t){return t?t.split(",").map(s=>s.trim()):[]}}},J=e("thead",null,[e("tr",null,[e("th",null,"Cutting List"),e("th")])],-1);function Q(t,s,i,h,d,l){return n(),o("div",null,[e("table",null,[J,e("tbody",null,[(n(!0),o(g,null,y(l.pairedCuttingItems,(u,a)=>(n(),o("tr",{key:a},[e("td",null,r(u[0]),1),e("td",null,r(u[1]),1)]))),128))])])])}const R=c(z,[["render",Q]]),U={props:{guide:{type:Object,required:!0}},methods:{splitItems(t){return t?t.split(",,").map(s=>s.trim()):[]}}};function W(t,s,i,h,d,l){return n(),o("div",null,[e("ol",null,[(n(!0),o(g,null,y(l.splitItems(i.guide.numberedSteps),(u,a)=>(n(),o("li",{key:a},r(u),1))),128))])])}const X=c(U,[["render",W]]),Y={components:{AssumedKnowledge:F,ToolsMaterials:P,CuttingList:R,NumberedSteps:X},props:{guide:{type:Object,required:!0}},computed:{isBuilding(){return this.guide.type==="building"}}},Z=["src"],ee={key:0},te={key:1};function ne(t,s,i,h,d,l){const u=m("AssumedKnowledge"),a=m("ToolsMaterials"),_=m("CuttingList"),w=m("NumberedSteps");return n(),o("div",null,[e("h3",null,r(i.guide.title),1),e("h3",null,"Difficulty Level: "+r(i.guide.rating),1),e("img",{class:"about-img",src:`/${i.guide.image}.png`},null,8,Z),l.isBuilding?(n(),o("ul",ee,[p(u)])):f("",!0),e("ul",null,[e("li",null,r(i.guide.introText),1)]),p(a,{guide:i.guide},null,8,["guide"]),l.isBuilding?(n(),o("table",te,[p(_,{guide:i.guide},null,8,["guide"])])):f("",!0),p(w,{guide:i.guide},null,8,["guide"]),e("ul",null,[e("li",null,r(i.guide.concText),1)])])}const se=c(Y,[["render",ne]]),ie={components:{HowToList:q,SelectedGuideComponent:se},data(){return{guides:[],selectedGuide:null,selectedGuideTitle:"",howToIntro1:"I love a good ‘how to’ guide. But let’s face it, a good one can be hard to find! Either they use expensive materials, they use inches (a hassle to convert), or they leave out important details and leave you without any idea of ‘how to’! I have been getting things done for myself around the house for a long time now, and I’m finally getting to the point where I feel like I know enough about what I’m doing to share my own ‘how to’ guides. I have done all of these projects for myself and found them really useful, but I have stuck to how I completed each one - which is not to say you could find another way or even a better way! I’d love to improve these guides and add more in over time so if you have any suggestions please email me.",howToIntro2:"Each project is rated with a difficulty rating. Easy are quick and easy to accomplish with minimal experience and/or tools. Medium projects require some more experience and time to get it done. For example, medium rated building projects require the basic tool kit I recommend in my building workshops, and I’ll assume you also know how to use your tools to measure and cut accurately. Tricky projects are either more time consuming (taking multiple weekends to do) or require more specialised tools/ equipment."}},created(){I.get("https://hidden-valley-workshops.onrender.com/getGuides").then(t=>{this.guides=t.data}).catch(t=>{console.error("Error fetching data:",t)})},methods:{handleGuideSelected(t){this.selectedGuideTitle=t,this.selectedGuide=this.guides.find(s=>s.title===t)}}},oe={class:"main"},le={class:"main-container"},ue=e("div",{class:"main-heading"},[e("h1",null,"Hidden Valley"),e("h2",null,"How To Guides")],-1),de={class:"main-other"},re={class:"guide-left"},ae={class:"guide-right"},ce={class:"main-text"},me={key:0,class:"main-li"},he={key:1,class:"main-li"};function ge(t,s,i,h,d,l){const u=m("HowToList"),a=m("SelectedGuideComponent");return n(),o("div",oe,[e("div",le,[ue,e("div",de,[e("div",re,[p(u,{guides:d.guides,onGuideSelected:s[0]||(s[0]=_=>l.handleGuideSelected(d.selectedGuideTitle))},null,8,["guides"])]),e("div",ae,[e("ul",ce,[d.selectedGuideTitle==""?(n(),o("li",me,r(d.howToIntro1),1)):f("",!0),(d.selectedGuideTitle="")?(n(),o("li",he,r(d.howToIntro2),1)):(n(),v(a,{key:2,guide:"selectedGuide"}))])])])])])}const pe=c(ie,[["render",ge]]);export{pe as default};
