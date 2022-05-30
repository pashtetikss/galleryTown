const slides =document.querySelectorAll(".slide")

for (const slide of slides){
slide.addEventListener("click", () => {
    clearActiveClasses()

    slide.classList.add("active")
})
}

function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}

/*VANTA.CLOUDS({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
  })
  <script src="vanta.clouds.min.js"></script>
<script src="three.min.js"></script>*/