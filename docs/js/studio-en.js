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
    mediaStudioDiv.className = 'media-studios-div';

    studios.forEach(studio => {

        if (studio['name-ja'] !== '') {

            if (studio['core-ja'] == 'メディアアートコア・メディア創生') {

                const studioDiv = document.createElement('div');
                studioDiv.className = 'a-studio';

                //画像にリンク付け＋マウスオーバーでエフェクトする構造
                const linkPhotoP = document.createElement('p');
                const linkOnPhoto = document.createElement('a');
                linkOnPhoto.className = 's-link';
                const imgDiv = document.createElement('div');
                imgDiv.className = 'studio-photo-wrap';
                const photo = document.createElement("img");
                photo.className = 's-photo';
                const maskDiv = document.createElement('div');
                maskDiv.className = 'mask_red';
                const captionDiv = document.createElement('div');
                captionDiv.className = 'caption';
                captionDiv.textContent = studio['name-en'];
                maskDiv.appendChild(captionDiv);


                photo.src = studio['photo1'];
                photo.alt = studio['name-en'];
                linkOnPhoto.href = studio['studio-page-link-en'];


                imgDiv.appendChild(photo);
                imgDiv.appendChild(maskDiv);
                linkOnPhoto.appendChild(imgDiv);
                linkPhotoP.appendChild(linkOnPhoto);
                studioDiv.appendChild(linkPhotoP);



                const linkTitleP = document.createElement('p');
                const linkOnText = document.createElement('a');//ここでうっかりlinkっていう変数を作っちゃうとかぶるのでうまくいかない
                linkOnText.className = 'studio-title';
                linkOnText.textContent = studio['name-en'];//リンクに何かしらテキストがないと見えない
                linkOnText.href = studio['studio-page-link-en'];
                linkTitleP.appendChild(linkOnText);
                studioDiv.appendChild(linkTitleP);



                mediaStudioDiv.appendChild(studioDiv);
                document.getElementById('media-studios').appendChild(mediaStudioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
        }

    });
    const productStudioDiv = document.createElement('div');
    productStudioDiv.className = 'product-studios-div';

    studios.forEach(studio => {

        if (studio['name-ja'] !== '') {

            if (studio['core-ja'] == 'プロダクトデザインコア') {

                const studioDiv = document.createElement('div');
                studioDiv.className = 'a-studio';



                //画像にリンク付け＋マウスオーバーでエフェクトする構造
                const linkPhotoP = document.createElement('p');
                const linkOnPhoto = document.createElement('a');
                linkOnPhoto.className = 's-link';
                const imgDiv = document.createElement('div');
                imgDiv.className = 'studio-photo-wrap';
                const photo = document.createElement("img");
                photo.className = 's-photo';
                const maskDiv = document.createElement('div');
                maskDiv.className = 'mask_blue';
                const captionDiv = document.createElement('div');
                captionDiv.className = 'caption';
                captionDiv.textContent = studio['name-en'];
                maskDiv.appendChild(captionDiv);


                photo.src = studio['photo1'];
                photo.alt = studio['name-en'];
                linkOnPhoto.href = studio['studio-page-link-en'];


                imgDiv.appendChild(photo);
                imgDiv.appendChild(maskDiv);
                linkOnPhoto.appendChild(imgDiv);
                linkPhotoP.appendChild(linkOnPhoto);
                studioDiv.appendChild(linkPhotoP);


                const linkTitleP = document.createElement('p');
                const linkOnText = document.createElement('a');//ここでうっかりlinkっていう変数を作っちゃうとかぶるのでうまくいかない
                linkOnText.className = 'studio-title';
                linkOnText.textContent = studio['name-en'];//リンクに何かしらテキストがないと見えない
                linkOnText.href = studio['studio-page-link-en'];
                linkTitleP.appendChild(linkOnText);
                studioDiv.appendChild(linkTitleP);

                productStudioDiv.appendChild(studioDiv);
                document.getElementById('product-studios').appendChild(productStudioDiv);
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





