import{a as L,S,i as f}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d="/goit-js-hw-12/assets/Group-d9947029.svg",q="43279373-50d6c66b7fce6ad9a5efd1552",h=async(o,t)=>{const r=new URLSearchParams({key:q,page:t,per_page:15,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await L.get(`https://pixabay.com/api/?${r}`)).data};function m(o){return o.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:s,comments:n,downloads:w})=>` 
    
     <li class="gallery-item">
<a class="gallery-link" href="${r}">
  <img
    class="gallery-image"
    src="${t}"
    data-source="${r}"
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
      <p>${s}</p>
    </li>

    <li class="text-card-item">
      <h3>Comments</h3>
      <p>${n}</p>
    </li>

    <li class="text-card-item">
      <h3>Downloads</h3>
      <p>${w}</p>
    </li>
</ul>
 
</li>`).join("")}const g=document.querySelector("form"),u=document.querySelector("ul"),c=document.querySelector(".loader"),a=document.querySelector(".btn");c.style.display="none";a.style.display="none";let l=1,y=0,p="";const b=new S(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("click",x);g.addEventListener("submit",v);async function v(o){o.preventDefault(),p=o.currentTarget.elements.query.value.trim(),u.innerHTML="",c.style.display="block",l=1;try{const t=await h(p,l);t.hits.length===0?(a.style.display="none",f.show({iconUrl:d,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})):(u.insertAdjacentHTML("beforeend",m(t.hits)),y=Math.ceil(t.totalHits/15),l<y?a.style.display="block":(a.style.display="none",f.show({iconUrl:d,message:"We are sorry, but you have reached the end of search results",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})),b.refresh())}catch{f.show({iconUrl:d,message:"Please try again!",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"})}finally{c.style.display="none"}g.reset()}async function x(){l+=1;try{c.style.display="block";const o=await h(p,l);if(u.insertAdjacentHTML("beforeend",m(o.hits)),l>=y)a.style.display="none",f.show({iconUrl:d,message:"We are sorry, but you have reached the end of search results",messageColor:"#ffffff",color:"#ef4040",close:!0,position:"topRight"});else{const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,left:0,behavior:"smooth"})}}catch(o){alert(o.message)}finally{c.style.display="none"}b.refresh()}
//# sourceMappingURL=commonHelpers.js.map
