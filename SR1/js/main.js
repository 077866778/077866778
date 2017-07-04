window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');

        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });
};

function changeImage() {
	document.img.style.visibility = (document.img.style.visibility === "hidden") ? "visible" : "hidden"; 
    };

function changeText() {
	document.getElementById('boldStuff').innerHTML = (document.getElementById('boldStuff').innerHTML === screen.width + "X" + screen.height) ? "Скрылось" : screen.width + "X" + screen.height;

  }
