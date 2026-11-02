// Public calendar: read-only. Reads bookings.json (published with the site)
// and shows taken blocks with the student's name only.

let weekStart = startOfWeek(new Date());
let bookings = [];

function render() {
  updateRange(weekStart);
  renderCalendar(weekStart, bookings, false);
}

async function refresh() {
  const err = $("loadErr");
  try {
    const res = await fetch("bookings.json", { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    bookings = Array.isArray(data) ? data : [];
    err.classList.remove("show");
  } catch {
    err.textContent = L().loadErr;
    err.classList.add("show");
  }
  render();
}

$("prevBtn").onclick = () => { weekStart.setDate(weekStart.getDate() - 7); render(); };
$("nextBtn").onclick = () => { weekStart.setDate(weekStart.getDate() + 7); render(); };
$("todayBtn").onclick = () => { weekStart = startOfWeek(new Date()); render(); };

initChrome(render);
refresh();
setInterval(refresh, 5 * 60000);
