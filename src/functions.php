<?php
session_start();
if (!isset($_SESSION['gro'])) {
    $_SESSION['gro'] = array();
}
if (!isset($_SESSION['veg'])) {
    $_SESSION['veg'] = array();
}
if (!isset($_SESSION['travel'])) {
    $_SESSION['travel'] = array();
}
if (!isset($_SESSION['misc'])) {
    $_SESSION['misc'] = array();
}
if (!isset($_SESSION['income'])) {
    $_SESSION['income'] = array();
}
if(!isset($_SESSION['totalgro'])){
    $_SESSION['totalgro'];
}
?>

<?php

$grocery = $_POST['grocery'];
$groprice = $_POST['groprice'];
$egid = $_POST['egid'];
$edgro = $_POST['edgro'];
$dgid = $_POST['dgid'];
$edgroprice = $_POST['edgroprice'];

$veg = $_POST['veg'];
$vegprice = $_POST['vegprice'];
$evid = $_POST['evid'];
$edveg = $_POST['edveg'];
$dvid = $_POST['dvid'];
$edvegprice = $_POST['edvegprice'];

$travel = $_POST['travel'];
$travelprice = $_POST['travelprice'];
$etid = $_POST['etid'];
$edtravel = $_POST['edtravel'];
$dtid = $_POST['dtid'];
$edtravelprice = $_POST['edtravelprice'];

$misc = $_POST['misc'];
$miscprice = $_POST['miscprice'];
$egid = $_POST['egid'];
$edmisc = $_POST['edmisc'];
$dmid = $_POST['dmid'];
$edmiscprice = $_POST['edmiscprice'];

$src = $_POST['src'];
$amt = $_POST['amt'];
$edinc = $_POST['edinc'];
$edsrc = $_POST ['edsrc'];
$iceid = $_POST['iceid'];
$incdid = $_POST['incdid'];


$action = $_POST['action'];


class dailyex
{
    public $id;
    public $item;
    public $price;
   


    public function grocery($grocery, $groprice)
    {    
        $this->item = $grocery;
        $this->price = $groprice;
           
        $data = array("item" => $this->item, "price" => $this->price);
        array_push($_SESSION['gro'], $data);
    }


    public function editgro($egid, $edgro, $edgroprice)
    {
        $this->id = $egid;
        $this->item = $edgro;
        $this->price = $edgroprice;
        foreach ($_SESSION['gro'] as $k => $v) {
            if ($k == $this->id) {
                $_SESSION['gro'][$k]['item'] = $this->item;
                $_SESSION['gro'][$k]['price'] = $this->price;
                $_SESSION['gro'][$k]['total'] += $this->price; 
            }
        }
    }

    public function removegro($dgid)
    {
        for ($i =  0; $i < count($_SESSION['gro']); $i++) {
            if ($i == $dgid) {
                array_splice($_SESSION['gro'], $i, 1);
            }
        }
    }


    public function veg($veg, $vegprice)
    {
        $this->item = $veg;
        $this->price = $vegprice;
        $data = array("item" => $this->item, "price" => $this->price);
        array_push($_SESSION['veg'], $data);
    }


    public function editveg($evid, $edveg, $edvegprice)
    {
        $this->id = $evid;
        $this->item = $edveg;
        $this->price = $edvegprice;
        foreach ($_SESSION['veg'] as $k => $v) {
            if ($k == $this->id) {
                $_SESSION['veg'][$k]['item'] = $this->item;
                $_SESSION['veg'][$k]['price'] = $this->price;
            }
        }
    }

    public function removeveg($dvid)
    {
        for ($i =  0; $i < count($_SESSION['veg']); $i++) {
            if ($i == $dvid) {
                array_splice($_SESSION['veg'], $i, 1);
            }
        }
    }



    public function travel($travel, $travelprice)
    {
        $this->item = $travel;
        $this->price = $travelprice;
        $data = array("item" => $this->item, "price" => $this->price);
        array_push($_SESSION['travel'], $data);
    }


    public function edittravel($etid, $edtravel, $edtravelprice)
    {
        $this->id = $etid;
        $this->item = $edtravel;
        $this->price = $edtravelprice;
        foreach ($_SESSION['travel'] as $k => $v) {
            if ($k == $this->id) {
                $_SESSION['travel'][$k]['item'] = $this->item;
                $_SESSION['travel'][$k]['price'] = $this->price;
            }
        }
    }

    public function removetravel($dtid)
    {
        for ($i =  0; $i < count($_SESSION['travel']); $i++) {
            if ($i == $dtid) {
                array_splice($_SESSION['travel'], $i, 1);
            }
        }
    }


    public function misc($misc, $miscprice)
    {
        $this->item = $misc;
        $this->price = $miscprice;
        $data = array("item" => $this->item, "price" => $this->price);
        array_push($_SESSION['misc'], $data);
    }


    public function editmisc($emid, $edmisc, $edmiscprice)
    {
        $this->id = $emid;
        $this->item = $edmisc;
        $this->price = $edmiscprice;
        foreach ($_SESSION['misc'] as $k => $v) {
            if ($k == $this->id) {
                $_SESSION['misc'][$k]['item'] = $this->item;
                $_SESSION['misc'][$k]['price'] = $this->price;
            }
        }
    }

    public function removemisc($dmid)
    {
        for ($i =  0; $i < count($_SESSION['misc']); $i++) {
            if ($i == $dmid) {
                array_splice($_SESSION['misc'], $i, 1);
            }
        }
    }


    public function addincome($src, $amt)
    {

        $data = array("src" => $src, "amt" => $amt);
        array_push($_SESSION['income'], $data);
    }

    public function edincome($iceid,$edinc,$edsrc){
       foreach($_SESSION['income'] as $k => $v){
           if ($k == $iceid){
               $_SESSION['income'][$k]['amt'] = $edinc;
               $_SESSION['income'][$k] ['src'] = $edsrc;
           }
       }
    }
    public function deleteinc($incdid){
        for($i = 0 ; $i<count($_SESSION['income']); $i++){
            if($i == $incdid){
                array_splice($_SESSION['income'],$i,1);
            }
        }
    }
}


switch ($action) {
    case "addgro": {
            $obj = new dailyex();
            $obj->grocery($grocery, $groprice);
            echo json_encode($_SESSION['gro']);
        }
        break;
    case "edgro": {
            $obj = new dailyex();
            $obj->editgro($egid, $edgro, $edgroprice);
            echo json_encode($_SESSION['gro']);
        }
        break;
    case "removegro": {
            $obj = new dailyex();
            $obj->removegro($dgid);
            echo json_encode($_SESSION['gro']);
        }
        break;


    case "addveg": {
            $obj = new dailyex();
            $obj->veg($veg, $vegprice);
            echo json_encode($_SESSION['veg']);
        }
        break;
    case "edveg": {
            $obj = new dailyex();
            $obj->editveg($evid, $edveg, $edvegprice);
            echo json_encode($_SESSION['veg']);
        }
        break;
    case "removeveg": {
            $obj = new dailyex();
            $obj->removeveg($dvid);
            echo json_encode($_SESSION['veg']);
        }
        break;


    case "addtravel": {
            $obj = new dailyex();
            $obj->travel($travel, $travelprice);
            echo json_encode($_SESSION['travel']);
        }
        break;
    case "edtravel": {
            $obj = new dailyex();
            $obj->edittravel($evid, $edtravel, $edtravelprice);
            echo json_encode($_SESSION['travel']);
        }
        break;
    case "removetravel": {
            $obj = new dailyex();
            $obj->removetravel($dtid);
            echo json_encode($_SESSION['travel']);
        }
        break;

    case "addmisc": {
            $obj = new dailyex();
            $obj->misc($misc, $miscprice);
            echo json_encode($_SESSION['misc']);
        }
        break;
    case "edmisc": {
            $obj = new dailyex();
            $obj->editmisc($emid, $edmisc, $edmiscprice);
            echo json_encode($_SESSION['misc']);
        }
        break;
    case "removemisc": {
            $obj = new dailyex();
            $obj->removemisc($dmid);
            echo json_encode($_SESSION['misc']);
        }
        break;

    case "addincome": {

            $obj = new dailyex();
             $obj->addincome($src, $amt);
            echo json_encode($_SESSION['income']);
        }
        break;
    case "edincome" :{
        $obj =new dailyex();
         $obj -> edincome($iceid,$edinc,$edsrc);
        echo json_encode($_SESSION['income']);
    }
    break;
    case "removeinc" :{
        $obj = new dailyex ();
        $obj ->deleteinc($incdid);
        echo json_encode($_SESSION['income']);

    }
    break;
}

?>