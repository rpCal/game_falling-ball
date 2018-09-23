

const prepareApp = () => {
    const isMobile = () => {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
        return check;
    };

    
    let gameWidth = 380;
    let gameHeight = 600;

    if(isMobile()){
        gameWidth = window.innerWidth;
        gameHeight = window.innerHeight;
    }

    
    const kurakWidth = gameWidth / 4; 
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
    kurkaImage.src = "./images/chicken.png";
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


    let isTouchStarted = false;
    let initPointX:number = null;
    let diffTouchPointX:number = null;

    const handleTouchStart = (evt:TouchEvent) => {
        isTouchStarted = true;
        initPointX = evt.changedTouches[0].clientX
    }
    const handleTouchEnd = (evt:TouchEvent) => {
        isTouchStarted = false;
        initPointX = null;
    }
    const handleTouchMove = (evt:TouchEvent) => {
        if(isTouchStarted){
            diffTouchPointX = evt.changedTouches[0].clientX - initPointX;
        }
    }
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchend", handleTouchEnd, false);
    document.addEventListener("touchcancel", handleTouchEnd, false);
    document.addEventListener("touchmove", handleTouchMove, false);


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
    let przyspieszenieSkretuDefault = 1;
    let przyspieszenieSkretu = 1;
    let maxPredkoscSkretu = 6;
    let predkoscSkretu = 0;
    let maxPredkosc = 10;
    let isGameOver = false;
    let chickenAnimationFrameCounter = 0;
    let chickenAnimationFrameIndex = 0;
    let chickenAnimationFramesUrl = [
        './images/chicken.png',
        './images/chicken_fly.png'
    ]
    let chickenAnimationTime = ONE_SECOUND / 2;

    const getRandomInt = (min:number, max:number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    type Bounds = {
        top: number,
        left: number,
        right: number,
        bottom: number
    }

    const resetGame = () => {
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

    gameOverInfo.addEventListener('click', resetGame);
    
    const intersectRect = (r1:Bounds, r2:Bounds) => {
        return !(r2.left > r1.right || 
                 r2.right < r1.left || 
                 r2.top > r1.bottom ||
                 r2.bottom < r1.top);
    }

    const updateGame = () => {
        
        if(isGameOver){
            if(isEnterKeyPressed){
                resetGame();
            }
            return false;
        }
        
        licznikGenerowaniaGrzedy = licznikGenerowaniaGrzedy + FIXED_DELTA_TIME
        czasSpadania = czasSpadania + FIXED_DELTA_TIME;
        
        aktualnaPredkoscSpadania = aktualnaPredkoscSpadania + przyspieszeniePredkosciSpadania;
        if(aktualnaPredkoscSpadania > maxPredkosc){
            aktualnaPredkoscSpadania = maxPredkosc;
        }

        chickenAnimationFrameCounter = chickenAnimationFrameCounter + FIXED_DELTA_TIME;
        if(chickenAnimationFrameCounter > chickenAnimationTime){
            chickenAnimationFrameCounter = 0;
            chickenAnimationFrameIndex = (chickenAnimationFrameIndex + 1) % chickenAnimationFramesUrl.length;
            kurkaImage.src = chickenAnimationFramesUrl[chickenAnimationFrameIndex];
        }

        let kierunekPrzyspieszenia = 0;

        if(isLeftKeyPressed){
            kierunekPrzyspieszenia = 1;
        }
        if(isRightKeyPressed){
            kierunekPrzyspieszenia = -1;
        }

        if(isTouchStarted){
            let buffor = 5;
            if(diffTouchPointX > buffor){
                kierunekPrzyspieszenia = -1;
            }else if(diffTouchPointX < -buffor){
                kierunekPrzyspieszenia = 1;
            }else{
                kierunekPrzyspieszenia = 0;
            }   
        }

        if((!isLeftKeyPressed && !isRightKeyPressed) && !isTouchStarted){
            predkoscSkretu = 0;
        }

        if(isTouchStarted){
            let multiplier = Math.min(Math.abs(diffTouchPointX) * 0.01, 1);
            predkoscSkretu = maxPredkoscSkretu * multiplier * kierunekPrzyspieszenia;
        }else{
            predkoscSkretu = predkoscSkretu + (przyspieszenieSkretu * kierunekPrzyspieszenia);
        }
        
        let rotate = predkoscSkretu * 2 * -1;
        kurkaImage.style.transform = `rotate(${rotate}deg)`;
        
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
            
            if(isRightKeyPressed || isLeftKeyPressed || isTouchStarted){
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

                kurkaImage.src = './images/chicken_end.png';
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