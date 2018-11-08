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

              <div class="form-check form-check-inline">
              <label for="checkbox">
                  UI Bug:
                </label><br/>
                <input style="margin: 5px" class="form-check-input uiBug" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">Yes</label>
                <input class="form-check-input uiBug" type="checkbox" id="inlineCheckbox2" value="option2">
                <label class="form-check-label" for="inlineCheckbox2">No</label>
              </div>

              <div class="form-check form-check-inline">
              <label for="checkbox">
                  Priority:
                </label><br/>
                <input style="margin: 5px" class="form-check-input priority" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">Critical</label>
                <input class="form-check-input priority" type="checkbox" id="inlineCheckbox2" value="option2">
                <label class="form-check-label" for="inlineCheckbox2"> Minor</label>
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
