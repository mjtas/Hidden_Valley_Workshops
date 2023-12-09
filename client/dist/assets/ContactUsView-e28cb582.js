import{_ as r,o as c,c as d,a as m,r as h,d as e,i as a,v as l,e as p}from"./main-84e9f824.js";const _={},f={class:"block"},b=m('<ul class="main-text"><h2 class="black-h2">Refund Policy</h2><h3>Workshop Cancellations</h3><li class="main-li">We reserve the right to cancel any workshop due to low registration numbers or unforeseen circumstances. If we cancel a workshop, you can choose to receive a full refund or to attend another workshop of equal value.</li><h3>Weather Cancellations</h3><li class="main-li">If a workshop cannot take place due to inclement weather such as storms, heavy rain, strong winds or snow, we will schedule a replacement workshop on an alternative date. If you are unable to attend your workshop on the alternative date, you can choose to receive a gift voucher for a workshop of equal value.</li><h3>Change of Mind Cancellations</h3><li class="main-li">We do not provide a cash refund for a change of mind cancellation, but may provide a gift voucher to attend a workshop of equal value on a case by case basis.<br><br></li></ul>',1),g=[b];function v(s,o){return c(),d("div",f,g)}const y=r(_,[["render",v]]),w={components:{RefundComponent:y},data(){return{email:"",name:"",message:"",emailsReceived:[]}},mounted(){this.loadGoogleMapsScript()},methods:{submitForm(){this.message?this.emailsReceived.push({name:this.name,email:this.email,message:this.message}):this.subscribers.push({name:this.name,email:this.email}),this.name="",this.email="",this.message=""},loadGoogleMapsScript(){if(typeof google>"u"){const s=document.createElement("script");s.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeHpZjP8NDkgFWGMC-Ss90SO5rTMUrTF8&&callback=initMap",s.defer=!0,s.async=!0,s.onload=this.initMap,document.head.appendChild(s)}else this.initMap()},initMap(){const s={lat:-41.69140599172209,lng:146.72657868289832},o=new google.maps.Map(document.getElementById("map"),{zoom:7,center:s,mapId:"DEMO_MAP_ID"});new google.maps.Marker({position:s,map:o,title:"HiddenValley"})}}},k={class:"main"},M={class:"main-container"},C=e("div",{class:"other-heading"},[e("h1",null,"Hidden Valley"),e("h2",null,"Contact Us")],-1),x={class:"about-other"},V={class:"block"},W={class:"main-left"},I={class:"main-text"},R=e("h3",null,"Questions about any of our workshops?",-1),S={class:"main-li"},q=e("label",{for:"name"},"Name",-1),D=e("br",null,null,-1),E=e("br",null,null,-1),U=e("label",{for:"user_email"},"Email Address",-1),B=e("br",null,null,-1),F=e("br",null,null,-1),H=e("label",{for:"message"},"Your enquiry:",-1),N=e("br",null,null,-1),P=e("br",null,null,-1),G=e("br",null,null,-1),A=e("li",null,"Phone: 0456 855 652",-1),T=e("br",null,null,-1),j=e("li",null,"Email: bonnie@hiddenvalleyworkshops.com.au",-1),z=e("br",null,null,-1),O=e("div",{class:"main-right"},[e("div",{class:"main-opaque"},[e("div",{class:"map",id:"map"}),e("ul",{class:"main-text"},[e("h3",null,"Where is Hidden Valley?"),e("li",null,"Workshops are held at 12361 Highland Lakes Rd, Golden Valley (gate open during workshops only)."),e("br"),e("h3",null,"What should I bring to my workshop?"),e("li",null,"Please arrive for your workshop at 8:45am. We might only be 20 minutes drive from Deloraine but at an elevation of 750 metres above sea level we are usually 3 to 5 degrees colder. Bring an extra layer of warm clothes regardless of the time of year, and sun protection in summer as workshops will be held outdoors where possible.")])])],-1);function L(s,o,Q,Y,t,i){const u=h("RefundComponent");return c(),d("div",k,[e("div",M,[C,e("div",x,[e("div",V,[e("div",W,[e("ul",I,[R,e("li",S,[q,D,a(e("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":o[0]||(o[0]=n=>t.name=n)},null,512),[[l,t.name]]),E,U,B,a(e("input",{type:"email",id:"user_email",name:"email",placeholder:"you@example.com","onUpdate:modelValue":o[1]||(o[1]=n=>t.email=n),required:""},null,512),[[l,t.email]]),F,H,N,a(e("textarea",{class:"message-input",id:"message",name:"message",rows:"4",cols:"50","onUpdate:modelValue":o[2]||(o[2]=n=>t.message=n)},null,512),[[l,t.message]]),P,e("button",{type:"button",class:"button button1",onClick:o[3]||(o[3]=(...n)=>i.submitForm&&i.submitForm(...n))},"Send")]),G,A,T,j,z])]),O]),p(u)])])])}const $=r(w,[["render",L]]);export{$ as default};
