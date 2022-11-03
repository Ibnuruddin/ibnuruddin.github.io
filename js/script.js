$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html').animate({
     scrollTop: elemenTujuan.offset().top -60
    }, 1000, 'swing');
   
    e.preventDefault();
   });

   //parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2.4 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // portfolio
    if(wScroll > $('.portfolio').offset().top -250){
       $('.portfolio .img-thumbnail').each(function(i){
        setTimeout(function(){
            $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
        }, 300 * (i+1));
       });
       
     
    }

});
