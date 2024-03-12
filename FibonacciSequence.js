function fibonacciSequence(n) {
    let fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] < n) {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }
    return fibSequence;
}

function isInFibonacciSequence(num, fibSequence) {
    return fibSequence.includes(num);
}

function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Informe um número: ", (num) => {
        num = parseInt(num);
        const fibSequence = fibonacciSequence(num);
        if (isInFibonacciSequence(num, fibSequence)) {
            console.log(`O número ${num} está na sequência de Fibonacci.`);
        } else {
            console.log(`O número ${num} não está na sequência de Fibonacci.`);
        }
        readline.close();
    });
}

main();