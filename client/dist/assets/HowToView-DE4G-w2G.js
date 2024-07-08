import{_ as c,o as i,c as n,d as e,t as a,F as p,f as y,r as m,i as w,a as I,e as g,h as _,b}from"./main-BDsfJGft.js";const k={props:{guides:Array,guideType:String,guideTypeName:String},methods:{selectGuide(t){this.$emit("guideSelected",t)}},computed:{filteredGuides(){return this.guides.filter(t=>t.type===this.guideType)}}},T={class:"premium-table"},$={class:"premium-th"},G={class:"premium-td"},S=["onClick"];function x(t,o,s,h,d,l){return i(),n("table",T,[e("thead",null,[e("tr",null,[e("th",$,a(s.guideTypeName),1)])]),e("tbody",null,[(i(!0),n(p,null,y(l.filteredGuides,(u,r)=>(i(),n("tr",{key:r},[e("td",G,[e("a",{onClick:f=>l.selectGuide(u.title),class:"workshop-a"},a(u.title),9,S)])]))),128))])])}const C=c(k,[["render",x]]),N={components:{HowToSection:C},props:{guides:Array},data(){return{guideTypes:[{value:"building",name:"Building"},{value:"chooks",name:"Chooks"},{value:"compost",name:"Compost"},{value:"greenhouse",name:"Greenhouse and Polytunnel Growing"},{value:"berries",name:"Growing Berries"},{value:"noDig",name:"No Dig Gardening"},{value:"preserving",name:"Preserving Fruit and Vegetables"},{value:"pruning",name:"Pruning and Espalier Fruit Trees"},{value:"sourdough",name:"Sourdough"}]}},methods:{handleGuideSelected(t){this.$emit("guideSelected",t)}}},L={class:"content"};function q(t,o,s,h,d,l){const u=m("HowToSection");return i(),n("div",L,[(i(!0),n(p,null,y(d.guideTypes,(r,f)=>(i(),w(u,{key:f,guides:s.guides,guideType:r.value,guideTypeName:r.name,onGuideSelected:l.handleGuideSelected},null,8,["guides","guideType","guideTypeName","onGuideSelected"]))),128))])}const B=c(N,[["render",q]]),j={},H=I('<li class="main-li">To avoid the plans becoming too wordy, I have assumed some basic building knowledge and skills.</li><li class="main-li">I assume you know to cut on the waste side of the line, so that you leave the line on when you cut to the measurement.</li><li class="main-li">I assume you can cut a straight line within 1mm of square with a circular saw (most of the time!).</li><li class="main-li">I assume you know to always pre-drill your holes 2/3 the depth of the screw.</li><li class="main-li">I teach all of these skills in my building skills workshops, along with a general introduction to hand and power tools so if you’re feeling lost then come along and learn the basics or build on the basics with me in person!</li>',5);function V(t,o){return H}const E=c(j,[["render",V]]),M={props:{guide:{type:Object,required:!0}},computed:{materialItems(){return this.splitItems(this.guide.materialString)},toolItems(){return this.splitItems(this.guide.toolString)},maxItemsLength(){return Math.max(this.materialItems.length,this.toolItems.length)}},methods:{splitItems(t){return t?t.split(",").map(o=>o.trim()):[]}}},A=e("thead",null,[e("tr",null,[e("th",null,"Materials"),e("th",null,"Tools")])],-1);function F(t,o,s,h,d,l){return i(),n("div",null,[e("table",null,[A,e("tbody",null,[(i(!0),n(p,null,y(l.maxItemsLength,u=>(i(),n("tr",{key:u},[e("td",null,a(l.materialItems[u]||""),1),e("td",null,a(l.toolItems[u]||""),1)]))),128))])])])}const D=c(M,[["render",F]]),O={props:{guide:{type:Object,required:!0}},computed:{cuttingItems(){return this.splitItems(this.guide.cuttingString)},pairedCuttingItems(){const t=this.cuttingItems,o=[];for(let s=0;s<t.length;s+=2)o.push([t[s],t[s+1]||""]);return o}},methods:{splitItems(t){return t?t.split(",").map(o=>o.trim()):[]}}},K=e("thead",null,[e("tr",null,[e("th",null,"Cutting List")])],-1);function P(t,o,s,h,d,l){return i(),n("div",null,[e("table",null,[K,e("tbody",null,[(i(!0),n(p,null,y(l.pairedCuttingItems,(u,r)=>(i(),n("tr",{key:r},[e("td",null,a(u[0]),1),e("td",null,a(u[1]),1)]))),128))])])])}const z=c(O,[["render",P]]),J={props:{guide:{type:Object,required:!0}},methods:{splitItems(t){return t?t.split(",,").map(o=>o.trim()):[]}}},Q={class:"guide-steps"};function R(t,o,s,h,d,l){return i(),n("div",null,[e("ol",Q,[(i(!0),n(p,null,y(l.splitItems(s.guide.numberedSteps),(u,r)=>(i(),n("li",{key:r},a(u),1))),128))])])}const U=c(J,[["render",R]]),W={components:{AssumedKnowledge:E,ToolsMaterials:D,CuttingList:z,NumberedSteps:U},props:{guide:{type:Object,required:!0}},computed:{isBuilding(){return this.guide.type==="building"}}},X=["src"],Y={key:0,class:"main-text"},Z={class:"main-text"},ee={class:"main-li"},te={key:1},se={class:"main-text"},ie={class:"main-li"};function ne(t,o,s,h,d,l){const u=m("AssumedKnowledge"),r=m("ToolsMaterials"),f=m("CuttingList"),v=m("NumberedSteps");return i(),n("div",null,[e("h3",null,a(s.guide.title),1),e("h4",null,"Difficulty Level: "+a(s.guide.rating),1),e("img",{class:"about-img",src:`/${s.guide.image}.png`},null,8,X),l.isBuilding?(i(),n("ul",Y,[g(u)])):_("",!0),e("ul",Z,[e("li",ee,a(s.guide.introText),1)]),g(r,{guide:s.guide},null,8,["guide"]),l.isBuilding?(i(),n("table",te,[g(f,{guide:s.guide},null,8,["guide"])])):_("",!0),g(v,{guide:s.guide},null,8,["guide"]),e("ul",se,[e("li",ie,a(s.guide.concText),1)])])}const oe=c(W,[["render",ne]]),le={components:{HowToList:B,SelectedGuideComponent:oe},data(){return{guides:[],selectedGuide:null,selectedGuideTitle:"",howToIntro1:"I love a good ‘how to’ guide. But let’s face it, a good one can be hard to find! Either they use expensive materials, they use inches (a hassle to convert), or they leave out important details and leave you without any idea of ‘how to’! I have been getting things done for myself around the house for a long time now, and I’m finally getting to the point where I feel like I know enough about what I’m doing to share my own ‘how to’ guides. I have done all of these projects for myself and found them really useful, but I have stuck to how I completed each one - which is not to say you could find another way or even a better way! I’d love to improve these guides and add more in over time so if you have any suggestions please email me.",howToIntro2:"Each project is rated with a difficulty rating. Easy are quick and easy to accomplish with minimal experience and/or tools. Medium projects require some more experience and time to get it done. For example, medium rated building projects require the basic tool kit I recommend in my building workshops, and I’ll assume you also know how to use your tools to measure and cut accurately. Tricky projects are either more time consuming (taking multiple weekends to do) or require more specialised tools/ equipment."}},created(){b.get("https://hidden-valley-workshops.onrender.com/getGuides").then(t=>{this.guides=t.data}).catch(t=>{console.error("Error fetching data:",t)})},methods:{handleGuideSelected(t){this.selectedGuideTitle=t,this.selectedGuide=this.guides.find(o=>o.title===t)}}},ue={class:"main"},de={class:"main-container"},ae=e("div",{class:"main-heading"},[e("h1",null,"Hidden Valley"),e("h2",null,"How To Guides")],-1),re={class:"main-other"},ce={class:"guide-left"},me={class:"guide-right"},he={class:"main-text"},ge={key:0,class:"main-li"},_e={key:1,class:"main-li"};function pe(t,o,s,h,d,l){const u=m("HowToList"),r=m("SelectedGuideComponent");return i(),n("div",ue,[e("div",de,[ae,e("div",re,[e("div",ce,[g(u,{guides:d.guides,onGuideSelected:l.handleGuideSelected},null,8,["guides","onGuideSelected"])]),e("div",me,[e("ul",he,[d.selectedGuideTitle==""?(i(),n("li",ge,a(d.howToIntro1),1)):_("",!0),d.selectedGuideTitle==""?(i(),n("li",_e,a(d.howToIntro2),1)):_("",!0),d.selectedGuideTitle!=""?(i(),w(r,{key:2,guide:d.selectedGuide},null,8,["guide"])):_("",!0)])])])])])}const fe=c(le,[["render",pe]]);export{fe as default};
