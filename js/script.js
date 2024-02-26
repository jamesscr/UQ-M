let header = document.getElementById("menu_header");
let section = header.getElementsByClassName("menu_item");
let myEl = document.getElementById("content").children;

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function ({ target }) {
    let id = target.getAttribute("href").split("#").pop();
    let el = document.getElementById(id);
    console.log(el);
    let currentMenu = document.getElementsByClassName("active");
    let currentContent = document.getElementsByClassName("show");
    currentMenu[0].className = currentMenu[0].className.replace(" active", "");
    this.className += " active";
    if (this.className.indexOf("active")) {
      currentContent[0].className = currentContent[0].className.replace(
        " show",
        ""
      );

      el.className += " show";
      console.log(el.className);
    }
    // console.log(el.className += " show")
  });
}
