function retriveForm() {
  return ` <div class="container-box">
    <button style="display: none;" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Contact Us</button>
 </div>
  <div id="myModal" class="modal fade" role="dialog" style="display: none;">
      <div class="modal-dialog">

        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">×</button>
              <h4 class="modal-title">Report On Bug</h4>
          </div>
          <div class="modal-body">

            <form role="form" method="post" id="reused_form">
              <p>
                  Please fill the form below.
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
                      Description:</label>
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

$(function () {
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
})
