/* ── World Cup data ──────────────────────────────────────────── */
const COUNTRIES = [
  { file:'Belgium.png',      name:'Belgium',      nickname:'Les Diables Rouges', confederation:'UEFA',     appearances:14, bestResult:'3rd Place',    bestYear:'2018',          titles:0, players:['Eden Hazard','Kevin De Bruyne','Romelu Lukaku'],      fact:'Belgium spent over 1,900 days ranked #1 in the FIFA World Rankings — the longest in history.', accent:'#c8102e' },
  { file:'Costa Rica.png',   name:'Costa Rica',   nickname:'La Sele',            confederation:'CONCACAF', appearances:6,  bestResult:'Quarter-final', bestYear:'2014',          titles:0, players:['Keylor Navas','Bryan Ruiz','Joel Campbell'],          fact:'In 2014, Costa Rica topped the "Group of Death" above Uruguay, Italy, and England.',           accent:'#002b7f' },
  { file:'France-1.png',     name:'France',       nickname:'Les Bleus — 1998',   confederation:'UEFA',     appearances:16, bestResult:'Champion',     bestYear:'1998 · 2018',   titles:2, players:['Zinédine Zidane','Thierry Henry','Kylian Mbappé'],    fact:'France is the only nation to win the World Cup while hosting it (1998) and in the modern era (2018).', accent:'#0055a4' },
  { file:'France.png',       name:'France',       nickname:'Les Bleus — 2018',   confederation:'UEFA',     appearances:16, bestResult:'Champion',     bestYear:'1998 · 2018',   titles:2, players:['Zinédine Zidane','Thierry Henry','Kylian Mbappé'],    fact:'The 2018 squad averaged just 26 years old — one of the youngest World Cup-winning teams ever.',   accent:'#0055a4' },
  { file:'Germany.png',      name:'Germany',      nickname:'Die Mannschaft',      confederation:'UEFA',     appearances:20, bestResult:'Champion',     bestYear:'1954·74·90·2014',titles:4, players:['Franz Beckenbauer','Gerd Müller','Toni Kroos'],       fact:'Germany reached the semi-finals in 13 of their 20 World Cup appearances — unmatched consistency.', accent:'#ffd700' },
  { file:'Jamaica.png',      name:'Jamaica',      nickname:'Reggae Boyz',         confederation:'CONCACAF', appearances:1,  bestResult:'Group Stage',  bestYear:'1998',          titles:0, players:['Theodore Whitmore','Deon Burton','Robbie Earl'],      fact:'Jamaica became the first Caribbean nation to qualify for the World Cup since Cuba in 1938.',       accent:'#009b3a' },
  { file:'Japan.png',        name:'Japan',        nickname:'Samurai Blue',        confederation:'AFC',      appearances:7,  bestResult:'Round of 16', bestYear:'2002·10·22',    titles:0, players:['Hidetoshi Nakata','Shinji Kagawa','Takumi Minamino'], fact:'At the 2022 World Cup, Japan became the first team to beat both Germany and Spain in the same group.', accent:'#bc002d' },
  { file:'Mexico.png',       name:'Mexico',       nickname:'El Tri',              confederation:'CONCACAF', appearances:17, bestResult:'Quarter-final', bestYear:'1970 · 1986',  titles:0, players:['Hugo Sánchez','Cuauhtémoc Blanco','Javier Hernández'],fact:'Mexico reached the Round of 16 in 7 consecutive World Cups (1994–2018) — the "Curse of the 5th Game."', accent:'#006847' },
  { file:'Netherlands.png',  name:'Netherlands',  nickname:'Oranje',              confederation:'UEFA',     appearances:11, bestResult:'Runner-up',   bestYear:'1974·78·2010',  titles:0, players:['Johan Cruyff','Marco van Basten','Arjen Robben'],     fact:'The Netherlands have lost three World Cup finals without ever lifting the trophy.',               accent:'#ff6400' },
  { file:'Saudi Arabia.png', name:'Saudi Arabia', nickname:'Green Falcons',       confederation:'AFC',      appearances:6,  bestResult:'Round of 16', bestYear:'1994',          titles:0, players:['Sami Al-Jaber','Yasser Al-Qahtani','Salem Al-Dawsari'],fact:'In 2022, Saudi Arabia shocked eventual finalists Argentina 2–1 in one of the biggest WC upsets ever.', accent:'#006c35' },
  { file:'South Africa.png', name:'South Africa', nickname:'Bafana Bafana',       confederation:'CAF',      appearances:3,  bestResult:'Group Stage', bestYear:'1998·2002·2010',titles:0, players:['Benni McCarthy','Aaron Mokoena','Siphiwe Tshabalala'],fact:'South Africa became the first African nation to host the World Cup in 2010. Tshabalala\'s opening goal is iconic.', accent:'#007a4d' },
  { file:'South Korea.png',  name:'South Korea',  nickname:'Taeguk Warriors',     confederation:'AFC',      appearances:11, bestResult:'4th Place',   bestYear:'2002',          titles:0, players:['Park Ji-sung','Ahn Jung-hwan','Son Heung-min'],       fact:'In 2002, South Korea became the first Asian side to reach the semi-finals, beating Spain and Italy.', accent:'#cd2e3a' },
  { file:'Spain.png',        name:'Spain',        nickname:'La Roja',             confederation:'UEFA',     appearances:16, bestResult:'Champion',    bestYear:'2010',          titles:1, players:['Xavi Hernández','Andrés Iniesta','David Villa'],      fact:'Spain won Euro 2008, the 2010 World Cup, and Euro 2012 — the only team to win three consecutive major titles.', accent:'#c60b1e' },
  { file:'USA.png',          name:'USA',          nickname:'Stars & Stripes',     confederation:'CONCACAF', appearances:11, bestResult:'3rd / QF',    bestYear:'1930 · 2002',  titles:0, players:['Landon Donovan','Clint Dempsey','Christian Pulisic'],  fact:'Tim Howard made 16 saves vs Belgium in 2014 — the most by any goalkeeper in a single World Cup match.', accent:'#3c3b6e' },
  { file:'Uruguay.png',      name:'Uruguay',      nickname:'La Celeste',          confederation:'CONMEBOL', appearances:14, bestResult:'Champion',    bestYear:'1930 · 1950',  titles:2, players:['Diego Forlán','Luis Suárez','Edinson Cavani'],        fact:'Uruguay\'s 1950 win in the Maracanã in front of 200,000 fans is remembered as the "Maracanazo" — one of sport\'s greatest upsets.', accent:'#5aaad5' },
];

const N       = COUNTRIES.length; // 15
const IMG     = 'images/projects/renders/';
const DOUBLED = [...COUNTRIES, ...COUNTRIES]; // 30 for seamless loop

/* ── Layout metrics ──────────────────────────────────────────── */
const GAP = 110; // px between slides

function slideW() {
  const vw = window.innerWidth;
  if (vw >= 1400) return 260;
  if (vw >= 1000) return 230;
  if (vw >= 700)  return 195;
  return 160;
}

function getStep()  { return slideW() + GAP; }
function loopW()    { return N * getStep(); }

/* ── Build DOM ───────────────────────────────────────────────── */
const carousel = document.getElementById('carousel');
const dotsWrap = document.getElementById('dots');

DOUBLED.forEach((c, i) => {
  const realIdx = i % N;
  const slide   = document.createElement('div');
  slide.className    = 'slide';
  slide.tabIndex     = 0;
  slide.dataset.index     = i;
  slide.dataset.realIndex = realIdx;
  slide.style.width  = slideW() + 'px';
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
  name.className = 'slide-name';
  name.textContent = c.name;

  const hint = document.createElement('p');
  hint.className = 'slide-hint';
  hint.textContent = 'Click to explore';

  slide.append(glow, img, name, hint);
  carousel.appendChild(slide);
});

const slides = [...document.querySelectorAll('.slide')];

// Dots (only N, not 2N)
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
// `offset` = track-coordinate (px) that appears at screen center
// Slide i center = i * STEP + slideW/2
// At offset=slideW/2 → slide 0 is centered
let offset    = slideW() / 2;   // start: slide 0 centered
let snapTarget = null;
const LERP    = 0.10;

/* ── Center helpers ──────────────────────────────────────────── */
function slideCenter(i) { return i * getStep() + slideW() / 2; }
function screenPos(i)   { return slideCenter(i) - offset + window.innerWidth / 2; }
function distFromCenter(i) { return Math.abs(screenPos(i) - window.innerWidth / 2); }

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

/* ── Visual update ───────────────────────────────────────────── */
let activeRealIdx = 0;
let activeSlide = null;

function updateVisuals() {
  let bestDist = Infinity, bestI = 0;
  const step = getStep();

  slides.forEach((slide, i) => {
    const d = distFromCenter(i);               // px distance from screen center
    const t = clamp(d / step, 0, 3.5);         // normalised (0=active, 3.5=far)

    // active = 1.25×, drops exponentially: adj1≈0.90, adj2≈0.65, adj3≈0.47
    const scale   = clamp(1.25 * Math.pow(0.72, t), 0.52, 1.25).toFixed(3);
    const br      = clamp(1 - t * 0.22, 0.28, 1).toFixed(3);
    const sat     = clamp(1 - t * 0.18, 0.40, 1).toFixed(3);
    const op      = clamp(1 - t * 0.10, 0.60, 1).toFixed(3);
    const nameOp  = clamp(1 - t * 4, 0, 1).toFixed(3);  // visible only when very close
    const glowOp  = clamp(1 - t * 2, 0, 0.38).toFixed(3);

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

  // Update active index + dots + counter
  const newReal = bestI % N;
  if (newReal !== activeRealIdx) {
    activeRealIdx = newReal;
    dots.forEach((d, i) => d.classList.toggle('active', i === newReal));
    document.getElementById('nav-num').textContent = String(newReal + 1).padStart(2, '0');
  }
}

/* ── RAF loop (handles only lerp transitions) ────────────────── */
function tick() {
  if (snapTarget !== null) {
    offset += (snapTarget - offset) * LERP;
    if (Math.abs(snapTarget - offset) < 0.4) {
      offset = snapTarget;
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
  const c1 = slideCenter(realI);
  const c2 = slideCenter(realI + N);
  snapTarget = (Math.abs(c1 - offset) <= Math.abs(c2 - offset)) ? c1 : c2;
}

function snapToReal(realI) {
  snapToSlide(realI);
}

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
    if (e.key === 'Enter' || e.key === ' ') {
      openPanel(parseInt(slide.dataset.realIndex));
    }
  });
});

/* ── Block wheel / touchmove scroll on stage ────────────────── */
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
  if (e.key === 'Enter') openPanel(activeRealIdx);
  if (e.key === 'Escape') closePanel();
});

/* ── Global cursor glow ──────────────────────────────────────── */
/* ── World Cup countdown ─────────────────────────────────────── */
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


const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
}, { passive: true });

/* ── Touch swipe ─────────────────────────────────────────────── */
let touchX = 0;
carousel.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
carousel.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 30) snapToSlide((activeRealIdx + (dx < 0 ? 1 : -1) + N) % N);
}, { passive: true });

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


  const titled = c.titles > 0;
  const tier = titled            ? '★ World Champion'
    : /Runner/.test(c.bestResult) ? '▲ World Finalist'
    : /3rd|4th/.test(c.bestResult)? '◆ Semi-Finalist'
    : /Quarter/.test(c.bestResult)? '● Quarter-Finalist'
    : '○ Round of 16';

  // Replay entry animations on content swap
  [panelImg, panelRight].forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });

  panelRight.innerHTML = `
    <span class="pd-tag" style="color:${c.accent};border-color:${c.accent}44;">${tier}</span>
    <h2 class="pd-name">${c.name}</h2>
    <p class="pd-nickname">${c.nickname}</p>
    <hr class="pd-divider"/>
    <div class="pd-stat-grid">
      <div class="pd-stat ${titled ? 'pd-champion':''}">
        <p class="pd-stat-label">Best Result</p>
        <p class="pd-stat-value">${titled ? '★ ' : ''}${c.bestResult}</p>
      </div>
      <div class="pd-stat">
        <p class="pd-stat-label">Edition</p>
        <p class="pd-stat-value">${c.bestYear}</p>
      </div>
      <div class="pd-stat">
        <p class="pd-stat-label">Appearances</p>
        <p class="pd-stat-value">${c.appearances}</p>
      </div>
      <div class="pd-stat ${titled ? 'pd-champion':''}">
        <p class="pd-stat-label">World Titles</p>
        <p class="pd-stat-value">${titled ? `<span style="color:#ffd060">★</span> ${c.titles}×` : '—'}</p>
      </div>
    </div>
    <p class="pd-section-label">Iconic Players</p>
    <div class="pd-players">${c.players.map(p => `<span class="pd-player">${p}</span>`).join('')}</div>
    <p class="pd-section-label">Did you know?</p>
    <p class="pd-fact" style="border-left-color:${c.accent};">${c.fact}</p>
  `;

  panel.classList.add('open');
  document.querySelector('.stage').classList.add('blurred');
  document.body.style.overflow = 'hidden';
  panelClose.focus();
}

function closePanel() {
  panel.classList.remove('open');
  document.querySelector('.stage').classList.remove('blurred');
  document.body.style.overflow = '';
}

panelClose.addEventListener('click', closePanel);
panel.addEventListener('click', e => { if (e.target === panel) closePanel(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('open')) closePanel(); });
