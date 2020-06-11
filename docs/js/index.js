const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';//google App scriptの何か　たぶんspreadsheetからjsonを取得するためのライブラリ的なものの読み込み
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';//URLのid=にあったこれでどのシートかを指定
const sheet = 'studio';//読み込むシート名
const sheet2 = 'faculty';
const sheet3 = 'Link';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;
//jsonをHTMLにとってきて表示するのに必要な基本的な流れは①~⑤である
const renderJson = (json) => {
  const studios = json.records;
  studios.forEach(studio => {
    const studioDiv = document.createElement('div');

    const studioTitle = document.createElement("span");//①studioTitle　という変数でもって、span要素の作成
    studioTitle.className = 'studio-title';//②span要素？にクラスの名前をつけてCSSで指定できるようにしている
    studioTitle.textContent = studio['name-ja'];//③[データシート上のkey]

    const studioTitleEn = document.createElement("span");//新たにspan要素の作成　-jaと同上  
    studioTitleEn.className = 'studio-title-en';
    studioTitleEn.textContent = studio['name-en'];

    const studioCore = document.createElement("span");
    studioCore.className = 'studio-core';
    studioCore.textContent = studio['core-ja'];

    studioDiv.appendChild(studioTitle);//④
    studioDiv.appendChild(studioTitleEn);
    studioDiv.appendChild(studioCore);

    document.getElementById('studios').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加


    const facultyDiv = document.createElement('div');

    const facultyName = document.createElement("span");
    facultyName.className = 'faculty-name';
    facultyName.textContent = studio['f-faculty-ja'];

    facultyDiv.appendChild(facultyName);//④

    document.getElementById('faculty').appendChild(facultyDiv);

  });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);//JavaScript のオブジェクトや値を JSON 文字列に変換させて、HTML上のresultというidがついたdivに付与？する。最後の引数は上限が10のスペーシング 変わってんのかわからない
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


const getData2 = async () => {
  try {
    const response = await fetch(endpoint2);
    if (response.ok) {
      let jsonResponse = await response.json();
      renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData2();



const getData3 = async () => {
  try {
    const response = await fetch(endpoint3);
    if (response.ok) {
      let jsonResponse = await response.json();
      renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData3();
