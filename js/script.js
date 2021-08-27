$(window).on('load', function(event) {
      $('.preLoading').delay(1000).fadeOut(400);

});
$( ".answer" ).click(function() {
    $('.content').fadeOut(100, function(){
        $(".question-love").show();
    });
});
$(function(){
      $(".say-no").on({
          mouseover:function(){
              $(this).css({
                  left:(Math.random()*90)+"%",
                  top:(Math.random()*90)+"%",
              });
          }
      });
  });

  $('.say-no').bind('touchstart', function(){
      $(this).css({
        left:(Math.random()*90)+"%",
        top:(Math.random()*90)+"%"
    });
})
