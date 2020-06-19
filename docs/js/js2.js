const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';

const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
//const sheet2 = "Faculty";
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
//const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;


const renderJson = (json) => {
    const studios = json.records;
    studios.forEach(studios => {
        const nomalStudioDiv = document.createElement('div');
        //const nomalStudioTitle = document.createElement("span");
        const nomalStudioLink = document.createElement("a");
        //const nomalStudioImage = document.createElement("img");
        //nomalStudioTitle.className = 'studio-title';
        //nomalStudioTitle.textContent = studios['name-ja'];
        nomalStudioLink.className = 'studio-title';
        nomalStudioLink.href = studios['name-short'].toString() + ".html";
        nomalStudioLink.textContent = studios['name-ja'];
        //nomalStudioImage.src = studios['photo1'];

        const englishStudioDiv = document.createElement('div');
        //const englishStudioTitle = document.createElement("span");
        const englishStudioLink = document.createElement("a");
        //const englishStudioImage = document.createElement("img");

        //englishStudioTitle.className = 'studio-title-en';
        //englishStudioTitle.textContent = studios['name-en'];
        englishStudioLink.className = 'studio-title-en';
        englishStudioLink.href = studios['name-short'].toString() + ".html";
        englishStudioLink.textContent = studios['name-en'];
        //englishStudioImage.src = studios['photo2'];


        //nomalStudioDiv.appendChild(nomalStudioImage);
        nomalStudioDiv.appendChild(nomalStudioLink);
        document.getElementById('nomalStudios').appendChild(nomalStudioDiv);
        //englishStudioDiv.appendChild(englishStudioTitle);
        //englishStudioDiv.appendChild(englishStudioImage);
        englishStudioDiv.appendChild(englishStudioLink);
        document.getElementById('englishStudios').appendChild(englishStudioDiv);

    });

    document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

/*
const renderJson2 = (json) => {
  const faculty = json.records;
  faculty.forEach(faculty => {
    const nomalFacultyDiv = document.createElement('div');
    const nomalFacultyTitle = document.createElement("span");
    const nomalFacultyImage = document.createElement("img");
    nomalFacultyTitle.className = 'faculty-title';
    //nomalFacultyTitle.parse = "data":['faculty-photo'];
    nomalFacultyTitle.textContent = faculty['f-faculty-ja'];
    nomalFacultyImage.src = faculty['faculty-photo'];

    const englishFacultyDiv = document.createElement('div');
    const englishFacultyTitle = document.createElement("span");
    const englishFacultyImage = document.createElement("img");
    englishFacultyTitle.className = 'faculty-title-en';
    englishFacultyTitle.textContent = faculty['f-faculty-en'];
    englishFacultyImage.src = faculty['faculty-photo'];

    nomalFacultyDiv.appendChild(nomalFacultyImage);
    nomalFacultyDiv.appendChild(nomalFacultyTitle);
    document.getElementById('nomalFaculty').appendChild(nomalFacultyDiv);
    englishFacultyDiv.appendChild(englishFacultyImage);
    englishFacultyDiv.appendChild(englishFacultyTitle);
    document.getElementById('englishFaculty').appendChild(englishFacultyDiv);
  });

  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}*/

/*
var langBotton = document.getElementById("button");
var langBottonClass = langBotton.getAttribute("class");

if (pareValue[1] == "1") {
    langBotton.classList.remove('open');
    langBotton.classList.add('close');
    document.getElementById('nomalButton').style.display = "none";
    document.getElementById('englishButton').style.display = "block";

    document.getElementById('nomalTitle').style.display = "none";
    document.getElementById('englishTitle').style.display = "block";

    document.getElementById('nomalReturn').style.display = "none";
    document.getElementById('englishReturn').style.display = "block";
    document.getElementById('nomalContentsTitle4').style.display = "none";
    document.getElementById('englishContentsTitle4').style.display = "block";
    document.getElementById('nomalStudios').style.display = "none";
    document.getElementById('englishStudios').style.display = "block";
}*/


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

        document.getElementById('nomalButton').style.display = "none";
        document.getElementById('englishButton').style.display = "block";
        //document.getElementById('nomalButtonWork').style.display = "none";
        //document.getElementById('englishButtonWork').style.display = "block";


        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "block";

        document.getElementById('nomalFaculty').style.display = "none";
        document.getElementById('englishFaculty').style.display = "block";

        document.getElementById('nomalText').style.display = "none";
        document.getElementById('englishText').style.display = "block";

        document.getElementById('nomalReturn').style.display = "none";
        document.getElementById('englishReturn').style.display = "block";
        document.getElementById('nomalContentsTitle4').style.display = "none";
        document.getElementById('englishContentsTitle4').style.display = "block";
        document.getElementById('nomalStudios').style.display = "none";
        document.getElementById('englishStudios').style.display = "block";

        //document.getElementById('nomalFaculty').style.display = "none";
        //document.getElementById('englishFaculty').style.display = "block";

    } else if (langBottonClass == "close") {
        langBotton.classList.remove('close');
        langBotton.classList.add('open');
        //langBottonWork.classList.remove('close');
        //langBottonWork.classList.add('open');
        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";

        document.getElementById('nomalTitle').style.display = "block";
        document.getElementById('englishTitle').style.display = "none";

        document.getElementById('nomalFaculty').style.display = "block";
        document.getElementById('englishFaculty').style.display = "none";

        document.getElementById('nomalText').style.display = "block";
        document.getElementById('englishText').style.display = "none";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";

        document.getElementById('nomalContentsTitle4').style.display = "block";
        document.getElementById('englishContentsTitle4').style.display = "none";
        document.getElementById('nomalStudios').style.display = "block";
        document.getElementById('englishStudios').style.display = "none";


        //document.getElementById('nomalFaculty').style.display = "block";
        //document.getElementById('englishFaculty').style.display = "none";
    }

};


const getData = async () => {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            let jsonResponse = await response.json();
            renderJson(jsonResponse);
        }


        /*
        const response2 = await fetch(endpoint2);
        if (response2.ok) {
            let jsonResponse2 = await response2.json();
            renderJson2(jsonResponse2);
        }
        */



    }
    catch (error) {
        console.log(error);
    }
}

getData();
