/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    margin: 0;
    padding: 0;
    background-color: black;
}

.menu-image{
    width: 150px;
    height: 150px;
}

header{
    background-color: black;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav{
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    justify-content: center;
}

.homepic>img{
    width: 300px;
}

/* button{
    background-color: white;
    color: black;
    width: 100px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    border: 0;
    border-radius: 10px;
} */

/* Content-Page */ 
#content {
    --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
    width: 50vw;
    height: calc(100vh - 50px);
    /* text-align: center; */
    margin-left: 25%;
    padding: 5px;
    border-radius: 1rem;
    overflow: visible;
    background: #f7ba2b;
    background: var(--background);
    position: relative;
    z-index: 1;
   }
   
   #content::after {
    position: absolute;
    content: "";
    top: 30px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.8);
    filter: blur(25px);
    background: #f7ba2b;
    background: var(--background);
    transition: opacity .5s;
   }
   
   #content-info {
    --color: #181818;
    background: var(--color);
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: .7rem;
   }
   
   #content .title {
    font-weight: bold;
    letter-spacing: .1em;
    color: white;
   }
   
   /*Hover*/
   #content:hover::after {
    opacity: 0;
   }
   
   #content:hover #content-info {
    color: #f7ba2b;
    transition: color 1s;
   }
   

   /* Button */ 
button {
    height: 50px;
    margin: 5px;
    width: 120px;
    background: #333;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: Consolas, Courier New, monospace;
    border: solid #404c5d 1px;
    font-size: 18px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    -webkit-transition: 500ms;
    transition: 500ms;
    border-radius: 5px;
    background: linear-gradient(145deg, #2e2d2d, #212121);
    -webkit-box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,
      inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
    box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,
      inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
  }
  
  button:hover {
    -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;
    box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;
    color: #d6d6d6;
    -webkit-transition: 500ms;
    transition: 500ms;
  }
  
  button:active {
    -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;
    box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;
    color: #d6d6d6;
    -webkit-transition: 100ms;
    transition: 100ms;
  }
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;;;;;;;;;GASG;;AAEH,iBAAiB;AACjB;IACI,gEAAgE;IAChE,WAAW;IACX,0BAA0B;IAC1B,wBAAwB;IACxB,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,UAAU;GACX;;GAEA;IACC,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,OAAO;IACP,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;GACxB;;GAEA;IACC,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;GACrB;;GAEA;IACC,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;GACb;;GAEA,QAAQ;GACR;IACC,UAAU;GACX;;GAEA;IACC,cAAc;IACd,oBAAoB;GACrB;;;GAGA,WAAW;AACd;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,wBAAwB;IACxB,qBAAqB;IACrB,uBAAuB;IACvB,eAAe;IACf,yBAAyB;IACzB,sBAAsB;IACtB,mBAAmB;IACnB,6CAA6C;IAC7C,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,qDAAqD;IACrD;8DAC0D;IAC1D;8DAC0D;EAC5D;;EAEA;IACE,gEAAgE;IAChE,wDAAwD;IACxD,cAAc;IACd,yBAAyB;IACzB,iBAAiB;EACnB;;EAEA;IACE,gEAAgE;IAChE,wDAAwD;IACxD,cAAc;IACd,yBAAyB;IACzB,iBAAiB;EACnB","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    background-color: black;\n}\n\n.menu-image{\n    width: 150px;\n    height: 150px;\n}\n\nheader{\n    background-color: black;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nnav{\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    align-items: center;\n    justify-content: center;\n}\n\n.homepic>img{\n    width: 300px;\n}\n\n/* button{\n    background-color: white;\n    color: black;\n    width: 100px;\n    height: 40px;\n    font-size: 18px;\n    font-weight: bold;\n    border: 0;\n    border-radius: 10px;\n} */\n\n/* Content-Page */ \n#content {\n    --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);\n    width: 50vw;\n    height: calc(100vh - 50px);\n    /* text-align: center; */\n    margin-left: 25%;\n    padding: 5px;\n    border-radius: 1rem;\n    overflow: visible;\n    background: #f7ba2b;\n    background: var(--background);\n    position: relative;\n    z-index: 1;\n   }\n   \n   #content::after {\n    position: absolute;\n    content: \"\";\n    top: 30px;\n    left: 0;\n    right: 0;\n    z-index: -1;\n    height: 100%;\n    width: 100%;\n    transform: scale(0.8);\n    filter: blur(25px);\n    background: #f7ba2b;\n    background: var(--background);\n    transition: opacity .5s;\n   }\n   \n   #content-info {\n    --color: #181818;\n    background: var(--color);\n    color: var(--color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    overflow: visible;\n    border-radius: .7rem;\n   }\n   \n   #content .title {\n    font-weight: bold;\n    letter-spacing: .1em;\n    color: white;\n   }\n   \n   /*Hover*/\n   #content:hover::after {\n    opacity: 0;\n   }\n   \n   #content:hover #content-info {\n    color: #f7ba2b;\n    transition: color 1s;\n   }\n   \n\n   /* Button */ \nbutton {\n    height: 50px;\n    margin: 5px;\n    width: 120px;\n    background: #333;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    font-family: Consolas, Courier New, monospace;\n    border: solid #404c5d 1px;\n    font-size: 18px;\n    font-weight: bold;\n    color: rgb(255, 255, 255);\n    -webkit-transition: 500ms;\n    transition: 500ms;\n    border-radius: 5px;\n    background: linear-gradient(145deg, #2e2d2d, #212121);\n    -webkit-box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,\n      inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;\n    box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,\n      inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;\n  }\n  \n  button:hover {\n    -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;\n    box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;\n    color: #d6d6d6;\n    -webkit-transition: 500ms;\n    transition: 500ms;\n  }\n  \n  button:active {\n    -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;\n    box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;\n    color: #d6d6d6;\n    -webkit-transition: 100ms;\n    transition: 100ms;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homepage() {
    const homepageDiv = document.getElementById("content");

    // Clear previous content
    homepageDiv.innerHTML = '';

    const picDiv = document.createElement("div");
    const headDiv = document.createElement("div");
    const headline = document.createElement("h2");
    const textDiv = document.createElement("div");
    const details = document.createElement("p");


    // Add image
    const image = document.createElement("img");
    image.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
    picDiv.appendChild(image);
    picDiv.classList.add("homepic");

    headline.innerHTML = 'Pizza this.. Pizza that.. Anything Pizza..';
    headDiv.appendChild(headline);

    details.innerHTML = 'Lorem ipsum afhjashf dfjhjs jh ajfahjs asjhdf sd fjah wo fw o owew ro wfo pbiwoa aii wf i aifi';
    textDiv.appendChild(details);

    homepageDiv.appendChild(picDiv);
    homepageDiv.appendChild(headDiv);
    homepageDiv.appendChild(textDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homepageDiv = document.getElementById("content");

function menu_item(variable, imageLink, name, description){
    variable.classList.add("item");
    
    let image = document.createElement("img");
    image.src = `${imageLink}`;
    image.classList.add("menu-image");

    let item_name = document.createElement("h2");
    item_name.innerHTML = name;

    let item_desc = document.createElement("p");
    item_desc.innerHTML = description;

    variable.appendChild(image);
    variable.appendChild(item_name);
    variable.appendChild(item_desc);

}

function menu() {
    // Clear previous content
    homepageDiv.innerHTML = '';

    //menu items = 1
    const item1 = document.createElement("div");
    const imageLink1 = "https://www.allrecipes.com/thmb/UsNtGp9OgIsKw6cPqGQ-CxLmnTE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72657-best-hamburger-ever-ddmfs-4x3-hero-878e801ab30445988d007461782b3c25.jpg";
    const desc1 = "Two buns with a delicious meat patty";
    menu_item(item1,imageLink1,"Hamburger",desc1);
    homepageDiv.appendChild(item1);

    //menu items = 2
    const item2 = document.createElement("div");
    const imageLink2 = "https://www.wholesomeyum.com/wp-content/uploads/2023/12/wholesomeyum-Grilled-Lobster-Tail.jpg";
    const desc2 = "Cracked salty lobster with lemon addi";
    menu_item(item2,imageLink2,"Lobster",desc2);
    homepageDiv.appendChild(item2);

    //menu items = 2
    const item3 = document.createElement("div");
    const imageLink3 = "https://www.kitchensanctuary.com/wp-content/uploads/2020/10/Lasagne-square-FS-79.jpg";
    const desc3 = "Homemade Lasagne";
    menu_item(item3,imageLink3,"Lasagne",desc3);
    homepageDiv.appendChild(item3);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const homepageContent = document.getElementById('content');
const homebtn = document.getElementById('homeBtn');
const menubtn = document.getElementById('menuBtn');
const aboutbtn = document.getElementById('aboutBtn');

function render() {
    homebtn.addEventListener('click', () => {
        console.log("Home button clicked");
        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    menubtn.addEventListener('click', () => {
        console.log("Menu button clicked");
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    aboutbtn.addEventListener('click', () => {
        console.log("About button clicked");
        // Call the about function here
    });
}

// Call the render function to attach the event listeners
render();

/******/ })()
;
//# sourceMappingURL=main.js.map