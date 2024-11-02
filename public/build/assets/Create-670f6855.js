import{b as u,f as m,g as _,i,u as b,j as d,F as g,k as o,l as p,e as n,J as r,n as l,D as f}from"./app-669a8ac0.js";import{_ as y}from"./AuthenticatedLayout-f2166160.js";import{Z as h}from"./index.esm-25b40ae0.js";import{_ as x}from"./ValidationEroors-f0ed6c79.js";import{F as w}from"./FlashMessage-1f929cda.js";import"./ApplicationLogo-c7931a6a.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=o("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," 問題追加 ",-1),k={class:"py-12"},V={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},j={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},S={class:"p-6 text-gray-900"},U={class:"flex"},q=["src"],B={class:"mx-auto max-w-xl"},F=["onSubmit"],M={class:"grid grid-cols-12 gap-5"},C={class:"col-span-6"},D=o("label",{for:"subject",class:"mb-1 block text-sm font-medium text-gray-700"},"科目名",-1),N=o("option",null,"生命保険総論",-1),$=o("option",null,"生命保険計理",-1),z=o("option",null,"危険選択",-1),A=o("option",null,"約款と法律",-1),E=o("option",null,"生命保険会計",-1),I=o("option",null,"生命保険と営業",-1),J=o("option",null,"生命保険と税法",-1),O=o("option",null,"資産運用",-1),Q=[N,$,z,A,E,I,J,O],T={class:"col-span-3"},Z=o("label",{for:"year",class:"mb-1 block text-sm font-medium text-gray-700"},"年度",-1),G=o("option",null,"2022",-1),H=o("option",null,"2021",-1),K=o("option",null,"2020",-1),L=o("option",null,"2019",-1),P=o("option",null,"2018",-1),R=[G,H,K,L,P],W={class:"col-span-3"},X=o("label",{for:"form",class:"mb-1 block text-sm font-medium text-gray-700"},"フォーム",-1),Y=o("option",null,"A",-1),oo=o("option",null,"B",-1),so=o("option",null,"C",-1),to=o("option",null,"その他",-1),eo=[Y,oo,so,to],no={class:"col-span-4"},io=o("label",{for:"question_number",class:"mb-1 block text-sm font-medium text-gray-700"},"問題番号",-1),ro={class:"col-span-8"},lo=o("label",{for:"answer",class:"mb-1 block text-sm font-medium text-gray-700"},"解答",-1),ao={class:"col-span-12"},co=o("label",{for:"explanation",class:"mb-1 block text-sm font-medium text-gray-700"},"解説",-1),uo=o("div",{class:"col-span-12"},[o("button",{class:"rounded-lg border border-sky-400 bg-sky-400 px-5 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all hover:border-sky-600 hover:bg-sky-600 focus:ring focus:ring-sky-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"},"問題を追加")],-1),xo={__name:"Create",props:{errors:Object,image1:String,image2:String,image3:String,image4:String},setup(a){const s=u({subject:null,year:null,form:null,question_number:null,answer:null,explanation:null}),c=()=>{f.Inertia.post(route("seihokozas.store"),s)};return(mo,t)=>(m(),_(g,null,[i(b(h),{title:"問題追加"}),i(y,null,{header:d(()=>[v]),default:d(()=>[o("div",k,[o("div",V,[o("div",j,[o("div",S,[i(x,{errors:a.errors},null,8,["errors"]),i(w),o("div",U,[o("img",{src:a.image2,class:"h-20 w-20"},null,8,q)]),o("div",B,[o("form",{onSubmit:p(c,["prevent"]),class:"space-y-5"},[o("div",M,[o("div",C,[D,n(o("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.subject=e),id:"subject",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},Q,512),[[r,s.subject]])]),o("div",T,[Z,n(o("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.year=e),id:"year",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},R,512),[[r,s.year]])]),o("div",W,[X,n(o("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.form=e),id:"form",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},eo,512),[[r,s.form]])]),o("div",no,[io,n(o("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.question_number=e),type:"number",id:"question_number",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"},null,512),[[l,s.question_number]])]),o("div",ro,[lo,n(o("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>s.answer=e),type:"text",id:"answer",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"},null,512),[[l,s.answer]])]),o("div",ao,[co,n(o("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>s.explanation=e),id:"explanation",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50",rows:"5"},null,512),[[l,s.explanation]])]),uo])],40,F)])])])])])]),_:1})],64))}};export{xo as default};
