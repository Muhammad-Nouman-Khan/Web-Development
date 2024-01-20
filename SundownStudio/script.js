// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

const imageContainer = document.querySelector("#image-container");

const elementsContainer = document.querySelector("#elementsContainer");

const elements = document.querySelectorAll(".elem");

elementsContainer.addEventListener("mouseenter", () => {
    imageContainer.style.display = "block";

})

elementsContainer.addEventListener("mouseleave", () => {
    imageContainer.style.display = "none";
})

elements.forEach((elem)=>{
    elem.addEventListener("mouseover",()=>{
        let image = elem.getAttribute("image");
        imageContainer.style.backgroundImage = `url(${image})`;        
    })
})

