// ===== РЕДАКТИРАЙ ТУК: ТВОИТЕ ПРОЕКТИ =====
// category: "web", "backend" или "desktop"; color: "violet", "cyan" или "orange".
// Ако нямаш публичен GitHub линк, остави github: "".
const projects = [
  {
    title: 'TaskFlow', category: 'web', categoryLabel: 'Уеб приложение',
    description: 'Приложение за организиране на задачи с приоритети, категории и статуси.',
    technologies: ['HTML', 'CSS', 'JavaScript'], icon: '✓', color: 'violet',
    problem: 'Трудно е да следим множество задачи и срокове на едно място.',
    architecture: 'Клиентско приложение с отделни слоеве за интерфейс и логика.',
    contribution: 'Изграждане на интерфейса, управление на задачите и филтриране.',
    github: ''
  },
  {
    title: 'Library API', category: 'backend', categoryLabel: 'Backend система',
    description: 'Система за управление на книги, читатели и заемания.',
    technologies: ['Java', 'SQL', 'REST'], icon: '{ }', color: 'cyan',
    problem: 'Необходимост от централизирано управление на библиотечен каталог.',
    architecture: 'REST API, бизнес логика и релационна база данни.',
    contribution: 'Проектиране на модели, заявки към базата данни и API маршрути.',
    github: ''
  },
  {
    title: 'Budget Tracker', category: 'desktop', categoryLabel: 'Desktop приложение',
    description: 'Инструмент за записване и анализ на лични разходи.',
    technologies: ['Python', 'SQLite'], icon: '↗', color: 'orange',
    problem: 'Липса на лесен начин за категоризиране на ежедневните разходи.',
    architecture: 'Локално приложение с SQLite база данни.',
    contribution: 'Разработка на логиката за записи, категории и справки.',
    github: ''
  }
];
// ===== КРАЙ НА ДАННИТЕ ЗА ПРОЕКТИТЕ =====

const grid = document.querySelector('#projects-grid');
const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
const filters = [...document.querySelectorAll('.filter')];
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderProjects(category = 'all') {
  const selected = projects.map((project, index) => ({...project, index})).filter(project => category === 'all' || project.category === category);
  grid.innerHTML = selected.map(p => `
    <article class="project-card">
      <div class="project-art art-${['violet','cyan','orange'].includes(p.color) ? p.color : 'violet'}"><span>${escapeHTML(p.icon)}</span></div>
      <div class="project-body"><span class="project-meta">${escapeHTML(p.categoryLabel)}</span><h3>${escapeHTML(p.title)}</h3>
      <p>${escapeHTML(p.description)}</p><div class="project-tags">${p.technologies.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div>
      <div class="project-actions"><button type="button" data-project="${p.index}">Виж детайли ↗</button>${p.github ? `<a href="${escapeHTML(p.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ''}</div></div>
    </article>`).join('');
  if (!selected.length) grid.innerHTML = '<p>Все още няма проекти в тази категория.</p>';
}
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed','true'); renderProjects(button.dataset.filter);
}));
grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]'); if (!button) return;
  const p = projects[Number(button.dataset.project)]; if (!p) return;
  dialogContent.innerHTML = `<span class="section-index">${escapeHTML(p.categoryLabel)}</span><h2 id="dialog-title">${escapeHTML(p.title)}</h2><p>${escapeHTML(p.description)}</p><h3>Какъв проблем решава?</h3><p>${escapeHTML(p.problem)}</p><h3>Архитектура</h3><p>${escapeHTML(p.architecture)}</p><h3>Моят принос</h3><p>${escapeHTML(p.contribution)}</p><h3>Технологии</h3><div class="project-tags">${p.technologies.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>${p.github ? `<a class="dialog-link" href="${escapeHTML(p.github)}" target="_blank" rel="noopener noreferrer">Виж кода в GitHub ↗</a>` : ''}`;
  dialog.showModal(); document.body.classList.add('modal-open');
});
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.textContent = open ? '×' : '☰'; });
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); menuButton.textContent = '☰'; }));

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.08}) : null;
document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

const words = [
  "Превръщам идеи в код.",
  "Уча, експериментирам, създавам.",
  "Развивам се като програмист."
];
const typed = document.querySelector('#typed-text');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let word = 0, length = words[0].length, deleting = true;
  const tick = () => { const current = words[word]; typed.textContent = current.slice(0, length); if (deleting) length--; else length++;
    if (length < 0) { deleting = false; word = (word + 1) % words.length; length = 0; }
    else if (length > current.length) { deleting = true; length = current.length; setTimeout(tick, 1600); return; }
    setTimeout(tick, deleting ? 45 : 85);
  }; setTimeout(tick, 1900);
}
document.querySelector('#year').textContent = new Date().getFullYear();
renderProjects();
