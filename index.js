import{a as u,S as g,i}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="53639618-7ccf198a06ad48a4b9e98f6f9";async function h(o){const s={key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const r=await u.get(m,{params:s});return console.log("API Response:",r.data),r.data}catch(r){throw console.error("API Error:",r),r}}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const s=o.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-img" src="${r}" alt="${e}" />
        </a>
        <div class="gallery-info">
          <div class="gallery-info-item">
            <span class="gallery-info-label">Likes</span>
            <span>${t}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Views</span>
            <span>${a}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Comments</span>
            <span>${d}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Downloads</span>
            <span>${p}</span>
          </div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",s),b.refresh()}function L(){l.innerHTML=""}function w(){c.classList.add("is-visible")}function S(){c.classList.remove("is-visible")}console.log("Script loaded successfully");const f=document.querySelector(".form");console.log("Form element:",f);f.addEventListener("submit",async o=>{o.preventDefault(),console.log("Form submitted");const s=o.target.elements["search-text"].value.trim();if(console.log("Search query:",s),!s){i.warning({message:"Please enter a search query!",position:"topRight"});return}L(),w();try{const r=await h(s);if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}catch(r){console.error("Error:",r),i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S(),o.target.reset()}});
//# sourceMappingURL=index.js.map
