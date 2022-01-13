/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yukaiwei
 * @Date: 2021-07-07 09:50:04
 * @LastEditors: yukaiwei
 * @LastEditTime: 2022-01-07 11:48:06
 */
$(function () {
  // 初始值
  var wTop=$(window).height();
  window.onresize = () => { wTop = $(window).height() };

  // 显示移动导航按钮
  function showMobileMenu(){
    if ($(window).width() > 768 && $('.mobile_menu').children.length) return;
    $('.mobile_menu').append(`
      <span class="top_line"></span>
      <span class="center_line"></span>
      <span class="bottom_line"></span>
    `)
  }
  
  // 移动端到航
  $('.mobile_menu').click(function(){
    if ($(this).hasClass('menu_active')) {
      $(this).removeClass('menu_active')
    }else{
      $(this).addClass('menu_active')
    }
    $('.mobile_nav').animate({
      width:'toggle',
    },300)
  })

  //入场动画
  function animation(){
    var dTop = $(document).scrollTop();
    $(".animation:not(.ani)").each(function(){
      if(dTop+wTop-100 > $(this).offset().top){
        $(this).addClass('ani');
      }
    });
  }
  // 鼠标滚动动画
  $(window).scroll(()=>{
    animation();
  });

  // 初始执行
  animation();
  showMobileMenu();
})

