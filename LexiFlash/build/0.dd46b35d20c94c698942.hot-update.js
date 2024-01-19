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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a5d0e54e1074e46361e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZDQ2YjM1ZDIwYzk0YzY5ODk0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV6QixTQUFTRSxTQUFTQSxDQUFBQyxJQUFBLEVBQVM7RUFBQSxJQUFQQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtFQUVuQyxJQUFBQyxTQUFBLEdBQTRCSiwrQ0FBUSxDQUFDLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0JHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEIsU0FBU0ksYUFBYUEsQ0FBQSxFQUFHO0lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFDM0I7RUFDQSxTQUFTQyxlQUFlQSxDQUFBLEVBQUc7SUFDdkJGLE9BQU8sQ0FBQ0MsR0FBRyx3Q0FBd0MsQ0FBQztFQUN4RDtFQUNBLFNBQVNFLFlBQVlBLENBQUNDLENBQUMsRUFBRTtJQUNyQkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEdBQUdKLE1BQU0sQ0FBQztJQUN4Q0EsTUFBTSxLQUFLSixJQUFJLEdBQUdNLGFBQWEsQ0FBQyxDQUFDLEdBQUdHLGVBQWUsQ0FBQyxDQUFDO0VBRXpEO0VBQ0Esb0JBQU9iLDBEQUFBO0lBQU1rQixTQUFTLEVBQUM7RUFBYSxnQkFDaENsQiwwREFBQTtJQUFPbUIsT0FBTyxFQUFDO0VBQVEsR0FBQyx5QkFBOEIsQ0FBQyxlQUN2RG5CLDBEQUFBO0lBQU9vQixJQUFJLEVBQUMsTUFBTTtJQUFDRixTQUFTLEVBQUMsUUFBUTtJQUFDRyxFQUFFLEVBQUMsUUFBUTtJQUFDQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ1AsQ0FBQztNQUFBLE9BQUtOLFNBQVMsQ0FBQ00sQ0FBQyxDQUFDUSxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUFDLGVBQ2hHeEIsMERBQUE7SUFBUW9CLElBQUksRUFBRSxRQUFTO0lBQUNLLE9BQU8sRUFBRVg7RUFBYSxHQUFDLFdBQWlCLENBQzlELENBQUM7QUFDWDs7Ozs7Ozs7VUN2QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0Fuc3dlckJveC5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5zd2VyQm94KHtiYWNrfSkge1xuXG4gICAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDb3JyZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3QhXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUluY29ycmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEluY29ycmVjdCAhIENvcnJlY3QgYW5zd2VyIGlzIGJsYWJsYX1gKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWQgYW5zd2VyIGlzIFwiICsgYW5zd2VyKTtcbiAgICAgICAgYW5zd2VyID09PSBiYWNrID8gaGFuZGxlQ29ycmVjdCgpIDogaGFuZGxlSW5jb3JyZWN0KClcblxuICAgIH1cbiAgICByZXR1cm4gPGZvcm0gY2xhc3NOYW1lPVwiYW5zd2VyX19ib3hcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIj5UeXBlIHlvdXIgYW5zd2VyIGJlbG93OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImFuc3dlclwiIGlkPVwiYW5zd2VyXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbnN3ZXIoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+UG90d2llcmR6PC9idXR0b24+XG4gICAgPC9mb3JtPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE1ZDBlNTRlMTA3NGU0NjM2MWU0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbnN3ZXJCb3giLCJfcmVmIiwiYmFjayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFuc3dlciIsInNldEFuc3dlciIsImhhbmRsZUNvcnJlY3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSW5jb3JyZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=