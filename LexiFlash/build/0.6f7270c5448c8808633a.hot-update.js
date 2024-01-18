"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/database'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
var firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://lexiflash-ff93c-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
var app = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
var database = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/database'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(app);
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The coding environment is ready for magic");
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4230f726a28600a9afac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZjcyNzBjNTQ0OGM4ODA4NjMzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQjtBQUNEO0FBQ0c7O0FBRWhEO0FBQ0E7QUFDQSxJQUFNSSxjQUFjLEdBQUc7RUFDbkI7RUFDQTtFQUNBQyxXQUFXLEVBQUU7QUFDakIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR0osMklBQWEsQ0FBQ0UsY0FBYyxDQUFDOztBQUd6QztBQUNBLElBQU1HLFFBQVEsR0FBR0osZ0pBQVcsQ0FBQ0csR0FBRyxDQUFDO0FBRWpDLElBQU1FLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1YsNERBQVUsQ0FBQ08sU0FBUyxDQUFDO0FBRWxDLFNBQVNJLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPWiwwREFBQSxhQUFJLDJDQUE2QyxDQUFDO0FBQzdEO0FBRUFXLElBQUksQ0FBQ0csTUFBTSxlQUFDZCwwREFBQSxDQUFDWSxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQzNCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG4vLyBUT0RPOiBSZXBsYWNlIHRoZSBmb2xsb3dpbmcgd2l0aCB5b3VyIGFwcCdzIEZpcmViYXNlIHByb2plY3QgY29uZmlndXJhdGlvblxuLy8gU2VlOiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvbGVhcm4tbW9yZSNjb25maWctb2JqZWN0XG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICAvLyAuLi5cbiAgICAvLyBUaGUgdmFsdWUgb2YgYGRhdGFiYXNlVVJMYCBkZXBlbmRzIG9uIHRoZSBsb2NhdGlvbiBvZiB0aGUgZGF0YWJhc2VcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2xleGlmbGFzaC1mZjkzYy1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL1wiLFxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cblxuLy8gSW5pdGlhbGl6ZSBSZWFsdGltZSBEYXRhYmFzZSBhbmQgZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBzZXJ2aWNlXG5jb25zdCBkYXRhYmFzZSA9IGdldERhdGFiYXNlKGFwcCk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8aDE+VGhlIGNvZGluZyBlbnZpcm9ubWVudCBpcyByZWFkeSBmb3IgbWFnaWM8L2gxPlxufVxuXG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQyMzBmNzI2YTI4NjAwYTlhZmFjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImluaXRpYWxpemVBcHAiLCJnZXREYXRhYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiZGF0YWJhc2VVUkwiLCJhcHAiLCJkYXRhYmFzZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=