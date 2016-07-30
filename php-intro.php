<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "<p>Hello World!</p>";

$suma = 3 + 5;

echo $suma;
echo "<br>";

$nume = 'Matei';
$message = "Salut $nume, bine ai venit!";
echo $message;

?>

<h2>PHP Functions</h2>

<?php
$n = 10;

function addNum($a, $b = 0, $c = 0) {
	global $n;
	$s = $a + $b + $c;
	return $s * $n;
}

echo addNum(3, 8);

$a = "<br>$n!";
echo $a;

?>

<h2>Array</h2>

<ul>
<?php
$agenda = array("Matei", "Andrei", "Ionel", "Manu");

$n = count($agenda);

for($i = 0; $i < $n; $i++) {
    echo "<li>$agenda[$i]</li>";
}
?>
</ul>

<h2>Constants</h2>

<?php
define("NUME", "Matei");
echo "Numele: " . NUME;

echo "2" == 2;
?>

</body>
</html>