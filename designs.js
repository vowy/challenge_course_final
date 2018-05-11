// Select color input
console.log($("#colorPicker").val());
// Select size input
console.log($("#inputHeight").val());
console.log($("#inputWeight").val());

// Submit Button
$("input[type='submit']").on("click",function(event) {

  event.preventDefault();
  const height = $("#inputHeight").val();
  const width = $("#inputWeight").val();

  $("#pixelCanvas").empty();
  makeGrid(height,width);
});
function makeGrid(height,width) {

// for number up to height
for (let i = 0; i < height; i++) {
  $("#pixelCanvas").append($("<tr></tr>"));

  for (let j = 0; j<width; j++){

    //add a tr to row
    $("tr").last().append($("<td></td>"));
  }
}
}
//on click fill bg
$("#pixelCanvas").on("click","td",function(){
  let color = $("#colorPicker").val();
  $(this).attr("bgcolor", color);
});
