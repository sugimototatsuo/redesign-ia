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

    //studios.pop();//配列の一番最後の要素を取り出すメソッド　ほんとは返り値があって const lastStudio =  studios.pop();とかするべきなんだけど、さいごが空ってわかってるのでOK　ここコメントアウトするとrecordにfacultyだけ反映される…
    studios.forEach(studio => {//forEachで各スタジオをグルグル回してる　配列が12個だとちょうどいいのに13個あるので、最後の要素を取ってあげればいい

        //シート１枚目
        if (studio['name-ja'] !== '') {
            const studioDiv = document.createElement('div');
            //運用的にクラス名は言語問わず共通
            const studioTitleJa = document.createElement("h1");//①studioTitle　という変数でもって、span要素の作成
            studioTitleJa.className = 'studio-title';//②span要素？にクラスの名前をつけてCSSで指定できるようにしている
            studioTitleJa.textContent = studio['name-ja'];//③[データシート上のkey]
            studioDiv.appendChild(studioTitleJa);

            const studioCoreJa = document.createElement("span");
            studioCoreJa.className = 'studio-core';
            studioCoreJa.textContent = studio['core-ja'];
            studioDiv.appendChild(studioCoreJa);

            const facultyJa = document.createElement("span");
            facultyJa.className = 'studio-faculty';
            facultyJa.textContent = studio['faculty-ja'];
            studioDiv.appendChild(facultyJa);


            const facultyTitleJa = document.createElement("span");
            facultyTitleJa.className = 'studio-facultyTitle';
            facultyTitleJa.textContent = studio['faculty-title-ja'];
            studioDiv.appendChild(facultyTitleJa);

            const descriptionJa = document.createElement("p");
            descriptionJa.className = 'studio-description';
            descriptionJa.textContent = studio['description-ja'];
            studioDiv.appendChild(descriptionJa);


            const photoP = document.createElement('p');//★

            const photo1 = document.createElement("img");
            photo1.className = 'studio-photo';
            photo1.src = studio['photo1'];
            photo1.alt = "";

            const photo2 = document.createElement("img");
            photo2.className = 'studio-photo';
            photo2.src = studio['photo2'];
            photo2.alt = "";

            const photo3 = document.createElement("img");
            photo3.className = 'studio-photo';
            photo3.src = studio['photo3'];
            photo3.alt = "";

            const photo4 = document.createElement("img");
            photo4.className = 'studio-photo';
            photo4.src = studio['photo4'];
            photo4.alt = "";

            const photo5 = document.createElement("img");
            photo5.className = 'studio-photo';
            photo5.src = studio['photo5'];
            photo5.alt = "";


            photoP.appendChild(photo1);
            photoP.appendChild(photo2);
            photoP.appendChild(photo3);
            photoP.appendChild(photo4);
            photoP.appendChild(photo5);
            studioDiv.appendChild(photoP);


            if (studio['name-ja'] == 'エディティングスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == '製品・サービスデザインスタジオ') {
                document.getElementById('equip-setvice').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == 'エルゴノミックデザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == 'インタラクティブアートスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == 'インタフェースデザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == 'インテリアデザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == '映像デザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == 'ネットワークデザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == 'ソフトウェアデザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == '空間デザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }
            if (studio['name-ja'] == 'トランスポーテーションデザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
            }

            if (studio['name-ja'] == 'ヴィジュアルコミュニケーションデザインスタジオ') {
                document.getElementById('editing').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
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

