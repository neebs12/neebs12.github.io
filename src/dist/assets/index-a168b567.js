(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const f=document.getElementById("menu"),p=[...document.getElementsByClassName("menuItem")];f.addEventListener("click",i=>{i.preventDefault(),p.forEach(d=>{d.classList.toggle("hidden"),d.classList.toggle("flex")})});const L=["🌎","🌍","🌏"];let c=0;const E=()=>{c=(c+1)%L.length,document.getElementById("globe-spin").innerHTML=L[c]};setInterval(E,750);window.addEventListener("load",()=>{const i=window.innerWidth,d=document.getElementById("highlighted-project-logo-large"),a=document.getElementById("highlighted-project-logo-small"),o=document.getElementById("fourth-project"),e=document.getElementById("top-project-headline"),n=document.getElementById("main-proj-background"),l=document.getElementById("footer"),r=(t,s,g,h)=>{t.classList="",h?(t.classList.add("bg-gradient-to-r"),t.classList.add("from-"+s),t.classList.add("via-"+g),t.classList.add("to-"+h)):(t.classList.add("bg-gradient-to-r"),t.classList.add("from-"+s),t.classList.add("to-"+g))},m=()=>{d.classList.remove("hidden"),a.classList.add("hidden"),o.classList.add("hidden"),e.classList.replace("text-4xl","text-5xl");const t=d.parentElement;t.classList="",t.classList.add("aspect-w-1"),t.classList.add("aspect-h-1");const s=t.parentElement;s.classList="",s.classList.add("max-w-sm"),s.classList.add("mx-auto"),s.classList.add("px-4"),s.classList.add("sm:px-6"),s.classList.add("lg:p-0"),r(n,"darkbluetheme","lightbluetheme","darkbluetheme"),r(l,"lightbluetheme","darkbluetheme","lightbluetheme")},u=()=>{d.classList.add("hidden"),a.classList.remove("hidden"),o.classList.remove("hidden"),e.classList.replace("text-5xl","text-4xl");const t=a.parentElement;t.classList="";const s=t.parentElement;s.classList="",s.classList.add("max-w-sm"),s.classList.add("mx-auto"),s.classList.add("px-6"),s.classList.add("bg-transparent"),s.classList.add("rounded-3xl"),r(n,"darkbluetheme","lightbluetheme"),r(l,"lightbluetheme","darkbluetheme")};i<1024?u():m(),window.addEventListener("resize",()=>{window.innerWidth<1024?u():m()})});