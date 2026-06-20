/* ════════════════════════════════════════════
   VAVO ORGANICS — products.js
   Dynamic Products, Modal, FAQ, Scroll Reveal
════════════════════════════════════════════ */

'use strict';

/* ─── PRODUCT DATA ───────────────────────── */
const PRODUCTS = [
  {
    id: 'cow-dung-powder',
    name: 'Cow Dung Powder',
    category: 'Soil Enricher',
    weight: '5 KG',
    image: 'images/cow-dung-powder.png',
    imageAlt: 'VAVO Organics Cow Dung Powder — Premium Soil Enricher',
    shortDesc: 'A time-honoured soil amendment, air-dried and finely milled. Restores microbial life and builds long-term soil fertility naturally.',
    fullDesc: 'Our Cow Dung Powder is sustainably sourced and carefully processed to retain maximum organic matter. Free of synthetic additives, it enriches your soil\'s microbial ecosystem, improves water retention and delivers a gentle, continuous release of nutrients for lasting plant health.',
    benefits: [
      'Activates dormant soil microbes and earthworm activity',
      'Improves soil structure, aeration and drainage',
      'Provides balanced macro and micro nutrients organically',
      'pH-neutral — safe for all crops and garden plants',
      'Reduces dependency on chemical fertilisers over time',
    ],
    usage: 'Mix 200–500 g per square metre into the topsoil before sowing or transplanting. For potted plants, blend 15–20% by volume with your potting mix. Apply once per season for best results.',
    whatsapp: 'I am interested in Cow Dung Powder (5 KG) from VAVO Organics. Please share pricing and availability.',
  },
  {
    id: 'neem-cake-powder',
    name: 'Neem Cake Powder',
    category: 'Natural Pest Control',
    weight: '5 KG',
    image: 'images/neem-cake-powder.png',
    imageAlt: 'VAVO Organics Neem Cake Powder — Natural Pest Control',
    shortDesc: 'Cold-pressed neem seed cake, finely powdered. A dual-action organic input that enriches soil while naturally deterring pests and nematodes.',
    fullDesc: 'Derived from cold-pressed neem seeds after oil extraction, our Neem Cake Powder retains the full spectrum of neem\'s bioactive compounds. It acts as both a soil nutrient and a natural deterrent against soil-borne pests, making it indispensable for organic farming.',
    benefits: [
      'Suppresses soil-borne pathogens and root-knot nematodes',
      'Rich in nitrogen, phosphorus, potassium and sulphur',
      'Enhances nutrient uptake through improved soil health',
      'Safe for beneficial insects including bees and earthworms',
      'OMRI-compatible — suitable for certified organic farming',
    ],
    usage: 'Broadcast 100–200 g per square metre and mix into the top 5 cm of soil. For trees and shrubs, apply 500 g per plant around the drip line. Repeat every 60 days during the growing season.',
    whatsapp: 'I am interested in Neem Cake Powder (5 KG) from VAVO Organics. Please share pricing and availability.',
  },
  {
    id: 'cocopeat',
    name: 'Cocopeat',
    category: 'Growing Medium',
    weight: '5 KG',
    image: 'images/cocopeat.png',
    imageAlt: 'VAVO Organics Cocopeat — Premium Growing Medium',
    shortDesc: 'Washed, buffered and naturally pH-balanced. An exceptional soilless growing medium that holds moisture while ensuring roots breathe freely.',
    fullDesc: 'Our Cocopeat is triple-washed and buffered with calcium-magnesium to remove excess sodium salts. The result is a clean, inert, naturally sustainable medium ideal for seed germination, hydroponics, container gardening and soil amendment. A by-product of coconut processing, it embodies circular agriculture.',
    benefits: [
      'Holds up to 8× its weight in water, reducing irrigation frequency',
      'Excellent aeration prevents root rot and compaction',
      'Naturally anti-fungal and resistant to decomposition',
      'pH 5.8–6.5 — optimal for most vegetables and herbs',
      'Renewable and sustainably sourced from coconut processing',
    ],
    usage: 'Expand the block in 4–5 litres of water per kg of cocopeat. Use as a standalone seed-starting medium or blend up to 30–40% into potting soil for improved water retention. Rinse once before use for salt-sensitive crops.',
    whatsapp: 'I am interested in Cocopeat (5 KG) from VAVO Organics. Please share pricing and availability.',
  },
  {
    id: 'cow-dung-cake',
    name: 'Cow Dung Cake',
    category: 'Hawan & Puja',
    weight: '2 KG',
    image: 'images/cow-dung-cake.png',
    imageAlt: 'VAVO Organics Cow Dung Cake — Hawan & Puja',
    shortDesc: 'Hand-formed from pure desi cow dung. Sun-dried to perfection for use in sacred rituals, hawan and traditional agricultural practices.',
    fullDesc: 'Each cake is hand-formed from pure desi cow dung — the kind revered in Vedic tradition — and sun-dried to retain its sacred properties. Used across India for hawan, puja and fumigation, these cakes burn slowly and cleanly, releasing purifying smoke that has been part of Indian culture for millennia.',
    benefits: [
      'Pure desi cow dung — no additives or binders',
      'Slow, even burn with minimal ash residue',
      'Traditionally used to purify air during rituals',
      'Also serves as a natural mosquito and insect repellent when burned',
      'Supports local pastoral communities and zero-waste farming',
    ],
    usage: 'For hawan and puja: place on a clean hawan kund and ignite with camphor or ghee. Allow to catch fully before adding ritual materials. For agricultural use as a slow-release soil amendment, crumble and incorporate into soil before the growing season.',
    whatsapp: 'I am interested in Cow Dung Cake (2 KG) from VAVO Organics. Please share pricing and availability.',
  },
];

/* ─── FAQ DATA ───────────────────────────── */
const FAQS = [
  {
    q: 'What is Cow Dung Powder?',
    a: 'Cow Dung Powder is an organic soil amendment made from air-dried, finely milled cow dung. It enriches the soil with beneficial microorganisms and organic matter, improving fertility, structure and water retention over time — without any synthetic additives.',
  },
  {
    q: 'How is Neem Cake Powder used?',
    a: 'Neem Cake Powder is broadcast onto the soil surface and mixed into the top few centimetres before planting. It acts simultaneously as an organic fertiliser and a natural deterrent against soil-borne pests and nematodes. It is safe to use for all food crops.',
  },
  {
    q: 'What is Cocopeat?',
    a: 'Cocopeat (coir pith) is the fibrous material extracted from coconut husks. After washing and buffering, it becomes a high-quality growing medium prized for its water retention, aeration and natural anti-fungal properties — ideal for seed starting, hydroponics and potting mixes.',
  },
  {
    q: 'What are Cow Dung Cakes used for?',
    a: 'Our Cow Dung Cakes are made from pure desi cow dung and sun-dried for use in hawan, puja and traditional Indian rituals. They burn slowly and cleanly. They can also be crumbled and used as a slow-release organic soil amendment in gardens and farms.',
  },
  {
    q: 'Do you offer dealership opportunities?',
    a: 'Yes — we actively welcome distribution partners across India. If you are interested in becoming a VAVO Organics dealer, please reach out via the Contact section or WhatsApp us directly. We will be happy to share our dealership structure and terms with you.',
  },
];

/* ─── WHATSAPP BASE ──────────────────────── */
const WA_BASE = 'https://wa.me/919313259360?text=';

/* ════════════════════════════════════════════
   DOM HELPERS
════════════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ════════════════════════════════════════════
   SCROLL-REVEAL OBSERVER
════════════════════════════════════════════ */
function initScrollReveal () {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  $$('.reveal, .faq-item, .product-card').forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════
   STICKY NAV
════════════════════════════════════════════ */
function initNav () {
  const header = $('#nav-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  const btn = $('#nav-hamburger');
  const links = $('#nav-links');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('mobile-open');
  });

  // Close on link click
  links.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      btn.classList.remove('open');
      links.classList.remove('mobile-open');
    }
  });
}

/* ════════════════════════════════════════════
   PRODUCT GRID
════════════════════════════════════════════ */
function buildProductGrid () {
  const grid = $('#product-grid');
  if (!grid) return;

  PRODUCTS.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'product-card reveal';
    card.setAttribute('data-id', p.id);
    card.style.transitionDelay = `${0.1 + i * 0.1}s`;
    card.innerHTML = `
      <div class="card-image-wrap">
        ${buildCardImage(p)}
        <span class="card-badge">${escHtml(p.category)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-name">${escHtml(p.name)}</h3>
        <p class="card-desc">${escHtml(p.shortDesc)}</p>
        <div class="card-footer">
          <span class="card-weight">${escHtml(p.weight)}</span>
          <button class="card-cta" data-id="${p.id}" aria-label="View details for ${escHtml(p.name)}">
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);

    // Open modal on card or CTA click
    card.addEventListener('click', (e) => {
      // Prevent double-fire: always open if card body is clicked
      openModal(p.id);
    });
  });
}

function buildCardImage (p) {
  // Render img tag; if image fails, placeholder SVG shows via error handler
  return `
    <img
      class="card-image"
      src="${escHtml(p.image)}"
      alt="${escHtml(p.imageAlt)}"
      loading="lazy"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    />
    <div class="card-image-placeholder" style="display:none; position:absolute; inset:0;">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" stroke="#0F3D2E" stroke-width="1.5"/>
        <path d="M20 42 C20 28 44 28 44 42" stroke="#0F3D2E" stroke-width="1.5" fill="none"/>
        <circle cx="32" cy="26" r="5" stroke="#C8A76A" stroke-width="1.5"/>
      </svg>
    </div>
  `;
}

/* ════════════════════════════════════════════
   MODAL
════════════════════════════════════════════ */
function openModal (id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  $('#modal-image').src = p.image;
  $('#modal-image').alt = p.imageAlt;
  $('#modal-badge').textContent = p.category;
  $('#modal-category').textContent = p.category;
  $('#modal-title').textContent = p.name;
  $('#modal-weight').textContent = `Net Weight: ${p.weight}`;
  $('#modal-desc').textContent = p.fullDesc;

  // Benefits
  const ul = $('#modal-benefits');
  ul.innerHTML = '';
  p.benefits.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    ul.appendChild(li);
  });

  // Usage
  $('#modal-usage').textContent = p.usage;

  // WhatsApp CTA
  const waBtn = $('#modal-whatsapp');
  waBtn.href = WA_BASE + encodeURIComponent(p.whatsapp);

  // Show overlay
  const overlay = $('#modal-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Focus trap: focus close button
  setTimeout(() => $('#modal-close').focus(), 50);
}

function closeModal () {
  $('#modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal () {
  $('#modal-close').addEventListener('click', closeModal);
  $('#modal-overlay').addEventListener('click', (e) => {
    if (e.target === $('#modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ════════════════════════════════════════════
   FAQ ACCORDION
════════════════════════════════════════════ */
function buildFAQ () {
  const list = $('#faq-list');
  if (!list) return;

  FAQS.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'faq-item reveal';
    div.style.transitionDelay = `${i * 0.08}s`;
    div.innerHTML = `
      <button class="faq-question" aria-expanded="false" id="faq-q-${i}" aria-controls="faq-a-${i}">
        ${escHtml(item.q)}
        <span class="faq-icon" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/>
          </svg>
        </span>
      </button>
      <div class="faq-answer" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">
        <div class="faq-answer-inner">${escHtml(item.a)}</div>
      </div>
    `;
    list.appendChild(div);

    const btn = div.querySelector('.faq-question');
    const answer = div.querySelector('.faq-answer');
    const inner = div.querySelector('.faq-answer-inner');

    btn.addEventListener('click', () => {
      const isOpen = div.classList.contains('open');
      // Close all
      $$('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-answer').style.maxHeight = '0';
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      // Open this one if it was closed
      if (!isOpen) {
        div.classList.add('open');
        answer.style.maxHeight = inner.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ════════════════════════════════════════════
   UTILITY
════════════════════════════════════════════ */
function escHtml (str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  buildProductGrid();
  buildFAQ();
  initModal();

  // Reveal runs after grid/faq are in the DOM
  requestAnimationFrame(() => {
    requestAnimationFrame(initScrollReveal);
  });
});
