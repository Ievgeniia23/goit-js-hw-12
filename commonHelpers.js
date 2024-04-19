import{a as L,S as P,i as f}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const d="/goit-js-hw-12/assets/Group-d9947029.svg",S="43279373-50d6c66b7fce6ad9a5efd1552",h=async(o,e)=>{const r=new URLSearchParams({key:S,page:e,per_page:15,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await L.get(`https://pixabay.com/api/?${r}`)).data};function m(o){return o.map(({webformatURL:e,largeImageURL:r,tags:i,likes:t,views:s,comments:l,downloads:b})=>` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${r}">
  <img
    class="gallery-image"
    src="${e}"
    data-source="${r}"
    alt="${i}"
   >
  </a>

  <ul class="text-card">
    <li class="text-card-item">
      <h3>Likes</h3>
      <p>${t}</p>
    </li>

    <li class="text-card-item">
      <h3>Views</h3>
      <p>${s}</p>
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
 
</li>`).join("")}const g=document.querySelector("form"),u=document.querySelector("ul"),c=document.querySelector(".loader"),a=document.querySelector(".btn");c.style.display="none";a.style.display="none";let n=1,y=0,p="";const w=new P(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("click",v);g.addEventListener("submit",q);async function q(o){o.preventDefault(),p=o.currentTarget.elements.query.value.trim(),u.innerHTML="",c.style.display="block",await new Promise(e=>setTimeout(e,2e3));try{const e=await h(p,n);e.hits.length===0?(a.style.display="none",f.show({iconUrl:d,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})):(u.insertAdjacentHTML("beforeend",m(e.hits)),y=Math.ceil(e.totalHits/15),n<y?a.style.display="block":(a.style.display="none",f.show({iconUrl:d,message:"We are sorry, but you have reached the end of search results",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})),w.refresh())}catch{f.show({iconUrl:d,message:"Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})}finally{c.style.display="none"}g.reset()}async function v(){n+=1;try{c.style.display="block",await new Promise(e=>setTimeout(e,2e3));const o=await h(p,n);if(u.insertAdjacentHTML("beforeend",m(o.hits)),n>=y)a.style.display="none",f.show({iconUrl:d,message:"We are sorry, but you have reached the end of search results",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"});else{const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,left:0,behavior:"smooth"})}}catch(o){alert(o.message)}finally{c.style.display="none"}w.refresh()}
//# sourceMappingURL=commonHelpers.js.map
