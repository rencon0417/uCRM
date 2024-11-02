import{b as c,f as u,g as m,i,u as g,j as a,F as p,k as e,l as _,e as n,n as r,D as f}from"./app-669a8ac0.js";import{_ as x}from"./AuthenticatedLayout-f2166160.js";import{Z as b}from"./index.esm-25b40ae0.js";import{_ as h}from"./ValidationEroors-f0ed6c79.js";import"./ApplicationLogo-c7931a6a.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"商品登録",-1),v={class:"py-12"},w={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},V={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},k={class:"p-6 text-gray-900"},B={class:"text-gray-600 body-font relative"},U=["onSubmit"],j={class:"container px-5 py-8 mx-auto"},C={class:"lg:w-1/2 md:w-2/3 mx-auto"},D={class:"flex flex-wrap -m-2"},F={class:"p-2 w-full"},I={class:"relative"},M=e("label",{for:"name",class:"leading-7 text-sm text-gray-600"},"商品名",-1),N={class:"p-2 w-full"},S={class:"relative"},$=e("label",{for:"memo",class:"leading-7 text-sm text-gray-600"},"メモ",-1),z={class:"p-2 w-full"},E={class:"relative"},O=e("label",{for:"price",class:"leading-7 text-sm text-gray-600"},"価格",-1),T=e("div",{class:"p-2 w-full"},[e("button",{class:"flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"商品登録")],-1),L={__name:"Create",props:{errors:Object},setup(l){const t=c({name:null,memo:null,price:null}),d=()=>{f.Inertia.post("/items",t)};return(Z,o)=>(u(),m(p,null,[i(g(b),{title:"商品登録"}),i(x,null,{header:a(()=>[y]),default:a(()=>[e("div",v,[e("div",w,[e("div",V,[e("div",k,[i(h,{errors:l.errors},null,8,["errors"]),e("section",B,[e("form",{onSubmit:_(d,["prevent"])},[e("div",j,[e("div",C,[e("div",D,[e("div",F,[e("div",I,[M,n(e("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":o[0]||(o[0]=s=>t.name=s),class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[r,t.name]])])]),e("div",N,[e("div",S,[$,n(e("textarea",{id:"memo",name:"memo","onUpdate:modelValue":o[1]||(o[1]=s=>t.memo=s),class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"},null,512),[[r,t.memo]])])]),e("div",z,[e("div",E,[O,n(e("input",{type:"number",id:"price",name:"price","onUpdate:modelValue":o[2]||(o[2]=s=>t.price=s),class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[r,t.price]])])]),T])])])],40,U)])])])])])]),_:1})],64))}};export{L as default};
