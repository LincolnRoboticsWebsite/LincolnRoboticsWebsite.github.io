//Make the DIV element draggagle:
dragElement(document.getElementById(("zone")));

function dragElement(elmnt) {
  var pos1 = 0, pos3 = 0;
  elmnt.onmousedown = closeDragElement;

  function offset() {
    if (document.getElementById(elmnt.id + "follow")) {
      /* if present, the follow connects to the DIV:*/
      document.getElementById(elmnt.id + "follow").style.left = elmnt.offsetLeft + "px";
    }
  }

  function closeDragElement() {
    offset();
    var q = setInterval(animate, 3);

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
  }
}