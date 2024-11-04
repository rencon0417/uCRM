import{r as a,b as l,f as u,g as d,i as o,u as c,j as i,F as g,k as t,l as p,D as f}from"./app-ae986d94.js";import{_ as b}from"./AuthenticatedLayout-fb44769f.js";import{Z as x}from"./index.esm-8b4e3555.js";import{_ as y}from"./ValidationEroors-02c260ef.js";import"./ApplicationLogo-3d419f4a.js";import"./_plugin-vue_export-helper-c27b6911.js";const m=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," 問題追加 ",-1),_={class:"py-12"},v={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},h={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},w={class:"p-6 text-gray-900"},q={class:"text-gray-600 body-font relative"},k=["onSubmit"],B=t("div",{class:"container px-5 py-8 mx-auto"},[t("div",{class:"lg:w-1/2 md:w-2/3 mx-auto"},[t("div",{class:"flex flex-wrap -m-2"},[t("div",{class:"p-2 w-full"},[t("div",{class:"relative"},[t("label",{for:"date",class:"leading-7 text-sm text-gray-600"},"科目名"),t("select",{type:"date",id:"date",name:"date",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},[t("option",null,"生命保険総論"),t("option",null,"生命保険計理"),t("option",null,"危険選択"),t("option",null,"約款と法律"),t("option",null,"生命保険会計"),t("option",null,"生命保険と営業"),t("option",null,"生命保険と税法"),t("option",null,"資産運用")])])]),t("div",{class:"p-2 w-full"},[t("div",{class:"relative"},[t("label",{for:"",class:"leading-7 text-sm text-gray-600"},"年度"),t("select",{class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},[t("option",null,"2022年度"),t("option",null,"2021年度"),t("option",null,"2020年度")])])]),t("div",{class:"p-2 w-full"},[t("div",{class:"relative"},[t("label",{for:"",class:"leading-7 text-sm text-gray-600"},"フォーム"),t("select",{class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},[t("option",null,"フォームA"),t("option",null,"フォームB"),t("option",null,"フォームC")])])]),t("div",{class:"p-2 w-full"},[t("div",{class:"relative"},[t("label",{for:"question_number",class:"leading-7 text-sm text-gray-600"},"問題番号"),t("input",{type:"integer",name:"question_number",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})])]),t("div",{class:"p-2 w-full"},[t("div",{class:"relative"},[t("label",{for:"question_number",class:"leading-7 text-sm text-gray-600"},"解答"),t("input",{type:"string",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})])]),t("div",{class:"p-2 w-full"},[t("div",{class:"relative"},[t("label",{for:"question_number",class:"leading-7 text-sm text-gray-600"},"解説"),t("input",{type:"text",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})])]),t("div",{class:"p-2 w-full items-center"},[t("button",{class:"flex mx-auto my-2 text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"問題を追加する")])])])],-1),C=[B],$={__name:"Createbk",props:{errors:Object,items:Array},setup(r){a([]);const s=l({date:null,customer_id:null,status:!0,items:[]}),n=()=>{itemList.value.forEach(e=>{e.quantity>0&&s.items.push({id:e.id,quantity:e.quantity})}),f.Inertia.post(route("purchases.store"),s)};return(e,j)=>(u(),d(g,null,[o(c(x),{title:"問題追加"}),o(b,null,{header:i(()=>[m]),default:i(()=>[t("div",_,[t("div",v,[t("div",h,[t("div",w,[o(y,{errors:r.errors},null,8,["errors"]),t("section",q,[t("form",{onSubmit:p(n,["prevent"])},C,40,k)])])])])])]),_:1})],64))}};export{$ as default};