$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const color = $("select#color").val();
    const sport = $("select#sport").val();
    let total = 0

    if (age >= 21){
      total += 10
    } else {
      total += 0
    }; 
    
    if (gender === 'male') {
      total += 10
    }else if (gender === 'female') {
      total += 20
    }else {
      total += 30
    };
    if (color === 'red') {
      total += 10
    }else {
      total += 20
    };
    if (sport === 'football') {
      total += 10
    }else {
      total += 20
    };

    if (total >=67) {
      $("#amy").show();
      $("#keanu").hide();
      $("#cage").hide();
    }else if (total >=53) {
      $("#keanu").show();
      $("#cage").hide();
      $("#amy").hide();
    } else {
      $("#cage").show();
      $("#keanu").hide();
      $("#amy").hide();
    }

    event.preventDefault();

  });
});