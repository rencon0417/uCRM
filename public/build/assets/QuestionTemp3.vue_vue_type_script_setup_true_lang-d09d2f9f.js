import{d,f as n,g as o,k as e,t,F as u,p as _}from"./app-023dad9a.js";const p={class:"bg-white p-6 border border-gray-300 rounded-lg shadow-md"},g={class:"text-lg font-semibold mb-4"},m={class:"grid gap-2"},b={class:"font-semibold"},f={class:"flex justify-end text-gray-500 text-xs"},y=d({__name:"QuestionTemp3",props:{questionNumber:{},contents:{},labels:{},subject:{}},setup(c){const s=c;function i(r){switch(r){case 1:return"1〜5";case 2:return"6〜10";case 3:return"11〜15";default:return"16〜20"}}return(r,h)=>(n(),o("div",p,[e("h2",g," 問題"+t(i(s.questionNumber)),1),e("div",m,[(n(!0),o(u,null,_(s.contents,(l,a)=>(n(),o("div",{key:a,class:"grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]"},[e("span",b,t(s.labels[a])+"：",1),e("p",null,t(l),1)]))),128))]),e("div",f,t(s.subject),1)]))}});export{y as _};
