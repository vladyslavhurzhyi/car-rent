"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/CustomButton.jsx":
/*!*************************************!*\
  !*** ./components/CustomButton.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst CustomButton = (param)=>{\n    let { title, customStyles, btnType, handleClick, Icon } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: btnType || \"submit\",\n        className: \"\".concat(customStyles, \" block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full\"),\n        onClick: handleClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"flex-1\",\n            children: [\n                title,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-5 h-5\",\n                    fill: \"currentColor\",\n                    viewBox: \"0 0 24 24\",\n                    \"aria-hidden\": \"true\"\n                }, void 0, false, {\n                    fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CustomButton.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CustomButton.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CustomButton.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CustomButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomButton);\nvar _c;\n$RefreshReg$(_c, \"CustomButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNQSxlQUFlO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEVBQUU7SUFDdkUscUJBQ0UsOERBQUNDO1FBQ0NDLE1BQU1KLFdBQVc7UUFDakJLLFdBQVcsR0FBZ0IsT0FBYk4sY0FBYTtRQUMzQk8sU0FBU0w7a0JBRVQsNEVBQUNNO1lBQUtGLFdBQVU7O2dCQUNiUDtnQkFBTzs4QkFDUiw4REFBQ1U7b0JBQ0NILFdBQVU7b0JBQ1ZJLE1BQUs7b0JBQ0xDLFNBQVE7b0JBQ1JDLGVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0tBbEJNZDtBQW9CTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbi5qc3g/MjQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDdXN0b21CdXR0b24gPSAoeyB0aXRsZSwgY3VzdG9tU3R5bGVzLCBidG5UeXBlLCBoYW5kbGVDbGljaywgSWNvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT17YnRuVHlwZSB8fCBcInN1Ym1pdFwifVxuICAgICAgY2xhc3NOYW1lPXtgJHtjdXN0b21TdHlsZXN9IGJsb2NrIG14LWF1dG8gYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMyBweC02IHJvdW5kZWQtZnVsbGB9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAge3RpdGxlfXtcIiBcIn1cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgID48L3N2Zz5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJDdXN0b21CdXR0b24iLCJ0aXRsZSIsImN1c3RvbVN0eWxlcyIsImJ0blR5cGUiLCJoYW5kbGVDbGljayIsIkljb24iLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwib25DbGljayIsInNwYW4iLCJzdmciLCJmaWxsIiwidmlld0JveCIsImFyaWEtaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomButton.jsx\n"));

/***/ })

});