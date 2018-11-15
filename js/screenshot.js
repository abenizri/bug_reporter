var mouse = {
   x: 0,
   y: 0,
   startX: 0,
   startY: 0
};

function setMousePosition(e) {
    var ev = e || window.event;
    if (ev.clientX || window.width) { //Moz
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
          e.stopPropagation()
      }
      e.preventDefault()
  }
}

function createMouseupEvent(e) {

  canvas.onmouseup = function (e) {
    e.stopPropagation()
    var rec = document.querySelector('.rectangle')

    if (rec !== null ) {
      var newWidth = rec.style.width.toString().replace('px', '')
      var newHeight = rec.style.height.toString().replace('px', '')
      var startX = rec.style.left.toString().replace('px', '')
      var startY = rec.style.top.toString().replace('px', '')

      rec.parentNode.removeChild(rec)
      $('body').find('.rectangle').remove()
    //  canvas.style.cursor = "default";
      html2canvas(document.querySelector("#canvas")).then(canvas => {
        var tnCanvas = document.createElement('canvas');
        var tnCanvasContext = tnCanvas.getContext('2d');
        tnCanvas.width = newWidth; tnCanvas.height = newHeight;

        tnCanvasContext.drawImage(canvas, startX * 2, startY * 2, newWidth * 2 , newHeight * 2,0,0,newWidth,newHeight);
        if (tnCanvas.toDataURL().length > 20) {
          document.querySelector('[class="btn btn-info btn-lg"]').click()
          // let resizeImg = imageResize(tnCanvas.toDataURL(), 550, 300)
          document.querySelector('#preview').src = tnCanvas.toDataURL()
          document.querySelector('#canvas').style.cursor = "default";
        }

      });
      element = null;
    }
      console.log("finsihed.");
      $(".cover").fadeOut(0);
      $(".cover").fadeOut(0);
      $('.mouse-follower-tooltip').remove()
      e.preventDefault()
  }
}

function createMouseclickEvent(e) {
  canvas.onmousedown = function (e) {
    e.stopPropagation()
    // active buttom, show form and clean inputs
    $('form#bug-report-form').css('display', 'block');
    document.getElementById('btnContactUs').setAttribute('type', 'submit')
    // document.getElementById('name').value = ''
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
  //  e.preventDefault()
  }
 }


function imageResize(base64, maxWidth, maxHeight) {

// Max size for thumbnail
  if(typeof(maxWidth) === 'undefined')  maxWidth = 500;
  if(typeof(maxHeight) === 'undefined')  maxHeight = 500;

  // Create and initialize two canvas
  var tempCanvas = document.createElement("canvas");
  var ctx = tempCanvas.getContext("2d");
  var canvasCopy = document.createElement("canvas");
  var copyContext = canvasCopy.getContext("2d");

  // Create original image
  var img = new Image();
  img.src = base64;

  // Determine new ratio based on max size
  var ratio = 1;
  if(img.width > maxWidth)
    ratio = maxWidth / img.width;
  else if(img.height > maxHeight)
    ratio = maxHeight / img.height;

  // Draw original image in second canvas
  canvasCopy.width = img.width;
  canvasCopy.height = img.height;
  copyContext.drawImage(img, 0, 0);

  // Copy and resize second canvas to first canvas
  tempCanvas.width = img.width * ratio;
  tempCanvas.height = img.height * ratio;
  ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, tempCanvas.width, tempCanvas.height);

  return tempCanvas.toDataURL();
}
