document.addEventListener("DOMContentLoaded", () => {
  const cookieConsent = localStorage.getItem("cookie-consent");
  const cookieConsentBanner = document.getElementById("cookie-consent");
  const acceptCookiesButton = document.getElementById("accept-cookies");
  const declineCookiesButton = document.getElementById("decline-cookies");
  const currentYearElement = document.getElementById('current-year');
  
  // Verificando a existência do elemento para o ano
  if (currentYearElement) {
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
  }

  // Se o consentimento já foi dado, esconder o banner
  if (cookieConsent === "true") {
    console.log("Consentimento já dado, escondendo o banner.");
    if (cookieConsentBanner) {
      cookieConsentBanner.style.display = "none";
    }
  }

  // Verificando os botões e a lógica de consentimento de cookies
  if (cookieConsentBanner) {
    acceptCookiesButton.addEventListener("click", () => {
      localStorage.setItem("cookie-consent", "true");
      console.log("Consentimento aceito, valor armazenado:", localStorage.getItem("cookie-consent"));
      cookieConsentBanner.style.display = "none"; // Esconde o banner
    });

    declineCookiesButton.addEventListener("click", () => {
      localStorage.setItem("cookie-consent", "false");
      console.log("Consentimento recusado, valor armazenado:", localStorage.getItem("cookie-consent"));
      cookieConsentBanner.style.display = "none"; // Esconde o banner
    });
  }

  // Service Worker (se necessário)
  if (cookieConsent === "true" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./src/scripts/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registrado com sucesso:", registration);
        })
        .catch((error) => {
          console.log("Erro ao registrar o Service Worker:", error);
        });
    });
  }

  // Lógica do menu
  const menuToggle = document.querySelector(".menu-toggle");
  const menuToggleClose = document.querySelector(".menu-toggle--close");
  const sidebar = document.querySelector(".sidebar");
  const menuLinks = document.querySelectorAll(".menu a");

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
});
