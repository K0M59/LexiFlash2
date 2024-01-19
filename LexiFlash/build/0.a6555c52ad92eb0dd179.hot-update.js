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
  console.log(_typeof(back.toString()));
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
/******/ 	__webpack_require__.h = () => ("cba2eae64b18ec453020")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNjU1NWM1MmFkOTJlYjBkZDE3OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFekIsU0FBU0UsU0FBU0EsQ0FBQUMsSUFBQSxFQUFTO0VBQUEsSUFBUEMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBQyxPQUFBLENBQVFILElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRXBDLElBQUFDLFNBQUEsR0FBNEJSLCtDQUFRLENBQUMsQ0FBQztJQUFBUyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkcsTUFBTSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUV4QixTQUFTSSxhQUFhQSxDQUFBLEVBQUc7SUFDckJULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUMzQjtFQUNBLFNBQVNTLGVBQWVBLENBQUEsRUFBRztJQUN2QlYsT0FBTyxDQUFDQyxHQUFHLHdDQUF3QyxDQUFDO0VBQ3hEO0VBQ0EsU0FBU1UsWUFBWUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ3JCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBR00sTUFBTSxDQUFDO0lBQ3hDQSxNQUFNLEtBQUtSLElBQUksR0FBR1UsYUFBYSxDQUFDLENBQUMsR0FBR0MsZUFBZSxDQUFDLENBQUM7RUFFekQ7RUFDQSxvQkFBT2YsMERBQUE7SUFBTW9CLFNBQVMsRUFBQztFQUFhLGdCQUNoQ3BCLDBEQUFBO0lBQU9xQixPQUFPLEVBQUM7RUFBUSxHQUFDLHlCQUE4QixDQUFDLGVBQ3ZEckIsMERBQUE7SUFBT3NCLElBQUksRUFBQyxNQUFNO0lBQUNGLFNBQVMsRUFBQyxRQUFRO0lBQUNHLEVBQUUsRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxDQUFDO01BQUEsT0FBS0osU0FBUyxDQUFDSSxDQUFDLENBQUNRLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDaEcxQiwwREFBQTtJQUFRc0IsSUFBSSxFQUFFLFFBQVM7SUFBQ0ssT0FBTyxFQUFFWDtFQUFhLEdBQUMsV0FBaUIsQ0FDOUQsQ0FBQztBQUNYOzs7Ozs7OztVQ3hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvQW5zd2VyQm94LmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbnN3ZXJCb3goe2JhY2t9KSB7XG4gICAgY29uc29sZS5sb2codHlwZW9mKGJhY2sudG9TdHJpbmcoKSkpO1xuXG4gICAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDb3JyZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3QhXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUluY29ycmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEluY29ycmVjdCAhIENvcnJlY3QgYW5zd2VyIGlzIGJsYWJsYX1gKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWQgYW5zd2VyIGlzIFwiICsgYW5zd2VyKTtcbiAgICAgICAgYW5zd2VyID09PSBiYWNrID8gaGFuZGxlQ29ycmVjdCgpIDogaGFuZGxlSW5jb3JyZWN0KClcblxuICAgIH1cbiAgICByZXR1cm4gPGZvcm0gY2xhc3NOYW1lPVwiYW5zd2VyX19ib3hcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIj5UeXBlIHlvdXIgYW5zd2VyIGJlbG93OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImFuc3dlclwiIGlkPVwiYW5zd2VyXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbnN3ZXIoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+UG90d2llcmR6PC9idXR0b24+XG4gICAgPC9mb3JtPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNiYTJlYWU2NGIxOGVjNDUzMDIwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbnN3ZXJCb3giLCJfcmVmIiwiYmFjayIsImNvbnNvbGUiLCJsb2ciLCJfdHlwZW9mIiwidG9TdHJpbmciLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJoYW5kbGVDb3JyZWN0IiwiaGFuZGxlSW5jb3JyZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=