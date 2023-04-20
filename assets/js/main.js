$.get("components/header.html", function (header_var) {
  $("#header").html(header_var);
});

$.get("components/footer.html", function (header_var) {
  $("#footer").html(header_var);
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//============== ScrollReveal ================= //

// const sr = ScrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 1500,
//   delay: 300,
//   reset: true,
// });

// sr.reveal(".serviceTitle, .homecontent, .titlew, .footerUl");
// sr.reveal(".paraCase, .contactformdiv", { delay: 400 });
// sr.reveal(".navigationarrow", { delay: 500 });
// sr.reveal(".swiper", { origin: "bottom", delay: 500 });
// sr.reveal(".homeImg, .homeanime, .servicecard", { origin: "bottom" });
// sr.reveal(".timeline-panel", { origin: "left" });
