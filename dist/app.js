const counter = document.querySelector("#counter");
let i = 0;
function increment() {
    i++;
    counter.querySelector("span").innerText = i.toString();
}
counter.addEventListener("click", increment);
