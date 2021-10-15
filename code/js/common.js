/*
 * @Description: 
 * @version: 1.0
 * @Author: kevin
 * @Date: 2021-10-14 10:21:22
 */

$('.mobile_menu').click(function(){
  if ($(this).hasClass('menuActive')) {
    $(this).removeClass('menuActive')
  }else{
    $(this).addClass('menuActive')
  }
  $('.site-header .header-nav').animate({
    width:'toggle',
  },300)
})
$('.category-list .category-item').click(function () {
  if ($(window).width()<=768) $(this).siblings('.leaval2_menu').slideToggle(300);
})
// 复选框
$('.checkbox').click(function () {
  if ($(this).hasClass('checked')) {
    $(this).removeClass('checked')
  } else {
    $(this).addClass('checked')
  }
})

// 个人中心
$('.center_menu .leaval_2 a').click(function () {
  if (!$(this).hasClass('hl')) {
    $('.center_menu .leaval_2 a').removeClass('hl')
    $(this).addClass('hl');
  } 
})
$('article .icon-caidan').click(function () {
    $(' .center_layout aside').slideToggle(300)
})