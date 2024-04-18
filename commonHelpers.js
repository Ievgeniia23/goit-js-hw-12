import{a as w,S as L,i as c}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="/goit-js-hw-12/assets/Group-d9947029.svg",S="43279373-50d6c66b7fce6ad9a5efd1552",y=async(r,s)=>{const o=new URLSearchParams({key:S,page:s,per_page:15,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await w.get(`https://pixabay.com/api/?${o}`)).data};function p(r){return r.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:t,comments:l,downloads:b})=>` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${o}">
  <img
    class="gallery-image"
    src="${s}"
    data-source="${o}"
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
      <p>${l}</p>
    </li>

    <li class="text-card-item">
      <h3>Downloads</h3>
      <p>${b}</p>
    </li>
</ul>
 
</li>`).join("")}const m=document.querySelector("form"),d=document.querySelector("ul"),u=document.querySelector(".loader"),i=document.querySelector(".btn");u.style.display="none";i.style.display="none";let n=1,h=0;const g=new L(".gallery a",{captionsData:"alt",captionDelay:250});i.addEventListener("click",v);m.addEventListener("submit",q);async function q(r){r.preventDefault();const s=r.currentTarget.elements.query.value.trim();d.innerHTML="",u.style.display="block";try{const o=await y(s,n);if(o.hits.length===0)i.style.display="none",c.show({iconUrl:f,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"});else{d.insertAdjacentHTML("beforeend",p(o.hits)),h=Math.ceil(o.totalHits/15);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;Window.scrollBy({top:e*2,left:0,behavior:"smooth"}),n<=h?i.style.display="block":(i.style.display="none",c.show({iconUrl:f,message:"We are sorry, but you have reached the end of search results",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})),g.refresh()}}catch{c.show({iconUrl:f,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})}finally{u.style.display="none"}m.reset()}async function v(){n+=1;try{const r=await y(n);d.insertAdjacentHTML("beforeend",p(r.hits)),n>=h&&(i.style.display="none",c.show({iconUrl:f,message:"We are sorry, but you have reached the end of search results",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"}))}catch(r){alert(r.message)}g.refresh()}
//# sourceMappingURL=commonHelpers.js.map
