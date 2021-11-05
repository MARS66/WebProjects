/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yukaiwei
 */
$(function () {
  // 当前滚动条位置
  let scrollTop = 0
  // 移动动端菜单
  $('.mobile_menu').click(function(){
    if ($(this).hasClass('menuActive')) {
      $(this).removeClass('menuActive')
    }else{
      $(this).addClass('menuActive')
    }
    $('.nav_outer .nav').animate({
      width:'toggle',
    },300)
  })
  // 鼠标滚动事件
  $('body').bind('mousewheel DOMMouseScroll', debounce(function (event) {
    let distance = getDistance();
    const  wheel = event?.originalEvent?.wheelDelta??event?.originalEvent?.detail;
    if (wheel > 0 && $(window).width()>768) wheelUp(distance);
    if (wheel < 0 && $(window).width()>768) wheelDown(distance);
  }, 200));
  
  // 防抖处理
  function debounce(func, wait) {
    let timer;
    return function() {
      let context = this; // 注意 this 指向
      let args = arguments; // arguments中存着e
         
      if (timer) clearTimeout(timer);
 
      timer = setTimeout(() => {
        func.apply(this, args)
      }, wait)
    }
  };
  //  获取滚动距离
  function getDistance() {
    let distance = Math.abs(($(window).scrollTop() - scrollTop).toFixed(0) / 10);
    if (distance == 0) {
      distance = 0
    } else if (distance > 80) {
      distance = 80
    } else if (distance < 50) {
      distance = 50
    };
    scrollTop = $(window).scrollTop();
    return distance;
  }
   // 鼠标上滚
  function wheelUp(distance) {
    navAnimation('5rem', 1)
    ballAnimation(`+=${distance}px`,distance);
  }
  
  // 鼠标下滚
  function wheelDown(distance) {
    navAnimation('0', 0);
    ballAnimation(`-=${distance}px`,-distance);
  }
  // 顶部到航动画
  function navAnimation(height, opacity) {
    if ($(window).scrollTop() > 100) {
      $('.nav_outer').animate({
        height,
        opacity,
      }, 300);
    } else {
      $('.nav_outer').animate({
        height:'5rem',
        opacity:1,
      }, 300);
    }
  }
  // 圆形背景动画
  function ballAnimation(top,distance) {
    const positionTop = $('.alive_ball').position().top + distance;
    const halfHeight = $('.alive_ball').height() / 2;
    const sectionH = $('.alive_ball').parent('section').height();
    if (positionTop > -halfHeight|| positionTop < sectionH + halfHeight) {
      $('.alive_ball').animate({
          top,
      }, 300);
    }
  }
})
 