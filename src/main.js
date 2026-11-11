
import './style.css'

const savedName = localStorage.getItem('pythagoras-name') || ''

const state = {
  name: savedName,
  language: 'id',
  theme: 'light',
  music: false,
  page: savedName ? 'home' : 'intro',
  a: 3,
  b: 4,
  practiceAnswer: '',
  question: 0,
  score: 0,
  answered: false
}

const translations = {
  id: {
    greeting: 'Selamat datang di ruang belajar Kak Meyliana!',
    intro: 'Sebelum mulai belajar, yuk kenalan dulu!',
    nickname: 'Nama panggilan kamu',
    start: 'Mulai Belajar',
    home: 'Beranda',
    material: 'Materi',
    simulation: 'Simulasi',
    practice: 'Latihan',
    quiz: 'Kuis',
    settings: 'Pengaturan',
    welcome: 'Siap menjelajahi dunia Pythagoras?',
    subtitle: 'Belajar Teorema Pythagoras melalui materi, ilustrasi, dan aktivitas interaktif.',
    begin: 'Ayo Mulai',
    lessons: 'Temukan Cara Belajarmu',
    materialDesc: 'Kenali konsep, rumus, dan contoh soal.',
    simulationDesc: 'Ubah panjang sisi dan lihat hasilnya.',
    practiceDesc: 'Berlatih dengan soal dan pembahasan.',
    quizDesc: 'Uji pemahaman dan lihat nilaimu.',
    formula: 'Rumus Teorema Pythagoras',
    definition: 'Teorema Pythagoras menjelaskan hubungan antara ketiga sisi segitiga siku-siku.',
    hypotenuse: 'Sisi miring (c)',
    base: 'Alas (a)',
    height: 'Tinggi (b)',
    example: 'Contoh Soal',
    exampleDesc: 'Segitiga siku-siku memiliki alas 3 cm dan tinggi 4 cm. Berapa panjang sisi miringnya?',
    solution: 'Penyelesaian',
    answer: 'Jawaban',
    simulationTitle: 'Eksplorasi Segitiga',
    simulationDesc: 'Geser pengaturan untuk mengubah panjang sisi segitiga.',
    practiceTitle: 'Yuk, Berlatih!',
    practiceQuestion: 'Sebuah segitiga siku-siku memiliki alas 9 cm dan tinggi 12 cm. Berapa sisi miringnya?',
    check: 'Periksa Jawaban',
    correct: 'Hebat! Jawaban kamu benar.',
    incorrect: 'Belum tepat. Coba periksa kembali perhitungannya.',
    quizTitle: 'Kuis Pythagoras',
    next: 'Soal Berikutnya',
    finish: 'Lihat Hasil',
    restart: 'Ulangi Kuis',
    result: 'Hasil Kuis',
    settingsTitle: 'Pengaturan Aplikasi',
    language: 'Bahasa',
    appearance: 'Tampilan',
    light: 'Terang',
    dark: 'Gelap',
    music: 'Musik Latar',
    changeName: 'Ganti Nama',
    back: 'Kembali',
    footer: 'Belajar bersama Kak Meyliana • Explore, Learn, Discover'
  },
  en: {
    greeting: "Welcome to Kak Meyliana's learning space!",
    intro: "Before we start learning, let's get to know each other!",
    nickname: 'Your nickname',
    start: 'Start Learning',
    home: 'Home',
    material: 'Materials',
    simulation: 'Simulation',
    practice: 'Practice',
    quiz: 'Quiz',
    settings: 'Settings',
    welcome: 'Ready to explore the world of Pythagoras?',
    subtitle: 'Learn the Pythagorean Theorem through materials, illustrations, and interactive activities.',
    begin: "Let's Start",
    lessons: 'Explore Your Learning Journey',
    materialDesc: 'Discover concepts, formulas, and examples.',
    simulationDesc: 'Change side lengths and see the results.',
    practiceDesc: 'Practice with questions and explanations.',
    quizDesc: 'Test your understanding and see your score.',
    formula: 'Pythagorean Theorem Formula',
    definition: 'The Pythagorean Theorem describes the relationship between the three sides of a right triangle.',
    hypotenuse: 'Hypotenuse (c)',
    base: 'Base (a)',
    height: 'Height (b)',
    example: 'Example',
    exampleDesc: 'A right triangle has a base of 3 cm and a height of 4 cm. What is its hypotenuse?',
    solution: 'Solution',
    answer: 'Answer',
    simulationTitle: 'Explore the Triangle',
    simulationDesc: 'Adjust the sliders to change the triangle side lengths.',
    practiceTitle: "Let's Practice!",
    practiceQuestion: 'A right triangle has a base of 9 cm and a height of 12 cm. What is its hypotenuse?',
    check: 'Check Answer',
    correct: 'Great! Your answer is correct.',
    incorrect: 'Not quite. Check your calculation again.',
    quizTitle: 'Pythagoras Quiz',
    next: 'Next Question',
    finish: 'See Results',
    restart: 'Restart Quiz',
    result: 'Quiz Results',
    settingsTitle: 'Application Settings',
    language: 'Language',
    appearance: 'Appearance',
    light: 'Light',
    dark: 'Dark',
    music: 'Background Music',
    changeName: 'Change Name',
    back: 'Back',
    footer: 'Learn with Kak Meyliana • Explore, Learn, Discover'
  }
}

const questions = {
  id: [
    ['Apa rumus Teorema Pythagoras?', ['a + b = c', 'a² + b² = c²', 'a² - b² = c²', 'a × b = c'], 1, 'Rumus Pythagoras adalah a² + b² = c².'],
    ['Jika alas 3 cm dan tinggi 4 cm, berapa sisi miringnya?', ['5 cm', '6 cm', '7 cm', '8 cm'], 0, 'c = √(3² + 4²) = √25 = 5 cm.'],
    ['Jika sisi miring 13 cm dan alas 5 cm, berapa tingginya?', ['10 cm', '11 cm', '12 cm', '13 cm'], 2, 'b = √(13² − 5²) = √144 = 12 cm.'],
    ['Sisi miring segitiga siku-siku adalah ...', ['Sisi terpendek', 'Sisi di depan sudut siku-siku', 'Sisi alas', 'Semua sisi'], 1, 'Sisi miring berada di depan sudut siku-siku dan merupakan sisi terpanjang.'],
    ['Jika alas 6 cm dan tinggi 8 cm, berapa sisi miringnya?', ['9 cm', '10 cm', '12 cm', '14 cm'], 1, 'c = √(6² + 8²) = √100 = 10 cm.']
  ],
  en: [
    ['What is the Pythagorean formula?', ['a + b = c', 'a² + b² = c²', 'a² - b² = c²', 'a × b = c'], 1, 'The formula is a² + b² = c².'],
    ['If the base is 3 cm and the height is 4 cm, what is the hypotenuse?', ['5 cm', '6 cm', '7 cm', '8 cm'], 0, 'c = √(3² + 4²) = 5 cm.'],
    ['If the hypotenuse is 13 cm and the base is 5 cm, what is the height?', ['10 cm', '11 cm', '12 cm', '13 cm'], 2, 'b = √(13² − 5²) = 12 cm.'],
    ['The hypotenuse is ...', ['The shortest side', 'The side opposite the right angle', 'The base', 'All sides'], 1, 'The hypotenuse is opposite the right angle and is the longest side.'],
    ['If the base is 6 cm and the height is 8 cm, what is the hypotenuse?', ['9 cm', '10 cm', '12 cm', '14 cm'], 1, 'c = √(6² + 8²) = 10 cm.']
  ]
}

const $ = selector => document.querySelector(selector)
const t = () => translations[state.language]

function safe(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char])
}

function introPage() {
  return `
    <main class="intro-screen">
      <section class="intro-card">
        <div class="intro-logo">△</div>
        <span class="eyebrow">WELCOME TO YOUR LEARNING SPACE</span>
        <h1>Pythagoras Space</h1>
        <h2>Let's Learn with Kak Meyliana</h2>
        <p>${t().intro}</p>
        <form id="name-form">
          <label for="student-name">${t().nickname}</label>
          <input id="student-name" maxlength="20" placeholder="${state.language === 'id' ? 'Contoh: Mey' : 'Example: Mey'}" required autocomplete="given-name">
          <button class="primary-btn full-btn">${t().start} →</button>
        </form>
        <p class="privacy-note">${state.language === 'id' ? 'Gunakan nama panggilan saja, ya.' : 'Please use a nickname only.'}</p>
        <div class="intro-language">
          <button data-language="id">🇮🇩 Indonesia</button>
          <button data-language="en">🇬🇧 English</button>
        </div>
      </section>
    </main>
  `
}

function feature(icon, title, description, page, color) {
  return `
    <button class="feature-card ${color}" data-page="${page}">
      <span class="feature-icon">${icon}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <span class="feature-link">${state.language === 'id' ? 'Pelajari →' : 'Explore →'}</span>
    </button>
  `
}

function triangle(a, b) {
  const width = 240
  const height = 180
  return `
    <svg class="triangle-svg" viewBox="0 0 300 230" role="img" aria-label="Right triangle illustration">
      <path d="M35 195 L265 195 L265 25 Z" fill="#7c75e9" fill-opacity=".12" stroke="#7568D9" stroke-width="4" stroke-linejoin="round"/>
      <path d="M242 195 V172 H265" fill="none" stroke="#7568D9" stroke-width="3"/>
      <text x="145" y="220" text-anchor="middle" class="triangle-label">a = ${a}</text>
      <text x="280" y="112" class="triangle-label">b = ${b}</text>
      <text x="125" y="95" class="triangle-label">c</text>
    </svg>
  `
}

function homePage() {
  const c = t()
  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">YOUR MATH JOURNEY STARTS HERE</span>
        <h1>${state.language === 'id' ? 'Hai' : 'Hi'}, ${safe(state.name)}! 👋</h1>
        <h2>${c.welcome}</h2>
        <p>${c.subtitle}</p>
        <button class="primary-btn" data-page="material">${c.begin} →</button>
      </div>
      <div class="hero-art">
        ${triangle(3, 4)}
        <div class="floating-formula">a² + b² = c²</div>
      </div>
    </section>

    <section class="section-heading">
      <div><span class="eyebrow">LEARNING CENTER</span><h2>${c.lessons}</h2></div>
    </section>

    <div class="feature-grid">
      ${feature('▤', c.material, c.materialDesc, 'material', 'blue')}
      ${feature('△', c.simulation, c.simulationDesc, 'simulation', 'purple')}
      ${feature('✎', c.practice, c.practiceDesc, 'practice', 'orange')}
      ${feature('★', c.quiz, c.quizDesc, 'quiz', 'green')}
    </div>

    <section class="formula-banner">
      <div><span class="eyebrow">${state.language === 'id' ? 'INGAT RUMUS INI' : 'REMEMBER THIS'}</span><h2>${c.formula}</h2><p>${c.definition}</p></div>
      <div class="formula-big">a² + b² = c²</div>
    </section>
  `
}

function materialPage() {
  const c = t()
  return `
    <div class="page-heading"><span class="eyebrow">LEARNING MATERIAL</span><h1>${c.material}</h1><p>${c.definition}</p></div>
    <section class="content-card material-layout">
      <div>
        <h2>${state.language === 'id' ? 'Apa itu Teorema Pythagoras?' : 'What is the Pythagorean Theorem?'}</h2>
        <p>${c.definition}</p>
        <div class="formula-big inline-formula">a² + b² = c²</div>
        <ul class="explain-list">
          <li><strong>a</strong> = ${c.base}</li>
          <li><strong>b</strong> = ${c.height}</li>
          <li><strong>c</strong> = ${c.hypotenuse}</li>
        </ul>
      </div>
      <div class="triangle-panel">${triangle(3, 4)}</div>
    </section>
    <section class="content-card">
      <h2>${c.example}</h2>
      <p>${c.exampleDesc}</p>
      <h3>${c.solution}</h3>
      <div class="calculation">c² = 3² + 4²<br>c² = 9 + 16<br>c² = 25<br>c = √25 = 5 cm</div>
      <p class="success-note">${c.answer}: <strong>5 cm</strong></p>
    </section>
    <button class="primary-btn" data-page="simulation">${c.simulation} →</button>
  `
}

function simulationPage() {
  const c = t()
  const result = Math.sqrt(state.a ** 2 + state.b ** 2)
  return `
    <div class="page-heading"><span class="eyebrow">INTERACTIVE EXPERIENCE</span><h1>${c.simulationTitle}</h1><p>${c.simulationDesc}</p></div>
    <section class="content-card simulation-layout">
      <div class="simulation-controls">
        <label>${c.base}: <strong>${state.a} cm</strong></label>
        <input id="side-a" type="range" min="1" max="15" value="${state.a}">
        <label>${c.height}: <strong>${state.b} cm</strong></label>
        <input id="side-b" type="range" min="1" max="15" value="${state.b}">
        <div class="result-box"><span>${c.result}</span><strong>${result.toFixed(2)} cm</strong></div>
      </div>
      <div class="triangle-panel">${triangle(state.a, state.b)}</div>
    </section>
    <p class="hint">${state.language === 'id' ? 'Coba geser kedua pengatur dan amati perubahan panjang sisi miring.' : 'Move both sliders and observe how the hypotenuse changes.'}</p>
  `
}

function practicePage() {
  const c = t()
  return `
    <div class="page-heading"><span class="eyebrow">PRACTICE TIME</span><h1>${c.practiceTitle}</h1></div>
    <section class="content-card">
      <span class="question-number">01 / 01</span>
      <h2>${c.practiceQuestion}</h2>
      <label for="practice-answer">${state.language === 'id' ? 'Masukkan jawaban (cm)' : 'Enter your answer (cm)'}</label>
      <input id="practice-answer" type="number" min="0" placeholder="${state.language === 'id' ? 'Jawaban kamu' : 'Your answer'}" value="${safe(state.practiceAnswer)}">
      <button class="primary-btn" id="check-practice">${c.check}</button>
      <div id="practice-feedback" aria-live="polite"></div>
    </section>
  `
}

function quizPage() {
  const c = t()
  const list = questions[state.language]

  if (state.question >= list.length) {
    return `
      <section class="content-card result-card">
        <div class="result-star">★</div>
        <h1>${c.result}</h1>
        <div class="score-number">${Math.round(state.score / list.length * 100)}</div>
        <p>${state.score} / ${list.length} ${state.language === 'id' ? 'jawaban benar' : 'correct answers'}</p>
        <button class="primary-btn" id="restart-quiz">${c.restart}</button>
      </section>
    `
  }

  const q = list[state.question]
  return `
    <div class="page-heading"><span class="eyebrow">TEST YOUR KNOWLEDGE</span><h1>${c.quizTitle}</h1></div>
    <section class="content-card quiz-card">
      <div class="quiz-progress">${c.question || (state.language === 'id' ? 'Pertanyaan' : 'Question')} ${state.question + 1} / ${list.length}</div>
      <div class="progress-track"><div style="width:${(state.question + 1) / list.length * 100}%"></div></div>
      <h2>${q[0]}</h2>
      <div class="answer-options">
        ${q[1].map((option, i) => `
          <button class="answer-option" data-answer="${i}" ${state.answered ? 'disabled' : ''}>${String.fromCharCode(65 + i)}. ${option}</button>
        `).join('')}
      </div>
      <div id="quiz-feedback" aria-live="polite"></div>
      ${state.answered ? `<button class="primary-btn" id="next-question">${state.question === list.length - 1 ? c.finish : c.next} →</button>` : ''}
    </section>
  `
}

function settingsPage() {
  const c = t()
  return `
    <div class="page-heading"><span class="eyebrow">PERSONAL SPACE</span><h1>${c.settingsTitle}</h1></div>
    <section class="content-card settings-card">
      <div class="setting-row"><div><h3>${c.language}</h3><p>Choose your preferred language</p></div>
        <select id="settings-language"><option value="id" ${state.language === 'id' ? 'selected' : ''}>🇮🇩 Indonesia</option><option value="en" ${state.language === 'en' ? 'selected' : ''}>🇬🇧 English</option></select>
      </div>
      <div class="setting-row"><div><h3>${c.appearance}</h3><p>Customize your learning space</p></div>
        <select id="settings-theme"><option value="light" ${state.theme === 'light' ? 'selected' : ''}>${c.light}</option><option value="dark" ${state.theme === 'dark' ? 'selected' : ''}>${c.dark}</option></select>
      </div>
      <div class="setting-row"><div><h3>${c.music}</h3><p>${state.language === 'id' ? 'Musik instrumental lembut' : 'Soft instrumental music'}</p></div>
        <button class="secondary-btn" id="settings-music">${state.music ? '♫ ON' : '♫ OFF'}</button>
      </div>
      <div class="setting-row"><div><h3>${c.changeName}</h3><p>${safe(state.name)}</p></div>
        <button class="secondary-btn" id="edit-name">${c.changeName}</button>
      </div>
    </section>
  `
}

function pageContent() {
  const pages = {
    home: homePage,
    material: materialPage,
    simulation: simulationPage,
    practice: practicePage,
    quiz: quizPage,
    settings: settingsPage
  }
  return (pages[state.page] || homePage)()
}

const pageNames = ['home', 'material', 'simulation', 'practice', 'quiz']
const pageIcons = ['⌂', '▤', '△', '✎', '★']

function render() {
  document.body.dataset.theme = state.theme

  if (state.page === 'intro') {
    app.innerHTML = introPage()
    $('#name-form').addEventListener('submit', event => {
      event.preventDefault()
      const name = $('#student-name').value.trim().slice(0, 20)
      if (!name) return
      state.name = name
      localStorage.setItem('pythagoras-name', name)
      state.page = 'home'
      render()
    })
    app.querySelectorAll('[data-language]').forEach(button => {
      button.addEventListener('click', () => {
        state.language = button.dataset.language
        render()
      })
    })
    return
  }

  const c = t()
  app.innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-icon">△</div>
          <div><strong>Pythagoras Space</strong><small>LET'S LEARN WITH KAK MEYLIANA</small></div>
        </div>
        <div class="nav-label">${state.language === 'id' ? 'MENU UTAMA' : 'MAIN MENU'}</div>
        <nav>
          ${pageNames.map((page, i) => `
            <button class="nav-item ${state.page === page ? 'active' : ''}" data-page="${page}">
              <span>${pageIcons[i]}</span>${c[page]}
            </button>
          `).join('')}
        </nav>
        <div class="sidebar-bottom">
          <div class="sidebar-note">✦ ${state.language === 'id' ? 'Belajar dengan menyenangkan!' : 'Make learning fun!'}</div>
          <button class="nav-item ${state.page === 'settings' ? 'active' : ''}" data-page="settings"><span>⚙</span>${c.settings}</button>
        </div>
      </aside>

      <main class="main">
        <header class="topbar">
          <div class="breadcrumb">Pythagoras Space <span>/</span> ${c[state.page] || c.settings}</div>
          <div class="top-actions">
            <select id="header-language" aria-label="${c.language}">
              <option value="id" ${state.language === 'id' ? 'selected' : ''}>🇮🇩 ID</option>
              <option value="en" ${state.language === 'en' ? 'selected' : ''}>🇬🇧 EN</option>
            </select>
            <button id="header-music" class="icon-button" aria-label="${c.music}">♫ ${state.music ? 'ON' : 'OFF'}</button>
            <button class="avatar" data-page="settings" aria-label="${c.settings}">${safe(state.name.charAt(0).toUpperCase())}</button>
          </div>
        </header>
        <div class="page-content">${pageContent()}</div>
        <footer>${c.footer}</footer>
      </main>
    </div>
  `

  app.querySelectorAll('[data-page]').forEach(button => {
    button.addEventListener('click', () => {
      state.page = button.dataset.page
      render()
    })
  })

  $('#header-language').addEventListener('change', event => {
    state.language = event.target.value
    render()
  })

  $('#header-music').addEventListener('click', toggleMusic)
  bindPageEvents()
}

let audioContext
let masterGain
let musicTimer

function playTone(frequency, start, duration, volume) {
  if (!audioContext || !masterGain) return
  const oscillator = audioContext.createOscillator()
  const gain = audioContext.createGain()
  oscillator.type = 'sine'
  oscillator.frequency.value = frequency
  gain.gain.setValueAtTime(0.001, start)
  gain.gain.linearRampToValueAtTime(volume, start + 0.08)
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
  oscillator.connect(gain)
  gain.connect(masterGain)
  oscillator.start(start)
  oscillator.stop(start + duration)
}

function playMelody() {
  if (!state.music || !audioContext) return
  const now = audioContext.currentTime + 0.1
  ;[523, 659, 784, 659, 587, 698, 880, 698].forEach((note, i) => {
    playTone(note, now + i * 0.42, 0.5, 0.12)
  })
  musicTimer = setTimeout(playMelody, 4200)
}

async function toggleMusic() {
  if (state.music) {
    state.music = false
    clearTimeout(musicTimer)
    if (masterGain) masterGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.15)
  } else {
    const AudioEngine = window.AudioContext || window.webkitAudioContext
    if (!AudioEngine) {
      alert('Browser ini tidak mendukung musik.')
      return
    }
    if (!audioContext) {
      audioContext = new AudioEngine()
      masterGain = audioContext.createGain()
      masterGain.connect(audioContext.destination)
    }
    await audioContext.resume()
    state.music = true
    masterGain.gain.setTargetAtTime(0.12, audioContext.currentTime, 0.3)
    playMelody()
  }
  render()
}

function bindPageEvents() {
  if ($('#side-a')) {
    $('#side-a').addEventListener('input', event => {
      state.a = Number(event.target.value)
      render()
    })
    $('#side-b').addEventListener('input', event => {
      state.b = Number(event.target.value)
      render()
    })
  }

  if ($('#check-practice')) {
    $('#practice-answer').addEventListener('input', event => {
      state.practiceAnswer = event.target.value
    })
    $('#check-practice').addEventListener('click', () => {
      const feedback = $('#practice-feedback')
      if (Number(state.practiceAnswer) === 15) {
        feedback.innerHTML = `<p class="success-note">${t().correct}<br>c = √(9² + 12²) = 15 cm</p>`
      } else {
        feedback.innerHTML = `<p class="error-note">${t().incorrect}</p>`
      }
    })
  }

  if ($('[data-answer]')) {
    const q = questions[state.language][state.question]
    app.querySelectorAll('[data-answer]').forEach(button => {
      button.addEventListener('click', () => {
        if (state.answered) return
        const answer = Number(button.dataset.answer)
        state.answered = true
        if (answer === q[2]) state.score++
        render()
        const feedback = $('#quiz-feedback')
        feedback.innerHTML = `
          <p class="${answer === q[2] ? 'success-note' : 'error-note'}">
            ${answer === q[2] ? t().correct : t().incorrect}
          </p>
          <p>${q[3]}</p>
        `
      })
    })
  }

  if ($('#next-question')) {
    $('#next-question').addEventListener('click', () => {
      state.question++
      state.answered = false
      render()
    })
  }

  if ($('#restart-quiz')) {
    $('#restart-quiz').addEventListener('click', () => {
      state.question = 0
      state.score = 0
      state.answered = false
      render()
    })
  }

  if ($('#settings-language')) {
    $('#settings-language').addEventListener('change', event => {
      state.language = event.target.value
      render()
    })
    $('#settings-theme').addEventListener('change', event => {
      state.theme = event.target.value
      render()
    })
    $('#settings-music').addEventListener('click', toggleMusic)
    $('#edit-name').addEventListener('click', () => {
      state.page = 'intro'
      render()
    })
  }
}

render()

