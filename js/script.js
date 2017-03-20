// $(document).ready(function(event){
//   // jQuery code
// });

$(document).ready(function(event){
  $(".fa-bars").click(function(){
    $(".menu li").slideToggle("slow");
    console.log ("nav toggle working");
  });
});
