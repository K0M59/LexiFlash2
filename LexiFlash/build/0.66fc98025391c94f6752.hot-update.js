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
  function vocabSetFiltered(status) {
    return vocabSet.filter(function (flashcard) {
      return flashcard.status === status;
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(vocabSet);
    var testarr = vocabSet.filter(function (flashcard) {
      return flashcard.status === 0;
    });
    setVocabLeft(testarr);
    console.log(testarr);
  }, []);

  // Currently the app allows to study only status "0" vocabulary.
  // useEffect(() => {
  //     setVocabLeft(() => vocabSetFiltered(0))
  // }, [])

  console.log(vocabLeft.map(function (flashcard) {
    return flashcard.lex;
  }));
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
/******/ 	__webpack_require__.h = () => ("63821ddba4dfd12bb713")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NmZjOTgwMjUzOTFjOTRmNjc1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVyQixTQUFTSSxVQUFVQSxDQUFBQyxJQUFBLEVBQWE7RUFBQSxJQUFYQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN4QyxJQUFBQyxTQUFBLEdBQW9DTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF4Q0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTs7RUFFL0I7RUFDQSxTQUFTSSxnQkFBZ0JBLENBQUNDLE1BQU0sRUFBRTtJQUM5QixPQUFPUCxRQUFRLENBQUNRLE1BQU0sQ0FBQyxVQUFBQyxTQUFTO01BQUEsT0FBSUEsU0FBUyxDQUFDRixNQUFNLEtBQUtBLE1BQU07SUFBQSxFQUFDO0VBQ3BFO0VBRUFYLGdEQUFTLENBQUMsWUFBTTtJQUNaYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsUUFBUSxDQUFDO0lBQ3JCLElBQU1ZLE9BQU8sR0FBR1osUUFBUSxDQUFDUSxNQUFNLENBQUMsVUFBQUMsU0FBUztNQUFBLE9BQUlBLFNBQVMsQ0FBQ0YsTUFBTSxLQUFLLENBQUM7SUFBQSxFQUFDO0lBQ3BFRixZQUFZLENBQUNPLE9BQU8sQ0FBQztJQUNyQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQztFQUN4QixDQUFDLEVBQUUsRUFBRSxDQUFDOztFQUVOO0VBQ0E7RUFDQTtFQUNBOztFQUVBRixPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsU0FBUyxDQUFDUyxHQUFHLENBQUMsVUFBQUosU0FBUztJQUFBLE9BQUlBLFNBQVMsQ0FBQ0ssR0FBRztFQUFBLEVBQUMsQ0FBQztFQUV0RCxvQkFBT3BCLDBEQUFBLGNBQUssZUFBYSxFQUFDVSxTQUFTLENBQUNTLEdBQUcsQ0FBQyxVQUFBSixTQUFTO0lBQUEsT0FBSUEsU0FBUyxDQUFDSyxHQUFHO0VBQUEsRUFBTyxDQUFDO0VBRTFFLElBQU1FLFlBQVksR0FBRztJQUNqQixRQUFRLEVBQUVoQixRQUFRO0lBQ2xCLFNBQVMsRUFBRSxDQUNQO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxJQUFJO01BQ1gsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUNEO01BQ0ksSUFBSSxFQUFFLENBQUM7TUFDUCxLQUFLLEVBQUUsS0FBSztNQUNaLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO0lBQ2QsQ0FBQztFQUVULENBQUM7RUFDRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUdBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNKOzs7Ozs7OztVQ3BGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvRmxhc2hDYXJkMi5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFuc3dlckJveCBmcm9tIFwiLi9BbnN3ZXJCb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxhc2hDYXJkMih7dm9jYWJTZXR9KSB7XG4gICAgY29uc3QgWyB2b2NhYkxlZnQsIHNldFZvY2FiTGVmdCBdID0gdXNlU3RhdGUoW10pXG5cbiAgICAvL1BvIHByemVyd2llIG5hcGlzeiBmdW5rY2plIGRvZGFqYWNhIHNsb3drYSBkbyB2b2NhYkxlZnRcbiAgICBmdW5jdGlvbiB2b2NhYlNldEZpbHRlcmVkKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gdm9jYWJTZXQuZmlsdGVyKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQuc3RhdHVzID09PSBzdGF0dXMpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codm9jYWJTZXQpO1xuICAgICAgICBjb25zdCB0ZXN0YXJyID0gdm9jYWJTZXQuZmlsdGVyKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQuc3RhdHVzID09PSAwKTtcbiAgICAgICAgc2V0Vm9jYWJMZWZ0KHRlc3RhcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXN0YXJyKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBDdXJyZW50bHkgdGhlIGFwcCBhbGxvd3MgdG8gc3R1ZHkgb25seSBzdGF0dXMgXCIwXCIgdm9jYWJ1bGFyeS5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBzZXRWb2NhYkxlZnQoKCkgPT4gdm9jYWJTZXRGaWx0ZXJlZCgwKSlcbiAgICAvLyB9LCBbXSlcblxuICAgIGNvbnNvbGUubG9nKHZvY2FiTGVmdC5tYXAoZmxhc2hjYXJkID0+IGZsYXNoY2FyZC5sZXgpKTtcblxuICAgIHJldHVybiA8ZGl2PldvcmRzIGxlZnQgOiB7dm9jYWJMZWZ0Lm1hcChmbGFzaGNhcmQgPT4gZmxhc2hjYXJkLmxleCl9PC9kaXY+XG5cbiAgICBjb25zdCB0ZW1wRGF0YWJhc2UgPSB7XG4gICAgICAgIFwiY29sb3JzXCI6IHZvY2FiU2V0LFxuICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcIm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwidW5cIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImxleFwiOiBcInR3b1wiLFxuICAgICAgICAgICAgICAgIFwiZGVmXCI6IFwiZGV1eFwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gICAgLy8gY29uc3QgbXlBcnJheSA9IE9iamVjdC52YWx1ZXModm9jYWIpO1xuICAgIC8vIGNvbnNvbGUubG9nKG15QXJyYXkubGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5mcm9tKHZvY2FiKSk7XG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIHRlbXBEYXRhYmFzZS5jb2xvcnMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5jb2xvcnMubGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgdGVtcERhdGFiYXNlLm51bWJlcnMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5udW1iZXJzLmxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coQXJyYXkuaXNBcnJheSh0ZW1wRGF0YWJhc2UuY29sb3JzKSk7IC8vIENoZWNrIGlmIGl0J3MgYW4gYXJyYXlcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UuY29sb3JzLmxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coQXJyYXkuaXNBcnJheSh0ZW1wRGF0YWJhc2UubnVtYmVycykpOyAvLyBDaGVjayBpZiBpdCdzIGFuIGFycmF5XG4gICAgLy8gY29uc29sZS5sb2codGVtcERhdGFiYXNlLm51bWJlcnMubGVuZ3RoKTtcblxuXG4gICAgLy9cbiAgICAvLyBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiY29sb3JzXCIpO1xuICAgIC8vIGNvbnN0IFtmcm9udCwgc2V0RnJvbnRdID0gdXNlU3RhdGUoKTtcbiAgICAvLyBjb25zdCBbYmFjaywgc2V0QmFja10gPSB1c2VTdGF0ZSgpO1xuICAgIC8vXG4gICAgLy8gLy9HZXQgYSByYW5kb20gd29yZHMgcGFpciBmcm9tIGRhdGFiYXNlXG4gICAgLy8gY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAvLyAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgLy8gfTtcbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB2b2NhYlNldFtyYW5kb21OdW1iZXIoMCwgdm9jYWJTZXQubGVuZ3RoKV07XG4gICAgLy8gLy8gY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlLmNhdGVnb3J5LnJhbmRvbU51bWJlcigpXG4gICAgLy9cbiAgICAvL1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIHNldEZyb250KGN1cnJlbnRXb3JkUGFpci5sZXgpO1xuICAgIC8vICAgICBzZXRCYWNrKGN1cnJlbnRXb3JkUGFpci5kZWYpO1xuICAgIC8vIH0sIFtdKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gcmV0dXJuIDw+XG4gICAgLy8gICAgIDxoMSBjbGFzc05hbWU9XCJzZXRfX3RpdGxlXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgLy8gICAgIDxkaXY+XG4gICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2Zyb250XCI+e2Zyb250fTwvcD5cbiAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fYmFja1wiPntiYWNrfTwvcD5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICAgIDxBbnN3ZXJCb3ggY29ycmVjdEFuc3dlcj17YmFja30vPlxuICAgIC8vIDwvPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYzODIxZGRiYTRkZmQxMmJiNzEzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbnN3ZXJCb3giLCJGbGFzaENhcmQyIiwiX3JlZiIsInZvY2FiU2V0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwidm9jYWJMZWZ0Iiwic2V0Vm9jYWJMZWZ0Iiwidm9jYWJTZXRGaWx0ZXJlZCIsInN0YXR1cyIsImZpbHRlciIsImZsYXNoY2FyZCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0YXJyIiwibWFwIiwibGV4IiwiY3JlYXRlRWxlbWVudCIsInRlbXBEYXRhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=