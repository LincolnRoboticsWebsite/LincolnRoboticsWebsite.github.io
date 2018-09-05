//Make the DIV element draggagle:
dragElement(document.getElementById(("zone")));

function dragElement(elmnt) {
  var pos1 = 0, pos3 = 0;
  elmnt.onmousedown = dragMouseDown;

  function offset() {
    if (document.getElementById(elmnt.id + "follow")) {
      /* if present, the follow connects to the DIV:*/
      document.getElementById(elmnt.id + "follow").style.left = elmnt.offsetLeft + "px";
    }
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    offset();
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    offset();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    offset();
    if(elmnt.offsetLeft < .75 * window.innerWidth && elmnt.offsetLeft > 0){
      var q = setInterval(animate, 3);
    } else{
      var q = setInterval(unanimate, 3);
    }

    function animate(){
      var pos = elmnt.offsetLeft;
      if(elmnt.offsetLeft <= 0){
        clearInterval(q);
        window.location = "testparent.html";
      }
      else {
        pos -= 5;
        elmnt.style.left = pos + "px";
        offset();
      }
    }

    function unanimate(){
      var pos = elmnt.offsetLeft;
      if(elmnt.offsetLeft >= window.innerWidth - elmnt.clientWidth / 6){
        clearInterval(q);
      }
      else {
        pos += 2;
        elmnt.style.left = pos + "px";
        offset();
      }
    }
  }
}
