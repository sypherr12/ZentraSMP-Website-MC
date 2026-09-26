const ipBtn = document.getElementById("copyIpBtn");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (ipBtn) {
  ipBtn.addEventListener("click", async () => {
    const ip = "ZentraSmp-8hgk.aternos.me";
    try {
      await navigator.clipboard.writeText(ip);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1500);
    } catch (error) {
      window.prompt("IP adresini kopyala:", ip);
    }
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
