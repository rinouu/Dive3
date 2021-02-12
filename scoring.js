// Après avoir chargé le DOM, exécutez le traitement dans function ().
$(document).ready(function(){
  
  function score_indicate(){
  
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    let sum = subject_points.reduce((accumulator, currentValue)=> accumulator + currentValue);
    /*sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];*/

    return(sum);
    
  };
    function avg_indicate(){
    let average;
    average= score_indicate()/5;
    return(average);
  };
  
  function get_achievement(){

    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
 
    if ( averageIndicate >= 80){
      return "A";
  
    } else if ( averageIndicate >= 60) {
      return "B";

    } else if ( averageIndicate >= 40) {
      return "C";

    } else {
      return "D";
    }
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
  
    let number = subject_points.length;
   
    let judge = "Réussite";

    for (i=0; i<number; i++) {
      if (subject_points[i] < 60) {
        judge= "Echec";
        break;
      }
    }
    return (judge);
  };
  
  function judgement(){
    
    let achievement = get_achievement();
    
    let pass_or_failure = get_pass_or_failure();
    
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Votre note est ${achievement}. C'est un(e) ${pass_or_failure}</label>`);
  };
  
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    $("#sum_indicate").text(score_indicate());
    $("#average_indicate").text(avg_indicate());
  });
 
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
 
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  
  $('#btn-declaration').click(function() {
    $('label').remove('#alert-indicate');
    judgement();
  });
});