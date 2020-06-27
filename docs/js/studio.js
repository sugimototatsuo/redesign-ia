const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';//google App scriptの何か　たぶんspreadsheetからjsonを取得するためのライブラリ的なものの読み込み
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';//URLのid=にあったこれでどのシートかを指定
const sheet = 'group3-studio';//読み込むシート名
const sheet2 = 'faculty';
const sheet3 = 'link';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;
//jsonをHTMLにとってきて表示するのに必要な基本的な流れは①~⑤である
const renderStudio = (json) => {//シートごとに使い分ける
    const studios = json.records;


    const mediaStudioDiv = document.createElement('div');
    mediaStudioDiv.className = 'media-studios';

    studios.forEach(studio => {

        if (studio['name-ja'] !== '') {

            if (studio['core-ja'] == 'メディアアートコア・メディア創生') {

                const studioDiv = document.createElement('div');
                studioDiv.className = 'a-studio';

                //画像にリンク付する構造
                const linkPhotoP = document.createElement('p');
                const linkOnPhoto = document.createElement('a');
                const photo = document.createElement("img");
                linkOnPhoto.className = 's-link';
                photo.className = 's-photo';
                photo.src = studio['photo1'];
                photo.alt = studio['name-ja'];
                linkOnPhoto.href = studio['studio-page-link'];
                //linkOnPhoto.target = "_blank";
                linkOnPhoto.appendChild(photo);
                linkPhotoP.appendChild(linkOnPhoto);
                studioDiv.appendChild(linkPhotoP, photo);

                /* const studioTitleJa = document.createElement("p");
                 studioTitleJa.className = 'studio-title';
                 studioTitleJa.textContent = studio['name-ja'];
                 studioDiv.appendChild(studioTitleJa);*/

                const linkTitleP = document.createElement('p');
                const linkOnText = document.createElement('a');//ここでうっかりlinkっていう変数を作っちゃうとかぶるのでうまくいかない
                linkOnText.className = 'studio-title';
                linkOnText.textContent = studio['name-ja'];//リンクに何かしらテキストがないと見えない
                linkOnText.href = studio['studio-page-link'];
                linkTitleP.appendChild(linkOnText);
                studioDiv.appendChild(linkTitleP);



                mediaStudioDiv.appendChild(studioDiv);
                document.getElementById('studios').appendChild(mediaStudioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
        }

    });
    const productStudioDiv = document.createElement('div');
    productStudioDiv.className = 'product-studios';

    studios.forEach(studio => {

        if (studio['name-ja'] !== '') {

            if (studio['core-ja'] == 'プロダクトデザインコア') {

                const studioDiv = document.createElement('div');
                studioDiv.className = 'a-studio';




                //画像にリンク付する構造
                const linkPhotoP = document.createElement('p');
                const linkOnPhoto = document.createElement('a');
                const photo = document.createElement("img");
                linkOnPhoto.className = 's-link';
                photo.className = 's-photo';
                photo.src = studio['photo1'];
                photo.alt = studio['name-ja'];
                linkOnPhoto.href = studio['studio-page-link'];
                //linkOnPhoto.target = "_blank";
                linkOnPhoto.appendChild(photo);
                linkPhotoP.appendChild(linkOnPhoto);
                studioDiv.appendChild(linkPhotoP, photo);
                // document.getElementById('sotsutenLinkDiv').appendChild(linkPhotoP, exhibiPhoto);

                /*
                                const photoP = document.createElement('p');//★
                                const photo1 = document.createElement("img");
                                photo1.className = 'studio-img';
                                photo1.src = studio['photo1'];
                                photo1.alt = studio['photo-alt'];
                                photoP.appendChild(photo1);
                                studioDiv.appendChild(photoP);*/

                const studioTitleJa = document.createElement("p");
                studioTitleJa.className = 'studio-title';
                studioTitleJa.textContent = studio['name-ja'];
                studioDiv.appendChild(studioTitleJa);

                productStudioDiv.appendChild(studioDiv);
                document.getElementById('studios').appendChild(productStudioDiv);
            }
        }

    });

    //document.getElementById('result-studio').textContent = JSON.stringify(json, null, 2);
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




let lottieObj = lottie.loadAnimation({
    container: document.getElementById('sampleAnime'), // 表示させたい要素を渡します
    renderer: 'svg', // 描画形式を指定
    loop: true, // trueにしたらループ、1回再生の場合はfalseで
    autoplay: true, // 自動再生、falseの場合は自分のタイミングで
    path: 'https://assets6.lottiefiles.com/packages/lf20_lp3wO4.json' // 再生させたいアニメーションのjsonのパスを指定します。リンクだといけるな…なんだそれ
});