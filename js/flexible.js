(function flexible(window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 20
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
  // function sleep(numberMillis) { 
  //   var now = new Date(); 
  //   var exitTime = now.getTime() + numberMillis; 
  //   while (true) { 
  //   now = new Date(); 
  //   if (now.getTime() > exitTime) 
  //   return; 
  //   } 
  //   }
  window.addEventListener('load',setRemUnit);
  // setRemUnit()

//   function sleep(numberMillis,callback) {
//     var now = new Date();
//     var enterTime = now.getTime() + numberMillis;
//     while (true) {
//       now = new Date();
//       if (now.getTime() > enterTime){
//         console.log(111);
//         callback();
//         break;
//       }
//     }
//   }
// sleep(1000,setRemUnit);

}(window, document))
