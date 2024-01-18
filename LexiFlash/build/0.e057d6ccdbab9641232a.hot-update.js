"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var firebaseConfig = {
  apiKey: "AIzaSyDlxrwtmmLfdeXL2Xtbi2Wbg_zfGmUiCg0",
  authDomain: "lexiflash-ff93c.firebaseapp.com",
  databaseURL: "https://lexiflash-ff93c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lexiflash-ff93c",
  storageBucket: "lexiflash-ff93c.appspot.com",
  messagingSenderId: "966808647831",
  appId: "1:966808647831:web:3c187bffd20be77a8ad1d2",
  measurementId: "G-V68VKGTT7B"
};

// Initialize Firebase
var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
var database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(app);

// documentation on reading and writing data in realtime database in Firebase : https://firebase.google.com/docs/database/web/read-and-write

var dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)());
var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
  _useState2 = _slicedToArray(_useState, 2),
  vocabSet = _useState2[0],
  setVocabSet = _useState2[1];
react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
(0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.child)(dbRef, "colors")).then(function (snapshot) {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
})["catch"](function (error) {
  console.error(error);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b57d58e99397b487d9ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMDU3ZDZjY2RiYWI5NjQxMjMyYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFDb0I7QUFFakUsSUFBTVEsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0VBQzdDQyxXQUFXLEVBQUUsd0VBQXdFO0VBQ3JGQyxTQUFTLEVBQUUsaUJBQWlCO0VBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0VBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0VBQ2xEQyxhQUFhLEVBQUU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR2QsMkRBQWEsQ0FBQ0ssY0FBYyxDQUFDOztBQUV6QztBQUNBLElBQU1VLFFBQVEsR0FBR2QsOERBQVcsQ0FBQ2EsR0FBRyxDQUFDOztBQUVqQzs7QUFFQSxJQUFNRSxLQUFLLEdBQUdkLHNEQUFHLENBQUNELDhEQUFXLENBQUMsQ0FBQyxDQUFDO0FBRWhDLElBQUFnQixTQUFBLEdBQWtDbkIsK0NBQVEsQ0FBQyxDQUFDO0VBQUFvQixVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtFQUFwQ0csUUFBUSxHQUFBRixVQUFBO0VBQUVHLFdBQVcsR0FBQUgsVUFBQTtBQUU3Qm5CLDRDQUFTO0FBR1RLLHNEQUFHLENBQUNELHdEQUFLLENBQUNhLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztFQUMzQyxJQUFJQSxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7SUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDL0IsQ0FBQyxNQUFNO0lBQ0hGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBQ3BDO0FBQ0osQ0FBQyxDQUFDLFNBQU0sQ0FBQyxVQUFDRSxLQUFLLEVBQUs7RUFDaEJILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQSxLQUFLLENBQUM7QUFDeEIsQ0FBQyxDQUFDOzs7Ozs7OztVQ3RDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvc3JjL2Fzc2V0cy9kYXRhL0RhdGFiYXNlLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiwgY2hpbGQsIGdldCB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RGx4cnd0bW1MZmRlWEwyWHRiaTJXYmdfemZHbVVpQ2cwXCIsXG4gICAgYXV0aERvbWFpbjogXCJsZXhpZmxhc2gtZmY5M2MuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9sZXhpZmxhc2gtZmY5M2MtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxuICAgIHByb2plY3RJZDogXCJsZXhpZmxhc2gtZmY5M2NcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImxleGlmbGFzaC1mZjkzYy5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjk2NjgwODY0NzgzMVwiLFxuICAgIGFwcElkOiBcIjE6OTY2ODA4NjQ3ODMxOndlYjozYzE4N2JmZmQyMGJlNzdhOGFkMWQyXCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVY2OFZLR1RUN0JcIlxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbi8vIEluaXRpYWxpemUgUmVhbHRpbWUgRGF0YWJhc2UgYW5kIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgc2VydmljZVxuY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApO1xuXG4vLyBkb2N1bWVudGF0aW9uIG9uIHJlYWRpbmcgYW5kIHdyaXRpbmcgZGF0YSBpbiByZWFsdGltZSBkYXRhYmFzZSBpbiBGaXJlYmFzZSA6IGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2RhdGFiYXNlL3dlYi9yZWFkLWFuZC13cml0ZVxuXG5jb25zdCBkYlJlZiA9IHJlZihnZXREYXRhYmFzZSgpKTtcblxuY29uc3QgWyB2b2NhYlNldCwgc2V0Vm9jYWJTZXQgXSA9IHVzZVN0YXRlKCk7XG5cbnVzZUVmZmVjdFxuXG5cbmdldChjaGlsZChkYlJlZiwgYGNvbG9yc2ApKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgIGlmIChzbmFwc2hvdC5leGlzdHMoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhzbmFwc2hvdC52YWwoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBkYXRhIGF2YWlsYWJsZVwiKTtcbiAgICB9XG59KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjU3ZDU4ZTk5Mzk3YjQ4N2Q5YWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWxpemVBcHAiLCJnZXREYXRhYmFzZSIsInJlZiIsImNoaWxkIiwiZ2V0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsImRiUmVmIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwidm9jYWJTZXQiLCJzZXRWb2NhYlNldCIsInRoZW4iLCJzbmFwc2hvdCIsImV4aXN0cyIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=