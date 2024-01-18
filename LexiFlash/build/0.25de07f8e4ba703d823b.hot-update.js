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

fetch(database).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
})["catch"](function (error) {
  console.log(error);
});
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The coding environment is ready for magic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, database.read()));
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bcfb5c7dd4b1c6a5bd11")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNWRlMDdmOGU0YmE3MDNkODIzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNMO0FBQ0Q7QUFDRztBQUVoRCxJQUFNTSxjQUFjLEdBQUc7RUFDbkJDLE1BQU0sRUFBRSx5Q0FBeUM7RUFDakRDLFVBQVUsRUFBRSxpQ0FBaUM7RUFDN0NDLFdBQVcsRUFBRSx3RUFBd0U7RUFDckZDLFNBQVMsRUFBRSxpQkFBaUI7RUFDNUJDLGFBQWEsRUFBRSw2QkFBNkI7RUFDNUNDLGlCQUFpQixFQUFFLGNBQWM7RUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7RUFDbERDLGFBQWEsRUFBRTtBQUNuQixDQUFDOztBQUVEO0FBQ0EsSUFBTUMsR0FBRyxHQUFHWCwyREFBYSxDQUFDRSxjQUFjLENBQUM7O0FBR3pDO0FBQ0EsSUFBTVUsUUFBUSxHQUFHWCw4REFBVyxDQUFDVSxHQUFHLENBQUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUFFLEtBQUssQ0FBQ0QsUUFBUSxDQUFDLENBQ1ZFLElBQUksQ0FBQyxVQUFBQyxRQUFRO0VBQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztBQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7RUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztBQUNyQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFHLEtBQUssRUFBSTtFQUNaRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVOLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3pCLDREQUFVLENBQUNzQixTQUFTLENBQUM7QUFFbEMsU0FBU0ksR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU83QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSEEsMERBQUEsYUFBSSwyQ0FBNkMsQ0FBQyxlQUVsREEsMERBQUEsYUFBS2dCLFFBQVEsQ0FBQ2dCLElBQUksQ0FBQyxDQUFNLENBQzNCLENBQUM7QUFDUDtBQUVBSixJQUFJLENBQUNLLE1BQU0sZUFBQ2pDLDBEQUFBLENBQUM2QixHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQy9EcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0RGF0YWJhc2UgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURseHJ3dG1tTGZkZVhMMlh0YmkyV2JnX3pmR21VaUNnMFwiLFxuICAgIGF1dGhEb21haW46IFwibGV4aWZsYXNoLWZmOTNjLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbGV4aWZsYXNoLWZmOTNjLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICBwcm9qZWN0SWQ6IFwibGV4aWZsYXNoLWZmOTNjXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJsZXhpZmxhc2gtZmY5M2MuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NjY4MDg2NDc4MzFcIixcbiAgICBhcHBJZDogXCIxOjk2NjgwODY0NzgzMTp3ZWI6M2MxODdiZmZkMjBiZTc3YThhZDFkMlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1WNjhWS0dUVDdCXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cbi8vIEluaXRpYWxpemUgUmVhbHRpbWUgRGF0YWJhc2UgYW5kIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgc2VydmljZVxuY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApO1xuXG4vLyBjb25zdCBGZXRjaEV4YW1wbGUgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy9cbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpNjQuaXBpZnkub3JnXCIpXG4vLyAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbi8vICAgICAgICAgICAgIC50aGVuKChpcCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHNldERhdGEoaXApO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGlmIChkYXRhID09PSBmYWxzZSkge1xuLy8gICAgICAgICByZXR1cm4gPGgxPlVzdGFsYW0gYWRyZXMgSVAuLi48L2gxPjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gPGgxPlR3b2plIElQOiB7ZGF0YX08L2gxPjtcbi8vICAgICB9XG4vLyB9O1xuXG4vLyBkb2N1bWVudGF0aW9uIG9uIHJlYWRpbmcgYW5kIHdyaXRpbmcgZGF0YSBpbiByZWFsdGltZSBkYXRhYmFzZSBpbiBGaXJlYmFzZSA6IGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2RhdGFiYXNlL3dlYi9yZWFkLWFuZC13cml0ZVxuXG5mZXRjaChkYXRhYmFzZSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxPlRoZSBjb2RpbmcgZW52aXJvbm1lbnQgaXMgcmVhZHkgZm9yIG1hZ2ljPC9oMT5cbiAgICAgICAgey8qPEZldGNoRXhhbXBsZSAvPiovfVxuICAgICAgICA8aDE+e2RhdGFiYXNlLnJlYWQoKX08L2gxPlxuICAgIDwvPlxufVxuXG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJjZmI1YzdkZDRiMWM2YTViZDExXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiaW5pdGlhbGl6ZUFwcCIsImdldERhdGFiYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInJlYWQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9