/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yukaiwei
 * @Date: 2021-07-07 09:50:04
 * @LastEditors: yukaiwei
 * @LastEditTime: 2021-07-07 10:25:31
 */

$('.mobile_menu').click(function(){
    if ($(this).hasClass('menu_active')) {
      $(this).removeClass('menu_active')
    }else{
      $(this).addClass('menu_active')
    }
    $('.nav .nav_items').animate({
      width:'toggle',
    },300)
  })


  var wTop=$(window).height();
  window.onresize=()=>{
   var wTop=$(window).height();
  }
  $(window).scroll(()=>{
    animation();
  });

  function animation(){
    var dTop = $(document).scrollTop();
    $(".animation:not(.ani)").each(function(){
      if(dTop+wTop-100 > $(this).offset().top){
        $(this).addClass('ani');
      }
    });
  }
  animation();