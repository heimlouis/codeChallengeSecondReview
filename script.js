console.log('JS is ready');
$(document).ready(function(){
  console.log('JQ is ready');

let buttonClicks = 0;

$('#buttonClick').on('click',function(){
  console.log('in button click function');
  buttonClicks++;
$('body').append('<div><p class="red">'+buttonClicks+'<br><button id="swapButton">Swap</button><button id="deleteButton">Delete</button></p></div>');
});
$('body').on('click','#swapButton', function(){
  //hasClass doesnt use the '#' or '.' - just add the class name
  //$(this) = a "callback" it is needed when the object it is referencing is not defined, we need to go back to the one that is
  //the css needs to be a class "." as this the only way to use .hasClass .addClass .removeClass
  if($(this).parent().hasClass("red")){
    $(this).parent().last().addClass("yellow");
    $(this).parent().last().removeClass("red");
  }
  else if($(this).parent().hasClass("yellow")){
    $(this).parent().last().addClass("red");
    $(this).parent().last().removeClass("yellow");
  }
});
$('body').on('click', '#deleteButton', function(){
  $(this).parent().hide();
});//end delete

});
