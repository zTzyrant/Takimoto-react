export let isFAls = false;

export function checkDarkMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  console.log("test dark mode");

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    // document.documentElement.setAttribute("color-theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    // document.documentElement.setAttribute("color-theme", "light");
    document.documentElement.classList.remove("dark");
  }
}

export function setIsFAls() {
  isFAls = !isFAls;
}
