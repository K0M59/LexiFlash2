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
  var correctAnswer = _ref.correctAnswer;
  console.log(_typeof(correctAnswer));
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
/******/ 	__webpack_require__.h = () => ("8b9c84d37931f99e9766")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NjQ2NDNiNWI2NjdkZDVkOGJiYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFekIsU0FBU0UsU0FBU0EsQ0FBQUMsSUFBQSxFQUFrQjtFQUFBLElBQWhCQyxhQUFhLEdBQUFELElBQUEsQ0FBYkMsYUFBYTtFQUM1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUFDLE9BQUEsQ0FBUUgsYUFBYSxDQUFDLENBQUM7RUFFbEMsSUFBQUksU0FBQSxHQUE0QlAsK0NBQVEsQ0FBQyxDQUFDO0lBQUFRLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxNQUFNLEdBQUFGLFVBQUE7SUFBRUcsU0FBUyxHQUFBSCxVQUFBO0VBRXhCLFNBQVNJLGFBQWFBLENBQUEsRUFBRztJQUNyQlIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQzNCO0VBQ0EsU0FBU1EsZUFBZUEsQ0FBQSxFQUFHO0lBQ3ZCVCxPQUFPLENBQUNDLEdBQUcsd0NBQXdDLENBQUM7RUFDeEQ7RUFDQSxTQUFTUyxZQUFZQSxDQUFDQyxDQUFDLEVBQUU7SUFDckJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixHQUFHSyxNQUFNLENBQUM7SUFDeENBLE1BQU0sS0FBS1AsYUFBYSxHQUFHUyxhQUFhLENBQUMsQ0FBQyxHQUFHQyxlQUFlLENBQUMsQ0FBQztFQUVsRTtFQUNBLG9CQUFPZCwwREFBQTtJQUFNbUIsU0FBUyxFQUFDO0VBQWEsZ0JBQ2hDbkIsMERBQUE7SUFBT29CLE9BQU8sRUFBQztFQUFRLEdBQUMseUJBQThCLENBQUMsZUFDdkRwQiwwREFBQTtJQUFPcUIsSUFBSSxFQUFDLE1BQU07SUFBQ0YsU0FBUyxFQUFDLFFBQVE7SUFBQ0csRUFBRSxFQUFDLFFBQVE7SUFBQ0MsUUFBUSxFQUFFLFNBQUFBLFNBQUNQLENBQUM7TUFBQSxPQUFLSixTQUFTLENBQUNJLENBQUMsQ0FBQ1EsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQTtFQUFDLENBQUUsQ0FBQyxlQUNoR3pCLDBEQUFBO0lBQVFxQixJQUFJLEVBQUUsUUFBUztJQUFDSyxPQUFPLEVBQUVYO0VBQWEsR0FBQyxXQUFpQixDQUM5RCxDQUFDO0FBQ1g7Ozs7Ozs7O1VDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9BbnN3ZXJCb3guanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuc3dlckJveCh7Y29ycmVjdEFuc3dlcn0pIHtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YoY29ycmVjdEFuc3dlcikpO1xuXG4gICAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDb3JyZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3QhXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUluY29ycmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEluY29ycmVjdCAhIENvcnJlY3QgYW5zd2VyIGlzIGJsYWJsYX1gKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWQgYW5zd2VyIGlzIFwiICsgYW5zd2VyKTtcbiAgICAgICAgYW5zd2VyID09PSBjb3JyZWN0QW5zd2VyID8gaGFuZGxlQ29ycmVjdCgpIDogaGFuZGxlSW5jb3JyZWN0KClcblxuICAgIH1cbiAgICByZXR1cm4gPGZvcm0gY2xhc3NOYW1lPVwiYW5zd2VyX19ib3hcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIj5UeXBlIHlvdXIgYW5zd2VyIGJlbG93OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImFuc3dlclwiIGlkPVwiYW5zd2VyXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbnN3ZXIoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+UG90d2llcmR6PC9idXR0b24+XG4gICAgPC9mb3JtPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhiOWM4NGQzNzkzMWY5OWU5NzY2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbnN3ZXJCb3giLCJfcmVmIiwiY29ycmVjdEFuc3dlciIsImNvbnNvbGUiLCJsb2ciLCJfdHlwZW9mIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiaGFuZGxlQ29ycmVjdCIsImhhbmRsZUluY29ycmVjdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9