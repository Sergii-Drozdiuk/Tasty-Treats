import{a as t}from"./header-f48477e9.js";console.log(t);const n=["Breakfast","Chicken","Dessert"];console.log(n);const o=document.querySelector(".favorites-filters-list");console.log(o);o.addEventListener("click",r);function r(e){const l=e.target.textContent;console.log(l)}const s=n.map(e=>`<li>
              <button type="button" class="favorites-filters-btn ">${e}</button>
            </li>`).join("");console.log(s);o.insertAdjacentHTML("beforeend",s);console.log(t);
