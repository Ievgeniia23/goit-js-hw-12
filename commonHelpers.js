import{a as L,S as w,i as f}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="/goit-js-hw-12/assets/Group-d9947029.svg",S="43279373-50d6c66b7fce6ad9a5efd1552",y=async(r,o)=>{const s=new URLSearchParams({key:S,page:o,per_page:15,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await L.get(`https://pixabay.com/api/?${s}`)).data};function m(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:b})=>` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${s}">
  <img
    class="gallery-image"
    src="${o}"
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
      <p>${b}</p>
    </li>
</ul>
 
</li>`).join("")}const h=document.querySelector("form"),c=document.querySelector("ul"),d=document.querySelector(".loader"),n=document.querySelector(".btn");d.style.display="none";n.style.display="none";let l=1,u=0;const g=new w(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("click",x);h.addEventListener("submit",q);async function q(r){r.preventDefault();const o=r.currentTarget.elements.query.value.trim();c.innerHTML="",d.style.display="block";try{const s=await y(o,l);s.hits.length===0?(n.style.display="none",f.show({iconUrl:p,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})):(c.insertAdjacentHTML("beforeend",m(s.hits)),u=Math.ceil(s.totalHits/15),l<=u?n.style.display="block":n.style.display="none",g.refresh())}catch{f.show({iconUrl:p,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})}finally{d.style.display="none"}h.reset()}async function x(){l+=1;try{const r=await y(l);c.insertAdjacentHTML("beforeend",m(r.hits)),l>=u}catch(r){alert(r.message)}g.refresh()}
//# sourceMappingURL=commonHelpers.js.map
