// iniziamo ad impostare il ciclo per stampare i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {

    // condition multiple of 3 and 5
    // se è multiplo di 3 e 5 stampiamo la stringa 'FizzBuzz'
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')

    // condition multiple of 3
    // se è multiplo di 3 stampiamo la stringa 'Fizz'
    } else if (i % 3 === 0) {
        console.log('Fizz')

    // condition multiple of 5
    // se è multiplo di 5 stampiamo la stringa 'Buzz'
    } else if (i % 5 === 0) {
        console.log('Buzz')

    // condition no multiple
    // se non è multiplo nè di 3 nè di 5 stampiamo il numero normalmente
    } else {
        console.log(i)
    }

}