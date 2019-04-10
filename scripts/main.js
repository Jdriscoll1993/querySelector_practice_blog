const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to the Joey Driscoll Blog";

const header = document.querySelectorAll(".article__header");

for (let i = 0; i < header.length; i++){
    header[i].classList.add("important");
}

const dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

// document.querySelector(".dashed").remove(); === alternative to above code without declaring a const variable.

const artFooter = document.querySelector(".article__footer");
artFooter.classList.add("goldenrod");







