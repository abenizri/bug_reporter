var elementArray = ['[class="btn btn-lg btn-success"]']
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

   $('#newIdea , #feature-feedback, #feature-NPS').mouseleave(function() {
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
           <form class="text-center border border-light p-5">
           <div style="margin: 15px;">
               <img src="images/feedback-form-icon.png"/>
               <p style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">What do you think about it?</p>
               <img src="images/smile-inRow.png"/>
               <div class="form-group">
                   <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 15px">Would you like to add a comment?</label>
                   <textarea class="form-control" type="textarea" name="message" id="message" placeholder="Your Message Here" maxlength="6000" rows="7"></textarea>
               </div>
                  <button style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px;background-color: #4f82d6; border-radius: 6px" class="" type="submit">Submit</button>
               </form>
              <div>
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
