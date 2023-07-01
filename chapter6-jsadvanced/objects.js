let studentAlice = {
    firstname: 'Alice',
    lastname: 'Alice in Wonderland',
    age: 18,
    height: 1.65
}

studentAlice.lastname = 'Alice in Wonderland';
studentAlice['age'] = 19;

for (let property in studentAlice) {
    document.write(`${studentAlice[property]} `);
}