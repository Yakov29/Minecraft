function initProfilePage(e){var i=document.querySelector("#skins-current"),s=document.querySelector("#skins-length"),t=document.querySelector("#slider-prev"),n=document.querySelector("#slider-next");const r=new KeenSlider("#skins-slider",{initial:e,detailsChanged:e=>{const i=e.track.details.slides;e.slides.forEach(((e,s)=>{!function(e,i){var s=.7,t=`scale(${1-(s-s*i)})`;e.style.transform=t,e.style["-webkit-transform"]=t}(e.querySelector("div"),i[s].portion)}))}});new KeenSlider("#skins-preview-slider",{initial:e,slides:{perView:4,spacing:16},breakpoints:{"(min-width: 0px)":{slides:{perView:2,spacing:16}},"(min-width: 500px)":{slides:{perView:3,spacing:16}},"(min-width: 600px)":{slides:{perView:4,spacing:16}}}},[(d=r,e=>{function s(s){e.slides[s].classList.add("active"),i.innerHTML=s+1,0==s&&t.classList.add("disabled"),0!=s&&t.classList.remove("disabled"),s==e.slides.length-1&&n.classList.add("disabled"),s!=e.slides.length-1&&n.classList.remove("disabled")}e.on("created",(()=>{s(e.track.details.rel),e.slides.forEach(((e,i)=>{e.addEventListener("click",(()=>{d.moveToIdx(i)}))})),d.on("animationStarted",(i=>{e.slides.forEach((e=>{e.classList.remove("active")}));const t=i.animator.targetIdx||0;s(i.track.absToRel(t)),e.moveToIdx(t)}))}))})]);var d;return s.innerHTML=r.slides.length,sliderPrev=function(){r.prev()},sliderNext=function(){r.next()},r}