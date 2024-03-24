const title=document.querySelector(".title")
const leaf1=document.querySelector(".leaf1")
const leaf2=document.querySelector(".leaf2")
const bush2=document.querySelector(".bush2")
const mount1=document.querySelector(".mount1")
const mount2=document.querySelector(".mount2")


document.addEventListener('scroll', function(){
    let val= window.scrollY 


    title.style.marginTop= val*1.1 +'px'

    
    leaf1.style.marginLeft= -val*1.1 +'px'
    leaf2.style.marginLeft= val*1.1 +'px'

    mount1.style.marginBottom=-val* 1.2+'px'
    mount2.style.marginBottom=-val *1.5+ 'px'
    bush2.style.marginBottom=-val +'px'
})