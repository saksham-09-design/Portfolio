const im1 = document.getElementById("project-image1")
const imcert = document.getElementById("card-cert")
const hoversign = document.querySelector('.hover-sign')

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


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

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})