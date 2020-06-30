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

        if (link['name-en'] !== '') {


            //START-ニュースの1記事を生成して回す
            //一つの記事全体を囲むdiv
            const anArticleDiv = document.createElement('div');
            anArticleDiv.className = 'an-article-div';


            //写真
            const photoP = document.createElement('p');
            const photo = document.createElement("img");
            photo.className = 'article-img';
            photo.src = link['photo'];
            photo.alt = link['name-en'];
            photoP.appendChild(photo);


            //写真以外
            const contentDiv = document.createElement('div');
            contentDiv.className = 'article-content';

            const articleTitleH1 = document.createElement('h1');
            articleTitleH1.className = 'article-title';
            articleTitleH1.textContent = link['name-en'];
            contentDiv.appendChild(articleTitleH1);

            const articleTextP = document.createElement('p');
            articleTextP.className = 'article-text';
            articleTextP.textContent = link['description-en'];
            contentDiv.appendChild(articleTextP);




            if (link['venue-ja'] !== '') {
                const venueDiv = document.createElement('div');
                venueDiv.className = 'info-wrapper';

                const venueHead = document.createElement('p');
                venueHead.className = 'info-head';
                venueHead.textContent = "Venue";

                const venue = document.createElement('p');
                venue.className = 'info';
                venue.textContent = link['venue-en'];

                venueDiv.appendChild(venueHead);
                venueDiv.appendChild(venue);

                contentDiv.appendChild(venueDiv);
            }




            if (link['event-dates-ja'] !== '') {
                const eventDateDiv = document.createElement('div');
                eventDateDiv.className = 'info-wrapper';

                const eventDateHead = document.createElement('p');
                eventDateHead.className = 'info-head';
                eventDateHead.textContent = "Period";

                const eventDate = document.createElement('p');
                eventDate.className = 'info';
                eventDate.textContent = link['event-dates-en'];

                eventDateDiv.appendChild(eventDateHead);
                eventDateDiv.appendChild(eventDate);

                contentDiv.appendChild(eventDateDiv);
            }


            if (link['link'] !== '') {
                const refLinkDiv = document.createElement('div');
                refLinkDiv.className = 'info-wrapper';

                const refLinkHead = document.createElement('p');
                refLinkHead.className = 'info-head';
                refLinkHead.textContent = "Related Links";

                //aはpで囲わなくてもいけるけど一応囲む
                const refLinkP = document.createElement('p');
                const refLink = document.createElement('a');
                refLink.className = 'info';
                refLink.href = link['link'];
                refLink.textContent = link['link-title'];
                refLink.target = "_blank";
                refLinkP.appendChild(refLink);

                refLinkDiv.appendChild(refLinkHead);
                refLinkDiv.appendChild(refLinkP);

                contentDiv.appendChild(refLinkDiv);
            }
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
            tagP.textContent = link['tag-en'];
            tag_dateDiv.appendChild(tagP);

            contentDiv.appendChild(tag_dateDiv);





            //要素があれば差し込むというふうにするために変数を突くておく
            var target_01 = document.getElementById("articleDiv_01");
            var target_equip = document.getElementById("studioLeftSec_equip");
            var target_ergonomics = document.getElementById("studioLeftSec_ergo");
            var target_interactive = document.getElementById("studioLeftSec_interactive");
            var target_interface = document.getElementById("studioLeftSec_interface");
            var target_interior = document.getElementById("studioLeftSec_interior");
            var target_kinemat = document.getElementById("studioLeftSec_kinemat");
            var target_network = document.getElementById("studioLeftSec_network");
            var target_software = document.getElementById("studioLeftSec_software");
            var target_spatial = document.getElementById("studioLeftSec_spatial");
            var target_transportation = document.getElementById("studioLeftSec_trans");
            var target_visual = document.getElementById("studioLeftSec_visual");

            if (link['name-ja'] == '【学内展】卒業・修了制作展2020') {
                if (target_01) {//要素があれば

                    document.getElementById('articleDiv_01').appendChild(photoP);
                    document.getElementById('articleDiv_01').appendChild(contentDiv);

                }
            }

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

