var url = location.href;
var langMode = 0;

window.onload = function () {
    var langBotton = document.getElementById("button");
    var langBotton2 = document.getElementById("button2");

    if (document.URL.match("/?lang=0")) {

    }
    else if (document.URL.match("/?lang=1")) {
        langMode = 1;
        langBotton.classList.remove('open');
        langBotton.classList.add('close');
        //langBottonWork.classList.remove('open');
        //langBottonWork.classList.add('close');
        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "block";
        }

        for (var i = 0; i <= 2; i++) {
            document.getElementById('nomalGrade' + (i + 1).toString()).style.display = "none";
            document.getElementById('easyGrade' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishGrade' + (i + 1).toString()).style.display = "block";
        }


        document.getElementById('nomalButton').style.display = "none";
        document.getElementById('englishButton').style.display = "block";
        document.getElementById('nomalButton2').style.display = "block";
        document.getElementById('easyButton2').style.display = "none";

        document.getElementById('nomalRec').style.display = "none";
        document.getElementById('englishRec').style.display = "block";
        document.getElementById('easyRec').style.display = "none";
        document.getElementById('nomalLang').style.display = "none";
        document.getElementById('englishLang').style.display = "block";
        document.getElementById('easyLang').style.display = "none";

        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "block";
        document.getElementById('easyTitle').style.display = "none";

        document.getElementById('nomalCap').style.display = "none";
        document.getElementById('englishCap').style.display = "block";
        document.getElementById('easyCap').style.display = "none";

        document.getElementById('nomalCom').style.display = "none";
        document.getElementById('englishCom').style.display = "block";
        document.getElementById('easyCom').style.display = "none";

        document.getElementById('nomalReturn').style.display = "none";
        document.getElementById('englishReturn').style.display = "block";
    }
    else if (document.URL.match("/?lang=2")) {
        langMode = 2;
        langBotton2.classList.remove('open');
        langBotton2.classList.add('close');
        //langBottonWork.classList.remove('open');
        //langBottonWork.classList.add('close');
        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }

        for (var i = 0; i <= 2; i++) {
            document.getElementById('nomalGrade' + (i + 1).toString()).style.display = "none";
            document.getElementById('easyGrade' + (i + 1).toString()).style.display = "block";
            document.getElementById('englishGrade' + (i + 1).toString()).style.display = "none";
        }

        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('nomalButton2').style.display = "none";
        document.getElementById('easyButton2').style.display = "block";

        document.getElementById('nomalRec').style.display = "none";
        document.getElementById('englishRec').style.display = "none";
        document.getElementById('easyRec').style.display = "block";
        document.getElementById('nomalLang').style.display = "none";
        document.getElementById('englishLang').style.display = "none";
        document.getElementById('easyLang').style.display = "block";

        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "none";
        document.getElementById('easyTitle').style.display = "block";

        document.getElementById('nomalCap').style.display = "none";
        document.getElementById('englishCap').style.display = "none";
        document.getElementById('easyCap').style.display = "block";

        document.getElementById('nomalCom').style.display = "none";
        document.getElementById('englishCom').style.display = "none";
        document.getElementById('easyCom').style.display = "block";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";
    }
};

//言語切り替え
document.getElementById("button").onclick = function () {
    var langBotton = document.getElementById("button");
    var langBottonClass = langBotton.getAttribute("class");
    //var langBottonWork = document.getElementById("buttonWork");
    //var langBottonWorkClass = langBotton.getAttribute("class");

    if (langBottonClass == "open") {
        langMode = 1;
        langBotton.classList.remove('open');
        langBotton.classList.add('close');
        //langBottonWork.classList.remove('open');
        //langBottonWork.classList.add('close');
        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "block";
        }

        for (var i = 0; i <= 2; i++) {
            document.getElementById('nomalGrade' + (i + 1).toString()).style.display = "none";
            document.getElementById('easyGrade' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishGrade' + (i + 1).toString()).style.display = "block";
        }


        document.getElementById('nomalButton').style.display = "none";
        document.getElementById('englishButton').style.display = "block";
        document.getElementById('nomalButton2').style.display = "block";
        document.getElementById('easyButton2').style.display = "none";

        document.getElementById('nomalRec').style.display = "none";
        document.getElementById('englishRec').style.display = "block";
        document.getElementById('easyRec').style.display = "none";
        document.getElementById('nomalLang').style.display = "none";
        document.getElementById('englishLang').style.display = "block";
        document.getElementById('easyLang').style.display = "none";
        //document.getElementById('nomalButtonWork').style.display = "none";
        //document.getElementById('englishButtonWork').style.display = "block";


        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "block";
        document.getElementById('easyTitle').style.display = "none";

        document.getElementById('nomalCap').style.display = "none";
        document.getElementById('englishCap').style.display = "block";
        document.getElementById('easyCap').style.display = "none";

        document.getElementById('nomalCom').style.display = "none";
        document.getElementById('englishCom').style.display = "block";
        document.getElementById('easyCom').style.display = "none";

        document.getElementById('nomalReturn').style.display = "none";
        document.getElementById('englishReturn').style.display = "block";


    } else if (langBottonClass == "close") {
        langMode = 0;
        langBotton.classList.remove('close');
        langBotton.classList.add('open');
        //langBottonWork.classList.remove('close');
        //langBottonWork.classList.add('open');
        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('nomalButton2').style.display = "block";
        document.getElementById('easyButton2').style.display = "none";

        document.getElementById('nomalRec').style.display = "block";
        document.getElementById('englishRec').style.display = "none";
        document.getElementById('easyRec').style.display = "none";
        document.getElementById('nomalLang').style.display = "block";
        document.getElementById('englishLang').style.display = "none";
        document.getElementById('easyLang').style.display = "none";

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }

        for (var i = 0; i <= 2; i++) {
            document.getElementById('nomalGrade' + (i + 1).toString()).style.display = "block";
            document.getElementById('easyGrade' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishGrade' + (i + 1).toString()).style.display = "none";
        }


        document.getElementById('nomalTitle').style.display = "block";
        document.getElementById('englishTitle').style.display = "none";
        document.getElementById('easyTitle').style.display = "none";

        document.getElementById('nomalCap').style.display = "block";
        document.getElementById('englishCap').style.display = "none";
        document.getElementById('easyCap').style.display = "none";

        document.getElementById('nomalCom').style.display = "block";
        document.getElementById('englishCom').style.display = "none";
        document.getElementById('easyCom').style.display = "none";

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

document.getElementById("button2").onclick = function () {
    var langBotton2 = document.getElementById("button2");
    var langBottonClass2 = langBotton2.getAttribute("class");
    //var langBottonWork = document.getElementById("buttonWork");
    //var langBottonWorkClass = langBotton.getAttribute("class");

    if (langBottonClass2 == "open") {
        langMode = 2;
        langBotton2.classList.remove('open');
        langBotton2.classList.add('close');
        //langBottonWork.classList.remove('open');
        //langBottonWork.classList.add('close');
        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }

        for (var i = 0; i <= 2; i++) {
            document.getElementById('nomalGrade' + (i + 1).toString()).style.display = "none";
            document.getElementById('easyGrade' + (i + 1).toString()).style.display = "block";
            document.getElementById('englishGrade' + (i + 1).toString()).style.display = "none";
        }

        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('nomalButton2').style.display = "none";
        document.getElementById('easyButton2').style.display = "block";

        document.getElementById('nomalRec').style.display = "none";
        document.getElementById('englishRec').style.display = "none";
        document.getElementById('easyRec').style.display = "block";
        document.getElementById('nomalLang').style.display = "none";
        document.getElementById('englishLang').style.display = "none";
        document.getElementById('easyLang').style.display = "block";
        //document.getElementById('nomalButtonWork').style.display = "none";
        //document.getElementById('englishButtonWork').style.display = "block";


        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "none";
        document.getElementById('easyTitle').style.display = "block";

        document.getElementById('nomalCap').style.display = "none";
        document.getElementById('englishCap').style.display = "none";
        document.getElementById('easyCap').style.display = "block";

        document.getElementById('nomalCom').style.display = "none";
        document.getElementById('englishCom').style.display = "none";
        document.getElementById('easyCom').style.display = "block";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";


    } else if (langBottonClass2 == "close") {
        langMode = 0;
        langBotton2.classList.remove('close');
        langBotton2.classList.add('open');
        //langBottonWork.classList.remove('close');
        //langBottonWork.classList.add('open');
        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('nomalButton2').style.display = "block";
        document.getElementById('easyButton2').style.display = "none";

        document.getElementById('nomalRec').style.display = "block";
        document.getElementById('englishRec').style.display = "none";
        document.getElementById('easyRec').style.display = "none";
        document.getElementById('nomalLang').style.display = "block";
        document.getElementById('englishLang').style.display = "none";
        document.getElementById('easyLang').style.display = "none";

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }

        for (var i = 0; i <= 2; i++) {
            document.getElementById('nomalGrade' + (i + 1).toString()).style.display = "block";
            document.getElementById('easyGrade' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishGrade' + (i + 1).toString()).style.display = "none";
        }

        document.getElementById('nomalTitle').style.display = "block";
        document.getElementById('englishTitle').style.display = "none";
        document.getElementById('easyTitle').style.display = "none";

        document.getElementById('nomalCap').style.display = "block";
        document.getElementById('englishCap').style.display = "none";
        document.getElementById('easyCap').style.display = "none";

        document.getElementById('nomalCom').style.display = "block";
        document.getElementById('englishCom').style.display = "none";
        document.getElementById('easyCom').style.display = "none";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";

    }
};

//headerのページ遷移時と言語情報渡し
document.getElementById("head-aboutus").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#aboutus";
};

document.getElementById("head-work").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#works";
};

document.getElementById("head-curriculm").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#curriculum";
};

document.getElementById("head-studios").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#studios";
};

document.getElementById("head-faculty").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#faculty";
};

document.getElementById("head-column").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#column";
};

document.getElementById("head-admission").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#admission";
};

document.getElementById("head-question").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#question";
};

document.getElementById("head-question").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#question";
};

document.getElementById("head-access").onclick = function () {
    var langControll;
    if (langMode == 0) {
        langControll = "?lang=0";
    } else if (langMode == 1) {
        langControll = "?lang=1";
    } else if (langMode == 2) {
        langControll = "?lang=2";
    }
    location.href = "../index.html" + langControll + "#access";
};