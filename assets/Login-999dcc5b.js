import{r as t,d as p,e as u,j as s,B as g}from"./index-cc04e2b4.js";import{P as f}from"./PageNav-6d320c51.js";import"./Logo-732c825a.js";const h="_login_1kegp_1",x="_form_1kegp_6",j="_row_1kegp_23",a={login:h,form:x,row:j};function N(){const[o,l]=t.useState("fares.haliim@gmail.com"),[i,c]=t.useState("12345"),r=p(),{login:m,isAuthenticated:n}=u();function d(e){e.preventDefault(),m(o,i)}return t.useEffect(function(){n&&r("/app",{replace:!0})},[n,r]),s.jsxs("main",{className:a.login,children:[s.jsx(f,{}),s.jsxs("form",{className:a.form,children:[s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"email",children:"Email address"}),s.jsx("input",{type:"email",id:"email",onChange:e=>l(e.target.value),value:o})]}),s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",onChange:e=>c(e.target.value),value:i})]}),s.jsx("div",{children:s.jsx(g,{onClick:d,type:"primary",children:"Login"})})]})]})}export{N as default};
