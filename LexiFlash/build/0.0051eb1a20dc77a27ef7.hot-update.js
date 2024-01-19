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
/******/ 	__webpack_require__.h = () => ("7647aa753ff4e6a2d14f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FDbEMsQ0FBQztBQUNQOzs7Ozs7OztVQ25FQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvRmxhc2hDYXJkMi5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFuc3dlckJveCBmcm9tIFwiLi9BbnN3ZXJCb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxhc2hDYXJkMih7dm9jYWJTZXR9KSB7XG4gICAgY29uc3QgWyB2b2NhYkxlZnQsIHNldFZvY2FiTGVmdCBdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgLy8gRnVuY3Rpb24gZmlsdGVyaW5nIGZsYXNoY2FyZHMgb2YgZ2l2ZW4gc3RhdHVzIHdoZXJlIDAgc3RhbmRzIGZvciBjb21wbGV0ZWx5IG5ldyBvciB5ZXQgdG8gYmUgbGVhcm50IGFuZCA1IGZvciBtYXN0ZXJlZC5cbiAgICBmdW5jdGlvbiB2b2NhYlNldEZpbHRlcmVkKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gdm9jYWJTZXQuZmlsdGVyKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQuc3RhdHVzID09PSBzdGF0dXMpXG4gICAgfTtcblxuICAgIC8vIEN1cnJlbnRseSB0aGUgYXBwIGFsbG93cyB0byBzdHVkeSBvbmx5IHN0YXR1cyBcIjBcIiB2b2NhYnVsYXJ5LlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFZvY2FiTGVmdCgoKSA9PiB2b2NhYlNldEZpbHRlcmVkKDApKVxuICAgIH0sIFt2b2NhYlNldF0pO1xuXG4gICAgLy8gY29uc29sZS5sb2codm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCkpO1xuXG4gICAgcmV0dXJuIDxkaXY+V29yZHMgbGVmdCA6IHt2b2NhYkxlZnQubWFwKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQubGV4KX08L2Rpdj5cblxuICAgIC8vIGNvbnN0IHRlbXBEYXRhYmFzZSA9IHtcbiAgICAvLyAgICAgXCJjb2xvcnNcIjogdm9jYWJTZXQsXG4gICAgLy8gICAgIFwibnVtYmVyc1wiOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgIC8vICAgICAgICAgICAgIFwibGV4XCI6IFwib25lXCIsXG4gICAgLy8gICAgICAgICAgICAgXCJkZWZcIjogXCJ1blwiLFxuICAgIC8vICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgIC8vICAgICAgICAgICAgIFwibGV4XCI6IFwidHdvXCIsXG4gICAgLy8gICAgICAgICAgICAgXCJkZWZcIjogXCJkZXV4XCIsXG4gICAgLy8gICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICBdXG4gICAgLy8gfTtcblxuXG5cblxuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJjb2xvcnNcIik7XG4gICAgY29uc3QgW2Zyb250LCBzZXRGcm9udF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtiYWNrLCBzZXRCYWNrXSA9IHVzZVN0YXRlKCk7XG5cbiAgICAvL0dldCBhIHJhbmRvbSB3b3JkcyBwYWlyIGZyb20gZGF0YWJhc2VcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuICAgIGNvbnN0IGN1cnJlbnRXb3JkUGFpciA9IHZvY2FiU2V0W3JhbmRvbU51bWJlcigwLCB2b2NhYlNldC5sZW5ndGgpXTtcbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB0ZW1wRGF0YWJhc2UuY2F0ZWdvcnkucmFuZG9tTnVtYmVyKClcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0RnJvbnQoY3VycmVudFdvcmRQYWlyLmxleCk7XG4gICAgICAgIHNldEJhY2soY3VycmVudFdvcmRQYWlyLmRlZik7XG4gICAgfSwgW10pO1xuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNldF9fdGl0bGVcIj57Y2F0ZWdvcnl9PC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fZnJvbnRcIj57ZnJvbnR9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19iYWNrXCI+e2JhY2t9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFuc3dlckJveCBjb3JyZWN0QW5zd2VyPXtiYWNrfS8+XG4gICAgPC8+XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzY0N2FhNzUzZmY0ZTZhMmQxNGZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFuc3dlckJveCIsIkZsYXNoQ2FyZDIiLCJfcmVmIiwidm9jYWJTZXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2b2NhYkxlZnQiLCJzZXRWb2NhYkxlZnQiLCJ2b2NhYlNldEZpbHRlcmVkIiwic3RhdHVzIiwiZmlsdGVyIiwiZmxhc2hjYXJkIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImxleCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZnJvbnQiLCJzZXRGcm9udCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiYmFjayIsInNldEJhY2siLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjdXJyZW50V29yZFBhaXIiLCJsZW5ndGgiLCJkZWYiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImNvcnJlY3RBbnN3ZXIiXSwic291cmNlUm9vdCI6IiJ9