/*
 * @Description: 
 * @version: 1.0
 * @Author: yukaiwei
 * @Date: 2021-10-25 14:41:23
 * @LastEditors: yukaiwei
 * @LastEditTime: 2021-10-27 10:46:57
 */

$('.mobile_menu').click(function(){
  if ($(this).hasClass('menuActive')) {
    $(this).removeClass('menuActive')
  }else{
    $(this).addClass('menuActive')
  }
  $('.nav_top .nav').animate({
    width:'toggle',
  },300)
})
// 移动端按钮
$('.mobile_btns li').click(function (params) {
  const {pageselect} =$(this).data();
  if (pageselect==='toTOP') {
    $("html,body").animate({scrollTop:"0px"},200);
  }else{
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('li').fadeIn(300);
    }else{
      $(this).addClass('active');
      $(this).siblings('li').fadeOut(300);
    }
    $(pageselect).animate({
      width:'toggle',
    },300)
  }
})
// 分类二级菜单
$('.classification .menu').click(function () {
  $(this).next('.leaval2').slideToggle(300)
});

 // 二级菜单显示
$('.classification .leaval2 a').click(function () {
  if ($(window).width()<=768)  $(this).next('.leaval3_box').slideToggle(300);
});
// 选择框
$('.select .select_input').click(function () {
  $(this).next('.options').slideToggle(200)
})

$('.select .options li').click(function () {
  const text = $(this).text();
  $(this).parents('.options').prev('.select_input').children('input').attr('value', text);
  $(this).parents('.options').slideToggle(200);
})
// 复选框
$('.checkbox').click(function () {
  if ($(this).hasClass('checked')) {
    $(this).removeClass('checked')
  } else {
    $(this).addClass('checked')
  }
})
// 复选框
$('.radio').click(function () {
  if ($(this).hasClass('radioed')) {
    $(this).removeClass('radioed')
  } else {
    $(this).addClass('radioed')
  }
})