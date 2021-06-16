import{d as t,r as e,c as i,a as n,w as o,b as s,o as a,t as l,T as r,e as c,f as u,F as d,g as p,h as m,i as f,v as h}from"./vendor.7198ae44.js";const v=t({name:"app",data:()=>({id:0,animation:{enter:{opacity:[1,0],translateX:[0,-300],scale:[1,.2]},leave:{opacity:0,height:0}}}),methods:{show(t,e=""){const i=`\n        This is notification text!\n        <br>\n        Date: ${new Date}\n      `;this.$notify({group:t,title:`Test ${e} notification #${this.id++}`,text:i,type:e,data:{randomNumber:Math.random()}})},clean(t){this.$notify({group:t,clean:!0})}}}),y={id:"app"},g=n("h2",null,[s(" Vue.js Notification "),n("br"),n("a",{href:"https://github.com/kyvg/vue3-notification/blob/master/README.md",target:"readme"},"Readme"),n("a",{href:"https://github.com/kyvg/vue3-notification/",target:"issues"},"Github")],-1),b={class:"custom-template"},x=n("div",{class:"custom-template-icon"},[n("i",{class:"icon ion-android-checkmark-circle"})],-1),w={class:"custom-template-content"},k={class:"custom-template-title"},C=n("i",{class:"icon ion-android-close"},null,-1),T={class:"content"},A=n("p",null," CSS animation: ",-1),N={class:"block"},E=n("i",{class:"icon ion-information-circled"},null,-1),$=s(" SUCCESS "),S=n("i",{class:"icon ion-alert-circled"},null,-1),L=s(" WARNING "),I=n("i",{class:"icon ion-close-circled"},null,-1),R=s(" ERROR "),O=n("p",null," Velocity animation: ",-1),D={class:"block"},M=n("i",{class:"icon ion-information-circled"},null,-1),H=s(" SUCCESS "),V=n("i",{class:"icon ion-alert-circled"},null,-1),_=s(" WARNING "),B=n("i",{class:"icon ion-close-circled"},null,-1),G=s(" ERROR "),W=n("p",null,"Custom style:",-1),j=n("p",null,"Custom template:",-1),F=n("p",null,null,-1),z=n("u",null,"clean all",-1),P=s(" top left "),U=n("p",null,null,-1);v.render=function(t,r,c,u,d,p){const m=e("notifications");return a(),i("div",y,[g,n(m,{group:"foo-css",position:"bottom left",speed:500}),n(m,{group:"foo-velocity",position:"bottom right","animation-type":"velocity",speed:500}),n(m,{group:"custom-style",position:"top center",classes:"n-light",max:3,width:400}),n(m,{group:"custom-template",duration:5e3,width:500,"animation-name":"v-fade-left",position:"top left"},{body:o((({item:e})=>[n("div",b,[x,n("div",w,[n("div",k,[s(l(e.title)+" ",1),n("p",null," Random number: "+l(e.data.randomNumber),1)]),n("div",{class:"custom-template-text",innerHTML:e.text},null,8,["innerHTML"])]),n("div",{class:"custom-template-close",onClick:r[1]||(r[1]=(...e)=>t.close&&t.close(...e))},[C])])])),_:1}),n(m,{group:"full-width",width:"100%"}),n("div",T,[A,n("div",N,[n("button",{class:"success",onClick:r[2]||(r[2]=e=>t.show("foo-css","success"))},[E,$]),n("button",{class:"warn",onClick:r[3]||(r[3]=e=>t.show("foo-css","warn"))},[S,L]),n("button",{class:"error",onClick:r[4]||(r[4]=e=>t.show("foo-css","error"))},[I,R])]),O,n("div",D,[n("button",{class:"success",onClick:r[5]||(r[5]=e=>t.show("foo-velocity","success"))},[M,H]),n("button",{class:"warn",onClick:r[6]||(r[6]=e=>t.show("foo-velocity","warn"))},[V,_]),n("button",{class:"error",onClick:r[7]||(r[7]=e=>t.show("foo-velocity","error"))},[B,G])]),n("div",null,[W,n("button",{onClick:r[8]||(r[8]=e=>t.show("custom-style"))}," top center (max=3) "),j,n("button",{onClick:r[9]||(r[9]=e=>t.show("custom-template"))}," show top left "),F,n("button",{onClick:r[10]||(r[10]=e=>t.clean("custom-template"))},[z,P]),U,n("button",{onClick:r[11]||(r[11]=e=>t.show("full-width"))}," show bottom (full width) ")])])])};const q={all:X=X||new Map,on:function(t,e){var i=X.get(t);i&&i.push(e)||X.set(t,[e])},off:function(t,e){var i=X.get(t);i&&i.splice(i.indexOf(e)>>>0,1)},emit:function(t,e){(X.get(t)||[]).slice().map((function(t){t(e)})),(X.get("*")||[]).slice().map((function(i){i(t,e)}))}};var X;const J=new Map,K={x:["left","center","right"],y:["top","bottom"]},Q=(Y=0,()=>Y++);var Y;class Z{constructor(t,e,i){this.remaining=e,this.callback=t,this.notifyItem=i,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}var tt={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:t=>({height:[t.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},et=t({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(t,e){this.$emit("enter",{el:t,complete:e})},leave(t,e){this.$emit("leave",{el:t,complete:e})},afterLeave(){this.$emit("after-leave")}}});et.render=function(t,e,n,s,l,c){return a(),i(r,{tag:"span",css:!1,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.afterLeave},{default:o((()=>[u(t.$slots,"default")])),_:3},8,["onEnter","onLeave","onAfterLeave"])},et.__file="src/VelocityGroup.vue";var it=t({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});it.render=function(t,e,n,s,l,c){return a(),i(r,{tag:"span",name:t.name},{default:o((()=>[u(t.$slots,"default")])),_:3},8,["name"])},it.__file="src/CssGroup.vue";const nt=[{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+px$")},{name:"%",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+%$")},{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+$")}],ot=t=>{switch(typeof t){case"number":return{type:"px",value:t};case"string":return(t=>{if("auto"===t)return{type:t,value:0};for(let e=0;e<nt.length;e++){const i=nt[e];if(i.regexp.test(t))return{type:i.name,value:parseFloat(t)}}return{type:"",value:t}})(t);default:return{type:"",value:t}}},st=0,at=2;var lt=t({name:"notifications",components:{VelocityGroup:et,CssGroup:it},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:tt.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:tt.velocityAnimation},animationName:{type:String,default:tt.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data:()=>({list:[],velocity:J.get("velocity"),timerControl:null}),computed:{actualWidth(){return ot(this.width)},isVA(){return"velocity"===this.animationType},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:t,y:e}=(t=>{"string"==typeof t&&(t=(t=>"string"!=typeof t?[]:t.split(/\s+/gi).filter((t=>t)))(t));let e=null,i=null;return t.forEach((t=>{-1!==K.y.indexOf(t)&&(i=t),-1!==K.x.indexOf(t)&&(e=t)})),{x:e,y:i}})(this.position),i=this.actualWidth.value,n=this.actualWidth.type,o={width:i+n};return e&&(o[e]="0px"),t&&("center"===t?o.left=`calc(50% - ${+i/2}${n})`:o[t]="0px"),o},active(){return this.list.filter((t=>t.state!==at))},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){q.on("add",this.addItem),q.on("close",this.closeItem)},methods:{destroyIfNecessary(t){this.$emit("click",t),this.closeOnClick&&this.destroy(t)},pauseTimeout(){var t;this.pauseOnHover&&(null===(t=this.timerControl)||void 0===t||t.pause())},resumeTimeout(){var t;this.pauseOnHover&&(null===(t=this.timerControl)||void 0===t||t.resume())},addItem(t={}){if(t.group||(t.group=""),t.data||(t.data={}),this.group!==t.group)return;if(t.clean||t.clear)return void this.destroyAll();const e="number"==typeof t.duration?t.duration:this.duration,i="number"==typeof t.speed?t.speed:this.speed,n="boolean"==typeof t.ignoreDuplicates?t.ignoreDuplicates:this.ignoreDuplicates,{title:o,text:s,type:a,data:l,id:r}=t,c={id:r||Q(),title:o,text:s,type:a,state:st,speed:i,length:e+2*i,data:l};e>=0&&(this.timerControl=new Z((()=>this.destroy(c)),c.length,c));const u=this.reverse?!this.botToTop:this.botToTop;let d=-1;const p=this.active.some((e=>e.title===t.title&&e.text===t.text));(!n||!p)&&(u?(this.list.push(c),this.active.length>this.max&&(d=0)):(this.list.unshift(c),this.active.length>this.max&&(d=this.active.length-1)),-1!==d&&this.destroy(this.active[d]))},closeItem(t){this.destroyById(t)},notifyClass(t){var e;return["vue-notification-template",this.classes,null!==(e=t.type)&&void 0!==e?e:""]},notifyWrapperStyle(t){return this.isVA?void 0:{transition:`all ${t.speed}ms`}},destroy(t){clearTimeout(t.timer),t.state=at,this.isVA||this.clean(),this.$emit("destroy",t)},destroyById(t){const e=this.list.find((e=>e.id===t));e&&this.destroy(e)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(t,e){var i;const n=null===(i=this.animation)||void 0===i?void 0:i[t];return"function"==typeof n?n.call(this,e):n},enter(t,e){if(!this.isVA)return;const i=this.getAnimation("enter",t);this.velocity(t,i,{duration:this.speed,complete:e})},leave(t,e){if(!this.isVA)return;const i=this.getAnimation("leave",t);this.velocity(t,i,{duration:this.speed,complete:e})},clean(){this.list=this.list.filter((t=>t.state!==at))}}});!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}("\n.vue-notification-group {\n  display: block;\n  position: fixed;\n  z-index: 5000;\n}\n.vue-notification-wrapper {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.notification-title {\n  font-weight: 600;\n}\n.vue-notification-template {\n  display: block;\n  box-sizing: border-box;\n  background: white;\n  text-align: left;\n}\n.vue-notification {\n  display: block;\n  box-sizing: border-box;\n  text-align: left;\n  font-size: 12px;\n  padding: 10px;\n  margin: 0 5px 5px;\n\n  color: white;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n}\n.vue-notification.warn {\n  background: #ffb648;\n  border-left-color: #f48a06;\n}\n.vue-notification.error {\n  background: #E54D42;\n  border-left-color: #B82E24;\n}\n.vue-notification.success {\n  background: #68CD86;\n  border-left-color: #42A85F;\n}\n.vn-fade-enter-active, .vn-fade-leave-active, .vn-fade-move  {\n  transition: all .5s;\n}\n.vn-fade-enter-from, .vn-fade-leave-to {\n  opacity: 0;\n}\n\n"),lt.render=function(t,e,s,l,r,f){return a(),i("div",{class:"vue-notification-group",style:t.styles},[(a(),i(c(t.componentName),{name:t.animationName,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.clean},{default:o((()=>[(a(!0),i(d,null,p(t.active,(o=>(a(),i("div",{key:o.id,class:"vue-notification-wrapper",style:t.notifyWrapperStyle(o),"data-id":o.id,onMouseenter:e[1]||(e[1]=(...e)=>t.pauseTimeout&&t.pauseTimeout(...e)),onMouseleave:e[2]||(e[2]=(...e)=>t.resumeTimeout&&t.resumeTimeout(...e))},[u(t.$slots,"body",{class:[t.classes,o.type],item:o,close:()=>t.destroy(o)},(()=>[m(" Default slot template "),n("div",{class:t.notifyClass(o),onClick:e=>t.destroyIfNecessary(o)},[o.title?(a(),i("div",{key:0,class:"notification-title",innerHTML:o.title},null,8,["innerHTML"])):m("v-if",!0),n("div",{class:"notification-content",innerHTML:o.text},null,8,["innerHTML"])],10,["onClick"])]))],44,["data-id"])))),128))])),_:3},8,["name","onEnter","onLeave","onAfterLeave"]))],4)},lt.__file="src/Notifications.vue";const rt=t=>{"string"==typeof t&&(t={title:"",text:t}),"object"==typeof t&&q.emit("add",t)};rt.close=function(t){q.emit("close",t)};var ct={install:function(t,e={}){Object.entries(e).forEach((t=>J.set(...t)));const i=e.name||"notify";t.config.globalProperties["$"+i]=rt,t.component(e.componentName||"notifications",lt)}};const ut=f(v);ut.use(ct,{velocity:h}),ut.mount("#app");
