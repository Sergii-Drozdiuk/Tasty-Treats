import{a as b,P as k}from"./header-954670b3.js";function S(e){return e.map(({title:a,description:t,preview:s,_id:u,rating:g,tags:v})=>{const y=g/.05;return`
  <li class ="recipes-card-favorites" id="${u}" style="background-image:linear-gradient(to top, var(--main-text-dark-color),var( --filters-main-color),transparent 100%), url(${s});" >
  <svg class="recipes-icon-heart" id="${u}" data-tags="${v}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
  <path class="path"  opacity="1" stroke="#f8f8f8" style="stroke: var(--color1, #f8f8f8)"
                stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091"
                d="M15.991 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z">
            </path></svg>
<h3 class="recipes-title">${a.slice(0,22)}</h3>
<p class="recipes-text">${t.slice(0,50)}...</p>
<div class="rating">
<div class="rating-value">${g.toFixed(1)}</div>
  <div class="rating-body">
    <div class="rating-active" style="width:${y}%">
      <div class="rating-items">
        <input type="radio" class="rating-item" value="1">
        <input type="radio" class="rating-item" value="2">
        <input type="radio" class="rating-item" value="3">
        <input type="radio" class="rating-item" value="4">
        <input type="radio" class="rating-item" value="5">
      </div>
    </div>
  </div>
</div>
    <button class="button-recipes" type="button">See recipe</button>
</li>

`}).join("")}const w="https://tasty-treats-backend.p.goit.global/api";async function L(e){return(await b(`${w}/recipes/${e}`)).data}const p=JSON.parse(localStorage.getItem("favorite-recipes"));let h=0;p&&(h=p.length);const q=document.getElementById("favorites-pagination"),o={totalItems:h,itemsPerPage:9,visiblePages:window.innerWidth<768?2:3,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<button class="tui-page-btn" type="button">{{page}}</button>',currentPage:'<button class="tui-page-btn tui-is-selected">{{page}}</button>',moveButton:'<button class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></button>',moreButton:'<button class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></button'}},m=new k(q,o),c=[],$=document.querySelector(".favorites-cards"),l=document.querySelector(".favorites-filters-list"),B=document.querySelector(".hat-wrapper"),r=JSON.parse(localStorage.getItem("favorite-recipes"));o.itemsPerPage=window.innerWidth<768?9:12;r&&(l.classList.remove("js-hidden"),B.classList.add("js-hidden"));const E=r.flatMap(e=>e.tags),I=E.filter((e,a,t)=>t.indexOf(e)===a).filter(e=>e!=="");l.addEventListener("click",x);function x(e){const a=e.target.textContent;r.filter(t=>t.tags===a).map(({id:t})=>console.log(t))}function P(e){const a=e.map(t=>`<li>
              <button type="button" class="favorites-filters-btn ">${t}</button>
            </li>`).join("");l.insertAdjacentHTML("beforeend",a)}P(I);function f(e){e.map(({id:a})=>L(a).then(t=>{c.push(t),o.totalItems=c.length,m.reset(o.itemsPerPage),$.insertAdjacentHTML("beforeend",S(c))}))}f(r);m.on("afterMove",()=>{f(r)});const M=document.body,j=document.querySelector(".switch"),A=document.querySelector(".header-tastytreats"),R=document.querySelector(".svg-shopping-cart"),C=document.querySelector(".svg-burger-menu"),n=document.querySelector('input[name="switch"]'),i=document.querySelector('input[name="checkbox"]');n.addEventListener("change",function(){});N();function N(){localStorage.getItem("theme")==="dark"&&(n.checked=!0,i.checked=!0,d())}j.addEventListener("change",d);i.addEventListener("change",d);function d(){n.addEventListener("change",function(){i.checked=n.checked}),i.addEventListener("change",function(){n.checked=i.checked}),n.checked||i.checked?localStorage.setItem("theme","dark"):localStorage.removeItem("theme"),M.classList.toggle("body-dark"),A.classList.toggle("header-tastytreats-dark"),R.classList.toggle("svg-shopping-cart-dark"),document.querySelectorAll(".slider").forEach(function(s){s.classList.toggle("slider-dark")}),document.querySelectorAll(".header-ref").forEach(function(s){s.classList.toggle("header-ref-dark")}),document.querySelectorAll(".favorites-filters-btn").forEach(function(s){s.classList.toggle("categories-btn-dark")}),C.classList.toggle("svg-shopping-cart-dark")}
