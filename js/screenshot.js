var mouse = {
   x: 0,
   y: 0,
   startX: 0,
   startY: 0
};

function setMousePosition(e) {
    var ev = e || window.event;
    if (ev.clientX) { //Moz
        mouse.x = ev.clientX + window.pageXOffset;
        mouse.y = ev.clientY + window.pageYOffset;
    } else if (ev.pageX) { //Moz
        mouse.x = ev.pageX + window.pageXOffset;
        mouse.y = ev.pageY + window.pageYOffset;
      }
    // else if (ev.clientX) { //IE
    //     mouse.x = ev.clientX + document.body.scrollLeft;
    //     mouse.y = ev.clientY + document.body.scrollTop;
    // }
};

function createMousemoveEvent(e) {
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
          console.log('width: ' + element.style.width);
          console.log('height: ' + element.style.height);
          console.log('left: ' + element.style.left);
          console.log('top: ' + element.style.top);
      }
  }
}

function createMouseupEvent(e) {
  canvas.onmouseup = function (e) {
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

        tnCanvasContext.drawImage(canvas, startX * 2, startY * 2, newWidth * 2 , newHeight * 2,0,0,newWidth,newHeight);
        document.querySelector('[class="btn btn-info btn-lg"]').click()
        document.querySelector('#preview').src = tnCanvas.toDataURL()
      });
      element = null;
    }
      console.log("finsihed.");
      $('.mouse-follower-tooltip').remove()
  }
}

function createMouseclickEvent(e) {
  canvas.onmousedown = function (e) {
    // active buttom, show form and clean inputs
    $('form#reused_form').css('display', 'block');
    document.getElementById('btnContactUs').setAttribute('type', 'submit')
    document.getElementById('name').value = ''
    document.getElementById('message').value = ''

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
