let btn = document.querySelector(".addBtn");
let color = document.querySelector("#color");
let list = document.querySelector("ul")

btn.addEventListener("click", function() {
    let item = document.createElement("div");
    item.classList.add("note");

    let span = document.createElement("span");
    span.innerText = 'x';
    span.classList.add("delete");

    let textaera = document.createElement("textarea");
    textaera.setAttribute("rows", 11);
    textaera.setAttribute("cols", 27);
    textaera.setAttribute("spellcheck", false);
    textaera.setAttribute("placeholder", "Notes write here...");

    if (color.value === "#000000") {
        span.style.backgroundColor = color.value;
        span.style.color = "#fff"
    } else {
        span.style.backgroundColor = color.value;
    }
    
    item.appendChild(span);
    item.appendChild(textaera);

    list.appendChild(item)
})

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove();
    }
})