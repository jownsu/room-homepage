const IMAGE_LIST = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
];
let current_index = 0;

document.addEventListener("DOMContentLoaded", () => {


    let next_btn = document.querySelector(".btn_container button:last-of-type");
    let prev_btn = document.querySelector(".btn_container button:first-of-type");
    let main_img = document.querySelector(".main_img");
    let nav      = document.querySelector("nav");
    let menu_btn = document.querySelector(".menu");
    let nav_links = document.querySelectorAll("nav ul li a");


    next_btn.addEventListener("click", () => {
        nextPicture();
        main_img.setAttribute("src", IMAGE_LIST[current_index]);
    });

    prev_btn.addEventListener("click", () => {
        prevPicture();
        main_img.setAttribute("src", IMAGE_LIST[current_index]);
    });

    menu_btn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

    for(let i = 0; i <= nav_links.length; i++){
        nav_links[i].addEventListener("click", () => {
            nav.classList.remove("show");
        });
    }
});

const nextPicture = () => {
    if(current_index === 2){
        current_index = 0;
    }
    else{
        current_index++;
    }
}

const prevPicture = () => {
    if(current_index === 0){
        current_index = 2;
    }
    else{
        current_index--;
    }
}