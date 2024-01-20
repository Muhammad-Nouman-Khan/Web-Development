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

elements.forEach((elem) => {
    elem.addEventListener("mouseover", () => {
        let image = elem.getAttribute("image");
        imageContainer.style.backgroundImage = `url(${image})`;
    })
})
const headings = document.querySelectorAll("#leftcontent h1");
const para = document.querySelector("#leftcontent p");
const page4img = document.querySelector("#page4right img");
headings.forEach((heading) => {
    heading.addEventListener("click", () => {
        console.log(heading);
        heading.classList.add("bl");
        heading.classList.remove("opacity");
        let headingName = heading.getAttribute("id");
        if (headingName === "heading1") {
            para.innerText = `Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.`;
            page4img.src = `assets/asset9.webp`;
        }
        else if (headingName === "heading2") {
            para.innerText = `Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`;
            page4img.src = `assets/asset10.webp`;
        }
        else {
            para.innerText = `We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`;
            page4img.src = `assets/asset11.webp`;
        }

        headings.forEach((h) => {
            if (h.getAttribute("id") != heading.getAttribute("id")) {
                h.classList.add("opacity");
                h.classList.remove("bl");
            }
        })
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,

});
