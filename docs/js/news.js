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
            const anArticleSec = document.createElement('section');
            anArticleSec.className = 'card';



            const photoP = document.createElement('p');
            const photo = document.createElement("img");
            photo.className = 'card-img';
            photo.src = link['photo'];
            photo.alt = link['name-ja'];
            photoP.appendChild(photo);

            const contentDiv = document.createElement('div');
            contentDiv.className = 'card-content';

            const articleTitleH1 = document.createElement('h1');
            articleTitleH1.className = 'card-title';
            articleTitleH1.textContent = link['name-ja'];
            contentDiv.appendChild(articleTitleH1);

            const articleP = document.createElement('p');
            articleP.className = 'card-text';
            var slicetext;
            if ((link['description-ja']).length > 40) {
                slicetext = (link['description-ja']).slice(0, 40) + "…";
                console.log(slicetext);
            } else {
                slicetext = link['description-ja'];
            }

            articleP.textContent = slicetext;
            contentDiv.appendChild(articleP);

            //タグと日付のDiv
            const tag_dateDiv = document.createElement('p');
            tag_dateDiv.className = 'card-meta';

            const updateDateP = document.createElement('p');
            updateDateP.className = 'update-date';
            updateDateP.textContent = link['update-date'];
            tag_dateDiv.appendChild(updateDateP);

            const tagP = document.createElement('p');
            tagP.className = 'tag';
            tagP.textContent = link['tag-ja'];
            tag_dateDiv.appendChild(tagP);

            contentDiv.appendChild(tag_dateDiv);


            //カード全体のsectionにリンク付けする
            const linkOnCard = document.createElement('a');
            linkOnCard.className = 'article-link';
            linkOnCard.href = link['article-link'];

            anArticleSec.appendChild(linkOnCard);
            anArticleSec.appendChild(photoP);
            anArticleSec.appendChild(contentDiv);



            document.getElementById('newsDiv').appendChild(anArticleSec);
            //ニュースの1記事を生成して回す-END

        }

    });

    //document.getElementById('result-link').textContent = JSON.stringify(json, null, 2);//JavaScript のオブジェクトや値を JSON 文字列に変換させて、HTML上のresultというidがついたdivに付与？する。最後の引数は上限が10のスペーシング 変わってんのかわからない
}




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




//topへ戻るボタン　ref:https://hiroshi-yokota.com/2019/12/10/back-to-top/
function getScrolled() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById('js-scroll-fadein');

//ボタンの表示・非表示
window.onscroll = function () {
    (getScrolled() > 500) ? topButton.classList.add('is-fadein') : topButton.classList.remove('is-fadein');
};

//トップに移動する関数
function scrollToTop() {
    var scrolled = getScrolled();
    window.scrollTo(0, Math.floor(scrolled / 2));
    if (scrolled > 0) {
        window.setTimeout(scrollToTop, 30);
    }
};

//イベント登録
topButton.onclick = function () {
    scrollToTop();
};