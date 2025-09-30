const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
  index = i;
  slider.style.transform = `translateX(-${i * 100}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.remove("bg-yellow-600");
    dot.classList.add("bg-gray-400");
    if (idx === i) {
      dot.classList.add("bg-yellow-600");
      dot.classList.remove("bg-gray-400");
    }
  });
}

// Klik dot
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

// Auto geser 5 detik
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

// Tampilkan pertama kali
showSlide(0);
