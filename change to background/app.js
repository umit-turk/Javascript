const body = document.querySelector("body");
const button = document.querySelector('button');
const colors = ["black", "yellow", "green", "red", "orange", "#644185", " #3b6328" ]

button.addEventListener("click", changeBackground);

let order = 0;

function changeBackground() {
    // random color
/*     const randomNumber = Math.floor(Math.random() * colors.length)
    const selectcolor = colors[randomNumber]
    body.style.backgroundColor = selectcolor; */

    //select a color with order.


if (order == 7) order = 0;
const select = colors[order];
order++;
body.style.backgroundColor = select;


}
