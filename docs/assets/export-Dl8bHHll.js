import{u as n,w as b}from"./xlsx-uoQkVabA.js";import{_ as u,r as x,c as i,d as m,a,w as _,b as c,o as f,g as h}from"./index-CWHsYAsn.js";const g={class:"export-container"},k={class:"handle-box"},w={__name:"export",setup(v){const l=x([]);(()=>{l.value=[{id:1,name:"小明",sno:"S001",class:"一班",age:"10",sex:"男"},{id:2,name:"小红",sno:"S002",class:"一班",age:"9",sex:"女"}]})();const r=[["序号","姓名","学号","班级","年龄","性别"]],d=()=>{l.value.map((o,e)=>{const s=[e+1];s.push(o.name,o.sno,o.class,o.age,o.sex),r.push(s)});let p=n.aoa_to_sheet(r),t=n.book_new();n.book_append_sheet(t,p,"第一页"),b(t,"表格.xlsx")};return(p,t)=>{const o=c("el-button"),e=c("el-table-column"),s=c("el-table");return f(),i("div",g,[m("div",k,[a(o,{type:"primary",onClick:d},{default:_(()=>t[0]||(t[0]=[h("导出Excel")])),_:1})]),a(s,{data:l.value,border:"",class:"table","header-cell-style":{background:"#f4f6f8"}},{default:_(()=>[a(e,{prop:"id",label:"ID",width:"55",align:"center"}),a(e,{prop:"name",label:"姓名"}),a(e,{prop:"sno",label:"学号"}),a(e,{prop:"class",label:"班级"}),a(e,{prop:"age",label:"年龄"}),a(e,{prop:"sex",label:"性别"})]),_:1},8,["data"])])}}},B=u(w,[["__scopeId","data-v-3c9bd427"]]);export{B as default};
