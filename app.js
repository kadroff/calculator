 $(document).ready(function(){
  $("input[name=send]").click(function() {
    var action = $("select[name=action]").val();
    var number1 = $("input[name=first]").val() * 1;
    var number2 = $("input[name=second]").val() * 1 ;
    var result;

    if (action == '+'){
     result = number1 + number2;

  }else if (action == '-'){
     result = number1 - number2;
  }else if (action == '*'){
     result = number1 * number2;
  }else if (action == '/'){
     result = number1 / number2;
  }else if (number1 < number2){
    result = '-'number2 - number1;
  }

    $("input[name=result]").val(result);

});
   });





 // $(document).ready(function(){
 //   var summ =   number +  number2;
 //   var summScreen = $('#screen input');
 //    summ.val(summ);
 // });
 // });
