const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';

const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const sheet2 = "Faculty";
const sheet3 = 'Link';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;
//var langMode = 0;

var showloading = document.getElementById('showloading');
var contents = document.getElementById('mainContent');
window.addEventListener('load', function () {
  showloading.style.display = 'none';
  contents.classList.remove('hidden');
});


const renderJson = (json) => {
  const studios = json.records;
  studios.pop();
  studios.forEach(studios => {
    const nomalStudioDiv = document.createElement('div');
    //const nomalStudioTitle = document.createElement("span");
    const nomalStudioLink = document.createElement("a");
    const nomalStudioImage = document.createElement("img");
    //nomalStudioTitle.className = 'studio-title';
    //nomalStudioTitle.textContent = studios['name-ja'];
    nomalStudioLink.className = 'studio-title';
    nomalStudioLink.href = "./html/" + studios['name-short'].toString() + ".html";
    nomalStudioLink.textContent = studios['name-ja'];
    nomalStudioImage.className = 'studio-photo1';
    nomalStudioImage.src = studios['photo1'];

    const englishStudioDiv = document.createElement('div');
    //const englishStudioTitle = document.createElement("span");
    const englishStudioLink = document.createElement("a");
    const englishStudioImage = document.createElement("img");

    //englishStudioTitle.className = 'studio-title-en';
    //englishStudioTitle.textContent = studios['name-en'];
    englishStudioLink.className = 'studio-title-en';
    englishStudioLink.href = "./html/" + studios['name-short'].toString() + ".html?langMode";
    englishStudioLink.textContent = studios['name-en'];
    englishStudioImage.src = studios['photo2'];
    englishStudioImage.className = 'studio-photo2';


    nomalStudioDiv.appendChild(nomalStudioImage);
    nomalStudioDiv.appendChild(nomalStudioLink);
    document.getElementById('nomalStudios').appendChild(nomalStudioDiv);
    //englishStudioDiv.appendChild(englishStudioTitle);
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
    const nomalFacultyname = document.createElement("span");
    const nomalFacultynameEn = document.createElement("span");
    const nomalFacultyTitle = document.createElement("span");
    const nomalFacultyStudio = document.createElement("span");
    const nomalFacultyMajor = document.createElement("span");
    const nomalFacultyImage = document.createElement("img");
    nomalFacultyname.className = 'faculty-name';
    nomalFacultynameEn.className = 'faculty-name-2';
    nomalFacultyTitle.className = 'faculty-title';
    nomalFacultyStudio.className = 'faculty-studio';
    nomalFacultyMajor.className = 'faculty-major';
    nomalFacultyImage.className = "faculty-image";
    //nomalFacultyTitle.parse = "data": ['faculty-photo'];
    nomalFacultyname.textContent = faculty['f-faculty-ja'];
    nomalFacultynameEn.textContent = faculty['f-faculty-en'];
    nomalFacultyTitle.textContent = faculty['f-faculty-title-ja'];
    nomalFacultyStudio.textContent = faculty['f-studio-ja'];
    nomalFacultyMajor.textContent = faculty['major-ja'];
    nomalFacultyImage.src = faculty['faculty-photo'];

    const englishFacultyDiv = document.createElement('div');
    const englishFacultyname = document.createElement("span");
    const englishFacultynameJa = document.createElement("span");
    const englishFacultyTitle = document.createElement("span");
    const englishFacultyStudio = document.createElement("span");
    const englishFacultyMajor = document.createElement("span");
    const englishFacultyImage = document.createElement("img");
    englishFacultyname.className = 'faculty-name-en';
    englishFacultynameJa.className = 'faculty-name-en2';
    englishFacultyTitle.className = 'faculty-title-en';
    englishFacultyStudio.className = 'faculty-studio-en';
    englishFacultyMajor.className = 'faculty-major-en';
    englishFacultyImage.className = "faculty-image-en";
    englishFacultyname.textContent = faculty['f-faculty-en'];
    englishFacultynameJa.textContent = faculty['f-faculty-ja'];
    englishFacultyTitle.textContent = faculty['f-faculty-title-en'];
    englishFacultyStudio.textContent = faculty['f-studio-en'];
    englishFacultyMajor.textContent = faculty['major-en'];
    englishFacultyImage.src = faculty['faculty-photo'];

    nomalFacultyDiv.appendChild(nomalFacultyImage);
    nomalFacultyDiv.appendChild(nomalFacultyname);
    nomalFacultyDiv.appendChild(nomalFacultynameEn);
    nomalFacultyDiv.appendChild(nomalFacultyTitle);
    nomalFacultyDiv.appendChild(nomalFacultyStudio);
    nomalFacultyDiv.appendChild(nomalFacultyMajor);
    document.getElementById('nomalFaculty').appendChild(nomalFacultyDiv);
    englishFacultyDiv.appendChild(englishFacultyImage);
    englishFacultyDiv.appendChild(englishFacultyname);
    englishFacultyDiv.appendChild(englishFacultynameJa);
    englishFacultyDiv.appendChild(englishFacultyTitle);
    englishFacultyDiv.appendChild(englishFacultyStudio);
    englishFacultyDiv.appendChild(englishFacultyMajor);
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
    const nomalLinkImage = document.createElement("img");
    //nomalStudioTitle.className = 'studio-title';
    nomalLinkTitle.textContent = link['name-ja'];
    nomalLinkTitle.className = 'link-title';
    nomalLinkTitle.href = link['link'];
    //nomalStudioLink.textContent = studios['name-ja'];
    nomalLinkImage.src = link['photo'];
    nomalLinkImage.className = 'link-image';

    nomalLinkDiv.appendChild(nomalLinkImage);
    nomalLinkDiv.appendChild(nomalLinkTitle);
    //nomalStudioDiv.appendChild(nomalStudioLink);
    document.getElementById('nomalLink').appendChild(nomalLinkDiv);
    //englishStudioDiv.appendChild(englishStudioTitle);
    /*
    englishStudioDiv.appendChild(englishStudioImage);
    englishStudioDiv.appendChild(englishStudioLink);
    document.getElementById('englishStudios').appendChild(englishStudioDiv);
    */

  });

  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}



document.getElementById("button").onclick = function () {
  var langBotton = document.getElementById("button");
  var langBottonClass = langBotton.getAttribute("class");
  //var langBottonWork = document.getElementById("buttonWork");
  //var langBottonWorkClass = langBotton.getAttribute("class");


  //ボタンで言葉の切り替え
  if (langBottonClass == "open") {
    langBotton.classList.remove('open');
    langBotton.classList.add('close');
    //langMode = 1;
    //langBottonWork.classList.remove('open');
    //langBottonWork.classList.add('close');

    document.getElementById('nomalButton').style.display = "none";
    document.getElementById('englishButton').style.display = "block";
    document.getElementById('nomalButton2').style.display = "block";
    document.getElementById('easyButton2').style.display = "none";

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
    document.getElementById('nomalCurrText').style.display = "none";
    document.getElementById('englishCurrText').style.display = "block";
    document.getElementById('easyCurrText').style.display = "none";
    //document.getElementById('nomalWorkReturn').style.display = "none";
    //document.getElementById('englishWorkReturn').style.display = "block";

    document.getElementById('nomalStudios').style.display = "none";
    document.getElementById('englishStudios').style.display = "block";

    document.getElementById('nomalFaculty').style.display = "none";
    document.getElementById('englishFaculty').style.display = "block";

    document.getElementById('nomalAdmissionText').style.display = "none";
    document.getElementById('englishAdmissionText').style.display = "block";
    document.getElementById('easyAdmissionText').style.display = "none";

    document.getElementById('nomalQText').style.display = "none";

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
    document.getElementById('nomalCurrText').style.display = "block";
    document.getElementById('englishCurrText').style.display = "none";
    document.getElementById('easyCurrText').style.display = "none";
    //document.getElementById('nomalWorkReturn').style.display = "block";
    //document.getElementById('englishWorkReturn').style.display = "none";

    document.getElementById('nomalStudios').style.display = "block";
    document.getElementById('englishStudios').style.display = "none";

    document.getElementById('nomalFaculty').style.display = "block";
    document.getElementById('englishFaculty').style.display = "none";

    document.getElementById('nomalAdmissionText').style.display = "block";
    document.getElementById('englishAdmissionText').style.display = "none";
    document.getElementById('easyAdmissionText').style.display = "none";

    document.getElementById('nomalQText').style.display = "block";
  }

};

//やさしいにほんご
document.getElementById("button2").onclick = function () {
  langMode = 2;
  var langBotton2 = document.getElementById("button2");
  var langBotton2Class = langBotton2.getAttribute("class");
  //var langBottonWork = document.getElementById("buttonWork");
  //var langBottonWorkClass = langBotton.getAttribute("class");

  if (langBotton2Class == "open") {
    langBotton2.classList.remove('open');
    langBotton2.classList.add('close');
    //langBottonWork.classList.remove('open');
    //langBottonWork.classList.add('close');

    document.getElementById('nomalButton').style.display = "block";
    document.getElementById('englishButton').style.display = "none";
    document.getElementById('nomalButton2').style.display = "none";
    document.getElementById('easyButton2').style.display = "block";

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
    document.getElementById('nomalCurrText').style.display = "none";
    document.getElementById('englishCurrText').style.display = "none";
    document.getElementById('easyCurrText').style.display = "block";
    //document.getElementById('nomalWorkReturn').style.display = "none";
    //document.getElementById('englishWorkReturn').style.display = "block";

    document.getElementById('nomalStudios').style.display = "block";
    document.getElementById('englishStudios').style.display = "none";

    document.getElementById('nomalFaculty').style.display = "block";
    document.getElementById('englishFaculty').style.display = "none";

    document.getElementById('nomalAdmissionText').style.display = "none";
    document.getElementById('englishAdmissionText').style.display = "none";
    document.getElementById('easyAdmissionText').style.display = "block";

    document.getElementById('nomalQText').style.display = "none";

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
    document.getElementById('nomalCurrText').style.display = "block";
    document.getElementById('englishCurrText').style.display = "none";
    document.getElementById('easyCurrText').style.display = "none";
    //document.getElementById('nomalWorkReturn').style.display = "block";
    //document.getElementById('englishWorkReturn').style.display = "none";

    document.getElementById('nomalStudios').style.display = "block";
    document.getElementById('englishStudios').style.display = "none";

    document.getElementById('nomalFaculty').style.display = "block";
    document.getElementById('englishFaculty').style.display = "none";

    document.getElementById('nomalAdmissionText').style.display = "block";
    document.getElementById('englishAdmissionText').style.display = "none";
    document.getElementById('easyAdmissionText').style.display = "none";

    document.getElementById('nomalQText').style.display = "block";
  }

};

/*
function openner(link) {

  window.open(link, "window_open", "width=600,height=400");

}
*/


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
