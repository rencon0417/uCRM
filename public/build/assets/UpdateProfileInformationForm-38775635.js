import{f as r,g as n,k as a,i as s,u as e,m,j as u,e as y,v as x,z as f,T as h,l as V}from"./app-8a720ce0.js";import{a as p,b as _,_ as v}from"./TextInput-f9895821.js";import{_ as k}from"./PrimaryButton-011dcff3.js";import{Q as b,T as w,i as S}from"./index.esm-db872da0.js";const N=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),$={key:0},B={class:"text-sm mt-2 text-gray-800"},E={class:"mt-2 font-medium text-sm text-green-600"},T={class:"flex items-center gap-4"},U={key:0,class:"text-sm text-gray-600"},j={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(g){const d=g,l=b().props.auth.user,t=w({name:l.name,email:l.email});return(c,o)=>(r(),n("section",null,[N,a("form",{onSubmit:o[2]||(o[2]=V(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[s(v,{for:"name",value:"Name"}),s(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(_,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),a("div",null,[s(v,{for:"email",value:"Email"}),s(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),s(_,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(l).email_verified_at===null?(r(),n("div",$,[a("p",B,[m(" Your email address is unverified. "),s(e(S),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>[m(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),y(a("div",E," A new verification link has been sent to your email address. ",512),[[x,d.status==="verification-link-sent"]])])):f("",!0),a("div",T,[s(k,{disabled:e(t).processing},{default:u(()=>[m("Save")]),_:1},8,["disabled"]),s(h,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:u(()=>[e(t).recentlySuccessful?(r(),n("p",U,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{j as default};