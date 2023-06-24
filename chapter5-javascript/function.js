function add(a, b) {
    let sum;
    sum = a + b;
    return sum;
}

function showResults() {
    let a = 20;
    let b = 60;
    let result = add (a , b);

document.write(`${a} + ${b} = ${result}`);
}