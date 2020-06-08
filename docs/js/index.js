const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';

const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const sheet2 = "Faculty";
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;


const renderJson = (json) => {
  const studios = json.records;
  studios.forEach(studios => {
    const nomalStudioDiv = document.createElement('div');
    const nomalStudioTitle = document.createElement("span");
    nomalStudioTitle.className = 'studio-title';
    nomalStudioTitle.textContent = studios['name-ja'];

    const englishStudioDiv = document.createElement('div');
    const englishStudioTitle = document.createElement("span");

    englishStudioTitle.className = 'studio-title-en';
    englishStudioTitle.textContent = studios['name-en'];

    nomalStudioDiv.appendChild(nomalStudioTitle);
    document.getElementById('nomalStudios').appendChild(nomalStudioDiv);
    englishStudioDiv.appendChild(englishStudioTitle);
    document.getElementById('englishStudios').appendChild(englishStudioDiv);

  });

  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}


const renderJson2 = (json) => {
  const faculty = json.records;
  faculty.forEach(faculty => {
    const nomalFacultyDiv = document.createElement('div');
    const nomalFacultyTitle = document.createElement("span");
    nomalFacultyTitle.className = 'faculty-title';
    nomalFacultyTitle.textContent = faculty['f-faculty-ja'];

    const englishFacultyDiv = document.createElement('div');
    const englishFacultyTitle = document.createElement("span");

    englishFacultyTitle.className = 'faculty-title-en';
    englishFacultyTitle.textContent = faculty['f-faculty-en'];

    nomalFacultyDiv.appendChild(nomalFacultyTitle);
    document.getElementById('nomalFaculty').appendChild(nomalFacultyDiv);
    englishFacultyDiv.appendChild(englishFacultyTitle);
    document.getElementById('englishFaculty').appendChild(englishFacultyDiv);
  });

  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}


//aaaaaaaaaa
document.getElementById("button").onclick = function () {
  var langBotton = document.getElementById("button");
  var langBottonClass = langBotton.getAttribute("class");

  if (langBottonClass == "open") {
    langBotton.classList.remove('open');
    langBotton.classList.add('close');
    document.getElementById('nomalButton').style.display = "none";
    document.getElementById('englishButton').style.display = "block";
    document.getElementById('nomalTitle').style.display = "none";
    document.getElementById('englishTitle').style.display = "block";
    document.getElementById('englishTitle2').style.display = "block";

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "none";
      document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "block";
    }

    document.getElementById('nomalText').style.display = "none";
    document.getElementById('englishText').style.display = "block";

    document.getElementById('nomalStudios').style.display = "none";
    document.getElementById('englishStudios').style.display = "block";

    document.getElementById('nomalFaculty').style.display = "none";
    document.getElementById('englishFaculty').style.display = "block";

  } else {
    langBotton.classList.remove('close');
    langBotton.classList.add('open');
    document.getElementById('nomalButton').style.display = "block";
    document.getElementById('englishButton').style.display = "none";
    document.getElementById('nomalTitle').style.display = "block";
    document.getElementById('englishTitle').style.display = "none";
    document.getElementById('englishTitle2').style.display = "none";

    for (var i = 0; i <= 8; i++) {
      document.getElementById('nomalSubtitle' + (i + 1).toString()).style.display = "block";
      document.getElementById('englishSubtitle' + (i + 1).toString()).style.display = "none";
    }

    document.getElementById('nomalText').style.display = "block";
    document.getElementById('englishText').style.display = "none";

    document.getElementById('nomalStudios').style.display = "block";
    document.getElementById('englishStudios').style.display = "none";

    document.getElementById('nomalFaculty').style.display = "block";
    document.getElementById('englishFaculty').style.display = "none";
  }

};


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



  }
  catch (error) {
    console.log(error);
  }
}

getData();
