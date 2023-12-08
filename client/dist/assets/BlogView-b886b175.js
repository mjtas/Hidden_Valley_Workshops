import{_ as f,S as y,r as w,o as n,c as o,d as e,F as c,f as g,j as m,v,k as _,e as k,n as u,t as p}from"./main-3071920e.js";const I="/assets/blog2-abf9c86b.png",x="/assets/blog-56245f1c.png",S={components:{SubscriptionForm:y},data(){return{subscribers:[],searchQuery:"",blog1Text:["Hello everyone! I am so excited to be launching my new business running practical skills workshops at Hidden Valley. It is amazing how much I enjoy spending time in my garden these days. When I first started out gardening over 10 years ago, garden time was a list of jobs I needed to get done in order to produce cheap and healthy food. In my new No Dig garden I garden to centre and ground myself, and simply being in it makes me happy. And who would have thought compost making would become such an engaging hobby?! Instead of bringing in my garden inputs I now make great compost myself - a very satisfying process indeed.","I have also been baking all of my family’s bread for the last 10 years - giving me plenty of time to develop an efficient method of baking artisan sourdough. I love giving my kids such delicious and nourishing bread, and they love eating it! I also really value the way bread baking is time spent being completely present and focused on the birth of the dough.","When I am not gardening, baking or looking after the kids I am busy doing a building project around the house somewhere. I like being able to build exactly what I want, when I want to, without having to rely on others to do it for me. I am really excited to introduce more women to building tools and skills so that they can gain enough confidence and know-how to do their own building projects too.","It will be great to share this special place with others, and I hope I can spread my enthusiasm for a more grounded way of life doing things for ourselves."],blog2Text:["November is my favourite month in the garden. Plants grow at a rapid rate with the warmer temperatures, there is so much promise and excitement for the season ahead, and the first crops are coming into the kitchen.","Less than 18 months ago the garden site was a pile of subsoil from the earthworks for our house, and it is amazing how well the soil is recovering with the No Dig method of gardening. After the first year weeds have been few and easy to spot when they are small, and the garden is a happy place. This is a great achievement, because spring can be awfully stressful for gardeners as weeds and the list of things to do can turn gardening into a list of jobs that need to get done, rather than the fulfilling and relaxing soul-charging activity which it should be.","My first spring gardening with a greenhouse has also been amazing. It is so much easier to grow all of my own seedlings in small module trays on the greenhouse bench instead of trying to grow them in the house or the open garden as I did last year. Success breeds confidence, and it is awfully satisfying having a constant supply of homegrown vegetable and flower seedlings to pop out into the garden.","I have been having wonderful dreams filled with piles of tomatoes and basil pesto. Brushing past the plants gives off that amazing tomato plant aroma, which sets me off into another daydream. Time flies by as I sit on my chair in the greenhouse, and the kids have learnt to look for me there when I go missing!","Happy gardening everyone!"]}},computed:{mainTextWithHighlights(){return this.mainText.map(a=>this.highlightSearchTerms(a,this.searchQuery))}},methods:{isHighlighted(a){if(!this.searchQuery)return!1;const s=new RegExp(this.searchQuery,"gi");return a.match(s)!==null},highlightSearchTerms(a,s){if(!s)return a;const l=new RegExp(s,"gi");return a.replace(l,d=>`<span class="highlight">${d}</span>`)},clearSearch(){this.searchQuery=""},submitForm(){this.subscribers.push({name:this.name,email:this.email}),console.log("Subscribers:",this.subscribers),this.name="",this.email=""}}},T={class:"main"},H={class:"main-container"},V=e("div",{class:"other-heading"},[e("h1",null,"Hidden Valley"),e("h2",null,"Blog")],-1),Q={class:"about-other"},j={class:"block"},B={class:"table-left"},F={class:"main-text"},N=e("h3",null,"November 2023",-1),z={class:"main-right"},D={class:"booking-container"},C=e("div",{class:"main-opaque"},[e("img",{class:"about-img",src:I,alt:"Hidden Valley"})],-1),E={class:"block"},W={class:"table-left"},q={class:"main-text"},A=e("h3",null,"October 2023",-1),L=e("div",{class:"main-right"},[e("div",{class:"main-opaque"},[e("img",{class:"about-img",src:x,alt:"Hidden Valley"})])],-1);function M(a,s,l,d,i,r){const b=w("SubscriptionForm");return n(),o("div",T,[e("div",H,[V,e("div",Q,[e("div",j,[e("div",B,[e("ul",F,[N,(n(!0),o(c,null,g(i.blog2Text,(t,h)=>(n(),o("li",{class:"main-li",key:h},[e("span",{class:u({highlight:r.isHighlighted(t)})},p(t),3)]))),128))])]),e("div",z,[e("div",D,[m(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>i.searchQuery=t),class:"search-input",placeholder:"Search for keywords"},null,512),[[v,i.searchQuery]]),m(e("button",{onClick:s[1]||(s[1]=(...t)=>r.clearSearch&&r.clearSearch(...t)),class:"clear-button"},"X",512),[[_,i.searchQuery]])]),k(b),C])]),e("div",E,[e("div",W,[e("ul",q,[A,(n(!0),o(c,null,g(i.blog1Text,(t,h)=>(n(),o("li",{class:"main-li",key:h},[e("span",{class:u({highlight:r.isHighlighted(t)})},p(t),3)]))),128))])]),L])])])])}const O=f(S,[["render",M]]);export{O as default};