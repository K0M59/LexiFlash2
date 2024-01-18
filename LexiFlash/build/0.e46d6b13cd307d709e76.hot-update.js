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
      console.log(snapshot.val());
      setVocabSet(snapshot.val());
    } else {
      console.log("No data available");
    }
  })["catch"](function (error) {
    console.error(error);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, toString(dvocabSet));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c279a3f985d4b85bfb90")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNDZkNmIxM2NkMzA3ZDcwOWU3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFDb0I7QUFFakUsSUFBTVEsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0VBQzdDQyxXQUFXLEVBQUUsd0VBQXdFO0VBQ3JGQyxTQUFTLEVBQUUsaUJBQWlCO0VBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0VBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0VBQ2xEQyxhQUFhLEVBQUU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR2QsMkRBQWEsQ0FBQ0ssY0FBYyxDQUFDOztBQUV6QztBQUNBLElBQU1VLFFBQVEsR0FBR2QsOERBQVcsQ0FBQ2EsR0FBRyxDQUFDOztBQUVqQzs7QUFFQSxJQUFNRSxLQUFLLEdBQUdkLHNEQUFHLENBQUNELDhEQUFXLENBQUMsQ0FBQyxDQUFDO0FBRWpCLFNBQVNnQixRQUFRQSxDQUFBLEVBQUc7RUFDL0IsSUFBQUMsU0FBQSxHQUFrQ3BCLCtDQUFRLENBQUMsQ0FBQztJQUFBcUIsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBcENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFN0JmLHNEQUFHLENBQUNELHdEQUFLLENBQUNhLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztJQUMzQyxJQUFJQSxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7TUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDM0JOLFdBQVcsQ0FBQ0UsUUFBUSxDQUFDSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsTUFBTTtNQUNIRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQztFQUNKLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQ0UsS0FBSyxFQUFLO0lBQ2hCSCxPQUFPLENBQUNHLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ3hCLENBQUMsQ0FBQztFQUVGLG9CQUFPaEMsMERBQUEsYUFBS2tDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFNLENBQUM7QUFDekM7Ozs7Ozs7O1VDeENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvYXNzZXRzL2RhdGEvRGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBjaGlsZCwgZ2V0IH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lEbHhyd3RtbUxmZGVYTDJYdGJpMldiZ196ZkdtVWlDZzBcIixcbiAgICBhdXRoRG9tYWluOiBcImxleGlmbGFzaC1mZjkzYy5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2xleGlmbGFzaC1mZjkzYy1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXG4gICAgcHJvamVjdElkOiBcImxleGlmbGFzaC1mZjkzY1wiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwibGV4aWZsYXNoLWZmOTNjLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTY2ODA4NjQ3ODMxXCIsXG4gICAgYXBwSWQ6IFwiMTo5NjY4MDg2NDc4MzE6d2ViOjNjMTg3YmZmZDIwYmU3N2E4YWQxZDJcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctVjY4VktHVFQ3QlwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuLy8gSW5pdGlhbGl6ZSBSZWFsdGltZSBEYXRhYmFzZSBhbmQgZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBzZXJ2aWNlXG5jb25zdCBkYXRhYmFzZSA9IGdldERhdGFiYXNlKGFwcCk7XG5cbi8vIGRvY3VtZW50YXRpb24gb24gcmVhZGluZyBhbmQgd3JpdGluZyBkYXRhIGluIHJlYWx0aW1lIGRhdGFiYXNlIGluIEZpcmViYXNlIDogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvZGF0YWJhc2Uvd2ViL3JlYWQtYW5kLXdyaXRlXG5cbmNvbnN0IGRiUmVmID0gcmVmKGdldERhdGFiYXNlKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhYmFzZSgpIHtcbiAgICBjb25zdCBbIHZvY2FiU2V0LCBzZXRWb2NhYlNldCBdID0gdXNlU3RhdGUoKTtcblxuICAgIGdldChjaGlsZChkYlJlZiwgYGNvbG9yc2ApKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICBpZiAoc25hcHNob3QuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgICAgIHNldFZvY2FiU2V0KHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZGF0YSBhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gPGgxPnt0b1N0cmluZyhkdm9jYWJTZXQpfTwvaDE+XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMjc5YTNmOTg1ZDRiODViZmI5MFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUFwcCIsImdldERhdGFiYXNlIiwicmVmIiwiY2hpbGQiLCJnZXQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImRhdGFiYXNlIiwiZGJSZWYiLCJEYXRhYmFzZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZvY2FiU2V0Iiwic2V0Vm9jYWJTZXQiLCJ0aGVuIiwic25hcHNob3QiLCJleGlzdHMiLCJjb25zb2xlIiwibG9nIiwidmFsIiwiZXJyb3IiLCJjcmVhdGVFbGVtZW50IiwidG9TdHJpbmciLCJkdm9jYWJTZXQiXSwic291cmNlUm9vdCI6IiJ9