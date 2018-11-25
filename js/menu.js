function createMenu() {

  $('body').prepend('<div class="cover"></div>')
  $('body').wrapInner( "<div id='canvas'></div>");
  $('body').append(retriveForm())
  $('body').append(newIdeapopup())
  $('body').prepend('<div id="sticky"></div>')
  $('body').prepend('<div id="floater"></div>')

  document.getElementById('sticky').innerHTML = `<img src="images/intercom.png" style="width: 370px; height: 550px; border-radius: 6px; margin-left: 73%;"/>`
  document.getElementById('floater').innerHTML =`
        <ul id="mainSideMenu">
            <li id="open-bug-menuItem" class="menu-tooltip fas fa-bug single-item" style="--transparent-background-color:#004DB3;">
              <span class="menu-tooltiptext">Found a bug, let's report</span>
            </li>
            <li id="feedback-menuItem" class="menu-tooltip fa fa-comments-o multi-item"  style="--transparent-background-color:#26B85A;">
              <span class="secondery-menu-tooltiptext">
                <div class="dropdown">
                  <a style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #fff;  border-top-left-radius:6px; border-top-right-radius:6px;" data-toggle="modal" data-target="#squarespaceModal"  id="newIdea"> Have a new idea? <span style="font-family: 'fontawesome';" class="fa-lightbulb-o"></span></a>
                  <a style="border-bottom-left-radius:6px; border-bottom-right-radius:6px;" id="feature-feedback"> Feature Feedback <span style="font-family: 'fontawesome';" class="fa-check-square-o"></span></a>
                </div>
              </span>
            </li>
            <li id="surveys-menuItem" class="menu-tooltip fa-flask single-item" style="--transparent-background-color:#FFD533;">
              <span class="secondery-menu-tooltiptext">
                <div class="dropdown">
                  <a style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #fff;  border-top-left-radius:6px; border-top-right-radius:6px;" data-toggle="modal" id="newIdea"> General Survey <span style="font-family: 'fontawesome';" class="fa fa-pencil-square-o"></span></a>
                  <a style="border-bottom-left-radius:6px; border-bottom-right-radius:6px;" id="serveyV1"> V1.0.1 Survey <span style="font-family: 'fontawesome';" class="fa-check-square-o"></span></a>
                </div>
              </span>
            </li>
            <li id="help-menuItem" class="menu-tooltip fa-user single-item" style="--transparent-background-color:#D88E8E;">
              <span class="secondery-menu-tooltiptext">
                <div class="dropdown">
                  <a style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #fff;  border-top-left-radius:6px; border-top-right-radius:6px;" data-toggle="modal" id="generalHelp"> General walkthroughs <span style="font-family: 'fontawesome';" class="fa-question-circle"></span></a>
                  <a style="border-bottom-left-radius:6px; border-bottom-right-radius:6px;" id="help"> V1.0.1 walkthroughs <span style="font-family: 'fontawesome';" class="fa-check-square-o"></span></a>
                </div>
              </span>
            </li>
            <li id="ui-shafel-menuItem" class="menu-tooltip fas fa-random single-item" style="--transparent-background-color:#00ffff;">
              <span class="secondery-menu-tooltiptext">
                <div class="dropdown">
                  <a style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #fff;  border-top-left-radius:6px; border-top-right-radius:6px;"  href="index1.html" id="newDesign1"> Beta design <span style="font-family: 'fontawesome';" class="fas fa-random"></span></a>
                  <a style="border-top-left-radius:6px; border-top-right-radius:6px;" href="index.html" id="newDesign2"> Back <span style="font-family: 'fontawesome';" class="fas fa-arrow-left"></span></a>
                </div>
              </span>
            </li>
            <li id="intercom-menuItem" class="menu-tooltip fa-commenting-o  single-item" style="--transparent-background-color:#f4b042;">
              <span class="menu-tooltiptext"> Chat with us </span>
            </li>
        </ul>`


//   <a id="feature-NPS">  Let's share <span class="fas fa-thumbs-up"></span></a>
  // var body = document.body
  // var firstChild = body.firstElementChild // main
  // var newHtml = '<div id="floater-sticky-wrapper"><div id="floater"></div> </div>' + retriveForm ()+ ' <div id="canvas">' + firstChild.outerHTML + '</div>'
  // body.innerHTML   = newHtml
  //
  // document.getElementById('floater').innerHTML =`
  // <ul id="mainSideMenu">
  //           <li id="open-bug" class="menu-tooltip fas fa-bug" style="--transparent-background-color:#004DB3;">
  //             <span class="menu-tooltiptext">Bug Reporting</span>
  //           </li>
  //           <li id="feedback-menuItem" class="menu-tooltip fa fa-comments-o" style="--transparent-background-color:#26B85A;">
  //             <span class="menu-tooltiptext">Feedbacks</span>
  //          <!--span class="secondery-menu-tooltiptext"><ul id="mainSideMenu2">
  //              <li id="open-bug" class="menu-tooltip fas fa-bug">
  //              </li>
  //              <li id="feedback-menuItem" class="menu-tooltip fa fa-comments-o">
  //              </li>
  //             </ul></span-->
  //        </li>
  //        <li id="surveys" class="menu-tooltip fa-flask" style="--transparent-background-color:#FFCB00;">
  //          <span class="menu-tooltiptext">Surveys</span>
  //        </li>
  //         <li id="help" class="menu-tooltip fa-user" style="--transparent-background-color:#D88E8E;">
  //           <span class="menu-tooltiptext">Help</span>
  //         </li>
  //       </ul>`
  //
  // // var floaterDiv = document.createElement('div')
  // // floaterDiv.setAttribute('id', 'floater')
  //
  // // $('body').prepend(floaterDiv)
  //   // floaterDiv.innerHTML = `<ul id="mainSideMenu">
  //   //       <li id="open-bug" class="menu-tooltip fas fa-bug">
  //   //         <span class="menu-tooltiptext">Bug Reporting</span>
  //   //       </li>
  //   //       <li id="feedback-menuItem" class="menu-tooltip fa fa-comments-o">
  //   //         <span class="menu-tooltiptext">Feedbacks</span>
  //   //      <!--span class="secondery-menu-tooltiptext"><ul id="mainSideMenu2">
  //   //          <li id="open-bug" class="menu-tooltip fas fa-bug">
  //   //          </li>
  //   //          <li id="feedback-menuItem" class="menu-tooltip fa fa-comments-o">
  //   //          </li>
  //   //         </ul></span-->
  //   //    </li>
  //   //    <li id="surveys" class="menu-tooltip fa-flask">
  //   //      <span class="menu-tooltiptext">Surveys</span>
  //   //    </li>
  //   //     <li id="help" class="menu-tooltip fa-user">
  //   //       <span class="menu-tooltiptext">Help</span>
  //   //     </li>
  //   //   </ul>`
  //
  //     document.querySelector('#open-bug').style.setProperty('--transparent-background-color', '#004DB3')
  //     document.querySelector('#feedback-menuItem').style.setProperty('--transparent-background-color', '#26B85A')
  //     document.querySelector('#surveys').style.setProperty('--transparent-background-color', '#FFCB00')
  //     document.querySelector('#help').style.setProperty('--transparent-background-color', '#D88E8E')

}
