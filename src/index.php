<?php
session_start();
//session_destroy();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
    
    <title>Document</title>
    <style>

    </style>
</head>

<body>
    <div class= "maindiv" >
        <h1>Daily Expense Manager</h1>
        <div class='divexp' >
            <div>
              <table><tr><td><span>GROCERY: </span></td><td><input type='text' class='grodiv' id='groinput' placeholder="Item" ></t></td><td><input type='text' placeholder="Price" id='groprice'></td><td><button id='btngroadd'>ADD</button></td></tr></table>  <br>
            <div id='dispgro' ></div>
            <div><label>Total cost:-</label><span id='dispgro2'></span></div>
            </div>
            <div>
            <table><tr><td>   <span>VEGGIES: </span></td><td><input  class='vegdiv' type='text' id='veginput' placeholder="Item" ></t></td><td><input type='text' id='vegprice' placeholder="Price"></td><td><button id='btnvegadd'>ADD</button></td></tr></table><br>
                <div id='dispveg' ></div>
                <div><label>Total cost:-</label><span id='dispveg2'></span></div>
            </div>
            <div>
            <table><tr><td><span>TRAVELING: </span></td><td><input  class='traveldiv' type='text' id='travelinput' placeholder="Item" ></t></td><td><input type='text' id='travelprice' placeholder="Price"></td><td><button id='btntraveladd'>ADD</button></td></tr></table><br>
                <div id='disptravel' ></div>
                <div><label>Total cost:-</label><span id='disptravel2'></span></div>
            </div>
            <div>
            <table><tr><td><span>MISCELLENEOUS: </span></td><td><input type='text' id='miscinput' placeholder="Item" ></t></td><td><input type='text' id='miscprice' placeholder="Price"></td><td><button id='btnmiscadd'>ADD</button></td></tr></table><br>
                <div id='dispmisc' ></div><br>
                <div><label>Total cost:-</label><span id='dispmisc2'></span></div>

                <br>

            </div>
          </div><br>
          <div class='incdiv' >
              <label>INCOME:</label>
  </t> <input type="text" id='srcinput' placeholder="Source" ></t> <input type="text" id='incinput' placeholder="Amount"> </t><button id='btnincadd'>Add</button>
   <div id='incomedisp' ></div> 
   <div><label >Total Expense:-</label><span id='ttlcost' ></span></div>     
</div>
    </div>


   <script src="myscript.js"></script>
</body>

</html>