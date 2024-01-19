"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashCard2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnswerBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function FlashCard2(_ref) {
  var vocabSet = _ref.vocabSet;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    vocabLeft = _useState2[0],
    setVocabLeft = _useState2[1];

  // Function filtering flashcards of given status where 0 stands for completely new or yet to be learnt and 5 for mastered.
  function vocabSetFiltered(status) {
    return vocabSet.filter(function (flashcard) {
      return flashcard.status === status;
    });
  }
  ;

  // Currently the app allows to study only status "0" vocabulary.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    vocabSet && console.log("vocabSet received to Flashcard component");
    setVocabLeft(function () {
      return vocabSetFiltered(0);
    });
  }, [vocabSet]);

  // console.log(vocabLeft.map(flashcard => flashcard.lex));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Words left : ", vocabLeft.map(function (flashcard) {
    return flashcard.lex;
  }));

  // const tempDatabase = {
  //     "colors": vocabSet,
  //     "numbers": [
  //         {
  //             "id": 1,
  //             "lex": "one",
  //             "def": "un",
  //             "status": 0
  //         },
  //         {
  //             "id": 2,
  //             "lex": "two",
  //             "def": "deux",
  //             "status": 0
  //         }
  //     ]
  // };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("colors"),
    _useState4 = _slicedToArray(_useState3, 2),
    category = _useState4[0],
    setCategory = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    front = _useState6[0],
    setFront = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    back = _useState8[0],
    setBack = _useState8[1];

  //Get a random words pair from database
  var randomNumber = function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var currentWordPair = vocabSet[randomNumber(0, vocabSet.length)];
  // const currentWordPair = tempDatabase.category.randomNumber()

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFront(currentWordPair.lex);
    setBack(currentWordPair.def);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "set__title"
  }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "flashcard__front"
  }, front), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "flashcard__back"
  }, back)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AnswerBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    correctAnswer: back
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7fcec4ae6f94d7d931b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsZUFDTi9CLDBEQUFBLENBQUNHLGtEQUFTO0lBQUN5QyxhQUFhLEVBQUViO0VBQUssQ0FBQyxDQUNsQyxDQUFDO0FBQ1A7Ozs7Ozs7O1VDakVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9GbGFzaENhcmQyLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5zd2VyQm94IGZyb20gXCIuL0Fuc3dlckJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFzaENhcmQyKHt2b2NhYlNldH0pIHtcbiAgICBjb25zdCBbIHZvY2FiTGVmdCwgc2V0Vm9jYWJMZWZ0IF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyBGdW5jdGlvbiBmaWx0ZXJpbmcgZmxhc2hjYXJkcyBvZiBnaXZlbiBzdGF0dXMgd2hlcmUgMCBzdGFuZHMgZm9yIGNvbXBsZXRlbHkgbmV3IG9yIHlldCB0byBiZSBsZWFybnQgYW5kIDUgZm9yIG1hc3RlcmVkLlxuICAgIGZ1bmN0aW9uIHZvY2FiU2V0RmlsdGVyZWQoc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB2b2NhYlNldC5maWx0ZXIoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5zdGF0dXMgPT09IHN0YXR1cylcbiAgICB9O1xuXG4gICAgLy8gQ3VycmVudGx5IHRoZSBhcHAgYWxsb3dzIHRvIHN0dWR5IG9ubHkgc3RhdHVzIFwiMFwiIHZvY2FidWxhcnkuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdm9jYWJTZXQgJiYgY29uc29sZS5sb2coXCJ2b2NhYlNldCByZWNlaXZlZCB0byBGbGFzaGNhcmQgY29tcG9uZW50XCIpXG4gICAgICAgIHNldFZvY2FiTGVmdCgoKSA9PiB2b2NhYlNldEZpbHRlcmVkKDApKTtcbiAgICB9LCBbdm9jYWJTZXRdKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHZvY2FiTGVmdC5tYXAoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5sZXgpKTtcblxuICAgIHJldHVybiA8ZGl2PldvcmRzIGxlZnQgOiB7dm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCl9PC9kaXY+XG5cbiAgICAvLyBjb25zdCB0ZW1wRGF0YWJhc2UgPSB7XG4gICAgLy8gICAgIFwiY29sb3JzXCI6IHZvY2FiU2V0LFxuICAgIC8vICAgICBcIm51bWJlcnNcIjogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIFwiaWRcIjogMSxcbiAgICAvLyAgICAgICAgICAgICBcImxleFwiOiBcIm9uZVwiLFxuICAgIC8vICAgICAgICAgICAgIFwiZGVmXCI6IFwidW5cIixcbiAgICAvLyAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAvLyAgICAgICAgICAgICBcImxleFwiOiBcInR3b1wiLFxuICAgIC8vICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGV1eFwiLFxuICAgIC8vICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgXVxuICAgIC8vIH07XG5cbiAgICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiY29sb3JzXCIpO1xuICAgIGNvbnN0IFtmcm9udCwgc2V0RnJvbnRdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbYmFjaywgc2V0QmFja10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgLy9HZXQgYSByYW5kb20gd29yZHMgcGFpciBmcm9tIGRhdGFiYXNlXG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcbiAgICBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB2b2NhYlNldFtyYW5kb21OdW1iZXIoMCwgdm9jYWJTZXQubGVuZ3RoKV07XG4gICAgLy8gY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlLmNhdGVnb3J5LnJhbmRvbU51bWJlcigpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEZyb250KGN1cnJlbnRXb3JkUGFpci5sZXgpO1xuICAgICAgICBzZXRCYWNrKGN1cnJlbnRXb3JkUGFpci5kZWYpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZXRfX3RpdGxlXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2Zyb250XCI+e2Zyb250fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fYmFja1wiPntiYWNrfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJCb3ggY29ycmVjdEFuc3dlcj17YmFja30vPlxuICAgIDwvPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU3ZmNlYzRhZTZmOTRkN2Q5MzFiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbnN3ZXJCb3giLCJGbGFzaENhcmQyIiwiX3JlZiIsInZvY2FiU2V0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwidm9jYWJMZWZ0Iiwic2V0Vm9jYWJMZWZ0Iiwidm9jYWJTZXRGaWx0ZXJlZCIsInN0YXR1cyIsImZpbHRlciIsImZsYXNoY2FyZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwibWFwIiwibGV4IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJmcm9udCIsInNldEZyb250IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJiYWNrIiwic2V0QmFjayIsInJhbmRvbU51bWJlciIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImN1cnJlbnRXb3JkUGFpciIsImxlbmd0aCIsImRlZiIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiY29ycmVjdEFuc3dlciJdLCJzb3VyY2VSb290IjoiIn0=