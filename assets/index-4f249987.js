(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=document.getElementById("menu"),f=[...document.getElementsByClassName("menuItem")];m.addEventListener("click",l=>{l.preventDefault(),f.forEach(s=>{s.classList.toggle("hidden"),s.classList.toggle("flex")})});const g=["🌎","🌍","🌏"];let u=0;const h=()=>{u=(u+1)%g.length,document.getElementById("globe-spin").innerHTML=g[u]};setInterval(h,750);window.addEventListener("load",()=>{const l=window.innerWidth,s=document.getElementById("highlighted-project-logo"),i="images/logo_name_combo.svg",c="images/logo_name_combo_light_bg_only-4.svg",e=document.getElementById("main-proj-background"),t=document.getElementById("footer"),r=n=>{n.classList="",n.classList.add("object-center"),n.classList.add("bg-transparent"),n.classList.add("rounded-3xl");const d=n.parentElement;d.classList="",d.classList.add("aspect-w-1"),d.classList.add("aspect-h-1");const a=d.parentElement;a.classList="",a.classList.add("max-w-sm"),a.classList.add("mx-auto"),a.classList.add("px-4"),a.classList.add("sm:px-6"),a.classList.add("lg:p-0"),[e,t].forEach(o=>{o.classList="",o.classList.add("bg-gradient-to-r"),o.classList.add("from-darkbluetheme"),o.classList.add("via-lightbluetheme"),o.classList.add("to-darkbluetheme")})},L=n=>{n.classList="",n.classList.add("object-fill"),n.classList.add("relative"),n.classList.add("top-5");const d=n.parentElement;d.classList="";const a=d.parentElement;a.classList="",a.classList.add("max-w-sm"),a.classList.add("mx-auto"),a.classList.add("px-6"),a.classList.add("bg-transparent"),a.classList.add("rounded-3xl"),[e,t].forEach(o=>{o.classList="",o.classList.add("bg-gradient-to-r"),o.classList.add("from-darkbluetheme"),o.classList.add("to-lightbluetheme")})};l<1024?(s.src=c,L(s)):(s.src=i,r(s)),window.addEventListener("resize",()=>{window.innerWidth<1024?(s.src=c,L(s)):(s.src=i,r(s))})});
