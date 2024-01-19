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
/******/ 	__webpack_require__.h = () => ("a8dbba4e090937a4973c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yOWE2NTVmOGE3YjRhOTI3ODNkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVyQixTQUFTSSxVQUFVQSxDQUFBQyxJQUFBLEVBQWE7RUFBQSxJQUFYQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN4QyxJQUFBQyxTQUFBLEdBQW9DTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF4Q0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTs7RUFFL0I7O0VBRUEsb0JBQU9SLDBEQUFBLGNBQUssZUFBYSxFQUFDVSxTQUFTLENBQUNHLEdBQUcsQ0FBQyxVQUFBQyxTQUFTO0lBQUEsT0FBSUEsU0FBUyxDQUFDQyxHQUFHO0VBQUEsRUFBTyxDQUFDO0VBRTFFLElBQU1DLFlBQVksR0FBRztJQUNqQixRQUFRLEVBQUVWLFFBQVE7SUFDbEIsU0FBUyxFQUFFLENBQ1A7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLElBQUk7TUFDWCxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDO0VBRVQsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0o7Ozs7Ozs7O1VDbkVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9GbGFzaENhcmQyLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5zd2VyQm94IGZyb20gXCIuL0Fuc3dlckJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFzaENhcmQyKHt2b2NhYlNldH0pIHtcbiAgICBjb25zdCBbIHZvY2FiTGVmdCwgc2V0Vm9jYWJMZWZ0IF0gPSB1c2VTdGF0ZShbXSlcblxuICAgIC8vUG8gcHJ6ZXJ3aWUgbmFwaXN6IGZ1bmtjamUgZG9kYWphY2Egc2xvd2thIGRvIHZvY2FiTGVmdFxuXG4gICAgcmV0dXJuIDxkaXY+V29yZHMgbGVmdCA6IHt2b2NhYkxlZnQubWFwKGZsYXNoY2FyZCA9PiBmbGFzaGNhcmQubGV4KX08L2Rpdj5cblxuICAgIGNvbnN0IHRlbXBEYXRhYmFzZSA9IHtcbiAgICAgICAgXCJjb2xvcnNcIjogdm9jYWJTZXQsXG4gICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwib25lXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJ1blwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidHdvXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJkZXV4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbiAgICAvLyBjb25zdCBteUFycmF5ID0gT2JqZWN0LnZhbHVlcyh2b2NhYik7XG4gICAgLy8gY29uc29sZS5sb2cobXlBcnJheS5sZW5ndGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKEFycmF5LmZyb20odm9jYWIpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgdGVtcERhdGFiYXNlLmNvbG9ycyk7XG4gICAgLy8gY29uc29sZS5sb2codGVtcERhdGFiYXNlLmNvbG9ycy5sZW5ndGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB0ZW1wRGF0YWJhc2UubnVtYmVycyk7XG4gICAgLy8gY29uc29sZS5sb2codGVtcERhdGFiYXNlLm51bWJlcnMubGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHRlbXBEYXRhYmFzZS5jb2xvcnMpKTsgLy8gQ2hlY2sgaWYgaXQncyBhbiBhcnJheVxuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5jb2xvcnMubGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHRlbXBEYXRhYmFzZS5udW1iZXJzKSk7IC8vIENoZWNrIGlmIGl0J3MgYW4gYXJyYXlcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UubnVtYmVycy5sZW5ndGgpO1xuXG5cbiAgICAvL1xuICAgIC8vIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJjb2xvcnNcIik7XG4gICAgLy8gY29uc3QgW2Zyb250LCBzZXRGcm9udF0gPSB1c2VTdGF0ZSgpO1xuICAgIC8vIGNvbnN0IFtiYWNrLCBzZXRCYWNrXSA9IHVzZVN0YXRlKCk7XG4gICAgLy9cbiAgICAvLyAvL0dldCBhIHJhbmRvbSB3b3JkcyBwYWlyIGZyb20gZGF0YWJhc2VcbiAgICAvLyBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIC8vICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IGN1cnJlbnRXb3JkUGFpciA9IHZvY2FiU2V0W3JhbmRvbU51bWJlcigwLCB2b2NhYlNldC5sZW5ndGgpXTtcbiAgICAvLyAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB0ZW1wRGF0YWJhc2UuY2F0ZWdvcnkucmFuZG9tTnVtYmVyKClcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc2V0RnJvbnQoY3VycmVudFdvcmRQYWlyLmxleCk7XG4gICAgLy8gICAgIHNldEJhY2soY3VycmVudFdvcmRQYWlyLmRlZik7XG4gICAgLy8gfSwgW10pO1xuICAgIC8vXG4gICAgLy9cbiAgICAvLyByZXR1cm4gPD5cbiAgICAvLyAgICAgPGgxIGNsYXNzTmFtZT1cInNldF9fdGl0bGVcIj57Y2F0ZWdvcnl9PC9oMT5cbiAgICAvLyAgICAgPGRpdj5cbiAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fZnJvbnRcIj57ZnJvbnR9PC9wPlxuICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19iYWNrXCI+e2JhY2t9PC9wPlxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPEFuc3dlckJveCBjb3JyZWN0QW5zd2VyPXtiYWNrfS8+XG4gICAgLy8gPC8+XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYThkYmJhNGUwOTA5MzdhNDk3M2NcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFuc3dlckJveCIsIkZsYXNoQ2FyZDIiLCJfcmVmIiwidm9jYWJTZXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2b2NhYkxlZnQiLCJzZXRWb2NhYkxlZnQiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiZmxhc2hjYXJkIiwibGV4IiwidGVtcERhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==