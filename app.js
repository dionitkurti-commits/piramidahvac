document.documentElement.classList.add("js");

const LANG_KEY = "piramida_lang";
const defaultLang = "sq";

function qs(sel, root = document){ return root.querySelector(sel); }
function qsa(sel, root = document){ return Array.from(root.querySelectorAll(sel)); }

function setActiveLangButtons(lang){
  qsa("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
}

function applyLang(lang){
  document.documentElement.lang = lang;

  // Text nodes
  qsa("[data-sq][data-en]").forEach(el => {
    const isHtml = el.dataset.html === "1";
    const val = (lang === "en") ? el.dataset.en : el.dataset.sq;
    if(isHtml) el.innerHTML = val;
    else el.textContent = val;
  });

  // Placeholders
  qsa("[data-ph-sq][data-ph-en]").forEach(el => {
    el.placeholder = (lang === "en") ? el.dataset.phEn : el.dataset.phSq;
  });

  // Title
  const body = document.body;
  if(body?.dataset?.titleSq && body?.dataset?.titleEn){
    document.title = (lang === "en") ? body.dataset.titleEn : body.dataset.titleSq;
  }

  setActiveLangButtons(lang);
  localStorage.setItem(LANG_KEY, lang);
}

function initLang(){
  const saved = localStorage.getItem(LANG_KEY);
  const url = new URL(location.href);
  const qp = url.searchParams.get("lang");
  const lang = (qp === "en" || qp === "sq") ? qp : (saved || defaultLang);
  applyLang(lang);

  qsa("[data-lang]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      applyLang(btn.dataset.lang);
      // optional: keep ?lang=
      const u = new URL(location.href);
      u.searchParams.set("lang", btn.dataset.lang);
      history.replaceState({}, "", u);
    });
  });
}

function initMobileMenu(){
  const burger = qs("[data-burger]");
  const panel = qs("[data-mobile]");
  if(!burger || !panel) return;

  burger.addEventListener("click", ()=>{
    const open = panel.dataset.open !== "1";
    panel.dataset.open = open ? "1" : "0";
    panel.style.display = open ? "block" : "none";
  });

  // close on nav click
  qsa("a", panel).forEach(a=>{
    a.addEventListener("click", ()=>{
      panel.dataset.open = "0";
      panel.style.display = "none";
    });
  });

  // default closed
  panel.dataset.open = "0";
  panel.style.display = "none";
}

function initReveal(){
  const els = qsa(".reveal");
  if(!els.length) return;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});

  els.forEach(el=> io.observe(el));
}

function initCounters(){
  const counters = qsa("[data-count]");
  if(!counters.length) return;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);

      const to = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || "";
      const dur = 850;
      const start = performance.now();

      function tick(t){
        const p = Math.min(1, (t - start)/dur);
        const val = Math.round(to * (0.18 + 0.82*p));
        el.textContent = `${val}${suffix}`;
        if(p < 1) requestAnimationFrame(tick);
        else el.textContent = `${to}${suffix}`;
      }
      requestAnimationFrame(tick);
    });
  }, {threshold: 0.35});

  counters.forEach(c=> io.observe(c));
}

function initYear(){
  const y = qs("[data-year]");
  if(y) y.textContent = new Date().getFullYear();
}

initYear();
initLang();
initMobileMenu();
initReveal();
initCounters();
