window.addEventListener('DOMContentLoaded', function() {

    let overlay = document.querySelector('.overlay'),
        mainBlock = document.querySelector('.main'),
        customBlock = document.querySelector('.custom'),
        customInfo = document.querySelector('.custom-info'),
        customChar = document.querySelector('.custom-char'),
        customStyle = document.querySelector('.custom-style');
    modal();

    function modal() {
        // модальное окно
        let popupBtn = document.getElementById('popup-btn');        

        // при клике на кнопке "Создать"
        popupBtn.addEventListener('click', function() {
            // скрываем главный экран и модальное окно
            overlay.style.display = 'none';
            mainBlock.style.display = 'none';
            // показываем экран создания кандидата
            customBlock.style.display = 'flex';
            customInfo.style.display = 'block';
            customChar.style.display = 'block';
            customStyle.style.display = 'block';
        });
    }

    // создание кандидата
    let male = document.getElementById('male'),
        female = document.getElementById('female'),
        personSkin = document.getElementById('person-skin'),
        personHair = document.getElementById('person-hair'),
        personClothes = document.getElementById('person-clothes');

    // при выборе женского пола
    female.addEventListener('click', () => {
        changeSkin(skinIndex);
        changeHair(hairIndex);
        changeClothes(clothesIndex);
    });
    // при выборе мужскогоя пола
    male.addEventListener('click', () => {
        changeSkin(skinIndex);
        changeHair(hairIndex);
        changeClothes(clothesIndex);
    }); 
    
    // выбор цвета кожи
    let skinIndex = 1,
        skinBlock = document.querySelector('.skin'),
        skins = document.getElementsByClassName('skin-color'),
        prevSkin = skinBlock.querySelector('.prev'),
        nextSkin = skinBlock.querySelector('.next');

        personSkin.style.backgroundImage = `url(../img/skin/skin-1.png)`;
        
        function changeSkin(index) {

            if(index > skins.length) {
                skinIndex = 1;
            }

            if(index < 1) {
                skinIndex = skins.length;
            }

            for(let i = 0; i < skins.length; i++) {
                skins[i].style.display = 'none';
            }

            skins[skinIndex - 1].style.display = 'block';   
            
            if(female.checked == true) {
                personSkin.style.backgroundImage = `url(../img/skin/skin-${skinIndex + 3}.png)`;
            } else {
                personSkin.style.backgroundImage = `url(../img/skin/skin-${skinIndex}.png)`;
            }
                   
        }
        
        function moveColorSkin(n) {
            changeSkin(skinIndex += n);
        }

        prevSkin.addEventListener('click', () => {
            moveColorSkin(-1);
        });

        nextSkin.addEventListener('click', () => {
            moveColorSkin(1);
        });


    // выбор прически
    let hairIndex = 1,
        hairBlock = document.querySelector('.hair'),
        hair = document.getElementsByClassName('hair-style'),
        prevHair = hairBlock.querySelector('.prev'),
        nextHair = hairBlock.querySelector('.next');

        personHair.style.backgroundImage = `url(../img/hair/construct/hair-1.png)`;

        function changeHair(index) {

            if(female.checked == true) {
                if(index > 6) {
                    hairIndex = 4;
                }
    
                if(index < 4) {
                    hairIndex = 6;
                }
            } else {
                if(index > 3) {
                    hairIndex = 1;
                }

                if(index < 1) {
                    hairIndex = 3;
                }
            }

            for(let i = 0; i < hair.length; i++) {
                hair[i].style.display = 'none';
            }

            hair[hairIndex - 1].style.display = 'block';
            personHair.style.backgroundImage = `url(../img/hair/construct/hair-${hairIndex}.png)`;
                   
        }
        
        function moveStyleHair(n) {
            changeHair(hairIndex += n);
        }

        prevHair.addEventListener('click', () => {
            moveStyleHair(-1);
        });

        nextHair.addEventListener('click', () => {
            moveStyleHair(1);
        });


        // выбор одежды
        let clothesIndex = 1,
        clothesBlock = document.querySelector('.clothes'),
        clothes = document.getElementsByClassName('clothes-style'),
        prevClothes = clothesBlock.querySelector('.prev'),
        nextClothes = clothesBlock.querySelector('.next');

        personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-1.png)`;

        function changeClothes(index) {

            if(female.checked == true) {
                if(index > 6) {
                    clothesIndex = 4;
                }

                if(index < 4) {
                    clothesIndex = 6;
                }
            } else {
                if(index > 3) {
                    clothesIndex = 1;
                }

                if(index < 1) {
                    clothesIndex = 3;
                }
            }

            for(let i = 0; i < clothes.length; i++) {
                clothes[i].style.display = 'none';
            }

            clothes[clothesIndex - 1].style.display = 'block';
            personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-${clothesIndex}.png)`;
                
        }
        
        function moveStyleClothes(n) {
            changeClothes(clothesIndex += n);
        }

        prevClothes.addEventListener('click', () => {
            moveStyleClothes(-1);
        });

        nextClothes.addEventListener('click', () => {
            moveStyleClothes(1);
        });

    // сохраняем введенные данные
    let name = document.getElementById('name'),
        age = document.getElementById('age'),
        views = document.getElementById('select'),
        textarea = document.getElementById('bio'),
        btnReady = document.getElementById('ready'),
        gender = male.value,
        viewsPersonVal;

    viewsPersonVal = views
                        .options[select.selectedIndex]
                        .value;

    customInfo.addEventListener('change', () => {
        if(female.checked == true) {
            gender = female.value;
        } else {
            gender = male.value;
        }
        viewsPersonVal = views
                        .options[select.selectedIndex]
                        .value;
    });

    btnReady.addEventListener('click', () => {
        mainBlock.style.display = 'block';
        customBlock.style.display = 'none';
        customInfo.style.display = 'none';
        customChar.style.display = 'none';
        customStyle.style.display = 'none';

        // создание карточки кандидата 
        let cards = document.querySelector('.main-cards'),
            progressBar = document.getElementsByClassName('progress-bar'),
            cardItem = document.createElement('div'),
            candidateBlock = document.createElement('div'),
            person = document.createElement('div'),
            result = document.createElement('div'),
            resultCount = document.createElement('div'),
            progress = document.createElement('div'),
            progressBarItem = document.createElement('div');


        cards
            .appendChild(cardItem)
            .classList
            .add('main-cards__item');

        cardItem
            .appendChild(candidateBlock)
            .classList
            .add('candidate-block');

        candidateBlock
            .appendChild(person)
            .classList
            .add('person');

        candidateBlock
            .appendChild(result)
            .classList
            .add('result');

        result
            .appendChild(resultCount)
            .classList
            .add('result-count');

        result
            .appendChild(progress)
            .classList
            .add('progress');

        progress
            .appendChild(progressBarItem)
            .classList
            .add('progress-bar');

        progressBar[0]
            .classList
            .remove('progress-bar-1');
        progressBar[1]
            .classList
            .remove('progress-bar-2');

        // обнуляем набранные голоса
        let resultNumber = document.getElementsByClassName('result-count');

        for(let i = 0; i < resultNumber.length; i++) {
            resultNumber[i].innerHTML = '0%';
        }

        // создание аватара кандидата
        let skinBgr = document.getElementById('person-skin').style.backgroundImage,
            hairBgr = document.getElementById('person-hair').style.backgroundImage,
            clothesBgr = document.getElementById('person-clothes').style.backgroundImage,
            candidateSkin = document.createElement('div'),
            candidateHair = document.createElement('div'),
            candidateClothes = document.createElement('div'),
            candidateShoes = document.createElement('div');

        person
            .appendChild(candidateSkin)
            .classList
            .add('person-skin');

        candidateSkin.style.backgroundImage = skinBgr;    
        person
            .appendChild(candidateHair)
            .classList
            .add('person-hair');

        candidateHair.style.backgroundImage = hairBgr;
    
        person
            .appendChild(candidateClothes)
            .classList
            .add('person-clothes');

        candidateClothes.style.backgroundImage = clothesBgr;

        person
            .appendChild(candidateShoes)
            .classList
            .add('person-shoes');

        candidateShoes.style.backgroundImage = 'url(../img/clothes/construct/shoes.png)';

        // подставляем данные в карточку
        let candidateName = document.createElement('div'),
            candidateAge = document.createElement('div'),
            genderTitle = document.createElement('div'),
            genderPerson = document.createElement('div'),
            viewsTitle = document.createElement('div'),
            candidateViews = document.createElement('div'),
            bioTitle = document.createElement('div'),
            candidateBio = document.createElement('div');

        cardItem
            .appendChild(candidateName)
            .classList
            .add('name');
        candidateName.innerText = name.value;

        cardItem
            .appendChild(candidateAge)
            .classList
            .add('age');
        candidateAge.innerText = `${age.value} лет`;

        cardItem
            .appendChild(genderTitle)
            .classList
            .add('title');
        genderTitle.innerHTML = 'Пол:';

        cardItem
            .appendChild(genderPerson)
            .classList
            .add('sex');
            genderPerson.innerText = gender;
        
        cardItem
            .appendChild(viewsTitle)
            .classList
            .add('title');
        viewsTitle.innerHTML = 'Полит. взгляды:';

        cardItem
            .appendChild(candidateViews)
            .classList
            .add('views');
        candidateViews.innerText = viewsPersonVal;

        cardItem
            .appendChild(bioTitle)
            .classList
            .add('title');
        bioTitle.innerHTML = 'Биография';
        
        cardItem
            .appendChild(candidateBio)
            .classList
            .add('bio');
        candidateBio.innerHTML = textarea.value;
    
    });

    // сброс результатов
    let resetBtn = document.getElementById('reset');

    resetBtn.addEventListener('click', () => {
        let card = document.getElementsByClassName('main-cards__item')[2],
            cardsBlock = document.querySelector('.main-cards');

        cardsBlock.removeChild(card);
        // скрываем главный экран и модальное окно
        overlay.style.display = 'none';
        mainBlock.style.display = 'none';
        // показываем экран создания кандидата
        customBlock.style.display = 'flex';
        customInfo.style.display = 'block';
        customChar.style.display = 'block';
        customStyle.style.display = 'block';
    });
    
    // проведение честного голосования
    let votingBtn = document.getElementById('voting');

    votingBtn.addEventListener('click', () => {
        getRandomResult(1, 100);
        style();
    });
    function getRandomResult(min, max) {
        let firstNum = Math.ceil(Math.random() * (max - min)) + min,
            secondNum = Math.ceil((max - firstNum) / 2),
            thirdNum = Math.ceil(max - (firstNum + secondNum)),
            resultArray = [firstNum, secondNum, thirdNum];

        let cardsCandidate = document.getElementsByClassName('result-count');
            
        for(let i = 0; i < cardsCandidate.length; i++) {  
            cardsCandidate[i].innerHTML = `${resultArray[i]} %`;
        } 

    }

    // вмешаться в выборы
    let crimeBtn = document.getElementById('crime');
    crimeBtn.addEventListener('click', () => {
    
        let n = document.getElementsByClassName('result-count');

        let firstNum = parseInt(n[0].textContent),
            secondNum = parseInt(n[1].textContent),
            thirdNum = parseInt(n[2].textContent);
            

            if(firstNum > secondNum && firstNum > 25) {
                firstNum = firstNum - 25;
                thirdNum = thirdNum + 25;
            } else if(secondNum > firstNum && secondNum > 25) {
                secondNum = secondNum - 25;
                thirdNum = thirdNum + 25;
            }

        let cardsCandidate = document.getElementsByClassName('result-count'),
        resultArray = [firstNum, secondNum, thirdNum];

            
        for(let i = 0; i < cardsCandidate.length; i++) {  
            cardsCandidate[i].innerHTML = `${resultArray[i]}%`;
        } 
        style();
    });

    function style() {
        let resultNumber = document.getElementsByClassName('result-count'),
        bar = document.getElementsByClassName('progress-bar');

        for(let i = 0; i < bar.length; i++) {
            let classDiv = `progress-bar-${i + 1}`;
           bar[i].classList.add(classDiv);
         
        }
        let first = document.querySelector('.progress-bar-1');
            first.style.height = `${parseInt(resultNumber[0].textContent)}%`;
        let second = document.querySelector('.progress-bar-2');
        second.style.height = `${parseInt(resultNumber[1].textContent)}%`;

        let third = document.querySelector('.progress-bar-3');
        third.style.height = `${parseInt(resultNumber[2].textContent)}%`;
    }


});
