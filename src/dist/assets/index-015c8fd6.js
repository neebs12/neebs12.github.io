(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const L=document.getElementById("menu"),h=[...document.getElementsByClassName("menuItem")];L.addEventListener("click",r=>{r.preventDefault(),h.forEach(n=>{n.classList.toggle("hidden"),n.classList.toggle("flex")})});const g=["🌎","🌍","🌏"];let c=0;const f=()=>{c=(c+1)%g.length,document.getElementById("globe-spin").innerHTML=g[c]};setInterval(f,750);window.addEventListener("load",()=>{const r=window.innerWidth,n=document.getElementById("highlighted-project-logo-large"),l=document.getElementById("highlighted-project-logo-small"),i=document.getElementById("fourth-project"),e=document.getElementById("top-project-headline"),t=document.getElementById("main-proj-background"),o=document.getElementById("footer"),m=()=>{n.classList.remove("hidden"),l.classList.add("hidden"),i.classList.add("hidden"),e.classList.replace("text-4xl","text-5xl");const a=n.parentElement;a.classList="",a.classList.add("aspect-w-1"),a.classList.add("aspect-h-1");const s=a.parentElement;s.classList="",s.classList.add("max-w-sm"),s.classList.add("mx-auto"),s.classList.add("px-4"),s.classList.add("sm:px-6"),s.classList.add("lg:p-0"),[t,o].forEach(d=>{d.classList="",d.classList.add("bg-gradient-to-r"),d.classList.add("from-darkbluetheme"),d.classList.add("via-lightbluetheme"),d.classList.add("to-darkbluetheme")})},u=()=>{n.classList.add("hidden"),l.classList.remove("hidden"),i.classList.remove("hidden"),e.classList.replace("text-5xl","text-4xl");const a=l.parentElement;a.classList="";const s=a.parentElement;s.classList="",s.classList.add("max-w-sm"),s.classList.add("mx-auto"),s.classList.add("px-6"),s.classList.add("bg-transparent"),s.classList.add("rounded-3xl"),[t,o].forEach(d=>{d.classList="",d.classList.add("bg-gradient-to-r"),d.classList.add("from-darkbluetheme"),d.classList.add("to-lightbluetheme")})};r<1024?u():m(),window.addEventListener("resize",()=>{window.innerWidth<1024?u():m()})});
