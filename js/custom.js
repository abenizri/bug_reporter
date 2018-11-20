var elementArray = ['#salesReport', '#quickChat', '#todoList', '#weather', '.search-box', '#mainContent > div > div.masonry-item.w-100 > div > div:nth-child(1)', '#mainContent > div > div.masonry-item.w-100 > div > div:nth-child(3)','#canvas > div:nth-child(10) > div.sidebar > div > ul > li:nth-child(4) > a > span.icon-holder','#canvas > div:nth-child(10) > div.sidebar > div > ul > li:nth-child(7) > a > span.icon-holder', '.sidebar-menu.scrollable.pos-r.ps li:nth-child(4) span.icon-holder','.sidebar-menu.scrollable.pos-r.ps li:nth-child(7) span.icon-holder']

var elementHelpArray = ['[class="btn btn-lg btn-success"]', '.nav-link', '.col-md-3', '.nav-item', '.peers.ai-c.fxw-nw']
var buttonState = false
var highlight = false
var styleFeedbackMap = new Map()
var styleHelpMap = new Map()

$(document).ready(function() {
    createMenu()
    $('#floater').sticky({topSpacing:5})

    $('#collapce_img').click(function(e) {
      e.stopPropagation()
        var display = $('#preview').css('display')
        if (display && display === 'none') {
          $('#preview').css('display', 'block')
          $('#collapce_img').prop('src', 'images/hiddenCameraClose.png')
        } else {
          $('#preview').css('display', 'none')
          $('#collapce_img').prop('src', 'images/hiddenScreenshot.png')
        }
        e.preventDefault()
    })

    $('#open-bug-menuItem').click(function() {
     resetAll()
     var currentCanvasElement = document.getElementById('canvas')
     currentCanvasElement.style.cursor = 'crosshair'
     $('#canvas').prepend('<span class="mouse-follower-tooltip">Mark the section you want to report</span>')
     mouseFollower('Mark the section you want to report', '#004DB3')

     if (buttonState === false) {
       $('.cover').fadeIn(0);
       $('.cover').fadeTo(0, 0.5);
       createMousemoveEvent(currentCanvasElement)
       createMouseclickEvent(currentCanvasElement)
       createMouseupEvent(currentCanvasElement)

       buttonState = true
     } else {
       resetAll()
     }
    });

    $('#feedback-menuItem').click(function() {
     resetAll()
    })

    $('#feedback-menuItem').mouseover(function() {
      $('#feedback-menuItem > span').css('visibility', 'visible')
    })

    $('#newIdea , #feature-feedback, #feature-NPS').mouseleave(function() {
      $('#feedback-menuItem > span').css('visibility', 'hidden')
    })

    $('.single-item').mouseover(function() {
      $('#feedback-menuItem > span').css('visibility', 'hidden')
    })

    $('#new-idea-submit').click(function(e) {
       // submitBtn(e).bind(this)
       e.stopPropagation()
       $('#new-idea-form').hide();
       $('#new-idea-success_message').show();
       $('#new-idea-image').prop('src', 'images/checkmark-48.png')
       e.preventDefault()
    })

    function stopBtn(e) {
      // e.preventDefault()
      // e.stopPropagation()
      $('body').find('.feedback-tooltip').remove()
      // var path = $(this).first().getPath()
      // var style = styleFeedbackMap.get(path)
      // document.querySelector(path).style = style
      highlightClicked = true
      // $(this).bind( "mouseover", changeColor);
      // $(this).bind( "mouseleave", stopChangingColor);
      $(this).off('click.disabled');
     }

    function changeColor(e) {
       var path = $(this).first().getPath()
       var selectorStyle = document.querySelector(path).style
       styleFeedbackMap.set(path, selectorStyle);
        $(this).css( {
          background: '-webkit-gradient(linear, left top, left bottom, from(#e5a0b3), to(#e5a0b3))',
          'border-color': 'red'})
     }

    function stopChangingColor() {
       var path = $(this).first().getPath()
       var style = styleFeedbackMap.get(path)
       document.querySelector(path).style = style
       highlightClicked = true
     }

    $('#bug-report-form div, #bug-report-form textarea ,#bug-report-form input, #bug-report-form select, #bug-report-form img, #bug-report-form label').click(function(e) {
       e.stopPropagation()
      });

    $('#new-idea-close').click(function(e) {
      // $("#new-idea-form").show()
        clearNewIdeaForm()
        $('#new-idea-image').prop('src', 'images/light-bulb.png')

    })

    function clearNewIdeaForm() {
      $('#newIdeaTitle').val('')
      $('#new-idea-form textarea').val('')
      $("#new-idea-form select").val($("#new-idea-form select option:first").val());
      $('#new-idea-success_message').hide();
      $("#new-idea-form").show()
    }

    function submitBtn(e) {
       e.stopPropagation()
       $('#feedback-form').hide();
       $('#feedback-success_message').show();
       // var path = $(this).first().getPath()
       // var style = styleFeedbackMap.get(path)
       // document.querySelector(path).style = style

       highlightClicked = true
       $(this).off('click.disabled');
       $('.header-img').prop('src', 'images/checkmark-48.png')
       e.preventDefault()
     }

    $('#feature-feedback, #help').click(function(e) {
     e.stopPropagation()
     resetAll()
     var tempArray = ($(this).attr('id') === 'help') ? elementHelpArray : elementArray
     var currentCanvasElement = document.getElementById('canvas')
     var self = this
     if (highlight === false) {
       for (var elem of tempArray) {
         if ($(elem).length === 0) continue
         var id = $(this).attr('id')
         var highlightClicked = false
         $('#canvas').prepend('<span class="mouse-follower-tooltip">Mark the section you want to report</span>')
         setMouseFollowerColorAndText(id)

         var path = $(elem).first().getPath()
         var selectorStyle = document.querySelector(path).style
         styleFeedbackMap.set(path, selectorStyle);
         var color = {
           border: '#90EE90',
           background: 'transparent'
         }
         if (id === 'help') color = { border: '#48A7EB' , background: 'transparent' }
          // $(elem).css( {
          //   // background: `-webkit-gradient(linear, left top, left bottom, from(${color.background}), to(${color.background}))`
          //   'border-color': color.border,
          //   'border-style': 'solid',
          //   'border-width': '2px'
          //
          // })
          $(elem).css("cssText", `border-color: ${color.border} !important; border-style: solid;border-width: 2px`);
            $(elem).each(function( index ) {
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
     $(e.data.elemenToAdd).popupDiv('body > .feedback-tooltip');
     $(e.data.elemenToAdd).on('click.disabled', false);
     $('.close').bind('click', stopBtn.bind(e.data.elemenToAdd))
     $('[id*="-submit"]').bind('click', submitBtn.bind(e.data.elemenToAdd))
     highlightClicked = true
     e.preventDefault()
   }

    function setMouseFollowerColorAndText(id){
       var message = 'Press escape to cancel'
       if (id === 'feature-feedback') {
         mouseFollower(message, '#26B85A')
      } else if (id === 'help') {
         mouseFollower(message, '#D88E8E')
      }
   }

    function retriveFormFeedback(id) {
       if (id === 'feature-feedback') {
         return retriveFeedBackForm()
      } else if (id === 'help') {
        return defaultHelp()
      } else {
          return retriveNewIdeaForm()
      }

    }

    function resetImgCapture(){
     var currentCanvasElement = document.getElementById('canvas')
     var new_element = currentCanvasElement.cloneNode(true);
     currentCanvasElement.parentNode.replaceChild(new_element, currentCanvasElement);
     $('.cover').fadeOut(0);
     $('.cover').fadeOut(0);
     buttonState = false
    }

    function resetHighlight() {
     for (var elem of elementArray) {
       if ($(elem).length === 0) continue
       $('body').off('mouseover', elem, function() {} )
     }
     for (var elem of elementHelpArray) {
       if ($(elem).length === 0) continue
       $('body').off('mouseover', elem, function() {} )
     }
     highlight = false
    }

    function mouseFollower(text, color) {
      var tooltip = document.querySelectorAll('.mouse-follower-tooltip');
      document.addEventListener('mousemove', fn, false);
      var windowWidht = screen.width;
      var windowHeight = screen.height;

       function fn(e) {
          for (var i=tooltip.length; i--;) {
             tooltip[i].style.left =  ( (e.pageX + 270) > windowWidht  ) ? (e.pageX - 270) + 'px' : e.pageX + 'px';
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
        var topReverse = 0
        var top = 0
        if ((pos.left + (w * 2) + 100) >  windowWidht) {
            reverse = ((pos.left + (w * 2)) -  windowWidht) + 350
        }

        if ((pos.top + h + 100) > windowHeight ) {
          // console.log(windowHeight);
          // console.log(pos.top + h + 200);
            topReverse =   ((pos.top + (h) - 500) -  windowHeight) + 150
        }

        if (w < 280 ) w = 350

        $(divToPop).css({ left: pos.left + w - reverse , top: pos.top + h  - topReverse - 55 });

        $(this).click(function(e) {
            $(divToPop).css({ left: pos.left + w - reverse , top: pos.top + h - topReverse - 55});
            if ($(divToPop).css('display') !== 'none') {
                $(divToPop).hide();
            }
            else {
                $(divToPop).show();
            }
        });
    };

    $('#bug-report-close').click(function(e) {
      $('#bugImg').prop('src', 'images/newBugIconNG.png')
      $("#bug-report-form select").val($("#bug-report-form select option:first").val());
      $('#bug-report-success_message').hide();
      $('#bug-report-error_message').hide();
      $('#report_submit').text('Report')
      $('#bug-report-form .message').text('')
      $('#preview').prop('src','')
      $('#preview').css('display', 'none')
      $('#collapce_img').prop('src', 'images/hiddenScreenshot.png')
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
               resetAll()
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

   $('#report_submit').click(function(e) {

          $btn = $(this);
          $btn.prop('type','button' );
          $btn.prop('orig_label',$btn.text());
          $btn.text('Sending ...');
          resetAll()
          $('#bugImg').prop('src', 'images/checkmark-48.png')
          var data = {
           result: 'success'
          }
          after_form_submitted(data)
      });

    function resetAll() {
      resetHighlight()
      resetImgCapture()
      var currentCanvasElement = document.getElementById('canvas')
      currentCanvasElement.style.cursor = 'default';
      $('body').find('.feedback-tooltip').remove()

      for (var elem of elementArray) {
        if ($(elem).length === 0) continue
        $(elem).each(function( index ) {
          var path = $(this).first().getPath()
          var style = styleFeedbackMap.get(path)
          document.querySelector(path).style = style
        });
        $('.mouse-follower-tooltip').remove()
        $(elem).unbind('click', clickFeedbackHandler)
       }

       for (var elem of elementHelpArray) {
         if ($(elem).length === 0) continue
         $(elem).each(function( index ) {
           var path = $(this).first().getPath()
           var style = styleFeedbackMap.get(path)
           document.querySelector(path).style = style
         });
         $('.mouse-follower-tooltip').remove()
         $(elem).unbind('click', clickFeedbackHandler)
        }
    }

    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
          resetAll()
        }
     });
});
