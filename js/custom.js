var element = null;
var firstClick = true

var mouse = {
   x: 0,
   y: 0,
   startX: 0,
   startY: 0
};
// var elementArray = ['img', 'p','a', 'button', 'input', 'canvas', 'h1' , 'h2', 'h3' , 'h4', 'h5', 'table' ]
var elementArray = ['span:not(.coupontooltip):not(#mainSideMenu2):not(.tooltiptext-menu2) ' , 'ul:not(#mainSideMenu)  li' ,'p']

$(document).ready(function(){
    var buttonState = false
    var highlight = false

    var body = document.body
    var firstChild = body.firstElementChild // main
    var newHtml = retriveForm ()+ ' <div id="canvas">' + firstChild.outerHTML + '</div>'
    body.innerHTML   = newHtml

    var floaterDiv = document.createElement('div')
    floaterDiv.setAttribute('id', 'floater')

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

   $('body').prepend(floaterDiv)
   floaterDiv.innerHTML = `<ul id="mainSideMenu">
       <li id="openBug" class="tooltip fas fa-bug">
         <span class="tooltiptext">Bug Reporting</span>
       </li>
       <li id="highlightElem" class="tooltip fa fa-comments-o">
         <span class="tooltiptext-menu2"><ul id="mainSideMenu2">
             <li id="openBug" class="tooltip fas fa-bug">
             </li>
             <li id="highlightElem" class="tooltip fa fa-comments-o">
             </li>
            </ul></span>
       </li>
       <li class="tooltip fa-flask">
         <span class="tooltiptext">Surveys</span>
       </li>
        <li class="tooltip fa-user">
          <span class="tooltiptext">Help</span>
        </li>
      </ul>`
   // floaterDiv.appendChild(outerMenuUl)

   $("#floater").sticky({topSpacing:5});

   $( "#openBug" ).click(function() {
     resetHighlight()
     var currentCanvasElement = document.getElementById('canvas')
     currentCanvasElement.style.cursor = "crosshair";
     // var span = document.createElement(span)
     // span.setAttribute("coupontooltip")
     $('#canvas').prepend('<span class="coupontooltip">Mark the section you want to report</span>')

     var tooltip = document.querySelectorAll('.coupontooltip');

     document.addEventListener('mousemove', fn, false);

     function fn(e) {
        for (var i=tooltip.length; i--;) {
            tooltip[i].style.left = e.pageX + 'px';
            tooltip[i].style.top = e.pageY + 'px';
            tooltip[i].style.background = '#004DB3'
            tooltip[i].innerHTML = 'Mark the section you want to report'
          }
      }

     if (buttonState === false) {
       createMouseMoveEvent(currentCanvasElement)
       createMouseClickEvent(currentCanvasElement)
       buttonState = true
     } else {
       currentCanvasElement.style.cursor = "default";
       resetImgCapture()
       $('.coupontooltip').remove()
     }
   });

   $('.close').click(function(){
     resetImgCapture()
     resetHighlight()
   })

   $('#highlightElem').click(function() {
     resetImgCapture()
     $('.coupontooltip').remove()
     if (highlight === false) {
      for (var elem of elementArray) {
        var color = $(this).css('border-color')
        var style = $(this).css('border-style')
        var width = $(this).css('border-width')
        var backgroundColor = $(this).css('backgroundColor')
        var clazz = $(this).attr('className');


        $('#canvas').prepend('<span class="coupontooltip">Mark the section you want to report</span>')

        // var tooltip = document.querySelectorAll('.coupontooltip');
        //
        //
        // document.addEventListener('mousemove', fn, false);
        //
        // function fn(e) {
        //    for (var i=tooltip.length; i--;) {
        //        tooltip[i].style.left = e.pageX + 'px';
        //        tooltip[i].style.top = e.pageY + 'px';
        //        tooltip[i].style.background = '#26B85A'
        //        tooltip[i].innerHTML = 'green'
        //      }
        //  }
        $(this).remove('.tooltip2');
         $(elem).mouseover(function() {
           $(this).css('border-width', '1px')
           $(this).css('backgroundColor', '#e5a0b3')

           let tooltipDiv = document.createElement('div')
           tooltipDiv.setAttribute('class', 'tooltip2')
           tooltipDiv.innerHTML = '<span class="tooltiptext2"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span>'
           $(this).prepend(tooltipDiv)


          });

         $(elem).mouseleave(function() {
          var clazz = $(this).attr('className');
          $(this).css('border-width', width)
          $(this).css('backgroundColor', 'inherit')
          $(this).find('div.tooltip2').remove()
         });
      }
       highlight = true
     } else {
     resetHighlight()
     $('.coupontooltip').remove()
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

               tnCanvasContext.drawImage(canvas, startX , startY , newWidth , newHeight ,0,0,newWidth,newHeight);
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

    $(".priority").change(function() {
        if($(this).is(":checked")) {
            $(".priority").each(function() {
                $(this).prop('checked', false);
            });
            $(this).prop('checked', true);
        }
        else {
            $(".priority").each(function() {
                $(this).prop('checked', true);
            });
            $(this).prop('checked', false);
        }
    });

    $(".uiBug").change(function() {
        if($(this).is(":checked")) {
            $(".uiBug").each(function() {
                $(this).prop('checked', false);
            });
            $(this).prop('checked', true);
        }
        else {
            $(".uiBug").each(function() {
                $(this).prop('checked', true);
            });
            $(this).prop('checked', false);
        }
    });


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
              resetImgCapture()
              resetHighlight()
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
    
});
