import{b as d,f as s,g as l,i as f,k as t,e as i,n as a,t as u,z as c,l as _,F as b,D as p}from"./app-c9e1c146.js";import{_ as v}from"./ValidationEroors-e7471da9.js";const h=["onSubmit"],k=t("br",null,null,-1),x={key:0},y=t("br",null,null,-1),V={key:1},g=t("button",null,"送信",-1),N={__name:"Create",props:{errors:Object},setup(e){const n=d({title:null,content:null}),m=()=>{p.Inertia.post("/inertia",n)};return(B,o)=>(s(),l(b,null,[f(v,{errors:e.errors},null,8,["errors"]),t("form",{onSubmit:_(m,["prevent"])},[i(t("input",{type:"text",name:"title","onUpdate:modelValue":o[0]||(o[0]=r=>n.title=r)},null,512),[[a,n.title]]),k,e.errors.title?(s(),l("div",x,u(e.errors.title),1)):c("",!0),i(t("input",{type:"text",name:"content","onUpdate:modelValue":o[1]||(o[1]=r=>n.content=r)},null,512),[[a,n.content]]),y,e.errors.content?(s(),l("div",V,u(e.errors.content),1)):c("",!0),g],40,h)],64))}};export{N as default};