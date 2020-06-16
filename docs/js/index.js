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
  studios.pop();//配列の一番最後の要素を取り出すメソッド　ほんとは返り値があって const lastStudio =  studios.pop();とかするべきなんだけど、さいごが空ってわかってるのでOK
  studios.forEach(studio => {//forEachで各スタジオをグルグル回してる　配列が12個だとちょうどいいのに13個あるので、最後の要素を取ってあげればいい

    if (studio['name-ja'] !== '') {
      const studioDiv = document.createElement('div');

      const studioTitleJa = document.createElement("span");//①studioTitle　という変数でもって、span要素の作成
      studioTitleJa.className = 'studio-title';//②span要素？にクラスの名前をつけてCSSで指定できるようにしている
      studioTitleJa.textContent = studio['name-ja'];//③[データシート上のkey]

      const studioTitleEn = document.createElement("span");//新たにspan要素の作成　-jaと同上  
      studioTitleEn.className = 'studio-title-en';
      studioTitleEn.textContent = studio['name-en'];

      const studioCoreJa = document.createElement("span");
      studioCoreJa.className = 'studio-core';
      studioCoreJa.textContent = studio['core-ja'];

      const studioCoreEn = document.createElement("span");
      studioCoreEn.className = 'studio-core-en';
      studioCoreEn.textContent = studio['core-en'];

      const facultyJa = document.createElement("span");
      facultyJa.className = 'faculty';
      facultyJa.textContent = studio['faculty-ja'];

      const facultyEn = document.createElement("span");
      facultyEn.className = 'faculty-en';
      facultyEn.textContent = studio['faculty-en'];

      const facultyTitleJa = document.createElement("span");
      facultyTitleJa.className = 'facultyTitle';
      facultyTitleJa.textContent = studio['facultyTitle-ja'];

      const facultyTitleEn = document.createElement("span");
      facultyTitleEn.className = 'facultyTitle-en';
      facultyTitleEn.textContent = studio['facultyTitle-en'];

      const descriptionJa = document.createElement("span");
      descriptionJa.className = 'descriptionJa';
      descriptionJa.textContent = studio['description-ja'];

      const descriptionEn = document.createElement("span");
      descriptionEn.className = 'descriptionJa';
      descriptionEn.textContent = studio['description-ja'];


      const photoP = document.createElement('p');

      const photo1 = document.createElement("img");
      photo1.className = 'photo';
      photo1.src = studio['photo1'];
      photo1.alt = "";

      const photo2 = document.createElement("img");
      photo2.className = 'photo';
      photo2.src = studio['photo2'];
      photo2.alt = "";

      const photo3 = document.createElement("img");
      photo3.className = 'photo';
      photo3.src = studio['photo3'];
      photo3.alt = "";

      const photo4 = document.createElement("img");
      photo4.className = 'photo';
      photo4.src = studio['photo4'];
      photo4.alt = "";

      const photo5 = document.createElement("img");
      photo5.className = 'photo';
      photo5.src = studio['photo5'];
      photo5.alt = "";



      photoP.appendChild(photo1);
      photoP.appendChild(photo2);
      photoP.appendChild(photo3);
      photoP.appendChild(photo4);
      photoP.appendChild(photo5);

      studioDiv.appendChild(studioTitleJa);//④
      studioDiv.appendChild(studioTitleEn);
      studioDiv.appendChild(studioCoreJa);
      studioDiv.appendChild(studioCoreEn);
      studioDiv.appendChild(facultyJa);
      studioDiv.appendChild(facultyEn);
      studioDiv.appendChild(facultyTitleJa);
      studioDiv.appendChild(facultyTitleEn);
      studioDiv.appendChild(descriptionJa);
      studioDiv.appendChild(descriptionEn);
      studioDiv.appendChild(photoP);


      document.getElementById('studios').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加


      const facultyDiv = document.createElement('div');

      const facultyName = document.createElement("span");
      facultyName.className = 'faculty-name';
      facultyName.textContent = studio['f-faculty-ja'];

      facultyDiv.appendChild(facultyName);//④

      document.getElementById('faculty').appendChild(facultyDiv);

    }
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



let lottieObj = lottie.loadAnimation({
  container: document.getElementById('sampleAnime'), // 表示させたい要素を渡します
  renderer: 'svg', // 描画形式を指定
  loop: true, // trueにしたらループ、1回再生の場合はfalseで
  autoplay: true, // 自動再生、falseの場合は自分のタイミングで
  path: 'https://assets6.lottiefiles.com/packages/lf20_lp3wO4.json' // 再生させたいアニメーションのjsonのパスを指定します。リンクだといけるな…なんだそれ
});