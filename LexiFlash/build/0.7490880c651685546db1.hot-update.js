"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Database)
/* harmony export */ });
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
function Database() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    vocabSet = _useState2[0],
    setVocabSet = _useState2[1];
  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.child)(dbRef, "colors")).then(function (snapshot) {
    if (snapshot.exists()) {
      setVocabSet(snapshot.val());
    } else {
      console.log("No data available");
    }
  })["catch"](function (error) {
    console.error(error);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, vocabSet);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7c15542eff58f9889f6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NDkwODgwYzY1MTY4NTU0NmRiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFDb0I7QUFFakUsSUFBTVEsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0VBQzdDQyxXQUFXLEVBQUUsd0VBQXdFO0VBQ3JGQyxTQUFTLEVBQUUsaUJBQWlCO0VBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0VBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0VBQ2xEQyxhQUFhLEVBQUU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR2QsMkRBQWEsQ0FBQ0ssY0FBYyxDQUFDOztBQUV6QztBQUNBLElBQU1VLFFBQVEsR0FBR2QsOERBQVcsQ0FBQ2EsR0FBRyxDQUFDOztBQUVqQzs7QUFFQSxJQUFNRSxLQUFLLEdBQUdkLHNEQUFHLENBQUNELDhEQUFXLENBQUMsQ0FBQyxDQUFDO0FBRWpCLFNBQVNnQixRQUFRQSxDQUFBLEVBQUc7RUFDL0IsSUFBQUMsU0FBQSxHQUFrQ3BCLCtDQUFRLENBQUMsQ0FBQztJQUFBcUIsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBcENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFN0JmLHNEQUFHLENBQUNELHdEQUFLLENBQUNhLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztJQUMzQyxJQUFJQSxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7TUFDbkJILFdBQVcsQ0FBQ0UsUUFBUSxDQUFDRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsTUFBTTtNQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQztFQUNKLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQ0MsS0FBSyxFQUFLO0lBQ2hCRixPQUFPLENBQUNFLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ3hCLENBQUMsQ0FBQztFQUVGLG9CQUFPaEMsMERBQUEsYUFBS3dCLFFBQWEsQ0FBQztBQUM5Qjs7Ozs7Ozs7VUN2Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9hc3NldHMvZGF0YS9EYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIGNoaWxkLCBnZXQgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURseHJ3dG1tTGZkZVhMMlh0YmkyV2JnX3pmR21VaUNnMFwiLFxuICAgIGF1dGhEb21haW46IFwibGV4aWZsYXNoLWZmOTNjLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbGV4aWZsYXNoLWZmOTNjLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICBwcm9qZWN0SWQ6IFwibGV4aWZsYXNoLWZmOTNjXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJsZXhpZmxhc2gtZmY5M2MuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NjY4MDg2NDc4MzFcIixcbiAgICBhcHBJZDogXCIxOjk2NjgwODY0NzgzMTp3ZWI6M2MxODdiZmZkMjBiZTc3YThhZDFkMlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1WNjhWS0dUVDdCXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG4vLyBJbml0aWFsaXplIFJlYWx0aW1lIERhdGFiYXNlIGFuZCBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIHNlcnZpY2VcbmNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoYXBwKTtcblxuLy8gZG9jdW1lbnRhdGlvbiBvbiByZWFkaW5nIGFuZCB3cml0aW5nIGRhdGEgaW4gcmVhbHRpbWUgZGF0YWJhc2UgaW4gRmlyZWJhc2UgOiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9kYXRhYmFzZS93ZWIvcmVhZC1hbmQtd3JpdGVcblxuY29uc3QgZGJSZWYgPSByZWYoZ2V0RGF0YWJhc2UoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFiYXNlKCkge1xuICAgIGNvbnN0IFsgdm9jYWJTZXQsIHNldFZvY2FiU2V0IF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgZ2V0KGNoaWxkKGRiUmVmLCBgY29sb3JzYCkpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGlmIChzbmFwc2hvdC5leGlzdHMoKSkge1xuICAgICAgICAgICAgc2V0Vm9jYWJTZXQoc25hcHNob3QudmFsKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBkYXRhIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9KTtcblxuICAgIHJldHVybiA8aDE+e3ZvY2FiU2V0fTwvaDE+XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlN2MxNTU0MmVmZjU4Zjk4ODlmNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUFwcCIsImdldERhdGFiYXNlIiwicmVmIiwiY2hpbGQiLCJnZXQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImRhdGFiYXNlIiwiZGJSZWYiLCJEYXRhYmFzZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZvY2FiU2V0Iiwic2V0Vm9jYWJTZXQiLCJ0aGVuIiwic25hcHNob3QiLCJleGlzdHMiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==