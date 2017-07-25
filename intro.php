<h1>hello</h1>

<?php
$nume = gethostname() . " : " . get_current_user();

echo $nume;

echo '<br>';
$a = 4 + 7;
echo $a;


function add($a, $b) {
    return $a + $b;
}

$r = add(2, 3);
echo "<br><button>Cancel</button>";

?>

<button>Save</button>

<?php

echo $r;

?>

<h1>Tabla inmultirii</h1>
<form action="">
    <input type="number" name="number" value="11">
    <button>Multiply</button>
</form>
|
<?php
    for ($i = 1; $i <= 10; $i++) {
        echo "<a href='?number=$i'>$i</a> |";
    }
?>

<table>
    <?php
    $numar = isset($_GET["number"]) ? $_GET["number"] : 1;

    for($i = 1; $i <= 10; $i++) {
        $r = $numar * $i;
        echo "<tr><td>$i</td><td>* $numar = </td><td>$r</td></tr>";
        //echo "<tr><td>".$i."</td><td>* ".$numar." = </td><td>".$r."</td></tr>";
    }
    ?>
</table>
