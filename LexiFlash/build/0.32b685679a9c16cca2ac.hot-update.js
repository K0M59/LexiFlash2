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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The coding environment is ready for magic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FetchExample, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, database.readTransaction()));
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b9b48c225f5265e4ab22")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMmI2ODU2NzlhOWMxNmNjYTJhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNMO0FBQ0Q7QUFDRztBQUVoRCxJQUFNTSxjQUFjLEdBQUc7RUFDbkJDLE1BQU0sRUFBRSx5Q0FBeUM7RUFDakRDLFVBQVUsRUFBRSxpQ0FBaUM7RUFDN0NDLFdBQVcsRUFBRSx3RUFBd0U7RUFDckZDLFNBQVMsRUFBRSxpQkFBaUI7RUFDNUJDLGFBQWEsRUFBRSw2QkFBNkI7RUFDNUNDLGlCQUFpQixFQUFFLGNBQWM7RUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7RUFDbERDLGFBQWEsRUFBRTtBQUNuQixDQUFDOztBQUVEO0FBQ0EsSUFBTUMsR0FBRyxHQUFHWCwyREFBYSxDQUFDRSxjQUFjLENBQUM7O0FBR3pDO0FBQ0EsSUFBTVUsUUFBUSxHQUFHWCw4REFBVyxDQUFDVSxHQUFHLENBQUM7QUFFakMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUN2QixJQUFBQyxTQUFBLEdBQXdCakIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWtCLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWhDRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBRXBCakIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pxQixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FDM0JDLElBQUksQ0FBQyxVQUFDQyxRQUFRO01BQUEsT0FBS0EsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDbkNGLElBQUksQ0FBQyxVQUFDRyxFQUFFLEVBQUs7TUFDVkwsT0FBTyxDQUFDSyxFQUFFLENBQUM7SUFDZixDQUFDLENBQUM7RUFDVixDQUFDLENBQUM7RUFFRixJQUFJTixJQUFJLEtBQUssS0FBSyxFQUFFO0lBQ2hCLG9CQUFPckIsMERBQUEsYUFBSSxxQkFBdUIsQ0FBQztFQUN2QyxDQUFDLE1BQU07SUFDSCxvQkFBT0EsMERBQUEsYUFBSSxZQUFVLEVBQUNxQixJQUFTLENBQUM7RUFDcEM7QUFDSixDQUFDO0FBRUQsSUFBTVEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHN0IsNERBQVUsQ0FBQzBCLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT2pDLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNIQSwwREFBQSxhQUFJLDJDQUE2QyxDQUFDLGVBQ2xEQSwwREFBQSxDQUFDaUIsWUFBWSxNQUFFLENBQUMsZUFDaEJqQiwwREFBQSxhQUFLZ0IsUUFBUSxDQUFDbUIsZUFBZSxDQUFDLENBQU0sQ0FDdEMsQ0FBQztBQUNQO0FBRUFILElBQUksQ0FBQ0ksTUFBTSxlQUFDcEMsMERBQUEsQ0FBQ2lDLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDcERwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xleGlmbGFzaDIvLi9MZXhpRmxhc2gvanMvYXBwLmpzIiwid2VicGFjazovL2xleGlmbGFzaDIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RGx4cnd0bW1MZmRlWEwyWHRiaTJXYmdfemZHbVVpQ2cwXCIsXG4gICAgYXV0aERvbWFpbjogXCJsZXhpZmxhc2gtZmY5M2MuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9sZXhpZmxhc2gtZmY5M2MtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxuICAgIHByb2plY3RJZDogXCJsZXhpZmxhc2gtZmY5M2NcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImxleGlmbGFzaC1mZjkzYy5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjk2NjgwODY0NzgzMVwiLFxuICAgIGFwcElkOiBcIjE6OTY2ODA4NjQ3ODMxOndlYjozYzE4N2JmZmQyMGJlNzdhOGFkMWQyXCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVY2OFZLR1RUN0JcIlxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cblxuLy8gSW5pdGlhbGl6ZSBSZWFsdGltZSBEYXRhYmFzZSBhbmQgZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBzZXJ2aWNlXG5jb25zdCBkYXRhYmFzZSA9IGdldERhdGFiYXNlKGFwcCk7XG5cbmNvbnN0IEZldGNoRXhhbXBsZSA9ICgpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpNjQuaXBpZnkub3JnXCIpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKChpcCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldERhdGEoaXApO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIDxoMT5Vc3RhbGFtIGFkcmVzIElQLi4uPC9oMT47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxoMT5Ud29qZSBJUDoge2RhdGF9PC9oMT47XG4gICAgfVxufTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMT5UaGUgY29kaW5nIGVudmlyb25tZW50IGlzIHJlYWR5IGZvciBtYWdpYzwvaDE+XG4gICAgICAgIDxGZXRjaEV4YW1wbGUgLz5cbiAgICAgICAgPGgxPntkYXRhYmFzZS5yZWFkVHJhbnNhY3Rpb24oKX08L2gxPlxuICAgIDwvPlxufVxuXG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI5YjQ4YzIyNWY1MjY1ZTRhYjIyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiaW5pdGlhbGl6ZUFwcCIsImdldERhdGFiYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsIkZldGNoRXhhbXBsZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiaXAiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJGcmFnbWVudCIsInJlYWRUcmFuc2FjdGlvbiIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=