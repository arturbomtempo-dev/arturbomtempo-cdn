document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.animation = "none";
    setTimeout(() => {
      this.style.animation = "";
    }, 10);
  });
});

const currentYear = new Date().getFullYear();
const footerYear = document.getElementById("footer-year");

if (footerYear) {
  footerYear.textContent = `© ${currentYear} Artur Bomtempo`;
}
