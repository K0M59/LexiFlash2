"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);




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
var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
var database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.getDatabase)(app);

// const FetchExample = () => {
//     const [data, setData] = useState(false);
//
//     useEffect(() => {
//         fetch("https://api64.ipify.org")
//             .then((response) => response.text())
//             .then((ip) => {
//                 setData(ip);
//             });
//     });
//
//     if (data === false) {
//         return <h1>Ustalam adres IP...</h1>;
//     } else {
//         return <h1>Twoje IP: {data}</h1>;
//     }
// };

// documentation on reading and writing data in realtime database in Firebase : https://firebase.google.com/docs/database/web/read-and-write

var dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.getDatabase)());
(0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.child)(dbRef, "1/".concat(lex))).then(function (snapshot) {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
})["catch"](function (error) {
  console.error(error);
});
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The coding environment is ready for magic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null));
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3520eab2b3486b2965ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NDJmY2ZhNmQ4MDEyMGRkNTczYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNMO0FBQ0Q7QUFDb0I7QUFFakUsSUFBTVMsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0VBQzdDQyxXQUFXLEVBQUUsd0VBQXdFO0VBQ3JGQyxTQUFTLEVBQUUsaUJBQWlCO0VBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0VBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0VBQ2xEQyxhQUFhLEVBQUU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR2QsMkRBQWEsQ0FBQ0ssY0FBYyxDQUFDOztBQUd6QztBQUNBLElBQU1VLFFBQVEsR0FBR2QsOERBQVcsQ0FBQ2EsR0FBRyxDQUFDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQU1FLEtBQUssR0FBR2Qsc0RBQUcsQ0FBQ0QsOERBQVcsQ0FBQyxDQUFDLENBQUM7QUFDaENHLHNEQUFHLENBQUNELHdEQUFLLENBQUNhLEtBQUssT0FBQUMsTUFBQSxDQUFPQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7RUFDN0MsSUFBSUEsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFO0lBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQy9CLENBQUMsTUFBTTtJQUNIRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztFQUNwQztBQUNKLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQ0UsS0FBSyxFQUFLO0VBQ2hCSCxPQUFPLENBQUNHLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUlGLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzlCLDREQUFVLENBQUMyQixTQUFTLENBQUM7QUFFbEMsU0FBU0ksR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU9sQywwREFBQSxDQUFBQSx1REFBQSxxQkFDSEEsMERBQUEsYUFBSSwyQ0FBNkMsQ0FBQyxlQUVsREEsMERBQUEsV0FBUSxDQUNWLENBQUM7QUFDUDtBQUVBaUMsSUFBSSxDQUFDSSxNQUFNLGVBQUNyQywwREFBQSxDQUFDa0MsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuRXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIGNoaWxkLCBnZXQgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURseHJ3dG1tTGZkZVhMMlh0YmkyV2JnX3pmR21VaUNnMFwiLFxuICAgIGF1dGhEb21haW46IFwibGV4aWZsYXNoLWZmOTNjLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbGV4aWZsYXNoLWZmOTNjLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICBwcm9qZWN0SWQ6IFwibGV4aWZsYXNoLWZmOTNjXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJsZXhpZmxhc2gtZmY5M2MuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NjY4MDg2NDc4MzFcIixcbiAgICBhcHBJZDogXCIxOjk2NjgwODY0NzgzMTp3ZWI6M2MxODdiZmZkMjBiZTc3YThhZDFkMlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1WNjhWS0dUVDdCXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cbi8vIEluaXRpYWxpemUgUmVhbHRpbWUgRGF0YWJhc2UgYW5kIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgc2VydmljZVxuY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApO1xuXG4vLyBjb25zdCBGZXRjaEV4YW1wbGUgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy9cbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpNjQuaXBpZnkub3JnXCIpXG4vLyAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbi8vICAgICAgICAgICAgIC50aGVuKChpcCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHNldERhdGEoaXApO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGlmIChkYXRhID09PSBmYWxzZSkge1xuLy8gICAgICAgICByZXR1cm4gPGgxPlVzdGFsYW0gYWRyZXMgSVAuLi48L2gxPjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gPGgxPlR3b2plIElQOiB7ZGF0YX08L2gxPjtcbi8vICAgICB9XG4vLyB9O1xuXG4vLyBkb2N1bWVudGF0aW9uIG9uIHJlYWRpbmcgYW5kIHdyaXRpbmcgZGF0YSBpbiByZWFsdGltZSBkYXRhYmFzZSBpbiBGaXJlYmFzZSA6IGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2RhdGFiYXNlL3dlYi9yZWFkLWFuZC13cml0ZVxuXG5jb25zdCBkYlJlZiA9IHJlZihnZXREYXRhYmFzZSgpKTtcbmdldChjaGlsZChkYlJlZiwgYDEvJHtsZXh9YCkpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGRhdGEgYXZhaWxhYmxlXCIpO1xuICAgIH1cbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufSk7XG5cblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxPlRoZSBjb2RpbmcgZW52aXJvbm1lbnQgaXMgcmVhZHkgZm9yIG1hZ2ljPC9oMT5cbiAgICAgICAgey8qPEZldGNoRXhhbXBsZSAvPiovfVxuICAgICAgICA8aDE+PC9oMT5cbiAgICA8Lz5cbn1cblxucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNTIwZWFiMmIzNDg2YjI5NjVlZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsImluaXRpYWxpemVBcHAiLCJnZXREYXRhYmFzZSIsInJlZiIsImNoaWxkIiwiZ2V0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsImRiUmVmIiwiY29uY2F0IiwibGV4IiwidGhlbiIsInNuYXBzaG90IiwiZXhpc3RzIiwiY29uc29sZSIsImxvZyIsInZhbCIsImVycm9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9