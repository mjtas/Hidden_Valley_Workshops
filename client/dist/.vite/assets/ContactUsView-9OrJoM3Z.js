import{_ as r,o as c,c as d,a as m,b as h,r as p,d as e,j as a,v as l,e as _}from"./main-D4LRtOTm.js";const f={},g={class:"block"},b=m('<ul class="main-text"><h2 class="black-h2">Refund Policy</h2><h3>Workshop Cancellations</h3><li class="main-li">We reserve the right to cancel any workshop due to low registration numbers or unforeseen circumstances. If we cancel a workshop, you can choose to receive a full refund or to attend another workshop of equal value.</li><h3>Weather Cancellations</h3><li class="main-li">If a workshop cannot take place due to inclement weather such as storms, heavy rain, strong winds or snow, we will schedule a replacement workshop on an alternative date. If you are unable to attend your workshop on the alternative date, you can choose to receive a gift voucher for a workshop of equal value.</li><h3>Change of Mind Cancellations</h3><li class="main-li">We do not provide a cash refund for a change of mind cancellation, but may provide a gift voucher to attend a workshop of equal value on a case by case basis.<br><br></li></ul>',1),v=[b];function y(o,s){return c(),d("div",g,v)}const w=r(f,[["render",y]]),k={components:{RefundComponent:w},data(){return{email:"",name:"",message:""}},mounted(){this.loadGoogleMapsScript()},methods:{submitForm(){if(!this.name||!this.email||!this.message){alert("Please fill in all fields.");return}h.post("https://hidden-valley-workshops.onrender.com/contact",{name:this.name,email:this.email,message:this.message}).then(o=>{alert(o.data.message)}).catch(o=>{console.error("Error:",o),alert("Message failed to send")}),this.name="",this.email="",this.message=""},loadGoogleMapsScript(){if(typeof google>"u"){const o=document.createElement("script");o.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeHpZjP8NDkgFWGMC-Ss90SO5rTMUrTF8&&callback=initMap",o.defer=!0,o.async=!0,o.onload=this.initMap,document.head.appendChild(o)}else this.initMap()},initMap(){const o={lat:-41.69140599172209,lng:146.72657868289832},s=new google.maps.Map(document.getElementById("map"),{zoom:7,center:o,mapId:"DEMO_MAP_ID"});new google.maps.Marker({position:o,map:s,title:"HiddenValley"})}}},M={class:"main"},x={class:"main-container"},C=e("div",{class:"other-heading"},[e("h1",null,"Hidden Valley"),e("h2",null,"Contact Us")],-1),V={class:"about-other"},W={class:"block"},I={class:"main-left"},E={class:"main-text"},S=e("h3",null,"Questions about any of our workshops?",-1),q={class:"main-li"},D=e("label",{for:"name"},"Name",-1),P=e("br",null,null,-1),U=e("br",null,null,-1),B=e("label",{for:"user_email"},"Email Address",-1),F=e("br",null,null,-1),H=e("br",null,null,-1),N=e("label",{for:"message"},"Your enquiry:",-1),R=e("br",null,null,-1),G=e("br",null,null,-1),j=e("br",null,null,-1),A=e("li",null,"Phone: 0456 855 652",-1),T=e("br",null,null,-1),z=e("li",null,"Email: bonnie@hiddenvalleyworkshops.com.au",-1),O=e("br",null,null,-1),L=e("div",{class:"main-right"},[e("div",{class:"main-opaque"},[e("div",{class:"map",id:"map"}),e("ul",{class:"main-text"},[e("h3",null,"Where is Hidden Valley?"),e("li",null,"Workshops are held at 12361 Highland Lakes Rd, Golden Valley (gate open during workshops only)."),e("br"),e("h3",null,"What should I bring to my workshop?"),e("li",null,"Please arrive for your workshop at 8:45am. We might only be 20 minutes drive from Deloraine but at an elevation of 750 metres above sea level we are usually 3 to 5 degrees colder. Bring an extra layer of warm clothes regardless of the time of year, and sun protection in summer as workshops will be held outdoors where possible.")])])],-1);function Q(o,s,Y,Z,n,i){const u=p("RefundComponent");return c(),d("div",M,[e("div",x,[C,e("div",V,[e("div",W,[e("div",I,[e("ul",E,[S,e("li",q,[D,P,a(e("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":s[0]||(s[0]=t=>n.name=t)},null,512),[[l,n.name]]),U,B,F,a(e("input",{type:"email",id:"user_email",name:"email",placeholder:"you@example.com","onUpdate:modelValue":s[1]||(s[1]=t=>n.email=t),required:""},null,512),[[l,n.email]]),H,N,R,a(e("textarea",{class:"message-input",id:"message",name:"message",rows:"4",cols:"50","onUpdate:modelValue":s[2]||(s[2]=t=>n.message=t)},null,512),[[l,n.message]]),G,e("button",{type:"button",class:"button button1",onClick:s[3]||(s[3]=(...t)=>i.submitForm&&i.submitForm(...t))},"Send")]),j,A,T,z,O])]),L]),_(u)])])])}const J=r(k,[["render",Q]]);export{J as default};
