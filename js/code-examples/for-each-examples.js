// for(var i = 0; i < persons.length; i++) {
//     var person = persons[i];
//     rows += getRow(person[0], person[1], person[2]);
// }

function paySalary(person) {
    console.warn(person[0] + " -> " + (person[2] * 60 / 100));
}
function payBonus(person) {
    console.info("Bonus: " + (person[2] * 10 / 100));
}


function forEach(persons, action) {
    console.info("=== job started ===");
    for(var i = 0; i < persons.length; i++) {
        var person = persons[i];
        if (person[2] > 400) {
            action(person);
        }
    }
}

forEach(persons, paySalary);
// forEach(persons, paySalary);
// forEach(persons, paySalary);
// forEach(persons, payBonus);

persons.forEach(payBonus);