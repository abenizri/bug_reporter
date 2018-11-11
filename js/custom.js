var elementArray = ['span:not(.mouse-follower-tooltip):not(#mainSideMenu2):not(.secondery-menu-tooltiptext span):not(.secondery-menu-tooltiptext):not(#feature-feedback):not(newIdea) ' , 'ul:not(#mainSideMenu)  li' ,'p']
var element = null;
var firstClick = true
var buttonState = false
var highlight = false


$(document).ready(function(){

   createMenu()

   $("#floater").sticky({topSpacing:5});

   $( "#open-bug" ).click(function() {
     resetHighlight()
     var currentCanvasElement = document.getElementById('canvas')
     currentCanvasElement.style.cursor = "crosshair";
     // var span = document.createElement(span)
     // span.setAttribute("mouse-follower-tooltip")
     $('#canvas').prepend('<span class="mouse-follower-tooltip">Mark the section you want to report</span>')

     mouseFollower('Mark the section you want to report', '#004DB3')

     if (buttonState === false) {
       createMousemoveEvent(currentCanvasElement)
       createMouseclickEvent(currentCanvasElement)
       createMouseupEvent(currentCanvasElement)
       buttonState = true
     } else {
       currentCanvasElement.style.cursor = "default";
       resetImgCapture()
       $('.mouse-follower-tooltip').remove()
     }
   });

   $('.close').click(function(){
     resetImgCapture()
     resetHighlight()
   })

   $('#feedback-menuItem').mouseover(function() {
      $('#feedback-menuItem > span').css('visibility', 'visible')
   })

   $('#newIdea , #feature-feedback').mouseleave(function() {
     // setTimeout(function(){ $('#feedback-menuItem > span').css('visibility', 'hidden')}, 5000);
     $('#feedback-menuItem > span').css('visibility', 'hidden')

   })

   $('.single-item').mouseover(function() {
      $('#feedback-menuItem > span').css('visibility', 'hidden')
   })


   $('#feedback-menuItem').click(function() {
     resetHighlight()
   })

   $('#feature-feedback').click(function() {
     resetImgCapture()
     var currentCanvasElement = document.getElementById('canvas')
     currentCanvasElement.style.cursor = "default";
     $('.mouse-follower-tooltip').remove()



     if (highlight === false) {
      for (var elem of elementArray) {
        var color = $(this).css('border-color')
        var style = $(this).css('border-style')
        var width = $(this).css('border-width')
        var backgroundColor = $(this).css('backgroundColor')
        var clazz = $(this).attr('className');


        $('#canvas').prepend('<span class="mouse-follower-tooltip">Mark the section you want to report</span>')
        mouseFollower('Please give feedback', '#26B85A')


        $(this).remove('.feedback-tooltip');
         $(elem).mouseover(function() {
           // $(this).css('border-width', '1px')
           // $(this).css('backgroundColor', '#e5a0b3')

           let tooltipDiv = document.createElement('div')
           tooltipDiv.setAttribute('class', 'feedback-tooltip')
           tooltipDiv.innerHTML = `<span class="feedback-tooltip-window">
                  <span style="border-bottom:1px solid black" id="feedback-window-title"> Overall Rating</span>
                  <br/>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <br/>
                  <span id="feedback-window-title"> What do you thing about this feature?</span>
                  <div class="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="Amazing">5 stars</label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="Very Good">4 stars</label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="Average">3 stars</label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="Not Good">2 stars</label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="Terrible">1 star</label>
                 </div>
              </span>`
           $(this).prepend(tooltipDiv)
          });

         $(elem).mouseleave(function() {
          var clazz = $(this).attr('className');
          // $(this).css('border-width', width)
          // $(this).css('backgroundColor', 'inherit')
          $(this).find('div.feedback-tooltip').remove()
         });
      }
       highlight = true
     } else {
     resetHighlight()
     $('.mouse-follower-tooltip').remove()
    }
   })

   function resetImgCapture(){
     var currentCanvasElement = document.getElementById('canvas')
     var new_element = currentCanvasElement.cloneNode(true);
     currentCanvasElement.parentNode.replaceChild(new_element, currentCanvasElement);

     buttonState = false
   }

   function resetHighlight() {
     for (var elem of elementArray) {
       $('body').off( "mouseover", elem, function() {} )
     }
     highlight = false
   }

   function mouseFollower(text, color) {
     var tooltip = document.querySelectorAll('.mouse-follower-tooltip');
     document.addEventListener('mousemove', fn, false);
      function fn(e) {
         for (var i=tooltip.length; i--;) {
             tooltip[i].style.left = e.pageX + 'px';
             tooltip[i].style.top = e.pageY + 'px';
             tooltip[i].style.background = color // '#004DB3'
             tooltip[i].innerHTML = text // 'Mark the section you want to report'
           }
       }
    }
});
