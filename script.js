
$(document).ready(function(){
                                                      formRqrdOnDocReady = 'navbar';
                           
                                                      $("a[href='#overview']").on('click',function(e){e.preventDefault();customScrollTo($('#overview'));});
                                                      $("a[href='#dscn-topics']").on('click',function(e){e.preventDefault();customScrollTo($('#dscn-topics'));});
                                                      
                                            
                                                      $("a[href='#contacts']").on('click',function(e){e.preventDefault();customScrollTo($('#contacts'));});
                                               
                                                      
                                                      //$(".book-btn").on('click',function(){
                                                      //customScrollTo("#registration");
                                                      //});
                                                      
                                                      });
                                                      function customScrollTo($selector){
                                                      
                                                        //console.log($selector);
                                                        if(jQuery.type($selector) === 'string')
                                                        $selector = $($selector);
                                                        //console.log($selector.length);
                                                        
                                                        if($selector.length)
                                                        {
                                                          $('html, body').animate({
                                                          scrollTop: $selector.offset().top - 90
                                                          }, 0);
                                                        }
                                                      }
                                                      /*
                                                      $(document).ready(function(){
                                                      setTimeout(function(){
                                                      
                                                      if(typeof $_GET['section'] != 'undefined')
                                                      {
                                                      customScrollTo("#"+$_G$(docET['section']);
                                                      }
                                                      
                                                      
                                                      },1000);
                                                      });
                                                      */


$(window).scroll(function(){
                                                          if ($(this).scrollTop() > 50) {
                                                            $('.navbar').addClass('show');
                                                          }
                                                           else {
                                                            $('.navbar').removeClass('show');
                                                          }
                                                        });
