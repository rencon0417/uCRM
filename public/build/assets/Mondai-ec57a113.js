import{Z as C,i as x}from"./index.esm-cc42a9f2.js";import{r as a,f as r,g as i,i as c,u as d,k as e,j as p,t,F as f,p as z,z as A,N,m}from"./app-2c0b2f1d.js";const V={class:"py-6"},S={class:"container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full"},F={class:"text-xl font-bold"},B={class:"space-x-12 hidden md:flex items-center"},E=e("a",{href:"#exam8",class:"hover:text-selected-text transition-all duration-300"},"8月試験",-1),Q=e("a",{href:"#exam10",class:"hover:text-selected-text transition-all duration-300"},"10月試験",-1),$=e("a",{href:"#exam12",class:"hover:text-selected-text transition-all duration-300"},"12月試験",-1),D=e("a",{href:"#exam2",class:"hover:text-selected-text transition-all duration-300"},"2月試験",-1),I={class:"px-6 py-2 bg-purple-400 font-bold rounded-lg hover:bg-purple-600 transition-all duration-300"},L=e("div",{class:"md:hidden"},[e("i",{class:"fa-solid fa-bars"})],-1),M={id:"",class:"container mt-24 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"},O={class:"w-full"},T={class:"secondary-title"},W={class:"text-2xl font-bold pt-4 relative"},Z={class:"secondary-paragraph"},G={key:0,class:"grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4"},H=["onClick"],J={id:"",class:"container mt-24 flex justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full"},K={key:0},P={class:"text-xl font-bold pt-4 relative"},R={class:"text-xl font-bold pt-4 relative"},U=e("span",null,"次の問題",-1),X=[U],Y={id:"",class:"container mt-24 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"},ee={class:"w-full"},te={class:"secondary-title"},se=e("h3",{class:"text-2xl font-bold pt-4 relative"}," 最終結果 ",-1),oe={class:"secondary-paragraph"},ne=N('<table class="border-collapse w-full mx-auto mb-4"><thead><tr><th class="border p-2">問題番号</th><th class="border p-2">あなたの解答</th><th class="border p-2">正解</th><th class="border p-2">結果</th><th class="border p-2">解説</th></tr></thead><tbody></tbody></table>',1),le={class:"text-lg mb-2 text-center"},ae={class:"text-center result text-lg font-bold mb-4"},re=e("span",null,"スタート画面へ戻る",-1),ie=[re],he={__name:"Mondai",props:{errors:Object,questions:Array},setup(o){const _=o,l=a("quiz");a(0);const s=a(0),b=a(null),v=["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ"],g=a([""]),y=n=>{g.value.push(n),l.value="answer"},w=()=>{s.value<_.questions[0].length-1?(s.value++,b.value=null,l.value="quiz"):l.value="result"},q=()=>{l.value="start",s.value=0,quiz.userAnswers.value=[]},k=n=>String(n).replace(/[0-9]/g,function(u){return String.fromCharCode(u.charCodeAt(0)+65248)});return(n,u)=>(r(),i(f,null,[c(d(C),{title:"生命保険講座｜問題"}),e("header",V,[e("div",S,[e("div",F,[c(d(x),{href:n.route("seihoquiz.index")},{default:p(()=>[m("生命保険講座.com")]),_:1},8,["href"])]),e("div",B,[E,Q,$,D,e("button",I,[c(d(x),{href:n.route("seihokozas.index")},{default:p(()=>[m("一覧画面")]),_:1},8,["href"])])]),L])]),e("div",M,[e("section",O,[e("h2",T,t(o.questions[0][s.value].subject),1),e("h3",W,t(`第${k(s.value+1)}問`)+" ",1),e("p",Z,t(o.questions[0][s.value].year)+"年度／フォーム"+t(o.questions[0][s.value].form),1),(l.value,r(),i("div",G,[(r(),i(f,null,z(v,(j,h)=>e("button",{class:"px-16 py-3 bg-purple-400 font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-2",key:h,onClick:ce=>y(h)},t(j),9,H)),64))]))])]),e("div",J,[l.value==="answer"?(r(),i("section",K,[e("h3",P," 正解：　"+t(o.questions[0][s.value].answer),1),e("h3",R," 解説：　"+t(o.questions[0][s.value].explanation),1),e("div",{class:"flex items-center justify-center mb-4"},[e("button",{onClick:w,class:"px-16 py-3 bg-purple-400 font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10"},X)])])):A("",!0)]),e("div",Y,[e("section",ee,[e("h2",te,t(o.questions[0][s.value].subject),1),se,e("p",oe,t(o.questions[0][s.value].year)+"年度／フォーム"+t(o.questions[0][s.value].form),1),ne,e("p",le,"正答率："+t(n.correctAnswers)+"問正解 / "+t(o.questions[0].length)+"問中",1),e("p",ae,t(n.correctAnswers>=3?"合格！":"もっとがんばろう"),1),e("div",{class:"flex items-center justify-center mb-4"},[e("button",{onClick:q,class:"px-16 py-3 bg-purple-400 font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10"},ie)])])])],64))}};export{he as default};