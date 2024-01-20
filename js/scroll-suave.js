export default function scrollSuave() {
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
  }

  linksInterno.forEach((item) => {
    item.addEventListener("click", scrolar);
  });
}
