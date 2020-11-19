const text1 = document.getElementById("text1");
const example1 = "This is the first example!!!!!";
let index = 1;
let extra = "-"

setInterval (writeText1, 100);
function writeText1 () {
    text1.innerText = example1.slice(0, index)
    index++
    if (index > example1.length) {
        index = 1;
    }
}


const text2 = document.getElementById("text2");
const example2 = "This is the first example but in red and slower...";
let i = 1;

setInterval (writeText2, 150);
function writeText2 () {
    text2.innerText = example2.slice(0, i)
    i++
    if (i > example2.length)
    i = 1
}



