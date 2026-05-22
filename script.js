function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

// Pesan WhatsApp
function pesanWhatsApp(menu) {
  const nomorWhatsApp = "6289648464651";
  const pesan = `Halo, saya ingin pesan ${menu}`;
  const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

  alert(`Kamu akan memesan: ${menu}`);
  window.open(url, "_blank");
}

// Navbar berubah saat scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Animasi muncul saat scroll
const elements = document.querySelectorAll(
  ".hero-text, .hero-image, .profil-image, .profil-content, .menu-card, .about > div, .keunggulan div, .testimoni-card, .contact-box"
);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

elements.forEach(function (element) {
  element.classList.add("hidden");
  observer.observe(element);
});

// Menu aktif sesuai section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

// Tombol scroll ke atas
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.className = "scroll-top";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show-scroll");
  } else {
    scrollTopBtn.classList.remove("show-scroll");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Tutup menu HP setelah klik link
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("active");
  });
});