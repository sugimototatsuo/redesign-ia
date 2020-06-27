const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';

const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
//const sheet2 = "Faculty";
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
//const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;


const renderJson = (json) => {
    const studios = json.records;
    studios.pop();
    studios.forEach(studios => {
        const nomalStudioDiv = document.createElement('div');
        //const nomalStudioTitle = document.createElement("span");
        const nomalStudioLink = document.createElement("a");
        const nomalStudioImage = document.createElement("img");

        //リンクと画像にクラス名（日本語版サイト）
        nomalStudioLink.className = 'studio-link';
        nomalStudioImage.className = 'studio-image';
        nomalStudioLink.onclick = function () {
            var langControll;
            if (langMode == 0) {
                langControll = "?lang=0";
            } else if (langMode == 2) {
                langControll = "?lang=2";
            }
            location.href = studios['name-short'].toString() + ".html" + langControll;
        };
        nomalStudioImage.src = "../image/" + studios['name-short'].toString() + ".png";
        //nomalStudioLink.textContent = studios['name-ja'];
        //nomalStudioImage.src = studios['photo1'];

        const englishStudioDiv = document.createElement('div');
        const englishStudioLink = document.createElement("a");
        const englishStudioImage = document.createElement("img");

        //リンクと画像にクラス名（英語版サイト）。でもこれ英語と日本語で分けなくても良かったかも。
        englishStudioLink.className = 'studio-link-en';
        englishStudioImage.className = 'studio-image-en'
        englishStudioLink.onclick = function () {
            var langControll;
            langControll = "?lang=1";
            location.href = studios['name-short'].toString() + ".html" + langControll;
        };
        //englishStudioLink.textContent = studios['name-en'];
        englishStudioImage.src = "../image/" + studios['name-short'].toString() + ".png";


        nomalStudioLink.appendChild(nomalStudioImage);
        nomalStudioDiv.appendChild(nomalStudioLink);
        document.getElementById('nomalStudios').appendChild(nomalStudioDiv);
        //englishStudioDiv.appendChild(englishStudioTitle);
        englishStudioLink.appendChild(englishStudioImage);
        englishStudioDiv.appendChild(englishStudioLink);
        document.getElementById('englishStudios').appendChild(englishStudioDiv);

    });

    document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

//初回読み込み時の言語
window.onload = function () {
    var langBotton = document.getElementById("button");
    var langBotton2 = document.getElementById("button2");

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
        document.getElementById('nomalButton2').style.display = "block";
        document.getElementById('easyButton2').style.display = "none";

        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "block";
        document.getElementById('easyTitle').style.display = "none";

        document.getElementById('nomalFaculty').style.display = "none";
        document.getElementById('englishFaculty').style.display = "block";
        document.getElementById('easyFaculty').style.display = "none";

        document.getElementById('nomalCore').style.display = "none";
        document.getElementById('englishCore').style.display = "block";

        document.getElementById('nomalText').style.display = "none";
        document.getElementById('englishText').style.display = "block";
        document.getElementById('easyText').style.display = "none";

        document.getElementById('nomalReturn').style.display = "none";
        document.getElementById('englishReturn').style.display = "block";

        document.getElementById('nomalContentsTitle4').style.display = "none";
        document.getElementById('englishContentsTitle4').style.display = "block";
        document.getElementById('easyContentsTitle4').style.display = "none";

        document.getElementById('nomalStudios').style.display = "none";
        document.getElementById('englishStudios').style.display = "block";
    }

    else if (document.URL.match("/?lang=2")) {
        langBotton2.classList.remove('open');
        langBotton2.classList.add('close');

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }

        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('nomalButton2').style.display = "none";
        document.getElementById('easyButton2').style.display = "block";

        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "none";
        document.getElementById('easyTitle').style.display = "block";

        document.getElementById('nomalFaculty').style.display = "none";
        document.getElementById('englishFaculty').style.display = "none";
        document.getElementById('easyFaculty').style.display = "block";

        document.getElementById('nomalCore').style.display = "block";
        document.getElementById('englishCore').style.display = "none";

        document.getElementById('nomalText').style.display = "none";
        document.getElementById('englishText').style.display = "none";
        document.getElementById('easyText').style.display = "block";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";

        document.getElementById('nomalContentsTitle4').style.display = "none";
        document.getElementById('englishContentsTitle4').style.display = "none";
        document.getElementById('easyContentsTitle4').style.display = "block";

        document.getElementById('nomalStudios').style.display = "block";
        document.getElementById('englishStudios').style.display = "none";
    }
};


//ページ内の切り替え
document.getElementById("button").onclick = function () {
    var langBotton = document.getElementById("button");
    var langBottonClass = langBotton.getAttribute("class");
    //var langBottonWork = document.getElementById("buttonWork");
    //var langBottonWorkClass = langBotton.getAttribute("class");

    if (langBottonClass == "open") {
        langBotton.classList.remove('open');
        langBotton.classList.add('close');
        langMode = 1;

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "block";
        }
        //langBottonWork.classList.remove('open');
        //langBottonWork.classList.add('close');

        document.getElementById('nomalButton').style.display = "none";
        document.getElementById('englishButton').style.display = "block";
        document.getElementById('nomalButton2').style.display = "block";
        document.getElementById('easyButton2').style.display = "none";

        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "block";
        document.getElementById('easyTitle').style.display = "none";

        document.getElementById('nomalFaculty').style.display = "none";
        document.getElementById('englishFaculty').style.display = "block";
        document.getElementById('easyFaculty').style.display = "none";

        document.getElementById('nomalCore').style.display = "none";
        document.getElementById('englishCore').style.display = "block";

        document.getElementById('nomalText').style.display = "none";
        document.getElementById('englishText').style.display = "block";
        document.getElementById('easyText').style.display = "none";

        document.getElementById('nomalReturn').style.display = "none";
        document.getElementById('englishReturn').style.display = "block";

        document.getElementById('nomalContentsTitle4').style.display = "none";
        document.getElementById('englishContentsTitle4').style.display = "block";
        document.getElementById('easyContentsTitle4').style.display = "none";

        document.getElementById('nomalStudios').style.display = "none";
        document.getElementById('englishStudios').style.display = "block";

    } else if (langBottonClass == "close") {
        langBotton.classList.remove('close');
        langBotton.classList.add('open');
        langMode = 0;

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }
        //langBottonWork.classList.remove('close');
        //langBottonWork.classList.add('open');
        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('nomalButton2').style.display = "block";
        document.getElementById('easyButton2').style.display = "none";

        document.getElementById('nomalTitle').style.display = "block";
        document.getElementById('englishTitle').style.display = "none";
        document.getElementById('easyTitle').style.display = "none";

        document.getElementById('nomalFaculty').style.display = "block";
        document.getElementById('englishFaculty').style.display = "none";
        document.getElementById('easyFaculty').style.display = "none";

        document.getElementById('nomalCore').style.display = "block";
        document.getElementById('englishCore').style.display = "none";

        document.getElementById('nomalText').style.display = "block";
        document.getElementById('englishText').style.display = "none";
        document.getElementById('easyText').style.display = "none";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";

        document.getElementById('nomalContentsTitle4').style.display = "block";
        document.getElementById('englishContentsTitle4').style.display = "none";
        document.getElementById('easyContentsTitle4').style.display = "none";

        document.getElementById('nomalStudios').style.display = "block";
        document.getElementById('englishStudios').style.display = "none";
    }
};

//やさしいにほんご
document.getElementById("button2").onclick = function () {
    var langBotton2 = document.getElementById("button2");
    var langBotton2Class = langBotton2.getAttribute("class");

    if (langBotton2Class == "open") {
        langBotton2.classList.remove('open');
        langBotton2.classList.add('close');
        langMode = 2;

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }

        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('nomalButton2').style.display = "none";
        document.getElementById('easyButton2').style.display = "block";

        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "none";
        document.getElementById('easyTitle').style.display = "block";

        document.getElementById('nomalFaculty').style.display = "none";
        document.getElementById('englishFaculty').style.display = "none";
        document.getElementById('easyFaculty').style.display = "block";

        document.getElementById('nomalCore').style.display = "block";
        document.getElementById('englishCore').style.display = "none";

        document.getElementById('nomalText').style.display = "none";
        document.getElementById('englishText').style.display = "none";
        document.getElementById('easyText').style.display = "block";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";

        document.getElementById('nomalContentsTitle4').style.display = "none";
        document.getElementById('englishContentsTitle4').style.display = "none";
        document.getElementById('easyContentsTitle4').style.display = "block";

        document.getElementById('nomalStudios').style.display = "block";
        document.getElementById('englishStudios').style.display = "none";

    } else if (langBotton2Class == "close") {
        langMode = 0;
        langBotton2.classList.remove('close');
        langBotton2.classList.add('open');

        for (var i = 0; i <= 8; i++) {
            document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "block";
            document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
            document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
        }

        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('nomalButton2').style.display = "block";
        document.getElementById('easyButton2').style.display = "none";

        document.getElementById('nomalTitle').style.display = "block";
        document.getElementById('englishTitle').style.display = "none";
        document.getElementById('easyTitle').style.display = "none";

        document.getElementById('nomalFaculty').style.display = "block";
        document.getElementById('englishFaculty').style.display = "none";
        document.getElementById('easyFaculty').style.display = "none";

        document.getElementById('nomalCore').style.display = "block";
        document.getElementById('englishCore').style.display = "none";

        document.getElementById('nomalText').style.display = "block";
        document.getElementById('englishText').style.display = "none";
        document.getElementById('easyText').style.display = "none";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";

        document.getElementById('nomalContentsTitle4').style.display = "block";
        document.getElementById('englishContentsTitle4').style.display = "none";
        document.getElementById('easyContentsTitle4').style.display = "none";

        document.getElementById('nomalStudios').style.display = "block";
        document.getElementById('englishStudios').style.display = "none";
    }
};


const getData = async () => {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            let jsonResponse = await response.json();
            renderJson(jsonResponse);
        }


    }
    catch (error) {
        console.log(error);
    }
}

getData();

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
