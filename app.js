// Enable safe reveal behavior
document.documentElement.classList.add("js");

(function () {
  // ---------------------------
  // i18n dictionary (SQ / EN)
  // ---------------------------
  const I18N = {
    sq: {
      // NAV
      nav_home:"Ballina", nav_services:"Shërbimet", nav_about:"Rreth Nesh", nav_contact:"Kontakt", call_now:"Thirr tani",

      // HOME HERO
      hero_title:"Instalim & Mirëmbajtje Klima dhe Pompa Termike",
      hero_sub:"Zgjidhje efikase për ngrohje dhe ftohje — për shtëpi dhe biznese. Punë e pastër, korrektësi dhe shërbim i shpejtë.",
      badge_fast:"⚡ Reagim i shpejtë", badge_clean:"🧼 Punë e pastër", badge_eff:"💡 Efikasitet energjie",
      cta_quote:"Kërko ofertë", cta_services:"Shiko shërbimet",
      panel_title:"Shërbim i shpejtë & i sigurt",
      panel_li1:"Instalim profesional i klimave",
      panel_li2:"Servis, pastrim dhe mirëmbajtje sezonale",
      panel_li3:"Pompa termike — instalim & servis",
      panel_li4:"Konsulencë dhe ofertim sipas m²",

      // STATS labels
      stat1t:"Instalime & servisime", stat2t:"Kontakt & urgjenca", stat3t:"Garanci pune (ops.)", stat4t:"Kënaqësi klientësh",

      // SECTIONS
      sec_services:"Shërbimet kryesore",
      sec_services_lead:"Gjithçka që të duhet për komoditet gjatë gjithë vitit — instalim, servis dhe zgjidhje efikase.",
      s1t:"Instalim Klima", s1d:"Montim, vakumim, testim dhe rregullim për performancë maksimale.",
      s2t:"Servis & Mirëmbajtje", s2d:"Diagnostikim, pastrim, kontroll dhe riparim — që pajisja të punojë si duhet.",
      s3t:"Pompa Termike", s3d:"Dimensionim, instalim dhe servis për ngrohje/fhothje efikase.",

      sec_gallery:"Punë e pastër, rezultat i sigurt",
      sec_gallery_lead:"Disa shembuj të asaj çka ofrojmë: instalim i rregullt, servis profesional dhe zgjidhje efikase.",

      g1t:"Instalim i rregullt", g1d:"Vakumim, testim dhe konfigurim i saktë.",
      g2t:"Servis sezonal", g2d:"Pastrim + kontroll për performancë.",
      g3t:"Pompa termike", g3d:"Zgjidhje moderne për kursim energjie.",

      sec_why:"Pse PIRAMIDA HVAC?",
      sec_why_lead:"Klientët paguajnë për siguri, korrektësi dhe rezultat. Këto janë arsyet pse na zgjedhin.",
      w1t:"Çmim i drejtë & transparent", w1d:"Ofertë e qartë pa surpriza — rekomandojmë zgjidhjen më të mirë për buxhetin.",
      w2t:"Punë e pastër & standard", w2d:"Montim i rregullt, linja të pastra dhe testim i plotë para dorëzimit.",
      w3t:"Efikasitet energjie", w3d:"Të ndihmojmë të zgjedhësh kapacitetin e duhur për m² dhe izolim.",

      sec_process:"Si punojmë",
      sec_process_lead:"Proces i thjeshtë, profesional dhe i shpejtë — nga inspektimi te dorëzimi.",
      p1t:"Inspektim & këshillim", p1d:"E vlerësojmë hapësirën, m², izolimin dhe nevojën reale.",
      p2t:"Ofertë brenda ditës", p2d:"Të japim çmim + opsionet më të mira për performancë/ekonomi.",
      p3t:"Instalim profesional", p3d:"Vakumim, testim, konfigurim — punë e pastër dhe e sigurt.",
      p4t:"Kontroll & garanci", p4d:"Kontroll final dhe udhëzim për përdorim; opsionalisht mirëmbajtje sezonale.",

      sec_test:"Çfarë thonë klientët",
      sec_test_lead:"Shembuj feedback-u (mund t’i zëvendësojmë me emra realë).",

      sec_faq:"Pyetjet më të shpeshta",
      faq1q:"Sa kohë zgjat instalimi i klimës?", faq1a:"Zakonisht 1–3 orë (varësisht nga vendosja, distanca dhe punimet).",
      faq2q:"A bëni pastrim/servis sezonal?", faq2a:"Po. Rekomandohet 2 herë në vit për performancë dhe higjienë.",
      faq3q:"Si zgjedh kapacitetin e duhur?", faq3a:"Varet nga m², izolimi dhe orientimi. Na shkruaj m² dhe lokacionin — të udhëzojmë saktë.",

      // CTA
      cta_title:"Gati për ofertë?",
      cta_text:"Na dërgo m² dhe lokacionin — të kthejmë përgjigje shpejt.",
      cta_btn:"Kërko ofertë",
      cta_whats:"WhatsApp",

      // SERVICES PAGE
      services_h1:"Shërbimet tona",
      services_p:"Instalim, servis, pastrim sezonal dhe pompa termike — zgjidhje profesionale për shtëpi dhe biznese.",
      services_card1t:"Instalim Klima (Split/Multisplit)", services_card1p:"Montim, vakumim, testim, konfigurim dhe dorëzim i pastër.",
      services_card2t:"Servis & Pastrim", services_card2p:"Pastrim i filtrave/avulluesit, kontroll gazi dhe diagnostikim.",
      services_card3t:"Riparime", services_card3p:"Riparime të shpejta me diagnozë të qartë dhe zgjidhje të sigurt.",
      services_card4t:"Pompa Termike", services_card4p:"Dimensionim sipas m², instalim, servis dhe optimizim.",
      services_card5t:"Konsulencë", services_card5p:"Udhëzim për zgjedhjen e kapacitetit të duhur dhe kursim energjie.",
      services_card6t:"Mirëmbajtje sezonale", services_card6p:"Plan mirëmbajtjeje për performancë dhe jetëgjatësi.",

      // ABOUT PAGE
      about_h1:"Rreth PIRAMIDA HVAC",
      about_p:"Ne fokusohemi në punë të pastër, korrektësi dhe zgjidhje efikase për ngrohje/fhothje gjatë gjithë vitit.",
      about_m1t:"Misioni", about_m1p:"Të ofrojmë shërbime HVAC profesionale me standard të lartë dhe komunikim të qartë.",
      about_m2t:"Vizioni", about_m2p:"Të bëhemi zgjedhja #1 për klima & pompa termike në zonë, me reputacion të fortë.",
      about_v1t:"✅ Korrektësi", about_v1p:"Respektojmë kohën dhe mbajmë klientin të informuar.",
      about_v2t:"✅ Standard", about_v2p:"Vakumim + testim para dorëzimit, çdo herë.",
      about_v3t:"✅ Punë e pastër", about_v3p:"Linja të rregullta dhe lokacion i pastër pas përfundimit.",

      // CONTACT PAGE
      contact_h1:"Kontakt",
      contact_p:"Na telefono ose na shkruaj — përgjigjemi shpejt.",
      contact_details:"Detajet",
      contact_form:"Forma",
      map_open:"Open in Google Maps",
      map_dir:"Directions",
      form_name:"Emri", form_phone:"Telefoni", form_msg:"Mesazhi", form_send:"Dërgo"
    },

    en: {
      nav_home:"Home", nav_services:"Services", nav_about:"About", nav_contact:"Contact", call_now:"Call now",

      hero_title:"AC & Heat Pump Installation and Maintenance",
      hero_sub:"Efficient heating & cooling for homes and businesses. Clean workmanship, fair pricing, and fast response.",
      badge_fast:"⚡ Fast response", badge_clean:"🧼 Clean workmanship", badge_eff:"💡 Energy efficiency",
      cta_quote:"Request a quote", cta_services:"View services",
      panel_title:"Fast & reliable service",
      panel_li1:"Professional AC installation",
      panel_li2:"Service, cleaning & seasonal maintenance",
      panel_li3:"Heat pumps — install & service",
      panel_li4:"Consultation based on m²",

      stat1t:"Installations & services", stat2t:"Contact & urgent help", stat3t:"Work warranty (opt.)", stat4t:"Customer satisfaction",

      sec_services:"Core services",
      sec_services_lead:"Everything you need for year-round comfort — installation, service and efficient solutions.",
      s1t:"AC Installation", s1d:"Mounting, vacuuming, testing and tuning for maximum performance.",
      s2t:"Service & Maintenance", s2d:"Diagnostics, cleaning, checks and repairs so your unit runs properly.",
      s3t:"Heat Pumps", s3d:"Sizing, installation and service for efficient heating/cooling.",

      sec_gallery:"Clean work. Reliable results.",
      sec_gallery_lead:"A few examples of what we deliver: neat installs, professional service, efficient solutions.",
      g1t:"Neat installation", g1d:"Vacuum, test and correct configuration.",
      g2t:"Seasonal service", g2d:"Cleaning + inspection for performance.",
      g3t:"Heat pumps", g3d:"Modern solution for energy savings.",

      sec_why:"Why PIRAMIDA HVAC?",
      sec_why_lead:"Clients pay for safety, reliability, and results. Here’s why they choose us.",
      w1t:"Fair & transparent pricing", w1d:"Clear quoting with no surprises — best solution for your budget.",
      w2t:"Clean, standard workmanship", w2d:"Neat installation, tidy lines and full testing before handover.",
      w3t:"Energy efficiency first", w3d:"We help you choose the right capacity based on m² and insulation.",

      sec_process:"How we work",
      sec_process_lead:"Simple, professional, fast — from inspection to handover.",
      p1t:"Inspection & guidance", p1d:"We assess the space, m², insulation and real needs.",
      p2t:"Same-day quote", p2d:"You get price + best options for performance/savings.",
      p3t:"Professional install", p3d:"Vacuum, test, configure — clean and safe work.",
      p4t:"Final check & care", p4d:"Final inspection + usage tips; optional seasonal maintenance.",

      sec_test:"What clients say",
      sec_test_lead:"Sample feedback (we can replace with real names later).",

      sec_faq:"FAQ",
      faq1q:"How long does AC installation take?", faq1a:"Usually 1–3 hours depending on placement and required work.",
      faq2q:"Do you offer seasonal cleaning/service?", faq2a:"Yes. Recommended twice a year for performance and hygiene.",
      faq3q:"How do I choose the right capacity?", faq3a:"Depends on m², insulation and orientation. Send m² + location and we’ll advise.",

      cta_title:"Ready for a quote?",
      cta_text:"Send your m² and location — we’ll reply fast.",
      cta_btn:"Request a quote",
      cta_whats:"WhatsApp",

      services_h1:"Our services",
      services_p:"Installation, service, seasonal cleaning and heat pumps — professional solutions for homes and businesses.",
      services_card1t:"AC Installation (Split/Multisplit)", services_card1p:"Mounting, vacuuming, testing, setup and clean handover.",
      services_card2t:"Service & Cleaning", services_card2p:"Filter/coil cleaning, gas check and diagnostics.",
      services_card3t:"Repairs", services_card3p:"Fast repairs with clear diagnosis and safe fixes.",
      services_card4t:"Heat Pumps", services_card4p:"Sizing based on m², installation, service and optimization.",
      services_card5t:"Consultation", services_card5p:"Advice for correct capacity and energy savings.",
      services_card6t:"Seasonal maintenance", services_card6p:"Maintenance plan for performance and longevity.",

      about_h1:"About PIRAMIDA HVAC",
      about_p:"We focus on clean workmanship, reliability and efficient heating/cooling solutions all year round.",
      about_m1t:"Mission", about_m1p:"Deliver professional HVAC service with high standards and clear communication.",
      about_m2t:"Vision", about_m2p:"Become the #1 choice for AC & heat pumps in the area with a strong reputation.",
      about_v1t:"✅ Reliability", about_v1p:"We respect your time and keep you informed.",
      about_v2t:"✅ Standard", about_v2p:"Vacuum + testing before handover, every time.",
      about_v3t:"✅ Clean work", about_v3p:"Neat lines and a clean site after completion.",

      contact_h1:"Contact",
      contact_p:"Call or message us — we respond fast.",
      contact_details:"Details",
      contact_form:"Form",
      map_open:"Open in Google Maps",
      map_dir:"Directions",
      form_name:"Name", form_phone:"Phone", form_msg:"Message", form_send:"Send"
    }
  };

  const langBtns = document.querySelectorAll("[data-lang]");

  function applyLang(lang){
    const d = I18N[lang] || I18N.sq;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k = el.getAttribute("data-i18n");
      if(d[k]) el.textContent = d[k];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
      const k = el.getAttribute("data-i18n-ph");
      if(d[k]) el.setAttribute("placeholder", d[k]);
    });

    langBtns.forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
    localStorage.setItem("lang", lang);
  }

  langBtns.forEach(b=>b.addEventListener("click", ()=>applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem("lang") || "sq");

  // Reveal on scroll
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

  // Counters
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

  // Testimonials slider (only if present)
  const qEl = document.getElementById("quote");
  const aEl = document.getElementById("author");
  const dots = document.querySelectorAll(".dot");
  if(qEl && aEl && dots.length){
    const slides = [
      {q:"“Instalimi u bë shumë pastër dhe shpejt. Klima punon perfekt.”", a:"Arben • Fushë Kosovë"},
      {q:"“Na udhëzuan saktë për kapacitetin. Shpenzimet ranë ndjeshëm.”", a:"Blerta • Prishtinë"},
      {q:"“Servis i shpejtë, korrektësi dhe komunikim i mirë.”", a:"Mentor • Obiliq"}
    ];
    let i = 0;
    const render = (idx)=>{
      qEl.textContent = slides[idx].q;
      aEl.textContent = slides[idx].a;
      dots.forEach((d,di)=>d.classList.toggle("on", di===idx));
    };
    render(0);
    setInterval(()=>{ i=(i+1)%slides.length; render(i); }, 4500);
  }

  // FAQ accordion
  document.querySelectorAll(".faq").forEach(box=>{
    const btn = box.querySelector("button");
    if(!btn) return;
    btn.addEventListener("click", ()=> box.classList.toggle("open"));
  });

  // Contact form -> mailto
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
