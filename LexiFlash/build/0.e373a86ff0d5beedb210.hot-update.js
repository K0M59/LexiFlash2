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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




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
var FetchExample = function FetchExample() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("https://api64.ipify.org").then(function (response) {
      return response.text();
    }).then(function (ip) {
      setData(ip);
    });
  });
  if (data === false) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Ustalam adres IP...");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Twoje IP: ", data);
  }
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The coding environment is ready for magic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FetchExample, null));
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("32b685679a9c16cca2ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMzczYTg2ZmYwZDViZWVkYjIxMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNMO0FBQ0Q7QUFDRztBQUVoRCxJQUFNTSxjQUFjLEdBQUc7RUFDbkJDLE1BQU0sRUFBRSx5Q0FBeUM7RUFDakRDLFVBQVUsRUFBRSxpQ0FBaUM7RUFDN0NDLFdBQVcsRUFBRSx3RUFBd0U7RUFDckZDLFNBQVMsRUFBRSxpQkFBaUI7RUFDNUJDLGFBQWEsRUFBRSw2QkFBNkI7RUFDNUNDLGlCQUFpQixFQUFFLGNBQWM7RUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7RUFDbERDLGFBQWEsRUFBRTtBQUNuQixDQUFDOztBQUVEO0FBQ0EsSUFBTUMsR0FBRyxHQUFHWCwyREFBYSxDQUFDRSxjQUFjLENBQUM7O0FBR3pDO0FBQ0EsSUFBTVUsUUFBUSxHQUFHWCw4REFBVyxDQUFDVSxHQUFHLENBQUM7QUFFakMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUN2QixJQUFBQyxTQUFBLEdBQXdCakIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWtCLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWhDRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBRXBCakIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pxQixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FDM0JDLElBQUksQ0FBQyxVQUFDQyxRQUFRO01BQUEsT0FBS0EsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDbkNGLElBQUksQ0FBQyxVQUFDRyxFQUFFLEVBQUs7TUFDVkwsT0FBTyxDQUFDSyxFQUFFLENBQUM7SUFDZixDQUFDLENBQUM7RUFDVixDQUFDLENBQUM7RUFFRixJQUFJTixJQUFJLEtBQUssS0FBSyxFQUFFO0lBQ2hCLG9CQUFPckIsMERBQUEsYUFBSSxxQkFBdUIsQ0FBQztFQUN2QyxDQUFDLE1BQU07SUFDSCxvQkFBT0EsMERBQUEsYUFBSSxZQUFVLEVBQUNxQixJQUFTLENBQUM7RUFDcEM7QUFDSixDQUFDO0FBRUQsSUFBTVEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHN0IsNERBQVUsQ0FBQzBCLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT2pDLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNIQSwwREFBQSxhQUFJLDJDQUE2QyxDQUFDLGVBQ2xEQSwwREFBQSxDQUFDaUIsWUFBWSxNQUFFLENBQ2pCLENBQUM7QUFDUDtBQUVBZSxJQUFJLENBQUNHLE1BQU0sZUFBQ25DLDBEQUFBLENBQUNpQyxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQ25EcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpZmxhc2gyLy4vTGV4aUZsYXNoL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9sZXhpZmxhc2gyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0RGF0YWJhc2UgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURseHJ3dG1tTGZkZVhMMlh0YmkyV2JnX3pmR21VaUNnMFwiLFxuICAgIGF1dGhEb21haW46IFwibGV4aWZsYXNoLWZmOTNjLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbGV4aWZsYXNoLWZmOTNjLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICBwcm9qZWN0SWQ6IFwibGV4aWZsYXNoLWZmOTNjXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJsZXhpZmxhc2gtZmY5M2MuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NjY4MDg2NDc4MzFcIixcbiAgICBhcHBJZDogXCIxOjk2NjgwODY0NzgzMTp3ZWI6M2MxODdiZmZkMjBiZTc3YThhZDFkMlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1WNjhWS0dUVDdCXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cbi8vIEluaXRpYWxpemUgUmVhbHRpbWUgRGF0YWJhc2UgYW5kIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgc2VydmljZVxuY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApO1xuXG5jb25zdCBGZXRjaEV4YW1wbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwczovL2FwaTY0LmlwaWZ5Lm9yZ1wiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAudGhlbigoaXApID0+IHtcbiAgICAgICAgICAgICAgICBzZXREYXRhKGlwKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGRhdGEgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiA8aDE+VXN0YWxhbSBhZHJlcyBJUC4uLjwvaDE+O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8aDE+VHdvamUgSVA6IHtkYXRhfTwvaDE+O1xuICAgIH1cbn07XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8PlxuICAgICAgICA8aDE+VGhlIGNvZGluZyBlbnZpcm9ubWVudCBpcyByZWFkeSBmb3IgbWFnaWM8L2gxPlxuICAgICAgICA8RmV0Y2hFeGFtcGxlIC8+XG4gICAgPC8+XG59XG5cbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzJiNjg1Njc5YTljMTZjY2EyYWNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJpbml0aWFsaXplQXBwIiwiZ2V0RGF0YWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImRhdGFiYXNlIiwiRmV0Y2hFeGFtcGxlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGF0YSIsInNldERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJpcCIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsIkZyYWdtZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==