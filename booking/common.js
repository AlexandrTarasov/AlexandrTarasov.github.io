// Shared by both pages: translations, theme/language toggles, calendar grid.

const I18N = {
  en: {
    tagline: "booking calendar",
    lightBtn: "Light", darkBtn: "Dark",
    days: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    todayBtn: "Today",
    legBooked: "Booked", legDone: "Completed",
    adminLink: "Admin",
    roleCustomer: "Taken times are shown below. To book a session, contact the teacher.",
    loadErr: "Could not load the schedule. Please try again later.",
    // admin: login
    loginTitle: "Administrator access", loginHint: "Enter the password to open the admin page.",
    pwPlaceholder: "Password", loginBtn: "Log in", logout: "Log out",
    pwIncorrect: (n) => `Incorrect password. ${n} ${n === 1 ? "try" : "tries"} left.`,
    pwLocked: (t) => `Too many incorrect attempts. Try again in ${t}.`,
    hUnit: "h", mUnit: "m",
    // admin: folder connection
    connectTitle: "Connect your data folder",
    connectHint: "Choose the folder (your GitHub repo folder) that holds students.json and bookings.json. Missing files are created automatically.",
    chooseFolder: "Choose folder", reconnectFolder: (n) => `Reconnect to “${n}”`,
    connUnsupported: "This browser can't save files directly. Use Vivaldi, Chrome or Edge.",
    connDenied: "Permission to the folder was not granted.",
    connFail: "Could not open the folder",
    saveErr: "Could not save to the folder. Check that it still exists and try reconnecting.",
    // admin: page
    roleAdmin: "Admin view — tick a lesson when it is completed, × deletes a booking. Changes are saved to the JSON files right away; commit bookings.json to publish.",
    tickDone: "Mark as completed", delBooking: "Delete booking",
    nbTitle: "New booking", nbSub: "Only you can add bookings: one lesson or a whole series. Checked for overlaps.",
    lblStudent: "Student", pickStudent: "Choose a student…", lblDate: "Date", lblStart: "Start time", lblDur: "Duration",
    durOpts: ["30 min","50 min"], bookBtn: "Add booking",
    errNoStudent: "Choose a student (add one below first).", errDate: "Pick a date.",
    errClosing: "A lesson can start between 8am and 7:30pm.",
    errPrice: "Enter a lesson price of 0 or more.",
    received: "Received",
    errBreak: "That time falls in the break (12pm–2pm).",
    errCount: "Enter a number of lessons from 1 to 60.",
    errDays: "Pick at least one weekday for several lessons.",
    errNoSlots: "Could not find free slots for all the lessons. Nothing was added.",
    lblCount: "Number of lessons", lblPrice: "Lesson price ($)", lblRepeat: "Repeat on",
    repeatHint: "Pick weekdays for a series (it starts from the date above), or leave empty for a single date. Busy days are skipped.",
    countPaid: "These lessons are paid (adds them to “Paid”)",
    okBulk: (n) => `${n} lessons added.`,
    okSkipped: (list) => ` Skipped (already busy): ${list}.`,
    errConflict: "That time overlaps an existing booking.",
    okBooked: "Booking added.",
    stTitle: "Students", stSub: "Saved in students.json — keep this file private, don't commit it.",
    addStudentTitle: "Add a student", lblName: "Name", namePh: "e.g. Jordan Lee",
    lblContact: "Contact info", contactTypes: ["Phone number","Email","Telegram link","WhatsApp link"],
    contactPh: ["e.g. +1 555 123 4567","e.g. jordan.lee@example.com","e.g. https://t.me/jordanlee","e.g. https://wa.me/15551234567"],
    lblPaid: "Paid lessons", addStudentBtn: "Save student",
    errName: "Enter the student's name.", errContact: "Enter a contact.", okStudent: "Student saved.",
    noStudents: "No students yet.",
    paid: "Paid", done: "Done", left: "Left", adjustPaid: "Paid lessons",
    confirmDelBooking: (n) => `Delete the booking for ${n}?`,
    confirmDelStudent: (n) => `Delete ${n} and all their bookings?`,
    deleteStudent: "Delete", showStudentDetails: "Show student details", hideStudentDetails: "Hide student details",
    editStudentName: "Edit name", save: "Save", cancel: "Cancel",
  },
  ru: {
    tagline: "календарь записи",
    lightBtn: "Светлая", darkBtn: "Тёмная",
    days: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
    months: ["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"],
    todayBtn: "Сегодня",
    legBooked: "Занято", legDone: "Проведено",
    adminLink: "Админ",
    roleCustomer: "Ниже показано занятое время. Чтобы записаться, свяжитесь с преподавателем.",
    loadErr: "Не удалось загрузить расписание. Попробуйте позже.",
    loginTitle: "Доступ администратора", loginHint: "Введите пароль, чтобы открыть страницу администратора.",
    pwPlaceholder: "Пароль", loginBtn: "Войти", logout: "Выйти",
    pwIncorrect: (n) => `Неверный пароль. Осталось попыток: ${n}.`,
    pwLocked: (t) => `Слишком много неверных попыток. Повторите через ${t}.`,
    hUnit: "ч", mUnit: "мин",
    connectTitle: "Подключите папку с данными",
    connectHint: "Выберите папку (папку вашего репозитория GitHub), где лежат students.json и bookings.json. Отсутствующие файлы создаются автоматически.",
    chooseFolder: "Выбрать папку", reconnectFolder: (n) => `Подключиться к «${n}»`,
    connUnsupported: "Этот браузер не может сохранять файлы напрямую. Используйте Vivaldi, Chrome или Edge.",
    connDenied: "Доступ к папке не предоставлен.",
    connFail: "Не удалось открыть папку",
    saveErr: "Не удалось сохранить в папку. Проверьте, что она существует, и подключитесь заново.",
    roleAdmin: "Режим администратора — отметьте урок галочкой, когда он проведён; × удаляет запись. Изменения сразу сохраняются в JSON-файлы; чтобы опубликовать, закоммитьте bookings.json.",
    tickDone: "Отметить как проведённый", delBooking: "Удалить запись",
    nbTitle: "Новая запись", nbSub: "Записи добавляете только вы: один урок или целая серия. Проверяется на пересечения.",
    lblStudent: "Ученик", pickStudent: "Выберите ученика…", lblDate: "Дата", lblStart: "Время начала", lblDur: "Длительность",
    durOpts: ["30 мин","50 мин"], bookBtn: "Добавить запись",
    errNoStudent: "Выберите ученика (сначала добавьте его ниже).", errDate: "Выберите дату.",
    errClosing: "Урок может начинаться с 8:00 до 19:30.",
    errPrice: "Введите цену урока (0 или больше).",
    received: "Получено",
    errBreak: "Это время попадает на перерыв (12:00–14:00).",
    errCount: "Введите количество уроков от 1 до 60.",
    errDays: "Для нескольких уроков выберите хотя бы один день недели.",
    errNoSlots: "Не удалось найти свободное время для всех уроков. Ничего не добавлено.",
    lblCount: "Количество уроков", lblPrice: "Цена урока ($)", lblRepeat: "Повторять по дням",
    repeatHint: "Выберите дни недели для серии (она начинается с даты выше) или оставьте пустым для одной даты. Занятые дни пропускаются.",
    countPaid: "Эти уроки оплачены (добавить в «Оплачено»)",
    okBulk: (n) => `Добавлено уроков: ${n}.`,
    okSkipped: (list) => ` Пропущено (уже занято): ${list}.`,
    errConflict: "Это время пересекается с существующей записью.",
    okBooked: "Запись добавлена.",
    stTitle: "Ученики", stSub: "Хранятся в students.json — держите файл приватным, не коммитьте его.",
    addStudentTitle: "Добавить ученика", lblName: "Имя", namePh: "например, Иван Петров",
    lblContact: "Контакт", contactTypes: ["Номер телефона","Email","Ссылка Telegram","Ссылка WhatsApp"],
    contactPh: ["например, +7 999 123 45 67","например, ivan.petrov@example.com","например, https://t.me/ivanpetrov","например, https://wa.me/79991234567"],
    lblPaid: "Оплачено уроков", addStudentBtn: "Сохранить ученика",
    errName: "Введите имя ученика.", errContact: "Введите контакт.", okStudent: "Ученик сохранён.",
    noStudents: "Пока нет учеников.",
    paid: "Оплачено", done: "Проведено", left: "Осталось", adjustPaid: "Оплаченные уроки",
    confirmDelBooking: (n) => `Удалить запись ученика ${n}?`,
    confirmDelStudent: (n) => `Удалить ученика ${n} и все его записи?`,
    deleteStudent: "Удалить", showStudentDetails: "Показать данные ученика", hideStudentDetails: "Скрыть данные ученика",
    editStudentName: "Изменить имя", save: "Сохранить", cancel: "Отмена",
  },
};

// -- tiny helpers ---------------------------------------------------------
function safeGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function safeSet(k, v) { try { localStorage.setItem(k, v); } catch {} }
let lang = safeGet("ledgerLang") === "ru" ? "ru" : "en";
function L() { return I18N[lang]; }
const $ = (id) => document.getElementById(id);
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Lessons may start from 8am to 7:30pm. The break 12pm-2pm is not bookable and is hidden from the grid.
const OPEN_H = 8, LAST_START = 19.5, BREAK_START = 12, BREAK_END = 14;
const HOURS = [8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20]; // start of each visible row
const ROW_H = 64;
function yOf(hour) { // vertical position of a time, skipping the hidden break
  if (hour <= BREAK_START) return (hour - OPEN_H) * ROW_H;
  if (hour < BREAK_END) return (BREAK_START - OPEN_H) * ROW_H;
  return (hour - OPEN_H - (BREAK_END - BREAK_START)) * ROW_H;
}
// null if the slot is allowed, otherwise "closing" or "break"
function slotError(start, end) {
  if (start < OPEN_H || start > LAST_START) return "closing";
  if (start < BREAK_END && end > BREAK_START) return "break";
  return null;
}

function startOfWeek(date) {
  const d = new Date(date);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  d.setHours(0, 0, 0, 0);
  return d;
}
const pad = (n) => String(n).padStart(2, "0");
function ymd(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
function parseYmd(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
function fmtTime(hour) {
  const h = Math.floor(hour), m = Math.round((hour - h) * 60);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return (m === 0 ? `${h12}` : `${h12}:${pad(m)}`) + (h >= 12 ? "PM" : "AM");
}

// Fill every [data-i18n] / [data-i18n-ph] element from the current language.
function applyI18n() {
  const t = L();
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = t[el.dataset.i18n]; if (typeof v === "string") el.textContent = v; });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { const v = t[el.dataset.i18nPh]; if (typeof v === "string") el.placeholder = v; });
  document.documentElement.lang = lang;
}

// Wires the EN/RU and Light/Dark toggles. onLang runs after a language change.
function initChrome(onLang) {
  const setTheme = (dark) => {
    document.documentElement.classList.toggle("dark", dark);
    $("lightBtn").classList.toggle("active", !dark);
    $("darkBtn").classList.toggle("active", dark);
    safeSet("ledgerTheme", dark ? "dark" : "light");
  };
  const setLang = (next) => {
    lang = next;
    safeSet("ledgerLang", next);
    $("enBtn").classList.toggle("active", next === "en");
    $("ruBtn").classList.toggle("active", next === "ru");
    applyI18n();
    onLang();
  };
  $("lightBtn").onclick = () => setTheme(false);
  $("darkBtn").onclick = () => setTheme(true);
  $("enBtn").onclick = () => setLang("en");
  $("ruBtn").onclick = () => setLang("ru");
  setTheme(safeGet("ledgerTheme") === "dark");
  $("enBtn").classList.toggle("active", lang === "en");
  $("ruBtn").classList.toggle("active", lang === "ru");
  applyI18n();
}

function updateRange(weekStart) {
  const t = L();
  const first = new Date(weekStart), last = new Date(weekStart);
  last.setDate(last.getDate() + 6);
  const a = `${t.months[first.getMonth()]} ${first.getDate()}`;
  const b = first.getMonth() === last.getMonth() ? `${last.getDate()}` : `${t.months[last.getMonth()]} ${last.getDate()}`;
  $("rangeLabel").textContent = `${a} – ${b}, ${last.getFullYear()}`;
}

// Draws the week grid. Visitors see name only; admin also gets time, tools and completed styling.
function renderCalendar(weekStart, bookings, admin) {
  const t = L();
  const days = Array.from({ length: 7 }, (_, i) => { const d = new Date(weekStart); d.setDate(d.getDate() + i); return d; });
  const todayStr = new Date().toDateString();
  let html = `<div class="head-cell"></div>`;
  days.forEach((d, i) => {
    const isToday = d.toDateString() === todayStr;
    html += `<div class="head-cell${isToday ? " today" : ""}"><div class="dow">${t.days[i]}</div><div class="num">${d.getDate()}</div></div>`;
  });
  html += `<div>` + HOURS.map(h => `<div class="time-cell">${fmtTime(h)}</div>`).join("") + `</div>`;

  days.forEach(d => {
    const key = ymd(d);
    let inner = "";
    bookings.filter(b => b.date === key).forEach(b => {
      // Block height matches the lesson length exactly (1px gap top and bottom).
      const top = yOf(b.start) + 1;
      const height = yOf(b.end) - yOf(b.start) - 2;
      const long = b.end - b.start > 0.6;   // 50 min or more: room for the time line
      const short = !long;
      const tools = admin ? `<div class="tools">
          <input type="checkbox" data-act="done" data-id="${esc(b.id)}" ${b.done ? "checked" : ""} title="${esc(t.tickDone)}">
          <button data-act="del" data-id="${esc(b.id)}" title="${esc(t.delBooking)}">&times;</button>
        </div>` : "";
      const time = admin && long ? `<div class="time">${fmtTime(b.start)} – ${fmtTime(b.end)}</div>` : "";
      inner += `<div class="ticket${short ? " short" : ""}${admin ? " admin" : ""}${admin && b.done ? " done" : ""}" style="top:${top}px;height:${height}px">
        <div class="client">${esc(b.name)}</div>${time}${tools}</div>`;
    });
    html += `<div class="day-col" style="height:${HOURS.length * ROW_H}px">${inner}</div>`;
  });
  $("calGrid").innerHTML = html;
}
