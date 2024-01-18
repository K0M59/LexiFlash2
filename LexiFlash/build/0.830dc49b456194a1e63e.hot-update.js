"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


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
/******/ 	__webpack_require__.h = () => ("c8ea7d2447b5d4209699")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MzBkYzQ5YjQ1NjE5NGExZTYzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUU5QyxJQUFNSSxLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNoQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUNKLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztFQUN0QyxJQUFJQSxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7SUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDL0IsQ0FBQyxNQUFNO0lBQ0hGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBQ3BDO0FBQ0osQ0FBQyxDQUFDLFNBQU0sQ0FBQyxVQUFDRSxLQUFLLEVBQUs7RUFDaEJILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQSxLQUFLLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBSUYsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHaEIsNERBQVUsQ0FBQ2EsU0FBUyxDQUFDO0FBRWxDLFNBQVNJLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPcEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0hBLDBEQUFBLGFBQUksMkNBQTZDLENBQUMsZUFFbERBLDBEQUFBLFdBQVEsQ0FDVixDQUFDO0FBQ1A7QUFFQW1CLElBQUksQ0FBQ0ksTUFBTSxlQUFDdkIsMERBQUEsQ0FBQ29CLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDM0JwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvanMvYXBwLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgZGJSZWYgPSByZWYoZ2V0RGF0YWJhc2UoKSk7XG5nZXQoY2hpbGQoZGJSZWYsIGAxYCkpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGRhdGEgYXZhaWxhYmxlXCIpO1xuICAgIH1cbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufSk7XG5cblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxPlRoZSBjb2RpbmcgZW52aXJvbm1lbnQgaXMgcmVhZHkgZm9yIG1hZ2ljPC9oMT5cbiAgICAgICAgey8qPEZldGNoRXhhbXBsZSAvPiovfVxuICAgICAgICA8aDE+PC9oMT5cbiAgICA8Lz5cbn1cblxucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjOGVhN2QyNDQ3YjVkNDIwOTY5OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsImRiUmVmIiwicmVmIiwiZ2V0RGF0YWJhc2UiLCJnZXQiLCJjaGlsZCIsInRoZW4iLCJzbmFwc2hvdCIsImV4aXN0cyIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJlcnJvciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==