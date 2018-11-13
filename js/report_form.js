function retriveForm() {
          return ` <div class="container-box">
            <button style="display: none;" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Contact Us</button>
         </div>
          <div id="myModal" class="modal fade" role="dialog" style="display: none;">
              <div class="modal-dialog" style="width: 500px">
                <div class="modal-content">
                  <div class="modal-header" style="padding: 20px">
                    <button type="button" id="bug-report-close" class="close" data-dismiss="modal">×</button>
                      <img id="bugImg" src="images/bug-icon.png" style="position: absolute;top: 5px;left: 45%; "/>
                  </div>
                  <div class="modal-body">
                    <form role="form" method="post" id="bug-report-form">
                      <div class="form-group">
                          <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px" for="name" >
                              Yikes! Can you describe the bug?</label>
                          <textarea class="form-control" type="textarea" name="message" id="message" placeholder="Your Message Here" maxlength="6000" rows="7"></textarea>
                      </div>
                      <div class="form-group">
                          <div id="container" style="display: table;width: 100%;">
                             <div style="display: table-cell;">
                                 <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">Section</label>
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
                           <label for="name" style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">
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
                         <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">Priview: </label>
                       </div>
                       <div>
                         <img id="preview" style="width: 470px; height: 150px; border-style: solid; border-width: 1px; border-color: grey; border-radius: 6px;"></img>
                       </div>
                     </div>
                     <div id="container" style="display: table">
                         <div style=" display: table-cell;width:120px">
                             <button type="submit"  class="btn btn-lg btn-success btn-block" id="btnContactUs">Report</button>
                         </div>
                         <div class="right" style="text-align: right; font-color: black; width: 180px; margin-left: 200px">
                             <p>Powered By LetUsKnow </p>
                         </div>
                     </div>
                  </form>
                    <div id="bug-report-success_message" style="width:100%; height:100%; display:none; ">
                    <label style="width: 550px;text-align: center;position: absolute; top: 10px;font-size: 14px;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;">Thank you</label>
                      <h4 style="text-align: center">We value anf appricate your commitment!</h4>
                  </div>
                    <div id="bug-report-error_message" style="width:100%; height:100%; display:none; ">
                      <h3>Error</h3>
                      Sorry there was an error sending your form.
                  </div>
                  </div>
               </div>
             </div>
          </div> `
}

function retriveNpsForm() {
    return `<span class="feedback-tooltip-window">
    <div class="modal-header" style="padding: 20px">
        <button type="button" id="feature-NPS-close" class="close" data-dismiss="modal">×</button>
        <img class="header-img" src="images/feedback-form-icon.png" style="position: absolute;top: 5px;left: 45%; "/>
    </div>
    <div id="nps-success_message" style="width:100%; height:100%; display:none; ">
       <label style="width: 50px;text-align: center; top: 50px;font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">Thank you</label>
       <h4 style="text-align: center;font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">We value and appricate your commitment!</h4>
     </div>
     <div id="nps-error_message" style="width:100%; height:100%; display:none; ">
         <h3>Error</h3>
         Sorry there was an error sending your form.
     </div>
    <form id="feature-NPS-form" class="text-center border border-light p-5">
    <div style="margin: 15px;">
        <p style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">What do you think about us?</p>
        <img src="images/smile-inRow.png"/>
        <div class="form-group">
            <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 15px;word-break: break-all;">How likely are you to recommend us to your friend</br>and colleages?</label>
            <div>
               <img style="margin-left: -4px;width: 370px; height:30px;" src="images/recomend.png"/>
            </div>
            <textarea onclick="return false;" class="form-control" type="textarea" name="message" id="message" placeholder="Your Message Here" maxlength="6000" rows="7"></textarea>
        </div>
           <button id="feature-NPS-submit" style="margin-top: 15px;font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px;background-color: #4f82d6; border-radius: 6px" type="submit">Submit</button>
        </form>
       </span>`
}

function retriveNewIdeaForm() {
  return `<span class="feedback-tooltip-window">
      <div class="modal-header" style="padding: 20px">
        <button type="button" id="new-idea-close" class="close" data-dismiss="avi">×</button>
          <img class="header-img" src="images/light-bulb.png" style="position: absolute;top: 5px;left: 45%; "/>
      </div>
      <div id="new-idea-success_message" style="width:100%; height:100%; display:none; ">
          <label style="width: 50px;text-align: center; top: 50px;font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">Thank you</label>
          <h4 style="text-align: center;font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">We value and appricate your commitment!</h4>
       </div>
       <div id="new-idea-error_message" style="width:100%; height:100%; display:none; ">
           <h3>Error</h3>
           Sorry there was an error sending your form.
       </div>
       <form role="form" method="post" id="new-idea-form" class="text-center border border-light p-5 avi">
         <div style="margin: 15px;">
             <div class="form-row mb-4">
                 <div>
                   <label style="margin-left: 0px;font-family: Comic Sans MS, cursive, sans-serif;font-size: 15px">Wow! Name you Idea</label>
                 </div>
                 <div class="col">
                   <input onclick="return false;" type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Idea Name">
                 </div>
             </div>
             <div class="form-group">
                   <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">What whould you like to share with us?</label>
                   <textarea onclick="return false;"class="form-control" type="textarea" name="message" id="message" placeholder="Please describe your idea in a few senetences" maxlength="6000" rows="7"></textarea>
             </div>
             <div class="form-group" >
                   <div id="container" style="display: table;width: 100%;">
                      <div style="position: absolute; left: 15px;display: table-cell;">
                          <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">Which section does it affect?</label>
                      </div>
                      <div class="right" style="position: absolute; right: 15px;">
                          <select onclick="return false;" id="inputState" class="form-control" style="height: 30px;">
                             <option>Products</option>
                             <option>Test</option>
                          </select>
                       </div>
             </div>
         </div>
         <div style="margin-top: 45px;width: 100%">
             <input onclick="return false;" id="ex1" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="10" data-slider-step="1" data-slider-value="0"/>
             <div style="position: absolute; left: 15px;">
               <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">Nice to have</label>
             </div>
             <div <div style="position: absolute; right: 15px;">
               <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">Must have</label>
             </div>

             <script>
             $('#ex1').slider({
               formatter: function(value) {
               if ( value < 3 ) {
                   value = "Nice to have";
               }
               else if ( value > 7 ) {
                   value = "Must have";
               } else {
                 value = "Cannot say"
               }
               return value;
               }
             });
             </script>
         </div>
         <button id="new-idea-submit" style="margin-top: 15px;font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px;background-color: #4f82d6; border-radius: 6px" type="submit">Submit</button>
       </form>
      </div>
    </span>`
}

function retriveFeedBackForm() {
  return  `<span class="feedback-tooltip-window">
    <div class="modal-header" style="padding: 20px">
        <label style="width: 50px;text-align: center; top: 50px;font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">Thank you</label>
        <h4 style="text-align: center;font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">We value and appricate your commitment!</h4>
    </div>
    <div id="feedback-success_message" style="width:100%; height:100%; display:none; ">
       <label style="width: 50px;text-align: center; top: 50px;font-size: 14px;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;">Thank you</label>
       <h4 style="text-align: center">We value and appricate your commitment!</h4>
     </div>
     <div id="feedback-error_message" style="width:100%; height:100%; display:none; ">
         <h3>Error</h3>
         Sorry there was an error sending your form.
     </div>
    <form id="feedback-form" role="form "class="text-center border border-light p-5">
       <div style="margin: 15px;">
         <p style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px">What do you think about it?</p>
         <img src="images/smile-inRow.png"/>
         <div class="form-group">
            <label style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 15px">Would you like to add a comment?</label>
            <textarea class="form-control" type="textarea" name="message" id="message" placeholder="Your Message Here" maxlength="6000" rows="7"></textarea>
         </div>
         <button id="feedback-submit" style="font-family: Comic Sans MS, cursive, sans-serif;font-size: 13px;background-color: #4f82d6; border-radius: 6px"  type="submit">Submit</button>
     </form>
     <script>

     </script>
   </span>`
}

function after_form_submitted(data, id) {
    var formId = '#' + id + 'form'
    var success = '#' + id + 'success_message'
    var error = '#' + id + '#error_message'
     if(data.result == 'success')
     {
         $(formId).hide();
         $(success).show();
         $(error).hide();
     }
     else
     {
         $(error).append('<ul></ul>');

         jQuery.each(data.errors,function(key,val)
         {
             $(error + 'ul').append('<li>'+key+':'+val+'</li>');
         });
         $(success).hide();
         $(error).show();

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
//
// $(function () {
//     // $('.close').click(function() {
//     //   console.log('here');
//     //   var id = '#' + $(this).prop('id').replace('close', '')
//     //   console.log(id);
//     //   $('#bugImg').prop('src', 'images/bug-icon.png')
//     //
//     //   $(id + 'form').show();
//     //   $(id + 'success_message').hide();
//     //   $(id + 'error_message').hide();
//     // })
//
//     $('form').submit(function(e)
//       {
//         // e.preventDefault();
//         $form = $(this);
//         //show some response on the button
//         $('button[type="submit"]', $form).each(function()
//         {
//             $btn = $(this);
//             $btn.prop('type','button' );
//             $btn.prop('orig_label',$btn.text());
//             $btn.text('Sending ...');
//
//         });
//           $('#bugImg').prop('src', 'images/checkmark-48.png')
//           // resetImgCapture()
//           // resetHighlight()
//           var data = {
//             result: 'success'
//           }
//           after_form_submitted(data, id)
//             //         $.ajax({
//             //     type: "POST",
//             //     url: 'http://reusableforms.com/handler/p/bootstrap-popup-email-form',
//             //     data: $form.serialize(),
//             //     success: after_form_submitted,
//             //     dataType: 'json'
//             // });
//
//       });
// })
