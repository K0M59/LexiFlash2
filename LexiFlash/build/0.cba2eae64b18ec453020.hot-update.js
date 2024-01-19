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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

function AnswerBox(_ref) {
  var back = _ref.back;
  console.log(_typeof(back));
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
/******/ 	__webpack_require__.h = () => ("2c2b9a3b85be3fdc4313")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYmEyZWFlNjRiMThlYzQ1MzAyMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFekIsU0FBU0UsU0FBU0EsQ0FBQUMsSUFBQSxFQUFTO0VBQUEsSUFBUEMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBQyxPQUFBLENBQVFILElBQUksQ0FBQyxDQUFDO0VBRXpCLElBQUFJLFNBQUEsR0FBNEJQLCtDQUFRLENBQUMsQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkcsTUFBTSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUV4QixTQUFTSSxhQUFhQSxDQUFBLEVBQUc7SUFDckJSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUMzQjtFQUNBLFNBQVNRLGVBQWVBLENBQUEsRUFBRztJQUN2QlQsT0FBTyxDQUFDQyxHQUFHLHdDQUF3QyxDQUFDO0VBQ3hEO0VBQ0EsU0FBU1MsWUFBWUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ3JCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCWixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBR0ssTUFBTSxDQUFDO0lBQ3hDQSxNQUFNLEtBQUtQLElBQUksR0FBR1MsYUFBYSxDQUFDLENBQUMsR0FBR0MsZUFBZSxDQUFDLENBQUM7RUFFekQ7RUFDQSxvQkFBT2QsMERBQUE7SUFBTW1CLFNBQVMsRUFBQztFQUFhLGdCQUNoQ25CLDBEQUFBO0lBQU9vQixPQUFPLEVBQUM7RUFBUSxHQUFDLHlCQUE4QixDQUFDLGVBQ3ZEcEIsMERBQUE7SUFBT3FCLElBQUksRUFBQyxNQUFNO0lBQUNGLFNBQVMsRUFBQyxRQUFRO0lBQUNHLEVBQUUsRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxDQUFDO01BQUEsT0FBS0osU0FBUyxDQUFDSSxDQUFDLENBQUNRLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDaEd6QiwwREFBQTtJQUFRcUIsSUFBSSxFQUFFLFFBQVM7SUFBQ0ssT0FBTyxFQUFFWDtFQUFhLEdBQUMsV0FBaUIsQ0FDOUQsQ0FBQztBQUNYOzs7Ozs7OztVQ3hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvQW5zd2VyQm94LmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbnN3ZXJCb3goe2JhY2t9KSB7XG4gICAgY29uc29sZS5sb2codHlwZW9mKGJhY2spKTtcblxuICAgIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29ycmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0IVwiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVJbmNvcnJlY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBJbmNvcnJlY3QgISBDb3JyZWN0IGFuc3dlciBpcyBibGFibGF9YClcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVkIGFuc3dlciBpcyBcIiArIGFuc3dlcik7XG4gICAgICAgIGFuc3dlciA9PT0gYmFjayA/IGhhbmRsZUNvcnJlY3QoKSA6IGhhbmRsZUluY29ycmVjdCgpXG5cbiAgICB9XG4gICAgcmV0dXJuIDxmb3JtIGNsYXNzTmFtZT1cImFuc3dlcl9fYm94XCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCI+VHlwZSB5b3VyIGFuc3dlciBiZWxvdzo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhbnN3ZXJcIiBpZD1cImFuc3dlclwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlBvdHdpZXJkejwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYzJiOWEzYjg1YmUzZmRjNDMxM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQW5zd2VyQm94IiwiX3JlZiIsImJhY2siLCJjb25zb2xlIiwibG9nIiwiX3R5cGVvZiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFuc3dlciIsInNldEFuc3dlciIsImhhbmRsZUNvcnJlY3QiLCJoYW5kbGVJbmNvcnJlY3QiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==