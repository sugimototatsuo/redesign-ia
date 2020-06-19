const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';//google App scriptの何か　たぶんspreadsheetからjsonを取得するためのライブラリ的なものの読み込み
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';//URLのid=にあったこれでどのシートかを指定
const sheet = 'studio';//読み込むシート名
const sheet2 = 'faculty';
const sheet3 = 'link';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;
//jsonをHTMLにとってきて表示するのに必要な基本的な流れは①~⑤である

const renderFaculty = (json) => {
    //シート２枚目
    const faculties = json.records;
    faculties.forEach(faculty => {

        if (faculty['f-faculty-ja'] !== '') {
            const facultyDiv = document.createElement('div');
            facultyDiv.className = 'faculty';

            const photoP = document.createElement('p');
            const photo = document.createElement("img");
            photo.className = 'faculty-img';
            photo.src = faculty['faculty-photo'];
            photo.alt = "";
            photoP.appendChild(photo);
            facultyDiv.appendChild(photoP);

            const profileDiv = document.createElement('div');
            profileDiv.className = 'faculty-profile';

            const facultyNameJa = document.createElement("h2");
            facultyNameJa.className = 'faculty-name';
            facultyNameJa.textContent = faculty['f-faculty-ja'];
            profileDiv.appendChild(facultyNameJa);


            const facultyTitleJa = document.createElement("span");
            facultyTitleJa.className = 'faculty-title';
            facultyTitleJa.textContent = faculty['f-faculty-title-ja'];
            profileDiv.appendChild(facultyTitleJa);


            const studioJa = document.createElement("p");
            studioJa.className = 'faculty-studio';
            studioJa.textContent = faculty['f-studio-ja'];
            profileDiv.appendChild(studioJa);


            const majorJa = document.createElement("p");
            majorJa.className = 'faculty-major';
            majorJa.textContent = faculty['major-ja'];
            profileDiv.appendChild(majorJa);


            if (faculty['f-link'] !== '') {
                const linkP = document.createElement('p');
                const fLink = document.createElement('a');
                fLink.className = 'faculty-link';

                fLink.textContent = faculty['f-faculty-ja'] + "のサイトです";//リンクに何かしらテキストがないと見えない
                fLink.href = faculty['f-link'];

                linkP.appendChild(fLink);
                profileDiv.appendChild(linkP);
            }

            facultyDiv.appendChild(profileDiv);

            document.getElementById('faculties').appendChild(facultyDiv);

            const floatClearDiv = document.createElement('div');
            floatClearDiv.className = 'float-clear';
            document.getElementById('faculties').appendChild(floatClearDiv);


        }
    });
    //document.getElementById('result-faculty').textContent = JSON.stringify(json, null, 2);//JavaScript のオブジェクトや値を JSON 文字列に変換させて、HTML上のresultというidがついたdivに付与？する。最後の引数は上限が10のスペーシング 変わってんのかわからない
}



const getData = async () => {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            let jsonResponse = await response.json();
            renderStudio(jsonResponse);
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
            renderFaculty(jsonResponse);
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
            renderLink(jsonResponse);
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