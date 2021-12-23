/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yukaiwei
 * @Date: 2021-07-07 09:50:04
 * @LastEditors: yukaiwei
 * @LastEditTime: 2021-12-22 13:31:29
 */
$(function (params) {
  var wTop=$(window).height();
  window.onresize=()=>{
   var wTop=$(window).height();
  }
  
  // 移动端到航
  $('.mobile_menu').click(function(){
    if ($(this).hasClass('menu_active')) {
      $(this).removeClass('menu_active')
    }else{
      $(this).addClass('menu_active')
    }
    $('.nav').animate({
      width:'toggle',
    },300)
  })
  //  二级菜单显示隐藏
  $('.nav .drop').click(function(){
    $(this).siblings('.second_menu').slideToggle(300).parent('li').siblings('li').children('.second_menu').slideUp(300)
  })
  // 鼠标滚动动画
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
})

