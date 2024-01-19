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
  var correctAnswer = _ref.correctAnswer;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    answer = _useState2[0],
    setAnswer = _useState2[1];
  function handleCorrect() {
    console.log("correct!");
  }
  function handleIncorrect() {
    console.log("Incorrect ! Correct answer is blabla");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Typed answer is " + answer);
    answer === correctAnswer ? handleCorrect() : handleIncorrect();
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
/******/ 	__webpack_require__.h = () => ("567673466ced848d36ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MGEyYmNlZjg4YWM3NGE5NWRmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV6QixTQUFTRSxTQUFTQSxDQUFBQyxJQUFBLEVBQWtCO0VBQUEsSUFBaEJDLGFBQWEsR0FBQUQsSUFBQSxDQUFiQyxhQUFhO0VBRTVDLElBQUFDLFNBQUEsR0FBNEJKLCtDQUFRLENBQUMsQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkcsTUFBTSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUV4QixTQUFTSSxhQUFhQSxDQUFBLEVBQUc7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUMzQjtFQUNBLFNBQVNDLGVBQWVBLENBQUEsRUFBRztJQUN2QkYsT0FBTyxDQUFDQyxHQUFHLHVDQUF1QyxDQUFDO0VBQ3ZEO0VBQ0EsU0FBU0UsWUFBWUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ3JCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBR0osTUFBTSxDQUFDO0lBQ3hDQSxNQUFNLEtBQUtKLGFBQWEsR0FBR00sYUFBYSxDQUFDLENBQUMsR0FBR0csZUFBZSxDQUFDLENBQUM7RUFFbEU7RUFDQSxvQkFBT2IsMERBQUE7SUFBTWtCLFNBQVMsRUFBQztFQUFhLGdCQUNoQ2xCLDBEQUFBO0lBQU9tQixPQUFPLEVBQUM7RUFBUSxHQUFDLHlCQUE4QixDQUFDLGVBQ3ZEbkIsMERBQUE7SUFBT29CLElBQUksRUFBQyxNQUFNO0lBQUNGLFNBQVMsRUFBQyxRQUFRO0lBQUNHLEVBQUUsRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxDQUFDO01BQUEsT0FBS04sU0FBUyxDQUFDTSxDQUFDLENBQUNRLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDaEd4QiwwREFBQTtJQUFRb0IsSUFBSSxFQUFFLFFBQVM7SUFBQ0ssT0FBTyxFQUFFWDtFQUFhLEdBQUMsV0FBaUIsQ0FDOUQsQ0FBQztBQUNYOzs7Ozs7OztVQ3ZCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvQW5zd2VyQm94LmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbnN3ZXJCb3goe2NvcnJlY3RBbnN3ZXJ9KSB7XG5cbiAgICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvcnJlY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdCFcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlSW5jb3JyZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgSW5jb3JyZWN0ICEgQ29ycmVjdCBhbnN3ZXIgaXMgYmxhYmxhYClcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVkIGFuc3dlciBpcyBcIiArIGFuc3dlcik7XG4gICAgICAgIGFuc3dlciA9PT0gY29ycmVjdEFuc3dlciA/IGhhbmRsZUNvcnJlY3QoKSA6IGhhbmRsZUluY29ycmVjdCgpXG5cbiAgICB9XG4gICAgcmV0dXJuIDxmb3JtIGNsYXNzTmFtZT1cImFuc3dlcl9fYm94XCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCI+VHlwZSB5b3VyIGFuc3dlciBiZWxvdzo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhbnN3ZXJcIiBpZD1cImFuc3dlclwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlBvdHdpZXJkejwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1Njc2NzM0NjZjZWQ4NDhkMzZhYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQW5zd2VyQm94IiwiX3JlZiIsImNvcnJlY3RBbnN3ZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJoYW5kbGVDb3JyZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUluY29ycmVjdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9