/* ===================================================== */
/* ===================== PARALLAX SCRIPT ================= */
/* ===================================================== */

const parallaxItems = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  parallaxItems.forEach((item, index) => {
    let speed = item.dataset.speed;

    let yMove = scrollY * speed;
    let xMove = scrollY * (speed / 4);
    let rotate = scrollY * (speed * 0.2);

    item.style.transform = `
      translateY(${yMove}px)
      translateX(${index % 2 === 0 ? xMove : -xMove}px)
      rotate(${rotate}deg)
    `;
  });
});


/* ===================================================== */
/* ====================== SLIDER SCRIPT ================= */
/* ===================================================== */

const slider  = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slider && nextBtn && prevBtn) {

  const cardGap = 20;
  let scrollAmount = 0;

  function getCardWidth() {
    const card = slider.querySelector(".card");
    if (!card) return 0;

    return card.offsetWidth + cardGap;
  }

  nextBtn.addEventListener("click", () => {
    const cardWidth = getCardWidth();
    scrollAmount += cardWidth * 3;

    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevBtn.addEventListener("click", () => {
    const cardWidth = getCardWidth();
    scrollAmount -= cardWidth * 3;

    if (scrollAmount < 0) {
      scrollAmount = 0;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  window.addEventListener("resize", () => {
    scrollAmount = 0;
    slider.style.transform = "translateX(0)";
  });
}
