"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



// Initialize Firebase
var app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
var database = getDatabase(app);

// documentation on reading and writing data in realtime database in Firebase : https://firebase.google.com/docs/database/web/read-and-write

var dbRef = ref(getDatabase());
get(child(dbRef, "1")).then(function (snapshot) {
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
/******/ 	__webpack_require__.h = () => ("830dc49b456194a1e63e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNGNiMTA2OWUwZmFjMzEyOTA5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDs7QUFJOUM7QUFDQSxJQUFNSSxHQUFHLEdBQUdDLGFBQWEsQ0FBQ0MsY0FBYyxDQUFDOztBQUd6QztBQUNBLElBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDSixHQUFHLENBQUM7O0FBR2pDOztBQUVBLElBQU1LLEtBQUssR0FBR0MsR0FBRyxDQUFDRixXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ2hDRyxHQUFHLENBQUNDLEtBQUssQ0FBQ0gsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDSSxJQUFJLENBQUMsVUFBQ0MsUUFBUSxFQUFLO0VBQ3RDLElBQUlBLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsRUFBRTtJQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLENBQUMsQ0FBQztFQUMvQixDQUFDLE1BQU07SUFDSEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7RUFDcEM7QUFDSixDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUNFLEtBQUssRUFBSztFQUNoQkgsT0FBTyxDQUFDRyxLQUFLLENBQUNBLEtBQUssQ0FBQztBQUN4QixDQUFDLENBQUM7QUFJRixJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdwQiw0REFBVSxDQUFDaUIsU0FBUyxDQUFDO0FBRWxDLFNBQVNJLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPeEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0hBLDBEQUFBLGFBQUksMkNBQTZDLENBQUMsZUFFbERBLDBEQUFBLFdBQVEsQ0FDVixDQUFDO0FBQ1A7QUFFQXVCLElBQUksQ0FBQ0ksTUFBTSxlQUFDM0IsMERBQUEsQ0FBQ3dCLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDdkNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvanMvYXBwLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuXG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cbi8vIEluaXRpYWxpemUgUmVhbHRpbWUgRGF0YWJhc2UgYW5kIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgc2VydmljZVxuY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApO1xuXG5cbi8vIGRvY3VtZW50YXRpb24gb24gcmVhZGluZyBhbmQgd3JpdGluZyBkYXRhIGluIHJlYWx0aW1lIGRhdGFiYXNlIGluIEZpcmViYXNlIDogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvZGF0YWJhc2Uvd2ViL3JlYWQtYW5kLXdyaXRlXG5cbmNvbnN0IGRiUmVmID0gcmVmKGdldERhdGFiYXNlKCkpO1xuZ2V0KGNoaWxkKGRiUmVmLCBgMWApKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgIGlmIChzbmFwc2hvdC5leGlzdHMoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhzbmFwc2hvdC52YWwoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBkYXRhIGF2YWlsYWJsZVwiKTtcbiAgICB9XG59KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbn0pO1xuXG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMT5UaGUgY29kaW5nIGVudmlyb25tZW50IGlzIHJlYWR5IGZvciBtYWdpYzwvaDE+XG4gICAgICAgIHsvKjxGZXRjaEV4YW1wbGUgLz4qL31cbiAgICAgICAgPGgxPjwvaDE+XG4gICAgPC8+XG59XG5cbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODMwZGM0OWI0NTYxOTRhMWU2M2VcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VDb25maWciLCJkYXRhYmFzZSIsImdldERhdGFiYXNlIiwiZGJSZWYiLCJyZWYiLCJnZXQiLCJjaGlsZCIsInRoZW4iLCJzbmFwc2hvdCIsImV4aXN0cyIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJlcnJvciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==