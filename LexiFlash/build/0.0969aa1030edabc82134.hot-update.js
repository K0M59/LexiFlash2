"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);



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

// get(child(dbRef, `colors`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });
// export default function getVocabSet() {}
var Database = function Database() {
  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.child)(dbRef, "colors")).then(function (snapshot) {
    if (snapshot.exists()) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, snapshot.val());
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\"No data available\"");
    }
  })["catch"](function (error) {
    console.error(error);
  });
};

// essaie()
console.log(essaie);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6dff0e4ae38dd9f3ae48")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wOTY5YWExMDMwZWRhYmM4MjEzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFDb0I7QUFFakUsSUFBTVEsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0VBQzdDQyxXQUFXLEVBQUUsd0VBQXdFO0VBQ3JGQyxTQUFTLEVBQUUsaUJBQWlCO0VBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0VBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0VBQ2xEQyxhQUFhLEVBQUU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR2QsMkRBQWEsQ0FBQ0ssY0FBYyxDQUFDOztBQUV6QztBQUNBLElBQU1VLFFBQVEsR0FBR2QsOERBQVcsQ0FBQ2EsR0FBRyxDQUFDOztBQUVqQzs7QUFFQSxJQUFNRSxLQUFLLEdBQUdkLHNEQUFHLENBQUNELDhEQUFXLENBQUMsQ0FBQyxDQUFDOztBQUloQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1nQixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFjO0VBQ3hCYixzREFBRyxDQUFDRCx3REFBSyxDQUFDYSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7SUFDM0MsSUFBSUEsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFO01BQ25CLG9CQUFRdkIsMERBQUEsY0FBTXNCLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLENBQU8sQ0FBQztJQUN2QyxDQUFDLE1BQU07TUFDSCxvQkFBUXpCLDBEQUFBLGNBQUssdUJBQXdCLENBQUM7SUFDMUM7RUFDSixDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUMwQixLQUFLLEVBQUs7SUFDaEJDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDeEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7QUFFRDtBQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDO0FBRW5CLGlFQUFlVCxRQUFROzs7Ozs7OztVQ3BEdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL3NyYy9hc3NldHMvZGF0YS9EYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIGNoaWxkLCBnZXQgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURseHJ3dG1tTGZkZVhMMlh0YmkyV2JnX3pmR21VaUNnMFwiLFxuICAgIGF1dGhEb21haW46IFwibGV4aWZsYXNoLWZmOTNjLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbGV4aWZsYXNoLWZmOTNjLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICBwcm9qZWN0SWQ6IFwibGV4aWZsYXNoLWZmOTNjXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJsZXhpZmxhc2gtZmY5M2MuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NjY4MDg2NDc4MzFcIixcbiAgICBhcHBJZDogXCIxOjk2NjgwODY0NzgzMTp3ZWI6M2MxODdiZmZkMjBiZTc3YThhZDFkMlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1WNjhWS0dUVDdCXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG4vLyBJbml0aWFsaXplIFJlYWx0aW1lIERhdGFiYXNlIGFuZCBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIHNlcnZpY2VcbmNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoYXBwKTtcblxuLy8gZG9jdW1lbnRhdGlvbiBvbiByZWFkaW5nIGFuZCB3cml0aW5nIGRhdGEgaW4gcmVhbHRpbWUgZGF0YWJhc2UgaW4gRmlyZWJhc2UgOiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9kYXRhYmFzZS93ZWIvcmVhZC1hbmQtd3JpdGVcblxuY29uc3QgZGJSZWYgPSByZWYoZ2V0RGF0YWJhc2UoKSk7XG5cblxuXG4vLyBnZXQoY2hpbGQoZGJSZWYsIGBjb2xvcnNgKSkudGhlbigoc25hcHNob3QpID0+IHtcbi8vICAgICBpZiAoc25hcHNob3QuZXhpc3RzKCkpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZGF0YSBhdmFpbGFibGVcIik7XG4vLyAgICAgfVxuLy8gfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4vLyB9KTtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZvY2FiU2V0KCkge31cbmNvbnN0IERhdGFiYXNlID0gZnVuY3Rpb24oKSB7XG4gICAgZ2V0KGNoaWxkKGRiUmVmLCBgY29sb3JzYCkpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGlmIChzbmFwc2hvdC5leGlzdHMoKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PntzbmFwc2hvdC52YWwoKX08L2Rpdj4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PlwiTm8gZGF0YSBhdmFpbGFibGVcIjwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG59XG5cbi8vIGVzc2FpZSgpXG5jb25zb2xlLmxvZyhlc3NhaWUpO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZGZmMGU0YWUzOGRkOWYzYWU0OFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUFwcCIsImdldERhdGFiYXNlIiwicmVmIiwiY2hpbGQiLCJnZXQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImRhdGFiYXNlIiwiZGJSZWYiLCJEYXRhYmFzZSIsInRoZW4iLCJzbmFwc2hvdCIsImV4aXN0cyIsImNyZWF0ZUVsZW1lbnQiLCJ2YWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlc3NhaWUiXSwic291cmNlUm9vdCI6IiJ9