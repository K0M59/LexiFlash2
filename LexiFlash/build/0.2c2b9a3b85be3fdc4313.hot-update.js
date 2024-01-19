"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnswerBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  console.log(_typeof(back));
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
/******/ 	__webpack_require__.h = () => ("864643b5b667dd5d8bbb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYzJiOWEzYjg1YmUzZmRjNDMxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFFckIsU0FBU0ksU0FBU0EsQ0FBQSxFQUFHO0VBRWhDLElBQU1DLFlBQVksR0FBRztJQUNqQixRQUFRLEVBQUUsQ0FDTjtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE9BQU87TUFDZCxLQUFLLEVBQUUsT0FBTztNQUNkLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE9BQU87TUFDZCxLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsT0FBTztNQUNkLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLFFBQVE7TUFDZixLQUFLLEVBQUUsT0FBTztNQUNkLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE9BQU87TUFDZCxLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE9BQU87TUFDZCxLQUFLLEVBQUUsUUFBUTtNQUNmLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxFQUFFO01BQ1IsS0FBSyxFQUFFLFFBQVE7TUFDZixLQUFLLEVBQUUsUUFBUTtNQUNmLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FDSjtJQUNELFNBQVMsRUFBRSxDQUNQO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxJQUFJO01BQ1gsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxPQUFPO01BQ2QsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxRQUFRO01BQ2YsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxRQUFRO01BQ2YsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxLQUFLO01BQ1osUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLEVBQUU7TUFDUixLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxLQUFLO01BQ1osUUFBUSxFQUFFO0lBQ2QsQ0FBQztFQUVULENBQUM7RUFFRCxJQUFBQyxTQUFBLEdBQWdDTCwrQ0FBUSxDQUFDLFFBQVEsQ0FBQztJQUFBTSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEzQ0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFBSSxVQUFBLEdBQTBCViwrQ0FBUSxDQUFDLENBQUM7SUFBQVcsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBN0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUF3QmQsK0NBQVEsQ0FBQyxDQUFDO0lBQUFlLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQTNCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBOztFQUVwQjtFQUNBLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFZQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNwQyxPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJSCxHQUFHLEdBQUdELEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxHQUFHO0VBQzVELENBQUM7RUFDRCxJQUFNSyxlQUFlLEdBQUdwQixZQUFZLENBQUNJLFFBQVEsQ0FBQyxDQUFDVSxZQUFZLENBQUMsQ0FBQyxFQUFFZCxZQUFZLENBQUNJLFFBQVEsQ0FBQyxDQUFDaUIsTUFBTSxDQUFDLENBQUM7RUFDOUY7O0VBR0F4QixnREFBUyxDQUFDLFlBQU07SUFDWlksUUFBUSxDQUFDVyxlQUFlLENBQUNFLEdBQUcsQ0FBQztJQUM3QlQsT0FBTyxDQUFDTyxlQUFlLENBQUNHLEdBQUcsQ0FBQztFQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU5DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBQyxPQUFBLENBQVFkLElBQUksQ0FBQyxDQUFDO0VBRXpCLG9CQUFPakIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0hBLDBEQUFBO0lBQUlrQyxTQUFTLEVBQUM7RUFBWSxHQUFFekIsUUFBYSxDQUFDLGVBQzFDVCwwREFBQSwyQkFDSUEsMERBQUE7SUFBR2tDLFNBQVMsRUFBQztFQUFrQixHQUFFckIsS0FBUyxDQUFDLGVBQzNDYiwwREFBQTtJQUFHa0MsU0FBUyxFQUFDO0VBQWlCLEdBQUVqQixJQUFRLENBQ3ZDLENBQUMsZUFDTmpCLDBEQUFBLENBQUNHLGtEQUFTO0lBQUNnQyxhQUFhLEVBQUVsQjtFQUFLLENBQUMsQ0FDbEMsQ0FBQztBQUNQOzs7Ozs7OztVQy9KQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvRmxhc2hDYXJkLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5zd2VyQm94IGZyb20gXCIuL0Fuc3dlckJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFzaENhcmQoKSB7XG5cbiAgICBjb25zdCB0ZW1wRGF0YWJhc2UgPSB7XG4gICAgICAgIFwiY29sb3JzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiYmxhbmNcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJub2lyXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInJvdWdlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImphdW5lXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDUsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJibHVlXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJibGV1XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJncmVlblwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwidmVydFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA3LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwicGlua1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwicm9zZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA4LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiYnJvd25cIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcIm1hcnJvblwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA5LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZ3Jpc1wiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwidW5cIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInR3b1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGV1eFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidGhyZWVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInRyb2lzXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJmb3VyXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJxdWF0cmVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcImZpdmVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImNpbnF1ZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwic2l4XCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJzaXhcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNyxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInNldmVuXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJzZXB0XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDgsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJlaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiaHVpdFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA5LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwibmluZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwibmV1ZlwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInRlblwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGl4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcImNvbG9yc1wiKTtcbiAgICBjb25zdCBbZnJvbnQsIHNldEZyb250XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2JhY2ssIHNldEJhY2tdID0gdXNlU3RhdGUoKTtcblxuICAgIC8vR2V0IGEgcmFuZG9tIHdvcmRzIHBhaXIgZnJvbSBkYXRhYmFzZVxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH07XG4gICAgY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlW2NhdGVnb3J5XVtyYW5kb21OdW1iZXIoMCwgdGVtcERhdGFiYXNlW2NhdGVnb3J5XS5sZW5ndGgpXTtcbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB0ZW1wRGF0YWJhc2UuY2F0ZWdvcnkucmFuZG9tTnVtYmVyKClcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0RnJvbnQoY3VycmVudFdvcmRQYWlyLmxleCk7XG4gICAgICAgIHNldEJhY2soY3VycmVudFdvcmRQYWlyLmRlZik7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2codHlwZW9mKGJhY2spKTtcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2V0X190aXRsZVwiPntjYXRlZ29yeX08L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19mcm9udFwiPntmcm9udH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2JhY2tcIj57YmFja308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QW5zd2VyQm94IGNvcnJlY3RBbnN3ZXI9e2JhY2t9Lz5cbiAgICA8Lz5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NjQ2NDNiNWI2NjdkZDVkOGJiYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5zd2VyQm94IiwiRmxhc2hDYXJkIiwidGVtcERhdGFiYXNlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZnJvbnQiLCJzZXRGcm9udCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYmFjayIsInNldEJhY2siLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjdXJyZW50V29yZFBhaXIiLCJsZW5ndGgiLCJsZXgiLCJkZWYiLCJjb25zb2xlIiwibG9nIiwiX3R5cGVvZiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImNvcnJlY3RBbnN3ZXIiXSwic291cmNlUm9vdCI6IiJ9