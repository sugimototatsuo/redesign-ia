const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const sheet3 = "Faculty";
const sheet2 = "Link";
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.pop();
  studios.forEach(studio => {
   const studioDiv = document.createElement('div');
   const studioTitle = document.createElement("span");
   const studioImage = document.createElement("img");

   studioTitle.className = 'studio-title';
   studioTitle.textContent = studio['name-ja'];
   studioImage.src = studios['photo1'];

   const studioTitleEn = document.createElement("span");
   studioTitleEn.className = 'studio-title-en';
   studioTitleEn.textContent = studio['name-en'];
   studioDiv.appendChild(studioTitle);
   studioDiv.appendChild(studioTitleEn);
   document.getElementById('studios').appendChild(studioDiv);
 });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const renderJson2 = (json) => {
  const faculty = json.records;
  faculty.pop();
  faculty.forEach(faculty => {
   const facultyDiv = document.createElement('div');
   const facultyTitle = document.createElement("span");

   facultyTitle.className = 'faculty-name';
   facultyTitle.textContent = faculty['f-faculty-ja'];

   const facultyTitleEn = document.createElement("span");

   facultyTitleEn.className = 'faculty-name-en';
   facultyTitleEn.textContent = faculty['f-faculty-en'];
   facultyDiv.appendChild(facultyTitle);
   facultyDiv.appendChild(facultyTitleEn);
   document.getElementById('faculty').appendChild(facultyDiv);
 });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const renderJson3 = (json) => {
  const link = json.records;
  link.pop();
  link.forEach(link => {
   const linkDiv = document.createElement('div');
   const linkTitle = document.createElement("span");
   linkTitle.className = 'link-title';
   linkTitle.textContent = link['name-ja'];
   const slinkTitleEn = document.createElement("span");
   linkTitleEn.className = 'link-title-en';
   linkTitleEn.textContent = link['name-en'];
   linkDiv.appendChild(linkTitle);
   linkDiv.appendChild(linkTitleEn);
   document.getElementById('link').appendChild(linkDiv);
 });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const getData = async () => {
  try{
    const response =  await fetch(endpoint);
    if(response.ok){
      let jsonResponse = await response.json();
            renderJson(jsonResponse);
    }

    const response2 =  await fetch(endpoint2);
    if(response2.ok){
      let jsonResponse = await response2.json();
            renderJson(jsonResponse);
    }

    const response3 =  await fetch(endpoint3);
    if(response3.ok){
      let jsonResponse = await response3.json();
            renderJson(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

const getData2 = async () => {
  try{
    const response2 =  await fetch(endpoint2);
    if(response2.ok){
      let jsonResponse = await response2.json();
            renderJson(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

getData();
