"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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
var essaie = function essaie() {
  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.child)(dbRef, "colors")).then(function (snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })["catch"](function (error) {
    console.error(error);
  });
};

// essaie()

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bf7686e8c86110410846")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xOTIzYjg3YzdlZmUxYmRhMjkxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFDb0I7QUFFakUsSUFBTVEsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0VBQzdDQyxXQUFXLEVBQUUsd0VBQXdFO0VBQ3JGQyxTQUFTLEVBQUUsaUJBQWlCO0VBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0VBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0VBQ2xEQyxhQUFhLEVBQUU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR2QsMkRBQWEsQ0FBQ0ssY0FBYyxDQUFDOztBQUV6QztBQUNBLElBQU1VLFFBQVEsR0FBR2QsOERBQVcsQ0FBQ2EsR0FBRyxDQUFDOztBQUVqQzs7QUFFQSxJQUFNRSxLQUFLLEdBQUdkLHNEQUFHLENBQUNELDhEQUFXLENBQUMsQ0FBQyxDQUFDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1nQixNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFjO0VBQ3RCYixzREFBRyxDQUFDRCx3REFBSyxDQUFDYSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7SUFDM0MsSUFBSUEsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFO01BQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsTUFBTTtNQUNIRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQztFQUNKLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQ0UsS0FBSyxFQUFLO0lBQ2hCSCxPQUFPLENBQUNHLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ3hCLENBQUMsQ0FBQztBQUNOLENBQUM7O0FBRUQ7Ozs7Ozs7O1VDL0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9zcmMvYXNzZXRzL2RhdGEvRGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBjaGlsZCwgZ2V0IH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lEbHhyd3RtbUxmZGVYTDJYdGJpMldiZ196ZkdtVWlDZzBcIixcbiAgICBhdXRoRG9tYWluOiBcImxleGlmbGFzaC1mZjkzYy5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2xleGlmbGFzaC1mZjkzYy1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXG4gICAgcHJvamVjdElkOiBcImxleGlmbGFzaC1mZjkzY1wiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwibGV4aWZsYXNoLWZmOTNjLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTY2ODA4NjQ3ODMxXCIsXG4gICAgYXBwSWQ6IFwiMTo5NjY4MDg2NDc4MzE6d2ViOjNjMTg3YmZmZDIwYmU3N2E4YWQxZDJcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctVjY4VktHVFQ3QlwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuLy8gSW5pdGlhbGl6ZSBSZWFsdGltZSBEYXRhYmFzZSBhbmQgZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBzZXJ2aWNlXG5jb25zdCBkYXRhYmFzZSA9IGdldERhdGFiYXNlKGFwcCk7XG5cbi8vIGRvY3VtZW50YXRpb24gb24gcmVhZGluZyBhbmQgd3JpdGluZyBkYXRhIGluIHJlYWx0aW1lIGRhdGFiYXNlIGluIEZpcmViYXNlIDogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvZGF0YWJhc2Uvd2ViL3JlYWQtYW5kLXdyaXRlXG5cbmNvbnN0IGRiUmVmID0gcmVmKGdldERhdGFiYXNlKCkpO1xuXG4vLyBnZXQoY2hpbGQoZGJSZWYsIGBjb2xvcnNgKSkudGhlbigoc25hcHNob3QpID0+IHtcbi8vICAgICBpZiAoc25hcHNob3QuZXhpc3RzKCkpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZGF0YSBhdmFpbGFibGVcIik7XG4vLyAgICAgfVxuLy8gfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4vLyB9KTtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZvY2FiU2V0KCkge31cbmNvbnN0IGVzc2FpZSA9IGZ1bmN0aW9uKCkge1xuICAgIGdldChjaGlsZChkYlJlZiwgYGNvbG9yc2ApKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICBpZiAoc25hcHNob3QuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZGF0YSBhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG59XG5cbi8vIGVzc2FpZSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmY3Njg2ZThjODYxMTA0MTA4NDZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWxpemVBcHAiLCJnZXREYXRhYmFzZSIsInJlZiIsImNoaWxkIiwiZ2V0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsImRiUmVmIiwiZXNzYWllIiwidGhlbiIsInNuYXBzaG90IiwiZXhpc3RzIiwiY29uc29sZSIsImxvZyIsInZhbCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==