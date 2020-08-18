$(document).ready(function() {
  $("form#inputs").submit(function(event) {
    event.preventDefault();
    let numbers = [];
    let output = 0;
    const countTo = parseInt($("input#input1").val());
    const countBy = parseInt($("input#input2").val());
    //alert(countTo);
    if (isNaN(countTo)) {
      alert("Count to is not a number.");
    } else if (countTo < 0) {
      alert("Count to is a negative number.");
    } else if (isNaN(countBy)) {
      alert("Count by is not a number.");
    } else if (countBy < 0) {
      alert("Count by is a negative number.");
    } else if (countBy > countTo) {
      alert("Count by is larger than count to.");
    } else {
      for (let i = 0; i < countTo; i += countBy) {
        output += countBy;
        numbers.push(output);
        console.log(numbers);
      };
    };
  });
});