import{r as _,c as f,f as t,g as s,k as e,z as i,t as o,F as v,p,y as A}from"./app-2c0b2f1d.js";const g={id:"app",class:"flex flex-col items-center justify-center min-h-screen"},q={key:0},z=e("h1",null,"4択クイズへようこそ!",-1),C={key:1},V={class:"w-full"},Q={class:"bg-white p-6 rounded shadow-md"},B={class:"bg-gray-800 text-white py-1 px-2 rounded"},E={class:"text-2xl font-bold"},F=e("hr",{class:"my-4"},null,-1),T=["onClick"],$={key:2},I={class:"text-2xl font-bold"},N={key:0},R={key:3},S=e("h1",{class:"text-xl font-bold"},"最終結果",-1),j={class:"border-collapse w-100 mx-auto my-4"},D=e("thead",null,[e("tr",null,[e("th",null,"問題"),e("th",null,"正解"),e("th",null,"結果")])],-1),H={__name:"VueTest2",setup(L){const u=_("start"),r=_(0),w=_(null),n={questions:[{text:"アインシュタインの相対性理論で有名な方程式は？",options:["E=mc^2","F=ma","PV=nRT","a^2+b^2=c^2"],answer:0,explanation:"正解はE=mc^2です。この方程式はエネルギーと質量の関係を示しています。"},{text:"化学元素「Au」は何を表しますか？",options:["プラチナ","銅","金","銀"],answer:2,explanation:"正解は金です。周期表上でAuは金を表します。"},{text:"モーツァルトのオペラ「魔笛」の主人公は誰でしょう？",options:["フィガロ","タミーノ","パパゲーノ","ドン・ジョヴァンニ"],answer:2,explanation:"正解はパパゲーノです。彼は鳥使いで物語においてコミカルな役どころとして知られています。"},{text:"世界で最も高い山は？",options:["エベレスト","キリマンジャロ","コジオスコ","デナリ"],answer:0,explanation:"正解はエベレストです。エベレストはヒマラヤ山脈に位置しています。"},{text:"哲学者ソクラテスの教えを受けた弟子は誰でしょう？",options:["プラトン","アリストテレス","エピクテトス","ヘラクレイトス"],answer:0,explanation:"正解はプラトンです。プラトンはソクラテスの教えを受け、後に自身も哲学を発展させました。"}],userAnswers:_([])},b=()=>{u.value="quiz"},y=c=>{n.userAnswers.value.push(c),u.value="result"},m=()=>{r.value<n.questions.length-1?(r.value++,w.value=null,u.value="quiz"):u.value="results"},h=c=>n.userAnswers.value[c]===n.questions[c].answer?"正解":"不正解",d=f(()=>n.userAnswers.value.reduce((x,a,l)=>x+(a===n.questions[l].answer?1:0),0)),k=()=>{u.value="start",r.value=0,n.userAnswers.value=[]};return(c,x)=>(t(),s("body",null,[e("div",g,[u.value==="start"?(t(),s("div",q,[z,e("button",{class:"button",onClick:b},"スタート！")])):i("",!0),u.value==="quiz"?(t(),s("div",C,[e("div",V,[e("div",Q,[e("p",B,o(`第${r.value+1}問`),1),e("h4",E,o(n.questions[r.value].text),1),F,(t(!0),s(v,null,p(n.questions[r.value].options,(a,l)=>(t(),s("button",{class:"bg-blue-500 text-white text-lg py-2 px-4 block w-full mb-4 rounded",key:l,onClick:P=>y(l)},o(a),9,T))),128))])])])):i("",!0),u.value==="result"?(t(),s("div",$,[e("div",I,o(`第${r.value+1}問`),1),(t(!0),s(v,null,p(n.questions,(a,l)=>(t(),s("div",{key:l},[l===r.value?(t(),s("div",N,[e("p",null,"結果："+o(h(l)),1),e("p",null,"解説："+o(a.explanation),1)])):i("",!0)]))),128)),e("button",{class:"button",onClick:m},"次の問題へ")])):i("",!0),u.value==="results"?(t(),s("div",R,[S,e("table",j,[D,e("tbody",null,[(t(!0),s(v,null,p(n.questions,(a,l)=>(t(),s("tr",{key:l},[e("td",null,o(a.text),1),e("td",null,o(a.options[a.answer]),1),e("td",null,o(h(l)),1)]))),128))])]),e("p",null,"正答率："+o(d.value)+"問正解/5問中",1),e("p",{class:A(["result",{pass:d.value>=3,fail:d.value<=2}])},o(d.value>=3?"合格！":"もっとがんばろう"),3),e("button",{class:"button",onClick:k},"スタート画面へもどる")])):i("",!0)])]))}};export{H as default};