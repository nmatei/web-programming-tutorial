<?php
echo "Suma este ";
echo 4+3;

$name = "matei";
$a = 4;
$b = 5;
echo " Salut ";
echo $name;
$firstName = "Nicolae";
echo "<br>" . $firstName . " " . $name;

function getName($firstName, $name) {
    return $firstName . " " . $name;
}
echo "<br>Nume Complet: " . getName($firstName, $name);

?>

<h1>Tabla inmultirii</h1>
<br>

<?php

$n = 5;
for($i = 1; $i <= 10; $i++) {
    echo "<br>" . $i . " * " . $n . " = " . ($i * $n);
}

?>