import{a as p}from"./header-da3a80e9.js";function f(e){return e.map(({title:r,description:t,preview:s,_id:l,rating:d,tags:g})=>{const h=d/.05;return`
  <li class ="recipes-card-favorites" id="${l}" style="background-image:linear-gradient(to top, var(--main-text-dark-color),var( --filters-main-color),transparent 100%), url(${s});" >
  <svg class="recipes-icon-heart" id="${l}" data-tags="${g}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
  <path class="path"  opacity="1" stroke="#f8f8f8" style="stroke: var(--color1, #f8f8f8)"
                stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091"
                d="M15.991 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z">
            </path></svg>
<h3 class="recipes-title">${r.slice(0,22)}</h3>
<p class="recipes-text">${t.slice(0,50)}...</p>
<div class="rating">
<div class="rating-value">${d.toFixed(1)}</div>
  <div class="rating-body">
    <div class="rating-active" style="width:${h}%">
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

`}).join("")}const v="https://tasty-treats-backend.p.goit.global/api";async function m(e){return(await p(`${v}/recipes/${e}`)).data}const u=[],k=document.querySelector(".favorites-cards"),i=document.querySelector(".favorites-filters-list"),y=document.querySelector(".hat-wrapper"),n=JSON.parse(localStorage.getItem("favorite-recipes"));n&&(i.classList.remove("js-hidden"),y.classList.add("js-hidden"));const b=n.flatMap(e=>e.tags),S=b.filter((e,r,t)=>t.indexOf(e)===r).filter(e=>e!=="");i.addEventListener("click",L);function L(e){const r=e.target.textContent;n.filter(t=>t.tags===r).map(({id:t})=>console.log(t))}function w(e){const r=e.map(t=>`<li>
              <button type="button" class="favorites-filters-btn ">${t}</button>
            </li>`).join("");i.insertAdjacentHTML("beforeend",r)}w(S);function q(e){e.map(({id:r})=>m(r).then(t=>{u.push(t),k.insertAdjacentHTML("beforeend",f(u))}))}q(n);const $=document.body,x=document.querySelector(".switch"),E=document.querySelector(".header-tastytreats"),B=document.querySelector(".svg-shopping-cart"),j=document.querySelector(".svg-burger-menu"),a=document.querySelector('input[name="switch"]'),c=document.querySelector('input[name="checkbox"]');a.addEventListener("change",function(){});M();function M(){localStorage.getItem("theme")==="dark"&&(a.checked=!0,c.checked=!0,o())}x.addEventListener("change",o);c.addEventListener("change",o);function o(){a.addEventListener("change",function(){c.checked=a.checked}),c.addEventListener("change",function(){a.checked=c.checked}),a.checked||c.checked?localStorage.setItem("theme","dark"):localStorage.removeItem("theme"),$.classList.toggle("body-dark"),E.classList.toggle("header-tastytreats-dark"),B.classList.toggle("svg-shopping-cart-dark"),document.querySelectorAll(".slider").forEach(function(s){s.classList.toggle("slider-dark")}),document.querySelectorAll(".header-ref").forEach(function(s){s.classList.toggle("header-ref-dark")}),document.querySelectorAll(".favorites-filters-btn").forEach(function(s){s.classList.toggle("categories-btn-dark")}),j.classList.toggle("svg-shopping-cart-dark")}
