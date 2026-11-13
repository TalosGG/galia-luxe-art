/* Galia Adam — Luxe Art */
(function () {
  'use strict';

  var WA = '972547301007';
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var wa = function (text) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text); };

  /* ------------------------------------------------------------------
     Collection data (from the studio's catalogue)
     ------------------------------------------------------------------ */
  var ART = [
    {
      id: 'the-royal-crane', name: 'The Royal Crane', he: 'העגור המלכותי', price: 2400,
      layout: 'wide', tag: 'יצירה נבחרת', size: 'קוטר 60 ס״מ',
      cover: 'crane-1', images: ['crane-1', 'crane-2', 'crane-3'],
      desc: 'יצירה עוצרת נשימה המשלבת טקסטורה עשירה וסימבוליקה של חופש ואצילות. העגור, שנוצר בעבודת יד קפדנית, נראה כמעט חי בזכות משחקי האור והחומרים היוקרתיים.',
      specs: [
        ['תשתית', 'עבודת יד על MDF איכותי.'],
        ['גודל', 'קוטר 60 ס״מ.'],
        ['חומרים', 'אקריליק, משחת טקסטורה, שבבי מראה (Mirror Crushed Stones), אבני קוורץ (Crystal Quartz) וציפוי אפוקסי רזין יוקרתי.'],
        ['תלייה', 'מוכנה לתלייה מיידית, עם אביזרי תלייה מותקנים המבטיחים הצמדה מושלמת ובטוחה לקיר.']
      ]
    },
    {
      id: 'fragments-of-us', name: 'Fragments of Us', he: 'רסיסים מאיתנו', price: 6000,
      layout: 'sq', size: 'קוטר 80 ס״מ',
      cover: 'fragments-1', images: ['fragments-1', 'fragments-2', 'fragments-3'],
      desc: 'יצירה עוצמתית המשלבת קונטרסט מרתק בין אור לצל, בין דמויות לזמן. עבודת יד קפדנית המשלבת אלמנטים של מראה ושקיפות, היוצרים תחושה של עומק וסיפור שמתגלה בכל מבט מחדש.',
      specs: [
        ['תשתית', 'עבודת יד על MDF איכותי.'],
        ['גודל', 'קוטר 80 ס״מ.'],
        ['חומרים', 'אקריליק, משחת טקסטורה, שברי מראה, עלי זהב ואבני קריסטל המעניקים ניצנוץ יוקרתי.'],
        ['תלייה', 'היצירה מוכנה לתלייה מיידית.']
      ]
    },
    {
      id: 'the-seahorse', name: 'The Seahorse', he: 'סוסון הים', price: 1600,
      size: '40×60 ס״מ',
      cover: 'seahorse-1', images: ['seahorse-1', 'seahorse-2', 'seahorse-3'],
      desc: 'יצירה מרהיבה המשלבת את עומק הים עם זוהר מעורר השראה. עבודת מוזאיקה עדינה ממראת ברונזה בשילוב עלי זהב וקריסטלים יוצרת משחקי אור מהפנטים, המעניקים לכל חלל תחושה של רוגע ויוקרה.',
      specs: [
        ['תשתית', 'עבודת יד על MDF איכותי — בסיס חזק המבטיח את עמידות היצירה לשנים רבות.'],
        ['גודל', '40×60 ס״מ.'],
        ['חומרים', 'אקריליק, משחת טקסטורה, מוזאיקת מראת ברונזה, עלי זהב (פוטאל), אבני קוורץ (Crystal Quartz) וציפוי אפוקסי רזין חלקי המעניק ברק ממוקד ועומק זכוכיתי.'],
        ['תלייה', 'מוכנה לתלייה מיידית, עם אביזרי תלייה מותקנים המבטיחים הצמדה מושלמת ובטוחה לקיר.']
      ]
    },
    {
      id: 'quiet-strength', name: 'Quiet Strength', he: 'עוצמה שקטה', price: 3800,
      size: '80 ס״מ',
      cover: 'elephant-1', images: ['elephant-1'],
      desc: 'עבודה עוצמתית ומלאת נוכחות בהשראת כוח, חוכמה ואצילות הטבע. דמות הפיל משתלבת בתוך שכבות של טקסטורה עמוקה, בגוני שחור, אפור וזהב מטאלי היוצרים מראה יוקרתי ודרמטי.',
      specs: [
        ['תשתית', 'יצירה מקורית בטכניקה מעורבת על MDF.'],
        ['גודל', '80 ס״מ.'],
        ['גוונים', 'שחור, אפור וזהב מטאלי.']
      ]
    },
    {
      id: 'the-sparkling-cat', name: 'The Sparkling Cat', he: 'החתול המנצנץ', price: 1500,
      size: 'פסל · 12,000 קריסטלים', contain: true,
      cover: 'cat-1', images: ['cat-1'],
      desc: 'יצירת אמנות ייחודית במינה המעוטרת ב־12,000 קריסטלים מנצנצים, ששובצו בעבודת יד קפדנית וסבלנית. כל קריסטל מונח במקומו כדי ליצור משחק אור וצל מהפנט. פריט עיצובי יוקרתי שמעניק סטייל ואופי לכל פינה בבית.',
      specs: [
        ['סגנון', 'פסל דקורטיבי בעבודת יד.'],
        ['טכניקה', 'שיבוץ ידני של 12,000 קריסטלים.'],
        ['משמעות', 'שילוב בין יופי, אסתטיקה ויוקרה.']
      ]
    }
  ];
  var src = function (n) { return 'assets/art/' + n + '.webp'; };
  var price = function (n) { return '₪' + n.toLocaleString('en-US'); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };

  /* ------------------------------------------------------------------
     Render collection
     ------------------------------------------------------------------ */
  var grid = $('#grid');
  if (grid) {
    grid.innerHTML = ART.map(function (a, i) {
      return '<a class="card' + (a.layout ? ' card--' + a.layout : '') + '" href="#art-' + a.id + '" data-art="' + a.id + '" data-reveal style="--d:' + (i % 3) * 0.1 + 's" aria-label="' + a.name + ' — ' + a.he + ', ' + price(a.price) + '. לצפייה ביצירה">' +
        '<span class="card__fig">' +
          (a.tag ? '<span class="card__tag">' + a.tag + '</span>' : '') +
          '<img' + (a.contain ? ' class="is-contain"' : '') + ' src="' + src(a.cover) + '" alt="" loading="lazy">' +
          '<span class="card__view">לצפייה ביצירה <svg><use href="#ic-arrow"/></svg></span>' +
        '</span>' +
        '<span class="card__body">' +
          '<span class="card__no" dir="ltr">N° ' + pad(i + 1) + '</span>' +
          '<span class="card__name" dir="ltr">' + a.name + '</span>' +
          '<span class="card__price" dir="ltr">' + price(a.price) + '</span>' +
          '<span class="card__he">' + a.he + ' · ' + a.size + '</span>' +
        '</span></a>';
    }).join('');

    grid.addEventListener('pointermove', function (e) {
      var fig = e.target.closest && e.target.closest('.card__fig');
      if (!fig) return;
      var r = fig.getBoundingClientRect();
      fig.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      fig.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.card');
      if (!card) return;
      e.preventDefault();
      openSheet(card.getAttribute('data-art'), card);
    });
  }

  /* ------------------------------------------------------------------
     Product sheet
     ------------------------------------------------------------------ */
  var sheet = $('#sheet'), panel = $('.sheet__panel', sheet);
  var sImg = $('#sheetImg'), sThumbs = $('#sheetThumbs');
  var current = null, imgIndex = 0, lastFocus = null, closeTimer = null;

  function showImage(i) {
    imgIndex = (i + current.images.length) % current.images.length;
    sImg.classList.add('is-swap');
    setTimeout(function () {
      sImg.src = src(current.images[imgIndex]);
      sImg.alt = current.name + ' — ' + current.he + ' (תמונה ' + (imgIndex + 1) + ' מתוך ' + current.images.length + ')';
      sImg.onload = function () { sImg.classList.remove('is-swap'); };
    }, reduce ? 0 : 180);
    $$('button', sThumbs).forEach(function (b, n) { b.setAttribute('aria-current', n === imgIndex ? 'true' : 'false'); });
  }

  function openSheet(id, from) {
    var idx = -1;
    ART.forEach(function (a, i) { if (a.id === id) idx = i; });
    if (idx < 0) return;
    current = ART[idx];
    lastFocus = from || document.activeElement;
    clearTimeout(closeTimer);

    $('#sheetNo').textContent = 'N° ' + pad(idx + 1) + ' / ' + pad(ART.length);
    $('#sheetNo').setAttribute('dir', 'ltr');
    $('#sheetTitle').textContent = current.name;
    $('#sheetHe').textContent = current.he;
    $('#sheetDesc').textContent = current.desc;
    $('#sheetPrice').textContent = price(current.price);
    $('#sheetPrice').setAttribute('dir', 'ltr');
    $('#sheetSpecs').innerHTML = current.specs.map(function (s) {
      return '<div><dt>' + s[0] + '</dt><dd>' + s[1] + '</dd></div>';
    }).join('');
    $('#sheetWa').href = wa('שלום גליה, אשמח לפרטים על היצירה ' + current.name + ' (' + price(current.price) + ').');
    sThumbs.innerHTML = current.images.length > 1 ? current.images.map(function (n, i) {
      return '<button type="button" data-i="' + i + '" aria-label="תמונה ' + (i + 1) + '"><img src="' + src(n) + '" alt=""></button>';
    }).join('') : '';
    sImg.src = src(current.images[0]);
    showImage(0);

    sheet.hidden = false;
    root.classList.add('has-sheet');
    panel.scrollTop = 0;
    requestAnimationFrame(function () { requestAnimationFrame(function () { sheet.classList.add('is-open'); }); });
    panel.focus({ preventScroll: true });
    if (history.replaceState) history.replaceState(null, '', '#art-' + current.id);
  }

  function closeSheet() {
    if (sheet.hidden) return;
    sheet.classList.remove('is-open');
    root.classList.remove('has-sheet');
    closeTimer = setTimeout(function () { sheet.hidden = true; }, reduce ? 0 : 600);
    if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  if (sheet) {
    sheet.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) return closeSheet();
      var t = e.target.closest('.sheet__thumbs button');
      if (t) showImage(+t.getAttribute('data-i'));
    });
    document.addEventListener('keydown', function (e) {
      if (sheet.hidden) return;
      if (e.key === 'Escape') closeSheet();
      else if (e.key === 'ArrowLeft') showImage(imgIndex + 1);
      else if (e.key === 'ArrowRight') showImage(imgIndex - 1);
      else if (e.key === 'Tab') {
        var f = $$('button, a[href]', panel).filter(function (el) { return el.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ------------------------------------------------------------------
     WhatsApp links
     ------------------------------------------------------------------ */
  $$('[data-wa]').forEach(function (a) {
    a.href = wa(a.getAttribute('data-wa'));
    a.target = '_blank';
    a.rel = 'noopener';
  });

  /* ------------------------------------------------------------------
     Header, progress, menu
     ------------------------------------------------------------------ */
  var progress = $('#progress'), ticking = false, parallax = $$('[data-parallax]');
  function onScroll() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset;
    root.classList.toggle('is-scrolled', y > 40);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    if (!reduce) {
      var vh = window.innerHeight;
      parallax.forEach(function (el) {
        var r = el.parentNode.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        var off = (r.top + r.height / 2 - vh / 2) * parseFloat(el.getAttribute('data-parallax'));
        el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
      });
    }
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  var burger = $('#burger'), menu = $('#menu');
  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
  }
  if (burger) {
    burger.addEventListener('click', function () { setMenu(!root.classList.contains('menu-open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ------------------------------------------------------------------
     Observers: reveal, active nav link, lazy video playback
     ------------------------------------------------------------------ */
  var hasIO = 'IntersectionObserver' in window;
  var reveals = $$('[data-reveal]');
  if (hasIO && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    // stagger siblings in lists
    $$('.materials, .why__grid, .steps, .ws, .channels').forEach(function (list) {
      $$(':scope > [data-reveal]', list).forEach(function (el, i) { el.style.setProperty('--d', (i % 4) * 0.09 + 's'); });
    });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  if (hasIO) {
    var links = {};
    $$('.menu a[href^="#"]:not(.btn)').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = links[en.target.id];
        if (a && en.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('is-active'); });
          a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });

    var vids = $$('video[data-autoplay]');
    if (!reduce) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var v = en.target;
          if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
          else v.pause();
        });
      }, { rootMargin: '200px 0px', threshold: 0.01 });
      vids.forEach(function (v) { v.muted = true; vio.observe(v); });
    }
  }

  /* ------------------------------------------------------------------
     Hero gold dust
     ------------------------------------------------------------------ */
  var canvas = $('#dust');
  if (canvas && !reduce && canvas.getContext) {
    var ctx = canvas.getContext('2d'), W = 0, H = 0, dpr = 1, motes = [], running = false, raf = 0;
    var size = function () {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(90, W / 16));
      motes = [];
      for (var i = 0; i < n; i++) motes.push(make(true));
    };
    var make = function (anywhere) {
      return {
        x: Math.random() * W, y: anywhere ? Math.random() * H : H + 10,
        r: Math.random() * 1.7 + 0.4, vy: -(Math.random() * 0.22 + 0.05), vx: (Math.random() - 0.5) * 0.14,
        ph: Math.random() * 6.28, sp: Math.random() * 0.02 + 0.006, a: Math.random() * 0.55 + 0.2
      };
    };
    var tick = function () {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < motes.length; i++) {
        var m = motes[i];
        m.x += m.vx + Math.sin(m.ph) * 0.12; m.y += m.vy; m.ph += m.sp;
        if (m.y < -12 || m.x < -12 || m.x > W + 12) motes[i] = m = make(false);
        var tw = 0.55 + 0.45 * Math.sin(m.ph * 2.3);
        var g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 4.5);
        g.addColorStop(0, 'rgba(255,236,186,' + (m.a * tw).toFixed(3) + ')');
        g.addColorStop(0.35, 'rgba(214,174,98,' + (m.a * tw * 0.45).toFixed(3) + ')');
        g.addColorStop(1, 'rgba(198,161,91,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r * 4.5, 0, 6.2832); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    size();
    window.addEventListener('resize', size);
    if (hasIO) {
      new IntersectionObserver(function (en) {
        running = en[0].isIntersecting;
        cancelAnimationFrame(raf);
        if (running) tick();
      }).observe(canvas);
    } else { running = true; tick(); }
  }

  /* ------------------------------------------------------------------
     Contact form → WhatsApp
     ------------------------------------------------------------------ */
  var form = $('#contactForm'), hint = $('#formHint');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements, bad = null;
      [f.name, f.message].forEach(function (el) {
        var ok = el.value.trim().length > 1;
        el.classList.toggle('is-bad', !ok);
        el.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok && !bad) bad = el;
      });
      if (bad) {
        hint.textContent = 'נא למלא שם והודעה כדי שאוכל לחזור אליכם.';
        hint.classList.add('is-err');
        bad.focus();
        return;
      }
      var lines = ['שלום גליה,', 'שמי ' + f.name.value.trim() + '.', 'נושא: ' + f.topic.value, '', f.message.value.trim()];
      if (f.phone.value.trim()) lines.push('', 'טלפון לחזרה: ' + f.phone.value.trim());
      window.open(wa(lines.join('\n')), '_blank', 'noopener');
      hint.classList.remove('is-err');
      hint.textContent = 'ההודעה נפתחה בוואטסאפ — נותר רק ללחוץ על ״שליחה״. תודה!';
    });
  }

  /* ------------------------------------------------------------------
     Ready
     ------------------------------------------------------------------ */
  var ready = false;
  function go() {
    if (ready) return; ready = true;
    document.body.classList.add('is-ready');
    var m = location.hash.match(/^#art-(.+)$/);
    if (m) openSheet(m[1]);
  }
  if (document.readyState === 'complete') setTimeout(go, 350);
  else window.addEventListener('load', function () { setTimeout(go, 350); });
  setTimeout(go, 2600);
})();
