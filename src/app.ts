const a: string = "Hello world";
const b: number = 3;
const c: boolean = true;
const d: null = null;
const arr: string[] = ["a", "b", "c"];
const arr2:any[] = [1, true, "hello"];

const z = "Hello";

type User = {
    firstname : string,
    lastname : string
}

const user : User = {firstname : "Leo", lastname : "Dubois"};


function identity<Argtype>(arg:Argtype) : Argtype {
    return arg;
}

const id = identity<number>(3)

const counter = document.querySelector("#counter") as HTMLButtonElement;
let i = 0;
function increment() {
  i++;
  const span = counter.querySelector("span");

  if(span) span.innerText = i.toString();

}
counter?.addEventListener("click", increment);
