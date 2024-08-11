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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
}

body {
  margin: 0;
  padding: 0;
  background-image: url("https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-4480x2520-8324.png");
  background-attachment: fixed;
}

.menu-image {
  width: 200px;
  height: 200px;
}

header {
  background-color: rgb(35, 35, 35);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;
}

.homepic > img {
  width: 700px;
}

.details {
  text-align: left;
  color: #000;
  background: var(--background);
  padding: 5px;
}

.active {
  color: #ea5358;
}

/* Content-Page */
#content-frame {
  width: 50vw;
  /* height: calc(100vh - 50px); */
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

#content-frame::after {
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
  transition: opacity 0.5s;
}

#content-bg {
  --color: #000000;
  background: var(--color);
  color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  border-radius: 0.7rem;
}

#content-frame #content {
  letter-spacing: 0.1em;
  text-align: center;
  color: white;
  padding: 10px;
}

/*Hover*/
#content-frame:hover::after {
  opacity: 0;
}

#content-frame:hover #content-bg {
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
  -webkit-box-shadow: 1px 1px 13px #f7ba2b, -1px -1px 33px #545b78;
  box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #f7ba2b;
  color: #f7ba2b;
  -webkit-transition: 100ms;
  transition: 100ms;
}
/* From Uiverse.io by alexruix */ 
.card {
    width: 300px;
    height: 254px;
    padding: .8em;
    background: #f5f5f5;
    position: relative;
    overflow: visible;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
   }
   
   .card-img {
    background-color: #ffcaa6;
    height: 40%;
    width: 100%;
    border-radius: .5rem;
    transition: .3s ease;
   }
   
   .card-info {
    padding-top: 10%;
   }
   
   svg {
    width: 20px;
    height: 20px;
   }
   
   .card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
   }
   
   /*Text*/
   .text-title {
    font-weight: 900;
    color: #000;
    font-size: 1.2em;
    line-height: 1.5;
   }
   
   .text-body {
    font-size: .9em;
    color: #000;
    padding-bottom: 10px;
   }
   
   /*Hover*/
   .card-img:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
   }
   
   .card-button:hover {
    border: 1px solid #ffcaa6;
    background-color: #ffcaa6;
   }
   `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gEAAgE;AAClE;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gJAAgJ;EAChJ,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA,iBAAiB;AACjB;EACE,WAAW;EACX,gCAAgC;EAChC,wBAAwB;EACxB,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,6BAA6B;EAC7B,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,6BAA6B;EAC7B,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA,QAAQ;AACR;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA,WAAW;AACX;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,uBAAuB;EACvB,eAAe;EACf,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,6CAA6C;EAC7C,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;EAClB,qDAAqD;EACrD;4DAC0D;EAC1D;4DAC0D;AAC5D;;AAEA;EACE,gEAAgE;EAChE,wDAAwD;EACxD,cAAc;EACd,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,gEAAgE;EAChE,wDAAwD;EACxD,cAAc;EACd,yBAAyB;EACzB,iBAAiB;AACnB;AACA,gCAAgC;AAChC;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,kEAAkE;GACnE;;GAEA;IACC,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,oBAAoB;IACpB,oBAAoB;GACrB;;GAEA;IACC,gBAAgB;GACjB;;GAEA;IACC,WAAW;IACX,YAAY;GACb;;GAEA;IACC,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,0BAA0B;GAC3B;;GAEA,OAAO;GACP;IACC,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;GACjB;;GAEA;IACC,eAAe;IACf,WAAW;IACX,oBAAoB;GACrB;;GAEA,QAAQ;GACR;IACC,2BAA2B;IAC3B,iGAAiG;GAClG;;GAEA;IACC,yBAAyB;IACzB,yBAAyB;GAC1B","sourcesContent":[":root {\n  --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-image: url(\"https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-4480x2520-8324.png\");\n  background-attachment: fixed;\n}\n\n.menu-image {\n  width: 200px;\n  height: 200px;\n}\n\nheader {\n  background-color: rgb(35, 35, 35);\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nnav {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  align-items: center;\n  justify-content: center;\n}\n\n.homepic > img {\n  width: 700px;\n}\n\n.details {\n  text-align: left;\n  color: #000;\n  background: var(--background);\n  padding: 5px;\n}\n\n.active {\n  color: #ea5358;\n}\n\n/* Content-Page */\n#content-frame {\n  width: 50vw;\n  /* height: calc(100vh - 50px); */\n  /* text-align: center; */\n  margin-left: 25%;\n  padding: 5px;\n  border-radius: 1rem;\n  overflow: visible;\n  background: #f7ba2b;\n  background: var(--background);\n  position: relative;\n  z-index: 1;\n}\n\n#content-frame::after {\n  position: absolute;\n  content: \"\";\n  top: 30px;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  transform: scale(0.8);\n  filter: blur(25px);\n  background: #f7ba2b;\n  background: var(--background);\n  transition: opacity 0.5s;\n}\n\n#content-bg {\n  --color: #000000;\n  background: var(--color);\n  color: var(--color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  border-radius: 0.7rem;\n}\n\n#content-frame #content {\n  letter-spacing: 0.1em;\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n\n/*Hover*/\n#content-frame:hover::after {\n  opacity: 0;\n}\n\n#content-frame:hover #content-bg {\n  color: #f7ba2b;\n  transition: color 1s;\n}\n\n/* Button */\nbutton {\n  height: 50px;\n  margin: 5px;\n  width: 120px;\n  background: #333;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  font-family: Consolas, Courier New, monospace;\n  border: solid #404c5d 1px;\n  font-size: 18px;\n  font-weight: bold;\n  color: rgb(255, 255, 255);\n  -webkit-transition: 500ms;\n  transition: 500ms;\n  border-radius: 5px;\n  background: linear-gradient(145deg, #2e2d2d, #212121);\n  -webkit-box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,\n    inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;\n  box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,\n    inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;\n}\n\nbutton:hover {\n  -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;\n  box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;\n  color: #d6d6d6;\n  -webkit-transition: 500ms;\n  transition: 500ms;\n}\n\nbutton:active {\n  -webkit-box-shadow: 1px 1px 13px #f7ba2b, -1px -1px 33px #545b78;\n  box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #f7ba2b;\n  color: #f7ba2b;\n  -webkit-transition: 100ms;\n  transition: 100ms;\n}\n/* From Uiverse.io by alexruix */ \n.card {\n    width: 300px;\n    height: 254px;\n    padding: .8em;\n    background: #f5f5f5;\n    position: relative;\n    overflow: visible;\n    border-radius: 10px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n   }\n   \n   .card-img {\n    background-color: #ffcaa6;\n    height: 40%;\n    width: 100%;\n    border-radius: .5rem;\n    transition: .3s ease;\n   }\n   \n   .card-info {\n    padding-top: 10%;\n   }\n   \n   svg {\n    width: 20px;\n    height: 20px;\n   }\n   \n   .card-footer {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 10px;\n    border-top: 1px solid #ddd;\n   }\n   \n   /*Text*/\n   .text-title {\n    font-weight: 900;\n    color: #000;\n    font-size: 1.2em;\n    line-height: 1.5;\n   }\n   \n   .text-body {\n    font-size: .9em;\n    color: #000;\n    padding-bottom: 10px;\n   }\n   \n   /*Hover*/\n   .card-img:hover {\n    transform: translateY(-25%);\n    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;\n   }\n   \n   .card-button:hover {\n    border: 1px solid #ffcaa6;\n    background-color: #ffcaa6;\n   }\n   "],"sourceRoot":""}]);
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
const homepageDiv = document.getElementById("content");

function about() {
    homepageDiv.innerHTML = "";
    homepageDiv.style.display = "block";


    homepageDiv.innerHTML = `
    <h1>About Us</h1>
<h3><b>Welcome to Slices of Heaven!</b></h3>
<p>At Slices of Heaven, we believe that pizza is more than just a meal—it's a slice of happiness. Nestled in the heart of [Your City], our pizzeria has been the go-to spot for pizza lovers since [Year of Establishment]. Whether you're here for a quick slice or a full pizza experience, we treat every guest like family.</p>

<h3><b>Our Story</b></h3>
<p>Our story began with a simple dream: to bring the authentic flavors of Italy to our community. With a passion for quality and a dedication to tradition, our founders opened Slices of Heaven to share their love of pizza. Every pizza we create is a tribute to the artistry of Italian cooking, made with the freshest ingredients and a lot of love.</p>

<h3><b>Our Ingredients</b></h3>
<p>Quality is the cornerstone of everything we do at Slices of Heaven. We handpick the finest ingredients, from sun-ripened tomatoes to creamy mozzarella and fresh basil. Our dough is prepared fresh daily, hand-stretched to perfection, and baked in our traditional stone oven to achieve that perfect crispy crust. We believe that great ingredients make great pizza, and we never compromise on quality.</p>

<h3><b>Our Commitment</b></h3>
<p>At Slices of Heaven, we're committed to providing a warm and welcoming atmosphere where everyone can enjoy a slice of their favorite pizza. From classic Margherita to our signature creations, we have something to satisfy every craving. We also offer a variety of vegetarian and gluten-free options, ensuring that everyone can find their perfect slice.</p>

<h3><b>Join Us</b></h3>
<p>Whether you're dining in, taking out, or ordering delivery, Slices of Heaven is here to serve you. Come in and experience the taste of true pizza perfection. We can't wait to welcome you to our table!</p>
`;


}



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
    homepageDiv.style.display = "block ";

    const picDiv = document.createElement("div");
    const headDiv = document.createElement("div");
    const restName = document.createElement("h1");
    const headline = document.createElement("h3");
    const textDiv = document.createElement("div");
    const restDetails = document.createElement("p");
    const hours = document.createElement("p");
    const location = document.createElement("p");


    // Add image
    const image = document.createElement("img");
    image.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
    picDiv.appendChild(image);
    picDiv.classList.add("homepic");

    restName.innerHTML = 'Slices Of Heaven';
    headline.innerHTML = 'Where Every Bite is a Slice of Perfection!';
    headDiv.appendChild(restName);
    headDiv.appendChild(headline);

    //restaurant details
    restDetails.innerHTML = "<center><b>Description</b></center> At Slice of Heaven, we believe pizza is more than just food—it's a passion. Our handcrafted pizzas are made with love, using the freshest ingredients and a perfect blend of flavors that will transport your taste buds straight to Italy. Whether you’re in the mood for a classic Margherita or a gourmet creation, each slice promises a heavenly experience. Join us for a taste that will leave you craving more!";
    textDiv.appendChild(restDetails);

    //hours
    hours.innerHTML = `<b>Opening Hours</b> <br>
    Monday to Thursday: 11:00 AM - 10:00 PM <br>
    Friday & Saturday: 11:00 AM - 11:00 PM <br>
    Sunday: 12:00 PM - 9:00 PM`;
    textDiv.appendChild(hours);

    //location
    location.innerHTML = `<b>Contact Details</b> <br>
    Phone: (555) 123-4567 <br>
    Email: info@sliceofheavenpizza.com <br>
    Address: 123 Pizza Lane, Foodie Town, FL 12345`;
    textDiv.appendChild(location);
    textDiv.classList.add("details");

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

function menu_item(variable, imageLink, name, description, price) {
    variable.classList.add("card");

    let cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardImg.style.backgroundImage = `url(${imageLink})`;
    cardImg.style.backgroundSize = "cover";
    cardImg.style.backgroundPosition = "center";

    let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    let item_name = document.createElement("p");
    item_name.classList.add("text-title");
    item_name.innerHTML = name;

    let item_desc = document.createElement("p");
    item_desc.classList.add("text-body");
    item_desc.innerHTML = description;

    cardInfo.appendChild(item_name);
    cardInfo.appendChild(item_desc);

    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    let priceElement = document.createElement("span");
    priceElement.classList.add("text-title");
    priceElement.innerHTML = `$${price}`; // Display the price

    cardFooter.appendChild(priceElement);

    variable.appendChild(cardImg);
    variable.appendChild(cardInfo);
    variable.appendChild(cardFooter);
}

function menu() {
    // Clear previous content
    homepageDiv.innerHTML = '';
    homepageDiv.style.display = "grid";
    homepageDiv.style.gridTemplate = "auto/1fr 1fr";
    homepageDiv.style.gap = "5px";
    
    // Menu item 1
    const item1 = document.createElement("div");
    const imageLink1 = "https://www.tasteandtellblog.com/wp-content/uploads/2023/07/Margherita-Pizza-1.jpg";
    const desc1 = "Classic simplicity at its finest with fresh mozzarella, ripe tomatoes, and a hint of basil.";
    menu_item(item1, imageLink1, "Margherita Pizza", desc1, 12.99);
    homepageDiv.appendChild(item1);

    // Menu item 2
    const item2 = document.createElement("div");
    const imageLink2 = "https://www.foodrepublic.com/img/gallery/how-to-buy-and-slice-pepperoni-for-perfect-crispy-cups/l-intro-1685460285.jpg";
    const desc2 = "A crowd favorite, loaded with crispy pepperoni slices and gooey mozzarella cheese.";
    menu_item(item2, imageLink2, "Pepperoni Explosion", desc2, 14.99);
    homepageDiv.appendChild(item2);

    // Menu item 3
    const item3 = document.createElement("div");
    const imageLink3 = "https://breadboozebacon.com/wp-content/uploads/2023/05/BBQ-Chicken-Pizza-IC-6-800x1200.jpg";
    const desc3 = "Tangy BBQ sauce topped with grilled chicken, red onions, and a blend of cheddar and mozzarella.";
    menu_item(item3, imageLink3, "BBQ Chicken Pizza", desc3, 13.99);
    homepageDiv.appendChild(item3);

    // Menu item 4: Vegetarian Delight
    const item4 = document.createElement("div");
    const imageLink4 = "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg";
    const desc4 = "A colorful mix of bell peppers, olives, mushrooms, onions, and spinach on a bed of tomato sauce.";
    menu_item(item4, imageLink4, "Vegetarian Delight", desc4, 11.99);
    homepageDiv.appendChild(item4);

    // Menu item 5: Meat Lovers Pizza
    const item5 = document.createElement("div");
    const imageLink5 = "https://www.queensleeappetit.com/wp-content/uploads/2019/02/Meat-Lovers-Pizza-5-1-480x480.jpg";
    const desc5 = "A hearty combination of pepperoni, sausage, bacon, and ham, piled high with mozzarella.";
    menu_item(item5, imageLink5, "Meat Lovers Pizza", desc5, 15.99);
    homepageDiv.appendChild(item5);

    // Menu item 6: Hawaiian Pizza
    const item6 = document.createElement("div");
    const imageLink6 = "https://static01.nyt.com/images/2023/03/29/multimedia/23HAMREX2-pineapple-ham-pizza-qwct/HAMREX2-pineapple-ham-pizza-qwct-superJumbo.jpg";
    const desc6 = "Sweet and savory with juicy pineapple, ham, and a sprinkle of mozzarella on a tomato base.";
    menu_item(item6, imageLink6, "Hawaiian Pizza", desc6, 12.49);
    homepageDiv.appendChild(item6);

    // Menu item 7: Spicy Buffalo Chicken
    const item7 = document.createElement("div");
    const imageLink7 = "https://hips.hearstapps.com/hmg-prod/images/190226-buffalo-chicken-pizza-370-1552084943.jpg";
    const desc7 = "Buffalo sauce, grilled chicken, red onions, and a drizzle of ranch dressing, topped with mozzarella.";
    menu_item(item7, imageLink7, "Spicy Buffalo Chicken", desc7, 13.49);
    homepageDiv.appendChild(item7);

    // Menu item 8: Four Cheese Pizza
    const item8 = document.createElement("div");
    const imageLink8 = "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg";
    const desc8 = "A rich blend of mozzarella, cheddar, parmesan, and gorgonzola, perfect for cheese lovers.";
    menu_item(item8, imageLink8, "Four Cheese Pizza", desc8, 14.49);
    homepageDiv.appendChild(item8);
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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const homebtn = document.getElementById('homeBtn');
const menubtn = document.getElementById('menuBtn');
const aboutbtn = document.getElementById('aboutBtn');

homebtn.style.color = "#ea5358";
(0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();

function render() {
    homebtn.addEventListener('click', () => {
        homebtn.style.color = "#ea5358";
        menubtn.style.color = "white";
        aboutbtn.style.color = "white";
        console.log("Home button clicked");
        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    menubtn.addEventListener('click', () => {
        menubtn.style.color = "#ea5358";
        homebtn.style.color = "white";
        aboutbtn.style.color = "white";
        console.log("Menu button clicked");
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    aboutbtn.addEventListener('click', () => {
        aboutbtn.style.color = "#ea5358";
        menubtn.style.color = "white";
        homebtn.style.color = "white";
        console.log("About button clicked");
        (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
}

// Call the render function to attach the event listeners
render();

/******/ })()
;
//# sourceMappingURL=main.js.map