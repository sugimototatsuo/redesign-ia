document.getElementById("button").onclick = function () {
    var langBotton = document.getElementById("button");
    var langBottonClass = langBotton.getAttribute("class");
    //var langBottonWork = document.getElementById("buttonWork");
    //var langBottonWorkClass = langBotton.getAttribute("class");

    if (langBottonClass == "open") {
        langBotton.classList.remove('open');
        langBotton.classList.add('close');
        //langBottonWork.classList.remove('open');
        //langBottonWork.classList.add('close');

        document.getElementById('nomalButton').style.display = "none";
        document.getElementById('englishButton').style.display = "block";
        //document.getElementById('nomalButtonWork').style.display = "none";
        //document.getElementById('englishButtonWork').style.display = "block";


        document.getElementById('nomalTitle').style.display = "none";
        document.getElementById('englishTitle').style.display = "block";

        document.getElementById('nomalReturn').style.display = "none";
        document.getElementById('englishReturn').style.display = "block";


    } else if (langBottonClass == "close") {
        langBotton.classList.remove('close');
        langBotton.classList.add('open');
        //langBottonWork.classList.remove('close');
        //langBottonWork.classList.add('open');
        document.getElementById('nomalButton').style.display = "block";
        document.getElementById('englishButton').style.display = "none";


        document.getElementById('nomalTitle').style.display = "block";
        document.getElementById('englishTitle').style.display = "none";

        document.getElementById('nomalReturn').style.display = "block";
        document.getElementById('englishReturn').style.display = "none";

    }

};
