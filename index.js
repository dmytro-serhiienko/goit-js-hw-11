import{a as d,S as u,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="53639618-7ccf198a06ad48a4b9e98f6f9";async function m(s){const a={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const r=await d.get(g,{params:a});return console.log("API Response:",r.data),r.data}catch(r){throw console.error("API Error:",r),r}}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const a=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:o,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-img" src="${r}" alt="${e}" />
        </a>
        <div class="gallery-info">
          <div class="gallery-info-item">
            <span class="gallery-info-label">Likes</span>
            <span>${t}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Views</span>
            <span>${o}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Comments</span>
            <span>${f}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Downloads</span>
            <span>${p}</span>
          </div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",a),h.refresh()}function b(){l.innerHTML=""}function L(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}const P=document.querySelector(".form");P.addEventListener("submit",async s=>{s.preventDefault();const a=s.target.elements["search-text"].value.trim();if(!a){n.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L();try{const r=await m(a);if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}catch(r){console.error("Error:",r),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),s.target.reset()}});
//# sourceMappingURL=index.js.map
