"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 44:
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    front = _useState4[0],
    setFront = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    back = _useState6[0],
    setBack = _useState6[1];

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
    // const currentWordPair = vocabLeft[randomNumber(0, vocabLeft.length)];
    // console.log(currentWordPair);
    console.log(vocabLeft[0]);
  }, [vocabSet]);

  // console.log(vocabLeft.map(flashcard => flashcard.lex));

  //Get a random words pair from database
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  ;

  // const currentWordPair = tempDatabase.category.randomNumber()

  // useEffect(() => {
  //     setFront(currentWordPair.lex);
  //     setBack(currentWordPair.def);
  // }, []);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "set__title"
  }, "Colors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Words left : ", vocabLeft.map(function (flashcard) {
    return flashcard.lex;
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
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
/******/ 	__webpack_require__.h = () => ("745fbaa99e2258c8d9f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ODU1MWEzY2ViNmUzZGY1YjIxNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVyQixTQUFTSSxVQUFVQSxDQUFBQyxJQUFBLEVBQWE7RUFBQSxJQUFYQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN4QyxJQUFBQyxTQUFBLEdBQW9DTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF4Q0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUMvQixJQUFBSSxVQUFBLEdBQTBCWCwrQ0FBUSxDQUFDLENBQUM7SUFBQVksVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBN0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUF3QmYsK0NBQVEsQ0FBQyxDQUFDO0lBQUFnQixVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUEzQkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTs7RUFFcEI7RUFDQSxTQUFTRyxnQkFBZ0JBLENBQUNDLE1BQU0sRUFBRTtJQUM5QixPQUFPZixRQUFRLENBQUNnQixNQUFNLENBQUMsVUFBQUMsU0FBUztNQUFBLE9BQUlBLFNBQVMsQ0FBQ0YsTUFBTSxLQUFLQSxNQUFNO0lBQUEsRUFBQztFQUNwRTtFQUFDOztFQUVEO0VBQ0FuQixnREFBUyxDQUFDLFlBQU07SUFDWkksUUFBUSxJQUFJa0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsMENBQTBDLENBQUM7SUFDbkVkLFlBQVksQ0FBQztNQUFBLE9BQU1TLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUFBLEVBQUM7SUFDdkM7SUFDQTtJQUNBSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2YsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdCLENBQUMsRUFBRSxDQUFDSixRQUFRLENBQUMsQ0FBQzs7RUFFZDs7RUFFQTtFQUNBLFNBQVNvQixZQUFZQSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJSCxHQUFHLEdBQUdELEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxHQUFHO0VBQzVEO0VBQUM7O0VBRUQ7O0VBR0E7RUFDQTtFQUNBO0VBQ0E7O0VBR0Esb0JBQU8zQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSEEsMERBQUE7SUFBSWtDLFNBQVMsRUFBQztFQUFZLEdBQUMsUUFBVSxDQUFDLGVBQ3RDbEMsMERBQUEsY0FBSyxlQUFhLEVBQUNVLFNBQVMsQ0FBQ3lCLEdBQUcsQ0FBQyxVQUFBWixTQUFTO0lBQUEsT0FBSUEsU0FBUyxDQUFDYSxHQUFHO0VBQUEsRUFBTyxDQUFDLGVBQ25FcEMsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQUdrQyxTQUFTLEVBQUM7RUFBa0IsR0FBRXBCLEtBQVMsQ0FBQyxlQUMzQ2QsMERBQUE7SUFBR2tDLFNBQVMsRUFBQztFQUFpQixHQUFFaEIsSUFBUSxDQUN2QyxDQUFDLGVBQ05sQiwwREFBQSxDQUFDRyxrREFBUztJQUFDa0MsYUFBYSxFQUFFbkI7RUFBSyxDQUFDLENBQ2xDLENBQUM7QUFDUDs7Ozs7Ozs7VUMvQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ZsYXNoQ2FyZDIuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbnN3ZXJCb3ggZnJvbSBcIi4vQW5zd2VyQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsYXNoQ2FyZDIoe3ZvY2FiU2V0fSkge1xuICAgIGNvbnN0IFsgdm9jYWJMZWZ0LCBzZXRWb2NhYkxlZnQgXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZnJvbnQsIHNldEZyb250XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2JhY2ssIHNldEJhY2tdID0gdXNlU3RhdGUoKTtcblxuICAgIC8vIEZ1bmN0aW9uIGZpbHRlcmluZyBmbGFzaGNhcmRzIG9mIGdpdmVuIHN0YXR1cyB3aGVyZSAwIHN0YW5kcyBmb3IgY29tcGxldGVseSBuZXcgb3IgeWV0IHRvIGJlIGxlYXJudCBhbmQgNSBmb3IgbWFzdGVyZWQuXG4gICAgZnVuY3Rpb24gdm9jYWJTZXRGaWx0ZXJlZChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHZvY2FiU2V0LmZpbHRlcihmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLnN0YXR1cyA9PT0gc3RhdHVzKVxuICAgIH07XG5cbiAgICAvLyBDdXJyZW50bHkgdGhlIGFwcCBhbGxvd3MgdG8gc3R1ZHkgb25seSBzdGF0dXMgXCIwXCIgdm9jYWJ1bGFyeS5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2b2NhYlNldCAmJiBjb25zb2xlLmxvZyhcInZvY2FiU2V0IHJlY2VpdmVkIGJ5IEZsYXNoY2FyZCBjb21wb25lbnRcIik7XG4gICAgICAgIHNldFZvY2FiTGVmdCgoKSA9PiB2b2NhYlNldEZpbHRlcmVkKDApKTtcbiAgICAgICAgLy8gY29uc3QgY3VycmVudFdvcmRQYWlyID0gdm9jYWJMZWZ0W3JhbmRvbU51bWJlcigwLCB2b2NhYkxlZnQubGVuZ3RoKV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRXb3JkUGFpcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHZvY2FiTGVmdFswXSlcbiAgICB9LCBbdm9jYWJTZXRdKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHZvY2FiTGVmdC5tYXAoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5sZXgpKTtcblxuICAgIC8vR2V0IGEgcmFuZG9tIHdvcmRzIHBhaXIgZnJvbSBkYXRhYmFzZVxuICAgIGZ1bmN0aW9uIHJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuXG4gICAgLy8gY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlLmNhdGVnb3J5LnJhbmRvbU51bWJlcigpXG5cblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIHNldEZyb250KGN1cnJlbnRXb3JkUGFpci5sZXgpO1xuICAgIC8vICAgICBzZXRCYWNrKGN1cnJlbnRXb3JkUGFpci5kZWYpO1xuICAgIC8vIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZXRfX3RpdGxlXCI+Q29sb3JzPC9oMT5cbiAgICAgICAgPGRpdj5Xb3JkcyBsZWZ0IDoge3ZvY2FiTGVmdC5tYXAoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5sZXgpfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19mcm9udFwiPntmcm9udH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2JhY2tcIj57YmFja308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QW5zd2VyQm94IGNvcnJlY3RBbnN3ZXI9e2JhY2t9Lz5cbiAgICA8Lz5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NDVmYmFhOTllMjI1OGM4ZDlmNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5zd2VyQm94IiwiRmxhc2hDYXJkMiIsIl9yZWYiLCJ2b2NhYlNldCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZvY2FiTGVmdCIsInNldFZvY2FiTGVmdCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZnJvbnQiLCJzZXRGcm9udCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYmFjayIsInNldEJhY2siLCJ2b2NhYlNldEZpbHRlcmVkIiwic3RhdHVzIiwiZmlsdGVyIiwiZmxhc2hjYXJkIiwiY29uc29sZSIsImxvZyIsInJhbmRvbU51bWJlciIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsImxleCIsImNvcnJlY3RBbnN3ZXIiXSwic291cmNlUm9vdCI6IiJ9