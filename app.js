// Add .js class early for safe reveal
document.documentElement.classList.add("js");

(function(){
  // ---------------------------
  // i18n dictionary (SQ/EN)
  // ---------------------------
  const I18N = {
    sq: {
      nav_home:"Ballina", nav_services:"Shërbimet", nav_about:"Rreth Nesh", nav_contact:"Kontakt", call_now:"Thirr tani",
      hero_title:"Instalim & Mirëmbajtje Klima dhe Pompa Termike",
      hero_sub:"Zgjidhje efikase për ngrohje dhe ftohje — për shtëpi dhe biznese. Punë e pastër, korrektësi dhe shërbim i shpejtë.",
      badge_fast:"⚡ Reagim i shpejtë", badge_clean:"🧼 Punë e pastër", badge_eff:"💡 Efikasitet energjie",
      cta_quote:"Kërko ofertë", cta_services:"Shiko shërbimet",
      panel_title:"Shërbim i shpejtë & i sigurt",
      panel_li1:"Instalim profesional i klimave",
      panel_li2:"Servis, pastrim dhe mirëmbajtje sezonale",
      panel_li3:"Pompa termike — instalim & servis",
      panel_li4:"Konsulencë dhe ofertim sipas m²",

      stat1:"+120", stat1t:"Instalime & servisime",
      stat2:"24/7", stat2t:"Kontakt & urgjenca",
      stat3:"2y",  stat3t:"Garanci pune (ops.)",
      stat4:"5★",  stat4t:"Kënaqësi klientësh",

      sec_services:"Shërbimet kryesore",
      sec_services_lead:"Gjithçka që të duhet për komoditet gjatë gjithë vitit — instalim, servis dhe zgjidhje efikase.",
      s1t:"Instalim Klima", s1d:"Montim, vakumim, testim dhe rregullim për performancë maksimale.",
      s2t:"Servis & Mirëmbajtje", s2d:"Diagnostikim, pastrim, kontroll dhe riparim — që pajisja të punojë si duhet.",
      s3t:"Pompa Termike", s3d:"Dimensionim, instalim dhe servis për ngrohje/fhothje efikase.",

      sec_why:"Pse PIRAMIDA HVAC?",
      sec_why_lead:"Klientët paguajnë për siguri, korrektësi dhe rezultat. Këto janë arsyet pse na zgjedhin.",
      w1t:"Çmim i drejtë & transparent", w1d:"Ofertë e qartë pa surpriza — rekomandojmë zgjidhjen më të mirë për buxhetin.",
      w2t:"Punë e pastër & standard", w2d:"Montim i rregullt, kabllo/linja të pastra dhe testim i plotë para dorëzimit.",
      w3t:"Efikasitet energjie", w3d:"Të ndihmojmë të zgjedhësh kapacitetin e duhur për m² dhe izolim.",

      sec_process:"Si punojmë",
      sec_process_lead:"Proces i thjeshtë, profesional dhe i shpejtë — nga inspektimi te dorëzimi.",
      p1t:"Inspektim & këshillim", p1d:"E vlerësojmë hapësirën, m², izolimin dhe nevojën reale.",
      p2t:"Ofertë brenda ditës", p2d:"Të japim çmim + opsionet më të mira për performancë/ekonomi.",
      p3t:"Instalim profesional", p3d:"Vakumim, testim, konfigurim — punë e pastër dhe e sigurt.",
      p4t:"Kontroll & garanci", p4d:"Kontroll final dhe udhëzim për përdorim; opsionalisht mirëmbajtje sezonale.",

      sec_test:"Çfarë thonë klientët",
      sec_test_lead:"Disa shembuj feedback-u (mund t’i personalizojmë me emra realë).",

      sec_faq:"Pyetjet më të shpeshta",
      faq1q:"Sa kohë zgjat instalimi i klimës?", faq1a:"Zakonisht 1–3 orë (varësisht nga vendosja, distanca dhe punimet).",
      faq2q:"A bëni pastrim/servis sezonal?", faq2a:"Po. Rekomandohet 2 herë në vit për performancë dhe higjienë.",
      faq3q:"Si zgjedh kapacitetin e duhur?", faq3a:"Varet nga m², izolimi dhe orientimi. Na shkruaj m² dhe lokacionin — të udhëzojmë saktë.",

      sec_contact:"Kontakt",
      sec_contact_lead:"Na telefono ose na shkruaj — përgjigjemi shpejt.",
      form_name:"Emri", form_phone:"Telefoni", form_msg:"Mesazhi", form_send:"Dërgo"
    },
    en: {
      nav_home:"Home", nav_services:"Services", nav_about:"About", nav_contact:"Contact", call_now:"Call now",
      hero_title:"AC & Heat Pump Installation and Maintenance",
      hero_sub:"Efficient heating & cooling for homes and businesses. Clean work, fair pricing, and fast response.",
      badge_fast:"⚡ Fast response", badge_clean:"🧼 Clean workmanship", badge_eff:"💡 Energy efficiency",
      cta_quote:"Request a quote", cta_services:"View services",
      panel_title:"Fast & reliable service",
      panel_li1:"Professional AC installation",
      panel_li2:"Service, cleaning & seasonal maintenance",
      panel_li3:"Heat pumps — install & service",
      panel_li4:"Consultation based on m²",

      stat1:"+120", stat1t:"Installations & services",
      stat2:"24/7", stat2t:"Contact & urgent help",
      stat3:"2y",  stat3t:"Work warranty (opt.)",
      stat4:"5★",  stat4t:"Customer satisfaction",

      sec_services:"Core services",
      sec_services_lead:"Everything you need for year-round comfort — installation, service, and efficient solutions.",
      s1t:"AC Installation", s1d:"Mounting, vacuuming, testing and tuning for maximum performance.",
      s2t:"Service & Maintenance", s2d:"Diagnostics, cleaning, checks and repairs so your unit runs properly.",
      s3t:"Heat Pumps", s3d:"Sizing, installation and service for efficient heating/cooling.",

      sec_why:"Why PIRAMIDA HVAC?",
      sec_why_lead:"Clients pay for safety, reliability, and results. Here’s why they choose us.",
      w1t:"Fair & transparent pricing", w1d:"Clear quoting with no surprises — best solution for your budget.",
      w2t:"Clean, standard workmanship", w2d:"Neat installation, tidy lines/cables and full testing before handover.",
      w3t:"Energy efficiency first", w3d:"We help you choose the right capacity based on m² and insulation.",

      sec_process:"How we work",
      sec_process_lead:"Simple, professional, and fast — from inspection to handover.",
      p1t:"Inspection & guidance", p1d:"We assess the space, m², insulation and real needs.",
      p2t:"Same-day quote", p2d:"You get price + best options for performance/savings.",
      p3t:"Professional install", p3d:"Vacuum, test, configure — clean and safe work.",
      p4t:"Final check & care", p4d:"Final inspection + usage tips; optional seasonal maintenance.",

      sec_test:"What clients say",
      sec_test_lead:"Sample feedback (we can replace with real names later).",

      sec_faq:"FAQ",
      faq1q:"How long does AC installation take?", faq1a:"Usually 1–3 hours depending on placement, distance and required work.",
      faq2q:"Do you offer seasonal cleaning/service?", faq2a:"Yes. Recommended twice a year for performance and hygiene.",
      faq3q:"How do I choose the right capacity?", faq3a:"Depends on m², insulation and orientation. Send m² + location and we’ll advise.",

      sec_contact:"Contact",
      sec_contact_lead:"Call or message us — we respond fast.",
      form_name:"Name", form_phone:"Phone", form_msg:"Message", form_send:"Send"
    }
  };

  // ---------------------------
  // Language
  // ---------------------------
  const langBtns = document.querySelectorAll("[data-lang]");
  const applyLang = (lang) => {
    const d = I18N[lang] || I18N.sq;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(d[key]) el.textContent = d[key];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
      const key = el.getAttribute("data-i18n-ph");
      if(d[key]) el.setAttribute("placeholder", d[key]);
    });

    langBtns.forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
    localStorage.setItem("lang", lang);
  };

  langBtns.forEach(b=>b.addEventListener("click", ()=>applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem("lang") || "sq");

  // ---------------------------
  // Reveal on scroll
  // ---------------------------
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));

  // ---------------------------
  // Counters (animate numbers)
  // ---------------------------
  const counterEls = document.querySelectorAll("[data-count]");
  const countIO = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target;
      const end = parseInt(el.dataset.count,10);
      const suffix = el.dataset.suffix || "";
      const duration = 900;
      const start = performance.now();
      const tick = (t)=>{
        const p = Math.min(1, (t-start)/duration);
        const val = Math.floor(p*end);
        el.textContent = `${val}${suffix}`;
        if(p<1) requestAnimationFrame(tick);
        else el.textContent = `${end}${suffix}`;
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, {threshold:0.35});
  counterEls.forEach(el=>countIO.observe(el));

  // ---------------------------
  // Testimonials slider
  // ---------------------------
  const slides = [
    {q:"“Instalimi u bë shumë pastër dhe shpejt. Klima punon perfekt.”", a:"Arben • Fushë Kosovë"},
    {q:"“Na udhëzuan saktë për kapacitetin. Shpenzimet ranë ndjeshëm.”", a:"Blerta • Prishtinë"},
    {q:"“Servis i shpejtë, korrektësi dhe komunikim i mirë.”", a:"Mentor • Obiliq"}
  ];
  const qEl = document.getElementById("quote");
  const aEl = document.getElementById("author");
  const dots = document.querySelectorAll(".dot");
  let i = 0;

  function renderSlide(idx){
    if(!qEl || !aEl) return;
    qEl.textContent = slides[idx].q;
    aEl.textContent = slides[idx].a;
    dots.forEach((d,di)=>d.classList.toggle("on", di===idx));
  }
  function next(){
    i = (i+1) % slides.length;
    renderSlide(i);
  }
  renderSlide(0);
  setInterval(next, 4500);

  // ---------------------------
  // FAQ accordion
  // ---------------------------
  document.querySelectorAll(".faq").forEach((box)=>{
    const btn = box.querySelector("button");
    btn.addEventListener("click", ()=>{
      box.classList.toggle("open");
    });
  });

  // ---------------------------
  // Contact form mailto
  // ---------------------------
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      const name = (document.getElementById("name")?.value||"").trim();
      const phone = (document.getElementById("phone")?.value||"").trim();
      const msg = (document.getElementById("msg")?.value||"").trim();
      const lang = localStorage.getItem("lang") || "sq";
      const subject = encodeURIComponent(lang==="sq" ? "Kërkesë nga Web - PIRAMIDA HVAC" : "Website inquiry - PIRAMIDA HVAC");
      const body = encodeURIComponent(
        `${lang==="sq"?"Emri":"Name"}: ${name}\n`+
        `${lang==="sq"?"Telefoni":"Phone"}: ${phone}\n\n`+
        `${lang==="sq"?"Mesazhi":"Message"}:\n${msg}`
      );
      window.location.href = `mailto:dionitkurti@gmail.com?subject=${subject}&body=${body}`;
    });
  }

})();
