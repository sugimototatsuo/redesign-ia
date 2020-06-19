const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';//google App scriptの何か　たぶんspreadsheetからjsonを取得するためのライブラリ的なものの読み込み
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';//URLのid=にあったこれでどのシートかを指定
const sheet = 'studio';//読み込むシート名
const sheet2 = 'faculty';
const sheet3 = 'link';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;
//jsonをHTMLにとってきて表示するのに必要な基本的な流れは①~⑤である
const renderStudio = (json) => {//シートごとに使い分ける
    const studios = json.records;
    const productStudioDiv = document.createElement('div');
    productStudioDiv.className = 'studio-core';

    studios.forEach(studio => {


        if (studio['name-ja'] !== '') {
            const studioDiv = document.createElement('div');
            studioDiv.className = 'a-studio';


            if (studio['core-ja'] == 'プロダクトデザインコア') {


                const photoP = document.createElement('p');//★
                const photo1 = document.createElement("img");
                photo1.className = 'studio-img';
                photo1.src = studio['photo1'];
                photo1.alt = "";
                photoP.appendChild(photo1);
                studioDiv.appendChild(photoP);

                const studioTitleJa = document.createElement("p");
                studioTitleJa.className = 'studio-title';
                studioTitleJa.textContent = studio['name-ja'];
                studioDiv.appendChild(studioTitleJa);
            }
            productStudioDiv.appendChild(studioDiv);

            document.getElementById('studios').appendChild(productStudioDiv);
        }

    });

    studios.forEach(studio => {
        const studioDiv = document.createElement('div');
        studioDiv.className = 'a-studio';


        if (studio['name-ja'] !== '') {

            if (studio['core-ja'] == 'メディアアートコア・メディア創生') {
                const mediaStudioDiv = document.createElement('div');
                mediaStudioDiv.className = 'studio-core';

                const photoP = document.createElement('p');//★
                const photo1 = document.createElement("img");
                photo1.className = 'studio-img';
                photo1.src = studio['photo1'];
                photo1.alt = "";
                photoP.appendChild(photo1);
                mediaStudioDiv.appendChild(photoP);

                const studioTitleJa = document.createElement("p");
                studioTitleJa.className = 'studio-title';
                studioTitleJa.textContent = studio['name-ja'];
                mediaStudioDiv.appendChild(studioTitleJa);

                studioDiv.appendChild(mediaStudioDiv);

                document.getElementById('studios').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
        }

    });

    //document.getElementById('result-studio').textContent = JSON.stringify(json, null, 2);//JavaScript のオブジェクトや値を JSON 文字列に変換させて、HTML上のresultというidがついたdivに付与？する。最後の引数は上限が10のスペーシング 変わってんのかわからない
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