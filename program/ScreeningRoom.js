// 使用了jQuery
(function($) { 
  $(function() {
    // 如果链接有下拉菜单，添加子菜单切换
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      //当选择另一个下拉框时，关闭一个下拉框
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    //点击离开下拉菜单将删除下拉菜单类
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    //切换打开和关闭导航样式点击
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);