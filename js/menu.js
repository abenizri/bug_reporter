function createMenu() {

  $('body').wrapInner( "<div id='canvas'></div>");
  $('body').prepend(retriveForm())
  $('body').prepend('<div id="floater"></div>')

  document.getElementById('floater').innerHTML =`
  <ul id="mainSideMenu">
            <li id="open-bug" class="menu-tooltip fas fa-bug single-item" style="--transparent-background-color:#004DB3;">
              <span class="menu-tooltiptext">Bug Reporting</span>
            </li>
            <li id="feedback-menuItem" class="menu-tooltip fa fa-comments-o multi-item"  style="--transparent-background-color:#26B85A;">
              <span class="secondery-menu-tooltiptext">
                <div class="dropdown" >
                  <a  id="newIdea">New Idea <span class="fa-lightbulb-o"></span></a>
                  <a id="feature-feedback">Feature Feedback <span class="fa-check-square-o"></span></a>
                </div>
                </span>
              </li>
         <li id="surveys" class="menu-tooltip fa-flask single-item" style="--transparent-background-color:#FFCB00;">
           <span class="menu-tooltiptext">Surveys</span>
         </li>
          <li id="help" class="menu-tooltip fa-user single-item" style="--transparent-background-color:#D88E8E;">
            <span class="menu-tooltiptext">Help</span>
          </li>
        </ul>`

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
