const burgerIcon=document.getElementById("burger_icon"),headerNav=document.getElementById("header_nav"),navLinks=headerNav.querySelectorAll("a"),body=document.body;burgerIcon.addEventListener("click",(()=>{burgerIcon.classList.toggle("open");const e=burgerIcon.classList.contains("open"),t=burgerIcon.querySelectorAll(".burger-line");e?(t[0].classList.add("top-1/2","-translate-y-1/2","rotate-45"),t[1].classList.add("opacity-0","-left-14"),t[1].classList.remove("left-0"),t[2].classList.add("top-1/2","bottom-auto","-translate-y-1/2","-rotate-45"),headerNav.classList.remove("max-md:-left-[150%]"),headerNav.classList.add("max-md:left-0"),body.style.overflow="hidden",navLinks.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),burgerIcon.classList.remove("open"),t[0].classList.remove("top-1/2","-translate-y-1/2","rotate-45"),t[1].classList.add("left-0"),t[1].classList.remove("opacity-0","-left-14"),t[2].classList.remove("top-1/2","bottom-auto","-translate-y-1/2","-rotate-45"),headerNav.classList.add("max-md:-left-[150%]"),headerNav.classList.remove("max-md:left-0"),body.style.overflow="auto"}))}))):(t[0].classList.remove("top-1/2","-translate-y-1/2","rotate-45"),t[1].classList.add("left-0"),t[1].classList.remove("opacity-0","-left-14"),t[2].classList.remove("top-1/2","bottom-auto","-translate-y-1/2","-rotate-45"),headerNav.classList.add("max-md:-left-[150%]"),headerNav.classList.remove("max-md:left-0"),body.style.overflow="auto")}));const links=document.querySelectorAll('a[href^="#"]');links.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))})),window.addEventListener("DOMContentLoaded",(()=>{console.log("Loaded Scripts")}));