/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yukaiwei
 * @Date: 2021-07-07 09:50:04
 * @LastEditors: yukaiwei
 * @LastEditTime: 2021-07-07 10:25:31
 */

$('.mobile_menu').click(function(){
  if ($(this).hasClass('menuActive')) {
    $(this).removeClass('menuActive')
  }else{
    $(this).addClass('menuActive')
  }
  $('header .nav').animate({
    width:'toggle',
  },300)
})