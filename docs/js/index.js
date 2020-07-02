const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';

const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const sheet2 = "group4-faculty";
const sheet3 = 'group4-link';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;
var langMode = 0;

var showloading = document.getElementById('showloading');
var contents = document.getElementById('mainContent');
window.addEventListener('load', stopload);
function stopload() {
  showloading.classList.add('fadeout-bg');
  contents.classList.remove('hidden');
}


const renderJson = (json) => {
  const studios = json.records;
  studios.pop();
  studios.forEach(studios => {
    const nomalStudioDiv = document.createElement('div');
    const nomalStudioLink = document.createElement("p");
    const nomalStudioImage = document.createElement("img");

    //スタジオ名（日本語）のクラス
    nomalStudioLink.className = 'studio-title';
    //nomalStudioLink.href = "./html/" + studios['name-short'].toString() + ".html";

    nomalStudioLink.textContent = studios['name-ja'];
    nomalStudioImage.onclick = function () {
      var langControll;
      if (langMode == 0) {
        langControll = "?lang=0";
      } else if (langMode == 2) {
        langControll = "?lang=2";
      }
      location.href = "./html/" + studios['name-short'].toString() + ".html" + langControll;
    };
    nomalStudioLink.onclick = function () {
      var langControll;
      if (langMode == 0) {
        langControll = "?lang=0";
      } else if (langMode == 2) {
        langControll = "?lang=2";
      }
      location.href = "./html/" + studios['name-short'].toString() + ".html" + langControll;
    };
    //nomalStudioLink.id = studios['name-short'];
    //stnameja.push(studios['name-short']);
    //スタジオ写真のクラス
    nomalStudioImage.className = 'studio-photo1';
    nomalStudioImage.src = studios['photo1'];

    const englishStudioDiv = document.createElement('div');
    const englishStudioLink = document.createElement("a");
    const englishStudioImage = document.createElement("img");

    //スタジオ名（英語）のクラス
    englishStudioLink.className = 'studio-title-en';
    englishStudioImage.onclick = function () {
      var langControll;
      langControll = "?lang=1";
      location.href = "./html/" + studios['name-short'].toString() + ".html" + langControll;
    };
    englishStudioLink.onclick = function () {
      var langControll;
      langControll = "?lang=1";
      location.href = "./html/" + studios['name-short'].toString() + ".html" + langControll;
    };
    //englishStudioLink.href = "./html/" + studios['name-short'].toString() + ".html";
    //stnameen.push(studios['name-short']);
    //スタジオ写真（英語）のクラス
    englishStudioLink.textContent = studios['name-en'];
    englishStudioImage.src = studios['photo2'];
    englishStudioImage.className = 'studio-photo2';


    nomalStudioDiv.appendChild(nomalStudioImage);
    nomalStudioDiv.appendChild(nomalStudioLink);
    document.getElementById('nomalStudios').appendChild(nomalStudioDiv);
    englishStudioDiv.appendChild(englishStudioImage);
    englishStudioDiv.appendChild(englishStudioLink);
    document.getElementById('englishStudios').appendChild(englishStudioDiv);

  });

  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}


const renderJson2 = (json) => {
  const faculty = json.records;
  faculty.pop();
  faculty.forEach(faculty => {
    const nomalFacultyDiv = document.createElement('div');
    const nomalFacultyTextDiv = document.createElement('div');
    const nomalFacultyname = document.createElement("span");
    const nomalFacultynameEn = document.createElement("span");
    const nomalFacultyTitle = document.createElement("span");
    const nomalFacultyStudio = document.createElement("span");
    const nomalFacultyMajor = document.createElement("span");
    const nomalFacultyImage = document.createElement("img");
    const nomalFacultyLink = document.createElement("span");
    const nomalFacultyLink2 = document.createElement("a");
    //nomal~のところは全部日本語版サイト。
    //○○.classNameのところ、上から順に、教員名（日本語）、教員名（英語）、教授か助教かとか、所属スタジオ、教員の専攻、写真
    nomalFacultyTextDiv.className = 'text-box'
    nomalFacultyname.className = 'faculty-name';
    nomalFacultynameEn.className = 'faculty-name-2';
    nomalFacultyTitle.className = 'faculty-title';
    nomalFacultyStudio.className = 'faculty-studio';
    nomalFacultyMajor.className = 'faculty-major';
    nomalFacultyImage.className = "faculty-image";
    nomalFacultyLink.className = 'faculty-link'
    nomalFacultyname.textContent = faculty['f-faculty-ja'];
    nomalFacultynameEn.textContent = faculty['f-faculty-en'];
    nomalFacultyTitle.textContent = faculty['f-faculty-title-ja'];
    nomalFacultyStudio.textContent = faculty['f-studio-ja'];
    nomalFacultyMajor.textContent = faculty['major-ja'];
    if (faculty['f-link'] != "") {
      nomalFacultyLink2.textContent = "外部サイト：" + faculty['f-link-name'];
      nomalFacultyLink2.href = faculty['f-link'];
    }
    nomalFacultyImage.src = faculty['faculty-photo'];

    const englishFacultyDiv = document.createElement('div');
    const englishFacultyTextDiv = document.createElement('div');
    const englishFacultyname = document.createElement("span");
    const englishFacultynameJa = document.createElement("span");
    const englishFacultyTitle = document.createElement("span");
    const englishFacultyStudio = document.createElement("span");
    const englishFacultyMajor = document.createElement("span");
    const englishFacultyImage = document.createElement("img");
    const englishFacultyLink = document.createElement("span");
    const englishFacultyLink2 = document.createElement("a");
    //english~のところは全部日本語版サイト。
    //○○.classNameのところ、上から順に、教員名（英語）、教員名（日本語）、教授か助教かとか、所属スタジオ、教員の専攻、写真
    englishFacultyTextDiv.className = 'text-box'
    englishFacultyname.className = 'faculty-name-en';
    englishFacultynameJa.className = 'faculty-name-en2';
    englishFacultyTitle.className = 'faculty-title-en';
    englishFacultyStudio.className = 'faculty-studio-en';
    englishFacultyMajor.className = 'faculty-major-en';
    englishFacultyImage.className = "faculty-image-en";
    englishFacultyLink.className = 'faculty-link-en'
    englishFacultyname.textContent = faculty['f-faculty-en'];
    englishFacultynameJa.textContent = faculty['f-faculty-ja'];
    englishFacultyTitle.textContent = faculty['f-faculty-title-en'];
    englishFacultyStudio.textContent = faculty['f-studio-en'];
    englishFacultyMajor.textContent = faculty['major-en'];
    englishFacultyImage.src = faculty['faculty-photo'];
    if (faculty['f-link'] != "") {
      englishFacultyLink2.textContent = "official site：" + faculty['f-link-name'];
      englishFacultyLink2.href = faculty['f-link'];
    }

    nomalFacultyDiv.appendChild(nomalFacultyImage);
    nomalFacultyDiv.appendChild(nomalFacultyTextDiv);
    nomalFacultyTextDiv.appendChild(nomalFacultyname);
    nomalFacultyTextDiv.appendChild(nomalFacultyTitle);
    nomalFacultyTextDiv.appendChild(nomalFacultynameEn);
    nomalFacultyTextDiv.appendChild(nomalFacultyStudio);
    nomalFacultyTextDiv.appendChild(nomalFacultyMajor);
    nomalFacultyLink.appendChild(nomalFacultyLink2);
    nomalFacultyTextDiv.appendChild(nomalFacultyLink);
    document.getElementById('nomalFaculty').appendChild(nomalFacultyDiv);
    englishFacultyDiv.appendChild(englishFacultyImage);
    englishFacultyDiv.appendChild(englishFacultyTextDiv)
    englishFacultyTextDiv.appendChild(englishFacultyname);
    englishFacultyTextDiv.appendChild(englishFacultyTitle);
    englishFacultyTextDiv.appendChild(englishFacultynameJa);
    englishFacultyTextDiv.appendChild(englishFacultyStudio);
    englishFacultyTextDiv.appendChild(englishFacultyMajor);
    englishFacultyLink.appendChild(englishFacultyLink2);
    englishFacultyTextDiv.appendChild(englishFacultyLink);
    document.getElementById('englishFaculty').appendChild(englishFacultyDiv);
  });

  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const renderJson3 = (json) => {
  const link = json.records;
  link.pop();
  link.forEach(link => {
    const nomalLinkDiv = document.createElement('div');
    const nomalLinkTitle = document.createElement("a");
    const nomalLink = document.createElement("a");
    const nomalLinkImage = document.createElement("img");
    nomalLinkTitle.textContent = link['name-ja'];
    //関連コンテンツ名のクラス
    nomalLinkTitle.className = 'link-title';
    nomalLinkTitle.onclick = function () {
      var langControll;
      if (langMode == 0) {
        langControll = "?lang=0";
      } else if (langMode == 2) {
        langControll = "?lang=2";
      }
      location.href = link['link'] + langControll;
    };
    nomalLink.onclick = function () {
      var langControll;
      if (langMode == 0) {
        langControll = "?lang=0";
      } else if (langMode == 2) {
        langControll = "?lang=2";
      }
      location.href = link['link'] + langControll;
    };

    nomalLinkImage.src = link['photo'];
    //関連コンテンツ画像のクラス
    nomalLinkImage.className = 'link-image';

    nomalLink.appendChild(nomalLinkImage);
    nomalLinkDiv.appendChild(nomalLink);
    nomalLinkDiv.appendChild(nomalLinkTitle);
    //nomalStudioDiv.appendChild(nomalStudioLink);
    document.getElementById('nomalLink').appendChild(nomalLinkDiv);

    const englishLinkDiv = document.createElement('div');
    const englishLinkTitle = document.createElement("a");
    const englishLink = document.createElement("a");
    const englishLinkImage = document.createElement("img");
    englishLinkTitle.textContent = link['name-en'];
    //関連コンテンツ名のクラス
    englishLinkTitle.className = 'link-title';
    englishLinkTitle.onclick = function () {
      var langControll;
      langControll = "?lang=1";
      location.href = link['link'] + langControll;
    };
    englishLink.onclick = function () {
      var langControll;
      langControll = "?lang=1";
      location.href = link['link'] + langControll;
    };

    englishLinkImage.src = link['photo'];
    //関連コンテンツ画像のクラス
    englishLinkImage.className = 'link-image';

    englishLink.appendChild(englishLinkImage);
    englishLinkDiv.appendChild(englishLink);
    englishLinkDiv.appendChild(englishLinkTitle);
    //nomalStudioDiv.appendChild(nomalStudioLink);
    document.getElementById('englishLink').appendChild(englishLinkDiv);


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
    langMode = 1;
    //langBottonWork.classList.remove('open');
    //langBottonWork.classList.add('close');

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
    document.getElementById('easyTitle').style.display = "none";
    document.getElementById('englishTitle').style.display = "block";
    document.getElementById('englishTitle2').style.display = "block";

    document.getElementById('nomalCopy').style.display = "none";
    document.getElementById('englishCopy').style.display = "block";
    document.getElementById('easyCopy').style.display = "none";

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "block";
    }

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalContentsTitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishContentsTitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('easyContentsTitle' + (i + 1).toString()).style.display = "none";
    }

    document.getElementById('nomalText').style.display = "none";
    document.getElementById('englishText').style.display = "block";
    document.getElementById('easyText').style.display = "none";

    //document.getElementById('nomalWorkTitle').style.display = "none";
    //document.getElementById('englishWorkTitle').style.display = "block";
    document.getElementById('nomalWorkText').style.display = "none";
    document.getElementById('englishWorkText').style.display = "block";
    document.getElementById('easyWorkText').style.display = "none";

    document.getElementById('nomalCurrText').style.display = "none";
    document.getElementById('englishCurrText').style.display = "block";
    document.getElementById('easyCurrText').style.display = "none";
    //document.getElementById('nomalWorkReturn').style.display = "none";
    //document.getElementById('englishWorkReturn').style.display = "block";

    document.getElementById('nomalStudios').style.display = "none";
    document.getElementById('englishStudios').style.display = "flex";

    document.getElementById('nomalCapSt').style.display = "none";
    document.getElementById('englishCapSt').style.display = "block";
    document.getElementById('easyCapSt').style.display = "none";

    document.getElementById('nomalFaculty').style.display = "none";
    document.getElementById('englishFaculty').style.display = "flex";

    document.getElementById('nomalLink').style.display = "none";
    document.getElementById('englishLink').style.display = "flex";

    document.getElementById('nomalAdmissionText').style.display = "none";
    document.getElementById('englishAdmissionText').style.display = "block";
    document.getElementById('easyAdmissionText').style.display = "none";

    document.getElementById('nomalQText').style.display = "none";
    document.getElementById('englishQText').style.display = "block";
    document.getElementById('easyQText').style.display = "none";

    document.getElementById('nomalAcText').style.display = "none";
    document.getElementById('englishAcText').style.display = "block";
    document.getElementById('easyAcText').style.display = "none";
  }

  else if (document.URL.match("/?lang=2")) {
    langBotton2.classList.remove('open');
    langBotton2.classList.add('close');
    langMode = 2;
    //langBottonWork.classList.remove('open');
    //langBottonWork.classList.add('close');

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
    document.getElementById('easyTitle').style.display = "block";
    document.getElementById('englishTitle').style.display = "none";
    document.getElementById('englishTitle2').style.display = "none";

    document.getElementById('nomalCopy').style.display = "none";
    document.getElementById('englishCopy').style.display = "none";
    document.getElementById('easyCopy').style.display = "block";

    for (var i = 0; i <= 8; i++) {
      document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
    }

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalContentsTitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishContentsTitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('easyContentsTitle' + (i + 1).toString()).style.display = "block";
    }

    document.getElementById('nomalText').style.display = "none";
    document.getElementById('englishText').style.display = "none";
    document.getElementById('easyText').style.display = "block";

    //document.getElementById('nomalWorkTitle').style.display = "none";
    //document.getElementById('englishWorkTitle').style.display = "block";
    document.getElementById('nomalWorkText').style.display = "none";
    document.getElementById('englishWorkText').style.display = "none";
    document.getElementById('easyWorkText').style.display = "block";

    document.getElementById('nomalCurrText').style.display = "none";
    document.getElementById('englishCurrText').style.display = "none";
    document.getElementById('easyCurrText').style.display = "block";
    //document.getElementById('nomalWorkReturn').style.display = "none";
    //document.getElementById('englishWorkReturn').style.display = "block";

    document.getElementById('nomalStudios').style.display = "flex";
    document.getElementById('englishStudios').style.display = "none";

    document.getElementById('nomalCapSt').style.display = "none";
    document.getElementById('englishCapSt').style.display = "none";
    document.getElementById('easyCapSt').style.display = "block";

    document.getElementById('nomalFaculty').style.display = "flex";
    document.getElementById('englishFaculty').style.display = "none";

    document.getElementById('nomalLink').style.display = "flex";
    document.getElementById('englishLink').style.display = "none";

    document.getElementById('nomalAdmissionText').style.display = "none";
    document.getElementById('englishAdmissionText').style.display = "none";
    document.getElementById('easyAdmissionText').style.display = "block";

    document.getElementById('nomalQText').style.display = "none";
    document.getElementById('englishQText').style.display = "none";
    document.getElementById('easyQText').style.display = "block";

    document.getElementById('nomalAcText').style.display = "none";
    document.getElementById('englishAcText').style.display = "none";
    document.getElementById('easyAcText').style.display = "block";
  }
};


//この辺から下は言語切り替え
document.getElementById("button").onclick = function () {
  var langBotton = document.getElementById("button");
  var langBottonClass = langBotton.getAttribute("class");
  //ボタンで言葉の切り替え（英語）
  if (langBottonClass == "open") {
    langBotton.classList.remove('open');
    langBotton.classList.add('close');
    langMode = 1;
    //langBottonWork.classList.remove('open');
    //langBottonWork.classList.add('close');

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
    document.getElementById('easyTitle').style.display = "none";
    document.getElementById('englishTitle').style.display = "block";
    document.getElementById('englishTitle2').style.display = "block";

    document.getElementById('nomalCopy').style.display = "none";
    document.getElementById('englishCopy').style.display = "block";
    document.getElementById('easyCopy').style.display = "none";

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "block";
    }

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalContentsTitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishContentsTitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('easyContentsTitle' + (i + 1).toString()).style.display = "none";
    }

    document.getElementById('nomalText').style.display = "none";
    document.getElementById('englishText').style.display = "block";
    document.getElementById('easyText').style.display = "none";

    //document.getElementById('nomalWorkTitle').style.display = "none";
    //document.getElementById('englishWorkTitle').style.display = "block";
    document.getElementById('nomalWorkText').style.display = "none";
    document.getElementById('englishWorkText').style.display = "block";
    document.getElementById('easyWorkText').style.display = "none";

    document.getElementById('nomalCurrText').style.display = "none";
    document.getElementById('englishCurrText').style.display = "block";
    document.getElementById('easyCurrText').style.display = "none";
    //document.getElementById('nomalWorkReturn').style.display = "none";
    //document.getElementById('englishWorkReturn').style.display = "block";

    document.getElementById('nomalStudios').style.display = "none";
    document.getElementById('englishStudios').style.display = "flex";

    document.getElementById('nomalCapSt').style.display = "none";
    document.getElementById('englishCapSt').style.display = "block";
    document.getElementById('easyCapSt').style.display = "none";

    document.getElementById('nomalFaculty').style.display = "none";
    document.getElementById('englishFaculty').style.display = "flex";

    document.getElementById('nomalLink').style.display = "none";
    document.getElementById('englishLink').style.display = "flex";

    document.getElementById('nomalAdmissionText').style.display = "none";
    document.getElementById('englishAdmissionText').style.display = "block";
    document.getElementById('easyAdmissionText').style.display = "none";

    document.getElementById('nomalQText').style.display = "none";
    document.getElementById('englishQText').style.display = "block";
    document.getElementById('easyQText').style.display = "none";

    document.getElementById('nomalAcText').style.display = "none";
    document.getElementById('englishAcText').style.display = "block";
    document.getElementById('easyAcText').style.display = "none";

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

    document.getElementById('nomalTitle').style.display = "block";
    document.getElementById('easyTitle').style.display = "none";
    document.getElementById('englishTitle').style.display = "none";
    document.getElementById('englishTitle2').style.display = "none";

    document.getElementById('nomalCopy').style.display = "block";
    document.getElementById('englishCopy').style.display = "none";
    document.getElementById('easyCopy').style.display = "none";

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
    }

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalContentsTitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('englishContentsTitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('easyContentsTitle' + (i + 1).toString()).style.display = "none";
    }

    document.getElementById('nomalText').style.display = "block";
    document.getElementById('englishText').style.display = "none";
    document.getElementById('easyText').style.display = "none";

    //document.getElementById('nomalWorkTitle').style.display = "block";
    //document.getElementById('englishWorkTitle').style.display = "none";
    document.getElementById('nomalWorkText').style.display = "block";
    document.getElementById('englishWorkText').style.display = "none";
    document.getElementById('easyWorkText').style.display = "none";

    document.getElementById('nomalCurrText').style.display = "block";
    document.getElementById('englishCurrText').style.display = "none";
    document.getElementById('easyCurrText').style.display = "none";
    //document.getElementById('nomalWorkReturn').style.display = "block";
    //document.getElementById('englishWorkReturn').style.display = "none";

    document.getElementById('nomalStudios').style.display = "flex";
    document.getElementById('englishStudios').style.display = "none";

    document.getElementById('nomalCapSt').style.display = "bock";
    document.getElementById('englishCapSt').style.display = "none";
    document.getElementById('easyCapSt').style.display = "none";

    // document.getElementById('nomalCapSt').style.display = "flex";
    // document.getElementById('easyCapSt').style.display = "none";

    document.getElementById('nomalFaculty').style.display = "flex";
    document.getElementById('englishFaculty').style.display = "none";

    document.getElementById('nomalLink').style.display = "flex";
    document.getElementById('englishLink').style.display = "none";

    document.getElementById('nomalAdmissionText').style.display = "block";
    document.getElementById('englishAdmissionText').style.display = "none";
    document.getElementById('easyAdmissionText').style.display = "none";

    document.getElementById('nomalQText').style.display = "block";
    document.getElementById('englishQText').style.display = "none";
    document.getElementById('easyQText').style.display = "none";

    document.getElementById('nomalAcText').style.display = "block";
    document.getElementById('englishAcText').style.display = "none";
    document.getElementById('easyAcText').style.display = "none";
  }

};

//やさしいにほんご
document.getElementById("button2").onclick = function () {
  var langBotton2 = document.getElementById("button2");
  var langBotton2Class = langBotton2.getAttribute("class");
  //var langBottonWork = document.getElementById("buttonWork");
  //var langBottonWorkClass = langBotton.getAttribute("class");

  if (langBotton2Class == "open") {
    langBotton2.classList.remove('open');
    langBotton2.classList.add('close');
    langMode = 2;
    //langBottonWork.classList.remove('open');
    //langBottonWork.classList.add('close');

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
    document.getElementById('easyTitle').style.display = "block";
    document.getElementById('englishTitle').style.display = "none";
    document.getElementById('englishTitle2').style.display = "none";

    document.getElementById('nomalCopy').style.display = "none";
    document.getElementById('englishCopy').style.display = "none";
    document.getElementById('easyCopy').style.display = "block";

    for (var i = 0; i <= 8; i++) {
      document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
    }

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalContentsTitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishContentsTitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('easyContentsTitle' + (i + 1).toString()).style.display = "block";
    }

    document.getElementById('nomalText').style.display = "none";
    document.getElementById('englishText').style.display = "none";
    document.getElementById('easyText').style.display = "block";

    //document.getElementById('nomalWorkTitle').style.display = "none";
    //document.getElementById('englishWorkTitle').style.display = "block";
    document.getElementById('nomalWorkText').style.display = "none";
    document.getElementById('englishWorkText').style.display = "none";
    document.getElementById('easyWorkText').style.display = "block";

    document.getElementById('nomalCurrText').style.display = "none";
    document.getElementById('englishCurrText').style.display = "none";
    document.getElementById('easyCurrText').style.display = "block";
    //document.getElementById('nomalWorkReturn').style.display = "none";
    //document.getElementById('englishWorkReturn').style.display = "block";

    document.getElementById('nomalStudios').style.display = "flex";
    document.getElementById('englishStudios').style.display = "none";

    document.getElementById('nomalCapSt').style.display = "none";
    document.getElementById('englishCapSt').style.display = "none";
    document.getElementById('easyCapSt').style.display = "block";

    document.getElementById('nomalFaculty').style.display = "flex";
    document.getElementById('englishFaculty').style.display = "none";

    document.getElementById('nomalLink').style.display = "flex";
    document.getElementById('englishLink').style.display = "none";

    document.getElementById('nomalAdmissionText').style.display = "none";
    document.getElementById('englishAdmissionText').style.display = "none";
    document.getElementById('easyAdmissionText').style.display = "block";

    document.getElementById('nomalQText').style.display = "none";
    document.getElementById('englishQText').style.display = "none";
    document.getElementById('easyQText').style.display = "block";

    document.getElementById('nomalAcText').style.display = "none";
    document.getElementById('englishAcText').style.display = "none";
    document.getElementById('easyAcText').style.display = "block";

  } else if (langBotton2Class == "close") {
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

    document.getElementById('nomalTitle').style.display = "block";
    document.getElementById('easyTitle').style.display = "none";
    document.getElementById('englishTitle').style.display = "none";
    document.getElementById('englishTitle2').style.display = "none";

    document.getElementById('nomalCopy').style.display = "block";
    document.getElementById('englishCopy').style.display = "none";
    document.getElementById('easyCopy').style.display = "none";

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('easySubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
    }

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalContentsTitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('englishContentsTitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('easyContentsTitle' + (i + 1).toString()).style.display = "none";
    }

    document.getElementById('nomalText').style.display = "block";
    document.getElementById('englishText').style.display = "none";
    document.getElementById('easyText').style.display = "none";

    //document.getElementById('nomalWorkTitle').style.display = "block";
    //document.getElementById('englishWorkTitle').style.display = "none";
    document.getElementById('nomalWorkText').style.display = "block";
    document.getElementById('englishWorkText').style.display = "none";
    document.getElementById('easyWorkText').style.display = "none";

    document.getElementById('nomalCurrText').style.display = "block";
    document.getElementById('englishCurrText').style.display = "none";
    document.getElementById('easyCurrText').style.display = "none";
    //document.getElementById('nomalWorkReturn').style.display = "block";
    //document.getElementById('englishWorkReturn').style.display = "none";

    document.getElementById('nomalStudios').style.display = "flex";
    document.getElementById('englishStudios').style.display = "none";

    document.getElementById('nomalCapSt').style.display = "block";
    document.getElementById('englishCapSt').style.display = "none";
    document.getElementById('easyCapSt').style.display = "none";

    document.getElementById('nomalFaculty').style.display = "flex";
    document.getElementById('englishFaculty').style.display = "none";

    document.getElementById('nomalLink').style.display = "flex";
    document.getElementById('englishLink').style.display = "none";

    document.getElementById('nomalAdmissionText').style.display = "block";
    document.getElementById('englishAdmissionText').style.display = "none";
    document.getElementById('easyAdmissionText').style.display = "none";

    document.getElementById('nomalQText').style.display = "block";
    document.getElementById('englishQText').style.display = "none";
    document.getElementById('easyQText').style.display = "none";

    document.getElementById('nomalAcText').style.display = "block";
    document.getElementById('englishAcText').style.display = "none";
    document.getElementById('easyAcText').style.display = "none";
  }
};

document.getElementById("moreBtnWork").onclick = function () {
  var langControll;
  if (langMode == 0) {
    langControll = "?lang=0";
  } else if (langMode == 1) {
    langControll = "?lang=1";
  } else if (langMode == 2) {
    langControll = "?lang=2";
  }
  location.href = "./html/work.html" + langControll;
};

//function jumppage(studioname) {




const getData = async () => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      let jsonResponse = await response.json();
      renderJson(jsonResponse);
    }


    const response2 = await fetch(endpoint2);
    if (response2.ok) {
      let jsonResponse2 = await response2.json();
      renderJson2(jsonResponse2);
    }

    const response3 = await fetch(endpoint3);
    if (response3.ok) {
      let jsonResponse3 = await response3.json();
      renderJson3(jsonResponse3);
    }



  }
  catch (error) {
    console.log(error);
  }
}

getData();
