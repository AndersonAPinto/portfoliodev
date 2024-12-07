const menuToggle = document.querySelector(".menu-toggle");
const menuToggleClose = document.querySelector(".menu-toggle--close");
const sidebar = document.querySelector(".sidebar");
const menuLinks = document.querySelectorAll(".menu a");
const cookieConsent = localStorage.getItem("cookie-consent");

const currentYearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

menuToggleClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

if (
  cookieConsent !== null &&
  cookieConsent === "true" &&
  "serviceWorker" in navigator
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./scripts/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch((error) => {
        console.log("Erro ao registrar o Service Worker:", error);
      });
  });
}

document.getElementById("accept-cookies").addEventListener("click", () => {
  localStorage.setItem("cookie-consent", "true");
  document.getElementById("cookie-consent").style.display = "none";
});

document.getElementById("decline-cookies").addEventListener("click", () => {
  localStorage.setItem("cookie-consent", "false");
  document.getElementById("cookie-consent").style.display = "none";
});
