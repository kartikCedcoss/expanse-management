// var totalgro = 0;
//  var totalveg = 0;
//  var totaltravel = 0;
//  var totalmisc = 0;

var totalincome = 0;

var groArr = [];
var vegArr = [];
var travelArr = [];
var miscArr = [];
var incomeArr = [];
var tgro = 0;
var tveg = 0;
var ttravel = 0 ;
var tmisc = 0 ;

$(document).ready(function () {
  $("#btngroadd").on("click", function () {
    var grocery = document.getElementById("groinput").value;
    var groprice = document.getElementById("groprice").value;
    //totalgro = totalgro + parseInt(groprice);
    $.ajax({
      url: "functions.php",
      type: "POST",
      datatype: "JSON",
      data: {
        grocery: grocery,
        groprice: groprice,
        action: "addgro",
      },
    }).done(function (data) {
      groArr = JSON.parse(data);
      displaygro(groArr);
    });

   
    document.getElementById("groinput").value = "";
    document.getElementById("groprice").value = "";
    
  });


  $("#btnvegadd").on("click", function () {
    var veg = document.getElementById("veginput").value;
    var vegprice = document.getElementById("vegprice").value;
    totalveg = totalveg + parseInt(vegprice);
    $.ajax({
      url: "functions.php",
      type: "POST",
      datatype: "JSON",
      data: {
        veg: veg,
        vegprice: vegprice,
        action: "addveg",
      },
    }).done(function (data) {
      vegArr = JSON.parse(data);
      displayveg(vegArr);
    });
    document.getElementById("veginput").value = "";
    document.getElementById("vegprice").value = "";
  });

  $("#btntraveladd").on("click", function () {
    var travel = document.getElementById("travelinput").value;
    var travelprice = document.getElementById("travelprice").value;
    
    $.ajax({
      url: "functions.php",
      type: "POST",
      datatype: "JSON",
      data: {
        travel: travel,
        travelprice: travelprice,
        action: "addtravel",
      },
    }).done(function (data) {
      travelArr = JSON.parse(data);
      displaytravel(travelArr);
    });
    document.getElementById("travelinput").value = "";
    document.getElementById("travelprice").value = "";
  });

  $("#btnmiscadd").on("click", function () {
    var misc = document.getElementById("miscinput").value;
    var miscprice = document.getElementById("miscprice").value;
   
    $.ajax({
      url: "functions.php",
      type: "POST",
      datatype: "JSON",
      data: {
        misc: misc,
        miscprice: miscprice,
        action: "addmisc",
      },
    }).done(function (data) {
      miscArr = JSON.parse(data);
      displaymisc(miscArr);
    });
    document.getElementById("miscinput").value = "";
    document.getElementById("miscprice").value = "";
  });

  $("#btnincadd").on("click", function () {
    var src = document.getElementById("srcinput").value;
    var amt = document.getElementById("incinput").value;
    totalincome = totalincome + parseInt(amt);

    $.ajax({
      url: "functions.php",
      type: "POST",
      datatype: "JSON",
      data: {
        src: src,
        amt: amt,
        action: "addincome",
      },
    }).done(function (data) {
      incomeArr = JSON.parse(data);
      displayincome(incomeArr);
    });
  });
});
var totalg = 0;
function displaygro(groArr) {
  html = "<table>";
  for (let i = 0; i < groArr.length; i++) {
    html +=
      "<tr><td>" +
      (i + 1) +
      "</td><td><input type='text' id='g" +
      i +
      "' value='" +
      groArr[i].item +
      "' </td><td><input type ='text' id='pg" +
      i +
      "' value='" +
      groArr[i].price +
      "' </td><td><input type='button' id ='" +
      i +
      "' value='edit' onclick='editgro(" +
      i +
      ")' </td><td> <input type='button' id ='" +
      i +
      "' value='delete' onclick='deletegro(" +
      i +
      ")'</td></tr> ";
  }
 
  
    html += "</table>";
   
    document.getElementById("dispgro").innerHTML = html;
    totalgro();
   // console.log(tgro);
    totalcost();
    
}

function editgro(egid) {
  for (let i = 0; i < groArr.length; i++) {
    if (egid == i) {
      var edgro = document.getElementById("g" + i).value;
      var edgroprice = document.getElementById("pg" + i).value;
    }
  }
  $.ajax({
    url: "functions.php",
    type: "POST",
    datatype: "JSON",
    data: {
      egid: egid,
      edgro: edgro,
      edgroprice: edgroprice,
      action: "edgro",
    },
  }).done(function (data) {
    groArr = JSON.parse(data);
    displaygro(groArr);
    //console.log(data);
  });
}
function deletegro(dgid) {
  $.ajax({
    url: "functions.php",
    type: "POST",
    datatype: "JSON",
    data: {
      dgid: dgid,
      action: "removegro",
    },
  }).done(function (data) {
    groArr = JSON.parse(data);
    displaygro(groArr);
    //console.log(data);
    
  });
}
function totalveg(){
  console.log('hello');
  var vegamt = 0;
  for(let i=0; i<vegArr.length ;i++) {
     vegamt += parseInt(vegArr[i].price);
     
  }
  document.getElementById("dispveg2").innerHTML = vegamt;
}


function displayveg(vegArr) {
  html = "<table>";
  for (let i = 0; i < vegArr.length; i++) {
    html +=
      "<tr><td>" +
      (i + 1) +
      "</td><td><input type='text' id='v" +
      i +
      "' value='" +
      vegArr[i].item +
      "' </td><td><input type ='text' id='pv" +
      i +
      "' value='" +
      vegArr[i].price +
      "' </td><td><input type='button' id ='" +
      i +
      "' value='edit' onclick='editveg(" +
      i +
      ")' </td><td> <input type='button' id ='" +
      i +
      "' value='delete' onclick='deleteveg(" +
      i +
      ")'</td></tr> ";
  }
  html += "</table>";
  document.getElementById("dispveg").innerHTML = html;
  
  var vegamt = 0;
  for(let i=0; i<vegArr.length ;i++) {
     vegamt += parseInt(vegArr[i].price);
     tveg =vegamt;
     
  }
  document.getElementById("dispveg2").innerHTML = vegamt;
  totalcost();
}

function editveg(evid) {
  for (let i = 0; i < vegArr.length; i++) {
    if (evid == i) {
      var edveg = document.getElementById("v" + i).value;
      var edvegprice = document.getElementById("pv" + i).value;
    }
  }
  $.ajax({
    url: "functions.php",
    type: "POST",
    datatype: "JSON",
    data: {
      evid: evid,
      edveg: edveg,
      edvegprice: edvegprice,
      action: "edveg",
    },
  }).done(function (data) {
    vegArr = JSON.parse(data);
    displayveg(vegArr);
    //console.log(data);
  });
}
function deleteveg(dvid) {
  $.ajax({
    url: "functions.php",
    type: "POST",
    datatype: "JSON",
    data: {
      dvid: dvid,
      action: "removeveg",
    },
  }).done(function (data) {
    vegArr = JSON.parse(data);
    displayveg(vegArr);
    //console.log(data);
  });
}

function displaytravel(travelArr) {
  html = "<table>";
  for (let i = 0; i < travelArr.length; i++) {
    html +=
      "<tr><td>" +
      (i + 1) +
      "</td><td><input type='text' id='t" +
      i +
      "' value='" +
      travelArr[i].item +
      "' </td><td><input type ='text' id='pt" +
      i +
      "' value='" +
      travelArr[i].price +
      "' </td><td><input type='button' id ='" +
      i +
      "' value='edit' onclick='edittravel(" +
      i +
      ")' </td><td> <input type='button' id ='" +
      i +
      "' value='delete' onclick='deletetravel(" +
      i +
      ")'</td></tr> ";
  }
  html += "</table>";
  document.getElementById("disptravel").innerHTML = html;

  var travelamt = 0;
  for(let i=0; i<travelArr.length ;i++) {
     travelamt += parseInt(travelArr[i].price);
     ttravel =travelamt;
     
  }
  document.getElementById("disptravel2").innerHTML = travelamt;
  totalcost();
}



function edittravel(etid) {
  for (let i = 0; i < travelArr.length; i++) {
    if (etid == i) {
      var edtravel = document.getElementById("t" + i).value;
      var edprice = document.getElementById("pt" + i).value;
    }
  }
  $.ajax({
    url: "functions.php",
    type: "POST",
    datatype: "JSON",
    data: {
      etid: etid,
      edtravel: edtravel,
      edtravelprice: edtravelprice,
      action: "edtravel",
    },
  }).done(function (data) {
    travelArr = JSON.parse(data);
    displaytravel(travelArr);
    //console.log(data);
  });
}
function deletetravel(dtid) {
  $.ajax({
    url: "functions.php",
    type: "POST",
    datatype: "JSON",
    data: {
      dtid: dgid,
      action: "removetravel",
    },
  }).done(function (data) {
    travelArr = JSON.parse(data);
    displaytravel(travelArr);
    //console.log(data);
  });
}

function displaymisc(miscArr) {
  html = "<table>";
  for (let i = 0; i < miscArr.length; i++) {
    html +=
      "<tr><td>" +
      (i + 1) +
      "</td><td><input type='text' id='m" +
      i +
      "' value='" +
      miscArr[i].item +
      "' </td><td><input type ='text' id='pm" +
      i +
      "' value='" +
      miscArr[i].price +
      "' </td><td><input type='button' id ='" +
      i +
      "' value='edit' onclick='editmisc(" +
      i +
      ")' </td><td> <input type='button' id ='" +
      i +
      "' value='delete' onclick='deletemisc(" +
      i +
      ")'</td></tr> ";
  }
  html += "</table>";
  document.getElementById("dispmisc").innerHTML = html;


  var miscamt = 0;
  for(let i=0; i<miscArr.length ;i++) {
     miscamt += parseInt(miscArr[i].price);
     tmisc = miscamt;
     
  }
  document.getElementById("dispmisc2").innerHTML = miscamt;
  totalcost();
}

function editmisc(emid) {
  for (let i = 0; i < miscArr.length; i++) {
    if (emid == i) {
      var edmisc = document.getElementById("m" + i).value;
      var edmiscprice = document.getElementById("pm" + i).value;
    }
  }
  $.ajax({
    url: "functions.php",
    type: "POST",
    datatype: "JSON",
    data: {
      emid: emid,
      edmisc: edmisc,
      edmiscprice: edmiscprice,
      action: "edmisc",
    },
  }).done(function (data) {
    miscArr = JSON.parse(data);
    displaymisc(miscArr);
    //console.log(data);
  });
}
function deletemisc(dmid) {
  $.ajax({
    url: "functions.php",
    type: "POST",
    datatype: "JSON",
    data: {
      dmid: dmid,
      action: "removemisc",
    },
  }).done(function (data) {
    miscArr = JSON.parse(data);
    displaymisc(miscArr);
    //console.log(data);
  });
}

function displayincome(incomeArr) {
  html = "<table>";
  for (let i = 0; i < incomeArr.length; i++) {
    html +=
      "<tr><td>" +
      (i + 1) +
      "</td><td><input id ='s" +
      i +
      "' type = 'text' value = '" +
      incomeArr[i].src +
      "'> </td><td><input type='text' id='i" +
      i +
      "' value ='" +
      incomeArr[i].amt +
      "'></td<td><input type='button' id='e" +
      i +
      "' value='edit' onclick='editincome(" +
      i +
      ")'> </td<td><input type='button' id='e" +
      i +
      "' value='delete' onclick='deleteincome(" +
      i +
      ")'></td></tr>";
  }
  html +=
    "<tr><td></td><td></td><td>Total:" + totalincome + "</td></tr></table>";
  document.getElementById("incomedisp").innerHTML = html;
  totalcost();

}

function editincome(iceid){
    for (let i = 0 ; i<incomeArr.length ; i ++ ){
        if(i == iceid){
            var edsrc = document.getElementById ('s'+i).value;
            var edinc =document.getElementById ('i'+i).value;

        }
    }
    $.ajax({
        url : "functions.php",
        type  : "POST",
        datatype :"JSON",
        data :{
            iceid : iceid ,
            edinc : edinc,
            edsrc:edsrc,
            "action" : "edincome" 
        }
    }).done(function(data){
        incomeArr = JSON.parse(data);
        displayincome(incomeArr);
    })
}

function deleteincome(incdid){
    $.ajax({
        url : "functions.php",
        type : "POST",
        datatype : "JSON",
        data :{
            incdid : incdid,
            "action" : "removeinc"
        }
    }).done(function(data){
        incomeArr = JSON.parse(data);
        displayincome(incomeArr);
    })
}


function totalgro(){
  var groamt = 0;
  for(let i=0; i<groArr.length ;i++) {
     groamt += parseInt(groArr[i].price);
     tgro = groamt;
     
  }
  document.getElementById("dispgro2").innerHTML = groamt;
  
}

function totalcost(){
  var ttlincome =0;
  var ttlcost = tgro + tveg + ttravel + tmisc;
   ttlincome = totalincome - ttlcost;
  document.getElementById('ttlcost').innerHTML = ttlincome;
  
}