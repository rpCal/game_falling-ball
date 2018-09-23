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

eval("var prepareApp = function () {\n    var gameWidth = 380;\n    var gameHeight = 600;\n    var kurakWidth = gameWidth / 4;\n    var kurakHeight = kurakWidth; //kurakWidth * (16 / 9);\n    var kurakTop = ((1 / 4) * gameHeight) - (kurakHeight / 2);\n    var kurakLeft = ((1 / 2) * gameWidth) - (kurakWidth / 2);\n    var gameWrapper = document.createElement('div');\n    gameWrapper.style.height = gameHeight + \"px\";\n    gameWrapper.style.width = gameWidth + \"px\";\n    gameWrapper.style.position = \"relative\";\n    gameWrapper.style.border = \"5px solid #eee\";\n    gameWrapper.style.overflow = \"hidden\";\n    var kurak = document.createElement('div');\n    kurak.style.width = kurakWidth + \"px\";\n    kurak.style.height = kurakHeight + \"px\";\n    kurak.style.position = \"absolute\";\n    kurak.style.top = kurakTop + \"px\";\n    kurak.style.left = kurakLeft + \"px\";\n    var kurkaImage = document.createElement('img');\n    kurkaImage.src = \"./images/chicken.png\";\n    kurkaImage.style.width = \"100%\";\n    kurkaImage.style.height = \"auto\";\n    kurak.appendChild(kurkaImage);\n    var gameOverInfo = document.createElement('div');\n    gameOverInfo.innerHTML = \"KONIEC MARZEŃ!\";\n    gameOverInfo.style.width = \"60%\";\n    gameOverInfo.style.height = \"70px\";\n    gameOverInfo.style.position = \"absolute\";\n    gameOverInfo.style.top = gameHeight / 2 - 100 / 2 + \"px\";\n    gameOverInfo.style.left = \"20%\";\n    gameOverInfo.style.borderRadius = '150px';\n    gameOverInfo.style.fontSize = \"20px\";\n    gameOverInfo.style.textAlign = 'center';\n    gameOverInfo.style.background = \"#cba\";\n    gameOverInfo.style.color = \"#fff\";\n    gameOverInfo.style.lineHeight = \"70px\";\n    gameOverInfo.style.fontFamily = \"cursive\";\n    gameOverInfo.style.display = \"none\";\n    gameWrapper.appendChild(gameOverInfo);\n    var grzadkiWrapper = document.createElement('div');\n    var uiWrapper = document.createElement('div');\n    uiWrapper.style.position = \"absolute\";\n    uiWrapper.style.top = \"0px\";\n    uiWrapper.style.left = \"0px\";\n    uiWrapper.style.width = \"100%;\";\n    uiWrapper.style.height = \"50px\";\n    var uiCzasTrwania = document.createElement('div');\n    uiCzasTrwania.innerHTML = \"0s\";\n    uiCzasTrwania.style.position = \"absolute\";\n    uiCzasTrwania.style.top = \"0px\";\n    uiCzasTrwania.style.left = \"0px\";\n    uiCzasTrwania.style.width = \"80px\";\n    uiCzasTrwania.style.border = \"1px solid #eee\";\n    uiCzasTrwania.style.fontSize = \"25px\";\n    uiCzasTrwania.style.lineHeight = \"50px\";\n    uiCzasTrwania.style.color = \"#bbb\";\n    uiCzasTrwania.style.textAlign = \"center\";\n    uiWrapper.appendChild(uiCzasTrwania);\n    var uiPredkoscSpadania = document.createElement('div');\n    uiPredkoscSpadania.innerHTML = \"0 m/s\";\n    uiPredkoscSpadania.style.position = \"absolute\";\n    uiPredkoscSpadania.style.top = \"0px\";\n    uiPredkoscSpadania.style.left = \"80px\";\n    uiPredkoscSpadania.style.width = \"120px\";\n    uiPredkoscSpadania.style.border = \"1px solid #eee\";\n    uiPredkoscSpadania.style.fontSize = \"25px\";\n    uiPredkoscSpadania.style.lineHeight = \"50px\";\n    uiPredkoscSpadania.style.color = \"#bbb\";\n    uiPredkoscSpadania.style.textAlign = \"center\";\n    uiWrapper.appendChild(uiPredkoscSpadania);\n    var uiMinietychGrzad = document.createElement('div');\n    uiMinietychGrzad.innerHTML = \"0x\";\n    uiMinietychGrzad.style.position = \"absolute\";\n    uiMinietychGrzad.style.top = \"0px\";\n    uiMinietychGrzad.style.left = \"200px\";\n    uiMinietychGrzad.style.width = \"80px\";\n    uiMinietychGrzad.style.border = \"1px solid #eee\";\n    uiMinietychGrzad.style.fontSize = \"25px\";\n    uiMinietychGrzad.style.lineHeight = \"50px\";\n    uiMinietychGrzad.style.color = \"#bbb\";\n    uiMinietychGrzad.style.textAlign = \"center\";\n    uiWrapper.appendChild(uiMinietychGrzad);\n    var grzedaWrapperGenerator = function (srodekDzuiryNaSrodkuEkranu, szerokoscDziuryWGrzedzie) {\n        var grzadkiWrapperHeight = 10;\n        var grzedaWidth = gameWidth * 10;\n        var grzedaCenter = grzedaWidth / 2;\n        var grzedaWrapper = document.createElement('div');\n        grzedaWrapper.style.position = \"absolute\";\n        grzedaWrapper.style.top = gameHeight + grzadkiWrapperHeight - 5 + \"px\";\n        grzedaWrapper.style.left = -grzedaCenter + (gameWidth / 2) + \"px\";\n        grzedaWrapper.style.width = grzedaWidth + \"px\";\n        grzedaWrapper.style.height = \"10px\";\n        grzedaWrapper.style.overflow = \"hidden\";\n        var grzedaLeftBorderWrapper = document.createElement('div');\n        grzedaLeftBorderWrapper.style.position = \"absolute\";\n        grzedaLeftBorderWrapper.style.top = \"0px\";\n        grzedaLeftBorderWrapper.style.left = \"0px\";\n        grzedaLeftBorderWrapper.style.width = grzedaCenter + srodekDzuiryNaSrodkuEkranu - (szerokoscDziuryWGrzedzie / 2) + \"px\";\n        grzedaLeftBorderWrapper.style.height = \"100%\";\n        grzedaLeftBorderWrapper.style.background = \"#cba\";\n        var grzedaRightBorderWrapper = document.createElement('div');\n        grzedaRightBorderWrapper.style.position = \"absolute\";\n        grzedaRightBorderWrapper.style.top = \"0px\";\n        grzedaRightBorderWrapper.style.left = grzedaCenter + srodekDzuiryNaSrodkuEkranu + (szerokoscDziuryWGrzedzie / 2) + \"px\";\n        grzedaRightBorderWrapper.style.width = grzedaCenter - srodekDzuiryNaSrodkuEkranu - (szerokoscDziuryWGrzedzie / 2) + \"px\";\n        grzedaRightBorderWrapper.style.height = \"100%\";\n        grzedaRightBorderWrapper.style.background = \"#cba\";\n        grzedaWrapper.appendChild(grzedaLeftBorderWrapper);\n        grzedaWrapper.appendChild(grzedaRightBorderWrapper);\n        return {\n            isCounted: false,\n            element: grzedaWrapper,\n            leftBorder: grzedaLeftBorderWrapper,\n            rightBorder: grzedaRightBorderWrapper\n        };\n    };\n    gameWrapper.appendChild(kurak);\n    gameWrapper.appendChild(grzadkiWrapper);\n    gameWrapper.appendChild(uiWrapper);\n    var body = document.querySelector('body');\n    if (body === null) {\n        throw new Error('Twoja przegladarka ssie pałe! Wracaj do szkoły!');\n    }\n    body.appendChild(gameWrapper);\n    var isLeftKeyPressed = false;\n    var isRightKeyPressed = false;\n    var isEnterKeyPressed = false;\n    document.addEventListener('keydown', function (e) {\n        if (e.keyCode == 37) {\n            isLeftKeyPressed = true;\n        }\n        if (e.keyCode == 39) {\n            isRightKeyPressed = true;\n        }\n        if (e.keyCode == 13) {\n            isEnterKeyPressed = true;\n        }\n    });\n    document.addEventListener('keyup', function (e) {\n        if (e.keyCode == 37) {\n            isLeftKeyPressed = false;\n        }\n        if (e.keyCode == 39) {\n            isRightKeyPressed = false;\n        }\n        if (e.keyCode == 13) {\n            isEnterKeyPressed = false;\n        }\n    });\n    var ONE_SECOUND = 1000;\n    var INTERWAL_GENEROWANIA_GRZAD = (ONE_SECOUND * 2.5);\n    var FIXED_DELTA_TIME = 16;\n    var listaGrzed = [];\n    var liczbaMinietychGrzad = 0;\n    var czasSpadania = 0;\n    var licznikGenerowaniaGrzedy = INTERWAL_GENEROWANIA_GRZAD;\n    var poczatkowPredkoscSpadania = 1.4;\n    var przyspieszeniePredkosciSpadania = 0.001;\n    var aktualnaPredkoscSpadania = poczatkowPredkoscSpadania;\n    var przyspieszenieSkretu = 1;\n    var maxPredkoscSkretu = 6;\n    var predkoscSkretu = 0;\n    var maxPredkosc = 10;\n    var isGameOver = false;\n    var chickenAnimationFrameCounter = 0;\n    var chickenAnimationFrameIndex = 0;\n    var chickenAnimationFramesUrl = [\n        './images/chicken.png',\n        './images/chicken_fly.png'\n    ];\n    var chickenAnimationTime = ONE_SECOUND / 2;\n    var getRandomInt = function (min, max) {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n    };\n    var intersectRect = function (r1, r2) {\n        return !(r2.left > r1.right ||\n            r2.right < r1.left ||\n            r2.top > r1.bottom ||\n            r2.bottom < r1.top);\n    };\n    var updateGame = function () {\n        if (isGameOver) {\n            if (isEnterKeyPressed) {\n                isGameOver = false;\n                liczbaMinietychGrzad = 0;\n                aktualnaPredkoscSpadania = poczatkowPredkoscSpadania;\n                czasSpadania = 0;\n                licznikGenerowaniaGrzedy = INTERWAL_GENEROWANIA_GRZAD;\n                for (var i = listaGrzed.length - 1; i >= 0; i--) {\n                    listaGrzed[i].element.remove();\n                    listaGrzed.splice(i, 1);\n                }\n                gameOverInfo.style.display = \"none\";\n            }\n            return false;\n        }\n        licznikGenerowaniaGrzedy = licznikGenerowaniaGrzedy + FIXED_DELTA_TIME;\n        czasSpadania = czasSpadania + FIXED_DELTA_TIME;\n        aktualnaPredkoscSpadania = aktualnaPredkoscSpadania + przyspieszeniePredkosciSpadania;\n        if (aktualnaPredkoscSpadania > maxPredkosc) {\n            aktualnaPredkoscSpadania = maxPredkosc;\n        }\n        chickenAnimationFrameCounter = chickenAnimationFrameCounter + FIXED_DELTA_TIME;\n        if (chickenAnimationFrameCounter > chickenAnimationTime) {\n            chickenAnimationFrameCounter = 0;\n            chickenAnimationFrameIndex = (chickenAnimationFrameIndex + 1) % chickenAnimationFramesUrl.length;\n            kurkaImage.src = chickenAnimationFramesUrl[chickenAnimationFrameIndex];\n        }\n        var kierunekPrzyspieszenia = 0;\n        if (isLeftKeyPressed) {\n            kierunekPrzyspieszenia = -1;\n        }\n        if (isRightKeyPressed) {\n            kierunekPrzyspieszenia = 1;\n        }\n        if (!isLeftKeyPressed && !isRightKeyPressed) {\n            predkoscSkretu = 0;\n        }\n        predkoscSkretu = predkoscSkretu + (przyspieszenieSkretu * kierunekPrzyspieszenia);\n        var rotate = kierunekPrzyspieszenia * 15 * -1;\n        kurkaImage.style.transform = \"rotate(\" + rotate + \"deg)\";\n        if (predkoscSkretu >= maxPredkoscSkretu) {\n            predkoscSkretu = maxPredkoscSkretu;\n        }\n        if (predkoscSkretu <= -maxPredkoscSkretu) {\n            predkoscSkretu = -maxPredkoscSkretu;\n        }\n        var czyWygenerowac = licznikGenerowaniaGrzedy > (INTERWAL_GENEROWANIA_GRZAD / aktualnaPredkoscSpadania * (Math.random() * 0.2 + 1.9));\n        if (czyWygenerowac) {\n            var szerokoscDziury = getRandomInt(kurakWidth + 10, gameWidth / 2);\n            var odstepOdKrawedzi = 15;\n            var maxPrzesuniecie = (gameWidth / 2) - (szerokoscDziury / 2) - (odstepOdKrawedzi / 2);\n            var przesuniecie = getRandomInt(-maxPrzesuniecie, maxPrzesuniecie);\n            var nowaGrzeda = grzedaWrapperGenerator(przesuniecie, szerokoscDziury);\n            listaGrzed.push(nowaGrzeda);\n            grzadkiWrapper.appendChild(nowaGrzeda.element);\n            licznikGenerowaniaGrzedy = 0;\n        }\n        for (var i = listaGrzed.length - 1; i >= 0; i--) {\n            var grzeda = listaGrzed[i];\n            var left = parseInt(grzeda.element.style.left);\n            var top_1 = parseInt(grzeda.element.style.top);\n            var newTop = top_1 - aktualnaPredkoscSpadania;\n            var height = parseInt(grzeda.element.style.height);\n            grzeda.element.style.top = newTop + \"px\";\n            if (grzeda.isCounted === false && newTop < kurakTop) {\n                liczbaMinietychGrzad = liczbaMinietychGrzad + 1;\n                grzeda.isCounted = true;\n            }\n            if (isRightKeyPressed || isLeftKeyPressed) {\n                var newLeft = left + predkoscSkretu;\n                grzeda.element.style.left = newLeft + \"px\";\n            }\n            var leftBorderWidth = parseInt(grzeda.leftBorder.style.width);\n            var r1 = {\n                top: top_1,\n                left: left,\n                right: left + leftBorderWidth,\n                bottom: top_1 + height\n            };\n            var rightBorderWidth = parseInt(grzeda.rightBorder.style.width);\n            var rightBorderLeft = parseInt(grzeda.rightBorder.style.left);\n            var r2 = {\n                top: top_1,\n                left: left + rightBorderLeft,\n                right: rightBorderLeft + rightBorderWidth,\n                bottom: top_1 + height\n            };\n            var _kurakLeft = parseInt(kurak.style.left);\n            var _kurakTop = parseInt(kurak.style.top);\n            var offsetBounds = 5;\n            var r3 = {\n                top: _kurakTop + offsetBounds,\n                left: _kurakLeft + offsetBounds,\n                right: _kurakLeft + parseInt(kurak.style.width) - offsetBounds,\n                bottom: _kurakTop + parseInt(kurak.style.height) - offsetBounds\n            };\n            var c1 = intersectRect(r1, r3);\n            var c2 = intersectRect(r2, r3);\n            if (c1 || c2) {\n                isGameOver = true;\n                gameOverInfo.style.display = \"block\";\n                kurkaImage.src = './images/chicken_end.png';\n            }\n            if (newTop + height <= 0) {\n                listaGrzed[i].element.remove();\n                listaGrzed.splice(i, 1);\n            }\n        }\n        uiCzasTrwania.innerHTML = (czasSpadania / ONE_SECOUND).toFixed(1) + \"s\";\n        uiPredkoscSpadania.innerHTML = aktualnaPredkoscSpadania.toFixed(1) + \" m/s\";\n        uiMinietychGrzad.innerHTML = liczbaMinietychGrzad + \"x\";\n    };\n    var lastUpdateTime = new Date().getTime();\n    var diffTime = 0;\n    var requestAnimationFrameCallback = function () {\n        var currentTime = new Date().getTime();\n        diffTime = diffTime + (currentTime - lastUpdateTime);\n        while (diffTime > FIXED_DELTA_TIME) {\n            updateGame();\n            diffTime = diffTime - FIXED_DELTA_TIME;\n        }\n        lastUpdateTime = currentTime;\n        window.requestAnimationFrame(requestAnimationFrameCallback);\n    };\n    requestAnimationFrameCallback();\n};\n/**\n\n\nPotrzebujemy\n- kulki\n- deska z dziuro\n\n\nkura na szczycie,\nona zrzuca jajko\njajko ma skrzyla\njajko spada\nmusi manewrowac na boki aby spasc nizej\nna deskach siedza kury\n\n */\n/**\n\n@TODO:\n- Animacja wejscia\n- animacja w lewo w prawo\n- animacja smierci\n- highscore\n */\nwindow.addEventListener(\"load\", prepareApp);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });