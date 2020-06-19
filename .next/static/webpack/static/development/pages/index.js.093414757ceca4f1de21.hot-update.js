webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/organisms/Notice/style.js":
/*!**********************************************!*\
  !*** ./components/organisms/Notice/style.js ***!
  \**********************************************/
/*! exports provided: Notice, ContentTitle, NoticeImageContainer, NoticeInformationCard, NoticeInformationTitle, NoticeInformationText, JoinButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Notice\", function() { return Notice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentTitle\", function() { return ContentTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoticeImageContainer\", function() { return NoticeImageContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoticeInformationCard\", function() { return NoticeInformationCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoticeInformationTitle\", function() { return NoticeInformationTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoticeInformationText\", function() { return NoticeInformationText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JoinButton\", function() { return JoinButton; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/color */ \"./public/color.js\");\n/* harmony import */ var _public_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/font */ \"./public/font.js\");\n\n\n\nvar NOTICE_IMAGE_WIDTH = \"336px\";\nvar NOTICE_IMAGE_HEIGHT = \"472px\";\nvar INTERVAL = \"30px\";\nvar Notice = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Notice\",\n  componentId: \"sc-1p8vm7d-0\"\n})([\"display:flex;flex-direction:row;width:100%;\"]);\nvar ContentTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"style__ContentTitle\",\n  componentId: \"sc-1p8vm7d-1\"\n})([\"align-self:flex-start;font-weight:700;color:\", \";font-size:\", \";padding:20px 0 20px 20px;margin:0;\"], _public_color__WEBPACK_IMPORTED_MODULE_1__[\"BLACK\"], _public_font__WEBPACK_IMPORTED_MODULE_2__[\"TEXT_M\"]);\nvar NoticeImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__NoticeImageContainer\",\n  componentId: \"sc-1p8vm7d-2\"\n})([\"flex:0 0 \", \";height:\", \";overflow:hidden;border-radius:10px;margin-right:\", \";\"], NOTICE_IMAGE_WIDTH, NOTICE_IMAGE_HEIGHT, INTERVAL); // export const NoticeImage = styled.img.attrs({\n//   src: NoticePromotion,\n//   alt: \"Notice Promotion Image\",\n// })`\n//   width: 100%;\n//   height: 100%;\n// `;\n\nvar NoticeInformationCard = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__NoticeInformationCard\",\n  componentId: \"sc-1p8vm7d-3\"\n})([\"\", \" \", \" position:relative;width:calc(100% - (\", \" + \", \"));max-height:\", \";\"], Card, CardShadow, NOTICE_IMAGE_WIDTH, INTERVAL, NOTICE_IMAGE_HEIGHT);\nvar NoticeInformationTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3.withConfig({\n  displayName: \"style__NoticeInformationTitle\",\n  componentId: \"sc-1p8vm7d-4\"\n})([\"width:100%;padding-bottom:20px;font-size:\", \";font-weight:500;color:\", \";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\"], _public_font__WEBPACK_IMPORTED_MODULE_2__[\"TEXT_L\"], _public_color__WEBPACK_IMPORTED_MODULE_1__[\"BLACK\"]);\nvar NoticeInformationText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"style__NoticeInformationText\",\n  componentId: \"sc-1p8vm7d-5\"\n})([\"margin:18px 0;overflow-y:scroll;color:\", \";font-size:\", \";& > a{color:\", \";}\"], _public_color__WEBPACK_IMPORTED_MODULE_1__[\"DARK_GRAY\"], _public_font__WEBPACK_IMPORTED_MODULE_2__[\"TEXT_M\"], _public_color__WEBPACK_IMPORTED_MODULE_1__[\"MAIN_COLOR\"]);\nvar JoinButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Button).withConfig({\n  displayName: \"style__JoinButton\",\n  componentId: \"sc-1p8vm7d-6\"\n})([\"align-self:center;width:\", \";line-height:\", \";\"], function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ob3RpY2Uvc3R5bGUuanM/ZDYxOCJdLCJuYW1lcyI6WyJOT1RJQ0VfSU1BR0VfV0lEVEgiLCJOT1RJQ0VfSU1BR0VfSEVJR0hUIiwiSU5URVJWQUwiLCJOb3RpY2UiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW50VGl0bGUiLCJoMiIsIkJMQUNLIiwiVEVYVF9NIiwiTm90aWNlSW1hZ2VDb250YWluZXIiLCJOb3RpY2VJbmZvcm1hdGlvbkNhcmQiLCJDYXJkIiwiQ2FyZFNoYWRvdyIsIk5vdGljZUluZm9ybWF0aW9uVGl0bGUiLCJoMyIsIlRFWFRfTCIsIk5vdGljZUluZm9ybWF0aW9uVGV4dCIsInAiLCJEQVJLX0dSQVkiLCJNQUlOX0NPTE9SIiwiSm9pbkJ1dHRvbiIsIkJ1dHRvbiIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxPQUEzQjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLE9BQTVCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLE1BQWpCO0FBRU8sSUFBTUMsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1EQUFaO0FBTUEsSUFBTUMsWUFBWSxHQUFHRix5REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLDJHQUdkQyxtREFIYyxFQUlWQyxtREFKVSxDQUFsQjtBQVNBLElBQU1DLG9CQUFvQixHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdGQUNuQkwsa0JBRG1CLEVBRXJCQyxtQkFGcUIsRUFLZkMsUUFMZSxDQUExQixDLENBUVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTVMscUJBQXFCLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0ZBQzlCTyxJQUQ4QixFQUU5QkMsVUFGOEIsRUFJVmIsa0JBSlUsRUFJY0UsUUFKZCxFQUtsQkQsbUJBTGtCLENBQTNCO0FBUUEsSUFBTWEsc0JBQXNCLEdBQUdWLHlEQUFNLENBQUNXLEVBQVY7QUFBQTtBQUFBO0FBQUEsNElBR3BCQyxtREFIb0IsRUFLeEJSLG1EQUx3QixDQUE1QjtBQVdBLElBQU1TLHFCQUFxQixHQUFHYix5REFBTSxDQUFDYyxDQUFWO0FBQUE7QUFBQTtBQUFBLHFGQUd2QkMsdURBSHVCLEVBSW5CVixtREFKbUIsRUFNckJXLHdEQU5xQixDQUEzQjtBQWVBLElBQU1DLFVBQVUsR0FBR2pCLGlFQUFNLENBQUNrQixNQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsdURBRVosVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBakI7QUFBQSxDQUZZLEVBR04sVUFBQ0QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsTUFBakI7QUFBQSxDQUhNLENBQWhCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9vcmdhbmlzbXMvTm90aWNlL3N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEJMQUNLLCBEQVJLX0dSQVksIE1BSU5fQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2NvbG9yXCI7XG5pbXBvcnQgeyBURVhUX00sIFRFWFRfTCB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvZm9udFwiO1xuXG5jb25zdCBOT1RJQ0VfSU1BR0VfV0lEVEggPSBcIjMzNnB4XCI7XG5jb25zdCBOT1RJQ0VfSU1BR0VfSEVJR0hUID0gXCI0NzJweFwiO1xuXG5jb25zdCBJTlRFUlZBTCA9IFwiMzBweFwiO1xuXG5leHBvcnQgY29uc3QgTm90aWNlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFRpdGxlID0gc3R5bGVkLmgyYFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHtCTEFDS307XG4gIGZvbnQtc2l6ZTogJHtURVhUX019O1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAyMHB4O1xuICBtYXJnaW46IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgTm90aWNlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAwIDAgJHtOT1RJQ0VfSU1BR0VfV0lEVEh9O1xuICBoZWlnaHQ6ICR7Tk9USUNFX0lNQUdFX0hFSUdIVH07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogJHtJTlRFUlZBTH07XG5gO1xuXG4vLyBleHBvcnQgY29uc3QgTm90aWNlSW1hZ2UgPSBzdHlsZWQuaW1nLmF0dHJzKHtcbi8vICAgc3JjOiBOb3RpY2VQcm9tb3Rpb24sXG4vLyAgIGFsdDogXCJOb3RpY2UgUHJvbW90aW9uIEltYWdlXCIsXG4vLyB9KWBcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vIGA7XG5cbmV4cG9ydCBjb25zdCBOb3RpY2VJbmZvcm1hdGlvbkNhcmQgPSBzdHlsZWQuZGl2YFxuICAke0NhcmR9XG4gICR7Q2FyZFNoYWRvd31cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gKCR7Tk9USUNFX0lNQUdFX1dJRFRIfSArICR7SU5URVJWQUx9KSk7XG4gIG1heC1oZWlnaHQ6ICR7Tk9USUNFX0lNQUdFX0hFSUdIVH07XG5gO1xuXG5leHBvcnQgY29uc3QgTm90aWNlSW5mb3JtYXRpb25UaXRsZSA9IHN0eWxlZC5oM2BcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6ICR7VEVYVF9MfTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICR7QkxBQ0t9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmA7XG5cbmV4cG9ydCBjb25zdCBOb3RpY2VJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQucGBcbiAgbWFyZ2luOiAxOHB4IDA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgY29sb3I6ICR7REFSS19HUkFZfTtcbiAgZm9udC1zaXplOiAke1RFWFRfTX07XG4gICYgPiBhIHtcbiAgICBjb2xvcjogJHtNQUlOX0NPTE9SfTtcbiAgfVxuICAvKiAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuYDtcblxuZXhwb3J0IGNvbnN0IEpvaW5CdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRofTtcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5oZWlnaHR9O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/organisms/Notice/style.js\n");

/***/ })

})