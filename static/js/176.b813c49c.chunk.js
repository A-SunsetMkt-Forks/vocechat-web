"use strict";(globalThis.webpackChunkrustchat_web=globalThis.webpackChunkrustchat_web||[]).push([[176],{746:(e,s,i)=>{i.d(s,{Z:()=>c});var t,a=i(7313);function n(){return n=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},n.apply(this,arguments)}const l=(e,s)=>{let{title:i,titleId:l,...c}=e;return a.createElement("svg",n({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":l},c),i?a.createElement("title",{id:l},i):null,t||(t=a.createElement("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#344054",strokeWidth:1.67,strokeLinecap:"round",strokeLinejoin:"round"})))},c=(0,a.forwardRef)(l)},6284:(e,s,i)=>{i.d(s,{Z:()=>l});var t=i(9184),a=i(6417);const n=t.ZP.input`
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* Not removed via appearance */
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  place-content: center;
  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 4px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 10px 10px #1fe1f9;
  }
  &:checked {
    border-color: #1fe1f9;
    &:before {
      transform: scale(1);
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`;function l(e){return(0,a.jsx)(n,{readOnly:!0,...e,type:"checkbox"})}},5874:(e,s,i)=>{i.d(s,{Z:()=>r});var t=i(7313),a=i(9184),n=i(6417);const l=a.ZP.form`
  > .option {
    &:not(:last-child) {
      margin-bottom: 8px;
    }

    > input[type="radio"] {
      display: none;

      & + .box {
        background: #ffffff;
        border: 1px solid #d0d5dd;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        transition: all ease-in-out 250ms;

        & > label {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #667085;
          cursor: pointer;
          user-select: none;
          transition: all ease-in-out 250ms;

          &:before {
            content: "";
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 8px;
            background: #ffffff;
            box-shadow: inset 0 0 0 4px #ffffff;
            border: 1px solid #d0d5dd;
            margin: 14px 8px 14px 14px;
            transition: all ease-in-out 500ms;
          }
        }
      }

      &:checked + .box {
        background: #22ccee;
        border: 1px solid #d0d5dd;

        & > label {
          color: #ffffff;

          &:before {
            background: #ffffff;
            box-shadow: inset 0 0 0 4px #22ccee;
            border: 1px solid #ffffff;
          }
        }
      }
    }
  }
`,c={},M={};function r(e){let{options:s,values:i=M,value:a=c,defaultValue:r,onChange:o}=e;const d=(0,t.useId)(),[j,u]=(0,t.useState)(r),N=a!==c?a:j;return(0,n.jsx)(l,{children:s.map(((e,s)=>(0,n.jsxs)("div",{className:"option",children:[(0,n.jsx)("input",{type:"radio",checked:(i!==M?i.indexOf(N):N)===s,onChange:()=>{const e=i===M?s:i[s];a===c&&u(e),o&&o(e)},id:`${d}-${s}`}),(0,n.jsx)("div",{className:"box",children:(0,n.jsx)("label",{htmlFor:`${d}-${s}`,children:e})})]},s)))})}},3656:(e,s,i)=>{i.d(s,{Z:()=>n});var t=i(7313),a=i(4695);function n(){const[e,s]=(0,t.useState)(!1),[i,n]=(0,t.useState)({}),{data:l}=(0,a.R)(void 0,{refetchOnMountOrArgChange:!0}),[c,{isSuccess:M}]=(0,a.Ku)();(0,t.useEffect)((()=>{l&&n(l)}),[l]),(0,t.useEffect)((()=>{s(!M&&JSON.stringify(l)!==JSON.stringify(i))}),[l,i,M]);return{config:i,changed:e,updateGithubAuthConfig:e=>{n((s=>({...s,...e})))},updateGithubAuthConfigToServer:async()=>{await c(i)},isSuccess:M}}},8536:(e,s,i)=>{i.d(s,{Z:()=>n});var t=i(7313),a=i(4695);function n(){const[e,s]=(0,t.useState)(!1),[i,n]=(0,t.useState)(""),{data:l}=(0,a.eM)(void 0,{refetchOnMountOrArgChange:!0}),[c,{isSuccess:M}]=(0,a.Qg)();(0,t.useEffect)((()=>{l&&n(l.client_id)}),[l]),(0,t.useEffect)((()=>{s(!M&&(null===l||void 0===l?void 0:l.client_id)!==i)}),[l,i,M]);return{config:l,changed:e,clientId:i,updateClientId:n,updateClientIdToServer:async()=>{i&&await c({client_id:i})},updateGoogleAuthConfig:c,isSuccess:M}}},4706:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MyAccount});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7313),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9184),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3709),react_hot_toast__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3657),_app_services_contact__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6432),_common_component_AvatarUploader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7814),_ProfileBasicEditModal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2631),_UpdatePasswordModal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9862),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6417);const StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  .card {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 512px;
    background: #f3f4f6;
    border-radius: 20px;
    .name {
      margin-top: 8px;
      margin-bottom: 64px;
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      color: #27272a;
      .uid {
        font-weight: normal;
        color: #52525b;
      }
    }
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      .info {
        display: flex;
        flex-direction: column;
        .label {
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-transform: uppercase;
          color: #52525b;
        }
        .txt {
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #52525b;
          .gray {
            color: #78787c;
          }
        }
      }
      .btn {
        background: #1fe1f9;
        border: 1px solid #1fe1f9;
      }
    }
  }
  .danger {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .head {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #374151;
    }
    .desc {
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
      margin-bottom: 16px;
    }
    .btn {
      background: #ef4444;
      border: 1px solid #ef4444;
    }
  }
  .btn {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 8px 14px;
    background: #1fe1f9;
    border: 1px solid #1fe1f9;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
  }
`,EditModalInfo={name:{label:"Username",title:"Change your username",intro:"Enter a new username."},email:{label:"Email",title:"Change your email",intro:"Enter a new email."}};function MyAccount(){const[passwordModal,setPasswordModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[editModal,setEditModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[uploadAvatar,{isSuccess:uploadSuccess}]=(0,_app_services_contact__WEBPACK_IMPORTED_MODULE_2__.C0)(),loginUser=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)((e=>e.contacts.byId[e.authData.uid]));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{uploadSuccess&&react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.ZP.success("update avatar successfully!")}),[uploadSuccess]);const handleBasicEdit=e=>{const{edit:s}=e.target.dataset;setEditModal(s)},closeBasicEditModal=()=>{setEditModal(null)},togglePasswordModal=()=>{setPasswordModal((e=>!e))};if(!loginUser)return null;const{uid:uid,avatar:avatar,name:name,email:email}=loginUser;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"card",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_component_AvatarUploader__WEBPACK_IMPORTED_MODULE_3__.Z,{url:avatar,name:name,uploadImage:uploadAvatar}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"name",children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"uid",children:["#",uid]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"label",children:"username"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"txt",children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"gray",children:[" #",uid]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{"data-edit":"name",onClick:handleBasicEdit,className:"btn",children:"Edit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"label",children:"email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"txt",children:email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{"data-edit":"email",onClick:handleBasicEdit,className:"btn",children:"Edit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"label",children:"password"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"txt",children:"*********"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:togglePasswordModal,className:"btn",children:"Edit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"danger",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4",{className:"head",children:"Account Removal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"desc",children:"Disabling your account means you can recover it at any time after taking this action."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"btn",children:"Delete Account"})]})]}),editModal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ProfileBasicEditModal__WEBPACK_IMPORTED_MODULE_4__.Z,{valueKey:editModal,...EditModalInfo[editModal],value:eval(editModal),closeModal:closeBasicEditModal}),passwordModal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UpdatePasswordModal__WEBPACK_IMPORTED_MODULE_5__.Z,{closeModal:togglePasswordModal})]})}},2631:(e,s,i)=>{i.d(s,{Z:()=>u});var t=i(7313),a=i(9184),n=i(8648),l=i(6432),c=i(5845),M=i(1296),r=i(5607),o=i(3657),d=i(6417);const j=(0,a.ZP)(c.Z)`
  .input {
    margin: 48px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #6b7280;
    }
  }
`;function u(e){let{label:s="Username",valueKey:i="name",value:a="",title:c="Change your username",intro:u="Enter a new username and your existing password.",closeModal:N}=e;const[x,D]=(0,t.useState)(a),[g,{isLoading:p,isSuccess:I}]=(0,l.g$)();return(0,t.useEffect)((()=>{I&&(o.ZP.success("update user info successfully"),N())}),[I]),(0,d.jsx)(r.Z,{id:"modal-modal",children:(0,d.jsx)(j,{title:c,description:u,buttons:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(M.Z,{className:"cancel",onClick:N,children:"Cancel"}),(0,d.jsx)(M.Z,{onClick:()=>{g({[i]:x})},children:p?"Updating":"Done"})]}),children:(0,d.jsxs)("div",{className:"input",children:[(0,d.jsx)("label",{htmlFor:i,children:s}),(0,d.jsx)(n.Z,{name:i,value:x,onChange:e=>{D(e.target.value)}})]})})})}},9862:(e,s,i)=>{i.d(s,{Z:()=>u});var t=i(7313),a=i(9184),n=i(8648),l=i(1864),c=i(5845),M=i(1296),r=i(5607),o=i(3657),d=i(6417);const j=(0,a.ZP)(c.Z)`
  .input {
    margin: 16px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #6b7280;
    }
  }
`;function u(e){let{closeModal:s}=e;const{data:i}=(0,l.I1)(),[a,c]=(0,t.useState)({current:"",newPassword:"",confirmPassword:""}),[u,{isLoading:N,isSuccess:x}]=(0,l.a3)(),D=e=>{const{type:s}=e.target.dataset;c((i=>({...i,[s]:e.target.value})))};(0,t.useEffect)((()=>{x&&(o.ZP.success("update password successfully"),s())}),[x]);const{current:g,newPassword:p,confirmPassword:I}=a,m=(null===i||void 0===i?void 0:i.password)&&!g||!p||!I||p!==I||N;return(0,d.jsx)(r.Z,{id:"modal-modal",children:(0,d.jsxs)(j,{title:"Change your password",description:"Enter current password and new password.",buttons:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(M.Z,{className:"cancel",onClick:s,children:"Cancel"}),(0,d.jsx)(M.Z,{disabled:m,onClick:()=>{const{current:e,newPassword:s}=a;u({old_password:e,new_password:s})},children:N?"Updating":"Update"})]}),children:[(null===i||void 0===i?void 0:i.password)&&(0,d.jsxs)("div",{className:"input",children:[(0,d.jsx)("label",{htmlFor:"current",children:"Current Password"}),(0,d.jsx)(n.Z,{type:"password",id:"current",name:"current",value:g,"data-type":"current",onChange:D})]}),(0,d.jsxs)("div",{className:"input",children:[(0,d.jsx)("label",{htmlFor:"newPassword",children:"New Password"}),(0,d.jsx)(n.Z,{type:"password",name:"newPassword",value:p,"data-type":"newPassword",onChange:D})]}),(0,d.jsxs)("div",{className:"input",children:[(0,d.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),(0,d.jsx)(n.Z,{onBlur:()=>{const{newPassword:e,confirmPassword:s}=a;e!==s&&o.ZP.error("Not same with new password")},type:"password",name:"confirmPassword",value:I,"data-type":"confirmPassword",onChange:D})]})]})})}},3168:(e,s,i)=>{i.r(s),i.d(s,{default:()=>xe});var t=i(7313),a=i(9466),n=i(7890),l=i(1129),c=i(3709),M=i(4706),r=i(9184),o=i(4695),d=i(7814),j=i(8648),u=i(1707),N=i(4155),x=i(6567),D=i(3657),g=i(5874),p=i(6417);const I=r.ZP.div`
  position: relative;
  width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .logo {
    display: flex;
    gap: 16px;

    .preview {
      width: 96px;
      height: 96px;
    }

    .upload {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .tip {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #374151;
      }

      .btn {
        padding: 8px 14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #1fe1f9;
        background: #ecfeff;
        border: 1px solid #ecfeff;
        box-sizing: border-box;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    > .radioButton {
      > .label {
        margin-top: 64px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }

      > .tip {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #667085;
      }

      > form {
        margin-top: 16px;
        width: 512px;
      }
    }
  }
`;function m(){const e=(0,c.v9)((e=>e.contacts.byId[e.authData.uid])),[s,i]=(0,t.useState)(!1),[a,n]=(0,t.useState)(null),[l,M]=(0,t.useState)(null),{data:r,refetch:m}=(0,o.z3)(),{data:T,refetch:h}=(0,o.ww)(),[_,{isSuccess:w}]=(0,o.e2)(),[y,{isSuccess:L}]=(0,o.jd)(),[E,{isSuccess:z}]=(0,o.QP)(),O=e=>{const s=e.target.value,{type:i}=e.target.dataset;n((e=>({...e,[i]:s})))};if((0,t.useEffect)((()=>{L&&(D.ZP.success("Update logo successfully!"),m())}),[L]),(0,t.useEffect)((()=>{r&&n(r)}),[r]),(0,t.useEffect)((()=>{T&&M(T)}),[T]),(0,t.useEffect)((()=>{if(r&&a&&T&&l){const{name:e,description:s}=a,{name:t,description:n}=r,{who_can_sign_up:c}=l,{who_can_sign_up:M}=T;i(t!==e||n!==s||M!==c)}}),[r,a,T,l]),(0,t.useEffect)((()=>{w&&z&&(D.ZP.success("Configuration updated!"),m(),h())}),[w,z]),!a||!l)return null;const{name:C,description:f,logo:A}=a,{who_can_sign_up:v}=l,b=null===e||void 0===e?void 0:e.is_admin;return(0,p.jsxs)(I,{children:[(0,p.jsxs)("div",{className:"logo",children:[(0,p.jsx)("div",{className:"preview",children:(0,p.jsx)(d.Z,{disabled:!b,url:L?`${A}?t=${+new Date}`:A,name:C,uploadImage:y})}),b&&(0,p.jsx)("div",{className:"upload",children:(0,p.jsx)("div",{className:"tip",children:"Minimum size is 128x128, We recommend at least 512x512 for the server. Max size limited to 5M."})})]}),(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"name",children:"Server Name"}),(0,p.jsx)(j.Z,{disabled:!b,"data-type":"name",onChange:O,value:C,name:"name",id:"name",placeholder:"Server Name"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Server Description"}),(0,p.jsx)(N.Z,{disabled:!b,"data-type":"description",onChange:O,value:null!==f&&void 0!==f?f:"",rows:4,name:"name",id:"name",placeholder:"Tell the world a bit about this server"})]}),b&&(0,p.jsxs)("div",{className:"radioButton",children:[(0,p.jsx)("p",{className:"label",children:"Default Sign Up"}),(0,p.jsx)("p",{className:"tip",children:"Who can sign up this server."}),(0,p.jsx)(g.Z,{options:["Everyone","Invitation Link Only"],values:["EveryOne","InvitationOnly"],value:v,onChange:e=>M({...T,who_can_sign_up:e})})]})]}),s&&(0,p.jsx)(x.Z,{saveHandler:()=>{const{name:e,description:s}=a;_({name:e,description:s}),E({...T,who_can_sign_up:l.who_can_sign_up})},resetHandler:()=>{n(r),M(T)}})]})}const T=r.ZP.div`
  position: relative;
  width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      .row {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &.inputs {
          flex-direction: column;
          gap: 8px;
        }
        .title {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .txt {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            .icon {
              cursor: pointer;
            }
          }
          .desc {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #667085;
          }
        }
      }
    }
  }
  .tip {
    display: flex;
    gap: 8px;
    align-items: center;
    .link {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #06b6d4;
    }
  }
`,h=r.ZP.div`
  cursor: pointer;
  position: relative;
  width: 44px;
  height: 24px;
  background-color: #1fe1f9;
  border-radius: 12px;
  transition: all 0.2s ease-in;
  &:after {
    border-radius: 50%;
    background-color: #fff;
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    right: 2px;
    transition: all 0.4s ease;
  }
  &[data-checked="false"] {
    background-color: #f2f4f7;
    &:after {
      transform: translateX(-100%);
    }
  }
  &[data-disabled="true"] {
    cursor: not-allowed;
    background-color: #ccc;
    pointer-events: none;
  }
`;var _,w=i(4263),y=i(2963),L=i(9784);function E(){return E=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},E.apply(this,arguments)}const z=(e,s)=>{let{title:i,titleId:a,...n}=e;return t.createElement("svg",E({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":a},n),i?t.createElement("title",{id:a},i):null,_||(_=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.4 7.99961C14.4 9.69699 13.7257 11.3249 12.5255 12.5251C11.3252 13.7253 9.69736 14.3996 7.99998 14.3996C6.30259 14.3996 4.67472 13.7253 3.47449 12.5251C2.27426 11.3249 1.59998 9.69699 1.59998 7.99961C1.59998 6.30222 2.27426 4.67436 3.47449 3.47413C4.67472 2.27389 6.30259 1.59961 7.99998 1.59961C9.69736 1.59961 11.3252 2.27389 12.5255 3.47413C13.7257 4.67436 14.4 6.30222 14.4 7.99961ZM7.99998 5.59961C7.85941 5.59947 7.7213 5.63637 7.59953 5.70659C7.47777 5.77682 7.37666 5.87788 7.30638 5.99961C7.25563 6.09391 7.18646 6.17706 7.10298 6.24414C7.0195 6.31121 6.92341 6.36084 6.82039 6.39009C6.71737 6.41934 6.60953 6.4276 6.50326 6.4144C6.39699 6.40119 6.29445 6.36679 6.20172 6.31322C6.109 6.25965 6.02797 6.18801 5.96344 6.10254C5.89891 6.01708 5.8522 5.91953 5.82608 5.81568C5.79995 5.71182 5.79494 5.60378 5.81135 5.49796C5.82775 5.39213 5.86523 5.29068 5.92158 5.19961C6.18575 4.7421 6.5935 4.38454 7.0816 4.18238C7.56969 3.98022 8.11085 3.94476 8.62115 4.0815C9.13145 4.21823 9.58237 4.51952 9.90399 4.93865C10.2256 5.35777 10.4 5.87131 10.4 6.39961C10.4001 6.8961 10.2463 7.38043 9.95978 7.78589C9.67324 8.19135 9.26803 8.498 8.79998 8.66361V8.79961C8.79998 9.01178 8.71569 9.21527 8.56566 9.36529C8.41563 9.51532 8.21215 9.59961 7.99998 9.59961C7.7878 9.59961 7.58432 9.51532 7.43429 9.36529C7.28426 9.21527 7.19998 9.01178 7.19998 8.79961V7.99961C7.19998 7.78744 7.28426 7.58395 7.43429 7.43392C7.58432 7.28389 7.7878 7.19961 7.99998 7.19961C8.21215 7.19961 8.41563 7.11532 8.56566 6.96529C8.71569 6.81527 8.79998 6.61178 8.79998 6.39961C8.79998 6.18744 8.71569 5.98395 8.56566 5.83392C8.41563 5.68389 8.21215 5.59961 7.99998 5.59961ZM7.99998 11.9996C8.21215 11.9996 8.41563 11.9153 8.56566 11.7653C8.71569 11.6153 8.79998 11.4118 8.79998 11.1996C8.79998 10.9874 8.71569 10.784 8.56566 10.6339C8.41563 10.4839 8.21215 10.3996 7.99998 10.3996C7.7878 10.3996 7.58432 10.4839 7.43429 10.6339C7.28426 10.784 7.19998 10.9874 7.19998 11.1996C7.19998 11.4118 7.28426 11.6153 7.43429 11.7653C7.58432 11.9153 7.7878 11.9996 7.99998 11.9996Z",fill:"#9CA3AF"})))},O=(0,t.forwardRef)(z),C=r.ZP.div`
  padding: 8px 12px;
  background: #101828;
  border-radius: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  a {
    color: #55c7ec;
  }
`;function f(e){let{link:s="#"}=e;return(0,p.jsx)(y.ZP,{delay:[0,500],interactive:!0,arrow:L.ki,placement:"bottom",content:(0,p.jsxs)(C,{children:["Need more detail? See our"," ",(0,p.jsx)("a",{target:"doc",href:s,children:"doc"}),"."]}),children:(0,p.jsx)(O,{className:"icon"})})}var A=i(8140),v=i(746),b=i(8198);const k=r.ZP.div`
  user-select: none;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  .txt {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
    min-width: 76px;
  }
  > .icon {
    width: 20px !important;
    height: 20px !important;
  }
`,U={};function S(e){var s;let{options:i=[],updateSelect:a=null,current:n=U}=e;const[l,c]=(0,t.useState)(!1),[M,r]=(0,t.useState)(void 0),o=()=>{c((e=>!e))},d=e=>{r(e),o(),a&&a(e)};return(0,p.jsx)(y.ZP,{visible:l,appendTo:document.body,placement:"bottom",interactive:!0,content:(0,p.jsx)(b.Z,{children:i.map((e=>{let{title:s,value:i,selected:t,underline:a}=e;return(0,p.jsxs)("li",{onClick:t?null:d.bind(null,{title:s,value:i}),className:"item sb "+(a?"underline":""),"data-disabled":t,children:[s,t&&(0,p.jsx)(A.Z,{className:"icon"})]},i)}))}),children:(0,p.jsxs)(k,{onClick:o,children:[(0,p.jsx)("span",{className:"txt",children:(null===(s=n!==U?n:M)||void 0===s?void 0:s.title)||"Select"}),(0,p.jsx)(v.Z,{className:"icon"})]})})}var P=i(1296);const Y=JSON.parse('[{"title":"Google","value":"accounts.google.com","selected":false,"icon":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1OTA1XzI0Njk1KSI+CjxwYXRoIGQ9Ik0yMy43NjYgMTIuMjc2M0MyMy43NjYgMTEuNDYwNSAyMy42OTk5IDEwLjY0MDQgMjMuNTU4OCA5LjgzNzg5SDEyLjI0VjE0LjQ1ODlIMTguNzIxN0MxOC40NTI4IDE1Ljk0OTIgMTcuNTg4NSAxNy4yNjc2IDE2LjMyMyAxOC4xMDU0VjIxLjEwMzdIMjAuMTlDMjIuNDYwOCAxOS4wMTM3IDIzLjc2NiAxNS45MjcyIDIzLjc2NiAxMi4yNzYzWiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNMTIuMjQwMSAyNC4wMDEzQzE1LjQ3NjYgMjQuMDAxMyAxOC4yMDU5IDIyLjkzODcgMjAuMTk0NSAyMS4xMDQ0TDE2LjMyNzYgMTguMTA2QzE1LjI1MTcgMTguODM4IDEzLjg2MjcgMTkuMjUyNSAxMi4yNDQ1IDE5LjI1MjVDOS4xMTM4OCAxOS4yNTI1IDYuNDU5NDYgMTcuMTQwNCA1LjUwNzA1IDE0LjMwMDhIMS41MTY2VjE3LjM5MTdDMy41NTM3MSAyMS40NDM5IDcuNzAyOSAyNC4wMDEzIDEyLjI0MDEgMjQuMDAxM1oiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTUuNTAyNTMgMTQuMzAwN0M0Ljk5OTg3IDEyLjgxMDMgNC45OTk4NyAxMS4xOTY1IDUuNTAyNTMgOS43MDYxOFY2LjYxNTIzSDEuNTE2NDlDLTAuMTg1NTEgMTAuMDA2IC0wLjE4NTUxIDE0LjAwMDkgMS41MTY0OSAxNy4zOTE2TDUuNTAyNTMgMTQuMzAwN1oiIGZpbGw9IiNGQkJDMDQiLz4KPHBhdGggZD0iTTEyLjI0MDEgNC43NDk2NkMxMy45NTA5IDQuNzIzMiAxNS42MDQ0IDUuMzY2OTcgMTYuODQzNCA2LjU0ODY3TDIwLjI2OTUgMy4xMjI2MkMxOC4xMDAxIDEuMDg1NSAxNS4yMjA4IC0wLjAzNDQ2NiAxMi4yNDAxIDAuMDAwODA4NjY2QzcuNzAyOSAwLjAwMDgwODY2NiAzLjU1MzcxIDIuNTU4MjIgMS41MTY2IDYuNjE0ODFMNS41MDI2NCA5LjcwNTc1QzYuNDUwNjQgNi44NjE3MyA5LjEwOTQ3IDQuNzQ5NjYgMTIuMjQwMSA0Ljc0OTY2WiIgZmlsbD0iI0VBNDMzNSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE1OTA1XzI0Njk1Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},{"title":"Facebook","value":"www.facebook.com","selected":false,"icon":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAxNkMzMiA3LjE2NDEzIDI0LjgzNTggMCAxNiAwQzcuMTY0MTMgMCAwIDcuMTY0MTMgMCAxNkMwIDIzLjk4NTMgNS44NTAxNiAzMC42MDQ5IDEzLjUwMDIgMzEuODA2N1YyMC42MjYxSDkuNDM2NjRWMTZIMTMuNTAwMlYxMi40NzQyQzEzLjUwMDIgOC40NjQ1NiAxNS44ODk4IDYuMjQ4MjkgMTkuNTQzOCA2LjI0ODI5QzIxLjI5NDMgNi4yNDgyOSAyMy4xMjU4IDYuNTYxMDIgMjMuMTI1OCA2LjU2MTAyVjEwLjQ5ODZIMjEuMTA3NUMxOS4xMjA4IDEwLjQ5ODYgMTguNDk5OCAxMS43MzE3IDE4LjQ5OTggMTIuOTk4NFYxNS45OTk5SDIyLjkzNjdMMjIuMjI4IDIwLjYyNkgxOC40OTk2VjMxLjgwNjRDMjYuMTQ5OCAzMC42MDcxIDMxLjk5OTggMjMuOTg3NiAzMS45OTk4IDE1Ljk5OTlMMzIgMTZaIiBmaWxsPSIjMTk3N0YzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuMjI4IDIwLjYyNkwyMi45MzY5IDE1Ljk5OTlIMTguNDk5OVYxMi45OTg0QzE4LjQ5OTkgMTEuNzMzOSAxOS4xMTg2IDEwLjQ5ODcgMjEuMTA3NyAxMC40OTg3SDIzLjEyNlY2LjU2MTA1QzIzLjEyNiA2LjU2MTA1IDIxLjI5NDUgNi4yNDgyOSAxOS41NDM5IDYuMjQ4MjlDMTUuODg5OSA2LjI0ODI5IDEzLjUwMDQgOC40NjIzOCAxMy41MDA0IDEyLjQ3NDJWMTZIOS40MzY3N1YyMC42MjYxSDEzLjUwMDRWMzEuODA2N0MxNC4zMTQ5IDMxLjkzNDcgMTUuMTQ5NiAzMiAxNi4wMDAxIDMyQzE2Ljg1MDcgMzIgMTcuNjg1NCAzMS45MzI1IDE4LjQ5OTkgMzEuODA2N1YyMC42MjYxSDIyLjIyODJMMjIuMjI4IDIwLjYyNloiIGZpbGw9IiNGRUZFRkUiLz4KPC9zdmc+Cg=="},{"title":"Gitlab","value":"www.gitlab.com","selected":false,"icon":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMzgwIj4KPGRlZnM+CiAgICA8c3R5bGU+LmNscy0xe2ZpbGw6I2UyNDMyOTt9LmNscy0ye2ZpbGw6I2ZjNmQyNjt9LmNscy0ze2ZpbGw6I2ZjYTMyNjt9PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJMT0dPIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yODIuODMsMTcwLjczbC0uMjctLjY5LTI2LjE0LTY4LjIyYTYuODEsNi44MSwwLDAsMC0yLjY5LTMuMjQsNyw3LDAsMCwwLTgsLjQzLDcsNywwLDAsMC0yLjMyLDMuNTJsLTE3LjY1LDU0SDE1NC4yOWwtMTcuNjUtNTRBNi44Niw2Ljg2LDAsMCwwLDEzNC4zMiw5OWE3LDcsMCwwLDAtOC0uNDMsNi44Nyw2Ljg3LDAsMCwwLTIuNjksMy4yNEw5Ny40NCwxNzBsLS4yNi42OWE0OC41NCw0OC41NCwwLDAsMCwxNi4xLDU2LjFsLjA5LjA3LjI0LjE3LDM5LjgyLDI5LjgyLDE5LjcsMTQuOTEsMTIsOS4wNmE4LjA3LDguMDcsMCwwLDAsOS43NiwwbDEyLTkuMDYsMTkuNy0xNC45MSw0MC4wNi0zMCwuMS0uMDhBNDguNTYsNDguNTYsMCwwLDAsMjgyLjgzLDE3MC43M1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yODIuODMsMTcwLjczbC0uMjctLjY5YTg4LjMsODguMywwLDAsMC0zNS4xNSwxNS44TDE5MCwyMjkuMjVjMTkuNTUsMTQuNzksMzYuNTcsMjcuNjQsMzYuNTcsMjcuNjRsNDAuMDYtMzAsLjEtLjA4QTQ4LjU2LDQ4LjU2LDAsMCwwLDI4Mi44MywxNzAuNzNaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTUzLjQzLDI1Ni44OWwxOS43LDE0LjkxLDEyLDkuMDZhOC4wNyw4LjA3LDAsMCwwLDkuNzYsMGwxMi05LjA2LDE5LjctMTQuOTFTMjA5LjU1LDI0NCwxOTAsMjI5LjI1QzE3MC40NSwyNDQsMTUzLjQzLDI1Ni44OSwxNTMuNDMsMjU2Ljg5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzMi41OCwxODUuODRBODguMTksODguMTksMCwwLDAsOTcuNDQsMTcwbC0uMjYuNjlhNDguNTQsNDguNTQsMCwwLDAsMTYuMSw1Ni4xbC4wOS4wNy4yNC4xNywzOS44MiwyOS44MnMxNy0xMi44NSwzNi41Ny0yNy42NFoiLz48L2c+PC9zdmc+"},{"title":"Paypal","value":"www.paypal.com","selected":false,"icon":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjMwMnB4IiB2aWV3Qm94PSIwIDAgMjU2IDMwMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjE3LjE2ODQ3NiwyMy41MDcwMTQ2IEMyMDMuMjM0MDc3LDcuNjI0Nzk2NTEgMTc4LjA0NTYxMiwwLjgxNTc1MzMzOCAxNDUuODIzMzU1LDAuODE1NzUzMzM4IEw1Mi4zMDMwNjE5LDAuODE1NzUzMzM4IEM0NS43MTA0NDMxLDAuODE1NzUzMzM4IDQwLjEwODM4MTksNS42MTAzODUyIDM5LjA3NjIwNDIsMTIuMTExNDM5OSBMMC4xMzY0NjgzMDIsMjU5LjA3NjYwMSBDLTAuNjM3NjY0OTY4LDI2My45NDYxNDkgMy4xMzMxMTMyMiwyNjguMzU3ODc2IDguMDY5MjUzMzEsMjY4LjM1Nzg3NiBMNjUuODA0NjEyLDI2OC4zNTc4NzYgTDgwLjMwNTA0MzgsMTc2LjM4NTg0OSBMNzkuODU1NTQ3MSwxNzkuMjY1OTU4IEM4MC44ODc3MjQ4LDE3Mi43NjQ5MDMgODYuNDQ4MTY1OSwxNjcuOTcwMjcyIDkzLjAzMjQ2MDcsMTY3Ljk3MDI3MiBMMTIwLjQ2ODQxLDE2Ny45NzAyNzIgQzE3NC4zNjYzOTgsMTY3Ljk3MDI3MiAyMTYuNTY5MTQ3LDE0Ni4wNzgxMTYgMjI4Ljg5NzAxMiw4Mi43NDkwMTk3IEMyMjkuMjYzMjY4LDgwLjg3NjExNjcgMjI5LjU3OTU4MSw3OS4wNTMxNTc3IDIyOS44NTQyNzMsNzcuMjcxODE4OCBDMjI4LjI5NzY4Myw3Ni40NDc3NDE0IDIyOC4yOTc2ODMsNzYuNDQ3NzQxNCAyMjkuODU0MjczLDc3LjI3MTgxODggQzIzMy41MjUxNjMsNTMuODY0NjkyNCAyMjkuODI5MzAxLDM3LjkzMjUzMDIgMjE3LjE2ODQ3NiwyMy41MDcwMTQ2IiBmaWxsPSIjMjczNDZBIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwMi4zOTY5NzYsNjguODM5NTkyOSBDMTAzLjkzNjkxOSw2OC4xMDcwNzk3IDEwNS42NTE2NjUsNjcuNjk5MjAzIDEwNy40NDk2NTIsNjcuNjk5MjAzIEwxODAuNzY3NTY1LDY3LjY5OTIwMyBDMTg5LjQ0OTUxMSw2Ny42OTkyMDMgMTk3LjU0ODc3Niw2OC4yNjUyMzYgMjA0Ljk0ODgyNCw2OS40NTU1Njk5IEMyMDcuMDcxNDQ4LDY5Ljc5Njg1NDUgMjA5LjEyNzQ3OSw3MC4xODgwODMxIDIxMS4xMjUyNDIsNzAuNjM3NTc5OSBDMjEzLjEyMzAwNiw3MS4wNzg3NTI2IDIxNS4wNjI1MDEsNzEuNTc4MTkzNCAyMTYuOTQzNzI4LDcyLjEyNzU3ODMgQzIxNy44ODQzNDEsNzIuNDAyMjcwOCAyMTguODA4MzA3LDcyLjY4NTI4NzIgMjE5LjcxNTYyNCw3Mi45ODQ5NTE3IEMyMjMuMzUzMjE4LDc0LjIwMDI1NzcgMjI2Ljc0MTA5Miw3NS42MTUzNCAyMjkuODU0MjczLDc3LjI3MTgxODggQzIzMy41MjUxNjMsNTMuODU2MzY4MyAyMjkuODI5MzAxLDM3LjkzMjUzMDIgMjE3LjE2ODQ3NiwyMy41MDcwMTQ2IEMyMDMuMjI1NzUzLDcuNjI0Nzk2NTEgMTc4LjA0NTYxMiwwLjgxNTc1MzMzOCAxNDUuODIzMzU1LDAuODE1NzUzMzM4IEw1Mi4yOTQ3Mzc5LDAuODE1NzUzMzM4IEM0NS43MTA0NDMxLDAuODE1NzUzMzM4IDQwLjEwODM4MTksNS42MTAzODUyIDM5LjA3NjIwNDIsMTIuMTExNDM5OSBMMC4xMzY0NjgzMDIsMjU5LjA2ODI3NyBDLTAuNjM3NjY0OTY4LDI2My45NDYxNDkgMy4xMzMxMTMyMiwyNjguMzQ5NTUyIDguMDYwOTI5MywyNjguMzQ5NTUyIEw2NS44MDQ2MTIsMjY4LjM0OTU1MiBMOTUuODg3NTk3NCw3Ny41Nzk4MDczIEM5Ni41MDM1NzQ0LDczLjY2NzUyMDggOTkuMDE3NDI2NSw3MC40NjI3NzU2IDEwMi4zOTY5NzYsNjguODM5NTkyOSBaIiBmaWxsPSIjMjczNDZBIj48L3BhdGg+CgkJPHBhdGggZD0iTTIyOC44OTcwMTIsODIuNzQ5MDE5NyBDMjE2LjU2OTE0NywxNDYuMDY5NzkyIDE3NC4zNjYzOTgsMTY3Ljk3MDI3MiAxMjAuNDY4NDEsMTY3Ljk3MDI3MiBMOTMuMDI0MTM2NywxNjcuOTcwMjcyIEM4Ni40Mzk4NDE5LDE2Ny45NzAyNzIgODAuODc5NDAwNywxNzIuNzY0OTAzIDc5Ljg1NTU0NzEsMTc5LjI2NTk1OCBMNjEuODE3NDA5NSwyOTMuNjIxMjU4IEM2MS4xNDMxNjQ0LDI5Ny44ODMxNTMgNjQuNDM5NDczOCwzMDEuNzQ1NDk1IDY4Ljc1MTMxMjksMzAxLjc0NTQ5NSBMMTE3LjQyMTgyMSwzMDEuNzQ1NDk1IEMxMjMuMTgyMDM4LDMwMS43NDU0OTUgMTI4LjA4NDg4MiwyOTcuNTUwMTkyIDEyOC45ODM4NzYsMjkxLjg2NDg5MSBMMTI5LjQ1ODM0NCwyODkuMzg0MzM1IEwxMzguNjMxNDA3LDIzMS4yNDk0MjMgTDEzOS4yMjI0MTIsMjI4LjAzNjM1NCBDMTQwLjEyMTQwNiwyMjIuMzUxMDUzIDE0NS4wMjQyNSwyMTguMTU1NzUgMTUwLjc4NDQ2NywyMTguMTU1NzUgTDE1OC4wNjc5NzksMjE4LjE1NTc1IEMyMDUuMjE1MTkzLDIxOC4xNTU3NSAyNDIuMTMyMTkzLDE5OS4wMDIxOTQgMjUyLjkyMDExNSwxNDMuNjA1ODg0IEMyNTcuNDIzNDA2LDEyMC40NTY4MDIgMjU1LjA5MjY4MywxMDEuMTI4NDQyIDI0My4xODEwMTksODcuNTUxOTc1NiBDMjM5LjU2ODM5Nyw4My40Mzk5MTI5IDIzNS4wODE3NTQsODAuMDQzNzE1MyAyMjkuODU0MjczLDc3LjI3MTgxODggQzIyOS41NzEyNTcsNzkuMDYxNDgxNyAyMjkuMjYzMjY4LDgwLjg3NjExNjcgMjI4Ljg5NzAxMiw4Mi43NDkwMTk3IEwyMjguODk3MDEyLDgyLjc0OTAxOTcgWiIgZmlsbD0iIzI3OTBDMyI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0yMTYuOTUyMDUyLDcyLjEyNzU3ODMgQzIxNS4wNzA4MjUsNzEuNTc4MTkzNCAyMTMuMTMxMzMsNzEuMDc4NzUyNiAyMTEuMTMzNTY2LDcwLjYzNzU3OTkgQzIwOS4xMzU4MDMsNzAuMTk2NDA3MSAyMDcuMDcxNDQ4LDY5LjgwNTE3ODUgMjA0Ljk1NzE0OCw2OS40NjM4OTM5IEMxOTcuNTQ4Nzc2LDY4LjI2NTIzNiAxODkuNDU3ODM1LDY3LjY5OTIwMyAxODAuNzY3NTY1LDY3LjY5OTIwMyBMMTA3LjQ1Nzk3Niw2Ny42OTkyMDMgQzEwNS42NTE2NjUsNjcuNjk5MjAzIDEwMy45MzY5MTksNjguMTA3MDc5NyAxMDIuNDA1Myw2OC44NDc5MTY5IEM5OS4wMTc0MjY1LDcwLjQ3MTA5OTYgOTYuNTExODk4NCw3My42Njc1MjA4IDk1Ljg5NTkyMTQsNzcuNTg4MTMxMyBMODAuMzEzMzY3OCwxNzYuMzg1ODQ5IEw3OS44NjM4NzExLDE3OS4yNjU5NTggQzgwLjg4NzcyNDgsMTcyLjc2NDkwMyA4Ni40NDgxNjU5LDE2Ny45NzAyNzIgOTMuMDMyNDYwNywxNjcuOTcwMjcyIEwxMjAuNDc2NzM0LDE2Ny45NzAyNzIgQzE3NC4zNzQ3MjIsMTY3Ljk3MDI3MiAyMTYuNTc3NDcxLDE0Ni4wNzgxMTYgMjI4LjkwNTMzNiw4Mi43NDkwMTk3IEMyMjkuMjcxNTkyLDgwLjg3NjExNjcgMjI5LjU3OTU4MSw3OS4wNjE0ODE3IDIyOS44NjI1OTcsNzcuMjcxODE4OCBDMjI2Ljc0MTA5Miw3NS42MjM2NjQgMjIzLjM2MTU0Miw3NC4yMDAyNTc3IDIxOS43MjM5NDgsNzIuOTkzMjc1NyBDMjE4LjgxNjYzMSw3Mi42OTM2MTEyIDIxNy44OTI2NjUsNzIuNDAyMjcwOCAyMTYuOTUyMDUyLDcyLjEyNzU3ODMiIGZpbGw9IiMxRjI2NEYiPjwvcGF0aD4KCTwvZz4KPC9zdmc+"},{"title":"SolidWeb","value":"solidweb.org","selected":false,"icon":"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjM1MiIgaGVpZ2h0PSIzMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik04Ny45NzI5NiAyODIuMzUyN0wyNy4yNDEzMyAxNzcuMDIyMDdjLTUuNjIwNDEtOS43NTc2NS01LjYyMDQxLTIxLjc3OTA4IDAtMzEuNTM2NzRMODcuOTcyOTYgNDAuMjMyOGM1LjY0NjQzLTkuNzgzNjcgMTYuMDgwNjEtMTUuNzk0MzkgMjcuMzIxNDMtMTUuNzk0MzloMTIxLjM4NTJjMTEuMjY2ODQgMCAyMS43MjcwNCA2LjAxMDcyIDI3LjMyMTQzIDE1Ljc5NDRsNjAuNzU3NjUgMTA1LjMwNDU4YzUuNjIwNDEgOS43NTc2NiA1LjYyMDQxIDIxLjc3OTA5IDAgMzEuNTM2NzRsLTYwLjczMTYzIDEwNS4zMzA2MWMtNS42NDY0MyA5Ljc4MzY3LTE2LjA4MDYxIDE1Ljc5NDM5LTI3LjMyMTQzIDE1Ljc5NDM5SDExNS4zNzI0NWMtMTEuMzE4ODgtLjA1MjA0LTIxLjcyNzA0LTYuMDg4NzgtMjcuMzk5NS0xNS44NDY0M3oiIGZpbGw9IiNGRkYiLz4KICAgIDxwYXRoIGQ9Ik05My4xNTEwMiAyNzUuMTk3MDhsLTU3LjExNDgtOTkuMDU5N2MtNS4zMDgxNi05LjE4NTItNS4zMDgxNi0yMC41MDQwOCAwLTI5LjY2MzI2bDU3LjExNDgtOTkuMDg1NzJjNS4zMzQxOC05LjIxMTIyIDE1LjE0Mzg4LTE0Ljg1NzY1IDI1LjczNDE4LTE0Ljg1NzY1aDExNC4yMjk2YzEwLjU5MDMgMCAyMC40MjYwMiA1LjY0NjQzIDI1LjczNDE4IDE0Ljg1NzY1bDU3LjE2Njg0IDk5LjAzMzY4YzUuMzA4MTYgOS4xODUyIDUuMzA4MTYgMjAuNTA0MDggMCAyOS42NjMyNkwyNTguODc1IDI3NS4yMjMxYy01LjMzNDE4IDkuMjExMjItMTUuMTQzODggMTQuODU3NjUtMjUuNzM0MTggMTQuODU3NjVIMTE4LjkzNzI0Yy0xMC42NDIzNCAwLTIwLjQ1MjA0LTUuNjcyNDUtMjUuNzg2MjItMTQuODgzNjd6IiBmaWxsPSIjN0M0REZGIi8+CiAgICA8cGF0aCBkPSJNMTE4LjQ2ODg4IDE0Mi4yMzI4aDExNy41MzQxOGMxLjQ4MzE2IDAgMi42NTQwOC0xLjE5Njk1IDIuNjU0MDgtMi42NTQwOXYtMjIuMDM5MjhjMC0xNC42NDk1LTExLjg5MTMyLTI2LjU0MDg1LTI2LjU0MDgxLTI2LjU0MDg1aC03MC41NjczNWMtMjAuNTMwMS0uMDI2LTM3LjE1NzIyIDE2LjYwMTA1LTM3LjE1NzIyIDM3LjEzMTE1LS4wMjU5NCA3LjgzMjE0IDYuMjcxIDE0LjEwMzA2IDE0LjA3NzEyIDE0LjEwMzA2ek0xMjkuOTk1OTIgMjM5LjYwMTE2SDIwMC4yMjVjMjEuMjA2NjMgMCAzOC40MzIxNC0xNy4yMjU1MSAzOC40MzIxNC0zOC40MzIxNCAwLTcuMDc3NTUtNS43MjQ0OS0xMi44MjgwNi0xMi44MjgwNi0xMi44MjgwNkgxMDYuOTQxODRjLTEuNDU3MTUgMC0yLjU1MDA1IDEuMTcwOTEtMi41NTAwNSAyLjU1djIzLjA1NDA4Yy0uMDI1OTcgMTQuMTgxMTIgMTEuNDc1MDUgMjUuNjU2MTIgMjUuNjA0MTMgMjUuNjU2MTJ6IiBmaWxsPSIjRjdGN0Y3Ii8+CiAgICA8cGF0aCBkPSJNMTA5LjU5NTkyIDEzOS4zMTg1bDg3LjY2Mjc1IDg3LjY2Mjc2YzUuODAyNTUgNS44MDI1NSAxNS4xOTU5MiA1LjgwMjU1IDIwLjk5ODQ3IDBsMTUuMTk1OTItMTUuMTk1OTJjNS44MDI1NS01LjgwMjU1IDUuODAyNTUtMTUuMTk1OTEgMC0yMC45OTg0N2wtODcuNjM2NzMtODcuNjYyNzVjLTUuODAyNTUtNS44MDI1NS0xNS4xOTU5Mi01LjgwMjU1LTIwLjk5ODQ3IDBsLTE1LjE5NTkyIDE1LjE5NTkyYy01Ljg1NDYgNS44MDI1NS01Ljg1NDYgMTUuMjIxOTQtLjAyNjAyIDIwLjk5ODQ3eiIgZmlsbD0iI0Y3RjdGNyIvPgogICAgPHBhdGggZmlsbD0iIzQ0NCIgb3BhY2l0eT0iLjMiIGQ9Ik0xOTguNjg5OCAyMjguNDY0NDNsLTUxLjQ5NDQtNDAuMTIzNDdoMTEuMzk2OTV6TTE0NC4zNTkxOCAxMDEuNjY2OThsNDAuNTY1ODIgNDAuNTY1ODFoMTMuNzY0OHoiLz4KICA8L2c+Cjwvc3ZnPg==","underline":true},{"title":"Custom","value":"","selected":false}]'),Z=r.ZP.div`
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .issuers {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .issuer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .remove {
          cursor: pointer;
        }
        .data {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: space-between;
          > .icon {
            width: 32px;
            height: 32px;
          }
          > .url {
            width: 280px;
          }
        }
      }
      .right {
        width: 56px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .add {
    cursor: pointer;
  }
`;var Q;function B(){return B=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},B.apply(this,arguments)}const R=(e,s)=>{let{title:i,titleId:a,...n}=e;return t.createElement("svg",B({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":a},n),i?t.createElement("title",{id:a},i):null,Q||(Q=t.createElement("path",{d:"M8.00004 1.33301C4.32004 1.33301 1.33337 4.31967 1.33337 7.99967C1.33337 11.6797 4.32004 14.6663 8.00004 14.6663C11.68 14.6663 14.6667 11.6797 14.6667 7.99967C14.6667 4.31967 11.68 1.33301 8.00004 1.33301ZM11.3334 8.66634H4.66671V7.33301H11.3334V8.66634Z",fill:"#D0D5DD"})))},W=(0,t.forwardRef)(R);function G(e){let{issuers:s=[],onChange:i}=e;const[a,n]=(0,t.useState)({}),[l,c]=(0,t.useState)(""),M=!l&&!(null!==a&&void 0!==a&&a.value)||!(null!==a&&void 0!==a&&a.title)||s.some((e=>e.domain===l));return(0,p.jsx)(Z,{children:(0,p.jsxs)("ul",{className:"issuers",children:[s.map((e=>{let{enable:t,favicon:a,domain:n}=e;return(0,p.jsxs)("li",{className:"issuer",children:[(0,p.jsxs)("div",{className:"left",children:[(0,p.jsx)(W,{className:"remove",onClick:()=>{i(s.filter((e=>e.domain!==n)))}}),(0,p.jsxs)("div",{className:"data",children:[Boolean(a)&&(0,p.jsx)("img",{src:a,alt:"logo",className:"icon"}),(0,p.jsx)(j.Z,{readOnly:!0,value:n,prefix:"https://",placeholder:"Issuer Domain",className:"url"})]})]}),(0,p.jsx)("div",{className:"right",children:(0,p.jsx)(h,{"data-checked":t,onClick:()=>{i(s.map((e=>({...e,enable:e.domain===n?!t:e.enable}))))}})})]},n)})),(0,p.jsxs)("li",{className:"issuer add",children:[(0,p.jsxs)("div",{className:"left",children:[(0,p.jsx)(S,{options:Y.map((e=>({...e,selected:s.some((s=>s.domain===e.value))}))),current:a,updateSelect:n}),(0,p.jsx)("div",{className:"data",children:(0,p.jsx)(j.Z,{onChange:e=>{c(e.target.value)},readOnly:!(null===a||void 0===a||!a.value),value:(null===a||void 0===a?void 0:a.value)||l,prefix:"https://",placeholder:"domain.com",className:"url"})})]}),(0,p.jsx)("div",{className:"right",children:(0,p.jsx)(P.Z,{disabled:M,onClick:()=>{const{icon:e,value:t}=Y.find((e=>e.value===a.value));i(s.concat({enable:!0,favicon:e||"",domain:t||l})),n({}),c("")},children:"Add"})})]})]})})}var K=i(8536),F=i(3656);function H(){const{changed:e,clientId:s,updateClientId:i,updateClientIdToServer:t}=(0,K.Z)(),{config:a,changed:n,updateGithubAuthConfigToServer:l,updateGithubAuthConfig:c}=(0,F.Z)(),{values:M,updateConfig:r,setValues:o,reset:d,changed:N}=(0,w.Z)("login"),g=e=>{const{key:s}=e.target.dataset;s&&c({[s]:e.target.value})},I=e=>{o((s=>({...s,...e})))};if(!M)return null;const{google:m,magic_link:_,github:y,metamask:L,password:E,oidc:z=[]}=null!==M&&void 0!==M?M:{},O=e||N||n;return(0,p.jsxs)(T,{children:[(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsx)("div",{className:"input",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsx)("div",{className:"txt",children:(0,p.jsx)(u.Z,{children:"Password"})}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with password."})]}),(0,p.jsx)(h,{onClick:I.bind(null,{password:!E}),"data-checked":E})]})}),(0,p.jsx)("div",{className:"input",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsx)("div",{className:"txt",children:(0,p.jsx)(u.Z,{children:"Magic Link"})}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with Magic Link."})]}),(0,p.jsx)(h,{onClick:I.bind(null,{magic_link:!_}),"data-checked":_})]})}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)(u.Z,{children:"Google"}),(0,p.jsx)(f,{link:"https://doc.rustchat.com/en-us/login-google.html"})]}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with Google."})]}),(0,p.jsx)(h,{onClick:I.bind(null,{google:!m}),"data-checked":m})]}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)(j.Z,{disabled:!m,onChange:e=>{i(e.target.value)},placeholder:"Client ID",value:s})})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)(u.Z,{children:"Github"}),(0,p.jsx)(f,{link:"https://doc.rustchat.com/en-us/login-github.html"})]}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with Github."})]}),(0,p.jsx)(h,{onClick:I.bind(null,{github:!y}),"data-checked":y})]}),(0,p.jsxs)("div",{className:"row inputs",children:[(0,p.jsx)(j.Z,{disabled:!y,"data-key":"client_id",onChange:g,placeholder:"Github Client ID",value:null===a||void 0===a?void 0:a.client_id}),(0,p.jsx)(j.Z,{disabled:!y,"data-key":"client_secret",onChange:g,placeholder:"Github Client Secret",value:null===a||void 0===a?void 0:a.client_secret})]})]}),(0,p.jsx)("div",{className:"input",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)(u.Z,{children:"Metamask"}),(0,p.jsx)(f,{link:"https://doc.rustchat.com/en-us/login-metamask.html"})]}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with Metamask."})]}),(0,p.jsx)(h,{onClick:I.bind(null,{metamask:!L}),"data-checked":L})]})}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("div",{className:"title",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"OIDC"}),(0,p.jsx)(f,{link:"https://doc.rustchat.com/en-us/login-webid.html"})]}),(0,p.jsx)("span",{className:"desc",children:"Save my login details for next time."})]})}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)(G,{issuers:z,onChange:e=>{o((s=>({...s,oidc:e})))}})})]})]}),O&&(0,p.jsx)(x.Z,{saveHandler:async()=>{const{google:s}=M;N&&r(M),s&&e&&(await t(),N||D.ZP.success("Configuration Updated!")),y&&n&&(await l(),N||D.ZP.success("Configuration Updated!"))},resetHandler:d})]})}function J(){const{values:e,toggleEnable:s,updateConfig:i,setValues:t,reset:a,changed:n}=(0,w.Z)("firebase"),l=e=>{const s=e.target.value,{type:i}=e.target.dataset;t((e=>({...e,[i]:s})))},{token_url:c,project_id:M,private_key:r,client_email:o,enabled:d=!1}=null!==e&&void 0!==e?e:{};return(0,p.jsxs)(T,{children:[(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsxs)("div",{className:"input row",children:[(0,p.jsx)(u.Z,{children:"Enable"}),(0,p.jsx)(h,{onClick:s,"data-checked":d})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"name",children:"Token Url"}),(0,p.jsx)(j.Z,{disabled:!d,"data-type":"token_url",onChange:l,value:c||"https://oauth2.googleapis.com/token",name:"token_url",placeholder:"Token URL"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Project ID"}),(0,p.jsx)(j.Z,{disabled:!d,"data-type":"project_id",onChange:l,value:M,name:"project_id",placeholder:"Project ID"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Private Key"}),(0,p.jsx)(N.Z,{rows:10,disabled:!d,"data-type":"private_key",onChange:l,value:r,name:"private_key",placeholder:"Private key"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Client Email"}),(0,p.jsx)(j.Z,{disabled:!d,"data-type":"client_email",onChange:l,value:o,name:"client_email",placeholder:"Client Email address"})]})]}),n&&(0,p.jsx)(x.Z,{saveHandler:()=>{i(e)},resetHandler:a})]})}const V=i.p+"static/media/question.f1e6b7aab95b0ab2de07.svg",X=r.ZP.div`
  display: flex;
  gap: 16px;
  white-space: nowrap;
  margin-top: 24px;
`;function q(){const[e,s]=(0,t.useState)(""),[i,{isSuccess:a,isError:n}]=(0,o.D$)(),{reset:l,updateConfig:c,values:M,setValues:r,changed:d,toggleEnable:N}=(0,w.Z)("smtp"),g=e=>{const s=e.target.value,{type:i}=e.target.dataset;r((e=>({...e,[i]:s})))};(0,t.useEffect)((()=>{a&&D.ZP.success("Send Test Email Successfully"),n&&D.ZP.error("Send Test Email Fail")}),[a,n]);const{host:I,port:m,from:_,username:y,password:L,enabled:E=!1}=null!==M&&void 0!==M?M:{};return(0,p.jsxs)(T,{children:[(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsxs)("div",{className:"input row",children:[(0,p.jsx)(u.Z,{children:"Enable"}),(0,p.jsx)(h,{onClick:N,"data-checked":E})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"name",children:"Host"}),(0,p.jsx)(j.Z,{disabled:!E,"data-type":"host",onChange:g,value:I,name:"host",placeholder:"SMTP Host"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Port"}),(0,p.jsx)(j.Z,{disabled:!E,type:"number","data-type":"port",onChange:g,value:m,name:"port",placeholder:"SMTP Port"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"From"}),(0,p.jsx)(j.Z,{disabled:!E,"data-type":"from",onChange:g,value:_,name:"from",placeholder:"SMTP From"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Username"}),(0,p.jsx)(j.Z,{disabled:!E,"data-type":"username",onChange:g,value:y,name:"username",placeholder:"SMTP Username"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Password"}),(0,p.jsx)(j.Z,{type:"password",disabled:!E,"data-type":"password",onChange:g,value:L,name:"password",placeholder:"SMTP Password"})]})]}),(0,p.jsxs)("div",{className:"tip",children:[(0,p.jsx)("img",{src:V,alt:"question icon"}),(0,p.jsx)("a",{href:"https://rustchat.com/doc/smtp-setting",target:"_blank",className:"link",rel:"noreferrer",children:"How to set up SMTP?"})]}),(0,p.jsxs)(X,{children:[(0,p.jsx)(j.Z,{type:"email",disabled:!E,onChange:e=>{const i=e.target.value;s(i)},value:e,name:"email",placeholder:"test@email.com"}),(0,p.jsx)(P.Z,{disabled:!E||!e,onClick:()=>{i({to:e,subject:"test title",content:"test content"})},children:"Send Test Email"})]}),d&&(0,p.jsx)(x.Z,{saveHandler:()=>{var e;c({...M,port:Number(null!==(e=M.port)&&void 0!==e?e:0)})},resetHandler:l})]})}const $=r.ZP.div`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid orange;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  .tip {
    /* word-break: break-all; */
    color: orange;
    font-size: 12px;
    line-height: 1.5;
  }
  .btns {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 14px;
  }
`,ee=r.ZP.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  > .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    label {
      white-space: nowrap;
      font-size: 14px;
      color: #555;
    }
  }
  > .tip {
    font-size: 12px;
    color: #999;
    line-height: 1.5;
  }
`;function se(){const{data:e}=(0,o.BL)(),[s,{data:i,isSuccess:a,isLoading:n}]=(0,o.gU)();return(0,t.useEffect)((()=>{a&&((0,L.Bn)(),D.ZP.success("Update API Secret Successfully!"))}),[a]),(0,p.jsxs)(ee,{children:[(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)("label",{htmlFor:"secret",children:"API Secure Key:"}),(0,p.jsx)(j.Z,{type:"password",id:"secret",value:i||e})]}),(0,p.jsx)(y.ZP,{interactive:!0,placement:"right-start",trigger:"click",content:(0,p.jsxs)($,{children:[(0,p.jsx)("div",{className:"tip",children:"Are you sure to update API secret? Previous secret will be invalided"}),(0,p.jsxs)("div",{className:"btns",children:[(0,p.jsx)(P.Z,{onClick:L.Bn,className:"cancel small",children:"Cancel"}),(0,p.jsx)(P.Z,{disabled:n,className:"small danger",onClick:s,children:"Yes"})]})]}),children:(0,p.jsx)(P.Z,{children:"Update Secret"})}),(0,p.jsxs)("div",{className:"tip",children:["Tip: The security key agreed between the rustchat server and the third-party app is used to encrypt the communication data."," "]})]})}var ie=i(11);const te=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;function ae(){const{data:e}=(0,o.p5)();return(0,p.jsxs)(te,{children:[(0,p.jsxs)("div",{className:"item",children:["Client Version: ","0.2.14"]}),(0,p.jsxs)("div",{className:"item",children:["Server Version: ",e]}),(0,p.jsxs)("div",{className:"item",children:["Build Timestamp: ","1655219651"]})]})}function ne(){const{changed:e,reset:s,values:i,setValues:t,toggleEnable:a,updateConfig:n}=(0,w.Z)("agora"),l=e=>{const s=e.target.value,{type:i}=e.target.dataset;t((e=>({...e,[i]:s})))},{url:c,project_id:M,app_id:r,app_certificate:o,rtm_key:d,rtm_secret:D,enabled:g=!1}=null!==i&&void 0!==i?i:{};return(0,p.jsxs)(T,{children:[(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsxs)("div",{className:"input row",children:[(0,p.jsx)(u.Z,{children:"Enable"}),(0,p.jsx)(h,{onClick:a,"data-checked":g})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"url",children:"Agora Url"}),(0,p.jsx)(j.Z,{disabled:!g,"data-type":"url",onChange:l,value:c||"https://api.agora.io",name:"url",placeholder:"Agora URL"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"project_id",children:"Project ID"}),(0,p.jsx)(j.Z,{disabled:!g,"data-type":"project_id",onChange:l,value:M,name:"project_id",placeholder:"Project ID"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"app_id",children:"App ID"}),(0,p.jsx)(j.Z,{disabled:!g,"data-type":"app_id",onChange:l,value:r,name:"app_id",placeholder:"APP ID"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"app_certificate",children:"APP Certificate"}),(0,p.jsx)(j.Z,{disabled:!g,"data-type":"app_certificate",onChange:l,value:o,name:"app_certificate",placeholder:"APP Certificate"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"rtm_key",children:"RTM Key"}),(0,p.jsx)(N.Z,{disabled:!g,"data-type":"rtm_key",onChange:l,value:d,name:"rtm_key",placeholder:"RTM Key"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"rtm_secret",children:"RTM Secret"}),(0,p.jsx)(N.Z,{disabled:!g,"data-type":"rtm_secret",onChange:l,value:D,name:"rtm_secret",placeholder:"RTM Secret"})]})]}),e&&(0,p.jsx)(x.Z,{saveHandler:()=>{n(i)},resetHandler:s})]})}const le=[{title:"General",items:[{name:"overview",title:"Overview",component:(0,p.jsx)(m,{})},{name:"members",title:"Members",component:(0,p.jsx)(ie.Z,{}),admin:!0}]},{title:"User",items:[{name:"my_account",title:"My Account",component:(0,p.jsx)(M.Z,{})}]},{title:"Configuration",items:[{name:"firebase",title:"Firebase",component:(0,p.jsx)(J,{})},{name:"agora",title:"Agora",component:(0,p.jsx)(ne,{})},{name:"smtp",title:"SMTP",component:(0,p.jsx)(q,{})},{name:"social_login",title:"Login Methods",component:(0,p.jsx)(H,{})},{name:"api",title:"Third-party APP",component:(0,p.jsx)(se,{})}],admin:!0},{title:"About",items:[{name:"faq",title:"FAQ",component:(0,p.jsx)(ae,{})},{name:"terms",title:"Terms & Privacy",component:"Terms & Privacy"},{name:"feedback",title:"Feedback",component:"feedback"}]}],ce=()=>{const e=(0,c.v9)((e=>e.contacts.byId[e.authData.uid]));return le.filter((s=>!(null===e||void 0===e||!e.is_admin)||!s.admin))};var Me=i(5845),re=i(6284),oe=i(3637),de=i(5607);const je=(0,r.ZP)(Me.Z)`
  .clear {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .txt {
      cursor: pointer;
      color: orange;
      margin-right: 12px;
    }
    input {
      cursor: pointer;
    }
  }
`;function ue(e){let{closeModal:s}=e;const[i,a]=(0,t.useState)(!1),{logout:n,exited:l,exiting:c,clearLocalData:M}=(0,oe.Z)();return(0,t.useEffect)((()=>{l&&(i&&M(),D.ZP.success("Logout Successfully"),setTimeout((()=>{location.href=`${location.origin}#/login`}),500))}),[l,i]),(0,p.jsx)(de.Z,{id:"modal-modal",children:(0,p.jsx)(je,{title:"Log Out",description:"Are you sure want to log out this account?",buttons:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(P.Z,{onClick:s,children:"Cancel"}),(0,p.jsx)(P.Z,{onClick:()=>{n()},className:"danger",children:c?"Logging out":"Log Out"})]}),children:(0,p.jsxs)("div",{className:"clear",children:[(0,p.jsx)("label",{htmlFor:"clear_cb",className:"txt",children:"Clear local data"}),(0,p.jsx)(re.Z,{name:"clear_cb",checked:i,onChange:e=>{a(e.target.checked)}})]})})})}let Ne=null;function xe(){var e;const[s]=(0,a.lr)(),i=ce(),c=i.map((e=>{let{items:s}=e;return s})).flat(),M=s.get("nav");Ne=null!==(e=Ne)&&void 0!==e?e:s.get("f")||"/";const[r,o]=(0,t.useState)(!1),d=(0,n.s0)(),j=()=>{o((e=>!e))},u=c.find((e=>e.name==M))||c[0];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Z,{nav:u,closeModal:()=>{d(Ne),Ne=null},title:"Settings",navs:i,dangers:[{title:"Log Out",handler:j}],children:u.component}),r&&(0,p.jsx)(ue,{closeModal:j})]})}}}]);