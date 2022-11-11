
// ---------------   toggle style switcher -----------------

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
let count = 0;

styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
  
  if (count === 0) {
        count = 1
        document.querySelector(".color-5").style.display = 'block';
        document.querySelector(".style-switcher img").style.marginTop = '3px';
    } else {
        count--
        document.querySelector(".color-5").style.display = 'none';
        document.querySelector(".style-switcher img").style.marginTop = '23px';
    }
})

window.addEventListener("scroll", () => {
  if(document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
    document.querySelector(".color-5").style.display = 'none';
    document.querySelector(".style-switcher img").style.marginTop = '23px';
    count = 0
  };
})

// Theme colors switcher

const alternateStyle = document.querySelectorAll(".alternate-style")
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if(color === style.getAttribute('title')) {
      style.removeAttribute("disabled");
    }
    else {
      style.setAttribute("disabled", "true");
    }
  });
};



