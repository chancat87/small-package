import{_ as D,d as $,i as f,r as C,o as t,c as n,a as s,b as B,l,H as S,p as g,q as I,u as F,g as a,F as k,E as h,m,e as v}from"./index.js?v=c1b13aa2";const b=e=>(g("data-v-f0f8da84"),e=e(),I(),e),E={class:"disk-item"},z={class:"disk-item_contanier"},N={class:"disk-item_icon"},w={class:"disk-item_name"},O=b(()=>s("div",{class:"auto"},null,-1)),V={class:"disk-item_used"},j={key:0,class:"disk-item_info"},q={class:"label-msg.warning"},M={key:1,class:"disk-item_info"},A=b(()=>s("div",{class:"auto"},null,-1)),H=$({__name:"item",props:{disk:{type:Object,required:!0}},setup(e){const c=e;f(()=>{var o;return((o=c.disk.childrens)==null?void 0:o.length)||0}),f(()=>{var u,r;let o=0;return(r=(u=c.disk)==null?void 0:u.childrens)==null||r.forEach(i=>{if(!i.mountPoint){const _=Number(i.sizeInt),x=(1<<30)*2;_>x&&o++}}),o});const d=()=>{S.OpenDisk({disk:c.disk})};return(o,u)=>{const r=C("icon-disk");return t(),n("div",E,[s("div",z,[s("div",N,[B(r)]),s("div",w,[s("span",null,l(e.disk.name)+" \u3010"+l(e.disk.size)+"\u3011"+l(e.disk.venderModel),1)]),O,s("div",V,[s("span",null,l(e.disk.used)+" / "+l(e.disk.total),1)])]),e.disk.errorInfo?(t(),n("div",j,[s("span",q,l(e.disk.errorInfo),1)])):(t(),n("div",M,[s("span",null,l(e.disk.path),1),A,s("a",{onClick:u[0]||(u[0]=i=>d())}," \u67E5\u770B ")]))])}}});var p=D(H,[["__scopeId","data-v-f0f8da84"]]);const y=e=>(g("data-v-bf0d8af0"),e=e(),I(),e),L={key:0,class:"ul-container"},P=y(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u7CFB\u7EDF\u78C1\u76D8")],-1)),G={class:"ul-container_body"},J={key:1,class:"ul-container"},K=y(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u5DF2\u6302\u8F7D\u78C1\u76D8")],-1)),Q={class:"ul-container_body"},R={key:2,class:"ul-container"},T=y(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u672A\u8BC6\u522B\u78C1\u76D8")],-1)),U={class:"ul-container_body"},W={key:3,class:"ul-container"},X=y(()=>s("div",{class:"ul-container_title"},[s("span",null,"raid")],-1)),Y={class:"ul-container_body"},Z=$({__name:"index",setup(e){const c=F(),d=f(()=>c.disk),o=f(()=>c.raid.disks);return(u,r)=>(t(),n("main",null,[a(d).rootDisks.length>0?(t(),n("ul",L,[P,s("div",G,[(t(!0),n(k,null,h(a(d).rootDisks,(i,_)=>(t(),v(p,{disk:i},null,8,["disk"]))),256))])])):m("",!0),a(d).mountedDisks.length>0?(t(),n("ul",J,[K,s("div",Q,[(t(!0),n(k,null,h(a(d).mountedDisks,(i,_)=>(t(),v(p,{disk:i},null,8,["disk"]))),256))])])):m("",!0),a(d).errorDisks.length>0?(t(),n("ul",R,[T,s("div",U,[(t(!0),n(k,null,h(a(d).errorDisks,(i,_)=>(t(),v(p,{disk:i},null,8,["disk"]))),256))])])):m("",!0),a(o).length>0?(t(),n("ul",W,[X,s("div",Y,[(t(!0),n(k,null,h(a(o),(i,_)=>(t(),v(p,{disk:i},null,8,["disk"]))),256))])])):m("",!0)]))}});var es=D(Z,[["__scopeId","data-v-bf0d8af0"]]);export{es as default};