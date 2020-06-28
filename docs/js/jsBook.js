const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';

const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'group4-book';
//const sheet2 = "Faculty";
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
//const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;


const renderJson = (json) => {
    const books = json.records;
    books.pop();
    books.forEach(books => {
        const bookDiv = document.createElement('div');
        const bookTitle = document.createElement("span");
        const bookWriter = document.createElement("span");
        const bookTeacher = document.createElement("span");
        const bookReason = document.createElement("span");
        const bookTextDiv = document.createElement("div");
        const bookAbout = document.createElement("span");
        const bookLink = document.createElement("a");
        const bookLink2 = document.createElement("a");
        //const nomalStudioImage = document.createElement("img");

        //題名、著者、推薦者、推薦理由、本の概要、リンク１、リンク２のクラス名
        bookTitle.className = 'book-title';
        bookWriter.className = 'book-writer';
        bookTeacher.className = 'book-teacher';
        bookReason.className = 'book-reason';
        bookTextDiv.className = 'book-text-box'
        bookAbout.className = 'book-about';
        bookLink.className = 'book-link';
        bookLink2.className = 'book-link2';

        bookTitle.textContent = "題名：" + books['book-title'];
        bookWriter.textContent = "著者：" + books['book-writer'];
        bookTeacher.textContent = "推薦者：" + books['book-teacher'];
        bookReason.textContent = "推薦理由：" + books['book-reason'];
        bookAbout.textContent = "概要：" + books['book-about'];
        bookLink.href = books['book-link1'];
        bookLink.textContent = "購入はこちら:" + books['book-link1'];
        bookLink2.href = books['book-link2'];
        bookLink2.textContent = books['book-link2'];
        //nomalStudioLink.textContent = studios['name-ja'];
        //nomalStudioImage.src = studios['photo1'];

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookWriter);
        bookDiv.appendChild(bookReason);
        bookDiv.appendChild(bookTeacher);
        // bookDiv.appendChild(bookReason);
        bookDiv.appendChild(bookTextDiv);
        bookTextDiv.appendChild(bookAbout);
        bookTextDiv.appendChild(bookLink);
        bookTextDiv.appendChild(bookLink2);
        document.getElementById('book').appendChild(bookDiv);
        //englishStudioDiv.appendChild(englishStudioTitle);
    });

    document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}



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

//初回読み込み時の言語
window.onload = function () {
    var langBotton = document.getElementById("button");
    var langBotton2 = document.getElementById("button2");

    if (document.URL.match("/?lang=0")) {

    }
    else if (document.URL.match("/?lang=1")) {
        langMode = 1;
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
    }

    else if (document.URL.match("/?lang=2")) {
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
