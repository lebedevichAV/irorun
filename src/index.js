import "normalize.css";
import "@styles";

let nav_links = document.querySelectorAll(".navigation__link");

for (let nav_link of nav_links) {
  nav_link.addEventListener("mouseover", () => {
    nav_link.classList.toggle("navigation__link_active");
  });
  nav_link.addEventListener("mouseout", () => {
    nav_link.classList.toggle("navigation__link_active");
  });
}
