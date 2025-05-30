const im1 = document.getElementById("project-image1")
const imcert = document.getElementById("card-cert")
const hoversign = document.querySelector('.hover-sign')


im1.addEventListener('mouseover',function(){
    hoversign.classList.add("active")
})
im1.addEventListener('mouseout',function(){
    hoversign.classList.remove("active")
})

imcert.addEventListener('mouseover',function(){
    hoversign.classList.add("active")
})
imcert.addEventListener('mouseout',function(){
    hoversign.classList.remove("active")
})