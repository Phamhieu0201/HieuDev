const text = document.querySelector(".js_textName");
const navMenu = document.getElementById("js_navMenu");
const closeMenu = document.getElementById("js_closeMenu");
const js_menu = document.getElementById("js_menu");
const body = document.body; // Lấy phần tử body

navMenu.addEventListener("click", () => {
  js_menu.classList.remove("right-[-100%]");
  js_menu.classList.add("right-0");
});

closeMenu.addEventListener("click", () => {
  js_menu.classList.remove("right-0");
  js_menu.classList.add("right-[-100%]");
});

const textLoat = () => {
  setTimeout(() => {
    text.textContent = "HIEU";
  }, 0);
  setTimeout(() => {
    text.textContent = "VAN";
  }, 4000);
  setTimeout(() => {
    text.textContent = "PHAM";
  }, 8000);
};

textLoat();
setInterval(textLoat, 12000);
