const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';//google App scriptの何か　たぶんspreadsheetからjsonを取得するためのライブラリ的なものの読み込み
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';//URLのid=にあったこれでどのシートかを指定
const sheet = 'group3-works';//読み込むシート名

const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

//jsonをHTMLにとってきて表示するのに必要な基本的な流れは①~⑤である
const renderWorks = (json) => {//シートごとに使い分ける
    const works = json.records;

    works.forEach(work => {//forEachで各スタジオをグルグル回してる　配列が12個だとちょうどいいのに13個あるので、最後の要素を取ってあげればいい

        //シート１枚目
        if (work['title-ja'] !== '') {
            const studioDiv = document.createElement('div');

            const aworkFig = document.createElement("figure");
            aworkFig.className = 'a-work';

            const workImg = document.createElement("img");
            workImg.className = 'work-img';
            workImg.src = work['img'];
            workImg.alt = work['title-ja'];


            const workText = document.createElement("figcaption");

            const workTitle = document.createElement("h3");
            workTitle.textContent = work['title-ja'];

            const workCaption = document.createElement("p");
            workCaption.textContent = work['caption-ja'];

            workText.appendChild(workTitle);
            workText.appendChild(workCaption);

            aworkFig.appendChild(workImg);
            aworkFig.appendChild(workText);

            document.getElementById('works_container').appendChild(aworkFig);
        }
    });

}



const getData = async () => {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            let jsonResponse = await response.json();
            renderWorks(jsonResponse);
        }
    }
    catch (error) {
        console.log(error);
    }
}

getData();



