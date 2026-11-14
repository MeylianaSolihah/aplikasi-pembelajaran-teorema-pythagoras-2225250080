
import './style.css'

// ==========================================
// PYTHAMATH - BELAJAR PYTHAGORAS BERSAMA
// ==========================================

const app = document.querySelector('#app')

const menu = [
  ['home', '⌂', 'Beranda'],
  ['materi', '📚', 'Materi'],
  ['simulasi', '📐', 'Simulasi'],
  ['latihan', '✏️', 'Latihan'],
  ['quiz', '🏆', 'Quiz'],
  ['chat', '💬', 'Tanya Kak Mey'],
  ['pengaturan', '⚙️', 'Pengaturan']
]

const questions = [
  { q: 'Sebuah segitiga siku-siku memiliki sisi 5 cm dan 12 cm. Berapa sisi miringnya?', a: ['13 cm', '14 cm', '15 cm', '17 cm'], c: 0, e: '√(5² + 12²) = √169 = 13 cm.' },
  { q: 'Sisi miring segitiga 17 cm dan salah satu sisi 8 cm. Berapa sisi lainnya?', a: ['9 cm', '12 cm', '15 cm', '16 cm'], c: 2, e: '√(17² − 8²) = √225 = 15 cm.' },
  { q: 'Dua sisi siku-siku adalah 7 cm dan 24 cm. Sisi miringnya adalah ...', a: ['25 cm', '26 cm', '27 cm', '28 cm'], c: 0, e: '√(49 + 576) = 25 cm.' },
  { q: 'Sisi siku-siku 40 cm dan 9 cm. Sisi miringnya adalah ...', a: ['39 cm', '40 cm', '41 cm', '42 cm'], c: 2, e: '√(1600 + 81) = 41 cm.' },
  { q: 'Sisi miring 29 cm dan salah satu sisi 20 cm. Sisi lainnya adalah ...', a: ['19 cm', '20 cm', '21 cm', '22 cm'], c: 2, e: '√(841 − 400) = 21 cm.' },
  { q: 'Dua sisi siku-siku 12 cm dan 35 cm. Sisi miringnya adalah ...', a: ['35 cm', '36 cm', '37 cm', '38 cm'], c: 2, e: '√(144 + 1225) = 37 cm.' },
  { q: 'Dua sisi siku-siku 16 cm dan 30 cm. Sisi miringnya adalah ...', a: ['32 cm', '34 cm', '36 cm', '38 cm'], c: 1, e: '√(256 + 900) = 34 cm.' },
  { q: 'Sisi miring 53 cm dan salah satu sisi 28 cm. Sisi lainnya adalah ...', a: ['35 cm', '40 cm', '45 cm', '48 cm'], c: 2, e: '√(2809 − 784) = 45 cm.' },
  { q: 'Dua sisi siku-siku 33 cm dan 56 cm. Sisi miringnya adalah ...', a: ['63 cm', '64 cm', '65 cm', '66 cm'], c: 2, e: '√(1089 + 3136) = 65 cm.' },
  { q: 'Sisi miring 61 cm dan salah satu sisi 11 cm. Sisi lainnya adalah ...', a: ['58 cm', '59 cm', '60 cm', '61 cm'], c: 2, e: '√(3721 − 121) = 60 cm.' },
  { q: 'Sisi miring 65 cm dan salah satu sisi 16 cm. Sisi lainnya adalah ...', a: ['60 cm', '61 cm', '62 cm', '63 cm'], c: 3, e: '√(4225 − 256) = 63 cm.' },
  { q: 'Sisi miring 50 cm dan salah satu sisi 14 cm. Sisi lainnya adalah ...', a: ['46 cm', '47 cm', '48 cm', '49 cm'], c: 2, e: '√(2500 − 196) = 48 cm.' },
  { q: 'Sisi miring 85 cm dan salah satu sisi 13 cm. Sisi lainnya adalah ...', a: ['82 cm', '83 cm', '84 cm', '85 cm'], c: 2, e: '√(7225 − 169) = 84 cm.' },
  { q: 'Dua sisi siku-siku 48 cm dan 55 cm. Sisi miringnya adalah ...', a: ['70 cm', '71 cm', '72 cm', '73 cm'], c: 3, e: '√(2304 + 3025) = 73 cm.' },
  { q: 'Sisi miring 89 cm dan salah satu sisi 39 cm. Sisi lainnya adalah ...', a: ['78 cm', '79 cm', '80 cm', '81 cm'], c: 2, e: '√(7921 − 1521) = 80 cm.' },
  { q: 'Sisi miring 100 cm dan salah satu sisi 28 cm. Sisi lainnya adalah ...', a: ['94 cm', '95 cm', '96 cm', '97 cm'], c: 2, e: '√(10000 − 784) = 96 cm.' },
  { q: 'Sisi miring 101 cm dan salah satu sisi 20 cm. Sisi lainnya adalah ...', a: ['97 cm', '98 cm', '99 cm', '100 cm'], c: 2, e: '√(10201 − 400) = 99 cm.' },
  { q: 'Sisi miring 125 cm dan salah satu sisi 35 cm. Sisi lainnya adalah ...', a: ['118 cm', '119 cm', '120 cm', '121 cm'], c: 2, e: '√(15625 − 1225) = 120 cm.' },
  { q: 'Sisi miring 145 cm dan salah satu sisi 87 cm. Sisi lainnya adalah ...', a: ['114 cm', '115 cm', '116 cm', '117 cm'], c: 2, e: '√(21025 − 7569) = 116 cm.' },
  { q: 'Sisi miring 109 cm dan salah satu sisi 60 cm. Sisi lainnya adalah ...', a: ['89 cm', '90 cm', '91 cm', '92 cm'], c: 2, e: '√(11881 − 3600) = 91 cm.' }
]

const quizQuestions = [
  { q: 'Apa bunyi Teorema Pythagoras?', a: ['a + b = c', 'a² + b² = c²', 'a × b = c', 'a² − b² = c²'], c: 1 },
  { q: 'Sisi terpanjang segitiga siku-siku disebut ...', a: ['Alas', 'Tinggi', 'Sisi miring', 'Sisi tegak'], c: 2 },
  { q: 'Segitiga dengan sisi 3, 4, dan 5 termasuk ...', a: ['Segitiga siku-siku', 'Segitiga sama sisi', 'Segitiga tumpul', 'Segitiga lancip'], c: 0 },
  { q: 'Jika a = 6 dan b = 8, maka c adalah ...', a: ['9', '10', '11', '12'], c: 1 },
  { q: 'Rumus mencari sisi siku-siku adalah ...', a: ['√(a² + c²)', 'a² + b²', '√(c² − a²)', 'c² + a²'], c: 2 }
]

const state = {
  name: localStorage.getItem('pythaName') || '',
  language: localStorage.getItem('pythaLanguage') || 'id',
  page: 'home',
  dark: localStorage.getItem('pythaDark') === 'true',
  music: false,
  practiceIndex: 0,
  practiceScore: 0,
  practiceAnswered: false,
  practiceDone: false,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizDone: false,
  chat: []
}

let audioContext = null
let musicTimer = null
let noteIndex = 0

// ==========================================
// FUNGSI DASAR
// ==========================================

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[char])
}

function cat(size = 100, extra = '') {
  return `
    <span class="cat-mascot teacher-cat ${extra}" style="--cat-size:${size}px">
      <svg viewBox="0 0 180 170" width="${size}" height="${size}">
        <path d="M130 119 Q168 125 155 91 Q150 76 139 87"
          fill="none" stroke="#888995" stroke-width="12" stroke-linecap="round"/>
        <path d="M37 62 L30 14 Q29 5 40 13 L72 39 M108 39 L140 13 Q151 5 150 17 L142 65"
          fill="#aaaab5" stroke="#666675" stroke-width="4" stroke-linejoin="round"/>
        <path d="M39 33 L37 19 L58 40 M119 40 L143 19 L140 38" fill="#f5b7c8"/>
        <ellipse cx="90" cy="88" rx="60" ry="57" fill="#b9bac5" stroke="#666675" stroke-width="4"/>
        <ellipse cx="49" cy="104" rx="10" ry="6" fill="#f3a7bd"/>
        <ellipse cx="131" cy="104" rx="10" ry="6" fill="#f3a7bd"/>
        <ellipse cx="68" cy="86" rx="7" ry="10" fill="#373347"/>
        <ellipse cx="112" cy="86" rx="7" ry="10" fill="#373347"/>
        <circle cx="70" cy="82" r="3" fill="white"/>
        <circle cx="114" cy="82" r="3" fill="white"/>
        <g fill="none" stroke="#55428e" stroke-width="3">
          <circle cx="68" cy="86" r="16"/>
          <circle cx="112" cy="86" r="16"/>
          <path d="M84 86 Q90 81 96 86"/>
        </g>
        <path d="M85 103 Q90 97 95 103 Q91 109 90 109 Q89 109 85 103" fill="#d97896"/>
        <path d="M90 109 Q82 119 75 112 M90 109 Q98 119 105 112"
          fill="none" stroke="#666675" stroke-width="3" stroke-linecap="round"/>
        <path d="M43 108 L20 103 M45 116 L23 119 M137 108 L160 103 M135 116 L157 119"
          stroke="#777789" stroke-width="2" stroke-linecap="round"/>
        <path d="M43 43 L90 15 L137 43 L90 57 Z" fill="#7967d8" stroke="#55428e" stroke-width="3"/>
        <path d="M48 44 L48 54 Q90 72 132 54 L132 44" fill="#a18ff0" stroke="#55428e" stroke-width="3"/>
        <path d="M137 43 L151 50 L137 57" fill="#ffe49a" stroke="#55428e" stroke-width="2"/>
        <path d="M49 139 Q90 119 131 139 L142 166 L38 166 Z" fill="#7967d8" stroke="#55428e" stroke-width="3"/>
        <path d="M80 132 L90 143 L100 132 L96 160 L90 166 L84 160 Z" fill="#ffcf80" stroke="#55428e" stroke-width="2"/>
        <path d="M148 135 L163 72" stroke="#a97842" stroke-width="5" stroke-linecap="round"/>
      </svg>
    </span>`
}

function triangleSVG(a = 3, b = 4) {
  const scale = Math.min(150 / Math.max(a, b), 1.8)
  const x = 35
  const y = 185
  const w = a * scale * 10
  const h = b * scale * 10

  return `
    <svg class="triangle-svg" viewBox="0 0 300 230">
      <path d="M${x} ${y} L${x + w} ${y} L${x} ${y - h} Z"
        fill="#dcd3ff" fill-opacity=".55" stroke="#7967d8" stroke-width="4"/>
      <path d="M${x + 13} ${y} L${x + 13} ${y - 13} L${x} ${y - 13}"
        fill="none" stroke="#7967d8" stroke-width="2"/>
      <text x="${x + w / 2}" y="${y + 22}" class="triangle-label">a = ${a}</text>
      <text x="${x - 25}" y="${y - h / 2}" class="triangle-label">b = ${b}</text>
      <text x="${x + w / 2 + 12}" y="${y - h / 2 - 10}" class="triangle-label">c</text>
    </svg>`
}

// ==========================================
// HALAMAN INTRO
// ==========================================

function introPage() {
  const en = state.language === 'en'

  app.innerHTML = `
    <section class="intro-screen">
      <div class="intro-card">
        <div class="intro-controls">
          <select id="intro-language">
            <option value="id" ${!en ? 'selected' : ''}>🇮🇩 Indonesia</option>
            <option value="en" ${en ? 'selected' : ''}>🇬🇧 English</option>
          </select>
          <button class="secondary-btn" id="intro-music">
            ${state.music ? '🔊 Music ON' : '🎵 Music OFF'}
          </button>
        </div>

        <div class="intro-logo">${cat(95)}</div>
        <span class="eyebrow">WELCOME TO PYTHAMATH</span>
        <h1>PythaMath</h1>
        <h2>${en ? 'Make Learning Pythagoras Fun!' : 'Belajar Pythagoras Jadi Lebih Seru!'}</h2>
        <p>${en ? 'Let’s start our math adventure together!' : 'Yuk, mulai petualangan matematika kita!'}</p>

        <form id="intro-form">
          <label for="student-name">${en ? 'What is your name?' : 'Siapa namamu?'}</label>
          <input id="student-name" maxlength="30" required
            placeholder="${en ? 'Enter your nickname...' : 'Tulis nama panggilanmu...'}">
          <button class="primary-btn full-btn" type="submit">
            ${en ? 'Start Adventure ✨' : 'Mulai Petualangan ✨'}
          </button>
        </form>
        <p class="privacy-note">${en ? 'Your name is only used in this application.' : 'Nama hanya digunakan untuk menyapa di aplikasi ini.'}</p>
      </div>
    </section>`

  document.querySelector('#intro-language').addEventListener('change', event => {
    state.language = event.target.value
    localStorage.setItem('pythaLanguage', state.language)
    render()
  })

  document.querySelector('#intro-music').addEventListener('click', toggleMusic)

  document.querySelector('#intro-form').addEventListener('submit', event => {
    event.preventDefault()
    const name = document.querySelector('#student-name').value.trim()
    if (!name) return

    state.name = name
    localStorage.setItem('pythaName', name)
    render()
  })
}

// ==========================================
// KERANGKA APLIKASI
// ==========================================

function shell(content, title) {
  return `
    <div class="layout">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-icon">${cat(48)}</div>
          <div><strong>PythaMath</strong><small>LEARN • PLAY • GROW</small></div>
        </div>

        <div class="nav-label">MENU UTAMA</div>
        <nav>
          ${menu.map(([id, icon, label]) => `
            <button class="nav-item ${state.page === id ? 'active' : ''}" data-page="${id}">
              <span>${icon}</span>${label}
            </button>`).join('')}
        </nav>

        <div class="sidebar-bottom">
          <div class="sidebar-note">${cat(45)}<br>Semangat belajar! Kamu pasti bisa! 💜</div>
        </div>
      </aside>

      <main class="main">
        <header class="topbar">
          <div class="breadcrumb">Beranda <span>›</span> ${title}</div>
          <div class="top-actions">
            <button class="icon-button" id="theme-toggle">${state.dark ? '☀️' : '🌙'}</button>
            <button class="icon-button" id="music-toggle">${state.music ? '🔊' : '🎵'}</button>
            <div class="avatar">${escapeHTML(state.name.charAt(0).toUpperCase())}</div>
          </div>
        </header>

        <section class="page-content">${content}</section>
        <footer>Made with 💜 for little math adventures • PythaMath</footer>
      </main>
    </div>`
}

// ==========================================
// BERANDA
// ==========================================

function feature(color, icon, title, desc, page, link) {
  return `
    <button class="feature-card ${color}" data-go="${page}">
      <div class="feature-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <span class="feature-link">${link}</span>
    </button>`
}

function homePage() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">LET'S LEARN SOMETHING FUN</span>
        <h1>Halo, ${escapeHTML(state.name)}! 👋</h1>
        <h2>Siap menjadi jagoan Pythagoras?</h2>
        <p>Belajar matematika tidak harus membosankan. Yuk, temani kucing pintar kita menjelajahi dunia segitiga!</p>
        <button class="primary-btn" data-go="materi">✨ Mulai Belajar →</button>
      </div>
      <div class="hero-art">
        ${cat(210, 'cat-bounce')}
        <div class="floating-formula">a² + b² = c²</div>
      </div>
    </section>

    <div class="section-heading">
      <span class="eyebrow">EXPLORE PYTHAGORAS</span>
      <h2>Fitur Unggulan ✨</h2>
    </div>

    <div class="feature-grid">
      ${feature('blue', '📖', 'Materi Lengkap', 'Pelajari konsep Pythagoras dengan mudah.', 'materi', 'Lihat Materi →')}
      ${feature('purple', '📐', 'Simulasi Seru', 'Eksplorasi segitiga secara langsung.', 'simulasi', 'Coba Simulasi →')}
      ${feature('orange', '🎯', 'Latihan Soal', 'Asah kemampuanmu dengan 20 soal.', 'latihan', 'Mulai Latihan →')}
      ${feature('green', '🏆', 'Quiz Menantang', 'Uji pemahamanmu dan raih skor terbaik.', 'quiz', 'Main Quiz →')}
    </div>

    <section class="formula-banner">
      <div>
        <span class="eyebrow">REMEMBER THIS!</span>
        <h2>Rumus Pythagoras</h2>
        <p>Jumlah kuadrat kedua sisi siku-siku sama dengan kuadrat sisi miring.</p>
      </div>
      <div class="formula-big">a² + b² = c²</div>
    </section>

    <div class="section-heading"><h2>Teman Belajarmu 🐾</h2></div>
    <div class="content-card" style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
      ${cat(105, 'cat-bounce')}
      <div style="flex:1;min-width:180px">
        <h3>Meow! Semangat terus!</h3>
        <p>Ayo belajar sedikit demi sedikit. Kamu pasti bisa memahami Pythagoras!</p>
        <button class="secondary-btn" data-go="chat">Tanya Kak Mey</button>
      </div>
    </div>`
}

// ==========================================
// MATERI
// ==========================================

function materiPage() {
  return `
    <div class="page-heading">
      <span class="eyebrow">LET'S UNDERSTAND</span>
      <h1>Materi Teorema Pythagoras 📚</h1>
      <p>Kenali konsep, rumus, dan penerapan Pythagoras dalam kehidupan sehari-hari.</p>
    </div>

    <div class="content-card material-layout">
      <div>
        <h2>1. Apa itu Teorema Pythagoras?</h2>
        <p>Teorema Pythagoras adalah aturan matematika yang berlaku pada segitiga siku-siku. Kuadrat sisi miring sama dengan jumlah kuadrat kedua sisi lainnya.</p>
        <div class="calculation">a² + b² = c²</div>
        <ul class="explain-list">
          <li>a adalah sisi siku-siku pertama.</li>
          <li>b adalah sisi siku-siku kedua.</li>
          <li>c adalah sisi miring (hipotenusa).</li>
        </ul>
      </div>
      <div class="triangle-panel">${triangleSVG(3, 4)}</div>
    </div>

    <div class="content-card">
      <h2>2. Contoh Perhitungan</h2>
      <p>Diketahui segitiga siku-siku dengan panjang sisi 3 cm dan 4 cm. Tentukan sisi miringnya!</p>
      <div class="calculation">
        c² = a² + b²<br>
        c² = 3² + 4²<br>
        c² = 9 + 16<br>
        c² = 25<br>
        c = √25 = 5 cm
      </div>
      <div class="success-note">Jadi, panjang sisi miring adalah 5 cm. Yeay! 🎉</div>
    </div>

    <div class="content-card">
      <h2>3. Penerapan dalam Kehidupan</h2>
      <p>Teorema Pythagoras dapat digunakan untuk menghitung panjang tangga yang disandarkan pada dinding, diagonal persegi panjang, dan jarak dua titik.</p>
      <div class="hint">💡 Ingat: Teorema ini hanya berlaku pada segitiga siku-siku.</div>
    </div>
    <button class="primary-btn" data-go="simulasi">Coba Simulasi →</button>`
}

// ==========================================
// SIMULASI
// ==========================================

function simulasiPage() {
  return `
    <div class="page-heading">
      <span class="eyebrow">LET'S EXPLORE</span>
      <h1>Simulasi Segitiga 📐</h1>
      <p>Geser nilai sisi dan lihat bagaimana panjang sisi miring berubah.</p>
    </div>

    <div class="content-card simulation-layout">
      <div class="triangle-panel" id="simulation-triangle">${triangleSVG(3, 4)}</div>
      <div class="simulation-controls">
        <label>Sisi a: <strong id="value-a">3</strong> cm</label>
        <input type="range" id="side-a" min="1" max="15" value="3">
        <label>Sisi b: <strong id="value-b">4</strong> cm</label>
        <input type="range" id="side-b" min="1" max="15" value="4">
        <div class="result-box">
          <span>Panjang sisi miring (c)</span>
          <strong id="value-c">5 cm</strong>
          <span id="simulation-work">√(3² + 4²) = 5</span>
        </div>
        <div class="hint">Coba ubah angka a dan b untuk bereksplorasi!</div>
      </div>
    </div>`
}

// ==========================================
// LATIHAN
// ==========================================

function latihanPage() {
  if (state.practiceDone) {
    return `
      <div class="content-card result-card">
        <div class="result-star">🌟</div>
        <h1>Latihan Selesai!</h1>
        <p>Kamu sudah menyelesaikan 20 soal Pythagoras.</p>
        <div class="score-number">${state.practiceScore}/20</div>
        <h2>${state.practiceScore >= 15 ? 'Hebat sekali! 🎉' : 'Tetap semangat belajar! 💜'}</h2>
        <button class="primary-btn" data-action="restart-practice">Ulangi Latihan ↻</button>
        <button class="secondary-btn" data-go="home">Kembali ke Beranda</button>
      </div>`
  }

  const q = questions[state.practiceIndex]

  return `
    <div class="page-heading">
      <span class="eyebrow">PRACTICE MAKES PROGRESS</span>
      <h1>Latihan Pythagoras ✏️</h1>
      <p>Jawab 20 soal dan kumpulkan poin!</p>
    </div>
    <div class="content-card">
      <div class="question-number">Soal ${state.practiceIndex + 1} dari 20</div>
      <div class="progress-track"><div style="width:${state.practiceIndex / 20 * 100}%"></div></div>
      <h2>${q.q}</h2>
      <div class="answer-options">
        ${q.a.map((answer, i) => `
          <button class="answer-option" data-answer="${i}" ${state.practiceAnswered ? 'disabled' : ''}>
            ${String.fromCharCode(65 + i)}. ${answer}
          </button>`).join('')}
      </div>
      <div id="answer-feedback"></div>
      ${state.practiceAnswered ? '<button class="primary-btn" data-action="next-practice">Soal Berikutnya →</button>' : ''}
    </div>`
}

// ==========================================
// QUIZ
// ==========================================

function quizPage() {
  if (state.quizDone) {
    return `
      <div class="content-card result-card">
        <div class="result-star">🏆</div>
        <h1>Quiz Selesai!</h1>
        <p>Skor quiz kamu:</p>
        <div class="score-number">${state.quizScore * 20}/100</div>
        <h2>${state.quizScore >= 4 ? 'Amazing! Kamu hebat!' : 'Good try! Terus berlatih!'}</h2>
        <button class="primary-btn" data-action="restart-quiz">Main Lagi ↻</button>
      </div>`
  }

  const q = quizQuestions[state.quizIndex]

  return `
    <div class="page-heading">
      <span class="eyebrow">CHALLENGE YOURSELF</span>
      <h1>Quiz Pythagoras 🏆</h1>
      <p>Jawab 5 pertanyaan pilihan ganda dan kumpulkan poin!</p>
    </div>
    <div class="content-card">
      <div class="quiz-progress">Pertanyaan ${state.quizIndex + 1} / 5</div>
      <div class="progress-track"><div style="width:${state.quizIndex / 5 * 100}%"></div></div>
      <h2>${q.q}</h2>
      <div class="answer-options">
        ${q.a.map((answer, i) => `
          <button class="answer-option" data-quiz-answer="${i}" ${state.quizAnswered ? 'disabled' : ''}>
            ${String.fromCharCode(65 + i)}. ${answer}
          </button>`).join('')}
      </div>
      <div id="quiz-feedback"></div>
      ${state.quizAnswered ? '<button class="primary-btn" data-action="next-quiz">Lanjut →</button>' : ''}
    </div>`
}

// ==========================================
// TANYA KAK MEY
// ==========================================

function getBotReply(message) {
  const text = message.toLowerCase()

  if (text.includes('halo') || text.includes('hai') || text.includes('hello')) {
    return `Halo, ${state.name}! Ada yang bisa Kak Mey bantu hari ini? 🐱`
  }

  if (text.includes('rumus') || text.includes('pythagoras')) {
    return 'Rumus Teorema Pythagoras adalah a² + b² = c². Huruf c merupakan sisi miring atau hipotenusa.'
  }

  if (text.includes('contoh')) {
    return 'Contohnya, jika dua sisi siku-siku memiliki panjang 3 cm dan 4 cm, maka sisi miringnya adalah √(3² + 4²) = 5 cm.'
  }

  if (text.includes('segitiga')) {
    return 'Segitiga siku-siku memiliki satu sudut sebesar 90°. Teorema Pythagoras digunakan untuk mencari panjang salah satu sisinya.'
  }

  if (text.includes('sisi miring') || text.includes('hipotenusa')) {
    return 'Sisi miring adalah sisi terpanjang dalam segitiga siku-siku dan berada di depan sudut 90°.'
  }

  if (text.includes('terima kasih') || text.includes('makasih')) {
    return 'Sama-sama! Keep learning and keep exploring! 🌟'
  }

  return 'Pertanyaan menarik! Kak Mey bisa membantu menjelaskan rumus Pythagoras, segitiga siku-siku, dan contoh soal. Coba tanyakan salah satunya, ya! 💜'
}

function chatPage() {
  return `
    <div class="page-heading">
      <span class="eyebrow">LET'S TALK</span>
      <h1>Tanya Kak Mey 💬</h1>
      <p>Yuk, ngobrol dan tanyakan hal-hal seputar Pythagoras!</p>
    </div>

    <div class="chat-card">
      <div class="chat-header">
        ${cat(65)}
        <div>
          <h3>Kak Mey</h3>
          <p>Math Learning Assistant • Online 🟢</p>
        </div>
      </div>

      <div class="chat-messages" id="chat-messages">
        <div class="chat-bubble bot">
          Hai, ${escapeHTML(state.name)}! Aku Kak Mey. Ada yang ingin kamu tanyakan tentang Teorema Pythagoras? 😊
        </div>
        ${state.chat.map(item => `
          <div class="chat-bubble ${item.from}">
            ${escapeHTML(item.text)}
          </div>`).join('')}
      </div>

      <form class="chat-form" id="chat-form">
        <input id="chat-input" type="text" placeholder="Tulis pertanyaanmu di sini..." autocomplete="off" required>
        <button type="submit">Send ✨</button>
      </form>
    </div>`
}

// ==========================================
// PENGATURAN
// ==========================================

function pengaturanPage() {
  return `
    <div class="page-heading">
      <span class="eyebrow">YOUR SPACE</span>
      <h1>Pengaturan ⚙️</h1>
      <p>Atur pengalaman belajarmu di PythaMath.</p>
    </div>

    <div class="content-card">
      <div class="setting-item">
        <div><h3>Dark Mode 🌙</h3><p>Ubah tampilan menjadi mode gelap.</p></div>
        <button id="settings-theme">Ganti Tema</button>
      </div>
      <div class="setting-item">
        <div><h3>Background Music 🎵</h3><p>Aktifkan atau matikan musik aplikasi.</p></div>
        <button id="settings-music">${state.music ? 'Matikan Musik' : 'Nyalakan Musik'}</button>
      </div>
      <div class="setting-item">
        <div><h3>Nama Pengguna 👤</h3><p>${escapeHTML(state.name)}</p></div>
        <button id="change-name">Ganti Nama</button>
      </div>
      <div class="setting-item">
        <div><h3>Ulangi Latihan 🔄</h3><p>Mulai kembali latihan dari awal.</p></div>
        <button data-action="restart-practice">Ulangi</button>
      </div>
      <div class="setting-item">
        <div><h3>Ulangi Quiz 📝</h3><p>Mulai kembali kuis dari awal.</p></div>
        <button data-action="restart-quiz">Ulangi</button>
      </div>
    </div>`
}

// ==========================================
// INTERAKSI SIMULASI
// ==========================================

function setupSimulation() {
  const sliderA = document.querySelector('#side-a')
  const sliderB = document.querySelector('#side-b')

  if (!sliderA || !sliderB) return

  function update() {
    const a = Number(sliderA.value)
    const b = Number(sliderB.value)
    const c = Math.sqrt(a * a + b * b)

    document.querySelector('#value-a').textContent = a
    document.querySelector('#value-b').textContent = b
    document.querySelector('#value-c').textContent = `${c.toFixed(2)} cm`
    document.querySelector('#simulation-work').textContent =
      `√(${a}² + ${b}²) = ${c.toFixed(2)}`

    document.querySelector('#simulation-triangle').innerHTML = triangleSVG(a, b)
  }

  sliderA.addEventListener('input', update)
  sliderB.addEventListener('input', update)
  update()
}

// ==========================================
// INTERAKSI LATIHAN
// ==========================================

function setupPractice() {
  document.querySelectorAll('[data-answer]').forEach(button => {
    button.addEventListener('click', () => {
      if (state.practiceAnswered) return

      const selected = Number(button.dataset.answer)
      const question = questions[state.practiceIndex]
      const feedback = document.querySelector('#answer-feedback')

      state.practiceAnswered = true

      if (selected === question.c) {
        state.practiceScore++
        feedback.innerHTML = `<div class="feedback correct">Benar! Great job! 🎉<br>${question.e}</div>`
      } else {
        feedback.innerHTML = `<div class="feedback incorrect">Belum tepat. Jawaban yang benar: ${question.a[question.c]}.<br>${question.e}</div>`
      }

      render()
    })
  })

  document.querySelector('[data-action="next-practice"]')?.addEventListener('click', () => {
    state.practiceIndex++

    if (state.practiceIndex >= questions.length) {
      state.practiceDone = true
    }

    state.practiceAnswered = false
    render()
  })
}

// ==========================================
// INTERAKSI QUIZ
// ==========================================

function setupQuiz() {
  document.querySelectorAll('[data-quiz-answer]').forEach(button => {
    button.addEventListener('click', () => {
      if (state.quizAnswered) return

      const selected = Number(button.dataset.quizAnswer)
      const question = quizQuestions[state.quizIndex]
      const feedback = document.querySelector('#quiz-feedback')

      state.quizAnswered = true

      if (selected === question.c) {
        state.quizScore++
        feedback.innerHTML = '<div class="feedback correct">Jawaban benar! Excellent! 🌟</div>'
      } else {
        feedback.innerHTML = `<div class="feedback incorrect">Belum tepat. Jawaban yang benar: ${question.a[question.c]}.</div>`
      }

      render()
    })
  })

  document.querySelector('[data-action="next-quiz"]')?.addEventListener('click', () => {
    state.quizIndex++

    if (state.quizIndex >= quizQuestions.length) {
      state.quizDone = true
    }

    state.quizAnswered = false
    render()
  })
}

// ==========================================
// INTERAKSI CHAT
// ==========================================

function setupChat() {
  const form = document.querySelector('#chat-form')
  const input = document.querySelector('#chat-input')

  if (!form || !input) return

  form.addEventListener('submit', event => {
    event.preventDefault()

    const message = input.value.trim()
    if (!message) return

    state.chat.push({ from: 'user', text: message })
    state.chat.push({ from: 'bot', text: getBotReply(message) })

    render()

    const messages = document.querySelector('#chat-messages')
    if (messages) messages.scrollTop = messages.scrollHeight
  })
}

// ==========================================
// PENGATURAN DAN TEMA
// ==========================================

function toggleTheme() {
  state.dark = !state.dark
  localStorage.setItem('pythaDark', String(state.dark))
  render()
}

function setupSettings() {
  document.querySelector('#settings-theme')?.addEventListener('click', toggleTheme)
  document.querySelector('#settings-music')?.addEventListener('click', toggleMusic)

  document.querySelector('#change-name')?.addEventListener('click', () => {
    const newName = prompt('Masukkan nama baru:')
    if (!newName || !newName.trim()) return

    state.name = newName.trim()
    localStorage.setItem('pythaName', state.name)
    render()
  })
}

// ==========================================
// MUSIK LATAR ORIGINAL
// ==========================================

function stopMusic() {
  if (musicTimer) {
    clearTimeout(musicTimer)
    musicTimer = null
  }
}

function startMusic() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return

  if (!audioContext) audioContext = new AudioContextClass()
  if (audioContext.state === 'suspended') audioContext.resume()

  stopMusic()

  const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 783.99, 698.46]
  noteIndex = 0

  function playNote() {
    if (!state.music || !audioContext) return

    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.type = 'triangle'
    oscillator.frequency.value = notes[noteIndex % notes.length]

    gain.gain.setValueAtTime(0.0001, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.05)
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.35)

    oscillator.connect(gain)
    gain.connect(audioContext.destination)

    oscillator.start()
    oscillator.stop(audioContext.currentTime + 0.4)

    noteIndex++
    musicTimer = setTimeout(playNote, 420)
  }

  playNote()
}

function toggleMusic() {
  state.music = !state.music

  if (state.music) {
    startMusic()
  } else {
    stopMusic()
  }

  render()
}

// ==========================================
// RENDER APLIKASI
// ==========================================

function render() {
  document.body.classList.toggle('dark-mode', state.dark)
  document.documentElement.classList.toggle('dark-mode', state.dark)

  if (!state.name) {
    introPage()
    return
  }

  const pages = {
    home: { title: 'Beranda', content: homePage },
    materi: { title: 'Materi', content: materiPage },
    simulasi: { title: 'Simulasi', content: simulasiPage },
    latihan: { title: 'Latihan', content: latihanPage },
    quiz: { title: 'Quiz', content: quizPage },
    chat: { title: 'Tanya Kak Mey', content: chatPage },
    pengaturan: { title: 'Pengaturan', content: pengaturanPage }
  }

  const currentPage = pages[state.page] || pages.home
  app.innerHTML = shell(currentPage.content(), currentPage.title)

  document.querySelectorAll('[data-page], [data-go]').forEach(button => {
    button.addEventListener('click', () => {
      state.page = button.dataset.page || button.dataset.go
      render()
    })
  })

  document.querySelector('#theme-toggle')?.addEventListener('click', toggleTheme)
  document.querySelector('#music-toggle')?.addEventListener('click', toggleMusic)

  document.querySelectorAll('[data-action="restart-practice"]').forEach(button => {
    button.addEventListener('click', () => {
      state.practiceIndex = 0
      state.practiceScore = 0
      state.practiceAnswered = false
      state.practiceDone = false
      render()
    })
  })

  document.querySelectorAll('[data-action="restart-quiz"]').forEach(button => {
    button.addEventListener('click', () => {
      state.quizIndex = 0
      state.quizScore = 0
      state.quizAnswered = false
      state.quizDone = false
      render()
    })
  })

  setupSimulation()
  setupPractice()
  setupQuiz()
  setupChat()
  setupSettings()
}

render()

// ==========================================
// PWA - SERVICE WORKER
// ==========================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(
      '/aplikasi-pembelajaran-teorema-pythagoras-2225250080/sw.js'
    )
      .then(() => console.log('Purrfect Math Adventure siap diinstal!'))
      .catch(error => console.error('Service Worker Error:', error))
  })
}

