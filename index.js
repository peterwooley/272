;(function() {
  var seq = 0;
  document.addEventListener('click', function(e) {
    var x = Math.ceil(e.pageX / window.innerWidth * 3);
    var y = Math.ceil(e.pageY / window.innerHeight * 3);
    var style = document.body.style;
    var green = "-webkit-linear-gradient(top, #b4df5b 0%,#b4df5b 100%)";
    var red = "-webkit-linear-gradient(top, #dd5a5a 0%,#dd5a5a 100%)";

    if(!seq && x===1 && y===1) {
      seq++;
      style.backgroundImage = green;
    } else if((seq===1 || seq ===2) && x===3 && y===1) {
      seq++;
      style.backgroundImage = green;
    } else if(seq===3 && x===1 && y===3) {
      details();
      style.backgroundImage = green; 
    } else {
      seq = 0;
      style.backgroundImage = red;
    }

    style.backgroundPositionX = (x-1)*50 +"%";
    style.backgroundPositionY = (y-1)*50 +"%";
    setTimeout(function() { style.backgroundImage = ""; }, 100);
  });

  var details = function() {
    var text = "@peterwooley";
    var add = false;
    var intervalId = setInterval(function() {
      var pre = document.body.getElementsByTagName('pre')[0];
      if(!add) {
        pre.textContent = pre.textContent.slice(0, -1);
        if(!pre.textContent) {
          add = true;
        }
      } else {
        pre.textContent = text.slice(0, pre.textContent.length+1);
        if(pre.textContent === text) {
          pre.innerHTML = '<a href="http://twitter.com/'+text+'">'+text+'</a>';
          clearInterval(intervalId);
        }
      }
    }, 50);
  }
}());
