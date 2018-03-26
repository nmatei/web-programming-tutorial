console.info("page loaded");

var age = 18;
var firstName = 'Nicolae';
var lastName = "Matei";
var employed = true;

console.info("Numele : " + firstName + " " + lastName);
console.info("Varsta : " + age);
console.info("Angajat: " + employed);


function addApples(firstNumber, secondNumber) {
    var count = firstNumber + secondNumber;

    if (count < 3) {
        return count;
    }

    return count - 1;
}

var firstChildApples = 3;

var apples = addApples(firstChildApples, 5);
console.info(apples);