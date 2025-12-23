import{a as d,S as u,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",m="53639618-7ccf198a06ad48a4b9e98f6f9";async function y(r){const a={key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(g,{params:a})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const a=r.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-img" src="${s}" alt="${e}" />
        </a>
        <div class="gallery-info">
          <div class="gallery-info-item">
            <span class="gallery-info-label">Likes</span>
            <span>${t}</span>
          </div>
          <div class="gallery-info-item">
            <span class="gallery-info-label">Views</span>
            <span>${i}</span>
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
    `).join("");l.insertAdjacentHTML("beforeend",a),h.refresh()}function b(){l.innerHTML=""}function L(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",async r=>{r.preventDefault();const a=r.target.elements["search-text"].value.trim();if(!a){n.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L();try{const s=await y(a);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(s.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),r.target.reset()}});
//# sourceMappingURL=index.js.map
