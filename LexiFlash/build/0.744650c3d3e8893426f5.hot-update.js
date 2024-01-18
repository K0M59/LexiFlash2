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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The coding environment is ready for magic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, database.read()));
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9979c24ef290b3f36043")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NDQ2NTBjM2QzZTg4OTM0MjZmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNMO0FBQ0Q7QUFDaUI7QUFFOUQsSUFBTVEsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0VBQzdDQyxXQUFXLEVBQUUsd0VBQXdFO0VBQ3JGQyxTQUFTLEVBQUUsaUJBQWlCO0VBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0VBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0VBQ2xEQyxhQUFhLEVBQUU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR2IsMkRBQWEsQ0FBQ0ksY0FBYyxDQUFDOztBQUd6QztBQUNBLElBQU1VLFFBQVEsR0FBR2IsOERBQVcsQ0FBQ1ksR0FBRyxDQUFDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUlBLElBQU1FLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR25CLDREQUFVLENBQUNnQixTQUFTLENBQUM7QUFFbEMsU0FBU0ksR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU92QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSEEsMERBQUEsYUFBSSwyQ0FBNkMsQ0FBQyxlQUVsREEsMERBQUEsYUFBS2tCLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLENBQU0sQ0FDM0IsQ0FBQztBQUNQO0FBRUFKLElBQUksQ0FBQ0ssTUFBTSxlQUFDM0IsMERBQUEsQ0FBQ3VCLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDeERwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvanMvYXBwLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBvblZhbHVlIH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lEbHhyd3RtbUxmZGVYTDJYdGJpMldiZ196ZkdtVWlDZzBcIixcbiAgICBhdXRoRG9tYWluOiBcImxleGlmbGFzaC1mZjkzYy5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2xleGlmbGFzaC1mZjkzYy1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXG4gICAgcHJvamVjdElkOiBcImxleGlmbGFzaC1mZjkzY1wiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwibGV4aWZsYXNoLWZmOTNjLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTY2ODA4NjQ3ODMxXCIsXG4gICAgYXBwSWQ6IFwiMTo5NjY4MDg2NDc4MzE6d2ViOjNjMTg3YmZmZDIwYmU3N2E4YWQxZDJcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctVjY4VktHVFQ3QlwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuXG4vLyBJbml0aWFsaXplIFJlYWx0aW1lIERhdGFiYXNlIGFuZCBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIHNlcnZpY2VcbmNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoYXBwKTtcblxuLy8gY29uc3QgRmV0Y2hFeGFtcGxlID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgICAgZmV0Y2goXCJodHRwczovL2FwaTY0LmlwaWZ5Lm9yZ1wiKVxuLy8gICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4vLyAgICAgICAgICAgICAudGhlbigoaXApID0+IHtcbi8vICAgICAgICAgICAgICAgICBzZXREYXRhKGlwKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBpZiAoZGF0YSA9PT0gZmFsc2UpIHtcbi8vICAgICAgICAgcmV0dXJuIDxoMT5Vc3RhbGFtIGFkcmVzIElQLi4uPC9oMT47XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcmV0dXJuIDxoMT5Ud29qZSBJUDoge2RhdGF9PC9oMT47XG4vLyAgICAgfVxuLy8gfTtcblxuLy8gZG9jdW1lbnRhdGlvbiBvbiByZWFkaW5nIGFuZCB3cml0aW5nIGRhdGEgaW4gcmVhbHRpbWUgZGF0YWJhc2UgaW4gRmlyZWJhc2UgOiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9kYXRhYmFzZS93ZWIvcmVhZC1hbmQtd3JpdGVcblxuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8PlxuICAgICAgICA8aDE+VGhlIGNvZGluZyBlbnZpcm9ubWVudCBpcyByZWFkeSBmb3IgbWFnaWM8L2gxPlxuICAgICAgICB7Lyo8RmV0Y2hFeGFtcGxlIC8+Ki99XG4gICAgICAgIDxoMT57ZGF0YWJhc2UucmVhZCgpfTwvaDE+XG4gICAgPC8+XG59XG5cbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTk3OWMyNGVmMjkwYjNmMzYwNDNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJpbml0aWFsaXplQXBwIiwiZ2V0RGF0YWJhc2UiLCJyZWYiLCJvblZhbHVlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicmVhZCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=