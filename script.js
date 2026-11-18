const themeBtn = document.getElementById("themeBtn");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (theme === "dark") {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }

  localStorage.setItem("theme", theme);
}

let savedTheme = localStorage.getItem("theme");

if (savedTheme === null) {
  savedTheme = "light";
}

setTheme(savedTheme);

themeBtn.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

// ================= ПРИВЕТСТВИЕ И ИМЯ ПОЛЬЗОВАТЕЛЯ =================
const greetingEl = document.getElementById('greeting');
const askNameBtn = document.getElementById('askName');
const heroNameEl = document.getElementById('heroName'); // Нашли имя в главном заголовке

// Имя по умолчанию, если пользователь еще не представился
const defaultName = "Nurel Zhekshenov"; 

// Функция определения времени суток
function getTimeGreeting() {
  const hours = new Date().getHours();
  if (hours >= 5 && hours < 12) {
    return "Доброе утро";
  } else if (hours >= 12 && hours < 18) {
    return "Добрый день";
  } else if (hours >= 18 && hours < 23) {
    return "Добрый вечер";
  } else {
    return "Доброй ночи";
  }
}

// Функция показа приветствия и обновления всех текстов
function showGreeting() {
  const timeText = getTimeGreeting();
  const savedName = localStorage.getItem('visitorName');

  if (savedName) {
    // Если имя сохранено:
    greetingEl.textContent = `${timeText}, ${savedName}!`;
    heroNameEl.textContent = savedName; // Меняем имя в главном заголовке
    document.title = `${savedName} - Portfolio`; // Меняем тайтл вкладки браузера
    askNameBtn.textContent = "Сменить имя";
  } else {
    // Если имя не сохранено (сброшено):
    greetingEl.textContent = `${timeText}!`;
    heroNameEl.textContent = defaultName; // Возвращаем твоё имя по умолчанию
    document.title = `Zhekshenov Nurel - Portfolio`; // Возвращаем исходный тайтл
    askNameBtn.textContent = "Представиться";
  }
}

// Функция запроса имени
function askName() {
  const name = prompt('Как тебя зовут?');
  if (name && name.trim() !== "") {
    localStorage.setItem('visitorName', name.trim());
  } else {
    localStorage.removeItem('visitorName');
  }
  showGreeting();
}

// Клик по кнопке "Представиться" / "Сменить имя"
askNameBtn.addEventListener('click', askName);

// Показываем приветствие при загрузке страницы
showGreeting();



// ================= БУРГЕР-МЕНЮ =================
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Закрываем меню и обеспечиваем плавный переход при клике на ссылки
const navLinks = nav.querySelectorAll("a");

for (const link of navLinks) {
  link.addEventListener("click", function (e) {
    // Сначала плавно закрываем мобильное меню
    nav.classList.remove("open");
  });
}

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent  = "Заполните все поля";
    formMessage.style.color = "red";
  } else if (email.includes("@") === false) {
    formMessage.textContent = "Email должен содержать @";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Спасибо, " + name + "! Сообщение отправлено.";
    formMessage.style.color = "green";
    form.reset();
  }
});


const toTop = document.getElementById("toTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
