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
            photo.alt = link['name-en'];
            photoP.appendChild(photo);

            const contentDiv = document.createElement('div');
            contentDiv.className = 'card-content';

            const articleTitleH1 = document.createElement('h1');
            articleTitleH1.className = 'card-title';
            articleTitleH1.textContent = link['name-en'];
            contentDiv.appendChild(articleTitleH1);

            const articleP = document.createElement('p');
            articleP.className = 'card-text';
            var slicetext;
            if ((link['description-en']).length > 120) {
                slicetext = (link['description-en']).slice(0, 120) + "…";
                console.log(slicetext);
            } else {
                slicetext = link['description-en'];
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
            tagP.textContent = link['tag-en'];
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

