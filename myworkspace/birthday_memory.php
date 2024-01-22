<?php
$date_my = htmlspecialchars($_GET['Y-m-d']);
$name = $_GET['name'];
$gender = $_GET['gender'];
$year = date('Y');
$year_my = date('Y', strtotime($date_my));
?>

<!DOCTYPE html>
<html>

<head>
</head>

<body>
  <h3>생일 데이터</h3>
  <?php
    echo '이름: ' . $name;
    echo '생일: ' . $date_my;
    echo '<br>';
    $birthday = strtotime($date_my);
    $birth_month_date = date("m-d", $birthday);
    echo '나이: ' . (($year)-($year_my));
    echo '<br>';
    $date_now = date("Y-m-d", time());
    $mon_date_now = date("m-d", time());
    echo '성별: ' . $gender;

    if ($birth_mon_date == $mon_date_now){
      echo '생일을 축하드립니다!!';
    } else {
      echo '생일을 기다리고 있겠습니다!!';
    }
    
    
    ?>
</body>

</html>