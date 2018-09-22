
const prepareApp = () => {
    
    const gameWidth = 380;
    const gameHeight = 600;
    const kurakWidth = gameWidth / 7; 
    const kurakHeight =  kurakWidth; //kurakWidth * (16 / 9);
    let kurakTop = ((1/4) * gameHeight) - (kurakHeight / 2); 
    let kurakLeft = ((1/2) * gameWidth) - (kurakWidth / 2); 
    
    let gameWrapper = document.createElement('div');
    gameWrapper.style.height = `${gameHeight}px`;
    gameWrapper.style.width = `${gameWidth}px`;
    gameWrapper.style.position = "relative";
    gameWrapper.style.border = "5px solid #eee";
    gameWrapper.style.overflow = "hidden";

    let kurak:HTMLElement = document.createElement('div');
    kurak.style.width = `${kurakWidth}px`;
    kurak.style.height = `${kurakHeight}px`;
    kurak.style.position = "absolute";
    kurak.style.top = `${kurakTop}px`;
    kurak.style.left = `${kurakLeft}px`;

    let kurkaImage:HTMLImageElement = document.createElement('img');
    kurkaImage.src = "/images/chicken.png";
    kurkaImage.style.width = "100%"
    kurkaImage.style.height = "auto";
    kurak.appendChild(kurkaImage);

    let gameOverInfo:HTMLElement = document.createElement('div');
    gameOverInfo.innerHTML = "KONIEC MARZEŃ!"
    gameOverInfo.style.width = `60%`;
    gameOverInfo.style.height = `70px`;
    gameOverInfo.style.position = "absolute";
    gameOverInfo.style.top = `${gameHeight / 2  - 100/2}px`;
    gameOverInfo.style.left = `20%`;
    gameOverInfo.style.borderRadius = '150px'
    gameOverInfo.style.fontSize = "20px"
    gameOverInfo.style.textAlign = 'center'
    gameOverInfo.style.background = "#cba"
    gameOverInfo.style.color = "#fff"
    gameOverInfo.style.lineHeight = "70px"
    gameOverInfo.style.fontFamily = "cursive";
    gameOverInfo.style.display = `none`;
    gameWrapper.appendChild(gameOverInfo)

    let grzadkiWrapper = document.createElement('div');

    let uiWrapper = document.createElement('div');
    uiWrapper.style.position = "absolute";
    uiWrapper.style.top = "0px"
    uiWrapper.style.left = "0px"
    uiWrapper.style.width = "100%;"
    uiWrapper.style.height = "50px"

    let uiCzasTrwania = document.createElement('div');
    uiCzasTrwania.innerHTML = "0s";
    uiCzasTrwania.style.position = "absolute";
    uiCzasTrwania.style.top = "0px"
    uiCzasTrwania.style.left = "0px"
    uiCzasTrwania.style.width = "80px";
    uiCzasTrwania.style.border = "1px solid #eee";
    uiCzasTrwania.style.fontSize = "25px"
    uiCzasTrwania.style.lineHeight = "50px"
    uiCzasTrwania.style.color = "#bbb";
    uiCzasTrwania.style.textAlign = "center"
    uiWrapper.appendChild(uiCzasTrwania)

    let uiPredkoscSpadania = document.createElement('div');
    uiPredkoscSpadania.innerHTML = "0 m/s";
    uiPredkoscSpadania.style.position = "absolute";
    uiPredkoscSpadania.style.top = "0px"
    uiPredkoscSpadania.style.left = "80px"
    uiPredkoscSpadania.style.width = "120px";
    uiPredkoscSpadania.style.border = "1px solid #eee";
    uiPredkoscSpadania.style.fontSize = "25px"
    uiPredkoscSpadania.style.lineHeight = "50px"
    uiPredkoscSpadania.style.color = "#bbb";
    uiPredkoscSpadania.style.textAlign = "center"
    uiWrapper.appendChild(uiPredkoscSpadania)

    let uiMinietychGrzad = document.createElement('div');
    uiMinietychGrzad.innerHTML = "0x";
    uiMinietychGrzad.style.position = "absolute";
    uiMinietychGrzad.style.top = "0px"
    uiMinietychGrzad.style.left = "200px"
    uiMinietychGrzad.style.width = "80px";
    uiMinietychGrzad.style.border = "1px solid #eee";
    uiMinietychGrzad.style.fontSize = "25px"
    uiMinietychGrzad.style.lineHeight = "50px"
    uiMinietychGrzad.style.color = "#bbb";
    uiMinietychGrzad.style.textAlign = "center"
    uiWrapper.appendChild(uiMinietychGrzad)

    type Grzeda = {
        isCounted: boolean,
        element: HTMLElement,
        leftBorder: HTMLElement,
        rightBorder: HTMLElement
    }
    const grzedaWrapperGenerator = (srodekDzuiryNaSrodkuEkranu:number, szerokoscDziuryWGrzedzie:number) => {
        let grzadkiWrapperHeight = 10;
        let grzedaWidth = gameWidth * 10;
        let grzedaCenter = grzedaWidth / 2;  
        let grzedaWrapper = document.createElement('div');
        grzedaWrapper.style.position = "absolute";
        grzedaWrapper.style.top = `${gameHeight + grzadkiWrapperHeight - 5 }px`
        grzedaWrapper.style.left = `${-grzedaCenter + (gameWidth/2)}px`
        grzedaWrapper.style.width = `${grzedaWidth}px`;
        grzedaWrapper.style.height = "10px";
        grzedaWrapper.style.overflow = "hidden";


        let grzedaLeftBorderWrapper = document.createElement('div');
        grzedaLeftBorderWrapper.style.position = "absolute";
        grzedaLeftBorderWrapper.style.top = "0px"
        grzedaLeftBorderWrapper.style.left = "0px"
        grzedaLeftBorderWrapper.style.width = `${grzedaCenter + srodekDzuiryNaSrodkuEkranu - (szerokoscDziuryWGrzedzie/2)}px`;
        grzedaLeftBorderWrapper.style.height = "100%";
        grzedaLeftBorderWrapper.style.background = "#cba"
    
        let grzedaRightBorderWrapper = document.createElement('div');
        grzedaRightBorderWrapper.style.position = "absolute";
        grzedaRightBorderWrapper.style.top = "0px"
        grzedaRightBorderWrapper.style.left = `${grzedaCenter + srodekDzuiryNaSrodkuEkranu + (szerokoscDziuryWGrzedzie/2)}px`;
        grzedaRightBorderWrapper.style.width = `${grzedaCenter - srodekDzuiryNaSrodkuEkranu - (szerokoscDziuryWGrzedzie/2)}px`;
        grzedaRightBorderWrapper.style.height = "100%";
        grzedaRightBorderWrapper.style.background = "#cba"
    
        grzedaWrapper.appendChild(grzedaLeftBorderWrapper)
        grzedaWrapper.appendChild(grzedaRightBorderWrapper)

        return {
            isCounted: false,
            element: grzedaWrapper,
            leftBorder: grzedaLeftBorderWrapper,
            rightBorder: grzedaRightBorderWrapper
        };
    }


    gameWrapper.appendChild(kurak);
    gameWrapper.appendChild(grzadkiWrapper);
    gameWrapper.appendChild(uiWrapper);

    const body:HTMLElement = document.querySelector('body');

    if(body === null){
        throw new Error('Twoja przegladarka ssie pałe! Wracaj do szkoły!')
    }

    body.appendChild(gameWrapper);
    
    
    let isLeftKeyPressed = false;
    let isRightKeyPressed = false;
    let isEnterKeyPressed = false;
    
    document.addEventListener('keydown', (e) => {
        if(e.keyCode == 37){
            isLeftKeyPressed = true;
        }
        if(e.keyCode == 39){
            isRightKeyPressed = true;
        }
        if(e.keyCode == 13){
            isEnterKeyPressed = true;
        }
    })
    
    document.addEventListener('keyup', (e) => {
        if(e.keyCode == 37){
            isLeftKeyPressed = false;
        }
        if(e.keyCode == 39){
            isRightKeyPressed = false;
        }
        if(e.keyCode == 13){
            isEnterKeyPressed = false;
        }
    })

    const ONE_SECOUND = 1000;
    const INTERWAL_GENEROWANIA_GRZAD = (ONE_SECOUND * 2.5);
    const FIXED_DELTA_TIME = 16;
    let listaGrzed:Grzeda[] = [];
    let liczbaMinietychGrzad = 0;
    let czasSpadania = 0;
    let licznikGenerowaniaGrzedy = INTERWAL_GENEROWANIA_GRZAD;
    let poczatkowPredkoscSpadania = 1.4;
    let przyspieszeniePredkosciSpadania = 0.001;
    let aktualnaPredkoscSpadania = poczatkowPredkoscSpadania;
    let przyspieszenieSkretu = 1;
    let maxPredkoscSkretu = 6;
    let predkoscSkretu = 0;
    let maxPredkosc = 10;
    let isGameOver = false;

    const getRandomInt = (min:number, max:number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    type Bounds = {
        top: number,
        left: number,
        right: number,
        bottom: number
    }
    
    const intersectRect = (r1:Bounds, r2:Bounds) => {
        return !(r2.left > r1.right || 
                 r2.right < r1.left || 
                 r2.top > r1.bottom ||
                 r2.bottom < r1.top);
    }

    const updateGame = () => {
        
        if(isGameOver){
            if(isEnterKeyPressed){
                isGameOver = false;
                liczbaMinietychGrzad = 0;
                aktualnaPredkoscSpadania = poczatkowPredkoscSpadania;
                czasSpadania = 0;
                licznikGenerowaniaGrzedy = INTERWAL_GENEROWANIA_GRZAD;
                for(let i = listaGrzed.length -1; i >= 0; i--){
                    listaGrzed[i].element.remove();
                    listaGrzed.splice(i, 1);
                }
                gameOverInfo.style.display = "none"
            }
            return false;
        }
        licznikGenerowaniaGrzedy = licznikGenerowaniaGrzedy + FIXED_DELTA_TIME
        czasSpadania = czasSpadania + FIXED_DELTA_TIME;
        aktualnaPredkoscSpadania = aktualnaPredkoscSpadania + przyspieszeniePredkosciSpadania;
        if(aktualnaPredkoscSpadania > maxPredkosc){
            aktualnaPredkoscSpadania = maxPredkosc;
        }

        let kierunekPrzyspieszenia = 0;

        if(isLeftKeyPressed){
            kierunekPrzyspieszenia = -1;
        }
        if(isRightKeyPressed){
            kierunekPrzyspieszenia = 1;
        }

        if(!isLeftKeyPressed && !isRightKeyPressed){
            predkoscSkretu = 0;
        }

        predkoscSkretu = predkoscSkretu + (przyspieszenieSkretu * kierunekPrzyspieszenia);
        
        if(predkoscSkretu >= maxPredkoscSkretu){
            predkoscSkretu = maxPredkoscSkretu;
        }

        if(predkoscSkretu <= -maxPredkoscSkretu){
            predkoscSkretu = -maxPredkoscSkretu;
        }


        let czyWygenerowac = licznikGenerowaniaGrzedy > (INTERWAL_GENEROWANIA_GRZAD / aktualnaPredkoscSpadania * (Math.random()*0.2 + 1.9));
        if(czyWygenerowac){
            let szerokoscDziury = getRandomInt(kurakWidth + 10, gameWidth / 2);
            let odstepOdKrawedzi = 15;
            let maxPrzesuniecie = (gameWidth / 2) - (szerokoscDziury / 2) - (odstepOdKrawedzi / 2);
            let przesuniecie = getRandomInt(-maxPrzesuniecie, maxPrzesuniecie);
            let nowaGrzeda = grzedaWrapperGenerator(przesuniecie, szerokoscDziury);
            listaGrzed.push(nowaGrzeda);
            grzadkiWrapper.appendChild(nowaGrzeda.element);
            licznikGenerowaniaGrzedy = 0;
        }

        for(let i = listaGrzed.length -1; i >= 0; i--){
            let grzeda = listaGrzed[i]
            let left = parseInt(grzeda.element.style.left);
            let top = parseInt(grzeda.element.style.top);
            let newTop = top - aktualnaPredkoscSpadania;
            let height = parseInt(grzeda.element.style.height);
            grzeda.element.style.top = `${newTop}px`;
            
            if(grzeda.isCounted === false && newTop < kurakTop){
                liczbaMinietychGrzad = liczbaMinietychGrzad + 1;
                grzeda.isCounted = true;
            }
            
            if(isRightKeyPressed || isLeftKeyPressed){
                let newLeft = left + predkoscSkretu;
                grzeda.element.style.left = `${newLeft}px`;
            }

            let leftBorderWidth = parseInt(grzeda.leftBorder.style.width)
            let r1 = { 
                top: top,
                left: left,
                right: left + leftBorderWidth,
                bottom: top + height
            } as Bounds
            let rightBorderWidth = parseInt(grzeda.rightBorder.style.width)
            let rightBorderLeft = parseInt(grzeda.rightBorder.style.left)
            let r2 = { 
                top: top,
                left: left + rightBorderLeft,
                right: rightBorderLeft + rightBorderWidth,
                bottom: top + height
            } as Bounds

            let _kurakLeft = parseInt(kurak.style.left)
            let _kurakTop = parseInt(kurak.style.top) 
            let offsetBounds = 5;
            let r3 = {
                top: _kurakTop + offsetBounds,
                left: _kurakLeft + offsetBounds,
                right: _kurakLeft + parseInt(kurak.style.width) - offsetBounds,
                bottom: _kurakTop + parseInt(kurak.style.height) - offsetBounds
            } as Bounds

            let c1 = intersectRect(r1, r3)
            let c2 = intersectRect(r2, r3)

            if(c1 || c2){
                isGameOver = true;
                gameOverInfo.style.display = "block"
            }
            
            if(newTop + height <= 0){
                listaGrzed[i].element.remove();
                listaGrzed.splice(i, 1);
            }
        }

        uiCzasTrwania.innerHTML = `${(czasSpadania / ONE_SECOUND).toFixed(1)}s`;
        uiPredkoscSpadania.innerHTML = `${aktualnaPredkoscSpadania.toFixed(1)} m/s`
        uiMinietychGrzad.innerHTML = `${liczbaMinietychGrzad}x`;
    }

    let lastUpdateTime = new Date().getTime();
    let diffTime = 0; 
    
    const requestAnimationFrameCallback = () => {
        let currentTime = new Date().getTime(); 
        diffTime = diffTime + (currentTime - lastUpdateTime); 
        while(diffTime > FIXED_DELTA_TIME){
            updateGame();
            diffTime = diffTime - FIXED_DELTA_TIME;
        }
        lastUpdateTime = currentTime;
        window.requestAnimationFrame(requestAnimationFrameCallback);
    }

    requestAnimationFrameCallback();
};


/**


Potrzebujemy 
- kulki
- deska z dziuro


kura na szczycie, 
ona zrzuca jajko
jajko ma skrzyla 
jajko spada  
musi manewrowac na boki aby spasc nizej
na deskach siedza kury

 */

 /**

 @TODO:
- Animacja wejscia
- animacja w lewo w prawo
- animacja smierci 
- highscore 
  */


window.addEventListener("load", prepareApp);