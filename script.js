
/* =========================================
   ПРОЕКТИ
========================================= */

const projects = [
  {
    title: 'BarnBoss',
    type: 'solo',
    categoryLabel: 'Самостоятелен проект',

    description:
      'Конзолна игра за управление на виртуална ферма с растения, животни, търговия, задачи и запазване на прогреса.',

    technologies: ['C++', 'ООП', 'STL'],

    icon: '✿',
    color: 'yellow',

    problem:
      'Създаване на интерактивна система за управление на виртуална ферма, която съчетава различни игрови механики, управление на ресурси и потребителски роли.',

    architecture:
      'Обектно-ориентирана архитектура с класове, наследяване, полиморфизъм и капсулация. Използвани са STL контейнери, различни потребителски роли и механизъм за запазване и възстановяване на данните.',

    contribution:
      'Проектът е изцяло самостоятелен. Проектирах архитектурата и реализирах всички функционалности — игровата логика, управлението на фермата, търговията, задачите, потребителските роли и съхраняването на прогреса.',

    github: 'https://github.com/addie230/Barn-Boss'
  },

  {
    title: '2048',
    type: 'solo',
    categoryLabel: 'Самостоятелен проект',

    description:
      'Конзолна логическа игра с различни размери на игралното поле, управление чрез клавиатурата и класация на резултатите.',

    technologies: ['C++', 'Алгоритми', 'Работа с файлове'],

    icon: '2048',
    color: 'pink',

    problem:
      'Реализиране на логиката на играта 2048 с коректно движение и обединяване на плочките, изчисляване на резултата и различни размери на игралното поле.',

    architecture:
      'Конзолно приложение с логика за управление на игралното поле, обработка на потребителския вход, изчисляване на резултата и съхраняване на класация с петте най-добри резултата за всеки размер.',

    contribution:
      'Проектът е изцяло самостоятелен. Разработих алгоритмите за движение и обединяване на плочките, конзолния интерфейс, обработката на входа и системата за класации.',

    github: 'https://github.com/addie230/2048'
  },

  {
    title: 'AI DOC',
    type: 'team',
    categoryLabel: 'Екипен проект',

    description:
      'Уеб платформа за анализ на лабораторни резултати, намиране на аптеки и лекарства и записване на часове при лекари.',

    
    technologies: ['Python', 'Streamlit', 'SQL', 'UI/UX Design', 'AI'],

    icon: '✚',
    color: 'green',

    problem:
      'Улесняване на достъпа до здравна информация и медицински услуги чрез обединяването им в една уеб платформа.',

    architecture:
      'Уеб приложение с потребителски интерфейс и backend функционалности. Платформата включва обработка на лабораторни резултати с AI, откриване на близки аптеки, проверка на наличността на лекарства и записване на часове при лекари с регистрирани профили в системата.',

    contribution:
      'Проектът е екипен. Работих основно по frontend частта и потребителския интерфейс, участвах в разработването на отделни backend функционалности и самостоятелно изготвих цялата проектна документация.',

    github: ''
  },

  {
    title: 'ClassNet',
    type: 'team',
    categoryLabel: 'Екипен проект',

    description:
      'Приложение за наблюдение на активността на ученическите компютри по време на учебни занятия.',

    technologies: ['Rust', 'SQL', 'SQLite'],

    icon: '⌘',
    color: 'orange',

    problem:
      'Предоставяне на преподавателите възможност да наблюдават компютърната активност по време на учебни занятия.',

    architecture:
      'Система с приложение, инсталирано на ученическите компютри, и преподавателски интерфейс за наблюдение на активността в учебна среда.',

    contribution:
      'Проектът е екипен. Работих предимно по frontend частта и потребителския интерфейс, както и по отделни backend функционалности.',

    github: ''
  },

  {
    title: 'Sign Language Translator',
    type: 'solo',
    categoryLabel: 'Самостоятелен проект',

    description:
      'Приложение, което разпознава говорима реч чрез микрофон и показва съответните изображения на жестове от жестов език.',

    technologies: ['Python', 'SpeechRecognition', 'Pillow'],

    icon: '✋',
    color: 'cyan',

    problem:
      'Изследване на възможностите за по-достъпна комуникация чрез визуално представяне на говорима реч.',

    architecture:
      'Приложението приема говорим вход от микрофон, обработва разпознатия текст и визуализира последователност от изображения, съответстващи на жестове.',

    contribution:
      'Проектът е изцяло самостоятелен. Разработих обработката на входа от микрофона, логиката за преобразуване на разпознатата реч и визуализацията на изображенията.',

    github: ''
  },
   
  
{
  title: 'VoxDB',
  type: 'team',
  categoryLabel: 'Екипен проект',

  description:
    'Уеб платформа за работа с MySQL бази данни чрез въпроси на естествен език, които автоматично се преобразуват в SQL заявки.',

  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Flask',
    'MySQL',
    'Firebase',
    'Tailwind CSS'
  ],

  icon: '▦',
  color: 'violet',

  problem:
    'Улесняване на работата с бази данни чрез предоставяне на интуитивен интерфейс за генериране на SQL заявки, преглед на таблици и анализ на информация.',

  architecture:
    'Клиент-сървър архитектура с Next.js, React и TypeScript за frontend частта, Flask API за backend функционалностите, MySQL за съхранение на данни и Firebase Authentication за удостоверяване на потребителите. Приложението позволява визуализация на таблици и автоматично генериране на SQL заявки.',

  contribution:
    'Проектът е екипен. Участвах в различни етапи от разработката, като работих както по потребителския интерфейс, така и по backend функционалности, интеграцията между компонентите и тестването на приложението.',

  github: ''
}

];


/* =========================================
   ОСНОВНИ ЕЛЕМЕНТИ
========================================= */

const grid = document.querySelector('#projects-grid');

const dialog = document.querySelector('#project-dialog');

const dialogContent = document.querySelector('#dialog-content');

const filters = [
  ...document.querySelectorAll('.filter')
];


/* =========================================
   ЗАЩИТА НА HTML СЪДЪРЖАНИЕТО
========================================= */

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));


/* =========================================
   ПОКАЗВАНЕ НА ПРОЕКТИТЕ
========================================= */

function renderProjects(category = 'all') {

  const selected = projects
    .map((project, index) => ({
      ...project,
      index
    }))
    .filter((project) => {
      if (category === 'all') return true;

      return project.type === category;
    });

  grid.innerHTML = selected.map((project) => `

    <article class="project-card">

      <div class="project-art art-${
        ['violet', 'cyan', 'pink', 'orange', 'green', 'yellow'].includes(project.color)
          ? project.color
          : 'violet'
      }">
        <span>${escapeHTML(project.icon)}</span>
      </div>

      <div class="project-body">

        <span class="project-meta">
          ${escapeHTML(project.categoryLabel)}
        </span>

        <h3>${escapeHTML(project.title)}</h3>

        <p>${escapeHTML(project.description)}</p>

        <div class="project-tags">
          ${project.technologies.map((technology) => `
            <span>${escapeHTML(technology)}</span>
          `).join('')}
        </div>

        <div class="project-actions">

          <button
            type="button"
            data-project="${project.index}"
          >
            Виж детайли ↗
          </button>

          ${project.github ? `
            <a
              href="${escapeHTML(project.github)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          ` : ''}

        </div>

      </div>

    </article>

  `).join('');

  if (!selected.length) {
    grid.innerHTML =
      '<p>Все още няма проекти в тази категория.</p>';
  }
}


/* =========================================
   ФИЛТРИ НА ПРОЕКТИТЕ
========================================= */

filters.forEach((button) => {

  button.addEventListener('click', () => {

    filters.forEach((filterButton) => {
      filterButton.classList.remove('active');

      filterButton.setAttribute(
        'aria-pressed',
        'false'
      );
    });

    button.classList.add('active');

    button.setAttribute(
      'aria-pressed',
      'true'
    );

    renderProjects(button.dataset.filter);

  });

});


/* =========================================
   ПОДРОБНО ОПИСАНИЕ НА ПРОЕКТ
========================================= */

grid.addEventListener('click', (event) => {

  const button = event.target.closest('[data-project]');

  if (!button) return;

  const project = projects[Number(button.dataset.project)];

  if (!project) return;

  dialogContent.innerHTML = `

    <span class="section-index">
      ${escapeHTML(project.categoryLabel)}
    </span>

    <h2 id="dialog-title">
      ${escapeHTML(project.title)}
    </h2>

    <p>${escapeHTML(project.description)}</p>

    <h3>${['BarnBoss', '2048'].includes(project.title) ? 'Цел на проекта' : 'Какъв проблем решава?'}</h3>

    <p>${escapeHTML(project.problem)}</p>

    <h3>Архитектура и функционалности</h3>

    <p>${escapeHTML(project.architecture)}</p>

    <h3>Моят принос</h3>

    <p>${escapeHTML(project.contribution)}</p>

    <h3>Технологии</h3>

    <div class="project-tags">

      ${project.technologies.map((technology) => `
        <span>${escapeHTML(technology)}</span>
      `).join('')}

    </div>

    ${project.github ? `
      <a
        class="dialog-link"
        href="${escapeHTML(project.github)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Виж кода в GitHub ↗
      </a>
    ` : ''}

  `;

  dialog.showModal();

  document.body.classList.add('modal-open');

});


/* =========================================
   ЗАТВАРЯНЕ НА ПРОЗОРЕЦА
========================================= */

document
  .querySelector('#dialog-close')
  .addEventListener('click', () => {
    dialog.close();
  });

dialog.addEventListener('click', (event) => {

  if (event.target === dialog) {
    dialog.close();
  }

});

dialog.addEventListener('close', () => {

  document.body.classList.remove('modal-open');

});


/* =========================================
   МОБИЛНО МЕНЮ
========================================= */

const menuButton = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {

  const open = navLinks.classList.toggle('open');

  menuButton.setAttribute(
    'aria-expanded',
    String(open)
  );

  menuButton.textContent = open ? '×' : '☰';

});

navLinks.querySelectorAll('a').forEach((link) => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('open');

    menuButton.setAttribute(
      'aria-expanded',
      'false'
    );

    menuButton.textContent = '☰';

  });

});


/* =========================================
   АНИМАЦИИ ПРИ СКРОЛВАНЕ
========================================= */

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          observer.unobserve(entry.target);

        }

      });

    }, { threshold: 0.08 })
  : null;

document.querySelectorAll('.reveal').forEach((element) => {

  if (observer) {
    observer.observe(element);
  } else {
    element.classList.add('visible');
  }

});


/* =========================================
   АНИМИРАН ТЕКСТ В НАЧАЛОТО
========================================= */

const words = [
  'Превръщам идеи в код.',
  'Уча, експериментирам, създавам.',
  'Развивам се като програмист.'
];

const typed = document.querySelector('#typed-text');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

  let word = 0;

  let length = words[0].length;

  let deleting = true;

  const tick = () => {

    const current = words[word];

    typed.textContent = current.slice(0, length);

    if (deleting) {
      length--;
    } else {
      length++;
    }

    if (length < 0) {

      deleting = false;

      word = (word + 1) % words.length;

      length = 0;

    } else if (length > current.length) {

      deleting = true;

      length = current.length;

      setTimeout(tick, 1600);

      return;

    }

    setTimeout(
      tick,
      deleting ? 45 : 85
    );

  };

  setTimeout(tick, 1900);

}


/* =========================================
   ГОДИНА ВЪВ FOOTER
========================================= */

document.querySelector('#year').textContent =
  new Date().getFullYear();


/* =========================================
   ПЪРВОНАЧАЛНО ЗАРЕЖДАНЕ
========================================= */

renderProjects();
