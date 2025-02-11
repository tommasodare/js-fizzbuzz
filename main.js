/*
Scrivi un programma che stampi i numeri da 1 a 100, 
ma per i multipli di 3 stampi “Fizz” al posto del numero 
e per i multipli di 5 stampi "Buzz". 
Per i numeri che sono sia multipli di 3 che di 5 
stampi "FizzBuzz".
*/


// Dichiaro un ciclo FOR
// Imposto la variabile e le assegno valore i = 0
// Imposto la condizione da verificare i >= 100
// Imposto l'incremento i++

// Se un numero è un multiplo di 3 allora i % 3 === 0
// Se un numero è un multiplo di 5 allora i % 5 === 0
// Se un numero è un multiplo di 3 e di 5 allora i % 3 === 0 && i % 5 === 0

// Imposto un istruzione condizionale if/else


for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz")

    } else if (i % 3 === 0) {

        console.log("Fizz");
 
    } else if (i % 5 === 0) {

        console.log("Buzz")

    } else {

        console.log(i)

    }

}
