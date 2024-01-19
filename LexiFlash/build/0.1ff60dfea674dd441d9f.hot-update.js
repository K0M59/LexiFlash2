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
  // console.log(vocabSet.length);

  //Po przerwie napisz funkcje dodajaca slowka do vocabLeft
  function vocabSetFiltered(status) {
    return vocabSet.filter(function (flashcard) {
      return flashcard.status === status;
    });
  }

  // useEffect(() => {
  //     console.log(vocabSet.length);
  //     // const testarr = vocabSet.filter(flashcard => flashcard.status === 0);
  //     // setVocabLeft(testarr);
  //     // console.log(testarr);
  // }, [vocabSet]);

  // Currently the app allows to study only status "0" vocabulary.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setVocabLeft(function () {
      return vocabSetFiltered(0);
    });
  }, [vocabSet]);

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
/******/ 	__webpack_require__.h = () => ("1047a463395b5fb98a57")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZmY2MGRmZWE2NzRkZDQ0MWQ5Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVyQixTQUFTSSxVQUFVQSxDQUFBQyxJQUFBLEVBQWE7RUFBQSxJQUFYQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN4QyxJQUFBQyxTQUFBLEdBQW9DTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF4Q0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUMvQjs7RUFFQTtFQUNBLFNBQVNJLGdCQUFnQkEsQ0FBQ0MsTUFBTSxFQUFFO0lBQzlCLE9BQU9QLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDLFVBQUFDLFNBQVM7TUFBQSxPQUFJQSxTQUFTLENBQUNGLE1BQU0sS0FBS0EsTUFBTTtJQUFBLEVBQUM7RUFDcEU7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0FYLGdEQUFTLENBQUMsWUFBTTtJQUNaUyxZQUFZLENBQUM7TUFBQSxPQUFNQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFBQSxFQUFDO0VBQzNDLENBQUMsRUFBRSxDQUFDTixRQUFRLENBQUMsQ0FBQzs7RUFFZDs7RUFFQSxvQkFBT04sMERBQUEsY0FBSyxlQUFhLEVBQUNVLFNBQVMsQ0FBQ08sR0FBRyxDQUFDLFVBQUFGLFNBQVM7SUFBQSxPQUFJQSxTQUFTLENBQUNHLEdBQUc7RUFBQSxFQUFPLENBQUM7RUFFMUUsSUFBTUMsWUFBWSxHQUFHO0lBQ2pCLFFBQVEsRUFBRWIsUUFBUTtJQUNsQixTQUFTLEVBQUUsQ0FDUDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsSUFBSTtNQUNYLFFBQVEsRUFBRTtJQUNkLENBQUMsRUFDRDtNQUNJLElBQUksRUFBRSxDQUFDO01BQ1AsS0FBSyxFQUFFLEtBQUs7TUFDWixLQUFLLEVBQUUsTUFBTTtNQUNiLFFBQVEsRUFBRTtJQUNkLENBQUM7RUFFVCxDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSjs7Ozs7Ozs7VUNyRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ZsYXNoQ2FyZDIuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbnN3ZXJCb3ggZnJvbSBcIi4vQW5zd2VyQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsYXNoQ2FyZDIoe3ZvY2FiU2V0fSkge1xuICAgIGNvbnN0IFsgdm9jYWJMZWZ0LCBzZXRWb2NhYkxlZnQgXSA9IHVzZVN0YXRlKFtdKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2b2NhYlNldC5sZW5ndGgpO1xuXG4gICAgLy9QbyBwcnplcndpZSBuYXBpc3ogZnVua2NqZSBkb2RhamFjYSBzbG93a2EgZG8gdm9jYWJMZWZ0XG4gICAgZnVuY3Rpb24gdm9jYWJTZXRGaWx0ZXJlZChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHZvY2FiU2V0LmZpbHRlcihmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLnN0YXR1cyA9PT0gc3RhdHVzKVxuICAgIH1cblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZvY2FiU2V0Lmxlbmd0aCk7XG4gICAgLy8gICAgIC8vIGNvbnN0IHRlc3RhcnIgPSB2b2NhYlNldC5maWx0ZXIoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5zdGF0dXMgPT09IDApO1xuICAgIC8vICAgICAvLyBzZXRWb2NhYkxlZnQodGVzdGFycik7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRlc3RhcnIpO1xuICAgIC8vIH0sIFt2b2NhYlNldF0pO1xuXG4gICAgLy8gQ3VycmVudGx5IHRoZSBhcHAgYWxsb3dzIHRvIHN0dWR5IG9ubHkgc3RhdHVzIFwiMFwiIHZvY2FidWxhcnkuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Vm9jYWJMZWZ0KCgpID0+IHZvY2FiU2V0RmlsdGVyZWQoMCkpXG4gICAgfSwgW3ZvY2FiU2V0XSlcblxuICAgIC8vIGNvbnNvbGUubG9nKHZvY2FiTGVmdC5tYXAoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5sZXgpKTtcblxuICAgIHJldHVybiA8ZGl2PldvcmRzIGxlZnQgOiB7dm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCl9PC9kaXY+XG5cbiAgICBjb25zdCB0ZW1wRGF0YWJhc2UgPSB7XG4gICAgICAgIFwiY29sb3JzXCI6IHZvY2FiU2V0LFxuICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwidW5cIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInR3b1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGV1eFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gICAgLy8gY29uc3QgbXlBcnJheSA9IE9iamVjdC52YWx1ZXModm9jYWIpO1xuICAgIC8vIGNvbnNvbGUubG9nKG15QXJyYXkubGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5mcm9tKHZvY2FiKSk7XG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIHRlbXBEYXRhYmFzZS5jb2xvcnMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5jb2xvcnMubGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgdGVtcERhdGFiYXNlLm51bWJlcnMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5udW1iZXJzLmxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coQXJyYXkuaXNBcnJheSh0ZW1wRGF0YWJhc2UuY29sb3JzKSk7IC8vIENoZWNrIGlmIGl0J3MgYW4gYXJyYXlcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UuY29sb3JzLmxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coQXJyYXkuaXNBcnJheSh0ZW1wRGF0YWJhc2UubnVtYmVycykpOyAvLyBDaGVjayBpZiBpdCdzIGFuIGFycmF5XG4gICAgLy8gY29uc29sZS5sb2codGVtcERhdGFiYXNlLm51bWJlcnMubGVuZ3RoKTtcblxuXG4gICAgLy9cbiAgICAvLyBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiY29sb3JzXCIpO1xuICAgIC8vIGNvbnN0IFtmcm9udCwgc2V0RnJvbnRdID0gdXNlU3RhdGUoKTtcbiAgICAvLyBjb25zdCBbYmFjaywgc2V0QmFja10gPSB1c2VTdGF0ZSgpO1xuICAgIC8vXG4gICAgLy8gLy9HZXQgYSByYW5kb20gd29yZHMgcGFpciBmcm9tIGRhdGFiYXNlXG4gICAgLy8gY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAvLyAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgLy8gfTtcbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB2b2NhYlNldFtyYW5kb21OdW1iZXIoMCwgdm9jYWJTZXQubGVuZ3RoKV07XG4gICAgLy8gLy8gY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlLmNhdGVnb3J5LnJhbmRvbU51bWJlcigpXG4gICAgLy9cbiAgICAvL1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIHNldEZyb250KGN1cnJlbnRXb3JkUGFpci5sZXgpO1xuICAgIC8vICAgICBzZXRCYWNrKGN1cnJlbnRXb3JkUGFpci5kZWYpO1xuICAgIC8vIH0sIFtdKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gcmV0dXJuIDw+XG4gICAgLy8gICAgIDxoMSBjbGFzc05hbWU9XCJzZXRfX3RpdGxlXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgLy8gICAgIDxkaXY+XG4gICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2Zyb250XCI+e2Zyb250fTwvcD5cbiAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fYmFja1wiPntiYWNrfTwvcD5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICAgIDxBbnN3ZXJCb3ggY29ycmVjdEFuc3dlcj17YmFja30vPlxuICAgIC8vIDwvPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEwNDdhNDYzMzk1YjVmYjk4YTU3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbnN3ZXJCb3giLCJGbGFzaENhcmQyIiwiX3JlZiIsInZvY2FiU2V0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwidm9jYWJMZWZ0Iiwic2V0Vm9jYWJMZWZ0Iiwidm9jYWJTZXRGaWx0ZXJlZCIsInN0YXR1cyIsImZpbHRlciIsImZsYXNoY2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJsZXgiLCJ0ZW1wRGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9