var url = location.href;

window.onload = function () {
    var langBotton = document.getElementById("button");

    if (document.URL.match("/?lang=0")) {

    }
    else if (document.URL.match("/?lang=1")) {
        langBotton.classList.remove('open');
        langBotton.classList.add('close');

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "block";
        }

        document.getElementById('nomalButton').style.display = "none";
        document.getElementById('englishButton').style.display = "block";

        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "block";

        document.getElementById('nomalCap').style.display = "none";
        document.getElementById('englishCap').style.display = "block";

        document.getElementById('nomalReturn').style.display = "none";
        document.getElementById('englishReturn').style.display = "block";
    }
};


document.getElementById("button").onclick = function () {
    var langBotton = document.getElementById("button");
    var langBottonClass = langBotton.getAttribute("class");
    //var langBottonWork = document.getElementById("buttonWork");
    //var langBottonWorkClass = langBotton.getAttribute("class");

    if (langBottonClass == "open") {
        langBotton.classList.remove('open');
        langBotton.classList.add('close');
        //langBottonWork.classList.remove('open');
        //langBottonWork.classList.add('close');
        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "block";
        }


        document.getElementById('nomalButton').style.display = "none";
        document.getElementById('englishButton').style.display = "block";
        //document.getElementById('nomalButtonWork').style.display = "none";
        //document.getElementById('englishButtonWork').style.display = "block";


        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "block";

        document.getElementById('nomalCap').style.display = "none";
        document.getElementById('englishCap').style.display = "block";

        document.getElementById('nomalReturn').style.display = "none";
        document.getElementById('englishReturn').style.display = "block";


    } else if (langBottonClass == "close") {
        langBotton.classList.remove('close');
        langBotton.classList.add('open');
        //langBottonWork.classList.remove('close');
        //langBottonWork.classList.add('open');
        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }


        document.getElementById('nomalTitle').style.display = "block";
        document.getElementById('englishTitle').style.display = "none";

        document.getElementById('nomalCap').style.display = "block";
        document.getElementById('englishCap').style.display = "none";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";

    }

    // モーダル
    // ----------------------------------------
    // 二重スクロールバー防止
    // ----------------------------------------
    var body = document.body;
    var checkbox = document.getElementsByClassName('modalCheck');
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('click', function () {
            if (this.checked) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'visible';
            }
        });
    }

};
