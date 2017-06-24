// primul script
console.info("salut");

function getInfo(name) {
    var msg = "neata " + name;
    return msg;
}
var mesaj = getInfo("Matei");
console.info(mesaj);

function adunaNumerele(a, b) {
    console.info("primul numar este " + a);
    console.info("al doilea numar este " + b);
    var rezultat = a + b;
    rezultat = rezultat * 0.9;
    return rezultat;
}

var calculat = adunaNumerele(2, 3);
console.info(calculat);

