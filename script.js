const menuBar = document.querySelector(".menu-bars");
const overlay = document.querySelector(".overlay");
const nav = document.querySelectorAll("[class^='nav']");
console.log("nav", nav);
menuBar.addEventListener("click", function () {
  menuBar.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  overlay.classList.toggle(
    "overlay-slide-right",
    overlay.classList.contains("overlay-active")
  );
  overlay.classList.toggle(
    "overlay-slide-left",
    !overlay.classList.contains("overlay-active")
  );
  nav.forEach((navEl, i) => {
    // Use the navEl and i variables inside this function
    // console.log(`Element ${i + 1}: ${navEl}`);
    navEl.classList.toggle(
      `slide-in-${i + 1}`,
      overlay.classList.contains("overlay-active")
    );
    navEl.classList.toggle(
      `slide-out-${i + 1}`,
      !overlay.classList.contains("overlay-active")
    );
  });
});
