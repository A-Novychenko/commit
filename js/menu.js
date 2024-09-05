const openBtnRef = document.querySelector("[data-open-menu]");
const closeBtnRef = document.querySelector("[data-close-menu]");
const backdropRef = document.querySelector("[data-backdrop]");

openBtnRef.addEventListener("click", openMenu);

function openMenu() {
  backdropRef.classList.remove("is-hidden");
  closeBtnRef.addEventListener("click", closeMenu);
  backdropRef.addEventListener("click", clickBackdropCloseMenu);
}

function closeMenu() {
  backdropRef.classList.add("is-hidden");
  closeBtnRef.removeEventListener("click", openMenu);
  backdropRef.removeEventListener("click", clickBackdropCloseMenu);
}

function clickBackdropCloseMenu(e) {
  if (e.target === e.currentTarget || e.target.tagName === "A") {
    closeMenu();
  }
}
