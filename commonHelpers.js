import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c="/goit-js-hw-12/assets/Group-d9947029.svg",m="43279373-50d6c66b7fce6ad9a5efd1552",p=s=>{const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.error("Error fetching data:",t)})};function y(s){return s.map(({webformatURL:o,largeImageURL:t,tags:a,likes:e,views:r,comments:i,downloads:h})=>` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${t}">
  <img
    class="gallery-image"
    src="${o}"
    data-source="${t}"
    alt="${a}"
   >
  </a>

  <ul class="text-card">
    <li class="text-card-item">
      <h3>Likes</h3>
      <p>${e}</p>
    </li>

    <li class="text-card-item">
      <h3>Views</h3>
      <p>${r}</p>
    </li>

    <li class="text-card-item">
      <h3>Comments</h3>
      <p>${i}</p>
    </li>

    <li class="text-card-item">
      <h3>Downloads</h3>
      <p>${h}</p>
    </li>
</ul>
 
</li>`).join("")}const f=document.querySelector("form"),u=document.querySelector("ul"),l=document.querySelector(".loader");l.style.display="none";const g=new d(".gallery a",{captionsData:"alt",captionDelay:250});f.addEventListener("submit",b);function b(s){s.preventDefault();const o=s.currentTarget.elements.query.value.trim();u.innerHTML="",l.style.display="block",p(o).then(t=>{t.hits.length===0?n.show({iconUrl:c,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"}):(u.insertAdjacentHTML("beforeend",y(t.hits)),g.refresh())}).catch(t=>n.show({iconUrl:c,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})).finally(()=>{l.style.display="none"}),f.reset()}
//# sourceMappingURL=commonHelpers.js.map
