var elementArray = ['[class="btn btn-lg btn-success"]', '.nav-link', '.col-md-3', '.nav-item', '.peers.ai-c.fxw-nw']
var element = null;
var firstClick = true
var buttonState = false
var highlight = false
var styleMap = new Map()

$(document).ready(function(){

   createMenu()

   $(document).on('keyup',function(evt) {
       if (evt.keyCode == 27) {
         resetHighlight()
         for (var elem of elementArray) {
           if ($(elem).length === 0) continue
           $(elem).each(function( index ) {
             var path = $(this).first().getPath()
             var style = styleMap.get(path)
             document.querySelector(path).style = style
           });
           $('.mouse-follower-tooltip').remove()
           $(elem).unbind('click', clickFeedbackHandler)
          }
       }
   });

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
     for (var elem of elementArray) {
       if ($(elem).length === 0) continue
       $(elem).each(function( index ) {
         var path = $(this).first().getPath()
         var style = styleMap.get(path)
         document.querySelector(path).style = style
       });
       $('.mouse-follower-tooltip').remove()
       $(elem).unbind('click', clickFeedbackHandler)
      }
   })

   function stopBtn(e) {
      e.preventDefault()
      e.stopPropagation()
      $('body').find('.feedback-tooltip').remove()
      // var path = $(this).first().getPath()
      // var style = styleMap.get(path)
      // document.querySelector(path).style = style
      highlightClicked = true
      // $(this).bind( "mouseover", changeColor);
      // $(this).bind( "mouseleave", stopChangingColor);
      $(this).off('click.disabled');
     }

   function changeColor(e) {
       var path = $(this).first().getPath()
       var selectorStyle = document.querySelector(path).style
       styleMap.set(path, selectorStyle);
        $(this).css( {
          background: '-webkit-gradient(linear, left top, left bottom, from(#e5a0b3), to(#e5a0b3))',
          'border-color': 'red'})

     }

   function stopChangingColor() {
       var path = $(this).first().getPath()
       var style = styleMap.get(path)
       document.querySelector(path).style = style
       highlightClicked = true
     }

   function submitBtn(e) {
       e.stopPropagation()
       $('#feedback-form, #feature-NPS-form, #new-idea-form').hide();
       $('#feedback-success_message, #nps-success_message, #new-idea-success_message').show();
       // var path = $(this).first().getPath()
       // var style = styleMap.get(path)
       // document.querySelector(path).style = style

       highlightClicked = true
       $(this).off('click.disabled');
       $('.header-img').prop('src', 'images/checkmark-48.png')
       e.preventDefault()
     }

   $('#feature-feedback, #feature-NPS , #newIdea').click(function(e) {
     e.stopPropagation()
     $('body').find('div.feedback-tooltip').remove()
     resetImgCapture()
     resetHighlight()
     var currentCanvasElement = document.getElementById('canvas')
     var self = this
     currentCanvasElement.style.cursor = "default";
      if (highlight === false) {
       for (var elem of elementArray) {
         if ($(elem).length === 0) continue
         var id = $(this).attr('id')
         var highlightClicked = false
         $('#canvas').prepend('<span class="mouse-follower-tooltip">Mark the section you want to report</span>')
         setMouseFollowerColorAndText(id)

         var path = $(elem).first().getPath()
         var selectorStyle = document.querySelector(path).style
         styleMap.set(path, selectorStyle);
          $(elem).css( {
            background: '-webkit-gradient(linear, left top, left bottom, from(#e5a0b3), to(#e5a0b3))',
            'border-color': 'red',
            'border-style': 'solid',
            'border-width': '2px'
          })

            $(elem).each(function( index ) {
              // $(elem).parents().outerHeight(550)
              $(elem).parents().css('backgroundColor', 'transparent')
              var path = $(this).first().getPath()
              $(this).bind('click', { elementId: id , elemenToAdd: this }, clickFeedbackHandler)
            });
        }
      } else {
        highlight === true
      }
      e.preventDefault()
    })

   function clickFeedbackHandler(e) {
     e.stopPropagation()
     $('body').find('div.feedback-tooltip').remove()
     var id = $('#' + e.data.elementId).attr('id')
     var tooltipDiv = document.createElement('div')
     tooltipDiv.setAttribute('class', 'feedback-tooltip')
     tooltipDiv.innerHTML = retriveFormFeedback(id)
     $('body').prepend(tooltipDiv)
     $(e.data.elemenToAdd).popupDiv("body > .feedback-tooltip");
     $(e.data.elemenToAdd).on('click.disabled', false);
     $('.close').bind("click", stopBtn.bind(e.data.elemenToAdd))
     $('[id*="-submit"]').bind("click", submitBtn.bind(e.data.elemenToAdd))
     highlightClicked = true
     e.preventDefault()
   }

   function setMouseFollowerColorAndText(id){
       if (id === 'feature-feedback') {
         mouseFollower('Wanna giva a feedback', '#26B85A')
      } else if (id === 'feature-NPS') {
         mouseFollower("Let's share", '#26B85A')
      } else {
         mouseFollower("Have a new idea", '#26B85A')
      }
   }

   function retriveFormFeedback(id) {
       if (id === 'feature-feedback') {
         return retriveFeedBackForm()
      } else if (id === 'feature-NPS') {
        return retriveNpsForm()
      } else {
          return retriveNewIdeaForm()
      }

   }

   function resetImgCapture(){
     var currentCanvasElement = document.getElementById('canvas')
     var new_element = currentCanvasElement.cloneNode(true);
     currentCanvasElement.parentNode.replaceChild(new_element, currentCanvasElement);

     buttonState = false
   }

   function resetHighlight() {
     for (var elem of elementArray) {
       if ($(elem).length === 0) continue
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

   $.fn.extend({
        getPath: function () {
            var path, node = this;
            while (node.length) {
                var realNode = node[0], name = realNode.localName;
                if (!name) break;
                name = name.toLowerCase();

                var parent = node.parent();

                var sameTagSiblings = parent.children(name);
                if (sameTagSiblings.length > 1) {
                    var allSiblings = parent.children();
                    var index = allSiblings.index(realNode) + 1;
                    if (index > 1) {
                        name += ':nth-child(' + index + ')';
                    }
                }

                path = name + (path ? '>' + path : '');
                node = parent;
            }

            return path;
        }
    });

    $.fn.popupDiv = function (divToPop) {
        var pos=$(this).offset();
        var h=$(this).height();
        var w=$(this).width();
        var windowWidht = screen.width;
        var windowHeight = screen.height;

        var reverse = 0;
        var top = 0
        if ((pos.left + 600) >  windowWidht) {
            reverse = ((pos.left + 600) -  windowWidht) + 150
        }

        if ((pos.top + 500) > windowHeight ) {
            top =   ((pos.top + 500) -  windowHeight) + 150
        }

        if (w < 280 ) w = 350

        $(divToPop).css({ left: pos.left + w - reverse , top: pos.top + h  - 55 });

        $(this).click(function(e) {
            $(divToPop).css({ left: pos.left + w - reverse , top: pos.top + h - 55});
            if ($(divToPop).css('display') !== 'none') {
                $(divToPop).hide();
            }
            else {
                $(divToPop).show();
            }
        });
    };

    $('#bug-report-close').click(function() {
      $('#bugImg').prop('src', 'images/bug-icon.png')
      // $('form#reused_form').show();
      $('#bug-report-success_message').hide();
      // $('#error_message').hide();
      $('#btnContactUs').text('Report')
    })

    function after_form_submitted(data) {
         if(data.result == 'success')
         {
             $('#bug-report-form').hide();
             $('#bug-report-success_message').show();
             $('#error_message').hide();
         }
         else
         {
             $('#bug-report-error_message').append('<ul></ul>');

             jQuery.each(data.errors,function(key,val)
             {
                 $('#bug-report-error_message ul').append('<li>'+key+':'+val+'</li>');
             });
             $('#bug-report-success_message').hide();
             $('#bug-report-error_message').show();

             //reverse the response on the button

             $('button[type="button"]', $form).each(function(e)
             {
               e.preventDefault()
               e.stopPropagation()
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
                 e.preventDefault()
             });

         }//else
     }

    $('#bug-report-form').click(function(e)
      {
        e.preventDefault()
        e.stopPropagation()
        $form = $(this);
        //show some response on the button
        $('#btnContactUs', $form).each(function(e)
        {

            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
            resetImgCapture()
            resetHighlight()

        });
          $('#bugImg').prop('src', 'images/checkmark-48.png')
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
            e.preventDefault();
      });



});
