export default function scrollSuave() {
  const body = document.body;
  const nav = document.getElementById("nav");
  const linksInterno = document.querySelectorAll("#menu li a");
  console.log(linksInterno);
  function scrolar(i) {
    i.preventDefault();
    const href = i.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    body.classList.remove("menu-active");
    nav.classList.remove("active");
  }

  linksInterno.forEach((item) => {
    item.addEventListener("click", scrolar);
  });
}
