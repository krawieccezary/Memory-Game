<?php

   $numbers = [];
   $numbers_length = 0;

   while ($numbers_length < 30){
      $number = rand(1,15);

      $numbers_length = count($numbers);
      $amount = 0;
      for ($j=0; $j<$numbers_length; $j++){
         if ($numbers[$j] == $number) {
            $amount ++;

            if ($amount == 2) { break;}
         }
      }
      if ($amount < 2) {
         array_push($numbers, $number);
      }
   }

   echo json_encode($numbers);


?>
