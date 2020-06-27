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
        const bookAbout = document.createElement("span");
        const bookLink = document.createElement("a");
        const bookLink2 = document.createElement("a");
        //const nomalStudioImage = document.createElement("img");

        //題名、著者、推薦者、推薦理由、本の概要、リンク１、リンク２のクラス名
        bookTitle.className = 'book-title';
        bookWriter.className = 'book-writer';
        bookTeacher.className = 'book-teacher';
        bookReason.className = 'book-reason';
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
        bookDiv.appendChild(bookTeacher);
        bookDiv.appendChild(bookReason);
        bookDiv.appendChild(bookAbout);
        bookDiv.appendChild(bookLink);
        bookDiv.appendChild(bookLink2);
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
