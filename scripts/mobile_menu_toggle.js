try {
    $('.btn-show-menu-mobile').on('click', function () {
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });
  
    var arrowMainMenu = $('.arrow-main-menu-m');
  
    for (var i = 0; i < arrowMainMenu.length; i++) {
        $(arrowMainMenu[i]).on('click', function () {
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }
  
    $(window).on('resize', function () {
        if ($(window).width() >= 992) {
            if ($('.menu-mobile').css('display') === 'block') {
                $('.menu-mobile').css('display', 'none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }
  
            $('.sub-menu-m').each(function () {
                if ($(this).css('display') === 'block') {
                    $(this).css('display', 'none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });
  
        }
    });
  } catch (er) { console.log(er); }
  
  try {
      $(window).on('load', function(){
          $('.sub-mega-menu .nav-pills > a').hover(function() {
              $(this).tab('show');
          });
      });
  } catch(er) {console.log(er);}