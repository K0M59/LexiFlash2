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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    vocabLeft = _useState2[0],
    setVocabLeft = _useState2[1];

  //Po przerwie napisz funkcje dodajaca slowka do vocabLeft
  // function vocabSetFiltered(status) {
  //     return vocabSet.filter(flashcard => flashcard.status === status)
  // }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(vocabSet.length);
    // const testarr = vocabSet.filter(flashcard => flashcard.status === 0);
    // setVocabLeft(testarr);
    // console.log(testarr);
  }, []);

  // Currently the app allows to study only status "0" vocabulary.
  // useEffect(() => {
  //     setVocabLeft(() => vocabSetFiltered(0))
  // }, [])

  // console.log(vocabLeft.map(flashcard => flashcard.lex));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Words left : ", vocabLeft.map(function (flashcard) {
    return flashcard.lex;
  }));
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
  // const myArray = Object.values(vocab);
  // console.log(myArray.length);
  // console.log(Array.from(vocab));
  // console.log(typeof tempDatabase.colors);
  // console.log(tempDatabase.colors.length);
  // console.log(typeof tempDatabase.numbers);
  // console.log(tempDatabase.numbers.length);
  // console.log(Array.isArray(tempDatabase.colors)); // Check if it's an array
  // console.log(tempDatabase.colors.length);
  // console.log(Array.isArray(tempDatabase.numbers)); // Check if it's an array
  // console.log(tempDatabase.numbers.length);

  //
  // const [category, setCategory] = useState("colors");
  // const [front, setFront] = useState();
  // const [back, setBack] = useState();
  //
  // //Get a random words pair from database
  // const randomNumber = function(min, max) {
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  // };
  // const currentWordPair = vocabSet[randomNumber(0, vocabSet.length)];
  // // const currentWordPair = tempDatabase.category.randomNumber()
  //
  //
  // useEffect(() => {
  //     setFront(currentWordPair.lex);
  //     setBack(currentWordPair.def);
  // }, []);
  //
  //
  // return <>
  //     <h1 className="set__title">{category}</h1>
  //     <div>
  //         <p className="flashcard__front">{front}</p>
  //         <p className="flashcard__back">{back}</p>
  //     </div>
  //     <AnswerBox correctAnswer={back}/>
  // </>
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("90f00e7da353d57cccc7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZDE5OGRlNGRkM2YzZDNiZDMzMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVyQixTQUFTSSxVQUFVQSxDQUFBQyxJQUFBLEVBQWE7RUFBQSxJQUFYQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN4QyxJQUFBQyxTQUFBLEdBQW9DTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF4Q0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTs7RUFFL0I7RUFDQTtFQUNBO0VBQ0E7O0VBRUFOLGdEQUFTLENBQUMsWUFBTTtJQUNaVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsUUFBUSxDQUFDUSxNQUFNLENBQUM7SUFDNUI7SUFDQTtJQUNBO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7RUFFTjtFQUNBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQSxvQkFBT2QsMERBQUEsY0FBSyxlQUFhLEVBQUNVLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFVBQUFDLFNBQVM7SUFBQSxPQUFJQSxTQUFTLENBQUNDLEdBQUc7RUFBQSxFQUFPLENBQUM7RUFFMUUsSUFBTUMsWUFBWSxHQUFHO0lBQ2pCLFFBQVEsRUFBRWIsUUFBUTtJQUNsQixTQUFTLEVBQUUsQ0FDUDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsSUFBSTtNQUNYLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUM7RUFFVCxDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSjs7Ozs7Ozs7VUNwRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ZsYXNoQ2FyZDIuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbnN3ZXJCb3ggZnJvbSBcIi4vQW5zd2VyQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsYXNoQ2FyZDIoe3ZvY2FiU2V0fSkge1xuICAgIGNvbnN0IFsgdm9jYWJMZWZ0LCBzZXRWb2NhYkxlZnQgXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgLy9QbyBwcnplcndpZSBuYXBpc3ogZnVua2NqZSBkb2RhamFjYSBzbG93a2EgZG8gdm9jYWJMZWZ0XG4gICAgLy8gZnVuY3Rpb24gdm9jYWJTZXRGaWx0ZXJlZChzdGF0dXMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHZvY2FiU2V0LmZpbHRlcihmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLnN0YXR1cyA9PT0gc3RhdHVzKVxuICAgIC8vIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZvY2FiU2V0Lmxlbmd0aCk7XG4gICAgICAgIC8vIGNvbnN0IHRlc3RhcnIgPSB2b2NhYlNldC5maWx0ZXIoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5zdGF0dXMgPT09IDApO1xuICAgICAgICAvLyBzZXRWb2NhYkxlZnQodGVzdGFycik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3RhcnIpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEN1cnJlbnRseSB0aGUgYXBwIGFsbG93cyB0byBzdHVkeSBvbmx5IHN0YXR1cyBcIjBcIiB2b2NhYnVsYXJ5LlxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIHNldFZvY2FiTGVmdCgoKSA9PiB2b2NhYlNldEZpbHRlcmVkKDApKVxuICAgIC8vIH0sIFtdKVxuXG4gICAgLy8gY29uc29sZS5sb2codm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCkpO1xuXG4gICAgcmV0dXJuIDxkaXY+V29yZHMgbGVmdCA6IHt2b2NhYkxlZnQubWFwKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQubGV4KX08L2Rpdj5cblxuICAgIGNvbnN0IHRlbXBEYXRhYmFzZSA9IHtcbiAgICAgICAgXCJjb2xvcnNcIjogdm9jYWJTZXQsXG4gICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwib25lXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJ1blwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidHdvXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJkZXV4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbiAgICAvLyBjb25zdCBteUFycmF5ID0gT2JqZWN0LnZhbHVlcyh2b2NhYik7XG4gICAgLy8gY29uc29sZS5sb2cobXlBcnJheS5sZW5ndGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKEFycmF5LmZyb20odm9jYWIpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgdGVtcERhdGFiYXNlLmNvbG9ycyk7XG4gICAgLy8gY29uc29sZS5sb2codGVtcERhdGFiYXNlLmNvbG9ycy5sZW5ndGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB0ZW1wRGF0YWJhc2UubnVtYmVycyk7XG4gICAgLy8gY29uc29sZS5sb2codGVtcERhdGFiYXNlLm51bWJlcnMubGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHRlbXBEYXRhYmFzZS5jb2xvcnMpKTsgLy8gQ2hlY2sgaWYgaXQncyBhbiBhcnJheVxuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5jb2xvcnMubGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHRlbXBEYXRhYmFzZS5udW1iZXJzKSk7IC8vIENoZWNrIGlmIGl0J3MgYW4gYXJyYXlcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UubnVtYmVycy5sZW5ndGgpO1xuXG5cbiAgICAvL1xuICAgIC8vIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJjb2xvcnNcIik7XG4gICAgLy8gY29uc3QgW2Zyb250LCBzZXRGcm9udF0gPSB1c2VTdGF0ZSgpO1xuICAgIC8vIGNvbnN0IFtiYWNrLCBzZXRCYWNrXSA9IHVzZVN0YXRlKCk7XG4gICAgLy9cbiAgICAvLyAvL0dldCBhIHJhbmRvbSB3b3JkcyBwYWlyIGZyb20gZGF0YWJhc2VcbiAgICAvLyBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIC8vICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IGN1cnJlbnRXb3JkUGFpciA9IHZvY2FiU2V0W3JhbmRvbU51bWJlcigwLCB2b2NhYlNldC5sZW5ndGgpXTtcbiAgICAvLyAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB0ZW1wRGF0YWJhc2UuY2F0ZWdvcnkucmFuZG9tTnVtYmVyKClcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc2V0RnJvbnQoY3VycmVudFdvcmRQYWlyLmxleCk7XG4gICAgLy8gICAgIHNldEJhY2soY3VycmVudFdvcmRQYWlyLmRlZik7XG4gICAgLy8gfSwgW10pO1xuICAgIC8vXG4gICAgLy9cbiAgICAvLyByZXR1cm4gPD5cbiAgICAvLyAgICAgPGgxIGNsYXNzTmFtZT1cInNldF9fdGl0bGVcIj57Y2F0ZWdvcnl9PC9oMT5cbiAgICAvLyAgICAgPGRpdj5cbiAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fZnJvbnRcIj57ZnJvbnR9PC9wPlxuICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19iYWNrXCI+e2JhY2t9PC9wPlxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPEFuc3dlckJveCBjb3JyZWN0QW5zd2VyPXtiYWNrfS8+XG4gICAgLy8gPC8+XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTBmMDBlN2RhMzUzZDU3Y2NjYzdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFuc3dlckJveCIsIkZsYXNoQ2FyZDIiLCJfcmVmIiwidm9jYWJTZXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2b2NhYkxlZnQiLCJzZXRWb2NhYkxlZnQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImZsYXNoY2FyZCIsImxleCIsInRlbXBEYXRhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=