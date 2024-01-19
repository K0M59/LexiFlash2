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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


function FlashCard2(_ref) {
  var vocabSet = _ref.vocabSet;
  var vocab = vocabSet;
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
  var myArray = Object.values(vocab);
  console.log(myArray.length);
  console.log(Array.from(vocab));
  console.log(_typeof(tempDatabase.colors));
  // console.log(tempDatabase.colors.length);
  console.log(_typeof(tempDatabase.numbers));
  console.log(tempDatabase.numbers.length);
  console.log(Array.isArray(tempDatabase.colors)); // Check if it's an array
  // console.log(tempDatabase.colors.length);
  console.log(Array.isArray(tempDatabase.numbers)); // Check if it's an array
  console.log(tempDatabase.numbers.length);
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
/******/ 	__webpack_require__.h = () => ("2a4c5a39b8ae4e50868e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NGM2ZDE4NDdhZjZkMmM0YzczNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFFckIsU0FBU0ksVUFBVUEsQ0FBQUMsSUFBQSxFQUFhO0VBQUEsSUFBWEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDeEMsSUFBTUMsS0FBSyxHQUFHRCxRQUFRO0VBQ3RCLElBQU1FLFlBQVksR0FBRztJQUNqQixRQUFRLEVBQUVGLFFBQVE7SUFDbEIsU0FBUyxFQUFFLENBQ1A7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLElBQUk7TUFDWCxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDO0VBRVQsQ0FBQztFQUNELElBQU1HLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNKLEtBQUssQ0FBQztFQUNwQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDO0VBQzNCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxJQUFJLENBQUNULEtBQUssQ0FBQyxDQUFDO0VBQzlCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQUksT0FBQSxDQUFRVCxZQUFZLENBQUNVLE1BQU0sRUFBQztFQUN2QztFQUNBTixPQUFPLENBQUNDLEdBQUcsQ0FBQUksT0FBQSxDQUFRVCxZQUFZLENBQUNXLE9BQU8sRUFBQztFQUN4Q1AsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFlBQVksQ0FBQ1csT0FBTyxDQUFDTCxNQUFNLENBQUM7RUFDeENGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUNLLE9BQU8sQ0FBQ1osWUFBWSxDQUFDVSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakQ7RUFDQU4sT0FBTyxDQUFDQyxHQUFHLENBQUNFLEtBQUssQ0FBQ0ssT0FBTyxDQUFDWixZQUFZLENBQUNXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNsRFAsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFlBQVksQ0FBQ1csT0FBTyxDQUFDTCxNQUFNLENBQUM7RUFDeEM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0o7Ozs7Ozs7O1VDNURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9GbGFzaENhcmQyLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5zd2VyQm94IGZyb20gXCIuL0Fuc3dlckJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFzaENhcmQyKHt2b2NhYlNldH0pIHtcbiAgICBjb25zdCB2b2NhYiA9IHZvY2FiU2V0O1xuICAgIGNvbnN0IHRlbXBEYXRhYmFzZSA9IHtcbiAgICAgICAgXCJjb2xvcnNcIjogdm9jYWJTZXQsXG4gICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwib25lXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJ1blwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidHdvXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJkZXV4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbiAgICBjb25zdCBteUFycmF5ID0gT2JqZWN0LnZhbHVlcyh2b2NhYik7XG4gICAgY29uc29sZS5sb2cobXlBcnJheS5sZW5ndGgpXG4gICAgY29uc29sZS5sb2coQXJyYXkuZnJvbSh2b2NhYikpO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0ZW1wRGF0YWJhc2UuY29sb3JzKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UuY29sb3JzLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHRlbXBEYXRhYmFzZS5udW1iZXJzKTtcbiAgICBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UubnVtYmVycy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkodGVtcERhdGFiYXNlLmNvbG9ycykpOyAvLyBDaGVjayBpZiBpdCdzIGFuIGFycmF5XG4gICAgLy8gY29uc29sZS5sb2codGVtcERhdGFiYXNlLmNvbG9ycy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkodGVtcERhdGFiYXNlLm51bWJlcnMpKTsgLy8gQ2hlY2sgaWYgaXQncyBhbiBhcnJheVxuICAgIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5udW1iZXJzLmxlbmd0aCk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiY29sb3JzXCIpO1xuICAgIC8vIGNvbnN0IFtmcm9udCwgc2V0RnJvbnRdID0gdXNlU3RhdGUoKTtcbiAgICAvLyBjb25zdCBbYmFjaywgc2V0QmFja10gPSB1c2VTdGF0ZSgpO1xuICAgIC8vXG4gICAgLy8gLy9HZXQgYSByYW5kb20gd29yZHMgcGFpciBmcm9tIGRhdGFiYXNlXG4gICAgLy8gY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAvLyAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgLy8gfTtcbiAgICAvLyBjb25zdCBjdXJyZW50V29yZFBhaXIgPSB2b2NhYlNldFtyYW5kb21OdW1iZXIoMCwgdm9jYWJTZXQubGVuZ3RoKV07XG4gICAgLy8gLy8gY29uc3QgY3VycmVudFdvcmRQYWlyID0gdGVtcERhdGFiYXNlLmNhdGVnb3J5LnJhbmRvbU51bWJlcigpXG4gICAgLy9cbiAgICAvL1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIHNldEZyb250KGN1cnJlbnRXb3JkUGFpci5sZXgpO1xuICAgIC8vICAgICBzZXRCYWNrKGN1cnJlbnRXb3JkUGFpci5kZWYpO1xuICAgIC8vIH0sIFtdKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gcmV0dXJuIDw+XG4gICAgLy8gICAgIDxoMSBjbGFzc05hbWU9XCJzZXRfX3RpdGxlXCI+e2NhdGVnb3J5fTwvaDE+XG4gICAgLy8gICAgIDxkaXY+XG4gICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2Zyb250XCI+e2Zyb250fTwvcD5cbiAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsYXNoY2FyZF9fYmFja1wiPntiYWNrfTwvcD5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICAgIDxBbnN3ZXJCb3ggY29ycmVjdEFuc3dlcj17YmFja30vPlxuICAgIC8vIDwvPlxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJhNGM1YTM5YjhhZTRlNTA4NjhlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbnN3ZXJCb3giLCJGbGFzaENhcmQyIiwiX3JlZiIsInZvY2FiU2V0Iiwidm9jYWIiLCJ0ZW1wRGF0YWJhc2UiLCJteUFycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIkFycmF5IiwiZnJvbSIsIl90eXBlb2YiLCJjb2xvcnMiLCJudW1iZXJzIiwiaXNBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=