"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 34:
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
  console.log(vocabSet);
  var tempDatabase = {
    "colors": vocabSet,
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
/******/ 	__webpack_require__.h = () => ("9ca859947d1a725e64b8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MjA0NjgxZWJkZTdmNTk3ZTNkMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVyQixTQUFTSSxVQUFVQSxDQUFBQyxJQUFBLEVBQWE7RUFBQSxJQUFYQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN4Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztFQUVyQixJQUFNRyxZQUFZLEdBQUc7SUFDakIsUUFBUSxFQUFFSCxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxDQUNQO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxJQUFJO01BQ1gsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQztFQUVULENBQUM7RUFFRCxJQUFBSSxTQUFBLEdBQWdDVCwrQ0FBUSxDQUFDLFFBQVEsQ0FBQztJQUFBVSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEzQ0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFBSSxVQUFBLEdBQTBCZCwrQ0FBUSxDQUFDLENBQUM7SUFBQWUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBN0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUF3QmxCLCtDQUFRLENBQUMsQ0FBQztJQUFBbUIsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBM0JFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7O0VBRXBCO0VBQ0EsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQVlDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3BDLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUlILEdBQUcsR0FBR0QsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDNUQsQ0FBQztFQUNELElBQU1LLGVBQWUsR0FBR3BCLFlBQVksQ0FBQ0ksUUFBUSxDQUFDLENBQUNVLFlBQVksQ0FBQyxDQUFDLEVBQUVkLFlBQVksQ0FBQ0ksUUFBUSxDQUFDLENBQUNpQixNQUFNLENBQUMsQ0FBQztFQUM5Rjs7RUFHQTVCLGdEQUFTLENBQUMsWUFBTTtJQUNaZ0IsUUFBUSxDQUFDVyxlQUFlLENBQUNFLEdBQUcsQ0FBQztJQUM3QlQsT0FBTyxDQUFDTyxlQUFlLENBQUNHLEdBQUcsQ0FBQztFQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBR04sb0JBQU9oQywwREFBQSxDQUFBQSx1REFBQSxxQkFDSEEsMERBQUE7SUFBSW1DLFNBQVMsRUFBQztFQUFZLEdBQUV0QixRQUFhLENBQUMsZUFDMUNiLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFHbUMsU0FBUyxFQUFDO0VBQWtCLEdBQUVsQixLQUFTLENBQUMsZUFDM0NqQiwwREFBQTtJQUFHbUMsU0FBUyxFQUFDO0VBQWlCLEdBQUVkLElBQVEsQ0FDdkMsQ0FBQyxlQUNOckIsMERBQUEsQ0FBQ0csa0RBQVM7SUFBQ2lDLGFBQWEsRUFBRWY7RUFBSyxDQUFDLENBQ2xDLENBQUM7QUFDUDs7Ozs7Ozs7VUNsREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ZsYXNoQ2FyZDIuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbnN3ZXJCb3ggZnJvbSBcIi4vQW5zd2VyQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsYXNoQ2FyZDIoe3ZvY2FiU2V0fSkge1xuICAgIGNvbnNvbGUubG9nKHZvY2FiU2V0KTtcblxuICAgIGNvbnN0IHRlbXBEYXRhYmFzZSA9IHtcbiAgICAgICAgXCJjb2xvcnNcIjogdm9jYWJTZXQsXG4gICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwib25lXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJ1blwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidHdvXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJkZXV4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcblxuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJjb2xvcnNcIik7XG4gICAgY29uc3QgW2Zyb250LCBzZXRGcm9udF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtiYWNrLCBzZXRCYWNrXSA9IHVzZVN0YXRlKCk7XG5cbiAgICAvL0dldCBhIHJhbmRvbSB3b3JkcyBwYWlyIGZyb20gZGF0YWJhc2VcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuICAgIGNvbnN0IGN1cnJlbnRXb3JkUGFpciA9IHRlbXBEYXRhYmFzZVtjYXRlZ29yeV1bcmFuZG9tTnVtYmVyKDAsIHRlbXBEYXRhYmFzZVtjYXRlZ29yeV0ubGVuZ3RoKV07XG4gICAgLy8gY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlLmNhdGVnb3J5LnJhbmRvbU51bWJlcigpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEZyb250KGN1cnJlbnRXb3JkUGFpci5sZXgpO1xuICAgICAgICBzZXRCYWNrKGN1cnJlbnRXb3JkUGFpci5kZWYpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZXRfX3RpdGxlXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2Zyb250XCI+e2Zyb250fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fYmFja1wiPntiYWNrfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJCb3ggY29ycmVjdEFuc3dlcj17YmFja30vPlxuICAgIDwvPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjljYTg1OTk0N2QxYTcyNWU2NGI4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbnN3ZXJCb3giLCJGbGFzaENhcmQyIiwiX3JlZiIsInZvY2FiU2V0IiwiY29uc29sZSIsImxvZyIsInRlbXBEYXRhYmFzZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZyb250Iiwic2V0RnJvbnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImJhY2siLCJzZXRCYWNrIiwicmFuZG9tTnVtYmVyIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY3VycmVudFdvcmRQYWlyIiwibGVuZ3RoIiwibGV4IiwiZGVmIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiY29ycmVjdEFuc3dlciJdLCJzb3VyY2VSb290IjoiIn0=