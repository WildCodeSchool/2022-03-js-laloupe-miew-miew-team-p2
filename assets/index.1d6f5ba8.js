import{j as $,r as c,a as _,N as Z,u as te,b as ae,O as ne,c as se,R as ie,d as U,e as le,B as ce}from"./vendor.34867da3.js";const oe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))A(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&A(r)}).observe(document,{childList:!0,subtree:!0});function i(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function A(l){if(l.ep)return;l.ep=!0;const o=i(l);fetch(l.href,o)}};oe();const e=$.exports.jsx,a=$.exports.jsxs,ee=({catSlide:t,number:n,index:i,isSelected:A,prevCat:l,nextCat:o})=>e("div",{className:i===n?"slide active":"slide",children:i===n&&a("div",{className:"user-cat",children:[a("section",{className:"slide-container",children:[" ",e("h1",{className:"user-cat-name",children:t.name}),a("div",{className:"usercat-select-container",children:[e("div",{className:"left-arrow",children:A?null:e("button",{className:"prev-btn",type:"button",onClick:l,children:"\xAB"})}),e("img",{className:"usercat-img-select",src:t.image_link,alt:t.name}),e("div",{className:"right-arrow",children:A?null:e("button",{className:"next-btn",type:"button",onClick:o,children:"\xBB"})})]})]}),a("section",{className:"stats-container",children:[" ",a("div",{children:[a("p",{className:"stats",children:["\u2694\uFE0F Attack: ",t.other_pets_friendly*7,"-",t.other_pets_friendly*11]}),a("p",{className:"stats",children:["\u{1FA84} Magic: ",t.intelligence*11,"-",t.intelligence*13]}),a("p",{className:"stats",children:["\u{1F6E1}\uFE0F Defense: ",t.min_weight,"-",t.max_weight]}),a("p",{className:"stats",children:["\u{1F9EA} Average Recovery:"," ",Math.floor(t.min_life_expectancy*t.playfulness/2)]}),a("p",{className:"stats",children:["\u2764\uFE0F Health Point: ",t.max_life_expectancy*10]})]})]})]})});const re=({cat:t,number:n,setNumber:i,isSelected:A,setIsSelected:l,onStartClick:o,apiCat:r,setCat:s,setMode:v})=>{const C=()=>{i(n===t.length-1?0:n+1)},w=()=>{i(n===0?t.length-1:n-1)};return c.exports.useEffect(()=>{s(r)},[r]),t&&a("div",{className:"select",children:[e("h1",{className:"user-cat-title",children:"Choose your CatFighter :"}),e("div",{className:"slider",children:t.length&&t.map((O,k)=>e(ee,{number:n,catSlide:O,index:k,isSelected:A,prevCat:w,nextCat:C},O.name))}),a("div",{className:"isselected-container",children:[e("div",{children:e("button",{type:"button",className:"switch-cat-list",onClick:()=>{v("CustomSelect"),i(0)},children:"Use custom cats"})}),a("div",{children:[" ",A?e("button",{className:"select-btn",type:"button",onClick:()=>l(!1),children:"Cancel"}):e("button",{className:"select-btn",type:"button",onClick:()=>l(!0),children:"Select"})]}),a("div",{children:[" ",A?e("button",{className:"fight-btn",type:"button",onClick:o,children:"FIGHT !"}):null]})]})]})},W=t=>new Promise(n=>{setTimeout(()=>{n()},t)}),Ae=t=>{const[n,i]=c.exports.useState("");return c.exports.useEffect(()=>{i(""),t.length&&(async()=>{let A="";for(let l=0;l<t.length;l+=1)await W(25),A+=t[l],i(A)})()},[t]),n};function de({message:t}){const n=Ae(t);return e("div",{className:"battle-annoncer",children:e("div",{className:"battle-annoncer-text",children:n})})}function he({onAttack:t,onSpecial:n,onHeal:i,turn:A,playerSpecialCD:l,playerHealCD:o,inSequence:r}){return a("div",{className:"battle-menu",children:[e("button",{type:"button",className:A===0?"skills-btn":"skills-btn-onCD",onClick:A===0&&r===!1?t:null,children:"Claw Strike"}),a("button",{type:"button",className:A===0&&l===0?"skills-btn":"skills-btn-onCD",onClick:A===0&&l===0&&r===!1?n:null,children:["Meowch"," ",e("span",{className:"skill-cd-count",children:l!==0?`(${l})`:""})]}),a("button",{type:"button",className:A===0&&o===0?"skills-btn":"skills-btn-onCD",onClick:A===0&&o===0&&r===!1?i:null,children:["Abrakabra"," ",e("span",{className:"skill-cd-count",children:o!==0?`(${o})`:""})]})]})}const me=(t,n,i,A,l)=>{const[o,r]=c.exports.useState("");return c.exports.useEffect(()=>{if(t===1&&n===0&&i===0&&A===l.health){const s=["attack","special"];r(s[Math.floor(Math.random()*s.length)])}else if(t===1&&n===0&&i===0){const s=["attack","special","heal"];r(s[Math.floor(Math.random()*s.length)])}else if(t===1&&n>0&&i===0){const s=["attack","heal","attack","attack"];r(s[Math.floor(Math.random()*s.length)])}else if(t===1&&n===0&&i>0){const s=["attack","special"];r(s[Math.floor(Math.random()*s.length)])}else if(t===1&&n>0&&i>0){const s=["attack"];r(s[Math.floor(Math.random()*s.length)])}else r("")},[t]),o};function ue({cat:t,number:n,rdmNumber:i,onResult:A,enemyCat:l}){const o={name:"Your cat",image:t[n].image_link,attack:t[n].other_pets_friendly*10,special:t[n].intelligence,defenseMin:t[n].min_weight,defenseMax:t[n].max_weight,health:t[n].max_life_expectancy,luck:t[n].playfulness,vitality:t[n].min_life_expectancy},r={name:"Opponent cat",image:l[i].image_link,attack:l[i].other_pets_friendly,special:l[i].intelligence,defenseMin:l[i].min_weight,defenseMax:l[i].max_weight,health:l[i].max_life_expectancy*10,luck:l[i].playfulness,vitality:l[i].min_life_expectancy};function s(d,S){return Math.floor(Math.random()*(S-d+1))+d}const v=({attacker:d,receiver:S})=>{const D=d.attack*s(7,11)-s(S.defenseMin,S.defenseMax);return D>0?D:0},C=({attacker:d,receiver:S})=>{const D=d.special*s(11,13)-Math.floor((S.defenseMin+S.defenseMax)/2);return D>0?D:0},w=({attacker:d})=>s(0,d.luck)*d.vitality,[O,k]=c.exports.useState({}),[B,V]=c.exports.useState(0),[E,T]=c.exports.useState(0),[L,y]=c.exports.useState(0),[f,b]=c.exports.useState(0),q=d=>{const[S,D]=c.exports.useState(0),[Q,j]=c.exports.useState(!1),[Y,X]=c.exports.useState(o.health),[G,I]=c.exports.useState(r.health),[J,p]=c.exports.useState("");return c.exports.useEffect(()=>{const{mode:K,turn:M}=d;if(K){const g=M===0?o:r,u=M===0?r:o;switch(K){case"attack":{const h=v({attacker:g,receiver:u});(async()=>(j(!0),p(`\u2694\uFE0F ${g.name} is attacking !`),await W(2e3),h<=0?p(`${g.name} missed !!`):h<10?p("That's not very effective..."):h>=35?p(`${g.name} perform a critical hit !!`):p(`${u.name} felt that !`),M===0?I(N=>N-h>0?N-h:0):X(N=>N-h>0?N-h:0),await W(2e3),p(`Now it's ${u.name}'s turn !`),await W(1500),D(M===0?1:0),j(!1)))();break}case"special":{const h=C({attacker:g,receiver:u});(async()=>(j(!0),p(`\u{1FA84} ${g.name} uses a special skill !`),await W(2e3),h<=0?p(`${g.name} missed !!`):h<10?p("That's not very effective..."):h>=35?p(`${g.name} perform a critical hit !!`):p(`${u.name} felt that !`),M===0?I(N=>N-h>0?N-h:0):X(N=>N-h>0?N-h:0),await W(2e3),p(`Now it's ${u.name}'s turn !`),M===0?V(4):T(3),await W(1500),D(M===0?1:0),j(!1)))();break}case"heal":{const h=w({attacker:g});(async()=>(j(!0),p(`\u{1F9EA} ${g.name} is trying to heal himself !`),await W(2e3),h>0?p(`${g.name} has recovered health !`):p(`${g.name} failed to heal himself...`),M===0?X(N=>N+h<=g.health?N+h:g.health):I(N=>N+h<=g.health?N+h:g.health),await W(2e3),p(`Now it's ${u.name}'s turn !`),M===0?y(3):b(2),await W(1500),D(M===0?1:0),j(!1)))();break}}}},[d]),{turn:S,inSequence:Q,userHealth:Y,opponentHealth:G,announcerMessage:J}},{turn:m,inSequence:H,userHealth:x,opponentHealth:z,announcerMessage:F}=q(O),P=me(m,E,f,z,r);return c.exports.useEffect(()=>{m===0?V(B===0?0:B-1):m===1&&T(E===0?0:E-1)},[m]),c.exports.useEffect(()=>{m===0?y(L===0?0:L-1):m===1&&b(f===0?0:f-1)},[m]),c.exports.useEffect(()=>{P&&m===1&&!H&&k({turn:m,mode:P})},[m,P,H]),c.exports.useEffect(()=>{(x===0||z===0)&&(async()=>(await W(2e3),A(x===0?r:o)))()},[x,z]),a("div",{className:"battle",children:[e("div",{className:"opponent-menu",children:a("div",{className:"opponent-card",children:[" ",e("img",{className:"opponent-img-battle",src:l[i].image_link,alt:"opponent cat"}),a("h1",{className:"opponent-name",children:["Opponent : ",z,"\u2764\uFE0F"]})]})}),a("div",{className:"battle-announcer-div",children:[" ",e(de,{message:F||"It's your turn to play."})]}),a("div",{className:"player-menu",children:[" ",a("div",{className:"player-div",children:[" ",a("div",{className:"player-card",children:[a("h1",{className:"player-name",children:["Player : ",x,"\u2764\uFE0F"]}),e("img",{className:"player-img-battle",src:t[n].image_link,alt:"user cat"})]}),e("div",{className:"player-stats",children:e(he,{turn:m,playerSpecialCD:B,playerHealCD:L,inSequence:H,onAttack:()=>k({turn:m,mode:"attack"}),onSpecial:()=>k({turn:m,mode:"special"}),onHeal:()=>k({turn:m,mode:"heal"})})})]})]}),e("div",{className:"vs-container",children:e("h1",{className:"vs-title",children:"VS"})})]})}const pe=({winner:t,onSelectClick:n})=>a("div",{className:"result",children:[a("h1",{className:"winner-name",children:[t.name," has won !"]}),e("img",{className:t.name==="Your cat"?"winner-img-user":"winner-img-opponent",src:t.image,alt:"winner cat"}),e("button",{type:"button",className:"play-again-btn",onClick:n,children:"Play Again."})]}),ge=({cat:t,number:n,setNumber:i,isSelected:A,setIsSelected:l,onStartClick:o,customCat:r,setCat:s,setMode:v,setCustomCat:C})=>{function w(u,h){return Math.floor(Math.random()*(h-u+1))+u}const O=()=>{i(n===t.length-1?0:n+1)},k=()=>{i(n===0?t.length-1:n-1)},[B,V]=c.exports.useState(""),[E,T]=c.exports.useState(""),L=66,[y,f]=c.exports.useState(3),[b,q]=c.exports.useState(3),[m,H]=c.exports.useState(7),[x,z]=c.exports.useState(17),[F,P]=c.exports.useState(14),d=L-y-b-m-x-F,S=[{name:B,image_link:E,other_pets_friendly:y,intelligence:b,min_weight:m,max_weight:x,max_life_expectancy:F,min_life_expectancy:w(9,17),playfulness:w(3,5)}],D=()=>{y>3&&f(y-1)},Q=()=>{d>0&&y<5&&f(y+1)},j=()=>{b>3&&q(b-1)},Y=()=>{d>0&&b<5&&q(b+1)},X=()=>{m>7&&H(m-1)},G=()=>{d>0&&m<15&&H(m+1)},I=()=>{x>17&&z(x-1)},J=()=>{d>0&&x<30&&z(x+1)},p=()=>{F>14&&P(F-1)},K=()=>{d>0&&F<20&&P(F+1)},M=()=>{B!==""&&E!==""&&d===0&&(S.map(u=>r.push(u)),T(""),V(""),f(3),q(3),H(7),z(17),P(14),localStorage.setItem("customCat",JSON.stringify(r)),i(n+1))},g=()=>{r.splice(n,1),n===r.length&&i(n-1),localStorage.setItem("customCat",JSON.stringify(r))};return c.exports.useEffect(()=>{C(JSON.parse(localStorage.getItem("customCat"))||[]),s(r)},[r]),t&&a("div",{className:"select",children:[e("h1",{className:"user-cat-title",children:"Choose your CatFighter :"}),e("div",{className:"slider",children:t.map((u,h)=>e(ee,{number:n,catSlide:u,index:h,isSelected:A,prevCat:k,nextCat:O},u.name))}),a("div",{className:"isselected-container",children:[a("div",{children:[" ",e("button",{type:"button",className:"switch-cat-list",onClick:()=>{v("Select"),i(0)},children:"Use default cats"})]}),r.length?e("div",{children:a("button",{type:"button",className:"remove-btn",onClick:g,children:[" ","Remove this cat \u2620\uFE0F"]})}):null,r.length?a("div",{children:[" ",A?e("button",{className:"select-btn",type:"button",onClick:()=>l(!1),children:"Cancel"}):e("button",{className:"select-btn",type:"button",onClick:()=>l(!0),children:"Select"})]}):e("h1",{className:"no-cat-title",children:"There is no custom Cat Fighter yet."}),a("div",{children:[" ",A?e("button",{className:"fight-btn",type:"button",onClick:o,children:"FIGHT !"}):null]}),a("div",{className:"create-cat-container",children:[a("div",{className:"input-container",children:[" ",e("h1",{className:"user-cat-title",children:"Add your Cat :"}),e("input",{className:"input-select",placeholder:"Enter your cat name",type:"text",name:"Cat name",value:B,onChange:u=>V(u.target.value)}),e("input",{className:"input-select-2",placeholder:"Enter your cat image link",type:"text",name:"Cat image link",value:E,onChange:u=>T(u.target.value)})]}),a("div",{className:"assign-point-container",children:[a("h3",{className:"point-left-title",children:["Points Remaining : ",d]}),a("div",{className:"assign-point-div",children:[a("div",{className:"point-title",children:[e("h3",{children:"\u2694\uFE0FAttack : "}),e("h3",{children:"\u{1FA84}Magic : "}),e("h3",{children:"\u{1F6E1}\uFE0FMin def : "}),e("h3",{children:"\u{1F6E1}\uFE0FMax def : "}),e("h3",{children:"\u2764\uFE0FHP : "})]}),a("div",{children:[" ",a("div",{className:"create-attack",children:[" ",e("button",{className:y===3?"change-point-dis":"change-point",type:"button",onClick:D,children:"-"}),e("p",{children:y}),e("button",{type:"button",className:y===5||d===0?"change-point-dis":"change-point",onClick:Q,children:"+"})]}),a("div",{className:"create-magic",children:[" ",e("button",{type:"button",className:b===3?"change-point-dis":"change-point",onClick:j,children:"-"}),e("p",{children:b}),e("button",{type:"button",className:b===5||d===0?"change-point-dis":"change-point",onClick:Y,children:"+"})]}),a("div",{className:"create-defense-min",children:[" ",e("button",{className:m===7?"change-point-dis":"change-point",type:"button",onClick:X,children:"-"}),e("p",{children:m}),e("button",{className:m===15||d===0?"change-point-dis":"change-point",type:"button",onClick:G,children:"+"})]}),a("div",{className:"create-defense-min",children:[" ",e("button",{className:x===17?"change-point-dis":"change-point",type:"button",onClick:I,children:"-"}),e("p",{children:x}),e("button",{className:x===30||d===0?"change-point-dis":"change-point",type:"button",onClick:J,children:"+"})]}),a("div",{className:"create-health-point",children:[" ",e("button",{className:F===14?"change-point-dis":"change-point",type:"button",onClick:p,children:"-"}),e("p",{children:F}),e("button",{className:F===20||d===0?"change-point-dis":"change-point",type:"button",onClick:K,children:"+"})]})]})]})]}),e("div",{className:"create-btn-container",children:e("button",{type:"button",className:"create-cat-btn",onClick:M,children:"Create your cat"})})]})]})]})},fe=()=>{function t(f,b){return Math.floor(Math.random()*(b-f+1))+f}const[n,i]=c.exports.useState("Select"),[A,l]=c.exports.useState([]),[o,r]=c.exports.useState(JSON.parse(localStorage.getItem("customCat"))||[]),[s,v]=c.exports.useState(null),[C,w]=c.exports.useState([]),O=()=>{_.get("https://api.api-ninjas.com/v1/cats?min_weight=17",{headers:{"X-Api-Key":"nwEVbvsWgm1qxCZDGw8C6Q==qqvbZCxpZQd2jsjq"}}).then(f=>f.data).then(f=>{l(f),w(f)})};c.exports.useEffect(()=>{O(),r(JSON.parse(localStorage.getItem("customCat"))||[])},[]);const[k,B]=c.exports.useState(0),V=t(0,15),[E,T]=c.exports.useState(!1),[L,y]=c.exports.useState(void 0);return a("div",{className:"fight-container",children:[n==="Select"&&e(re,{apiCat:A,setApiCat:l,cat:s,setCat:v,number:k,setNumber:B,isSelected:E,setIsSelected:T,setMode:i,onStartClick:()=>i("Battle")}),n==="CustomSelect"&&e(ge,{customCat:o,cat:s,setCat:v,number:k,setNumber:B,isSelected:E,setIsSelected:T,setMode:i,setCustomCat:r,onStartClick:()=>i("Battle")}),n==="Battle"&&e(ue,{enemyCat:C,cat:s,number:k,rdmNumber:V,onResultClick:()=>i("Result"),onResult:f=>{y(f),i("Result")}}),n==="Result"&&e(pe,{winner:L,onSelectClick:()=>{y(void 0),i("Select"),T(!1)}})]})};var Ne="/2022-03-js-laloupe-miew-miew-team-p2/assets/griffe.5d54255b.png";function ye(){const t=new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/menuclick.wav"),n=()=>{t.play()},i=()=>{alert("Developed by the Meow Team of the Wild Code School")};return a("header",{children:[e("div",{id:"text",className:"title",children:a("div",{className:"catfight",children:[e("span",{id:"I",children:"C"}),e("span",{id:"F",children:"A"}),e("span",{id:"I",children:"T"}),e("span",{id:"F",children:"F"}),e("span",{id:"T",children:"I"}),e("span",{id:"I",children:"G"}),e("span",{id:"H",children:"H"}),e("span",{id:"I",children:"T"})]})}),e("div",{className:"position-image-home",children:e("img",{src:Ne,alt:"Griffe de chat",className:"picture--size"})}),e("div",{className:"cat-placement",children:a("div",{className:"cat",children:[e("div",{className:"ear ear--left"}),e("div",{className:"ear ear--right"}),a("div",{className:"face",children:[e("div",{className:"eye eye--left",children:e("div",{className:"eye-pupil"})}),e("div",{className:"eye eye--right",children:e("div",{className:"eye-pupil"})}),e("div",{className:"muzzle",onClick:()=>i()})]})]})}),e("div",{className:"fight-meow",children:e(Z,{to:"/2022-03-js-laloupe-miew-miew-team-p2/content/fightpage",className:"fight-button",onClick:n,children:"Fight Meow"})})]})}function ve(){return e("footer",{className:"footer--background",children:a("div",{className:"footer--text",children:[e("p",{children:"\xA9 Developped by the Meow Team @WildCodeSchool"}),e("p",{children:"no cats where harmed during the developpement of this game"})]})})}function we(){const[t,n]=c.exports.useState(""),[i,A]=c.exports.useState(""),[l,o]=c.exports.useState(""),r=w=>A(w.target.value),s=w=>n(w.target.value),v=w=>o(w.target.value);function C(){alert("Your email has been sent")}return a("form",{className:"my-form",children:[e("input",{type:"hidden",name:"form-name",value:"contact"}),e("h1",{className:"my-title",children:"Lets us improve the cat fight experience"}),e("label",{htmlFor:"name",className:"my-label",children:"Name :"}),e("input",{name:"name",className:"input-contact",placeholder:"Your name",id:"fullName",type:"text",value:i,onChange:r,required:!0}),e("label",{htmlFor:"email",className:"my-label",children:"Email :"}),e("input",{name:"email",placeholder:"Your email adress",className:"input-contact",id:"email",type:"email",value:t,onChange:s,required:!0}),e("label",{htmlFor:"message ",className:"my-label",children:"Message :"}),e("textarea",{name:"message",className:"textarea-contact",id:"message",type:"message",placeholder:"Write your message here...",value:l,onChange:v,required:!0}),e("button",{id:"btn",type:"button",onClick:C,children:"SUBMIT"}),e(ve,{})]})}var be="/2022-03-js-laloupe-miew-miew-team-p2/assets/chat.ef15dc29.png",xe="/2022-03-js-laloupe-miew-miew-team-p2/assets/email.ee5c8bef.png",Ce="/2022-03-js-laloupe-miew-miew-team-p2/assets/livre-ouvert.526d254b.png",ke="data:image/png;base64,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";function Me(){const t=te(),n=ae(),[i,A]=c.exports.useState(!0);return a("nav",{className:"navigation",children:[e("div",{onClick:()=>A(!i),className:i?"circle-white phoneAppear":"circle-white phoneDisappear",children:e("div",{className:"point",children:e("img",{src:ke,alt:"Burger icon",className:"resize-burger"})})}),e(Z,{to:"/2022-03-js-laloupe-miew-miew-team-p2//",children:e("h1",{children:"CAT FIGHT"})}),e(Z,{to:"/2022-03-js-laloupe-miew-miew-team-p2/",className:"navigation--title",children:"Home"}),e(Z,{to:"/2022-03-js-laloupe-miew-miew-team-p2/content/fightpage",className:t.pathname==="/content/fightpage"?"navigation--title active":"navigation--title",children:"Fight"}),e(Z,{to:"/2022-03-js-laloupe-miew-miew-team-p2/content/meow",className:t.pathname==="/content/meow"?"navigation--title active":"navigation--title",children:"Meow Who"}),e(Z,{to:"/2022-03-js-laloupe-miew-miew-team-p2/content/contact",className:t.pathname==="/content/contact"?"navigation--title active":"navigation--title",children:"Contact"}),a("div",{className:i?"phone phoneDisappear":"phone phoneAppear",children:[e("input",{className:"my-input--header",type:"radio",name:"s",id:"s1",onChange:()=>{setTimeout(()=>A(!0),1e3),n("/2022-03-js-laloupe-miew-miew-team-p2/content/meow")},checked:t.pathname==="/content/meow"?"checked":null}),e("input",{className:"my-input--header",type:"radio",name:"s",id:"s2",onChange:()=>{setTimeout(()=>A(!0),1e3),n("/2022-03-js-laloupe-miew-miew-team-p2/content/fightpage")},checked:t.pathname==="/content/fightpage"?"checked":null}),e("input",{className:"my-input--header",type:"radio",name:"s",id:"s3",onChange:()=>{setTimeout(()=>A(!0),1e3),n("/2022-03-js-laloupe-miew-miew-team-p2/content/contact")},checked:t.pathname==="/content/contact"?"checked":null}),e("label",{htmlFor:"s1",children:e("img",{src:Ce,alt:"Icon Book"})}),e("label",{htmlFor:"s2",children:e("img",{src:be,alt:"Icon Cat"})}),e("label",{htmlFor:"s3",children:e("img",{src:xe,alt:"Icon Contact"})}),e("div",{className:"circle"}),e("div",{className:"phone_content",children:e("div",{className:"phone_bottom",children:e("span",{className:"indicator"})})})]})]})}function Fe(){return a("section",{children:[e(Me,{}),e(ne,{})]})}var Se="/2022-03-js-laloupe-miew-miew-team-p2/assets/loader.9970753d.gif";function De(){return e("div",{children:a("section",{className:"loader--container",children:[e("img",{src:Se,alt:"Loader",className:"loader-size"}),e("p",{children:"Developped by"}),e("p",{children:"Meow Team"})]})})}const We=({cat:t,setDisplay:n})=>se.exports.createPortal(a("div",{className:"portail",onClick:()=>n(!1),role:"button",tabIndex:"0",children:[e("div",{children:e("button",{type:"button",className:"close-button",children:"X"})}),e("div",{className:"position-portail-image",children:e("img",{src:t.image_link,alt:t.name,className:"portail-image-chat"})}),a("div",{className:"details",children:[a("p",{className:"cat-details",children:["\u{1F408} Name : ",e("span",{id:"bold-title",children:t.name})]}),a("p",{className:"cat-details",children:["\u{1F3F3}\uFE0F Origin : ",e("span",{id:"bold-title",children:t.origin})]}),a("p",{className:"cat-details",children:["\u{1F9FC} Grooming : ",a("span",{id:"bold-title",children:[t.grooming," /5"]})]}),a("p",{className:"cat-details",children:["\u{1F9E0} Intelligence : ",a("span",{id:"bold-title",children:[t.intelligence," /5"]})]}),a("p",{className:"cat-details",children:["\u2696\uFE0F max weight : ",a("span",{id:"bold-title",children:[t.max_weight," Pounds"]})]}),a("p",{className:"cat-details",children:["\u2696\uFE0F min weight : ",a("span",{id:"bold-title",children:[t.min_weight," Pounds"]})]}),a("p",{className:"cat-details",children:["\u23F3 Max Life Expectancy :"," ",a("span",{id:"bold-title",children:[" ",t.max_weight," years around"]})]}),a("p",{className:"cat-details",children:["\u{1F92B}\u{1F508} Meowing : ",a("span",{id:"bold-title",children:[t.meowing," /5"]})]})]})]}),document.body);function R({cat:t}){const[n,i]=c.exports.useState(!1);return a("section",{className:"card",children:[e("img",{onClick:()=>i(!0),src:t.image_link,alt:t.name,className:"image-chat"}),e("h2",{className:"cat-name",children:t.name}),n&&e(We,{cat:t,setDisplay:i})]})}function Be(){const[t,n]=c.exports.useState([]);function i(){const s=[];_.get("https://api.api-ninjas.com/v1/cats?family_friendly=5",{headers:{"X-Api-Key":"EeDQiPwn2Dx8mH16Xzs44Q==Qd2I6TdRSwScySwH"}}).then(v=>v.data).then(v=>{s.push(...v),_.get("https://api.api-ninjas.com/v1/cats?family_friendly=5&offset=20",{headers:{"X-Api-Key":"EeDQiPwn2Dx8mH16Xzs44Q==Qd2I6TdRSwScySwH"}}).then(C=>C.data).then(C=>{s.push(...C),n(s)})})}c.exports.useEffect(()=>{i()},[]);const[A,l]=c.exports.useState(""),[o,r]=c.exports.useState("");return c.exports.useEffect(()=>{r(A===""?"":"name")},[A]),a("div",{className:"meowwho-page",children:[e("h2",{className:"sous-title-meow-page",children:"Discover our cats according to their characteristics"}),a("div",{className:"search",children:[e("h2",{className:"search-title",children:"Search by Name : "}),e("input",{type:"text",id:"name-filter",value:A,name:"name",placeholder:"Write here the name of a cat",onChange:s=>l(s.target.value)})]}),a("div",{className:"filter-buttons-container",children:[e("button",{className:o==="max-weight"?"button-filter-active3":"button-filter",type:"button",onClick:()=>{r(o!=="max-weight"?"max-weight":"")},children:"FATTEST"}),e("button",{className:o==="playfulness"?"button-filter-active2":"button-filter",type:"button",onClick:()=>{r(o!=="playfulness"?"playfulness":"")},children:"PLAYFULLNESS"}),e("button",{className:o==="children-friendly"?"button-filter-active":"button-filter",type:"button",onClick:()=>{r(o!=="children-friendly"?"children-friendly":"")},children:"CHILDREN-FRIENDLY"})]}),a("section",{className:"cards",children:[o===""&&t.map(s=>e(R,{cat:s},s.name)),o==="name"&&t.filter(s=>s.name.toLowerCase().includes(A.toLowerCase())).map(s=>e(R,{cat:s},s.name)),o==="max-weight"&&t.filter(s=>s.max_weight>15).map(s=>e(R,{cat:s},s.name)),o==="playfulness"&&t.filter(s=>s.playfulness===5).map(s=>e(R,{cat:s},s.name)),o==="children-friendly"&&t.filter(s=>s.children_friendly===4).map(s=>e(R,{cat:s},s.name))]})]})}function Ee(){const[t,n]=c.exports.useState(!0);return c.exports.useEffect(()=>{setTimeout(()=>{n(!1)},2200)},[]),t?e(De,{}):a("section",{children:[e("div",{className:"landscape",children:"Please use Portrait mode only"}),e("div",{className:"app",children:a(ie,{children:[e(U,{path:"/2022-03-js-laloupe-miew-miew-team-p2//",element:e(ye,{})}),a(U,{path:"/2022-03-js-laloupe-miew-miew-team-p2/content",element:e(Fe,{}),children:[e(U,{path:"fightpage",element:e(fe,{})}),e(U,{path:"contact",element:e(we,{})}),e(U,{path:"meow",element:e(Be,{})})]})]})})]})}const Te=document.getElementById("root"),Oe=le(Te);Oe.render(e(ce,{children:e(Ee,{})}));