import{_ as m}from"./AuthenticatedLayout-f2166160.js";import{Z as g,i as n}from"./index.esm-25b40ae0.js";import{F as h}from"./FlashMessage-1f929cda.js";import{f as s,g as o,i as a,u as d,j as r,F as c,k as t,m as _,p as x,t as i,z as p}from"./app-669a8ac0.js";import"./ApplicationLogo-c7931a6a.js";import"./_plugin-vue_export-helper-c27b6911.js";const f=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"商品一覧",-1),y={class:"py-12"},b={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},w={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},k={class:"p-6 text-gray-900"},v={class:"text-gray-600 body-font"},F={class:"container px-5 py-8 mx-auto"},N={class:"flex pl-4 my-4 lg:w-2/3 w-full mx-auto"},V={class:"lg:w-2/3 w-full mx-auto overflow-auto"},B={class:"table-auto w-full text-left whitespace-no-wrap"},C=t("thead",null,[t("tr",null,[t("th",{class:"px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"},"ID"),t("th",{class:"px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"},"商品名"),t("th",{class:"px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"},"価格"),t("th",{class:"px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"},"ステータス")])],-1),D={class:"border-b-2 border-gray-200 px-4 py-3"},I={class:"border-b-2 border-gray-200 px-4 py-3"},j={class:"border-b-2 border-gray-200 px-4 py-3"},z={class:"border-b-2 border-gray-200 px-4 py-3"},A={key:0},E={key:1},G={__name:"Index",props:{items:Array},setup(u){return(l,L)=>(s(),o(c,null,[a(d(g),{title:"商品一覧"}),a(m,null,{header:r(()=>[f]),default:r(()=>[t("div",y,[t("div",b,[t("div",w,[t("div",k,[t("section",v,[t("div",F,[a(h),t("div",N,[a(d(n),{as:"button",href:l.route("items.create"),class:"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"},{default:r(()=>[_("商品登録")]),_:1},8,["href"])]),t("div",V,[t("table",B,[C,t("tbody",null,[(s(!0),o(c,null,x(u.items,e=>(s(),o("tr",{key:e.id},[t("td",D,[a(d(n),{class:"text-blue-400",href:l.route("items.show",{item:e.id})},{default:r(()=>[_(i(e.id),1)]),_:2},1032,["href"])]),t("td",I,i(e.name),1),t("td",j,i(e.price),1),t("td",z,[e.is_selling===1?(s(),o("span",A,"販売中")):p("",!0),e.is_selling===0?(s(),o("span",E,"停止中")):p("",!0)])]))),128))])])])])])])])])])]),_:1})],64))}};export{G as default};
