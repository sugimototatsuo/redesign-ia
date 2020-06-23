const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';

const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'group4-book';
//const sheet2 = "Faculty";
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
//const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;


const renderJson = (json) => {
    const books = json.records;
    books.pop();
    books.forEach(books => {
        const bookDiv = document.createElement('div');
        const bookTitle = document.createElement("span");
        const bookLink = document.createElement("a");
        //const nomalStudioImage = document.createElement("img");

        //題名、リンクのクラス名
        bookTitle.className = 'book-title';
        bookLink.className = 'book-link';
        bookTitle.textContent = "題名：" + books['book-title'];
        bookLink.href = books['book-link1'];
        bookLink.textContent = "購入はこちら:" + books['book-link1'];
        //nomalStudioLink.textContent = studios['name-ja'];
        //nomalStudioImage.src = studios['photo1'];

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookLink);
        document.getElementById('book').appendChild(bookDiv);
        //englishStudioDiv.appendChild(englishStudioTitle);
    });

    document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}



const getData = async () => {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            let jsonResponse = await response.json();
            renderJson(jsonResponse);
        }


    }
    catch (error) {
        console.log(error);
    }
}

getData();
