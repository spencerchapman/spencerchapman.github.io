const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

const saved = localStorage.getItem("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (saved === "dark" || (!saved && systemDark)) {
  root.classList.add("dark");
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
