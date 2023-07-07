const black = document.querySelector('#black');



setTimeout(hideBlack, 1000);

function hideBlack() {

  black.style.display = 'none';

}



setTimeout(loadOS, 2000);

setTimeout(function (){

  document.querySelector('#hiderp').scr=""

  console.log('lol')

},000)

function showLoader() {

  let loader = document.createElement("div");

  loader.innerHTML = '<img src="https://x2.static-chomikuj.pl/res/a5ff576d24.gif" style="float: left; border: 2px solid #99B827;">   <p style="color: white; margin-top: 5px; font-family: sans-serif; user-select: none;">ładowanie...</p>';

  loader.style.backgroundColor = '#99B827';

  loader.style.width = '120px';

  loader.style.height = '30px';

  loader.style.position = 'absolute';

  loader.style.bottom = '50px';

  loader.style.textAlign = 'center';

  loader.style.border = '1px solid #99B827';

  document.body.appendChild(loader);

}

function unlock(){

  document.getElementById('lock-screen').style.display="none "

}

function loadOS() {

  showLoader();

  setTimeout(lockScreen, 3000);

  setTimeout(strtdesctop,5000)

}



function strtdesctop(){

  document.querySelector('#desktop').style.display ="block "

}



function lockScreen() {

  document.getElementById('lock-screen').style.display="block "

  lockScreenDiv.addEventListener("click", e => {

    document.getElementById('lksn').style.display="none "

  })

  

}



/*

let lockScreenDiv = document.getElementById("lock-screen");



lockScreenDiv.addEventListener("click", () => {

  alert("clicked");

});

*/



let loaderCursor = document.createElement("img");

loaderCursor.setAttribute("src", "https://x2.static-chomikuj.pl/res/a5ff576d24.gif");

  loaderCursor.setAttribute("draggable", "false");

  loaderCursor.style.position = 'absolute';

  loaderCursor.style.top = '0px';

  loaderCursor.style.left = '0px';

  loaderCursor.style.width = 27 * 1.4 + 'px';

  loaderCursor.style.height = 28 * 1.4 + 'px';

  loaderCursor.style.transition = 'width 0.2s, height 0.2s';

  loaderCursor.style.zIndex = '999';



document.body.appendChild(loaderCursor);



document.addEventListener("mousemove", e => {

  loaderCursor.style.top = e.clientY + 'px';

  loaderCursor.style.left = e.clientX + 'px';



  loaderCursor.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';

  

  loaderCursor.style.transform = 'translate(-50%, -50%)';

});

 var e,xt,yt;

 function drag(event) {

   xt = event.touches[0].clientX;

   yt = event.touches[0].clientY;

 

  loaderCursor.style.top = yt + 'px';

  loaderCursor.style.left = xt + 'px';



  loaderCursor.style.transform = 'translate(' + xt + 'px,' + yt + 'px)';



  loaderCursor.style.transform = 'translate(-50%, -50%)';

}

document.addEventListener("touchstart", e => {

  loaderCursor.style.width = 27 * 1.1 + 'px';

  loaderCursor.style.height = 28 * 1.1 + 'px';

  loaderCursor.style.pointerEvents = 'none';

});

document.addEventListener("mousedown", e => {

  loaderCursor.style.width = 27 * 1.1 + 'px';

  loaderCursor.style.height = 28 * 1.1 + 'px';

  loaderCursor.style.pointerEvents = 'none';

});

document.addEventListener("mouseup", e => {

  loaderCursor.style.width = 27 * 1.4 + 'px';

  loaderCursor.style.height = 28 * 1.4 + 'px';

})
