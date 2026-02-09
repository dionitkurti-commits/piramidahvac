(function () {
  const DEFAULT_LANG = localStorage.getItem("lang") || "sq";

  function setLangButtons(lang) {
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.langBtn === lang);
    });
  }

  function applyI18n(lang) {
    const dict = (window.I18N && window.I18N[lang]) ? window.I18N[lang] : window.I18N.sq;
    document.documentElement.setAttribute("lang", lang === "sq" ? "sq" : "en");

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    setLangButtons(lang);
    localStorage.setItem("lang", lang);
  }

  function wireLangToggle() {
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      btn.addEventListener("click", () => applyI18n(btn.dataset.langBtn));
    });
  }

  function wireYear() {
    const y = document.getElementById("y");
    if (y) y.textContent = new Date().getFullYear();
  }

  // Scroll reveal
  function wireReveal() {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          obs.unobserve(e.target);
        }
      }
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  }

  // Contact form mailto
  function wireContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("name")?.value || "").trim();
      const phone = (document.getElementById("phone")?.value || "").trim();
      const msg = (document.getElementById("msg")?.value || "").trim();

      const lang = localStorage.getItem("lang") || "sq";
      const subject = encodeURIComponent(lang === "sq" ? "Kërkesë nga Web - PIRAMIDA HVAC" : "Website inquiry - PIRAMIDA HVAC");
      const body = encodeURIComponent(
        `${lang === "sq" ? "Emri" : "Name"}: ${name}\n` +
        `${lang === "sq" ? "Telefoni" : "Phone"}: ${phone}\n\n` +
        `${lang === "sq" ? "Mesazhi" : "Message"}:\n${msg}`
      );
      window.location.href = `mailto:dionitkurti@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // init
  wireLangToggle();
  wireYear();
  wireReveal();
  wireContactForm();
  applyI18n(DEFAULT_LANG);
})();
