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
/******/ 	__webpack_require__.h = () => ("2e5dc7bae337914859a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYTRjNWEzOWI4YWU0ZTUwODY4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFFckIsU0FBU0ksVUFBVUEsQ0FBQUMsSUFBQSxFQUFhO0VBQUEsSUFBWEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDeEMsSUFBTUMsS0FBSyxHQUFHRCxRQUFRO0VBQ3RCLElBQU1FLFlBQVksR0FBRztJQUNqQixRQUFRLEVBQUVGLFFBQVE7SUFDbEIsU0FBUyxFQUFFLENBQ1A7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLElBQUk7TUFDWCxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSSxJQUFJLEVBQUUsQ0FBQztNQUNQLEtBQUssRUFBRSxLQUFLO01BQ1osS0FBSyxFQUFFLE1BQU07TUFDYixRQUFRLEVBQUU7SUFDZCxDQUFDO0VBRVQsQ0FBQztFQUNELElBQU1HLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNKLEtBQUssQ0FBQztFQUNwQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDO0VBQzNCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxJQUFJLENBQUNULEtBQUssQ0FBQyxDQUFDO0VBQzlCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQUksT0FBQSxDQUFRVCxZQUFZLENBQUNVLE1BQU0sRUFBQztFQUN2QztFQUNBTixPQUFPLENBQUNDLEdBQUcsQ0FBQUksT0FBQSxDQUFRVCxZQUFZLENBQUNXLE9BQU8sRUFBQztFQUN4Q1AsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFlBQVksQ0FBQ1csT0FBTyxDQUFDTCxNQUFNLENBQUM7RUFDeENGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUNLLE9BQU8sQ0FBQ1osWUFBWSxDQUFDVSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakQ7RUFDQU4sT0FBTyxDQUFDQyxHQUFHLENBQUNFLEtBQUssQ0FBQ0ssT0FBTyxDQUFDWixZQUFZLENBQUNXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNsRFAsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFlBQVksQ0FBQ1csT0FBTyxDQUFDTCxNQUFNLENBQUM7RUFDeEM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0o7Ozs7Ozs7O1VDNURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9GbGFzaENhcmQyLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5zd2VyQm94IGZyb20gXCIuL0Fuc3dlckJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFzaENhcmQyKHt2b2NhYlNldH0pIHtcbiAgICBjb25zdCB2b2NhYiA9IHZvY2FiU2V0O1xuICAgIGNvbnN0IHRlbXBEYXRhYmFzZSA9IHtcbiAgICAgICAgXCJjb2xvcnNcIjogdm9jYWJTZXQsXG4gICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwib25lXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJ1blwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwibGV4XCI6IFwidHdvXCIsXG4gICAgICAgICAgICAgICAgXCJkZWZcIjogXCJkZXV4XCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbiAgICBjb25zdCBteUFycmF5ID0gT2JqZWN0LnZhbHVlcyh2b2NhYik7XG4gICAgY29uc29sZS5sb2cobXlBcnJheS5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKEFycmF5LmZyb20odm9jYWIpKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGVtcERhdGFiYXNlLmNvbG9ycyk7XG4gICAgLy8gY29uc29sZS5sb2codGVtcERhdGFiYXNlLmNvbG9ycy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0ZW1wRGF0YWJhc2UubnVtYmVycyk7XG4gICAgY29uc29sZS5sb2codGVtcERhdGFiYXNlLm51bWJlcnMubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHRlbXBEYXRhYmFzZS5jb2xvcnMpKTsgLy8gQ2hlY2sgaWYgaXQncyBhbiBhcnJheVxuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBEYXRhYmFzZS5jb2xvcnMubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHRlbXBEYXRhYmFzZS5udW1iZXJzKSk7IC8vIENoZWNrIGlmIGl0J3MgYW4gYXJyYXlcbiAgICBjb25zb2xlLmxvZyh0ZW1wRGF0YWJhc2UubnVtYmVycy5sZW5ndGgpO1xuICAgIC8vXG4gICAgLy8gY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcImNvbG9yc1wiKTtcbiAgICAvLyBjb25zdCBbZnJvbnQsIHNldEZyb250XSA9IHVzZVN0YXRlKCk7XG4gICAgLy8gY29uc3QgW2JhY2ssIHNldEJhY2tdID0gdXNlU3RhdGUoKTtcbiAgICAvL1xuICAgIC8vIC8vR2V0IGEgcmFuZG9tIHdvcmRzIHBhaXIgZnJvbSBkYXRhYmFzZVxuICAgIC8vIGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgLy8gICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIC8vIH07XG4gICAgLy8gY29uc3QgY3VycmVudFdvcmRQYWlyID0gdm9jYWJTZXRbcmFuZG9tTnVtYmVyKDAsIHZvY2FiU2V0Lmxlbmd0aCldO1xuICAgIC8vIC8vIGNvbnN0IGN1cnJlbnRXb3JkUGFpciA9IHRlbXBEYXRhYmFzZS5jYXRlZ29yeS5yYW5kb21OdW1iZXIoKVxuICAgIC8vXG4gICAgLy9cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBzZXRGcm9udChjdXJyZW50V29yZFBhaXIubGV4KTtcbiAgICAvLyAgICAgc2V0QmFjayhjdXJyZW50V29yZFBhaXIuZGVmKTtcbiAgICAvLyB9LCBbXSk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vIHJldHVybiA8PlxuICAgIC8vICAgICA8aDEgY2xhc3NOYW1lPVwic2V0X190aXRsZVwiPntjYXRlZ29yeX08L2gxPlxuICAgIC8vICAgICA8ZGl2PlxuICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxhc2hjYXJkX19mcm9udFwiPntmcm9udH08L3A+XG4gICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGFzaGNhcmRfX2JhY2tcIj57YmFja308L3A+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgICA8QW5zd2VyQm94IGNvcnJlY3RBbnN3ZXI9e2JhY2t9Lz5cbiAgICAvLyA8Lz5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZTVkYzdiYWUzMzc5MTQ4NTlhNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5zd2VyQm94IiwiRmxhc2hDYXJkMiIsIl9yZWYiLCJ2b2NhYlNldCIsInZvY2FiIiwidGVtcERhdGFiYXNlIiwibXlBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJfdHlwZW9mIiwiY29sb3JzIiwibnVtYmVycyIsImlzQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9