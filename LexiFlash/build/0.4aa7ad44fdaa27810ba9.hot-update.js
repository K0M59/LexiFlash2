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
    vocabSet && console.log("vocabSet received by Flashcard component");
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
  var currentWordPair = vocabLeft[randomNumber(0, vocabLeft.length)];
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
/******/ 	__webpack_require__.h = () => ("745daba6dd616ea37e63")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsZUFDTi9CLDBEQUFBLENBQUNHLGtEQUFTO0lBQUN5QyxhQUFhLEVBQUViO0VBQUssQ0FBQyxDQUNsQyxDQUFDO0FBQ1A7Ozs7Ozs7O1VDakVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9GbGFzaENhcmQyLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5zd2VyQm94IGZyb20gXCIuL0Fuc3dlckJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFzaENhcmQyKHt2b2NhYlNldH0pIHtcbiAgICBjb25zdCBbIHZvY2FiTGVmdCwgc2V0Vm9jYWJMZWZ0IF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyBGdW5jdGlvbiBmaWx0ZXJpbmcgZmxhc2hjYXJkcyBvZiBnaXZlbiBzdGF0dXMgd2hlcmUgMCBzdGFuZHMgZm9yIGNvbXBsZXRlbHkgbmV3IG9yIHlldCB0byBiZSBsZWFybnQgYW5kIDUgZm9yIG1hc3RlcmVkLlxuICAgIGZ1bmN0aW9uIHZvY2FiU2V0RmlsdGVyZWQoc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB2b2NhYlNldC5maWx0ZXIoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5zdGF0dXMgPT09IHN0YXR1cylcbiAgICB9O1xuXG4gICAgLy8gQ3VycmVudGx5IHRoZSBhcHAgYWxsb3dzIHRvIHN0dWR5IG9ubHkgc3RhdHVzIFwiMFwiIHZvY2FidWxhcnkuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdm9jYWJTZXQgJiYgY29uc29sZS5sb2coXCJ2b2NhYlNldCByZWNlaXZlZCBieSBGbGFzaGNhcmQgY29tcG9uZW50XCIpXG4gICAgICAgIHNldFZvY2FiTGVmdCgoKSA9PiB2b2NhYlNldEZpbHRlcmVkKDApKTtcbiAgICB9LCBbdm9jYWJTZXRdKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHZvY2FiTGVmdC5tYXAoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5sZXgpKTtcblxuICAgIHJldHVybiA8ZGl2PldvcmRzIGxlZnQgOiB7dm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCl9PC9kaXY+XG5cbiAgICAvLyBjb25zdCB0ZW1wRGF0YWJhc2UgPSB7XG4gICAgLy8gICAgIFwiY29sb3JzXCI6IHZvY2FiU2V0LFxuICAgIC8vICAgICBcIm51bWJlcnNcIjogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIFwiaWRcIjogMSxcbiAgICAvLyAgICAgICAgICAgICBcImxleFwiOiBcIm9uZVwiLFxuICAgIC8vICAgICAgICAgICAgIFwiZGVmXCI6IFwidW5cIixcbiAgICAvLyAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAvLyAgICAgICAgICAgICBcImxleFwiOiBcInR3b1wiLFxuICAgIC8vICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGV1eFwiLFxuICAgIC8vICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgXVxuICAgIC8vIH07XG5cbiAgICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiY29sb3JzXCIpO1xuICAgIGNvbnN0IFtmcm9udCwgc2V0RnJvbnRdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbYmFjaywgc2V0QmFja10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgLy9HZXQgYSByYW5kb20gd29yZHMgcGFpciBmcm9tIGRhdGFiYXNlXG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcbiAgICBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB2b2NhYkxlZnRbcmFuZG9tTnVtYmVyKDAsIHZvY2FiTGVmdC5sZW5ndGgpXTtcbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB0ZW1wRGF0YWJhc2UuY2F0ZWdvcnkucmFuZG9tTnVtYmVyKClcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0RnJvbnQoY3VycmVudFdvcmRQYWlyLmxleCk7XG4gICAgICAgIHNldEJhY2soY3VycmVudFdvcmRQYWlyLmRlZik7XG4gICAgfSwgW10pO1xuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNldF9fdGl0bGVcIj57Y2F0ZWdvcnl9PC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fZnJvbnRcIj57ZnJvbnR9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19iYWNrXCI+e2JhY2t9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFuc3dlckJveCBjb3JyZWN0QW5zd2VyPXtiYWNrfS8+XG4gICAgPC8+XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzQ1ZGFiYTZkZDYxNmVhMzdlNjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFuc3dlckJveCIsIkZsYXNoQ2FyZDIiLCJfcmVmIiwidm9jYWJTZXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2b2NhYkxlZnQiLCJzZXRWb2NhYkxlZnQiLCJ2b2NhYlNldEZpbHRlcmVkIiwic3RhdHVzIiwiZmlsdGVyIiwiZmxhc2hjYXJkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJsZXgiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImZyb250Iiwic2V0RnJvbnQiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImJhY2siLCJzZXRCYWNrIiwicmFuZG9tTnVtYmVyIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY3VycmVudFdvcmRQYWlyIiwibGVuZ3RoIiwiZGVmIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJjb3JyZWN0QW5zd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==