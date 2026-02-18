document.documentElement.classList.add("js");

(function () {
  const PHONE_DISPLAY = "+383 44 635 966";
  const PHONE_TEL = "+38344635966";
  const WHATSAPP = "38344635966";
  const EMAIL = "piramida.hvac@gmail.com";
  const ADDRESS = "Rruga Hamdi Grajqevci, Lagjja Eliza, Fushë Kosovë";

  const I18N = {
    sq: {
      nav_home:"Ballina", nav_services:"Shërbimet", nav_about:"Rreth Nesh", nav_contact:"Kontakt", call_now:"Thirr tani",

      hero_title:"Klima & Pompa Termike — instalim, servis dhe zgjidhje efikase",
      hero_sub:"Për shtëpi dhe biznese. Punë e pastër, korrektësi, dhe performancë që e ndjen çdo ditë.",
      badge_fast:"⚡ Reagim i shpejtë", badge_clean:"🧼 Punë e pastër", badge_eff:"💡 Kursim energjie",
      cta_quote:"Kërko ofertë", cta_services:"Shiko shërbimet",

      panel_title:"Pse na zgjedhin klientët",
      panel_li1:"Instalim profesional (vakumim + testim)",
      panel_li2:"Servis & pastrim sezonal",
      panel_li3:"Pompa termike — dimensionim sipas m²",
      panel_li4:"Komunikim i qartë + ofertë e drejtë",

      sec_services:"Shërbimet kryesore",
      sec_services_lead:"Zgjidhje të plota për ftohje/ngrohje — nga instalimi te mirëmbajtja.",
      s1t:"Instalim klima", s1d:"Montim i rregullt, vakumim, testim dhe konfigurim.",
      s2t:"Servis & pastrim", s2d:"Diagnostikim, pastrim profesional dhe riparime.",
      s3t:"Pompa termike", s3d:"Instalim, servis dhe optimizim për kursim energjie.",

      sec_products:"Produktet Sinclair që mund t’i ofrojmë",
      sec_products_lead:"Produktet/fotot/përshkrimet dalin automatikisht pasi ta ekzekutosh skriptën e sinkronizimit.",
      prod_search:"Kërko produkt…", prod_all:"Të gjitha", prod_ac:"Klima", prod_hp:"Pompa termike", prod_other:"Tjera",
      prod_more:"Detaje", prod_official:"Hape te prodhuesi",
      modal_features:"Veçori",

      about_h1:"Rreth PIRAMIDA HVAC",
      about_p:"Ne fokusohemi në punë të pastër, korrektësi dhe zgjidhje efikase për klima dhe pompa termike.",

      contact_h1:"Kontakt",
      contact_p:"Na telefono ose na shkruaj — përgjigjemi shpejt.",
      map_open:"Hape në Google Maps", map_dir:"Udhëzime",
      form_name:"Emri", form_phone:"Telefoni", form_msg:"Mesazhi", form_send:"Dërgo",

      footer_about_title:"Për ne",
      footer_about_text:"Instalim, servis dhe mirëmbajtje për klima & pompa termike. Punë e pastër, korrektësi, dhe zgjidhje efikase.",
      footer_links_title:"Linka të shpejta",
      footer_contact_title:"Kontakt",
      footer_rights:"Të gjitha të drejtat të rezervuara."
    },
    en: {
      nav_home:"Home", nav_services:"Services", nav_about:"About", nav_contact:"Contact", call_now:"Call now",

      hero_title:"AC & Heat Pumps — install, service and efficient solutions",
      hero_sub:"For homes and businesses. Clean workmanship, fair quoting, and performance you feel every day.",
      badge_fast:"⚡ Fast response", badge_clean:"🧼 Clean work", badge_eff:"💡 Energy savings",
      cta_quote:"Request a quote", cta_services:"View services",

      panel_title:"Why clients choose us",
      panel_li1:"Professional installation (vacuum + test)",
      panel_li2:"Service & seasonal cleaning",
      panel_li3:"Heat pumps — sizing based on m²",
      panel_li4:"Clear communication + fair quote",

      sec_services:"Core services",
      sec_services_lead:"Complete heating/cooling solutions — from installation to maintenance.",
      s1t:"AC installation", s1d:"Neat mounting, vacuuming, testing and setup.",
      s2t:"Service & cleaning", s2d:"Diagnostics, professional cleaning and repairs.",
      s3t:"Heat pumps", s3d:"Install, service and optimization for savings.",

      sec_products:"Sinclair products we can offer",
      sec_products_lead:"Products/photos/descriptions appear automatically after running the sync script.",
      prod_search:"Search product…", prod_all:"All", prod_ac:"Air conditioning", prod_hp:"Heat pumps", prod_other:"Other",
      prod_more:"Details", prod_official:"Open official page",
      modal_features:"Features",

      about_h1:"About PIRAMIDA HVAC",
      about_p:"We focus on clean workmanship, reliability and efficient AC/heat pump solutions.",

      contact_h1:"Contact",
      contact_p:"Call or message us — we respond fast.",
      map_open:"Open in Google Maps", map_dir:"Directions",
      form_name:"Name", form_phone:"Phone", form_msg:"Message", form_send:"Send",

      footer_about_title:"About",
      footer_about_text:"Installation, service and maintenance for AC & heat pumps. Clean workmanship, reliability, and efficient solutions.",
      footer_links_title:"Quick links",
      footer_contact_title:"Contact",
      footer_rights:"All rights reserved."
    }
  };

  // Fill contact placeholders
  document.querySelectorAll("[data-phone-display]").forEach(el=>el.textContent = PHONE_DISPLAY);
  document.querySelectorAll("[data-phone-tel]").forEach(el=>el.setAttribute("href", `tel:${PHONE_TEL}`));
  document.querySelectorAll("[data-email]").forEach(el=>el.textContent = EMAIL);
  document.querySelectorAll("[data-email-mailto]").forEach(el=>el.setAttribute("href", `mailto:${EMAIL}`));
  document.querySelectorAll("[data-whatsapp]").forEach(el=>el.setAttribute("href", `https://wa.me/${WHATSAPP}`));
  document.querySelectorAll("[data-address]").forEach(el=>el.textContent = ADDRESS);

  // Language
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

  // Mobile nav
  const burger = document.querySelector("[data-burger]");
  const nav = document.querySelector("[data-nav]");
  if(burger && nav){
    burger.addEventListener("click", ()=>{
      nav.classList.toggle("mobile");
    });
  }

  // Reveal + count-up
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("in");

        // count-up for stats
        const numEl = e.target.querySelector?.("[data-count]") || (e.target.matches?.("[data-count]") ? e.target : null);
        if(numEl && !numEl.dataset.done){
          numEl.dataset.done = "1";
          const target = parseInt(numEl.dataset.count, 10) || 0;
          const suffix = numEl.dataset.suffix || "";
          const start = 0;
          const dur = 900;
          const t0 = performance.now();
          const step = (t)=>{
            const p = Math.min(1, (t - t0)/dur);
            const val = Math.floor(start + (target-start) * (p*p*(3-2*p)));
            numEl.textContent = `${val}${suffix}`;
            if(p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }

        io.unobserve(e.target);
      }
    });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));

  // Products loader (services page)
  async function loadProducts(){
    const grid = document.getElementById("productGrid");
    if(!grid) return;

    const chips = document.querySelectorAll("[data-chip]");
    const search = document.getElementById("productSearch");
    const modal = document.getElementById("modalOverlay");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalList = document.getElementById("modalList");
    const modalLink = document.getElementById("modalLink");
    const closeBtn = document.getElementById("modalClose");

    let items = [];
    let filter = "all";
    let q = "";

    function t(obj){
      const lang = localStorage.getItem("lang") || "sq";
      if(!obj) return "";
      if(typeof obj === "string") return obj;
      return obj[lang] || obj.sq || obj.en || "";
    }
    function listT(arr){
      const lang = localStorage.getItem("lang") || "sq";
      if(!arr) return [];
      if(Array.isArray(arr)) return arr;
      return (arr[lang] || arr.sq || arr.en || []);
    }

    function match(it){
      const inFilter = (filter==="all") || (it.type===filter);
      const txt = (t(it.name)+" "+t(it.category)+" "+t(it.short)).toLowerCase();
      const inQ = !q || txt.includes(q.toLowerCase());
      return inFilter && inQ;
    }

    function render(){
      grid.innerHTML = "";
      const shown = items.filter(match);
      if(!shown.length){
        grid.innerHTML = `<div class="card" style="grid-column:1/-1"><p style="margin:0;color:var(--muted)">No products loaded yet. Run the sync script locally and commit <b>products.json</b> + images, then refresh.</p></div>`;
        return;
      }
      for(const it of shown){
        const li = listT(it.highlights).slice(0,3).map(x=>`<li>${x}</li>`).join("");
        const img = it.imageLocal || it.image || "assets/products/placeholder.jpg";
        const card = document.createElement("article");
        card.className = "card productCard reveal";
        card.innerHTML = `
          <div class="img"><img loading="lazy" src="${img}" alt="${t(it.name)}"></div>
          <div class="body">
            <div class="kicker"><span>${t(it.category) || ""}</span><span>Sinclair</span></div>
            <div class="title">${t(it.name)}</div>
            <ul>${li}</ul>
            <div class="actions">
              <button class="btn primary" data-open="${it.id}">✨ ${I18N[(localStorage.getItem("lang")||"sq")].prod_more}</button>
              <a class="btn" href="${it.url||'#'}" target="_blank" rel="noreferrer">${I18N[(localStorage.getItem("lang")||"sq")].prod_official}</a>
            </div>
          </div>
        `;
        grid.appendChild(card);
        io.observe(card);
      }

      grid.querySelectorAll("[data-open]").forEach(btn=>{
        btn.addEventListener("click", ()=>{
          const id = btn.getAttribute("data-open");
          const it = items.find(x=>x.id===id);
          if(!it) return;
          const img = it.imageLocal || it.image || "assets/products/placeholder.jpg";
          modalImg.src = img;
          modalTitle.textContent = t(it.name);
          modalDesc.textContent = t(it.short) || t(it.category) || "";
          modalList.innerHTML = listT(it.highlights).slice(0,8).map(x=>`<li>${x}</li>`).join("");
          modalLink.href = it.url || "#";
          modal.classList.add("show");
        });
      });
    }

    function setChip(v){
      filter = v;
      chips.forEach(c=>c.classList.toggle("on", c.dataset.chip===v));
      render();
    }

    chips.forEach(c=>c.addEventListener("click", ()=>setChip(c.dataset.chip)));
    if(search) search.addEventListener("input", (e)=>{ q=e.target.value||""; render(); });

    if(closeBtn && modal){
      closeBtn.addEventListener("click", ()=>modal.classList.remove("show"));
      modal.addEventListener("click", (e)=>{ if(e.target===modal) modal.classList.remove("show"); });
      window.addEventListener("keydown",(e)=>{ if(e.key==="Escape") modal.classList.remove("show"); });
    }

    try{
      const res = await fetch("products.json", {cache:"no-store"});
      const data = await res.json();
      items = Array.isArray(data.items) ? data.items : [];
      render();
    }catch(err){
      items = [];
      render();
    }
  }
  loadProducts();

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
        `${lang==="sq"?"Mesazhi":"Message"}:\n${msg}\n\n`+
        `---\nPhone: ${PHONE_DISPLAY}\nEmail: ${EMAIL}\nAddress: ${ADDRESS}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    });
  }
})();
