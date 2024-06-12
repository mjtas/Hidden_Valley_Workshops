import{_ as r,a as d,b as u,r as h,c as m,d as e,j as l,v as n,e as p,o as _}from"./main-Bom0d8nR.js";const f={},g=d('<div class="block"><ul class="main-text"><h2 class="black-h2">Child Entry</h2><li class="main-li">We advise that, unless marked child-friendly, our workshops are only really suitable for 12 years of age and upwards. We put these guidelines in place for the safety, comfort and enjoyment of all our guests.</li><li class="main-li">All attendees must have a valid ticket. Each adult ticket for child-friendly workshops includes a free ticket for a child between the ages of 6 to 16.</li><li class="main-li">Note that &#39;Bring a Friend&#39; tickets allow two people to attend a workshop for a discounted price.</li></ul></div><div class="block"><ul class="main-text"><h2 class="black-h2">Refund Policy</h2><h3>Workshop Cancellations</h3><li class="main-li">We reserve the right to cancel any workshop due to low registration numbers or unforeseen circumstances. If we cancel a workshop, you can choose to receive a full refund or to attend another workshop of equal value.</li><h3>Weather Cancellations</h3><li class="main-li">If a workshop cannot take place due to inclement weather such as storms, heavy rain, strong winds or snow, we will schedule a replacement workshop on an alternative date. If you are unable to attend your workshop on the alternative date, you can choose to receive a gift voucher for a workshop of equal value.</li><h3>Change of Mind Cancellations</h3><li class="main-li">We do not provide a cash refund for a change of mind cancellation, but may provide a gift voucher to attend a workshop of equal value on a case by case basis.<br><br></li></ul></div>',2);function b(o,s){return g}const y=r(f,[["render",b]]),v={components:{RefundComponent:y},data(){return{email:"",name:"",message:""}},mounted(){this.loadGoogleMapsScript()},methods:{submitForm(){if(!this.name||!this.email||!this.message){alert("Please fill in all fields.");return}u.post("https://hidden-valley-workshops.onrender.com/contact",{name:this.name,email:this.email,message:this.message}).then(o=>{alert(o.data.message)}).catch(o=>{console.error("Error:",o),alert("Message failed to send")}),this.name="",this.email="",this.message=""},loadGoogleMapsScript(){if(typeof google>"u"){const o=document.createElement("script");o.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeHpZjP8NDkgFWGMC-Ss90SO5rTMUrTF8&&callback=initMap",o.defer=!0,o.async=!0,o.onload=this.initMap,document.head.appendChild(o)}else this.initMap()},initMap(){const o={lat:-41.69140599172209,lng:146.72657868289832},s=new google.maps.Map(document.getElementById("map"),{zoom:7,center:o,mapId:"DEMO_MAP_ID"});new google.maps.Marker({position:o,map:s,title:"HiddenValley"})}}},k={class:"main"},w={class:"main-container"},M=e("div",{class:"other-heading"},[e("h1",null,"Hidden Valley"),e("h2",null,"Contact Us")],-1),x={class:"about-other"},C={class:"block"},V={class:"main-left"},W={class:"main-text"},E=e("h3",null,"Questions about any of our workshops?",-1),I={class:"main-li"},S=e("label",{for:"name"},"Name",-1),q=e("br",null,null,-1),B=e("br",null,null,-1),D=e("label",{for:"user_email"},"Email Address",-1),F=e("br",null,null,-1),N=e("br",null,null,-1),P=e("label",{for:"message"},"Your enquiry:",-1),U=e("br",null,null,-1),H=e("br",null,null,-1),R=e("br",null,null,-1),j=e("li",null,"Phone: 0456 855 652",-1),A=e("br",null,null,-1),G=e("li",null,"Email: bonnie@hiddenvalleyworkshops.com.au",-1),T=e("br",null,null,-1),z=e("div",{class:"main-right"},[e("div",{class:"main-opaque"},[e("div",{class:"map",id:"map"}),e("ul",{class:"main-text"},[e("h3",null,"Where is Hidden Valley?"),e("li",null,"Workshops are held at 12361 Highland Lakes Rd, Golden Valley (gate open during workshops only)."),e("br"),e("h3",null,"What should I bring to my workshop?"),e("li",null,"Please arrive for your workshop at 8:45am. We might only be 20 minutes drive from Deloraine but at an elevation of 750 metres above sea level we are usually 3 to 5 degrees colder. Bring an extra layer of warm clothes regardless of the time of year, and sun protection in summer as workshops will be held outdoors where possible.")])])],-1);function O(o,s,L,Q,t,i){const c=h("RefundComponent");return _(),m("div",k,[e("div",w,[M,e("div",x,[e("div",C,[e("div",V,[e("ul",W,[E,e("li",I,[S,q,l(e("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":s[0]||(s[0]=a=>t.name=a)},null,512),[[n,t.name]]),B,D,F,l(e("input",{type:"email",id:"user_email",name:"email",placeholder:"you@example.com","onUpdate:modelValue":s[1]||(s[1]=a=>t.email=a),required:""},null,512),[[n,t.email]]),N,P,U,l(e("textarea",{class:"message-input",id:"message",name:"message",rows:"4",cols:"50","onUpdate:modelValue":s[2]||(s[2]=a=>t.message=a)},null,512),[[n,t.message]]),H,e("button",{type:"button",class:"button button1",onClick:s[3]||(s[3]=(...a)=>i.submitForm&&i.submitForm(...a))},"Send")]),R,j,A,G,T])]),z]),p(c)])])])}const Z=r(v,[["render",O]]);export{Z as default};
