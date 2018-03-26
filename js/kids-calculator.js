function countTo(n) {
    var i = 1;
    for (; i <= n; i+=5) {
        console.info(i);
    }
}

function addNumbers(a, b) {
    console.info('primul numar este ' + a);
    console.info('al doilea numar este ' + b);

    var suma = a; // numarul cel mai mare
    var degete = b; // min

    if (a < b) {
        suma = b;
        degete = a;
    }

    while (degete) {
        degete--; // luam un deget de la b
        suma++; // il punem la a
        console.info(suma + ' - au mai ramas ' + degete + ' degetele');
    }
    console.info('suma este: ' + suma);
}

//var count1 = addNumbers(2, 6);
//var count2 = addNumbers(45, 32);

function isNumberPrime(n) {
    for(var i = 2; i < n; i++) {
        if(n%i == 0) {
            return false;
        }
    }
    return true;
}

function showPrimeNumbersTo(n) {
    for(var i = 1; i <= n; i++) {
        if (isNumberPrime(i)) {
            console.info(i);
        }
    }
}

showPrimeNumbersTo(25);