/* ── World Cup data ──────────────────────────────────────────── */
const COUNTRIES = [
  {
    file:'Belgium.png', name:'Belgium', nickname:'Les Diables Rouges', confederation:'UEFA',
    appearances:14, bestResult:'3rd Place', bestYear:'2018', titles:0,
    group:'E', ranking:4, odds:'14/1',
    nextMatch:{ vs:'Slovakia', date:'Jun 14', venue:'Miami' },
    players:[
      { name:'Eden Hazard',     role:'No.10 · Winger · 126 caps' },
      { name:'Kevin De Bruyne', role:'No.7 · Midfielder · 108 caps' },
      { name:'Romelu Lukaku',   role:'No.9 · Striker · 110 caps' },
    ],
    facts:[
      'Belgium spent over 1,900 days ranked #1 in the FIFA World Rankings — the longest stretch in history.',
      'In 2018 vs Japan, Belgium came back from 0–2 down to win 3–2 with a 94th-minute counter. One of the great WC comebacks.',
      'De Bruyne, Hazard, Lukaku — the Golden Generation had arguably the most gifted trio never to win a major title.',
    ],
    accent:'#c8102e',
  },
  {
    file:'Costa Rica.png', name:'Costa Rica', nickname:'La Sele', confederation:'CONCACAF',
    appearances:6, bestResult:'Quarter-final', bestYear:'2014', titles:0,
    group:'F', ranking:47, odds:'500/1',
    nextMatch:{ vs:'Spain', date:'Jun 15', venue:'Los Angeles' },
    players:[
      { name:'Keylor Navas',  role:'No.1 · Goalkeeper · 117 caps' },
      { name:'Bryan Ruiz',    role:'No.10 · Midfielder · 88 caps' },
      { name:'Joel Campbell', role:'No.12 · Forward · 104 caps' },
    ],
    facts:[
      'In 2014, Costa Rica topped the "Group of Death" above Uruguay, Italy, and England.',
      'Keylor Navas made 25 saves across the knockout rounds alone — one of the great individual WC performances.',
      'For a nation of just 5 million, reaching the 2014 quarter-finals may be the biggest overachievement in World Cup history.',
    ],
    accent:'#002b7f',
  },
  {
    file:'France-1.png', name:'France', nickname:'Les Bleus — 1998', confederation:'UEFA',
    appearances:16, bestResult:'Champion', bestYear:'1998 · 2018', titles:2,
    group:'D', ranking:2, odds:'5/1',
    nextMatch:{ vs:'Poland', date:'Jun 13', venue:'New York' },
    players:[
      { name:'Zinédine Zidane', role:'No.10 · Midfielder · 108 caps' },
      { name:'Thierry Henry',   role:'No.12 · Striker · 123 caps' },
      { name:'Kylian Mbappé',  role:'No.10 · Forward · 91 caps' },
    ],
    facts:[
      'France is the only nation to win the World Cup while hosting it (1998) and in the modern era (2018).',
      'Zidane scored twice in the 1998 final against Brazil — both headers from corners. A masterclass in the biggest moment.',
      'The 1998 squad represented over 40 nationalities by heritage — a new France finding itself through football.',
    ],
    accent:'#0055a4',
  },
  {
    file:'France.png', name:'France', nickname:'Les Bleus — 2018', confederation:'UEFA',
    appearances:16, bestResult:'Champion', bestYear:'1998 · 2018', titles:2,
    group:'D', ranking:2, odds:'5/1',
    nextMatch:{ vs:'Poland', date:'Jun 13', venue:'New York' },
    players:[
      { name:'Zinédine Zidane', role:'No.10 · Midfielder · 108 caps' },
      { name:'Thierry Henry',   role:'No.12 · Striker · 123 caps' },
      { name:'Kylian Mbappé',  role:'No.10 · Forward · 91 caps' },
    ],
    facts:[
      'The 2018 squad averaged just 26 years old — one of the youngest World Cup-winning teams ever assembled.',
      'Mbappé became only the second teenager after Pelé to score in a World Cup final, netting in the 65th minute vs Croatia.',
      "France's 2018 win was built on transitions and set pieces — they scored 4 goals from dead balls, a tournament record.",
    ],
    accent:'#0055a4',
  },
  {
    file:'Germany.png', name:'Germany', nickname:'Die Mannschaft', confederation:'UEFA',
    appearances:20, bestResult:'Champion', bestYear:'1954·74·90·2014', titles:4,
    group:'A', ranking:3, odds:'6/1',
    nextMatch:{ vs:'Japan', date:'Jun 11', venue:'Dallas' },
    players:[
      { name:'Franz Beckenbauer', role:'No.5 · Libero · 103 caps' },
      { name:'Gerd Müller',       role:'No.13 · Striker · 62 caps' },
      { name:'Toni Kroos',        role:'No.8 · Midfielder · 106 caps' },
    ],
    facts:[
      'Germany reached the semi-finals in 13 of their 20 World Cup appearances — unmatched consistency across generations.',
      'The 7–1 destruction of Brazil on home soil in 2014 remains the single most shocking scoreline in World Cup semifinal history.',
      "Götze's chest-and-volley winner in the 2014 final — in extra time, off the bench — is arguably the greatest WC-winning goal ever.",
    ],
    accent:'#ffd700',
  },
  {
    file:'Jamaica.png', name:'Jamaica', nickname:'Reggae Boyz', confederation:'CONCACAF',
    appearances:1, bestResult:'Group Stage', bestYear:'1998', titles:0,
    group:'C', ranking:55, odds:'750/1',
    nextMatch:{ vs:'Mexico', date:'Jun 12', venue:'Houston' },
    players:[
      { name:'Theodore Whitmore', role:'No.10 · Midfielder · 86 caps' },
      { name:'Deon Burton',       role:'No.9 · Striker · 57 caps' },
      { name:'Robbie Earl',       role:'No.7 · Midfielder · 78 caps' },
    ],
    facts:[
      'Jamaica became the first Caribbean nation to qualify for the World Cup since Cuba in 1938.',
      'Despite finishing bottom of their group, Jamaica beat Japan 2–1 in 1998 — their only ever World Cup victory.',
      'The Reggae Boyz were coached by Brazilian René Simões, who turned a raw, talented squad into history-makers.',
    ],
    accent:'#009b3a',
  },
  {
    file:'Japan.png', name:'Japan', nickname:'Samurai Blue', confederation:'AFC',
    appearances:7, bestResult:'Round of 16', bestYear:'2002·10·22', titles:0,
    group:'A', ranking:18, odds:'40/1',
    nextMatch:{ vs:'Germany', date:'Jun 11', venue:'Dallas' },
    players:[
      { name:'Hidetoshi Nakata', role:'No.7 · Midfielder · 77 caps' },
      { name:'Shinji Kagawa',    role:'No.10 · Midfielder · 97 caps' },
      { name:'Takumi Minamino', role:'No.10 · Forward · 66 caps' },
    ],
    facts:[
      'At Qatar 2022, Japan became the first team ever to beat both Germany and Spain in the same group stage.',
      "Japan's 2002 co-hosting with South Korea marked Asia's first World Cup — and football's arrival on the continent.",
      "Down at half-time in both games, Japan's 2022 wins over Germany and Spain followed an identical tactical script.",
    ],
    accent:'#bc002d',
  },
  {
    file:'Mexico.png', name:'Mexico', nickname:'El Tri', confederation:'CONCACAF',
    appearances:17, bestResult:'Quarter-final', bestYear:'1970 · 1986', titles:0,
    group:'C', ranking:15, odds:'35/1',
    nextMatch:{ vs:'Ecuador', date:'Jun 12', venue:'Houston' },
    players:[
      { name:'Hugo Sánchez',      role:'No.9 · Striker · 58 caps' },
      { name:'Cuauhtémoc Blanco', role:'No.10 · Midfielder · 120 caps' },
      { name:'Javier Hernández',  role:'No.14 · Striker · 109 caps' },
    ],
    facts:[
      'Mexico reached the Round of 16 in 7 consecutive World Cups (1994–2018) — the "Curse of the 5th Game" haunted a generation.',
      "Blanco's legendary Croqueta — bouncing the ball between his feet to escape two defenders — is one of 1998's most iconic moments.",
      'El Tri has qualified for every World Cup since 1986. As a 2026 co-host, the pressure to finally break the curse is immense.',
    ],
    accent:'#006847',
  },
  {
    file:'Netherlands.png', name:'Netherlands', nickname:'Oranje', confederation:'UEFA',
    appearances:11, bestResult:'Runner-up', bestYear:'1974·78·2010', titles:0,
    group:'D', ranking:7, odds:'11/1',
    nextMatch:{ vs:'Senegal', date:'Jun 13', venue:'Philadelphia' },
    players:[
      { name:'Johan Cruyff',     role:'No.14 · Forward · 48 caps' },
      { name:'Marco van Basten', role:'No.9 · Striker · 58 caps' },
      { name:'Arjen Robben',     role:'No.11 · Winger · 96 caps' },
    ],
    facts:[
      'The Netherlands have lost three World Cup finals without ever lifting the trophy — no nation has come closer, more times.',
      "Robben's sprint and finish in the 94th minute against Mexico in 2014 is one of the most memorable last-gasp WC goals.",
      'Total Football — invented by Cruyff and Michels in the 1970s — permanently changed how the world thinks about the game.',
    ],
    accent:'#ff6400',
  },
  {
    file:'Saudi Arabia.png', name:'Saudi Arabia', nickname:'Green Falcons', confederation:'AFC',
    appearances:6, bestResult:'Round of 16', bestYear:'1994', titles:0,
    group:'B', ranking:58, odds:'300/1',
    nextMatch:{ vs:'Argentina', date:'Jun 12', venue:'Boston' },
    players:[
      { name:'Sami Al-Jaber',     role:'No.9 · Striker · 163 caps' },
      { name:'Yasser Al-Qahtani', role:'No.10 · Forward · 97 caps' },
      { name:'Salem Al-Dawsari', role:'No.11 · Winger · 67 caps' },
    ],
    facts:[
      'In 2022, Saudi Arabia shocked eventual finalists Argentina 2–1 — one of the biggest upsets in World Cup history.',
      "Al-Dawsari's 90th-minute winner was voted Goal of the Tournament at Qatar 2022. He played the game of his life.",
      'Saudi Arabia finished ahead of Argentina in the 2022 group stage — the first time La Albiceleste topped their group since 1998.',
    ],
    accent:'#006c35',
  },
  {
    file:'South Africa.png', name:'South Africa', nickname:'Bafana Bafana', confederation:'CAF',
    appearances:3, bestResult:'Group Stage', bestYear:'1998·2002·2010', titles:0,
    group:'G', ranking:67, odds:'500/1',
    nextMatch:{ vs:'Portugal', date:'Jun 14', venue:'Atlanta' },
    players:[
      { name:'Benni McCarthy',     role:'No.10 · Striker · 80 caps' },
      { name:'Aaron Mokoena',      role:'No.6 · Midfielder · 107 caps' },
      { name:'Siphiwe Tshabalala', role:'No.8 · Winger · 71 caps' },
    ],
    facts:[
      'South Africa became the first African nation to host the World Cup in 2010 — Tshabalala\'s opener is one of the tournament\'s most iconic goals.',
      'Bafana Bafana became the first host nation ever to be eliminated in the group stage of a World Cup.',
      "Tshabalala's goal against Mexico echoed across a continent — the moment football truly came home to Africa.",
    ],
    accent:'#007a4d',
  },
  {
    file:'South Korea.png', name:'South Korea', nickname:'Taeguk Warriors', confederation:'AFC',
    appearances:11, bestResult:'4th Place', bestYear:'2002', titles:0,
    group:'H', ranking:23, odds:'66/1',
    nextMatch:{ vs:'Brazil', date:'Jun 15', venue:'Seattle' },
    players:[
      { name:'Park Ji-sung',   role:'No.13 · Midfielder · 100 caps' },
      { name:'Ahn Jung-hwan', role:'No.10 · Forward · 71 caps' },
      { name:'Son Heung-min', role:'No.7 · Winger · 130 caps' },
    ],
    facts:[
      'In 2002, South Korea became the first Asian nation to reach a World Cup semi-final, beating Spain and Italy along the way.',
      "Ahn Jung-hwan's golden goal against Italy got him released from his Italian club Perugia the very next day.",
      'The 2002 run united the peninsula behind a single cause — the home crowds were among the most electric in WC history.',
    ],
    accent:'#cd2e3a',
  },
  {
    file:'Spain.png', name:'Spain', nickname:'La Roja', confederation:'UEFA',
    appearances:16, bestResult:'Champion', bestYear:'2010', titles:1,
    group:'H', ranking:1, odds:'6/1',
    nextMatch:{ vs:'Morocco', date:'Jun 15', venue:'Los Angeles' },
    players:[
      { name:'Xavi Hernández',  role:'No.8 · Midfielder · 133 caps' },
      { name:'Andrés Iniesta', role:'No.6 · Midfielder · 131 caps' },
      { name:'David Villa',    role:'No.7 · Striker · 98 caps' },
    ],
    facts:[
      'Spain won Euro 2008, the 2010 World Cup, and Euro 2012 — the only team ever to win three consecutive major titles.',
      "Iniesta's 116th-minute winner in the 2010 final turned Spain's era of tiki-taka dominance into undeniable history.",
      "Spain's 2010 squad averaged over 60% possession in every match — no team before had controlled the ball like that.",
    ],
    accent:'#c60b1e',
  },
  {
    file:'USA.png', name:'USA', nickname:'Stars & Stripes', confederation:'CONCACAF',
    appearances:11, bestResult:'3rd / QF', bestYear:'1930 · 2002', titles:0,
    group:'A', ranking:16, odds:'22/1',
    nextMatch:{ vs:'Bolivia', date:'Jun 11', venue:'Los Angeles' },
    players:[
      { name:'Landon Donovan',    role:'No.10 · Midfielder · 157 caps' },
      { name:'Clint Dempsey',    role:'No.8 · Midfielder · 141 caps' },
      { name:'Christian Pulisic', role:'No.10 · Winger · 78 caps' },
    ],
    facts:[
      'Tim Howard made 16 saves against Belgium in 2014 — the most by any goalkeeper in a single World Cup match.',
      "Donovan's 91st-minute goal against Algeria in 2010 sent the USA through — and turned millions of Americans into football fans.",
      'As a 2026 co-host, the USMNT carries the weight of a nation discovering football — and the talent to go deep.',
    ],
    accent:'#3c3b6e',
  },
  {
    file:'Uruguay.png', name:'Uruguay', nickname:'La Celeste', confederation:'CONMEBOL',
    appearances:14, bestResult:'Champion', bestYear:'1930 · 1950', titles:2,
    group:'E', ranking:20, odds:'22/1',
    nextMatch:{ vs:'Belgium', date:'Jun 14', venue:'Miami' },
    players:[
      { name:'Diego Forlán',   role:'No.7 · Striker · 112 caps' },
      { name:'Luis Suárez',   role:'No.9 · Striker · 135 caps' },
      { name:'Edinson Cavani', role:'No.21 · Striker · 136 caps' },
    ],
    facts:[
      "Uruguay's 1950 win in the Maracanã in front of 200,000 fans is the \"Maracanazo\" — one of sport's greatest upsets.",
      "Diego Forlán won the Golden Ball at 2010 — the first Uruguayan since his grandfather Pablo played for the national team.",
      'Uruguay is the smallest nation ever to win the World Cup — a country of under 4 million people, two world titles.',
    ],
    accent:'#5aaad5',
  },
];

const N       = COUNTRIES.length;
const IMG     = 'images/projects/renders/';
const DOUBLED = [...COUNTRIES, ...COUNTRIES];

/* ── Layout metrics ──────────────────────────────────────────── */
const GAP = 110;

function slideW() {
  const vw = window.innerWidth;
  if (vw >= 1400) return 260;
  if (vw >= 1000) return 230;
  if (vw >= 700)  return 195;
  return 160;
}

function getStep() { return slideW() + GAP; }

/* ── Build DOM ───────────────────────────────────────────────── */
const carousel = document.getElementById('carousel');
const dotsWrap = document.getElementById('dots');

DOUBLED.forEach((c, i) => {
  const realIdx = i % N;
  const slide   = document.createElement('div');
  slide.className         = 'slide';
  slide.tabIndex          = 0;
  slide.dataset.index     = i;
  slide.dataset.realIndex = realIdx;
  slide.style.width       = slideW() + 'px';
  slide.style.marginRight = (i < DOUBLED.length - 1 ? GAP : 0) + 'px';

  const glow = document.createElement('div');
  glow.className = 'slide-glow';
  glow.style.background = c.accent;

  const img = document.createElement('img');
  img.src       = IMG + encodeURIComponent(c.file);
  img.alt       = `3D render — ${c.name}`;
  img.className = 'slide-img';
  img.loading   = 'lazy';
  img.decoding  = 'async';

  const name = document.createElement('p');
  name.className   = 'slide-name';
  name.textContent = c.name;

  const hint = document.createElement('p');
  hint.className   = 'slide-hint';
  hint.textContent = 'Click to explore';

  const tilt = document.createElement('div');
  tilt.className = 'slide-tilt';
  tilt.appendChild(img);

  slide.addEventListener('mousemove', e => {
    const rect = slide.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    tilt.style.transform = `rotateY(${(dx * 7).toFixed(2)}deg) rotateX(${(-dy * 5).toFixed(2)}deg)`;
  }, { passive: true });
  slide.addEventListener('mouseleave', () => {
    tilt.style.transform = '';
  });

  slide.append(glow, tilt, name, hint);
  carousel.appendChild(slide);
});

const slides = [...document.querySelectorAll('.slide')];

COUNTRIES.forEach((c, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot';
  dot.setAttribute('aria-label', `Go to ${c.name}`);
  dot.addEventListener('click', () => snapToReal(i));
  dotsWrap.appendChild(dot);
});
const dots = [...document.querySelectorAll('.dot')];

/* ── Track sizing ────────────────────────────────────────────── */
function resizeTrack() {
  const sw = slideW();
  const st = sw + GAP;
  carousel.style.width = (DOUBLED.length * st) + 'px';
  slides.forEach(s => { s.style.width = sw + 'px'; });
}
resizeTrack();
window.addEventListener('resize', resizeTrack, { passive: true });

/* ── Scroll state ────────────────────────────────────────────── */
let offset     = slideW() / 2;
let snapTarget = null;
const LERP     = 0.10;

/* ── Center helpers ──────────────────────────────────────────── */
function slideCenter(i)    { return i * getStep() + slideW() / 2; }
function screenPos(i)      { return slideCenter(i) - offset + window.innerWidth / 2; }
function distFromCenter(i) { return Math.abs(screenPos(i) - window.innerWidth / 2); }
function clamp(v, lo, hi)  { return Math.max(lo, Math.min(hi, v)); }

/* ── Visual update ───────────────────────────────────────────── */
let activeRealIdx = 0;
let activeSlide   = null;

function updateVisuals() {
  let bestDist = Infinity, bestI = 0;
  const step = getStep();

  slides.forEach((slide, i) => {
    const d = distFromCenter(i);
    const t = clamp(d / step, 0, 3.5);

    const scale  = clamp(1.25 * Math.pow(0.72, t), 0.52, 1.25).toFixed(3);
    const br     = clamp(1 - t * 0.22, 0.28, 1).toFixed(3);
    const sat    = clamp(1 - t * 0.18, 0.40, 1).toFixed(3);
    const op     = clamp(1 - t * 0.10, 0.60, 1).toFixed(3);
    const nameOp = clamp(1 - t * 4, 0, 1).toFixed(3);
    const glowOp = clamp(1 - t * 2, 0, 0.38).toFixed(3);

    slide.style.setProperty('--scale',   scale);
    slide.style.setProperty('--br',      br);
    slide.style.setProperty('--sat',     sat);
    slide.style.setProperty('--op',      op);
    slide.style.setProperty('--name-op', nameOp);
    slide.style.setProperty('--hint-op', nameOp);
    slide.style.setProperty('--glow-op', glowOp);

    if (d < bestDist) { bestDist = d; bestI = i; }
  });

  activeSlide = slides[bestI];

  const newReal = bestI % N;
  if (newReal !== activeRealIdx) {
    activeRealIdx = newReal;
    dots.forEach((d, i) => d.classList.toggle('active', i === newReal));
    document.getElementById('nav-num').textContent = String(newReal + 1).padStart(2, '0');
  }
}

/* ── RAF loop ────────────────────────────────────────────────── */
function tick() {
  if (snapTarget !== null) {
    offset += (snapTarget - offset) * LERP;
    if (Math.abs(snapTarget - offset) < 0.4) {
      offset     = snapTarget;
      snapTarget = null;
    }
  }
  carousel.style.transform = `translateX(${window.innerWidth / 2 - offset}px)`;
  updateVisuals();
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

/* ── Snap helpers ────────────────────────────────────────────── */
function snapToSlide(i) {
  const realI = i % N;
  const c1    = slideCenter(realI);
  const c2    = slideCenter(realI + N);
  snapTarget  = (Math.abs(c1 - offset) <= Math.abs(c2 - offset)) ? c1 : c2;
}
function snapToReal(realI) { snapToSlide(realI); }

/* ── Click & keyboard per slide ──────────────────────────────── */
slides.forEach((slide, i) => {
  slide.addEventListener('click', () => {
    const realIdx = parseInt(slide.dataset.realIndex);
    if (Math.abs(screenPos(i) - window.innerWidth / 2) < getStep() * 0.4) {
      openPanel(realIdx);
    } else {
      snapToSlide(i);
    }
  });
  slide.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') openPanel(parseInt(slide.dataset.realIndex));
  });
});

/* ── Stage events ────────────────────────────────────────────── */
document.querySelector('.stage').addEventListener('wheel',     e => e.preventDefault(), { passive: false });
document.querySelector('.stage').addEventListener('touchmove', e => e.preventDefault(), { passive: false });

/* ── Keyboard ────────────────────────────────────────────────── */
const kbL = document.querySelector('.kb-key-l');
const kbR = document.querySelector('.kb-key-r');

function flashKey(el) {
  if (!el) return;
  el.classList.add('pressed');
  setTimeout(() => el.classList.remove('pressed'), 180);
}

kbL.addEventListener('click', () => {
  const prev = (activeRealIdx - 1 + N) % N;
  snapToSlide(prev); flashKey(kbL);
  if (panel.classList.contains('open')) openPanel(prev);
});
kbR.addEventListener('click', () => {
  const next = (activeRealIdx + 1) % N;
  snapToSlide(next); flashKey(kbR);
  if (panel.classList.contains('open')) openPanel(next);
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    const next = (activeRealIdx + 1) % N;
    snapToSlide(next); flashKey(kbR);
    if (panel.classList.contains('open')) openPanel(next);
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    const prev = (activeRealIdx - 1 + N) % N;
    snapToSlide(prev); flashKey(kbL);
    if (panel.classList.contains('open')) openPanel(prev);
  }
  if (e.key === 'Enter')  openPanel(activeRealIdx);
  if (e.key === 'Escape') closePanel();
});

/* ── Countdown ───────────────────────────────────────────────── */
const WC_DATE = new Date('2026-06-11T21:00:00');
const pad = n => String(n).padStart(2, '0');
function tickCountdown() {
  const diff = WC_DATE - Date.now();
  if (diff <= 0) { document.getElementById('wc-countdown').innerHTML = '<span class="wc-label">⚽ It\'s time!</span>'; return; }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000)  /   60000);
  const s = Math.floor((diff %   60000)  /    1000);
  document.getElementById('wc-d').textContent = d;
  document.getElementById('wc-h').textContent = pad(h);
  document.getElementById('wc-m').textContent = pad(m);
  document.getElementById('wc-s').textContent = pad(s);
}
tickCountdown();
setInterval(tickCountdown, 1000);

/* ── Cursor glow ─────────────────────────────────────────────── */
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
}, { passive: true });

/* ── Touch swipe ─────────────────────────────────────────────── */
let touchX = 0;
carousel.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
carousel.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 30) snapToSlide((activeRealIdx + (dx < 0 ? 1 : -1) + N) % N);
}, { passive: true });

/* ── Helpers ─────────────────────────────────────────────────── */
function hexToRgb(hex) {
  return `${parseInt(hex.slice(1,3),16)}, ${parseInt(hex.slice(3,5),16)}, ${parseInt(hex.slice(5,7),16)}`;
}
function getInitials(name) {
  const p = name.split(' ');
  return p.length >= 2 ? p[0][0] + p[p.length - 1][0] : name[0];
}

/* ── Quote carousel ──────────────────────────────────────────── */
let quoteTimer = null;
let quoteIdx   = 0;

function stopQuoteCarousel() {
  clearInterval(quoteTimer);
  quoteTimer = null;
}

function setQuoteFact(facts, idx) {
  const textEl = document.querySelector('.pd-quote-text');
  const qdots  = document.querySelectorAll('.pd-qdot');
  if (!textEl) return;
  textEl.style.opacity   = '0';
  textEl.style.transform = 'translateY(6px)';
  setTimeout(() => {
    textEl.textContent     = facts[idx];
    textEl.style.opacity   = '1';
    textEl.style.transform = 'translateY(0)';
  }, 220);
  qdots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

function startQuoteCarousel(facts) {
  stopQuoteCarousel();
  quoteIdx = 0;
  if (facts.length <= 1) return;
  quoteTimer = setInterval(() => {
    quoteIdx = (quoteIdx + 1) % facts.length;
    setQuoteFact(facts, quoteIdx);
  }, 4500);
}

/* ── Detail Panel ────────────────────────────────────────────── */
const panel      = document.getElementById('panel');
const panelClose = document.getElementById('panel-close');
const panelGlow  = document.getElementById('panel-glow');
const panelImg   = document.getElementById('panel-img');
const panelRight = document.getElementById('panel-right');

function openPanel(realIdx) {
  const c = COUNTRIES[realIdx];

  panelImg.src = IMG + encodeURIComponent(c.file);
  panelImg.alt = `3D render — ${c.name}`;
  panelGlow.style.background = c.accent;
  panel.style.setProperty('--panel-accent-rgb', hexToRgb(c.accent));

  const titled = c.titles > 0;
  const tier   = titled                        ? '★ World Champion'
    : /Runner/.test(c.bestResult)              ? '▲ World Finalist'
    : /3rd|4th/.test(c.bestResult)             ? '◆ Semi-Finalist'
    : /Quarter/.test(c.bestResult)             ? '● Quarter-Finalist'
    : '○ Round of 16';

  [panelImg, panelRight].forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });

  panelRight.innerHTML = `
    <span class="pd-tag" style="color:${c.accent};border-color:${c.accent}44;">${tier}</span>
    <h2 class="pd-name">${c.name}</h2>
    <p class="pd-sub">${c.nickname} · ${c.confederation}</p>
    <hr class="pd-divider"/>

    <div class="pd-hero${titled ? ' pd-champion' : ''}">
      <p class="pd-hero-label">Finest Hour</p>
      <p class="pd-hero-value">${titled ? '★ ' : ''}${c.bestResult}</p>
      <p class="pd-hero-year">${c.bestYear}</p>
    </div>

    <div class="pd-meta-row">
      <div class="pd-meta">
        <p class="pd-meta-value">${c.appearances}</p>
        <p class="pd-meta-label">World Cups</p>
      </div>
      <div class="pd-meta${titled ? ' pd-champion' : ''}">
        <p class="pd-meta-value">${titled ? `<span style="color:#ffd060">★</span> ${c.titles}×` : '—'}</p>
        <p class="pd-meta-label">Titles</p>
      </div>
    </div>

    <p class="pd-section-label">WC 2026 Outlook</p>
    <div class="pd-outlook-bar">
      <div class="pd-outlook-item">
        <span class="pd-outlook-label">Group</span>
        <span class="pd-outlook-value" style="color:${c.accent};">${c.group}</span>
      </div>
      <div class="pd-outlook-sep"></div>
      <div class="pd-outlook-item">
        <span class="pd-outlook-label">FIFA Rank</span>
        <span class="pd-outlook-value">#${c.ranking}</span>
      </div>
      <div class="pd-outlook-sep"></div>
      <div class="pd-outlook-item">
        <span class="pd-outlook-label">Win Odds</span>
        <span class="pd-outlook-value">${c.odds}</span>
      </div>
    </div>
    <div class="pd-next-match">
      <div class="pd-match-header">
        <span class="pd-match-vs">vs ${c.nextMatch.vs}</span>
        <span class="pd-match-badge">Up next</span>
      </div>
      <p class="pd-match-meta">${c.nextMatch.date} · ${c.nextMatch.venue}</p>
    </div>

    <p class="pd-section-label">Legends of the Shirt</p>
    <div class="pd-legends">
      ${c.players.map(p => `
        <div class="pd-legend-row">
          <span class="pd-legend-av" style="background:${c.accent}25;border-color:${c.accent}55;color:${c.accent};">${getInitials(p.name)}</span>
          <div class="pd-legend-info">
            <span class="pd-legend-name">${p.name}</span>
            <span class="pd-legend-role">${p.role}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="pd-quote" style="border-left-color:${c.accent};">
      <p class="pd-quote-text">${c.facts[0]}</p>
      ${c.facts.length > 1 ? `
        <div class="pd-quote-dots">
          ${c.facts.map((_, i) => `<button class="pd-qdot${i === 0 ? ' active' : ''}" aria-label="Fact ${i + 1}"></button>`).join('')}
        </div>` : ''}
    </div>
  `;

  // Quote dot click handlers
  document.querySelectorAll('.pd-qdot').forEach((dot, i) => {
    dot.addEventListener('click', () => {
      quoteIdx = i;
      setQuoteFact(c.facts, i);
      stopQuoteCarousel();
      setTimeout(() => startQuoteCarousel(c.facts), 4500);
    });
  });

  const wasOpen = panel.classList.contains('open');
  panel.classList.add('open');
  document.querySelector('.stage').classList.add('blurred');
  if (!wasOpen) {
    dotsWrap.style.opacity = '0';
    setTimeout(() => { dotsWrap.classList.add('in-panel'); dotsWrap.style.opacity = ''; }, 150);
  }
  document.body.style.overflow = 'hidden';
  panelClose.focus();

  startQuoteCarousel(c.facts);
}

function closePanel() {
  panel.classList.remove('open');
  document.querySelector('.stage').classList.remove('blurred');
  dotsWrap.style.opacity = '0';
  setTimeout(() => { dotsWrap.classList.remove('in-panel'); dotsWrap.style.opacity = ''; }, 150);
  document.body.style.overflow = '';
  stopQuoteCarousel();
}

panelClose.addEventListener('click', closePanel);
panel.addEventListener('click', e => { if (e.target === panel) closePanel(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
});

/* ── Mobile arrows ───────────────────────────────────────────── */
document.getElementById('mob-arr-l').addEventListener('click', () => {
  const prev = (activeRealIdx - 1 + N) % N;
  snapToSlide(prev);
  if (panel.classList.contains('open')) openPanel(prev);
});
document.getElementById('mob-arr-r').addEventListener('click', () => {
  const next = (activeRealIdx + 1) % N;
  snapToSlide(next);
  if (panel.classList.contains('open')) openPanel(next);
});
