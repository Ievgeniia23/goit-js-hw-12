import{a as m,S as h,i as c}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="/goit-js-hw-12/assets/Group-d9947029.svg",g="43279373-50d6c66b7fce6ad9a5efd1552",b=async(o,r)=>{const s=new URLSearchParams({key:g,page:r,per_page:15,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await m.get(`https://pixabay.com/api/?${s}`)).data};function S(o){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:y})=>` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${s}">
  <img
    class="gallery-image"
    src="${r}"
    data-source="${s}"
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
      <p>${t}</p>
    </li>

    <li class="text-card-item">
      <h3>Comments</h3>
      <p>${i}</p>
    </li>

    <li class="text-card-item">
      <h3>Downloads</h3>
      <p>${y}</p>
    </li>
</ul>
 
</li>`).join("")}const d=document.querySelector("form"),f=document.querySelector("ul"),l=document.querySelector(".loader"),n=document.querySelector(".btn");l.style.display="none";n.style.display="none";let p=36;const L=new h(".gallery a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",q);async function q(o){o.preventDefault();const r=o.currentTarget.elements.query.value.trim();f.innerHTML="",l.style.display="block",b(r,p).then(s=>{if(console.log(s),s.hits.length===0)c.show({iconUrl:u,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"});else{f.insertAdjacentHTML("beforeend",S(s.hits));const a=Math.ceil(s.totalHits/15);p<=a?n.style.display="block":n.style.display="none",L.refresh()}}).catch(s=>c.show({iconUrl:u,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})).finally(()=>{l.style.display="none"}),d.reset()}
//# sourceMappingURL=commonHelpers.js.map
