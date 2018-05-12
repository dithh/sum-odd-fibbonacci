$(document).ready(function () {
    $(".sum").on("click", function () {
        var max = $(".max").val();
        sumFibs(max);
    });
    
});

function sumFibs(num) {
    var prevNumber = 0;
   var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0 ){
        result = result + currNumber;
    }
      currNumber = currNumber + prevNumber;
      prevNumber = currNumber - prevNumber;
    }  
    console.log (result);
  }