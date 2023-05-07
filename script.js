// const menuBar = document.querySelector(".menu-bars");
// const overlay = document.querySelector(".overlay");
// menuBar.addEventListener("click", function () {
//   menuBar.classList.toggle("change");
//   overlay.classList.toggle("overlay-active");
//   if (overlay.classList.contains("overlay-active")) {
//     console.log("yes");
//     overlay.classList.add("overlay-slide-right");
//     overlay.classList.remove("overlay-slide-left");
//   } else {
//     console.log("no");

//     overlay.classList.add("overlay-slide-left");
//   }
// });

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
