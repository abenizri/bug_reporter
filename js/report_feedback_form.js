function retriveFeedBackForm() {
          return ` <div class="container-box">
            <button style="display: none;" type="button" class="btn btn-info btn-lg feedback-form" data-toggle="modal" data-target="#myFeedbackModal">Contact Us</button>
         </div>
          <div id="myFeedbackModal" class="modal fade" role="dialog" style="display: none;">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header" style="padding: 20px">
                    <button type="button" id="close" class="close" data-dismiss="modal">×</button>
                      <i class="fa fa-comments-o" aria-hidden="true"></i>
                  </div>
                  <div class="modal-body">
                    <form role="form" method="post" id="reused_form">
                      <div class="form-group">
                          <label for="name">
                              Subject:</label>
                          <input type="text" class="form-control" id="name" placeholder="Add any subject"  name="name" required="" maxlength="50">
                      </div>
                      <div class="form-group">
                          <label for="name">
                              Message:</label>
                          <textarea class="form-control" type="textarea" name="message" id="message" placeholder="Your Message Here" maxlength="6000" rows="7"></textarea>
                      </div>
                      <div class="form-group">
                          <div id="container" style="display: table;width: 100%;">
                             <div style="display: table-cell;">
                                 <label style="font-size: 14px;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;">Section</label>
                             </div>
                             <div class="right" style="position: absolute; right: 15px;">
                                 <select id="inputState" class="form-control">
                                 <option>Production</option>
                                 <option>Test</option>
                                 </select>
                              </div>
                           </div>
                     </div>

                     <div class="form-group">
                       <div>
                           <label for="name">
                               Rank the priority:</label>
                       </div>
                       <div>
                           <img style="margin: 30px;" src="images/minor.png"/>
                           <img style="margin: 30px;"  src="images/moderate.png"/>
                           <img style="margin: 30px;"  src="images/major.png"/>
                           <img style="margin: 30px;"  src="images/critical.png"/>
                         </div>
                     </div>

                     <div class="form-group">
                       <div>
                         <label style="font-size: 14px;font-family: Helvetica Neue,Helvetica,Arial,sans-serif;">Priview: </label>
                       </div>
                       <div>
                         <img id="preview" style="width: 570px; height: 150px; border-style: solid; border-width: 1px; border-color: grey; border-radius: 6px;"></img>
                       </div>
                     </div>
                     <div id="container" style="display: table">
                         <div style=" display: table-cell;width:120px">
                             <button type="submit"  class="btn btn-lg btn-success btn-block" id="btnContactUs">Report</button>
                         </div>
                         <div class="right" style="text-align: right; font-color: black; width: 200px; margin-left: 250px">
                             <p>Powered By LetUsKnow </p>
                         </div>
                     </div>
                  </form>
                    <div id="success_message" style="width:100%; height:100%; display:none; ">
                    <label style="width: 550px;text-align: center;position: absolute; top: 10px;font-size: 14px;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;">Thank you</label>
                      <h4 style="text-align: center">We value anf appricate your commitment!</43>
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
         $('#success_message').show();
         $('#error_message').hide();
     }
     else
     {
         $('#error_message').append('<ul></ul>');

         jQuery.each(data.errors,function(key,val)
         {
             $('#error_message ul').append('<li>'+key+':'+val+'</li>');
         });
         $('#success_message').hide();
         $('#error_message').show();

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
    $('#close').click(function() {
      $('#bugImg').prop('src', 'images/bug-icon.png')
      $('form#reused_form').show();
      $('#success_message').hide();
      $('#error_message').hide();
    })

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
          $('#bugImg').prop('src', 'images/checkmark-48.png')
          // resetImgCapture()
          // resetHighlight()
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
