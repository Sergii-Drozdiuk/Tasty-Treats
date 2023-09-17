import{a as l}from"./axios-a0bab60e.js";console.log(l);const o=["Breakfast","Chicken","Dessert"];console.log(o);const t=document.querySelector(".favorites-filters-list");console.log(t);t.addEventListener("click",r);function r(e){const s=e.target.textContent;console.log(s)}const n=o.map(e=>`<li>
              <button type="button" class="favorites-filters-btn ">${e}</button>
            </li>`).join("");console.log(n);t.insertAdjacentHTML("beforeend",n);
