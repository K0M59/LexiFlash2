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
/******/ 	__webpack_require__.h = () => ("c6988d187c44b6ae9066")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45OTc5YzI0ZWYyOTBiM2YzNjA0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNMO0FBQ0Q7QUFDaUI7QUFFOUQsSUFBTVEsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0VBQzdDQyxXQUFXLEVBQUUsd0VBQXdFO0VBQ3JGQyxTQUFTLEVBQUUsaUJBQWlCO0VBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0VBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0VBQ2xEQyxhQUFhLEVBQUU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR2IsMkRBQWEsQ0FBQ0ksY0FBYyxDQUFDOztBQUd6QztBQUNBLElBQU1VLFFBQVEsR0FBR2IsOERBQVcsQ0FBQ1ksR0FBRyxDQUFDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUlBLElBQU1FLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR25CLDREQUFVLENBQUNnQixTQUFTLENBQUM7QUFFbEMsU0FBU0ksR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU92QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSEEsMERBQUEsYUFBSSwyQ0FBNkMsQ0FBQyxlQUVsREEsMERBQUEsV0FBUSxDQUNWLENBQUM7QUFDUDtBQUVBc0IsSUFBSSxDQUFDSSxNQUFNLGVBQUMxQiwwREFBQSxDQUFDdUIsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4RHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIG9uVmFsdWUgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURseHJ3dG1tTGZkZVhMMlh0YmkyV2JnX3pmR21VaUNnMFwiLFxuICAgIGF1dGhEb21haW46IFwibGV4aWZsYXNoLWZmOTNjLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbGV4aWZsYXNoLWZmOTNjLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICBwcm9qZWN0SWQ6IFwibGV4aWZsYXNoLWZmOTNjXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJsZXhpZmxhc2gtZmY5M2MuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NjY4MDg2NDc4MzFcIixcbiAgICBhcHBJZDogXCIxOjk2NjgwODY0NzgzMTp3ZWI6M2MxODdiZmZkMjBiZTc3YThhZDFkMlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1WNjhWS0dUVDdCXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cbi8vIEluaXRpYWxpemUgUmVhbHRpbWUgRGF0YWJhc2UgYW5kIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgc2VydmljZVxuY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApO1xuXG4vLyBjb25zdCBGZXRjaEV4YW1wbGUgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy9cbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpNjQuaXBpZnkub3JnXCIpXG4vLyAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbi8vICAgICAgICAgICAgIC50aGVuKChpcCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHNldERhdGEoaXApO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGlmIChkYXRhID09PSBmYWxzZSkge1xuLy8gICAgICAgICByZXR1cm4gPGgxPlVzdGFsYW0gYWRyZXMgSVAuLi48L2gxPjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gPGgxPlR3b2plIElQOiB7ZGF0YX08L2gxPjtcbi8vICAgICB9XG4vLyB9O1xuXG4vLyBkb2N1bWVudGF0aW9uIG9uIHJlYWRpbmcgYW5kIHdyaXRpbmcgZGF0YSBpbiByZWFsdGltZSBkYXRhYmFzZSBpbiBGaXJlYmFzZSA6IGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2RhdGFiYXNlL3dlYi9yZWFkLWFuZC13cml0ZVxuXG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMT5UaGUgY29kaW5nIGVudmlyb25tZW50IGlzIHJlYWR5IGZvciBtYWdpYzwvaDE+XG4gICAgICAgIHsvKjxGZXRjaEV4YW1wbGUgLz4qL31cbiAgICAgICAgPGgxPjwvaDE+XG4gICAgPC8+XG59XG5cbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzY5ODhkMTg3YzQ0YjZhZTkwNjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJpbml0aWFsaXplQXBwIiwiZ2V0RGF0YWJhc2UiLCJyZWYiLCJvblZhbHVlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==