import{b as g,f as p,g as _,i as n,u as f,j as m,F as x,k as e,l as b,e as l,n as a,C as c,D as v}from"./app-ce539fe8.js";import{_ as y}from"./AuthenticatedLayout-5f409836.js";import{Z as h}from"./index.esm-c3538ede.js";import{_ as w}from"./ValidationEroors-daad39a6.js";import"./ApplicationLogo-08f2214c.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"商品編集",-1),U={class:"py-12"},j={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},B={class:"p-6 text-gray-900"},M={class:"text-gray-600 body-font relative"},$={class:"container px-5 py-8 mx-auto"},C={class:"lg:w-1/2 md:w-2/3 mx-auto"},D={class:"flex flex-wrap -m-2"},E={class:"p-2 w-full"},F={class:"relative"},I=e("label",{for:"name",class:"leading-7 text-sm text-gray-600"},"商品名",-1),N={class:"p-2 w-full"},O={class:"relative"},z=e("label",{for:"memo",class:"leading-7 text-sm text-gray-600"},"メモ",-1),R={class:"p-2 w-full"},S={class:"relative"},T=e("label",{for:"price",class:"leading-7 text-sm text-gray-600"},"価格",-1),Z={class:"p-2 w-full"},q={class:"relative"},A=e("label",{for:"is_selling",class:"leading-7 text-gray-600"},"販売状況",-1),G=e("label",{class:"ml-2 mr-4"},"販売中",-1),H=e("label",{class:"ml-2 mr-4"},"停止中",-1),J=e("div",{class:"p-2 w-full"},[e("button",{class:"flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"更新する")],-1),Y={__name:"Edit",props:{item:Object,errors:Object},setup(r){const i=r,s=g({id:i.item.id,name:i.item.name,memo:i.item.memo,price:i.item.price,is_selling:i.item.is_selling}),u=d=>{v.Inertia.put(route("items.update",{item:d}),s)};return(d,t)=>(p(),_(x,null,[n(f(h),{title:"商品編集"}),n(y,null,{header:m(()=>[V]),default:m(()=>[e("div",U,[e("div",j,[e("div",k,[e("div",B,[n(w,{errors:r.errors},null,8,["errors"]),e("section",M,[e("form",{onSubmit:t[5]||(t[5]=b(o=>u(s.id),["prevent"]))},[e("div",$,[e("div",C,[e("div",D,[e("div",E,[e("div",F,[I,l(e("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=o=>s.name=o),class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[a,s.name]])])]),e("div",N,[e("div",O,[z,l(e("textarea",{id:"memo",name:"memo","onUpdate:modelValue":t[1]||(t[1]=o=>s.memo=o),class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"},null,512),[[a,s.memo]])])]),e("div",R,[e("div",S,[T,l(e("input",{type:"number",id:"price",name:"price","onUpdate:modelValue":t[2]||(t[2]=o=>s.price=o),class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[a,s.price]])])]),e("div",Z,[e("div",q,[A,l(e("input",{type:"radio",id:"is_selling",name:"is_selling","onUpdate:modelValue":t[3]||(t[3]=o=>s.is_selling=o),value:"1",class:"ml-2"},null,512),[[c,s.is_selling]]),G,l(e("input",{type:"radio",id:"is_selling",name:"is_selling","onUpdate:modelValue":t[4]||(t[4]=o=>s.is_selling=o),value:"0",class:"ml-2"},null,512),[[c,s.is_selling]]),H])]),J])])])],32)])])])])])]),_:1})],64))}};export{Y as default};