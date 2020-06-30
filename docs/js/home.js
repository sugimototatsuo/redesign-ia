const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';//google App scriptの何か　たぶんspreadsheetからjsonを取得するためのライブラリ的なものの読み込み
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';//URLのid=にあったこれでどのシートかを指定
const sheet = 'group3-studio';//読み込むシート名
const sheet2 = 'group3-works';
const sheet3 = 'group3-news';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;
const endpoint3 = `${uri}?id=${id}&sheet=${sheet3}`;
var studioImageArray = new Array();
//jsonをHTMLにとってきて表示するのに必要な基本的な流れは①~⑤である
const renderStudio = (json) => {//シートごとに使い分ける
    const studios = json.records;

    //studios.pop();//配列の一番最後の要素を取り出すメソッド　ほんとは返り値があって const lastStudio =  studios.pop();とかするべきなんだけど、さいごが空ってわかってるのでOK　ここコメントアウトするとrecordにfacultyだけ反映される…
    studios.forEach(studio => {//forEachで各スタジオをグルグル回してる　配列が12個だとちょうどいいのに13個あるので、最後の要素を取ってあげればいい

        //シート１枚目
        if (studio['name-ja'] !== '') {


            studioImageArray.push(studio['photo1']);
            console.log(studioImageArray);

        }
    });

}

const renderWorks = (json) => {//シートごとに使い分ける
    const works = json.records;
    var i = 0;
    works.forEach(work => {
        //最新８件を取ってくる
        if (work['title-ja'] !== '' && i < 8) {


            const workImg = document.createElement("img");
            workImg.className = 'work-img';
            workImg.src = work['img'];
            workImg.alt = work['title-ja'];


            document.getElementById('worksDiv').appendChild(workImg);

            i++;

        }
    });

}


const renderLink = (json) => {
    //シート３枚目
    const links = json.records;
    var i = 0;
    links.forEach(link => {
        //最新記事3件を取ってくる
        if (link['name-ja'] !== '' && i < 3) {


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
            const date = new Date(link['update-date']);


            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            //Dateをそのまま表示すると詳細すぎるのでフォーマットの指定が必要
            const formatDay = "🕑 " + year + "/" + month + "/" + day;
            updateDateP.textContent = formatDay;
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

            anArticleSec.appendChild(linkOnCard)
            anArticleSec.appendChild(photoP);
            anArticleSec.appendChild(contentDiv);



            document.getElementById('newsDiv').appendChild(anArticleSec);
            //ニュースの1記事を生成して回す-END

            i++;
        }

    });

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
            renderWorks(jsonResponse);
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





//ローディングアニメーション　jsonの読み込み
let lottieObj = lottie.loadAnimation({
    container: document.getElementById('loadingAnime'), // 表示させたい要素を渡します
    renderer: 'svg', // 描画形式を指定
    loop: true, // trueにしたらループ、1回再生の場合はfalseで
    autoplay: true, // 自動再生、falseの場合は自分のタイミングで
    path: 'js/loadingIA.json' // 再生させたいアニメーションのjsonのパスを指定します。リンクだといけるな…なんだそれ
});


window.onload = function () {
    let iaLogo = document.getElementById('loading');

    // .box に .loaded を追加してローディング表示を消す
    iaLogo.classList.add('loaded');
}




/*----------------スタジオ画像のスライドショ--------------- ref:http://cya.sakura.ne.jp/java/sshow2.htm*/

var slideCount = -1;		// 現在表示している配列番号
var slideflag = 0;		// どっちを表示して、どっちを消すかのフラグ
function slideChange() {	// スライドショーメイン関数
    slideCount = (slideCount < studioImageArray.length - 1) ? slideCount + 1 : 0;		// 次の配列番号
    slideflag = (slideflag == 0) ? 1 : 0;						// 表示・非表示フラグ反転
    if (slideflag == 0) {
        document.getElementById("studioShow-1").src = studioImageArray[slideCount];		// 次の画像をセットする
        document.getElementById("studioShow-1").className = "fadein";		// フェードイン
        document.getElementById("studioShow-2").className = "fadeout";	// フェードアウト

    } else {
        document.getElementById("studioShow-2").src = studioImageArray[slideCount];		// 次の画像をセットする
        document.getElementById("studioShow-1").className = "fadeout";	// フェードアウト
        document.getElementById("studioShow-2").className = "fadein";		// フェードイン

    }


    setTimeout("slideChange()", 4000);					// 4秒周期に画像を更新する
}

slideChange();




/*----------------教員画像のスライドショ--------------- ref:http://cya.sakura.ne.jp/java/sshow2.htm*/

myImage1 = new Array(	// 画像ファイル名の設定
    "./img/currentSite_imgs/faculty/kusumi.jpg",
    "./img/currentSite_imgs/faculty/kushiyama.jpg",
    "./img/currentSite_imgs/faculty/komma.png",
    "./img/currentSite_imgs/faculty/verl.jpg",
    "./img/currentSite_imgs/faculty/andou.jpg"
);

myImage2 = new Array(	// 画像ファイル名の設定
    "./img/currentSite_imgs/faculty/kim.png",
    "./img/currentSite_imgs/faculty/baba.png",
    "./img/currentSite_imgs/faculty/sugimoto.jpg",
    "./img/currentSite_imgs/faculty/namba.png",
    "./img/currentSite_imgs/faculty/hidaka.png"
);

myImage3 = new Array(	// 画像ファイル名の設定
    "./img/currentSite_imgs/faculty/kasamatsu.png",
    "./img/currentSite_imgs/faculty/fujiwara.png",
    "./img/currentSite_imgs/faculty/mukai.jpg",
    "./img/currentSite_imgs/faculty/kikutake.jpg",
    "./img/currentSite_imgs/faculty/motegi.png",
    "./img/currentSite_imgs/faculty/tsuchiya.jpg"
);



var nowCount = -1;		// 現在表示している配列番号
var nowflag = 0;		// どっちを表示して、どっちを消すかのフラグ
function myChange() {	// スライドショーメイン関数
    nowCount = (nowCount < myImage1.length - 1) ? nowCount + 1 : 0;		// 次の配列番号
    nowflag = (nowflag == 0) ? 1 : 0;						// 表示・非表示フラグ反転
    if (nowflag == 0) {
        document.getElementById("idshow1-1").src = myImage1[nowCount];		// 次の画像をセットする
        document.getElementById("idshow1-1").className = "fadein";		// フェードイン
        document.getElementById("idshow1-2").className = "fadeout";	// フェードアウト


        document.getElementById("idshow2-1").src = myImage2[nowCount];		// 次の画像をセットする
        document.getElementById("idshow2-1").className = "fadein";		// フェードイン
        document.getElementById("idshow2-2").className = "fadeout";	// フェードアウト


        document.getElementById("idshow3-1").src = myImage3[nowCount];		// 次の画像をセットする
        document.getElementById("idshow3-1").className = "fadein";		// フェードイン
        document.getElementById("idshow3-2").className = "fadeout";	// フェードアウト
    } else {
        document.getElementById("idshow1-2").src = myImage1[nowCount];		// 次の画像をセットする
        document.getElementById("idshow1-1").className = "fadeout";	// フェードアウト
        document.getElementById("idshow1-2").className = "fadein";		// フェードイン

        document.getElementById("idshow2-2").src = myImage2[nowCount];		// 次の画像をセットする
        document.getElementById("idshow2-1").className = "fadeout";	// フェードアウト
        document.getElementById("idshow2-2").className = "fadein";		// フェードイン

        document.getElementById("idshow3-2").src = myImage3[nowCount];		// 次の画像をセットする
        document.getElementById("idshow3-1").className = "fadeout";	// フェードアウト
        document.getElementById("idshow3-2").className = "fadein";		// フェードイン

    }


    setTimeout("myChange()", 4000);					// 4秒周期に画像を更新する
}

myChange();


