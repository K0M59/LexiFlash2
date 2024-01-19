"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnswerBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AnswerBox(_ref) {
  var back = _ref.back;
  console.log(back);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    answer = _useState2[0],
    setAnswer = _useState2[1];
  function handleCorrect() {
    console.log("correct!");
  }
  function handleIncorrect() {
    console.log("Incorrect ! Correct answer is blabla}");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Typed answer is " + answer);
    answer === back ? handleCorrect() : handleIncorrect();
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "answer__box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "answer"
  }, "Type your answer below:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "answer",
    id: "answer",
    onChange: function onChange(e) {
      return setAnswer(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleSubmit
  }, "Potwierdz"));
}

/***/ }),

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashCard)
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


function FlashCard() {
  var tempDatabase = {
    "colors": [{
      "id": 1,
      "lex": "white",
      "def": "blanc",
      "status": 0
    }, {
      "id": 2,
      "lex": "black",
      "def": "noir",
      "status": 0
    }, {
      "id": 3,
      "lex": "red",
      "def": "rouge",
      "status": 0
    }, {
      "id": 4,
      "lex": "yellow",
      "def": "jaune",
      "status": 0
    }, {
      "id": 5,
      "lex": "blue",
      "def": "bleu",
      "status": 0
    }, {
      "id": 6,
      "lex": "green",
      "def": "vert",
      "status": 0
    }, {
      "id": 7,
      "lex": "pink",
      "def": "rose",
      "status": 0
    }, {
      "id": 8,
      "lex": "brown",
      "def": "marron",
      "status": 0
    }, {
      "id": 9,
      "lex": "grey",
      "def": "gris",
      "status": 0
    }, {
      "id": 10,
      "lex": "orange",
      "def": "orange",
      "status": 0
    }],
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
    }, {
      "id": 3,
      "lex": "three",
      "def": "trois",
      "status": 0
    }, {
      "id": 4,
      "lex": "four",
      "def": "quatre",
      "status": 0
    }, {
      "id": 5,
      "lex": "five",
      "def": "cinque",
      "status": 0
    }, {
      "id": 6,
      "lex": "six",
      "def": "six",
      "status": 0
    }, {
      "id": 7,
      "lex": "seven",
      "def": "sept",
      "status": 0
    }, {
      "id": 8,
      "lex": "eight",
      "def": "huit",
      "status": 0
    }, {
      "id": 9,
      "lex": "nine",
      "def": "neuf",
      "status": 0
    }, {
      "id": 10,
      "lex": "ten",
      "def": "dix",
      "status": 0
    }]
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("colors"),
    _useState2 = _slicedToArray(_useState, 2),
    category = _useState2[0],
    setCategory = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    front = _useState4[0],
    setFront = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    back = _useState6[0],
    setBack = _useState6[1];

  //Get a random words pair from database
  var randomNumber = function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var currentWordPair = tempDatabase[category][randomNumber(0, tempDatabase[category].length)];
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
/******/ 	__webpack_require__.h = () => ("abd40e330b7cc18ea597")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsUUFBUTtNQUNmLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxFQUFFO01BQ1IsS0FBSyxFQUFFLFFBQVE7TUFDZixLQUFLLEVBQUUsUUFBUTtNQUNmLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FDSjtJQUNELFNBQVMsRUFBRSxDQUNQO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxJQUFJO01BQ1gsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxPQUFPO01BQ2QsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxRQUFRO01BQ2YsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxRQUFRO01BQ2YsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxLQUFLO01BQ1osUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLEVBQUU7TUFDUixLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxLQUFLO01BQ1osUUFBUSxFQUFFO0lBQ2QsQ0FBQztFQUVULENBQUM7RUFFRCxJQUFBckIsU0FBQSxHQUFnQ04sK0NBQVEsQ0FBQyxRQUFRLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NzQixRQUFRLEdBQUFyQixVQUFBO0lBQUVzQixXQUFXLEdBQUF0QixVQUFBO0VBQzVCLElBQUF1QixVQUFBLEdBQTBCOUIsK0NBQVEsQ0FBQyxDQUFDO0lBQUErQixVQUFBLEdBQUF2QixjQUFBLENBQUFzQixVQUFBO0lBQTdCRSxLQUFLLEdBQUFELFVBQUE7SUFBRUUsUUFBUSxHQUFBRixVQUFBO0VBQ3RCLElBQUFHLFVBQUEsR0FBd0JsQywrQ0FBUSxDQUFDLENBQUM7SUFBQW1DLFVBQUEsR0FBQTNCLGNBQUEsQ0FBQTBCLFVBQUE7SUFBM0IvQixJQUFJLEdBQUFnQyxVQUFBO0lBQUVDLE9BQU8sR0FBQUQsVUFBQTs7RUFFcEI7RUFDQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBWUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDcEMsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSUgsR0FBRyxHQUFHRCxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0EsR0FBRztFQUM1RCxDQUFDO0VBQ0QsSUFBTUssZUFBZSxHQUFHaEIsWUFBWSxDQUFDQyxRQUFRLENBQUMsQ0FBQ1MsWUFBWSxDQUFDLENBQUMsRUFBRVYsWUFBWSxDQUFDQyxRQUFRLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQyxDQUFDO0VBQzlGOztFQUdBbkIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pRLFFBQVEsQ0FBQ1UsZUFBZSxDQUFDRSxHQUFHLENBQUM7SUFDN0JULE9BQU8sQ0FBQ08sZUFBZSxDQUFDRyxHQUFHLENBQUM7RUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUFPL0MsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0hBLDBEQUFBO0lBQUlrQixTQUFTLEVBQUM7RUFBWSxHQUFFVyxRQUFhLENBQUMsZUFDMUM3QiwwREFBQSwyQkFDSUEsMERBQUE7SUFBR2tCLFNBQVMsRUFBQztFQUFrQixHQUFFZSxLQUFTLENBQUMsZUFDM0NqQywwREFBQTtJQUFHa0IsU0FBUyxFQUFDO0VBQWlCLEdBQUVkLElBQVEsQ0FDdkMsQ0FBQyxlQUNOSiwwREFBQSxDQUFDRSxrREFBUztJQUFDK0MsYUFBYSxFQUFFN0M7RUFBSyxDQUFDLENBQ2xDLENBQUM7QUFDUDs7Ozs7Ozs7VUM3SkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0Fuc3dlckJveC5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ZsYXNoQ2FyZC5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5zd2VyQm94KHtiYWNrfSkge1xuICAgIGNvbnNvbGUubG9nKGJhY2spO1xuXG4gICAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDb3JyZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3QhXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUluY29ycmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEluY29ycmVjdCAhIENvcnJlY3QgYW5zd2VyIGlzIGJsYWJsYX1gKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWQgYW5zd2VyIGlzIFwiICsgYW5zd2VyKTtcbiAgICAgICAgYW5zd2VyID09PSBiYWNrID8gaGFuZGxlQ29ycmVjdCgpIDogaGFuZGxlSW5jb3JyZWN0KClcblxuICAgIH1cbiAgICByZXR1cm4gPGZvcm0gY2xhc3NOYW1lPVwiYW5zd2VyX19ib3hcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIj5UeXBlIHlvdXIgYW5zd2VyIGJlbG93OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImFuc3dlclwiIGlkPVwiYW5zd2VyXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbnN3ZXIoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+UG90d2llcmR6PC9idXR0b24+XG4gICAgPC9mb3JtPlxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5zd2VyQm94IGZyb20gXCIuL0Fuc3dlckJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFzaENhcmQoKSB7XG5cbiAgICBjb25zdCB0ZW1wRGF0YWJhc2UgPSB7XG4gICAgICAgIFwiY29sb3JzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiYmxhbmNcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJub2lyXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInJvdWdlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImphdW5lXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDUsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJibHVlXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJibGV1XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJncmVlblwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwidmVydFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA3LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwicGlua1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwicm9zZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA4LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiYnJvd25cIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcIm1hcnJvblwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA5LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZ3Jpc1wiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwidW5cIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInR3b1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGV1eFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidGhyZWVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInRyb2lzXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJmb3VyXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJxdWF0cmVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcImZpdmVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImNpbnF1ZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwic2l4XCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJzaXhcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNyxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInNldmVuXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJzZXB0XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDgsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJlaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiaHVpdFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA5LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwibmluZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwibmV1ZlwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInRlblwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGl4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcImNvbG9yc1wiKTtcbiAgICBjb25zdCBbZnJvbnQsIHNldEZyb250XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2JhY2ssIHNldEJhY2tdID0gdXNlU3RhdGUoKTtcblxuICAgIC8vR2V0IGEgcmFuZG9tIHdvcmRzIHBhaXIgZnJvbSBkYXRhYmFzZVxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH07XG4gICAgY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlW2NhdGVnb3J5XVtyYW5kb21OdW1iZXIoMCwgdGVtcERhdGFiYXNlW2NhdGVnb3J5XS5sZW5ndGgpXTtcbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB0ZW1wRGF0YWJhc2UuY2F0ZWdvcnkucmFuZG9tTnVtYmVyKClcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0RnJvbnQoY3VycmVudFdvcmRQYWlyLmxleCk7XG4gICAgICAgIHNldEJhY2soY3VycmVudFdvcmRQYWlyLmRlZik7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZXRfX3RpdGxlXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2Zyb250XCI+e2Zyb250fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fYmFja1wiPntiYWNrfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJCb3ggY29ycmVjdEFuc3dlcj17YmFja30vPlxuICAgIDwvPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFiZDQwZTMzMGI3Y2MxOGVhNTk3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbnN3ZXJCb3giLCJfcmVmIiwiYmFjayIsImNvbnNvbGUiLCJsb2ciLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJoYW5kbGVDb3JyZWN0IiwiaGFuZGxlSW5jb3JyZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayIsInVzZUVmZmVjdCIsIkZsYXNoQ2FyZCIsInRlbXBEYXRhYmFzZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZyb250Iiwic2V0RnJvbnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInNldEJhY2siLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjdXJyZW50V29yZFBhaXIiLCJsZW5ndGgiLCJsZXgiLCJkZWYiLCJGcmFnbWVudCIsImNvcnJlY3RBbnN3ZXIiXSwic291cmNlUm9vdCI6IiJ9