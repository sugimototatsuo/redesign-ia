const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.forEach(studio => {
    const studioDiv = document.createElement('div');
    const studioTitle = document.createElement("span");
    //const studioDisply = document.createElement("style");
    studioTitle.className = 'studio-title';
    studioTitle.textContent = studio['name-ja'];

    const studioTitleEn = document.createElement("span");
    //const studioDisplyEn = document.createElement("style");
    studioTitleEn.className = 'studio-title-en';
    studioTitleEn.textContent = studio['name-en'];
    studioTitle.style.display = "block";
    studioTitleEn.style.display = "none";

    document.getElementById("button").onclick = function () {
      var langBotton = document.getElementById("button");
      var langBottonClass = langBotton.getAttribute("class");

      if (langBottonClass == "open") {
        studioTitle.style.display = "none";
        studioTitleEn.style.display = "block";
      } else {
        studioTitle.style.display = "block";
        studioTitleEn.style.display = "none";
      }
    }

    studioDiv.appendChild(studioTitle);
    studioDiv.appendChild(studioTitleEn);
    document.getElementById('studios').appendChild(studioDiv);
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

    document.getElementsById('studio-title').style.display = "none";
    document.getElementsById('studio-title-en').style.display = "block";

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

    document.getElementsById('studio-title').style.display = "block";
    document.getElementsById('studio-title-en').style.display = "none";

  }

};
