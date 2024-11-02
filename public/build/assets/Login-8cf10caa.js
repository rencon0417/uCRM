import{c as w,e as x,A as v,f as i,g as b,x as c,j as d,i as o,u as s,t as y,z as p,k as r,m as f,y as V,l as $}from"./app-669a8ac0.js";import{_ as B}from"./GuestLayout-5cb55d0f.js";import{_,a as g,b as h}from"./TextInput-61d515bb.js";import{_ as C}from"./PrimaryButton-06a282ba.js";import{T as N,Z as S,i as U}from"./index.esm-25b40ae0.js";import"./ApplicationLogo-c7931a6a.js";import"./_plugin-vue_export-helper-c27b6911.js";const q=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const m=e,n=l,t=w({get(){return n.checked},set(a){m("update:checked",a)}});return(a,u)=>x((i(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":u[0]||(u[0]=k=>t.value=k),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,q)),[[v,t.value]])}},P={key:0,class:"mb-4 font-medium text-sm text-green-600"},R=["onSubmit"],j={class:"mt-4"},z={class:"block mt-4"},A={class:"flex items-center"},D=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),E={class:"flex items-center justify-end mt-4"},J={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=N({email:"",password:"",remember:!1}),m=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(i(),c(B,null,{default:d(()=>[o(s(S),{title:"Log in"}),l.status?(i(),b("div",P,y(l.status),1)):p("",!0),r("form",{onSubmit:$(m,["prevent"])},[r("div",null,[o(_,{for:"email",value:"Email"}),o(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(h,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",j,[o(_,{for:"password",value:"Password"}),o(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(h,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",z,[r("label",A,[o(L,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=a=>s(e).remember=a)},null,8,["checked"]),D])]),r("div",E,[l.canResetPassword?(i(),c(s(U),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[f(" Forgot your password? ")]),_:1},8,["href"])):p("",!0),o(C,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[f(" Log in ")]),_:1},8,["class","disabled"])])],40,R)]),_:1}))}};export{J as default};
