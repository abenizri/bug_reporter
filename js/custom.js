var element = null;
var firstClick = true

var mouse = {
   x: 0,
   y: 0,
   startX: 0,
   startY: 0
};
var elementArray = ['img', 'p','a', 'button', 'input', 'canvas', 'h1' , 'h2', 'h3' , 'h4', 'h5', 'table' ]

$(document).ready(function(){
    var buttonState = false
    var highlight = false

    var body = document.body
    var firstChild = body.firstElementChild // main
    var newHtml = retriveForm ()+ ' <div id="canvas">' + firstChild.outerHTML + '</div>'
    body.innerHTML   = newHtml

    var floaterDiv = document.createElement('div')
    floaterDiv.setAttribute('id', 'floater')
    // var menuImg = document.createElement('img')
    // menuImg.src = 'setting.png'
    var outerMenuUl = document.createElement('ul')
    outerMenuUl .setAttribute('id', 'nav')
    var menuli1 = document.createElement('li')
    var menuA = document.createElement('a')
    menuA.setAttribute('href','#')
    menuA.setAttribute('title','Get in touch with us')
    menuA.text = 'Support'


    var innerMenuUl = document.createElement('ul')
    var innerMenuli1 = document.createElement('li')
    var innerMenuA1 = document.createElement('a')
    innerMenuA1.setAttribute('href','#')
    innerMenuA1.text = 'Open new issue'
    innerMenuA1.setAttribute('id', 'openBug')
    innerMenuli1.appendChild(innerMenuA1)

    var innerMenuli2 = document.createElement('li')
    var innerMenuA2 = document.createElement('a')
    innerMenuA2.setAttribute('href','#')
    innerMenuA2.setAttribute('id', 'highlightElem')
    innerMenuA2.text = 'Rating selection'
    innerMenuli2.appendChild(innerMenuA2)

    innerMenuUl.appendChild(innerMenuli1)
    innerMenuUl.appendChild(innerMenuli2)

    menuli1.appendChild(menuA)
    menuli1.appendChild(innerMenuUl)

    outerMenuUl.appendChild(menuli1)
    // floaterDiv.appendChild(menuImg)

   $('body').prepend(floaterDiv)
   floaterDiv.innerHTML = '<ul> <li id="openBug" class="fas fa-bug"></li><li id="highlightElem" class="fa fa-comments-o"></li><li class="fa-flask"></li>  <li class="fa-user"></li></ul>'
   // floaterDiv.appendChild(outerMenuUl)

   $("#floater").sticky({topSpacing:5});

   $( "#openBug" ).click(function() {
     resetHighlight()
     var currentCanvasElement = document.getElementById('canvas')
     if (buttonState === false) {
       createMouseMoveEvent(currentCanvasElement)
       createMouseClickEvent(currentCanvasElement)
       buttonState = true
     } else {
       resetImgCapture()
     }
   });
   $('#highlightElem').click(function() {
     resetImgCapture()
     if (highlight === false) {
      for (var elem of elementArray) {
        var color = $(this).css('border-color')
        var style = $(this).css('border-style')
        var width = $(this).css('border-width')
        var backgroundColor = $(this).css('backgroundColor')

         $(elem).mouseover(function() {
           $(this).css('border-width', '1px')
           $(this).css('backgroundColor', '#e5a0b3')
           // var clazz = $(this).attr('class');
           // var className = (clazz && clazz.length > 0 ) ? clazz + ' tooltip' : 'tooltip'
           // console.log(className);
           // // $(this).parent().is( "div" )
           //
           // console.log($(this).find('.tooltip').length);
           // if ($(this).find('.tooltip').length === 0) {
           //    if ($(this).is( "div" )) {
           //      $(this).attr('className', className)
           //    } else {
           //      $(this).wrap( '<div class="tooltip"></div>' );
           //    }
           //
           //    $(this).prepend(`<span class="tooltiptext"><span class="fa fa-star checked"><span class="fa fa-star checked"></span><span class="fa fa-star checked"><span class="fa fa-star"></span></span>`)
           // } else {
           //   // $(this).wrap(`<div class="tooltip">Hover over me <span class="tooltiptext">Tooltip text</span></div>`)
           // }
          });
         $(elem).mouseleave(function() {
          var clazz = $(this).attr('class');
          // var c = (clazz && clazz.length > 0 )
          $(this).css('border-width', width)
          $(this).css('backgroundColor', 'inherit')

          // if (clazz && clazz.length > 0  && clazz.includes('tooltip')) {
          //   if (clazz && clazz.length > 0 ) $(this).attr('className', clazz.replace('tooltip', ''))
          //   $(this).remove('.tooltiptext')
          // } else {
          //    if ($(this).parent().is( "div" )){
          //      var clazzParent =$(this).parent().prop('className')
          //      if (clazzParent && clazzParent.length > 0 && clazzParent.includes('tooltip')) $(this).parent().attr('className', clazzParent.replace('tooltip', ''))
          //        $(this).parent().remove('.tooltiptext')
          //    }
          // }

          //   if ($(this).parent().is( "div" )){
          //     var clazzParent =$(this).parent().attr('class');
          //     var cP = (clazzParent && clazzParent.length > 0 )
          //     $(this).parent().remove('.tooltip')
          //     $(this).parent().unwrap('.tooltip')
          //   }
          // }

         });
      }
       highlight = true
     } else {
     resetHighlight()
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

   function setMousePosition(e) {
         var ev = e || window.event; //Moz || IE
         if (ev.pageX) { //Moz
             mouse.x = ev.pageX + window.pageXOffset;
             mouse.y = ev.pageY + window.pageYOffset;
         } else if (ev.clientX) { //IE
             mouse.x = ev.clientX + document.body.scrollLeft;
             mouse.y = ev.clientY + document.body.scrollTop;
         }
     };

   function createMouseMoveEvent(e) {
         canvas.onmousemove = function (e) {
             if (firstClick === true) {
               firstClick = false
             } else {
               setMousePosition(e);
             }
             if (element !== null) {
                 element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                 element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
                 element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
                 element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
             }
         }
   }

   function createMouseClickEvent(e) {
     canvas.onclick = function (e) {
       // active buttom, show form and clean inputs
       $('form#reused_form').css('display', 'block');
       document.getElementById('btnContactUs').setAttribute('type', 'submit')
       document.getElementById('name').value = ''
       document.getElementById('message').value = ''

         if (element !== null) {
           var rec = document.querySelector('.rectangle')
           if (rec !== null ) {
             var newWidth = rec.style.width.toString().replace('px', '')
             var newHeight = rec.style.height.toString().replace('px', '')
             var startX = rec.style.left.toString().replace('px', '')
             var startY = rec.style.top.toString().replace('px', '')

             rec.parentNode.removeChild(rec)
             canvas.style.cursor = "default";
             html2canvas(document.querySelector("#canvas")).then(canvas => {
               var tnCanvas = document.createElement('canvas');
               var tnCanvasContext = tnCanvas.getContext('2d');
               tnCanvas.width = newWidth; tnCanvas.height = newHeight;

               tnCanvasContext.drawImage(canvas, startX * 2, startY * 2, newWidth * 2, newHeight * 2,0,0,newWidth,newHeight);
               document.querySelector('[class="btn btn-info btn-lg"]').click()
               document.querySelector('#preview').src = tnCanvas.toDataURL()
             });
             element = null;
           }
             console.log("finsihed.");
         } else {
             console.log("begun.");
             mouse.startX = mouse.x;
             mouse.startY = mouse.y;
             element = document.createElement('div');
             element.className = 'rectangle'
             element.style.left = mouse.x + 'px';
             element.style.top = mouse.y + 'px';
             canvas.appendChild(element)
             canvas.style.cursor = "crosshair";
         }
    }
    }

   function after_form_submitted(data) {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            // $('#success_message').show();
            // $('#error_message').hide();
        }
        else
        {
            // $('#error_message').append('<ul></ul>');
            //
            // jQuery.each(data.errors,function(key,val)
            // {
            //     $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            // });
            // $('#success_message').hide();
            // $('#error_message').show();

            //reverse the response on the button

            $('button[type="button"]', $form).each(function()
            {

                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

    $('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
          // document.querySelector('#floater').click()
          resetImgCapture()
          resetHighlight()
          var data = {
            result: 'success'
          }
          after_form_submitted(data)
            //         $.ajax({
            //     type: "POST",
            //     url: 'http://reusableforms.com/handler/p/bootstrap-popup-email-form',
            //     data: $form.serialize(),
            //     success: after_form_submitted,
            //     dataType: 'json'
            // });

      });
      function retriveForm() {
        return ` <div class="container-box">
          <button style="display: none;" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Contact Us</button>
       </div>
        <div id="myModal" class="modal fade" role="dialog" style="display: none;">
            <div class="modal-dialog">

              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">×</button>
                    <h4 class="modal-title">Contact Us</h4>
                </div>
                <div class="modal-body">

                  <form role="form" method="post" id="reused_form">
                    <p>
                        Send your message in the form below and we will get back to you as early as possible.
                    </p>

                    <div class="form-group">
                        <label for="name">
                            Subject:</label>
                        <input type="text" class="form-control" id="name" name="name" required="" maxlength="50">

                    </div>
                    <div class="form-group">
                        <label for="email">
                            Email:</label>
                        <input type="email" class="form-control" id="email" name="email" required="" maxlength="50" value="avibenb@gmail.com">
                    </div>
                    <div class="form-group">
                        <label for="name">
                            Message:</label>
                        <textarea class="form-control" type="textarea" name="message" id="message" placeholder="Your Message Here" maxlength="6000" rows="7"></textarea>
                    </div>
                    <div class="form-group">
                        <label> Preview:  </label>
                        <img id="preview" ></img>

                    </div>
                    <button type="submit" class="btn btn-lg btn-success btn-block" id="btnContactUs">Post It! →</button>

                </form>
                  <div id="success_message" style="width:100%; height:100%; display:none; ">
                    <h3>Sent your message successfully!</h3>
                </div>
                  <div id="error_message" style="width:100%; height:100%; display:none; ">
                    <h3>Error</h3>
                    Sorry there was an error sending your form.

                </div>
                </div>
             </div>
           </div>
        </div> `
      }
});
