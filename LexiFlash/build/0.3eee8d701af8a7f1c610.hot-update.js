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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    front = _useState2[0],
    setFront = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    back = _useState4[0],
    setBack = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFront(tempDatabase.colors[0].lex);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "set__title"
  }, "Colors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "flashcard__front"
  }, front), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "flashcard__back"
  }, back)));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e2526aaa5fef37266983")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZWVlOGQ3MDFhZjhhN2YxYzYxMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVwQyxTQUFTRyxTQUFTQSxDQUFBLEVBQUc7RUFFaEMsSUFBTUMsWUFBWSxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxDQUNOO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxPQUFPO01BQ2QsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxPQUFPO01BQ2QsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsUUFBUTtNQUNmLEtBQUssRUFBRSxPQUFPO01BQ2QsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsT0FBTztNQUNkLEtBQUssRUFBRSxRQUFRO01BQ2YsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLEVBQUU7TUFDUixLQUFLLEVBQUUsUUFBUTtNQUNmLEtBQUssRUFBRSxRQUFRO01BQ2YsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUNKO0lBQ0QsU0FBUyxFQUFFLENBQ1A7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLElBQUk7TUFDWCxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxPQUFPO01BQ2QsS0FBSyxFQUFFLE9BQU87TUFDZCxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLFFBQVE7TUFDZixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLFFBQVE7TUFDZixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLEtBQUs7TUFDWixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxPQUFPO01BQ2QsS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxPQUFPO01BQ2QsS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsRUFBRTtNQUNSLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLEtBQUs7TUFDWixRQUFRLEVBQUU7SUFDZCxDQUFDO0VBRVQsQ0FBQztFQUVELElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUMsQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE3QkcsS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUN0QixJQUFBSSxVQUFBLEdBQXdCVCwrQ0FBUSxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBM0JFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFFcEJULGdEQUFTLENBQUMsWUFBTTtJQUFDTyxRQUFRLENBQUNMLFlBQVksQ0FBQ1UsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUM7RUFBQSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRTNELG9CQUFPZiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSEEsMERBQUE7SUFBSWtCLFNBQVMsRUFBQztFQUFZLEdBQUMsUUFBVSxDQUFDLGVBQ3RDbEIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQUdrQixTQUFTLEVBQUM7RUFBa0IsR0FBRVYsS0FBUyxDQUFDLGVBQzNDUiwwREFBQTtJQUFHa0IsU0FBUyxFQUFDO0VBQWlCLEdBQUVOLElBQVEsQ0FDdkMsQ0FDUCxDQUFDO0FBQ1A7Ozs7Ozs7O1VDL0lBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9GbGFzaENhcmQuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxhc2hDYXJkKCkge1xuXG4gICAgY29uc3QgdGVtcERhdGFiYXNlID0ge1xuICAgICAgICBcImNvbG9yc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImJsYW5jXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwibm9pclwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJyb3VnZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA0LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJqYXVuZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA1LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiYmxldVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInZlcnRcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNyxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInBpbmtcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInJvc2VcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogOCxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcImJyb3duXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJtYXJyb25cIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogOSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcImdyZXlcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImdyaXNcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMTAsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJvbmVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcInVuXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJ0d29cIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImRldXhcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMyxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInRocmVlXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJ0cm9pc1wiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA0LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiZm91clwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwicXVhdHJlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDUsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJmaXZlXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJjaW5xdWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInNpeFwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwic2l4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDcsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJzZXZlblwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwic2VwdFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA4LFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwiZWlnaHRcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImh1aXRcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogOSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm5pbmVcIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcIm5ldWZcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMTAsXG4gICAgICAgICAgICAgICAgXCJsZXhcIjogXCJ0ZW5cIixcbiAgICAgICAgICAgICAgICBcImRlZlwiOiBcImRpeFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIGNvbnN0IFtmcm9udCwgc2V0RnJvbnRdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbYmFjaywgc2V0QmFja10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtzZXRGcm9udCh0ZW1wRGF0YWJhc2UuY29sb3JzWzBdLmxleCl9LCBbXSk7XG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNldF9fdGl0bGVcIj5Db2xvcnM8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19mcm9udFwiPntmcm9udH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2JhY2tcIj57YmFja308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUyNTI2YWFhNWZlZjM3MjY2OTgzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGbGFzaENhcmQiLCJ0ZW1wRGF0YWJhc2UiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJmcm9udCIsInNldEZyb250IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJiYWNrIiwic2V0QmFjayIsImNvbG9ycyIsImxleCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=