$( document ).ready(function() { // when document is ready, it is safe to manipulate
  // whenever any of the persons-counter input fields changes,
  $(".persons_counter").on("input", function() {
    var sum = 0;

    $(".persons_counter").each(function(){
      // validate and fix values
      var minVal = 0;
      var field = $(this).closest('div').attr('id');
      if (field == "adults") {
        minVal = 1;
      }
      var value = $(this).val();
      if (value < minVal | value === "") {
        value = minVal;
      }
      $(this).val(value);
      // done with the validation and value fixing

      // do the sum
      sum += +$(this).val();
    });

    // put the sum value into total persons count
    $("#persons_count").text(sum);
    
    // fix grammer after checking single / multiple person(s)
    if (sum > 1) {
      $("#persons_word").text("people");
    } else {
      $("#persons_word").text("person");
    }

  });
});