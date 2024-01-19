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
    // console.log(vocabLeft);
  }, []);

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
/******/ 	__webpack_require__.h = () => ("039a5bf581dc339b33a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41OGMzNWZlNjI3ZmM4Y2YzMmRhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVyQixTQUFTSSxVQUFVQSxDQUFBQyxJQUFBLEVBQWE7RUFBQSxJQUFYQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN4QyxJQUFBQyxTQUFBLEdBQW9DTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF4Q0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUMvQixJQUFBSSxVQUFBLEdBQTBCWCwrQ0FBUSxDQUFDLENBQUM7SUFBQVksVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBN0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUF3QmYsK0NBQVEsQ0FBQyxDQUFDO0lBQUFnQixVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUEzQkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTs7RUFFcEI7RUFDQSxTQUFTRyxnQkFBZ0JBLENBQUNDLE1BQU0sRUFBRTtJQUM5QixPQUFPZixRQUFRLENBQUNnQixNQUFNLENBQUMsVUFBQUMsU0FBUztNQUFBLE9BQUlBLFNBQVMsQ0FBQ0YsTUFBTSxLQUFLQSxNQUFNO0lBQUEsRUFBQztFQUNwRTtFQUFDOztFQUVEO0VBQ0FuQixnREFBUyxDQUFDLFlBQU07SUFDWkksUUFBUSxJQUFJa0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsMENBQTBDLENBQUM7SUFDbkVkLFlBQVksQ0FBQztNQUFBLE9BQU1TLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUFBLEVBQUM7SUFDdkM7SUFDQTtJQUNBO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7RUFFTjs7RUFFQTtFQUNBLFNBQVNNLFlBQVlBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUlILEdBQUcsR0FBR0QsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDNUQ7RUFBQzs7RUFFRDs7RUFHQTtFQUNBO0VBQ0E7RUFDQTs7RUFHQSxvQkFBTzNCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNIQSwwREFBQTtJQUFJa0MsU0FBUyxFQUFDO0VBQVksR0FBQyxRQUFVLENBQUMsZUFDdENsQywwREFBQSxjQUFLLGVBQWEsRUFBQ1UsU0FBUyxDQUFDeUIsR0FBRyxDQUFDLFVBQUFaLFNBQVM7SUFBQSxPQUFJQSxTQUFTLENBQUNhLEdBQUc7RUFBQSxFQUFPLENBQUMsZUFDbkVwQywwREFBQSwyQkFDSUEsMERBQUE7SUFBR2tDLFNBQVMsRUFBQztFQUFrQixHQUFFcEIsS0FBUyxDQUFDLGVBQzNDZCwwREFBQTtJQUFHa0MsU0FBUyxFQUFDO0VBQWlCLEdBQUVoQixJQUFRLENBQ3ZDLENBQUMsZUFDTmxCLDBEQUFBLENBQUNHLGtEQUFTO0lBQUNrQyxhQUFhLEVBQUVuQjtFQUFLLENBQUMsQ0FDbEMsQ0FBQztBQUNQOzs7Ozs7OztVQy9DQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvRmxhc2hDYXJkMi5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFuc3dlckJveCBmcm9tIFwiLi9BbnN3ZXJCb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxhc2hDYXJkMih7dm9jYWJTZXR9KSB7XG4gICAgY29uc3QgWyB2b2NhYkxlZnQsIHNldFZvY2FiTGVmdCBdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmcm9udCwgc2V0RnJvbnRdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbYmFjaywgc2V0QmFja10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgLy8gRnVuY3Rpb24gZmlsdGVyaW5nIGZsYXNoY2FyZHMgb2YgZ2l2ZW4gc3RhdHVzIHdoZXJlIDAgc3RhbmRzIGZvciBjb21wbGV0ZWx5IG5ldyBvciB5ZXQgdG8gYmUgbGVhcm50IGFuZCA1IGZvciBtYXN0ZXJlZC5cbiAgICBmdW5jdGlvbiB2b2NhYlNldEZpbHRlcmVkKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gdm9jYWJTZXQuZmlsdGVyKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQuc3RhdHVzID09PSBzdGF0dXMpXG4gICAgfTtcblxuICAgIC8vIEN1cnJlbnRseSB0aGUgYXBwIGFsbG93cyB0byBzdHVkeSBvbmx5IHN0YXR1cyBcIjBcIiB2b2NhYnVsYXJ5LlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZvY2FiU2V0ICYmIGNvbnNvbGUubG9nKFwidm9jYWJTZXQgcmVjZWl2ZWQgYnkgRmxhc2hjYXJkIGNvbXBvbmVudFwiKTtcbiAgICAgICAgc2V0Vm9jYWJMZWZ0KCgpID0+IHZvY2FiU2V0RmlsdGVyZWQoMCkpO1xuICAgICAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB2b2NhYkxlZnRbcmFuZG9tTnVtYmVyKDAsIHZvY2FiTGVmdC5sZW5ndGgpXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFdvcmRQYWlyKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codm9jYWJMZWZ0KTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2b2NhYkxlZnQubWFwKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQubGV4KSk7XG5cbiAgICAvL0dldCBhIHJhbmRvbSB3b3JkcyBwYWlyIGZyb20gZGF0YWJhc2VcbiAgICBmdW5jdGlvbiByYW5kb21OdW1iZXIobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcblxuICAgIC8vIGNvbnN0IGN1cnJlbnRXb3JkUGFpciA9IHRlbXBEYXRhYmFzZS5jYXRlZ29yeS5yYW5kb21OdW1iZXIoKVxuXG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBzZXRGcm9udChjdXJyZW50V29yZFBhaXIubGV4KTtcbiAgICAvLyAgICAgc2V0QmFjayhjdXJyZW50V29yZFBhaXIuZGVmKTtcbiAgICAvLyB9LCBbXSk7XG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2V0X190aXRsZVwiPkNvbG9yczwvaDE+XG4gICAgICAgIDxkaXY+V29yZHMgbGVmdCA6IHt2b2NhYkxlZnQubWFwKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQubGV4KX08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fZnJvbnRcIj57ZnJvbnR9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19iYWNrXCI+e2JhY2t9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFuc3dlckJveCBjb3JyZWN0QW5zd2VyPXtiYWNrfS8+XG4gICAgPC8+XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDM5YTViZjU4MWRjMzM5YjMzYTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFuc3dlckJveCIsIkZsYXNoQ2FyZDIiLCJfcmVmIiwidm9jYWJTZXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2b2NhYkxlZnQiLCJzZXRWb2NhYkxlZnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZyb250Iiwic2V0RnJvbnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImJhY2siLCJzZXRCYWNrIiwidm9jYWJTZXRGaWx0ZXJlZCIsInN0YXR1cyIsImZpbHRlciIsImZsYXNoY2FyZCIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJsZXgiLCJjb3JyZWN0QW5zd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==