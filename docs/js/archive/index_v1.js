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
            const studioTitleJa = document.createElement("span");//①studioTitle　という変数でもって、span要素の作成
            studioTitleJa.className = 'studio-title';//②span要素？にクラスの名前をつけてCSSで指定できるようにしている
            studioTitleJa.textContent = studio['name-ja'];//③[データシート上のkey]

            const studioTitleEn = document.createElement("span");//新たにspan要素の作成　-jaと同上  
            studioTitleEn.className = 'studio-title';
            studioTitleEn.textContent = studio['name-en'];

            const studioCoreJa = document.createElement("span");
            studioCoreJa.className = 'studio-core';
            studioCoreJa.textContent = studio['core-ja'];

            const studioCoreEn = document.createElement("span");
            studioCoreEn.className = 'studio-core';
            studioCoreEn.textContent = studio['core-en'];

            const facultyJa = document.createElement("span");
            facultyJa.className = 'studio-faculty';
            facultyJa.textContent = studio['faculty-ja'];

            const facultyEn = document.createElement("span");
            facultyEn.className = 'studio-faculty';
            facultyEn.textContent = studio['faculty-en'];

            const facultyTitleJa = document.createElement("span");
            facultyTitleJa.className = 'studio-facultyTitle';
            facultyTitleJa.textContent = studio['facultyTitle-ja'];

            const facultyTitleEn = document.createElement("span");
            facultyTitleEn.className = 'studio-facultyTitle';
            facultyTitleEn.textContent = studio['facultyTitle-en'];

            const descriptionJa = document.createElement("p");
            descriptionJa.className = 'studio-description';
            descriptionJa.textContent = studio['description-ja'];

            const descriptionEn = document.createElement("p");
            descriptionEn.className = 'studio-description';
            descriptionEn.textContent = studio['description-en'];


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


            //imgタグはpタグで囲むべきらしいので、★で作っておいたpの子要素として追加する
            photoP.appendChild(photo1);
            photoP.appendChild(photo2);
            photoP.appendChild(photo3);
            photoP.appendChild(photo4);
            photoP.appendChild(photo5);

            studioDiv.appendChild(studioTitleJa);//④
            studioDiv.appendChild(studioTitleEn);
            studioDiv.appendChild(studioCoreJa);
            studioDiv.appendChild(studioCoreEn);
            studioDiv.appendChild(facultyJa);
            studioDiv.appendChild(facultyEn);
            studioDiv.appendChild(facultyTitleJa);
            studioDiv.appendChild(facultyTitleEn);
            studioDiv.appendChild(descriptionJa);
            studioDiv.appendChild(descriptionEn);
            studioDiv.appendChild(photoP);


            document.getElementById('studios').appendChild(studioDiv);//⑤HTML上のstudiosというidがついたdivにここまでの作業で作ったsudioDivを追加
        }
    });

    document.getElementById('result-studio').textContent = JSON.stringify(json, null, 2);//JavaScript のオブジェクトや値を JSON 文字列に変換させて、HTML上のresultというidがついたdivに付与？する。最後の引数は上限が10のスペーシング 変わってんのかわからない
}


const renderFaculty = (json) => {
    //シート２枚目
    const faculties = json.records;
    faculties.forEach(faculty => {

        if (faculty['f-faculty-ja'] !== '') {
            const facultyDiv = document.createElement('div');

            const facultyNameJa = document.createElement("span");
            facultyNameJa.className = 'faculty-name';
            facultyNameJa.textContent = faculty['f-faculty-ja'];
            facultyDiv.appendChild(facultyNameJa);

            const facultyNameEn = document.createElement("span");
            facultyNameEn.className = 'faculty-name';
            facultyNameEn.textContent = faculty['f-faculty-en'];
            facultyDiv.appendChild(facultyNameEn);

            const facultyTitleJa = document.createElement("span");
            facultyTitleJa.className = 'faculty-title';
            facultyTitleJa.textContent = faculty['f-faculty-title-ja'];
            facultyDiv.appendChild(facultyTitleJa);

            const facultyTitleEn = document.createElement("span");
            facultyTitleEn.className = 'faculty-title';
            facultyTitleEn.textContent = faculty['f-faculty-title-en'];
            facultyDiv.appendChild(facultyTitleEn);

            const studioJa = document.createElement("span");//この辺はローカル関数なのでstudioとかとかぶってもOK 
            studioJa.className = 'faculty-studio';
            studioJa.textContent = faculty['f-studio-ja'];
            facultyDiv.appendChild(studioJa);

            const studioEn = document.createElement("span");
            studioEn.className = 'faculty-studio';
            studioEn.textContent = faculty['f-studio-en'];
            facultyDiv.appendChild(studioEn);

            const majorJa = document.createElement("span");
            majorJa.className = 'faculty-major';
            majorJa.textContent = faculty['major-ja'];
            facultyDiv.appendChild(majorJa);

            const majorEn = document.createElement("span");
            majorEn.className = 'faculty-major';
            majorEn.textContent = faculty['major-en'];
            facultyDiv.appendChild(majorEn);


            if (faculty['f-link'] !== '') {
                const linkP = document.createElement('p');
                const fLink = document.createElement('a');
                fLink.className = 'faculty-link';

                fLink.textContent = faculty['f-faculty-ja'] + "のサイトです";//リンクに何かしらテキストがないと見えない
                fLink.href = faculty['f-link'];

                linkP.appendChild(fLink);
                facultyDiv.appendChild(linkP);
            }

            const photoP = document.createElement('p');//★
            const photo = document.createElement("img");
            photo.className = 'faculty-photo';
            photo.src = faculty['faculty-photo'];
            photo.alt = "";
            photoP.appendChild(photo);
            facultyDiv.appendChild(photoP);


            document.getElementById('faculties').appendChild(facultyDiv);

        }
    });
    document.getElementById('result-faculty').textContent = JSON.stringify(json, null, 2);//JavaScript のオブジェクトや値を JSON 文字列に変換させて、HTML上のresultというidがついたdivに付与？する。最後の引数は上限が10のスペーシング 変わってんのかわからない
}


const renderLink = (json) => {
    //シート３枚目
    const links = json.records;
    links.forEach(link => {

        if (link['name-ja'] !== '') {

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

            const photoP = document.createElement('p');//★
            const photo = document.createElement("img");
            photo.className = 'l-photo';
            photo.src = link['photo'];
            photo.alt = "";
            photoP.appendChild(photo);
            linkDiv.appendChild(photoP);


            const linkP = document.createElement('p');
            const lLink = document.createElement('a');//ここでうっかりlinkっていう変数を作っちゃうとかぶるのでうまくいかない
            lLink.className = 'l-link';
            lLink.textContent = link['name-ja'] + "のサイトです";//リンクに何かしらテキストがないと見えない
            lLink.href = link['link'];
            linkP.appendChild(lLink);
            linkDiv.appendChild(linkP);



            const linkPhotoP = document.createElement('p');
            const linkOnPhoto = document.createElement('a');
            const exhibiPhoto = document.createElement("img");
            linkOnPhoto.className = 'l-link';
            exhibiPhoto.className = 'l-photo';
            //linkPhoto.textContent = link['name-ja'] + "のサイトです";//リンクに何かしらテキストがないと見えない
            exhibiPhoto.src = link['photo'];
            exhibiPhoto.alt = "altだよ";
            linkOnPhoto.href = link['link'];
            linkOnPhoto.appendChild(exhibiPhoto);
            linkPhotoP.appendChild(linkOnPhoto);
            document.getElementById('sotsutenLinkDiv').appendChild(linkPhotoP, exhibiPhoto);


            document.getElementById('links').appendChild(linkDiv);

        }

    });

    document.getElementById('result-link').textContent = JSON.stringify(json, null, 2);//JavaScript のオブジェクトや値を JSON 文字列に変換させて、HTML上のresultというidがついたdivに付与？する。最後の引数は上限が10のスペーシング 変わってんのかわからない
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