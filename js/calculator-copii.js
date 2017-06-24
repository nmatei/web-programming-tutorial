function catFacAdunareaNumerelor(a, b) {
    console.info("primul numar este " + a);
    console.info("al 2-lea numar este " + b);
    var max = b;
    var min = a;
    if(a > b) {
        console.info(a + " este mai mare ca " + b);
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }
    console.info("numarul cel mai mare este " + max);
    console.info("vom numara " + min + " degetele");

    //min = min - 1
    //min -= 1;
    //min += -1;
    //min--;

    for(min--; min >= 0 ; min--){
        // aici vrem sa numaram
        max++;
        console.info("Avem " + max + " detetele, au ramas de numarat " + min + " degetele");
    }

    return max;
}

var rezultat1;

console.info(rezultat1);

rezultat1 = catFacAdunareaNumerelor(3, 5);
console.info(rezultat1);

rezultat1 = catFacAdunareaNumerelor(7, 2);
console.info(rezultat1);
