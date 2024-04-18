import{a as w,S as L,i as c}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="/goit-js-hw-12/assets/Group-d9947029.svg",S="43279373-50d6c66b7fce6ad9a5efd1552",y=async(s,r)=>{const o=new URLSearchParams({key:S,page:r,per_page:15,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await w.get(`https://pixabay.com/api/?${o}`)).data};function h(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:l,downloads:b})=>` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${o}">
  <img
    class="gallery-image"
    src="${r}"
    data-source="${o}"
    alt="${i}"
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
      <p>${l}</p>
    </li>

    <li class="text-card-item">
      <h3>Downloads</h3>
      <p>${b}</p>
    </li>
</ul>
 
</li>`).join("")}const m=document.querySelector("form"),d=document.querySelector("ul"),u=document.querySelector(".loader"),a=document.querySelector(".btn");u.style.display="none";a.style.display="none";let n=1,p=0;const g=new L(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("click",$);m.addEventListener("submit",x);async function x(s){s.preventDefault();const r=s.currentTarget.elements.query.value.trim();d.innerHTML="",u.style.display="block";try{const o=await y(r,n);o.hits.length===0?(a.style.display="none",c.show({iconUrl:f,message:"Sorry",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})):(d.insertAdjacentHTML("beforeend",h(o.hits)),p=Math.ceil(o.totalHits/15),n<=p?a.style.display="block":(a.style.display="none",c.show({iconUrl:f,message:"We are sorry",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})),g.refresh())}catch{}finally{u.style.display="none"}m.reset()}async function $(){n+=1;try{const s=await y(n);d.insertAdjacentHTML("beforeend",h(s.hits)),n>=p&&(a.style.display="none",c.show({iconUrl:f,message:" you have reached the end of search results",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"}))}catch(s){alert(s.message)}g.refresh()}
//# sourceMappingURL=commonHelpers.js.map
