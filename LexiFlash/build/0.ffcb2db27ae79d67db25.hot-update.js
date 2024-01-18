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
  databaseURL: "https://DATABASE_NAME.firebaseio.com"
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
/******/ 	__webpack_require__.h = () => ("6f7270c5448c8808633a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZmNiMmRiMjdhZTc5ZDY3ZGIyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQjtBQUNEO0FBQ0c7O0FBRWhEO0FBQ0E7QUFDQSxJQUFNSSxjQUFjLEdBQUc7RUFDbkI7RUFDQTtFQUNBQyxXQUFXLEVBQUU7QUFDakIsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLEdBQUcsR0FBR0osMklBQWEsQ0FBQ0UsY0FBYyxDQUFDOztBQUd6QztBQUNBLElBQU1HLFFBQVEsR0FBR0osZ0pBQVcsQ0FBQ0csR0FBRyxDQUFDO0FBRWpDLElBQU1FLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1YsNERBQVUsQ0FBQ08sU0FBUyxDQUFDO0FBRWxDLFNBQVNJLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPWiwwREFBQSxhQUFJLDJDQUE2QyxDQUFDO0FBQzdEO0FBRUFXLElBQUksQ0FBQ0csTUFBTSxlQUFDZCwwREFBQSxDQUFDWSxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQzNCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG4vLyBUT0RPOiBSZXBsYWNlIHRoZSBmb2xsb3dpbmcgd2l0aCB5b3VyIGFwcCdzIEZpcmViYXNlIHByb2plY3QgY29uZmlndXJhdGlvblxuLy8gU2VlOiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvbGVhcm4tbW9yZSNjb25maWctb2JqZWN0XG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICAvLyAuLi5cbiAgICAvLyBUaGUgdmFsdWUgb2YgYGRhdGFiYXNlVVJMYCBkZXBlbmRzIG9uIHRoZSBsb2NhdGlvbiBvZiB0aGUgZGF0YWJhc2VcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL0RBVEFCQVNFX05BTUUuZmlyZWJhc2Vpby5jb21cIixcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cbi8vIEluaXRpYWxpemUgUmVhbHRpbWUgRGF0YWJhc2UgYW5kIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgc2VydmljZVxuY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPGgxPlRoZSBjb2RpbmcgZW52aXJvbm1lbnQgaXMgcmVhZHkgZm9yIG1hZ2ljPC9oMT5cbn1cblxucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZjcyNzBjNTQ0OGM4ODA4NjMzYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJpbml0aWFsaXplQXBwIiwiZ2V0RGF0YWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImRhdGFiYXNlVVJMIiwiYXBwIiwiZGF0YWJhc2UiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9