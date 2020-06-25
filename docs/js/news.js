const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';//google App scriptの何か　たぶんspreadsheetからjsonを取得するためのライブラリ的なものの読み込み
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';//URLのid=にあったこれでどのシートかを指定
const sheet = 'studio';//読み込むシート名
const sheet2 = 'faculty';
const sheet3 = 'group3-news';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;

const renderLink = (json) => {
    //シート３枚目
    const links = json.records;
    links.forEach(link => {

        if (link['name-ja'] !== '') {


            //START-ニュースの1記事を生成して回す
            //一つの記事全体を囲むdiv
            const anArticleDiv = document.createElement('div');
            anArticleDiv.className = 'an-article';


            const photoP = document.createElement('p');//★
            const photo = document.createElement("img");
            photo.className = 'article-img';
            photo.src = link['photo'];
            photo.alt = "";
            photoP.appendChild(photo);
            anArticleDiv.appendChild(photoP);

            //記事のタイトル・掲載日・内容といった、テキスト部分を包括するdiv
            const articleTextContainerDiv = document.createElement('div');
            articleTextContainerDiv.className = 'article-text-container';

            const articleTitle = document.createElement('p');
            articleTitle.className = 'article-title';
            const articleTitleLink = document.createElement('a');
            articleTitleLink.textContent = link['name-ja'];
            articleTitleLink.href = link['link'];
            articleTitle.appendChild(articleTitleLink);
            articleTextContainerDiv.appendChild(articleTitle);

            const updateDateP = document.createElement('p');
            updateDateP.className = 'update-date';
            articleTextContainerDiv.appendChild(updateDateP);

            const articleContents = document.createElement('p');
            articleContents.className = 'article-contents';
            articleContents.textContent = link['description-ja'];
            articleTextContainerDiv.appendChild(articleContents);

            anArticleDiv.appendChild(articleTextContainerDiv);

            const floatClearDiv = document.createElement('div');
            floatClearDiv.className = 'float-clear';
            anArticleDiv.appendChild(floatClearDiv);

            document.getElementById('articles').appendChild(anArticleDiv);
            //ニュースの1記事を生成して回す-END


            const linkDiv = document.createElement('div');

            const nameJa = document.createElement("span");
            nameJa.className = 'name';
            nameJa.textContent = link['name-ja'];
            linkDiv.appendChild(nameJa);

            const nameEn = document.createElement("span");
            nameEn.className = 'name';
            nameEn.textContent = link['name-en'];
            linkDiv.appendChild(nameEn);

            const venueJa = document.createElement("span");
            venueJa.className = 'venue';
            venueJa.textContent = link['venue-ja'];
            linkDiv.appendChild(venueJa);

            const venueEn = document.createElement("span");
            venueEn.className = 'venue';
            venueEn.textContent = link['venue-en'];
            linkDiv.appendChild(venueEn);

            const eventDatesJa = document.createElement("span");
            eventDatesJa.className = 'event-dates';
            eventDatesJa.textContent = link['event-dates-ja'];
            linkDiv.appendChild(eventDatesJa);

            const eventDatesEn = document.createElement("span");
            eventDatesEn.className = 'event-dates';
            eventDatesEn.textContent = link['event-dates-en'];
            linkDiv.appendChild(eventDatesEn);

            const descriptionJa = document.createElement("p");
            descriptionJa.className = 'l-description';
            descriptionJa.textContent = link['description-ja'];
            linkDiv.appendChild(descriptionJa);


            const descriptionEn = document.createElement("p");
            descriptionEn.className = 'l-description';
            descriptionEn.textContent = link['description-en'];
            linkDiv.appendChild(descriptionEn);

            const linkP = document.createElement('p');
            const lLink = document.createElement('a');//ここでうっかりlinkっていう変数を作っちゃうとかぶるのでうまくいかない
            lLink.className = 'l-link';
            lLink.textContent = link['name-ja'] + "のサイトです";//リンクに何かしらテキストがないと見えない
            lLink.href = link['link'];
            linkP.appendChild(lLink);
            linkDiv.appendChild(linkP);


            //画像にリンク付する構造
            const linkPhotoP = document.createElement('p');
            const linkOnPhoto = document.createElement('a');
            const exhibiPhoto = document.createElement("img");
            linkOnPhoto.className = 'l-link';
            exhibiPhoto.className = 'l-photo';
            exhibiPhoto.src = link['photo'];
            exhibiPhoto.alt = link['name-ja'];
            linkOnPhoto.href = link['link'];
            linkOnPhoto.target = "_blank";
            linkOnPhoto.appendChild(exhibiPhoto);
            linkPhotoP.appendChild(linkOnPhoto);
            // document.getElementById('sotsutenLinkDiv').appendChild(linkPhotoP, exhibiPhoto);


            // document.getElementById('links').appendChild(linkDiv);

        }

    });

    //document.getElementById('result-link').textContent = JSON.stringify(json, null, 2);//JavaScript のオブジェクトや値を JSON 文字列に変換させて、HTML上のresultというidがついたdivに付与？する。最後の引数は上限が10のスペーシング 変わってんのかわからない
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