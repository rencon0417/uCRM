import{d as _,r as p,f as o,g as n,k as t,t as e,F as u,p as x}from"./app-04a54286.js";const b={class:"bg-white px-6 py-4 border border-gray-300 rounded-lg shadow-md"},m={class:"text-lg font-semibold mb-4"},h={class:"grid gap-2"},f={class:"font-semibold"},y={class:"flex justify-end text-gray-400 text-xxs lg:text-xs"},$={class:"flex justify-end text-gray-400 text-xxs lg:text-xs"},S=_({__name:"QuestionTemp1",props:{questionNumber:{},contents:{},title:{},subject:{}},setup(r){const s=r,c=p(["ア","イ","ウ"]),l=i=>c.value[i];return(i,a)=>(o(),n("div",b,[t("h2",m,"問題"+e(s.questionNumber),1),t("div",h,[(o(!0),n(u,null,x(s.contents,(d,g)=>(o(),n("div",{key:g,class:"grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]"},[t("span",f,e(l(g))+"：",1),t("p",null,e(d),1)]))),128))]),t("div",y,e(s.title),1),t("div",$,e(s.subject),1)]))}}),v={class:"text-lg font-semibold mb-4"},j={class:"grid gap-2"},w={class:"grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]"},N={class:"font-semibold"},k={class:"flex justify-end text-gray-400 text-xxs lg:text-xs"},q={class:"flex justify-end text-gray-400 text-xxs lg:text-xs"},V=_({__name:"QuestionTemp2",props:{questionNumber:{},contents:{},labels:{},title:{},subject:{}},setup(r){const s=r;return(c,l)=>(o(!0),n(u,null,x(s.contents,(i,a)=>(o(),n("div",{key:a,class:"bg-white px-6 py-4 border border-gray-300 rounded-lg shadow-md"},[t("h2",v,"問題"+e(a+c.questionNumber),1),t("div",j,[t("div",w,[t("span",N,e(s.labels[a])+"：",1),t("p",null,e(i),1)])]),t("div",k,e(s.title),1),t("div",q,e(s.subject),1)]))),128))}}),Q={class:"bg-white px-6 py-4 border border-gray-300 rounded-lg shadow-md"},B={class:"text-lg font-semibold mb-4"},T={class:"grid gap-2"},F={class:"font-semibold"},L={class:"flex justify-end text-gray-400 text-xxs lg:text-xs"},C={class:"flex justify-end text-gray-400 text-xxs lg:text-xs"},z=_({__name:"QuestionTemp3",props:{questionNumber:{},contents:{},labels:{},title:{},subject:{}},setup(r){const s=r;function c(l){switch(l){case 1:return"1〜5";case 2:return"6〜10";case 3:return"11〜15";default:return"16〜20"}}return(l,i)=>(o(),n("div",Q,[t("h2",B," 問題"+e(c(s.questionNumber)),1),t("div",T,[(o(!0),n(u,null,x(s.contents,(a,d)=>(o(),n("div",{key:d,class:"grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]"},[t("span",F,e(s.labels[d])+"：",1),t("p",null,e(a),1)]))),128))]),t("div",L,e(s.title),1),t("div",C,e(s.subject),1)]))}}),D={class:"max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg"},E={class:"text-2xl font-bold mb-2"},P={class:"text-gray-600"},A=_({__name:"Pagetitle",props:{title:{},description:{}},setup(r){const s=r;return(c,l)=>(o(),n("div",D,[t("h1",E,e(s.title),1),t("p",P,e(s.description),1)]))}});export{A as _,z as a,S as b,V as c};
