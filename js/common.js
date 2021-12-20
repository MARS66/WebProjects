/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yukaiwei
 * @Date: 2021-07-07 09:50:04
 * @LastEditors: yukaiwei
 * @LastEditTime: 2021-12-15 10:46:04
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