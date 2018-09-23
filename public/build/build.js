/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var prepareApp = function () {\n    var isMobile = function () {\n        var check = false;\n        (function (a) { if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4)))\n            check = true; })(navigator.userAgent || navigator.vendor);\n        return check;\n    };\n    var gameWidth = 380;\n    var gameHeight = 600;\n    if (isMobile()) {\n        gameWidth = window.innerWidth;\n        gameHeight = window.innerHeight;\n    }\n    var kurakWidth = gameWidth / 4;\n    var kurakHeight = kurakWidth; //kurakWidth * (16 / 9);\n    var kurakTop = ((1 / 4) * gameHeight) - (kurakHeight / 2);\n    var kurakLeft = ((1 / 2) * gameWidth) - (kurakWidth / 2);\n    var gameWrapper = document.createElement('div');\n    gameWrapper.style.height = gameHeight + \"px\";\n    gameWrapper.style.width = gameWidth + \"px\";\n    gameWrapper.style.position = \"relative\";\n    gameWrapper.style.border = \"5px solid #eee\";\n    gameWrapper.style.overflow = \"hidden\";\n    var kurak = document.createElement('div');\n    kurak.style.width = kurakWidth + \"px\";\n    kurak.style.height = kurakHeight + \"px\";\n    kurak.style.position = \"absolute\";\n    kurak.style.top = kurakTop + \"px\";\n    kurak.style.left = kurakLeft + \"px\";\n    var kurkaImage = document.createElement('img');\n    kurkaImage.src = \"./images/chicken.png\";\n    kurkaImage.style.width = \"100%\";\n    kurkaImage.style.height = \"auto\";\n    kurak.appendChild(kurkaImage);\n    var gameOverInfo = document.createElement('div');\n    gameOverInfo.innerHTML = \"PONOWNIE\";\n    gameOverInfo.style.width = \"60%\";\n    gameOverInfo.style.height = \"70px\";\n    gameOverInfo.style.position = \"absolute\";\n    gameOverInfo.style.top = gameHeight / 2 - 100 / 2 + \"px\";\n    gameOverInfo.style.left = \"20%\";\n    gameOverInfo.style.borderRadius = '150px';\n    gameOverInfo.style.fontSize = \"20px\";\n    gameOverInfo.style.textAlign = 'center';\n    gameOverInfo.style.background = \"#cba\";\n    gameOverInfo.style.color = \"#fff\";\n    gameOverInfo.style.lineHeight = \"70px\";\n    gameOverInfo.style.fontFamily = \"cursive\";\n    gameOverInfo.style.display = \"none\";\n    gameWrapper.appendChild(gameOverInfo);\n    var grzadkiWrapper = document.createElement('div');\n    var uiWrapper = document.createElement('div');\n    uiWrapper.style.position = \"absolute\";\n    uiWrapper.style.top = \"0px\";\n    uiWrapper.style.left = \"0px\";\n    uiWrapper.style.width = \"100%;\";\n    uiWrapper.style.height = \"50px\";\n    var uiCzasTrwania = document.createElement('div');\n    uiCzasTrwania.innerHTML = \"0s\";\n    uiCzasTrwania.style.position = \"absolute\";\n    uiCzasTrwania.style.top = \"0px\";\n    uiCzasTrwania.style.left = \"0px\";\n    uiCzasTrwania.style.width = \"80px\";\n    uiCzasTrwania.style.border = \"1px solid #eee\";\n    uiCzasTrwania.style.fontSize = \"25px\";\n    uiCzasTrwania.style.lineHeight = \"50px\";\n    uiCzasTrwania.style.color = \"#bbb\";\n    uiCzasTrwania.style.textAlign = \"center\";\n    uiWrapper.appendChild(uiCzasTrwania);\n    var uiPredkoscSpadania = document.createElement('div');\n    uiPredkoscSpadania.innerHTML = \"0 m/s\";\n    uiPredkoscSpadania.style.position = \"absolute\";\n    uiPredkoscSpadania.style.top = \"0px\";\n    uiPredkoscSpadania.style.left = \"80px\";\n    uiPredkoscSpadania.style.width = \"120px\";\n    uiPredkoscSpadania.style.border = \"1px solid #eee\";\n    uiPredkoscSpadania.style.fontSize = \"25px\";\n    uiPredkoscSpadania.style.lineHeight = \"50px\";\n    uiPredkoscSpadania.style.color = \"#bbb\";\n    uiPredkoscSpadania.style.textAlign = \"center\";\n    uiWrapper.appendChild(uiPredkoscSpadania);\n    var uiMinietychGrzad = document.createElement('div');\n    uiMinietychGrzad.innerHTML = \"0x\";\n    uiMinietychGrzad.style.position = \"absolute\";\n    uiMinietychGrzad.style.top = \"0px\";\n    uiMinietychGrzad.style.left = \"200px\";\n    uiMinietychGrzad.style.width = \"80px\";\n    uiMinietychGrzad.style.border = \"1px solid #eee\";\n    uiMinietychGrzad.style.fontSize = \"25px\";\n    uiMinietychGrzad.style.lineHeight = \"50px\";\n    uiMinietychGrzad.style.color = \"#bbb\";\n    uiMinietychGrzad.style.textAlign = \"center\";\n    uiWrapper.appendChild(uiMinietychGrzad);\n    var grzedaWrapperGenerator = function (srodekDzuiryNaSrodkuEkranu, szerokoscDziuryWGrzedzie) {\n        var grzadkiWrapperHeight = 10;\n        var grzedaWidth = gameWidth * 10;\n        var grzedaCenter = grzedaWidth / 2;\n        var grzedaWrapper = document.createElement('div');\n        grzedaWrapper.style.position = \"absolute\";\n        grzedaWrapper.style.top = gameHeight + grzadkiWrapperHeight - 5 + \"px\";\n        grzedaWrapper.style.left = -grzedaCenter + (gameWidth / 2) + \"px\";\n        grzedaWrapper.style.width = grzedaWidth + \"px\";\n        grzedaWrapper.style.height = \"10px\";\n        grzedaWrapper.style.overflow = \"hidden\";\n        var grzedaLeftBorderWrapper = document.createElement('div');\n        grzedaLeftBorderWrapper.style.position = \"absolute\";\n        grzedaLeftBorderWrapper.style.top = \"0px\";\n        grzedaLeftBorderWrapper.style.left = \"0px\";\n        grzedaLeftBorderWrapper.style.width = grzedaCenter + srodekDzuiryNaSrodkuEkranu - (szerokoscDziuryWGrzedzie / 2) + \"px\";\n        grzedaLeftBorderWrapper.style.height = \"100%\";\n        grzedaLeftBorderWrapper.style.background = \"#cba\";\n        var grzedaRightBorderWrapper = document.createElement('div');\n        grzedaRightBorderWrapper.style.position = \"absolute\";\n        grzedaRightBorderWrapper.style.top = \"0px\";\n        grzedaRightBorderWrapper.style.left = grzedaCenter + srodekDzuiryNaSrodkuEkranu + (szerokoscDziuryWGrzedzie / 2) + \"px\";\n        grzedaRightBorderWrapper.style.width = grzedaCenter - srodekDzuiryNaSrodkuEkranu - (szerokoscDziuryWGrzedzie / 2) + \"px\";\n        grzedaRightBorderWrapper.style.height = \"100%\";\n        grzedaRightBorderWrapper.style.background = \"#cba\";\n        grzedaWrapper.appendChild(grzedaLeftBorderWrapper);\n        grzedaWrapper.appendChild(grzedaRightBorderWrapper);\n        return {\n            isCounted: false,\n            element: grzedaWrapper,\n            leftBorder: grzedaLeftBorderWrapper,\n            rightBorder: grzedaRightBorderWrapper\n        };\n    };\n    gameWrapper.appendChild(kurak);\n    gameWrapper.appendChild(grzadkiWrapper);\n    gameWrapper.appendChild(uiWrapper);\n    var body = document.querySelector('body');\n    if (body === null) {\n        throw new Error('Twoja przegladarka ssie pałe! Wracaj do szkoły!');\n    }\n    body.appendChild(gameWrapper);\n    var isLeftKeyPressed = false;\n    var isRightKeyPressed = false;\n    var isEnterKeyPressed = false;\n    document.addEventListener('keydown', function (e) {\n        if (e.keyCode == 37) {\n            isLeftKeyPressed = true;\n        }\n        if (e.keyCode == 39) {\n            isRightKeyPressed = true;\n        }\n        if (e.keyCode == 13) {\n            isEnterKeyPressed = true;\n        }\n    });\n    document.addEventListener('keyup', function (e) {\n        if (e.keyCode == 37) {\n            isLeftKeyPressed = false;\n        }\n        if (e.keyCode == 39) {\n            isRightKeyPressed = false;\n        }\n        if (e.keyCode == 13) {\n            isEnterKeyPressed = false;\n        }\n    });\n    var isTouchStarted = false;\n    var initPointX = null;\n    var diffTouchPointX = null;\n    var handleTouchStart = function (evt) {\n        isTouchStarted = true;\n        initPointX = evt.changedTouches[0].clientX;\n    };\n    var handleTouchEnd = function (evt) {\n        isTouchStarted = false;\n        initPointX = null;\n    };\n    var handleTouchMove = function (evt) {\n        if (isTouchStarted) {\n            diffTouchPointX = evt.changedTouches[0].clientX - initPointX;\n        }\n    };\n    document.addEventListener(\"touchstart\", handleTouchStart, false);\n    document.addEventListener(\"touchend\", handleTouchEnd, false);\n    document.addEventListener(\"touchcancel\", handleTouchEnd, false);\n    document.addEventListener(\"touchmove\", handleTouchMove, false);\n    var ONE_SECOUND = 1000;\n    var INTERWAL_GENEROWANIA_GRZAD = (ONE_SECOUND * 2.5);\n    var FIXED_DELTA_TIME = 16;\n    var listaGrzed = [];\n    var liczbaMinietychGrzad = 0;\n    var czasSpadania = 0;\n    var licznikGenerowaniaGrzedy = INTERWAL_GENEROWANIA_GRZAD;\n    var poczatkowPredkoscSpadania = 1.4;\n    var przyspieszeniePredkosciSpadania = 0.001;\n    var aktualnaPredkoscSpadania = poczatkowPredkoscSpadania;\n    var przyspieszenieSkretu = 1;\n    var maxPredkoscSkretu = 6;\n    var predkoscSkretu = 0;\n    var maxPredkosc = 10;\n    var isGameOver = false;\n    var chickenAnimationFrameCounter = 0;\n    var chickenAnimationFrameIndex = 0;\n    var chickenAnimationFramesUrl = [\n        './images/chicken.png',\n        './images/chicken_fly.png'\n    ];\n    var chickenAnimationTime = ONE_SECOUND / 2;\n    var getRandomInt = function (min, max) {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n    };\n    var resetGame = function () {\n        isGameOver = false;\n        liczbaMinietychGrzad = 0;\n        aktualnaPredkoscSpadania = poczatkowPredkoscSpadania;\n        czasSpadania = 0;\n        licznikGenerowaniaGrzedy = INTERWAL_GENEROWANIA_GRZAD;\n        for (var i = listaGrzed.length - 1; i >= 0; i--) {\n            listaGrzed[i].element.remove();\n            listaGrzed.splice(i, 1);\n        }\n        gameOverInfo.style.display = \"none\";\n    };\n    gameOverInfo.addEventListener('click', resetGame);\n    var intersectRect = function (r1, r2) {\n        return !(r2.left > r1.right ||\n            r2.right < r1.left ||\n            r2.top > r1.bottom ||\n            r2.bottom < r1.top);\n    };\n    var updateGame = function () {\n        if (isGameOver) {\n            if (isEnterKeyPressed) {\n                resetGame();\n            }\n            return false;\n        }\n        licznikGenerowaniaGrzedy = licznikGenerowaniaGrzedy + FIXED_DELTA_TIME;\n        czasSpadania = czasSpadania + FIXED_DELTA_TIME;\n        aktualnaPredkoscSpadania = aktualnaPredkoscSpadania + przyspieszeniePredkosciSpadania;\n        if (aktualnaPredkoscSpadania > maxPredkosc) {\n            aktualnaPredkoscSpadania = maxPredkosc;\n        }\n        chickenAnimationFrameCounter = chickenAnimationFrameCounter + FIXED_DELTA_TIME;\n        if (chickenAnimationFrameCounter > chickenAnimationTime) {\n            chickenAnimationFrameCounter = 0;\n            chickenAnimationFrameIndex = (chickenAnimationFrameIndex + 1) % chickenAnimationFramesUrl.length;\n            kurkaImage.src = chickenAnimationFramesUrl[chickenAnimationFrameIndex];\n        }\n        var kierunekPrzyspieszenia = 0;\n        if (isLeftKeyPressed) {\n            kierunekPrzyspieszenia = 1;\n        }\n        if (isRightKeyPressed) {\n            kierunekPrzyspieszenia = -1;\n        }\n        if (isTouchStarted) {\n            var buffor = 5;\n            if (diffTouchPointX > buffor) {\n                kierunekPrzyspieszenia = -1;\n            }\n            else if (diffTouchPointX < -buffor) {\n                kierunekPrzyspieszenia = 1;\n            }\n            else {\n                kierunekPrzyspieszenia = 0;\n            }\n        }\n        if ((!isLeftKeyPressed && !isRightKeyPressed) && !isTouchStarted) {\n            predkoscSkretu = 0;\n        }\n        if (isTouchStarted) {\n            var multiplier = Math.min(Math.abs(diffTouchPointX) * 0.01, 1);\n            predkoscSkretu = maxPredkoscSkretu * multiplier * kierunekPrzyspieszenia;\n        }\n        else {\n            predkoscSkretu = predkoscSkretu + (przyspieszenieSkretu * kierunekPrzyspieszenia);\n        }\n        var rotate = predkoscSkretu * 2 * -1;\n        kurkaImage.style.transform = \"rotate(\" + rotate + \"deg)\";\n        if (predkoscSkretu >= maxPredkoscSkretu) {\n            predkoscSkretu = maxPredkoscSkretu;\n        }\n        if (predkoscSkretu <= -maxPredkoscSkretu) {\n            predkoscSkretu = -maxPredkoscSkretu;\n        }\n        var czyWygenerowac = licznikGenerowaniaGrzedy > (INTERWAL_GENEROWANIA_GRZAD / aktualnaPredkoscSpadania * (Math.random() * 0.2 + 1.9));\n        if (czyWygenerowac) {\n            var szerokoscDziury = getRandomInt(kurakWidth + 10, gameWidth / 2);\n            var odstepOdKrawedzi = 15;\n            var maxPrzesuniecie = (gameWidth / 2) - (szerokoscDziury / 2) - (odstepOdKrawedzi / 2);\n            var przesuniecie = getRandomInt(-maxPrzesuniecie, maxPrzesuniecie);\n            var nowaGrzeda = grzedaWrapperGenerator(przesuniecie, szerokoscDziury);\n            listaGrzed.push(nowaGrzeda);\n            grzadkiWrapper.appendChild(nowaGrzeda.element);\n            licznikGenerowaniaGrzedy = 0;\n        }\n        for (var i = listaGrzed.length - 1; i >= 0; i--) {\n            var grzeda = listaGrzed[i];\n            var left = parseInt(grzeda.element.style.left);\n            var top_1 = parseInt(grzeda.element.style.top);\n            var newTop = top_1 - aktualnaPredkoscSpadania;\n            var height = parseInt(grzeda.element.style.height);\n            grzeda.element.style.top = newTop + \"px\";\n            if (grzeda.isCounted === false && newTop < kurakTop) {\n                liczbaMinietychGrzad = liczbaMinietychGrzad + 1;\n                grzeda.isCounted = true;\n            }\n            if (isRightKeyPressed || isLeftKeyPressed || isTouchStarted) {\n                var newLeft = left + predkoscSkretu;\n                grzeda.element.style.left = newLeft + \"px\";\n            }\n            var leftBorderWidth = parseInt(grzeda.leftBorder.style.width);\n            var r1 = {\n                top: top_1,\n                left: left,\n                right: left + leftBorderWidth,\n                bottom: top_1 + height\n            };\n            var rightBorderWidth = parseInt(grzeda.rightBorder.style.width);\n            var rightBorderLeft = parseInt(grzeda.rightBorder.style.left);\n            var r2 = {\n                top: top_1,\n                left: left + rightBorderLeft,\n                right: rightBorderLeft + rightBorderWidth,\n                bottom: top_1 + height\n            };\n            var _kurakLeft = parseInt(kurak.style.left);\n            var _kurakTop = parseInt(kurak.style.top);\n            var _kurakWidth = parseInt(kurak.style.width);\n            var _kurakHeight = parseInt(kurak.style.height);\n            var offsetBounds = _kurakWidth * 0.2;\n            var r3 = {\n                top: _kurakTop + offsetBounds,\n                left: _kurakLeft + offsetBounds,\n                right: _kurakLeft + _kurakWidth - offsetBounds,\n                bottom: _kurakTop + _kurakHeight - offsetBounds\n            };\n            var c1 = intersectRect(r1, r3);\n            var c2 = intersectRect(r2, r3);\n            if (c1 || c2) {\n                isGameOver = true;\n                gameOverInfo.style.display = \"block\";\n                kurkaImage.src = './images/chicken_end.png';\n            }\n            if (newTop + height <= 0) {\n                listaGrzed[i].element.remove();\n                listaGrzed.splice(i, 1);\n            }\n        }\n        uiCzasTrwania.innerHTML = (czasSpadania / ONE_SECOUND).toFixed(1) + \"s\";\n        uiPredkoscSpadania.innerHTML = aktualnaPredkoscSpadania.toFixed(1) + \" m/s\";\n        uiMinietychGrzad.innerHTML = liczbaMinietychGrzad + \"x\";\n    };\n    var lastUpdateTime = new Date().getTime();\n    var diffTime = 0;\n    var requestAnimationFrameCallback = function () {\n        var currentTime = new Date().getTime();\n        diffTime = diffTime + (currentTime - lastUpdateTime);\n        while (diffTime > FIXED_DELTA_TIME) {\n            updateGame();\n            diffTime = diffTime - FIXED_DELTA_TIME;\n        }\n        lastUpdateTime = currentTime;\n        window.requestAnimationFrame(requestAnimationFrameCallback);\n    };\n    requestAnimationFrameCallback();\n};\n/**\n\n\nPotrzebujemy\n- kulki\n- deska z dziuro\n\n\nkura na szczycie,\nona zrzuca jajko\njajko ma skrzyla\njajko spada\nmusi manewrowac na boki aby spasc nizej\nna deskach siedza kury\n\n */\n/**\n\n@TODO:\n- Animacja wejscia\n- animacja w lewo w prawo\n- animacja smierci\n- highscore\n */\nwindow.addEventListener(\"load\", prepareApp);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });