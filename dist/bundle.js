/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./src/js/Article.js\");\n/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Modal */ \"./src/js/Modal.js\");\n/* harmony import */ var _js_ArticleModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/ArticleModal */ \"./src/js/ArticleModal.js\");\n\r\n\r\n\r\n\r\nconst data = [\r\n    {\r\n        id: 1,\r\n        title: \"Increasing Prosperity With Positive Thinking\",\r\n        urlToImage: './src/img/strategies/1.jpg',\r\n        tags: ['Art', 'Design'],\r\n        content : 'knowing yourself is the first, and a very critical step in the process of planning your future',\r\n        date: '01.01.2020'\r\n    },\r\n        {\r\n        id: 2,\r\n        title: \"Motivation Is The First Step To Success\",\r\n        urlToImage: './src/img/strategies/2.jpg',\r\n        tags: ['Culture'],\r\n        content : 'knowing yourself is the first, and a very critical step in the process of planning your future',\r\n        date: '01.01.2020'\r\n    },\r\n           {\r\n        id: 3,\r\n        title: \"Success Steps For Your Personal Or Business Life\",\r\n        urlToImage: './src/img/strategies/3.jpg',\r\n        tags: ['Culture', 'Design', 'Art'],\r\n        content : 'knowing yourself is the first, and a very critical step in the process of planning your future',\r\n        date: '01.01.2020'\r\n    }\r\n]\r\n\r\nwindow.onload = function() {\r\n    console.log('hello');\r\n\r\n    // Render Articles\r\n    if(data){\r\n        renderArticlesToDom()\r\n    }\r\n    \r\n    // Tags\r\n    addTagsClickHandler();\r\n\r\n    // Generate Base Modal from Modal Class\r\n    addToolsClickHandler();\r\n}\r\n\r\nconst addTagsClickHandler = () => {\r\n    document.querySelector('.strategies__tags').addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('tag')) {\r\n            let clickedTag = e.target;\r\n            removeSelectedTags();\r\n            selectClickedTag(clickedTag);\r\n            if(clickedTag.innerText === 'All'){\r\n               showAllStrategies();\r\n            }else{\r\n               filterStrategyBySelectedTag(clickedTag.innerText);\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\nconst removeSelectedTags = () => {\r\n    let tags = document.querySelectorAll('.strategies__tags .tag');\r\n    tags.forEach(tag => {\r\n        tag.classList.remove('tag_selected');\r\n        tag.classList.add('tag_bordered');\r\n    })\r\n}\r\n\r\nconst selectClickedTag = (clickedTag) => {\r\n    clickedTag.classList.add('tag_selected');\r\n    clickedTag.classList.remove('tag_bordered');\r\n}\r\n\r\nconst showAllStrategies = () => {\r\n let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\r\n strategies.forEach(strategy => {\r\n      strategy.classList.remove('strategy_hidden');\r\n })\r\n}\r\n\r\nconst filterStrategyBySelectedTag = (selectedTag) => {\r\n   let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\r\n   strategies.forEach(strategy => {\r\n      strategy.classList.add('strategy_hidden');\r\n      strategy.querySelectorAll('.tag').forEach(tag => {\r\n        if(tag.innerText === selectedTag){\r\n            strategy.classList.remove('strategy_hidden');\r\n        }\r\n      })\r\n   })\r\n}\r\n\r\nconst renderArticlesToDom = () => {\r\n    let strategiesWrapper = getStrategiesWrapper();\r\n   generateArticles(data).forEach(article => {\r\n    strategiesWrapper.append(article.generateArticle())\r\n   })\r\n\r\n   addStrategyClickHandler ()\r\n}\r\n\r\nconst getStrategiesWrapper = () => {\r\n    const strategiesContainer = document.querySelector('.strategy-wrapper');\r\n    strategiesContainer.innerHTML = '';\r\n    return strategiesContainer;\r\n}\r\n\r\nconst generateArticles = (data) => {\r\n    let articles = [];\r\n    data.forEach(article => {\r\n        articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(article))\r\n    })\r\n    return articles;\r\n}\r\n\r\nconst addToolsClickHandler = () => {\r\n    document.querySelector('.tools__button .button').addEventListener('click', () => {\r\n        generateToolsModal();\r\n    })\r\n}\r\n\r\nconst generateToolsModal = () => {\r\n   renderModalWindow('test content for tools modal')\r\n}\r\n\r\nconst renderModalWindow = (content) => {\r\n   let modal = new _js_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal('tools-modal');\r\n   modal.buildModal(content);\r\n}\r\n\r\nconst addStrategyClickHandler = () => {\r\n    document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {\r\n        if(e.target.closest('.strategy')){\r\n            let clickedStrategyById = e.target.closest('.strategy').getAttribute('data-id');\r\n            let clickedStrategyByData = getClickedData(clickedStrategyById)\r\n\r\n            renderArticleModalWindow (clickedStrategyByData)\r\n        }\r\n    })\r\n}\r\n\r\nconst getClickedData = (id) => {\r\n   return data.find(article => article.id == id);\r\n}\r\n\r\nconst renderArticleModalWindow = (article) => {\r\n   let modal = new _js_ArticleModal__WEBPACK_IMPORTED_MODULE_2__.ArticleModal('article-modal', article);\r\n   modal.renderModal();\r\n}\n\n//# sourceURL=webpack://friday-coding/./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Article: () => (/* binding */ Article)\n/* harmony export */ });\nclass Article {\r\n    constructor({ id, title, urlToImage, tags, ...rest }) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.urlToImage = urlToImage;\r\n        this.tags = tags;\r\n    }\r\n\r\n    // Article generator\r\n    generateArticle() {\r\n        let template = '';\r\n        let article = document.createElement('article');\r\n        article.className = 'strategy block-shadowed';\r\n        article.setAttribute('data-id', this.id)\r\n\r\n        this.urlToImage &&\r\n            (template += `<img class=\"strategy__image\" src=${this.urlToImage} alt=\"strategy\"/>`)\r\n\r\n        if (this.title || this.tags) {\r\n            template += `<div class=\"strategy__content\">`\r\n\r\n            this.title &&\r\n                (template += `<h3 class=\"strategy__name\">${this.title}</h3>`)\r\n\r\n                if(this.tags){\r\n                   template += ` <div class=\"strategy__tags tags\">` \r\n                   this.tags.map(tag => {\r\n                    template += `   <span class=\"tag tag_colored\">${tag}</span>`\r\n                   })\r\n                   template += `</div>`\r\n                }\r\n\r\n            template += `</div>`\r\n        }\r\n\r\n        article.innerHTML = template;\r\n        return article\r\n    }\r\n}\n\n//# sourceURL=webpack://friday-coding/./src/js/Article.js?");

/***/ }),

/***/ "./src/js/ArticleModal.js":
/*!********************************!*\
  !*** ./src/js/ArticleModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArticleModal: () => (/* binding */ ArticleModal)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/js/Modal.js\");\n\r\n\r\nclass ArticleModal extends _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal {\r\n    constructor (classes, { id, title, urlToImage, tags, content, date }) {\r\n        super(classes);\r\n        this.id = id;\r\n        this.title = title;\r\n        this.urlToImage = urlToImage;\r\n        this.tags = tags;\r\n        this.content = content;\r\n        this.date = date;\r\n    }\r\n    \r\n    // Content generator\r\n      generateContent() {\r\n        let template = '';\r\n        let article = document.createElement('div');\r\n        article.className = 'article-modal__content';\r\n\r\n        this.urlToImage &&\r\n            (template += `<img class=\"strategy__image\" src=${this.urlToImage} alt=\"strategy\"/>`)\r\n\r\n        if (this.title || this.tags || this.content || this.date) {\r\n            template += `<div class=\"strategy__content\">`\r\n\r\n            this.date &&\r\n                (template += `<p class=\"strategy__date\">${this.date}</p>`)\r\n\r\n            this.title &&\r\n                (template += `<h3 class=\"strategy__name\">${this.title}</h3>`)\r\n\r\n              this.content &&\r\n                (template += `<p class=\"strategy__text\">${this.content}</p>`)\r\n\r\n                if(this.tags){\r\n                   template += ` <div class=\"strategy__tags tags\">` \r\n                   this.tags.map(tag => {\r\n                    template += `   <span class=\"tag tag_colored\">${tag}</span>`\r\n                   })\r\n                   template += `</div>`\r\n                }\r\n\r\n            template += `</div>`\r\n        }\r\n\r\n        article.innerHTML = template;\r\n        return article;\r\n    }\r\n\r\n    renderModal( ) {\r\n        let content = this.generateContent();\r\n        super.buildModal(content);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://friday-coding/./src/js/ArticleModal.js?");

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n    constructor(classes) {\r\n        this.classes = classes;\r\n        this.modal = '';\r\n        this.modalContent = '';\r\n        this.modalCloseBtn = '';\r\n        this.overlay = '';\r\n    }\r\n\r\n    buildModal(content) {\r\n        // Oveerlay\r\n        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');\r\n\r\n        // Modal\r\n        this.modal = this.createDomNode(this.modal, 'div', 'modal' , this.classes);\r\n\r\n        // ModalContent\r\n        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');\r\n\r\n        // CloseBtn\r\n        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');\r\n        this.modalCloseBtn.innerHTML = '<svg width=\"21\" height=\"22\" viewBox=\"0 0 21 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z\" fill=\"#2F281E\"/></svg>'\r\n\r\n        this.setContent(content);\r\n\r\n        this.appendModalElements();\r\n\r\n        // Bind Events\r\n        this.bindEvents();\r\n\r\n        // OpenModal\r\n        this.openModal();\r\n\r\n    }\r\n    createDomNode(node, element, ...classes) {\r\n        node = document.createElement(element);\r\n        node.classList.add(...classes);\r\n        return node;\r\n    };\r\n\r\n    setContent (content) {\r\n        if(typeof content === 'string'){\r\n           this.modalContent.innerHTML = content;\r\n        }else{\r\n            this.modalContent.innerHTML = '';\r\n            this.modalContent.appendChild(content);\r\n        }\r\n    }\r\n\r\n    appendModalElements(){\r\n        this.modal.append(this.modalCloseBtn);\r\n        this.modal.append(this.modalContent);\r\n        this.overlay.append(this.modal);\r\n    }\r\n\r\n    bindEvents () {\r\n        this.modalCloseBtn.addEventListener('click', this.closeModal);\r\n        this.overlay.addEventListener('click', this.closeModal);\r\n    }\r\n\r\n    openModal () {\r\n        document.body.append(this.overlay);\r\n    }\r\n\r\n    closeModal (e) {\r\n        let classes = e.target.classList;\r\n        if(classes.contains('overlay') || classes.contains('modal__close-icon')) {\r\n            document.querySelector('.overlay').remove();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://friday-coding/./src/js/Modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;