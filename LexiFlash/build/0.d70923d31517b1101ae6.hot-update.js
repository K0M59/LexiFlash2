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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  var tempDatabase = {
    "colors": vocabSet,
    "numbers": [{
      "id": 1,
      "lex": "one",
      "def": "un",
      "status": 0
    }, {
      "id": 2,
      "lex": "two",
      "def": "deux",
      "status": 0
    }]
  };
  var myArray = Object.values(vocab);
  console.log(myArray.length);
  console.log(Array.from(vocab));
  console.log(_typeof(vocabLeft));
  console.log(tempDatabase.colors.length);
  console.log(_typeof(tempDatabase.numbers));
  console.log(tempDatabase.numbers.length);
  console.log(Array.isArray(tempDatabase.colors)); // Check if it's an array
  console.log(tempDatabase.colors.length);
  console.log(Array.isArray(tempDatabase.numbers)); // Check if it's an array
  console.log(tempDatabase.numbers.length);
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
/******/ 	__webpack_require__.h = () => ("2ac22078a30c6e05f5cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ZsYXNoQ2FyZDIuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbnN3ZXJCb3ggZnJvbSBcIi4vQW5zd2VyQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsYXNoQ2FyZDIoe3ZvY2FiU2V0fSkge1xuICAgIGNvbnN0IFsgdm9jYWJMZWZ0LCBzZXRWb2NhYkxlZnQgXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIC8vIEZ1bmN0aW9uIGZpbHRlcmluZyBmbGFzaGNhcmRzIG9mIGdpdmVuIHN0YXR1cyB3aGVyZSAwIHN0YW5kcyBmb3IgY29tcGxldGVseSBuZXcgb3IgeWV0IHRvIGJlIGxlYXJudCBhbmQgNSBmb3IgbWFzdGVyZWQuXG4gICAgZnVuY3Rpb24gdm9jYWJTZXRGaWx0ZXJlZChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHZvY2FiU2V0LmZpbHRlcihmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLnN0YXR1cyA9PT0gc3RhdHVzKVxuICAgIH07XG5cbiAgICAvLyBDdXJyZW50bHkgdGhlIGFwcCBhbGxvd3MgdG8gc3R1ZHkgb25seSBzdGF0dXMgXCIwXCIgdm9jYWJ1bGFyeS5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRWb2NhYkxlZnQoKCkgPT4gdm9jYWJTZXRGaWx0ZXJlZCgwKSlcbiAgICB9LCBbdm9jYWJTZXRdKVxuXG4gICAgLy8gY29uc29sZS5sb2codm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCkpO1xuXG4gICAgcmV0dXJuIDxkaXY+V29yZHMgbGVmdCA6IHt2b2NhYkxlZnQubWFwKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQubGV4KX08L2Rpdj5cblxuICAgIGNvbnN0IHRlbXBEYXRhYmFzZSA9IHtcbiAgICAgICAgXCJjb2xvcnNcIjogdm9jYWJTZXQsXG4gICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwib25lXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJ1blwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidHdvXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJkZXV4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbiAgICBjb25zdCBteUFycmF5ID0gT2JqZWN0LnZhbHVlcyh2b2NhYik7XG4gICAgY29uc29sZS5sb2cobXlBcnJheS5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKEFycmF5LmZyb20odm9jYWIpKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2Ygdm9jYWJMZWZ0KTtcbiAgICBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UuY29sb3JzLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHRlbXBEYXRhYmFzZS5udW1iZXJzKTtcbiAgICBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UubnVtYmVycy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkodGVtcERhdGFiYXNlLmNvbG9ycykpOyAvLyBDaGVjayBpZiBpdCdzIGFuIGFycmF5XG4gICAgY29uc29sZS5sb2codGVtcERhdGFiYXNlLmNvbG9ycy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkodGVtcERhdGFiYXNlLm51bWJlcnMpKTsgLy8gQ2hlY2sgaWYgaXQncyBhbiBhcnJheVxuICAgIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5udW1iZXJzLmxlbmd0aCk7XG5cblxuXG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcImNvbG9yc1wiKTtcbiAgICBjb25zdCBbZnJvbnQsIHNldEZyb250XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2JhY2ssIHNldEJhY2tdID0gdXNlU3RhdGUoKTtcblxuICAgIC8vR2V0IGEgcmFuZG9tIHdvcmRzIHBhaXIgZnJvbSBkYXRhYmFzZVxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH07XG4gICAgY29uc3QgY3VycmVudFdvcmRQYWlyID0gdm9jYWJTZXRbcmFuZG9tTnVtYmVyKDAsIHZvY2FiU2V0Lmxlbmd0aCldO1xuICAgIC8vIGNvbnN0IGN1cnJlbnRXb3JkUGFpciA9IHRlbXBEYXRhYmFzZS5jYXRlZ29yeS5yYW5kb21OdW1iZXIoKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRGcm9udChjdXJyZW50V29yZFBhaXIubGV4KTtcbiAgICAgICAgc2V0QmFjayhjdXJyZW50V29yZFBhaXIuZGVmKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2V0X190aXRsZVwiPntjYXRlZ29yeX08L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19mcm9udFwiPntmcm9udH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2JhY2tcIj57YmFja308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QW5zd2VyQm94IGNvcnJlY3RBbnN3ZXI9e2JhY2t9Lz5cbiAgICA8Lz5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYWMyMjA3OGEzMGM2ZTA1ZjVjZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5zd2VyQm94IiwiRmxhc2hDYXJkMiIsIl9yZWYiLCJ2b2NhYlNldCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZvY2FiTGVmdCIsInNldFZvY2FiTGVmdCIsInZvY2FiU2V0RmlsdGVyZWQiLCJzdGF0dXMiLCJmaWx0ZXIiLCJmbGFzaGNhcmQiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwibGV4IiwidGVtcERhdGFiYXNlIiwibXlBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsInZvY2FiIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIkFycmF5IiwiZnJvbSIsIl90eXBlb2YiLCJjb2xvcnMiLCJudW1iZXJzIiwiaXNBcnJheSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZnJvbnQiLCJzZXRGcm9udCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiYmFjayIsInNldEJhY2siLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjdXJyZW50V29yZFBhaXIiLCJkZWYiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImNvcnJlY3RBbnN3ZXIiXSwic291cmNlUm9vdCI6IiJ9