"use strict";
const a = "Hello world";
const b = 3;
const c = true;
const d = null;
const arr = ["a", "b", "c"];
const arr2 = [1, true, "hello"];
const z = "Hello";
const user = { firstname: "Leo", lastname: "Dubois" };
function identity(arg) {
    return arg;
}
const id = identity(3);
const counter = document.querySelector("#counter");
let i = 0;
function increment() {
    i++;
    const span = counter.querySelector("span");
    if (span)
        span.innerText = i.toString();
}
counter === null || counter === void 0 ? void 0 : counter.addEventListener("click", increment);
