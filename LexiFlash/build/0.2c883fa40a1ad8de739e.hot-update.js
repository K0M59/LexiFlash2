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

function AnswerBox() {
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
    console.log("Tyoed answer is " + answer);
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
/******/ 	__webpack_require__.h = () => ("d056848eeefa5aa6044d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYzg4M2ZhNDBhMWFkOGRlNzM5ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV6QixTQUFTRSxTQUFTQSxDQUFBLEVBQUc7RUFFaEMsSUFBQUMsU0FBQSxHQUE0QkYsK0NBQVEsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxNQUFNLEdBQUFGLFVBQUE7SUFBRUcsU0FBUyxHQUFBSCxVQUFBO0VBRXhCLFNBQVNJLGFBQWFBLENBQUEsRUFBRztJQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQzNCO0VBQ0EsU0FBU0MsZUFBZUEsQ0FBQSxFQUFHO0lBQ3ZCRixPQUFPLENBQUNDLEdBQUcsd0NBQXdDLENBQUM7RUFDeEQ7RUFDQSxTQUFTRSxZQUFZQSxDQUFDQyxDQUFDLEVBQUU7SUFDckJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixHQUFHSixNQUFNLENBQUM7RUFDNUM7RUFDQSxvQkFBT04sMERBQUE7SUFBTWdCLFNBQVMsRUFBQztFQUFhLGdCQUNoQ2hCLDBEQUFBO0lBQU9pQixPQUFPLEVBQUM7RUFBUSxHQUFDLHlCQUE4QixDQUFDLGVBQ3ZEakIsMERBQUE7SUFBT2tCLElBQUksRUFBQyxNQUFNO0lBQUNGLFNBQVMsRUFBQyxRQUFRO0lBQUNHLEVBQUUsRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxDQUFDO01BQUEsT0FBS04sU0FBUyxDQUFDTSxDQUFDLENBQUNRLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDaEd0QiwwREFBQTtJQUFRa0IsSUFBSSxFQUFFLFFBQVM7SUFBQ0ssT0FBTyxFQUFFWDtFQUFhLEdBQUMsV0FBaUIsQ0FDOUQsQ0FBQztBQUNYOzs7Ozs7OztVQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvQW5zd2VyQm94LmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbnN3ZXJCb3goKSB7XG5cbiAgICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvcnJlY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdCFcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlSW5jb3JyZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgSW5jb3JyZWN0ICEgQ29ycmVjdCBhbnN3ZXIgaXMgYmxhYmxhfWApXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUeW9lZCBhbnN3ZXIgaXMgXCIgKyBhbnN3ZXIpXG4gICAgfVxuICAgIHJldHVybiA8Zm9ybSBjbGFzc05hbWU9XCJhbnN3ZXJfX2JveFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFuc3dlclwiPlR5cGUgeW91ciBhbnN3ZXIgYmVsb3c6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYW5zd2VyXCIgaWQ9XCJhbnN3ZXJcIiBvbkNoYW5nZT17KGUpID0+IHNldEFuc3dlcihlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0gb25DbGljaz17aGFuZGxlU3VibWl0fT5Qb3R3aWVyZHo8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDA1Njg0OGVlZWZhNWFhNjA0NGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFuc3dlckJveCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFuc3dlciIsInNldEFuc3dlciIsImhhbmRsZUNvcnJlY3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSW5jb3JyZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=