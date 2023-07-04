

for (let i = 0; i <= 100; i++) {

    if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else if ((i % 5) % 3 === 0) {
        console.log("fizzbuzz")
    }
    else {
        console.log(i)
    }
}
//creiamo due variabili const per pescare dal dom il div my-box
//con un'altra variabile segnamo il numero di quadrati

const bigBox = document.querySelector(".my-box");
const totalSquares = 10 * 10;

//impostiamo il ciclo che parte da 1 per arrivare al numero (totalSquare)

for (let i = 1; i <= totalSquares; i++) {
    //creiamo con "document.createElement" un elemento nel html in questo caso un div
    //e gli diamo una classe in questo caso "grid-square"
    let singleSquare = document.createElement("div");
    singleSquare.classList.add("grid-square");
    // appendiamo il div creato "singleSquare" all'elemento bigBox in html
    bigBox.append(singleSquare);
    //inseriamo i numeri del ciclo all'interno dei quadrati
    singleSquare.innerHTML = (i);
    //inseriamo le condizioni in modo tale da inserire i diversi background e le diverse stringhe da avere all'interno dei singoli box
    if (i % 5 === 0) {
        singleSquare.classList.add("bg-primary")
        singleSquare.innerHTML = ("buzz");
    } else if (i % 3 === 0) {
        singleSquare.classList.add("bg-secondary")
        singleSquare.innerHTML = ("fizz");
    } else if ((i % 5) % 3 === 0) {
        singleSquare.classList.add("bg-warning")
        singleSquare.innerHTML = ("fizzbuzz");
    }
    else {
        singleSquare.classList.add("bg-danger")
        singleSquare.innerHTML = (i);
    }
}
//prova per esercitarmi ad assegnare classi

let titleEl = document.querySelector(".title");

titleEl.classList.add("font-s-big", "text-light", "pt-5")