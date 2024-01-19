"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _src_assets_data_Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _src_components_elements_FlashCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);




var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The coding environment is ready for magic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_elements_FlashCard__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/components/elements/AnswerBox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function FlashCard() {
  var tempDatabase = {
    "colors": [{
      "id": 1,
      "lex": "white",
      "def": "blanc",
      "status": 0
    }, {
      "id": 2,
      "lex": "black",
      "def": "noir",
      "status": 0
    }, {
      "id": 3,
      "lex": "red",
      "def": "rouge",
      "status": 0
    }, {
      "id": 4,
      "lex": "yellow",
      "def": "jaune",
      "status": 0
    }, {
      "id": 5,
      "lex": "blue",
      "def": "bleu",
      "status": 0
    }, {
      "id": 6,
      "lex": "green",
      "def": "vert",
      "status": 0
    }, {
      "id": 7,
      "lex": "pink",
      "def": "rose",
      "status": 0
    }, {
      "id": 8,
      "lex": "brown",
      "def": "marron",
      "status": 0
    }, {
      "id": 9,
      "lex": "grey",
      "def": "gris",
      "status": 0
    }, {
      "id": 10,
      "lex": "orange",
      "def": "orange",
      "status": 0
    }],
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
    }, {
      "id": 3,
      "lex": "three",
      "def": "trois",
      "status": 0
    }, {
      "id": 4,
      "lex": "four",
      "def": "quatre",
      "status": 0
    }, {
      "id": 5,
      "lex": "five",
      "def": "cinque",
      "status": 0
    }, {
      "id": 6,
      "lex": "six",
      "def": "six",
      "status": 0
    }, {
      "id": 7,
      "lex": "seven",
      "def": "sept",
      "status": 0
    }, {
      "id": 8,
      "lex": "eight",
      "def": "huit",
      "status": 0
    }, {
      "id": 9,
      "lex": "nine",
      "def": "neuf",
      "status": 0
    }, {
      "id": 10,
      "lex": "ten",
      "def": "dix",
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
  }, back)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/components/elements/AnswerBox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9422498d08076ce5fdf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41OTU5NmQyMTRhNGViOGJkZDIyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNMO0FBQ0s7QUFDVTtBQUU3RCxJQUFNTSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdOLDREQUFVLENBQUNHLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0hBLDBEQUFBLGFBQUksMkNBQTZDLENBQUMsZUFFbERBLDBEQUFBLENBQUNLLDBFQUFTLE1BQUUsQ0FDZCxDQUFDO0FBQ1A7QUFFQUksSUFBSSxDQUFDSSxNQUFNLGVBQUNiLDBEQUFBLENBQUNVLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEIrQjtBQUNVO0FBRTlDLFNBQVNMLFNBQVNBLENBQUEsRUFBRztFQUVoQyxJQUFNVSxZQUFZLEdBQUc7SUFDakIsUUFBUSxFQUFFLENBQ047TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxPQUFPO01BQ2QsS0FBSyxFQUFFLE9BQU87TUFDZCxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxPQUFPO01BQ2QsS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLE9BQU87TUFDZCxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxRQUFRO01BQ2YsS0FBSyxFQUFFLE9BQU87TUFDZCxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxPQUFPO01BQ2QsS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxPQUFPO01BQ2QsS0FBSyxFQUFFLFFBQVE7TUFDZixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsRUFBRTtNQUNSLEtBQUssRUFBRSxRQUFRO01BQ2YsS0FBSyxFQUFFLFFBQVE7TUFDZixRQUFRLEVBQUU7SUFDZCxDQUFDLENBQ0o7SUFDRCxTQUFTLEVBQUUsQ0FDUDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsSUFBSTtNQUNYLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE9BQU87TUFDZCxLQUFLLEVBQUUsT0FBTztNQUNkLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsUUFBUTtNQUNmLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsUUFBUTtNQUNmLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsS0FBSztNQUNaLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE9BQU87TUFDZCxLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE9BQU87TUFDZCxLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxFQUFFO01BQ1IsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsS0FBSztNQUNaLFFBQVEsRUFBRTtJQUNkLENBQUM7RUFFVCxDQUFDO0VBRUQsSUFBQUMsU0FBQSxHQUFnQ2YsK0NBQVEsQ0FBQyxRQUFRLENBQUM7SUFBQWdCLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBMEJwQiwrQ0FBUSxDQUFDLENBQUM7SUFBQXFCLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQTdCRSxLQUFLLEdBQUFELFVBQUE7SUFBRUUsUUFBUSxHQUFBRixVQUFBO0VBQ3RCLElBQUFHLFVBQUEsR0FBd0J4QiwrQ0FBUSxDQUFDLENBQUM7SUFBQXlCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQTNCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBOztFQUVwQjtFQUNBLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFZQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNwQyxPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJSCxHQUFHLEdBQUdELEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxHQUFHO0VBQzVELENBQUM7RUFDRCxJQUFNSyxlQUFlLEdBQUdwQixZQUFZLENBQUNJLFFBQVEsQ0FBQyxDQUFDVSxZQUFZLENBQUMsQ0FBQyxFQUFFZCxZQUFZLENBQUNJLFFBQVEsQ0FBQyxDQUFDaUIsTUFBTSxDQUFDLENBQUM7RUFDOUY7O0VBR0FsQyxnREFBUyxDQUFDLFlBQU07SUFDWnNCLFFBQVEsQ0FBQ1csZUFBZSxDQUFDRSxHQUFHLENBQUM7SUFDN0JULE9BQU8sQ0FBQ08sZUFBZSxDQUFDRyxHQUFHLENBQUM7RUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUFPdEMsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0hBLDBEQUFBO0lBQUl1QyxTQUFTLEVBQUM7RUFBWSxHQUFFcEIsUUFBYSxDQUFDLGVBQzFDbkIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQUd1QyxTQUFTLEVBQUM7RUFBa0IsR0FBRWhCLEtBQVMsQ0FBQyxlQUMzQ3ZCLDBEQUFBO0lBQUd1QyxTQUFTLEVBQUM7RUFBaUIsR0FBRVosSUFBUSxDQUN2QyxDQUFDLGVBQ04zQiwwREFBQSxDQUFDYyxtS0FBUyxNQUFFLENBQ2QsQ0FBQztBQUNQOzs7Ozs7OztVQzdKQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvanMvYXBwLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvRmxhc2hDYXJkLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vc3JjL2Fzc2V0cy9kYXRhL0RhdGFiYXNlXCI7XG5pbXBvcnQgRmxhc2hDYXJkIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9GbGFzaENhcmRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMT5UaGUgY29kaW5nIGVudmlyb25tZW50IGlzIHJlYWR5IGZvciBtYWdpYzwvaDE+XG4gICAgICAgIHsvKjxEYXRhYmFzZSAvPiovfVxuICAgICAgICA8Rmxhc2hDYXJkIC8+XG4gICAgPC8+XG59XG5cbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbnN3ZXJCb3ggZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0Fuc3dlckJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFzaENhcmQoKSB7XG5cbiAgICBjb25zdCB0ZW1wRGF0YWJhc2UgPSB7XG4gICAgICAgIFwiY29sb3JzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiYmxhbmNcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJub2lyXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInJvdWdlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImphdW5lXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDUsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJibHVlXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJibGV1XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJncmVlblwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwidmVydFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA3LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwicGlua1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwicm9zZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA4LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiYnJvd25cIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcIm1hcnJvblwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA5LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZ3Jpc1wiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwidW5cIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInR3b1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGV1eFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidGhyZWVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInRyb2lzXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJmb3VyXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJxdWF0cmVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcImZpdmVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImNpbnF1ZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwic2l4XCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJzaXhcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNyxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInNldmVuXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJzZXB0XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDgsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJlaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiaHVpdFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA5LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwibmluZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwibmV1ZlwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInRlblwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGl4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcImNvbG9yc1wiKTtcbiAgICBjb25zdCBbZnJvbnQsIHNldEZyb250XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2JhY2ssIHNldEJhY2tdID0gdXNlU3RhdGUoKTtcblxuICAgIC8vR2V0IGEgcmFuZG9tIHdvcmRzIHBhaXIgZnJvbSBkYXRhYmFzZVxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH07XG4gICAgY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlW2NhdGVnb3J5XVtyYW5kb21OdW1iZXIoMCwgdGVtcERhdGFiYXNlW2NhdGVnb3J5XS5sZW5ndGgpXTtcbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB0ZW1wRGF0YWJhc2UuY2F0ZWdvcnkucmFuZG9tTnVtYmVyKClcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0RnJvbnQoY3VycmVudFdvcmRQYWlyLmxleCk7XG4gICAgICAgIHNldEJhY2soY3VycmVudFdvcmRQYWlyLmRlZik7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZXRfX3RpdGxlXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2Zyb250XCI+e2Zyb250fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fYmFja1wiPntiYWNrfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJCb3ggLz5cbiAgICA8Lz5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOTQyMjQ5OGQwODA3NmNlNWZkZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsIkRhdGFiYXNlIiwiRmxhc2hDYXJkIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJyZW5kZXIiLCJBbnN3ZXJCb3giLCJ0ZW1wRGF0YWJhc2UiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJmcm9udCIsInNldEZyb250IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJiYWNrIiwic2V0QmFjayIsInJhbmRvbU51bWJlciIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImN1cnJlbnRXb3JkUGFpciIsImxlbmd0aCIsImxleCIsImRlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=