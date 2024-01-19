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
    console.log(vocabSet);
    setVocabLeft();
    // vocabSet.map(el => setVocabLeft(prevState => prevState.push(el)));
    // setVocabLeft(() => vocabSetFiltered(0));
    // const currentWordPair = vocabLeft[randomNumber(0, vocabLeft.length)];
    // console.log(currentWordPair);
    console.log(vocabLeft);
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
  }, "Colors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
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
/******/ 	__webpack_require__.h = () => ("2ac4dcee308f92bb924c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYmQ1YTAwMmMyN2Q5MWMwN2U1MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVyQixTQUFTSSxVQUFVQSxDQUFBQyxJQUFBLEVBQWE7RUFBQSxJQUFYQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN4QyxJQUFBQyxTQUFBLEdBQWtDTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF2Q0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUM5QixJQUFBSSxVQUFBLEdBQTBCWCwrQ0FBUSxDQUFDLENBQUM7SUFBQVksVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBN0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUF3QmYsK0NBQVEsQ0FBQyxDQUFDO0lBQUFnQixVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUEzQkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTs7RUFFcEI7RUFDQSxTQUFTRyxnQkFBZ0JBLENBQUNDLE1BQU0sRUFBRTtJQUM5QixPQUFPZixRQUFRLENBQUNnQixNQUFNLENBQUMsVUFBQUMsU0FBUztNQUFBLE9BQUlBLFNBQVMsQ0FBQ0YsTUFBTSxLQUFLQSxNQUFNO0lBQUEsRUFBQztFQUNwRTtFQUFDOztFQUVEO0VBQ0FuQixnREFBUyxDQUFDLFlBQU07SUFDWkksUUFBUSxJQUFJa0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsMENBQTBDLENBQUM7SUFDbkVELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkIsUUFBUSxDQUFDO0lBQ3JCSyxZQUFZLENBQUMsQ0FBQztJQUNkO0lBQ0E7SUFDQTtJQUNBO0lBQ0FhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixTQUFTLENBQUM7RUFDMUIsQ0FBQyxFQUFFLENBQUNKLFFBQVEsQ0FBQyxDQUFDOztFQUVkOztFQUVBO0VBQ0EsU0FBU29CLFlBQVlBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUlILEdBQUcsR0FBR0QsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDNUQ7RUFBQzs7RUFFRDs7RUFHQTtFQUNBO0VBQ0E7RUFDQTs7RUFHQSxvQkFBTzNCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNIQSwwREFBQTtJQUFJa0MsU0FBUyxFQUFDO0VBQVksR0FBQyxRQUFVLENBQUMsZUFFdENsQywwREFBQSwyQkFDSUEsMERBQUE7SUFBR2tDLFNBQVMsRUFBQztFQUFrQixHQUFFcEIsS0FBUyxDQUFDLGVBQzNDZCwwREFBQTtJQUFHa0MsU0FBUyxFQUFDO0VBQWlCLEdBQUVoQixJQUFRLENBQ3ZDLENBQUMsZUFDTmxCLDBEQUFBLENBQUNHLGtEQUFTO0lBQUNnQyxhQUFhLEVBQUVqQjtFQUFLLENBQUMsQ0FDbEMsQ0FBQztBQUNQOzs7Ozs7OztVQ2xEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvRmxhc2hDYXJkMi5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFuc3dlckJveCBmcm9tIFwiLi9BbnN3ZXJCb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxhc2hDYXJkMih7dm9jYWJTZXR9KSB7XG4gICAgY29uc3QgW3ZvY2FiTGVmdCwgc2V0Vm9jYWJMZWZ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZnJvbnQsIHNldEZyb250XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2JhY2ssIHNldEJhY2tdID0gdXNlU3RhdGUoKTtcblxuICAgIC8vIEZ1bmN0aW9uIGZpbHRlcmluZyBmbGFzaGNhcmRzIG9mIGdpdmVuIHN0YXR1cyB3aGVyZSAwIHN0YW5kcyBmb3IgY29tcGxldGVseSBuZXcgb3IgeWV0IHRvIGJlIGxlYXJudCBhbmQgNSBmb3IgbWFzdGVyZWQuXG4gICAgZnVuY3Rpb24gdm9jYWJTZXRGaWx0ZXJlZChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHZvY2FiU2V0LmZpbHRlcihmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLnN0YXR1cyA9PT0gc3RhdHVzKVxuICAgIH07XG5cbiAgICAvLyBDdXJyZW50bHkgdGhlIGFwcCBhbGxvd3MgdG8gc3R1ZHkgb25seSBzdGF0dXMgXCIwXCIgdm9jYWJ1bGFyeS5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2b2NhYlNldCAmJiBjb25zb2xlLmxvZyhcInZvY2FiU2V0IHJlY2VpdmVkIGJ5IEZsYXNoY2FyZCBjb21wb25lbnRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHZvY2FiU2V0KTtcbiAgICAgICAgc2V0Vm9jYWJMZWZ0KCk7XG4gICAgICAgIC8vIHZvY2FiU2V0Lm1hcChlbCA9PiBzZXRWb2NhYkxlZnQocHJldlN0YXRlID0+IHByZXZTdGF0ZS5wdXNoKGVsKSkpO1xuICAgICAgICAvLyBzZXRWb2NhYkxlZnQoKCkgPT4gdm9jYWJTZXRGaWx0ZXJlZCgwKSk7XG4gICAgICAgIC8vIGNvbnN0IGN1cnJlbnRXb3JkUGFpciA9IHZvY2FiTGVmdFtyYW5kb21OdW1iZXIoMCwgdm9jYWJMZWZ0Lmxlbmd0aCldO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50V29yZFBhaXIpO1xuICAgICAgICBjb25zb2xlLmxvZyh2b2NhYkxlZnQpO1xuICAgIH0sIFt2b2NhYlNldF0pO1xuXG4gICAgLy8gY29uc29sZS5sb2codm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCkpO1xuXG4gICAgLy9HZXQgYSByYW5kb20gd29yZHMgcGFpciBmcm9tIGRhdGFiYXNlXG4gICAgZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH07XG5cbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB0ZW1wRGF0YWJhc2UuY2F0ZWdvcnkucmFuZG9tTnVtYmVyKClcblxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc2V0RnJvbnQoY3VycmVudFdvcmRQYWlyLmxleCk7XG4gICAgLy8gICAgIHNldEJhY2soY3VycmVudFdvcmRQYWlyLmRlZik7XG4gICAgLy8gfSwgW10pO1xuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNldF9fdGl0bGVcIj5Db2xvcnM8L2gxPlxuICAgICAgICB7Lyo8ZGl2PldvcmRzIGxlZnQgOiB7dm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCl9PC9kaXY+Ki99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2Zyb250XCI+e2Zyb250fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fYmFja1wiPntiYWNrfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJCb3ggY29ycmVjdEFuc3dlcj17YmFja30vPlxuICAgIDwvPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJhYzRkY2VlMzA4ZjkyYmI5MjRjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbnN3ZXJCb3giLCJGbGFzaENhcmQyIiwiX3JlZiIsInZvY2FiU2V0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwidm9jYWJMZWZ0Iiwic2V0Vm9jYWJMZWZ0IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJmcm9udCIsInNldEZyb250IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJiYWNrIiwic2V0QmFjayIsInZvY2FiU2V0RmlsdGVyZWQiLCJzdGF0dXMiLCJmaWx0ZXIiLCJmbGFzaGNhcmQiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tTnVtYmVyIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiY29ycmVjdEFuc3dlciJdLCJzb3VyY2VSb290IjoiIn0=