$(document).ready(function() {
  $("form#inputs").submit(function(event) {
    event.preventDefault();
    let numbers = [];
    let output = 0;
    const countTo = parseInt($("input#input1").val());
    const countBy = parseInt($("input#input2").val());
    for (let i = 0; i < countTo; i += countBy) {
      output += countBy;
      numbers.push(output);
      console.log(numbers);
    }
  });
});