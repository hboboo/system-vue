import{b as $}from"./index-COWToMlm.js";import{T as z}from"./TableSearch-DZwJgh6l.js";import{T as I}from"./TableCustom-DzejWlNC.js";import{_ as U,a as M}from"./TableEdit-DPYP1WhN.js";import{_ as O,h as y,r as o,c as W,a as t,d as w,w as a,e as x,E as j,b as i,o as A,g as m,t as D}from"./index-CWHsYAsn.js";const G={class:"container"},H=["src"],J={__name:"baseTable",setup(K){const V=y({name:""}),T=o([{type:"input",label:"用户名：",prop:"name"}]),q=()=>{v(1)};let C=o([{type:"selection"},{type:"index",label:"序号",width:55,align:"center"},{prop:"name",label:"用户名"},{prop:"money",label:"账户余额"},{prop:"thumb",label:"头像"},{prop:"state",label:"账户状态"},{prop:"operator",label:"操作",width:250}]);const p=y({index:1,size:10,total:200}),b=o([]),r=async()=>{const l=await $();b.value=l.data.list};r();const v=l=>{p.index=l,r()};let E=o({labelWidth:"100px",span:24,list:[{type:"input",label:"用户名",prop:"name",required:!0},{type:"number",label:"账户余额",prop:"money",required:!0},{type:"switch",activeText:"正常",inactiveText:"异常",label:"账户状态",prop:"state",required:!0},{type:"upload",label:"头像",prop:"thumb",required:!0}]});const n=o(!1),u=o(!1),_=o({}),P=l=>{_.value={...l},u.value=!0,n.value=!0},k=()=>{f(),r()},f=()=>{n.value=!1,u.value=!1},c=o(!1),d=o({row:{},list:[]}),B=l=>{d.value.row={...l},d.value.list=[{prop:"id",label:"用户ID"},{prop:"name",label:"用户名"},{prop:"money",label:"账户余额"},{prop:"state",label:"账户状态"},{prop:"thumb",label:"头像"}],c.value=!0},F=l=>{j.success("删除成功")};return(l,s)=>{const N=i("el-button"),h=i("el-image"),S=i("el-tag"),g=i("el-dialog");return A(),W("div",null,[t(z,{query:V,options:T.value,search:q},null,8,["query","options"]),w("div",G,[t(I,{columns:x(C),tableData:b.value,total:p.total,viewFunc:B,delFunc:F,editFunc:P,refresh:r,currentPage:p.index,changePage:v},{toolbarBtn:a(()=>[t(N,{type:"warning",icon:"CirclePlusFilled",onClick:s[0]||(s[0]=e=>n.value=!0)},{default:a(()=>s[3]||(s[3]=[m("新增")])),_:1})]),money:a(({rows:e})=>[m(" ￥"+D(e.money),1)]),thumb:a(({rows:e})=>[t(h,{class:"table-td-thumb",src:e.thumb,"z-index":10,"preview-src-list":[e.thumb],"preview-teleported":""},null,8,["src","preview-src-list"])]),state:a(({rows:e})=>[t(S,{type:e.state?"success":"danger"},{default:a(()=>[m(D(e.state?"正常":"异常"),1)]),_:2},1032,["type"])]),_:1},8,["columns","tableData","total","currentPage"])]),t(g,{title:u.value?"编辑":"新增",modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),width:"700px","destroy-on-close":"","close-on-click-modal":!1,onClose:f},{default:a(()=>[t(U,{"form-data":_.value,options:x(E),edit:u.value,update:k},{thumb:a(({rows:e})=>[w("img",{class:"table-td-thumb",src:e.thumb},null,8,H)]),_:1},8,["form-data","options","edit"])]),_:1},8,["title","modelValue"]),t(g,{title:"查看详情",modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=e=>c.value=e),width:"700px","destroy-on-close":""},{default:a(()=>[t(M,{data:d.value},{thumb:a(({rows:e})=>[t(h,{src:e.thumb},null,8,["src"])]),_:1},8,["data"])]),_:1},8,["modelValue"])])}}},Z=O(J,[["__scopeId","data-v-f77bcd3d"]]);export{Z as default};
