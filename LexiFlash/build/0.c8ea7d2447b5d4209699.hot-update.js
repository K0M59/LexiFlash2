"use strict";
self["webpackHotUpdatelexiflash2"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


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
/******/ 	__webpack_require__.h = () => ("15c3a916caa08a421632")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jOGVhN2QyNDQ3YjVkNDIwOTY5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUU5Q0ksR0FBRyxDQUFDQyxLQUFLLENBQUNDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztFQUN0QyxJQUFJQSxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7SUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDL0IsQ0FBQyxNQUFNO0lBQ0hGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBQ3BDO0FBQ0osQ0FBQyxDQUFDLFNBQU0sQ0FBQyxVQUFDRSxLQUFLLEVBQUs7RUFDaEJILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQSxLQUFLLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBSUYsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHZCw0REFBVSxDQUFDVyxTQUFTLENBQUM7QUFFbEMsU0FBU0ksR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU9sQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSEEsMERBQUEsYUFBSSwyQ0FBNkMsQ0FBQyxlQUVsREEsMERBQUEsV0FBUSxDQUNWLENBQUM7QUFDUDtBQUVBaUIsSUFBSSxDQUFDSSxNQUFNLGVBQUNyQiwwREFBQSxDQUFDa0IsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUMxQnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi8uL0xleGlGbGFzaC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbGV4aWZsYXNoMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5nZXQoY2hpbGQoZGJSZWYsIGAxYCkpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGRhdGEgYXZhaWxhYmxlXCIpO1xuICAgIH1cbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufSk7XG5cblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGgxPlRoZSBjb2RpbmcgZW52aXJvbm1lbnQgaXMgcmVhZHkgZm9yIG1hZ2ljPC9oMT5cbiAgICAgICAgey8qPEZldGNoRXhhbXBsZSAvPiovfVxuICAgICAgICA8aDE+PC9oMT5cbiAgICA8Lz5cbn1cblxucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNWMzYTkxNmNhYTA4YTQyMTYzMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsImdldCIsImNoaWxkIiwiZGJSZWYiLCJ0aGVuIiwic25hcHNob3QiLCJleGlzdHMiLCJjb25zb2xlIiwibG9nIiwidmFsIiwiZXJyb3IiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=