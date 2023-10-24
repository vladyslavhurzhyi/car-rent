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

/***/ "(app-pages-browser)/./components/CarCard/CarCard.jsx":
/*!****************************************!*\
  !*** ./components/CarCard/CarCard.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CarCard = (param)=>{\n    let { cars } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: cars.map((car, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-[25%-gap-2] bg-slate-100 p-4 rounded-xl mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold uppercase text-2xl\",\n                                children: car.make\n                            }, void 0, false, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"uppercase text-xl\",\n                                children: car.model\n                            }, void 0, false, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/hero.png\",\n                        alt: \"car image\",\n                        priority: true,\n                        width: 250,\n                        height: 250,\n                        className: \" mx-auto\"\n                    }, void 0, false, {\n                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between mb-2 px-2 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"./steering-wheel.svg\",\n                                        width: 25,\n                                        height: 25,\n                                        className: \"mb-2\",\n                                        alt: \"steering-wheel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" text-gray-400\",\n                                        children: car.transmission === \"a\" ? \"Automatic\" : \"Manual\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"./tire.svg\",\n                                        alt: \"tire\",\n                                        width: 25,\n                                        height: 25,\n                                        className: \"mb-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" uppercase text-gray-400\",\n                                        children: car.drive\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"./gas.svg\",\n                                        alt: \"gas\",\n                                        width: 25,\n                                        height: 25,\n                                        className: \"mb-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" text-gray-400\",\n                                        children: [\n                                            car.combination_mpg,\n                                            \" MPG\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_c = CarCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarCard);\nvar _c;\n$RefreshReg$(_c, \"CarCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2FyQ2FyZC9DYXJDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjtBQUUvQixNQUFNQyxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ3ZCLHFCQUNFO2tCQUNHQSxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0M7WUFDZCxxQkFDRSw4REFBQ0M7Z0JBRUNDLFdBQVU7O2tDQUVWLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFFRCxXQUFVOzBDQUFnQ0gsSUFBSUssSUFBSTs7Ozs7OzBDQUNyRCw4REFBQ0Q7Z0NBQUVELFdBQVU7MENBQXFCSCxJQUFJTSxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRzdDLDhEQUFDVixtREFBS0E7d0JBQ0pXLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLFFBQVE7d0JBQ1JDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JSLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNQLG1EQUFLQTt3Q0FDSlcsS0FBSzt3Q0FDTEcsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUlIsV0FBVTt3Q0FDVkssS0FBSTs7Ozs7O2tEQUVOLDhEQUFDSjt3Q0FBRUQsV0FBVTtrREFDVkgsSUFBSVksWUFBWSxLQUFLLE1BQU0sY0FBYzs7Ozs7Ozs7Ozs7OzBDQUc5Qyw4REFBQ1Y7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDUCxtREFBS0E7d0NBQ0pXLEtBQUs7d0NBQ0xDLEtBQUk7d0NBQ0pFLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JSLFdBQVU7Ozs7OztrREFFWiw4REFBQ0M7d0NBQUVELFdBQVU7a0RBQTRCSCxJQUFJYSxLQUFLOzs7Ozs7Ozs7Ozs7MENBRXBELDhEQUFDWDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNQLG1EQUFLQTt3Q0FDSlcsS0FBSzt3Q0FDTEMsS0FBSTt3Q0FDSkUsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUlIsV0FBVTs7Ozs7O2tEQUVaLDhEQUFDQzt3Q0FBRUQsV0FBVTs7NENBQWtCSCxJQUFJYyxlQUFlOzRDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWhEbERiOzs7OztRQXFEWDs7QUFHTjtLQTlETUo7QUFnRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJDYXJkL0NhckNhcmQuanN4PzU1NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IENhckNhcmQgPSAoeyBjYXJzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NhcnMubWFwKChjYXIsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LVsyNSUtZ2FwLTJdIGJnLXNsYXRlLTEwMCBwLTQgcm91bmRlZC14bCBtdC00XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LTJ4bFwiPntjYXIubWFrZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsXCI+e2Nhci5tb2RlbH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi9oZXJvLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImNhciBpbWFnZVwiXG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgIHdpZHRoPXsyNTB9XG4gICAgICAgICAgICAgIGhlaWdodD17MjUwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgbXgtYXV0b1wiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTIgcHgtMiBtdC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIuL3N0ZWVyaW5nLXdoZWVsLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwic3RlZXJpbmctd2hlZWxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXIudHJhbnNtaXNzaW9uID09PSBcImFcIiA/IFwiQXV0b21hdGljXCIgOiBcIk1hbnVhbFwifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIuL3RpcmUuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ0aXJlXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB1cHBlcmNhc2UgdGV4dC1ncmF5LTQwMFwiPntjYXIuZHJpdmV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtcIi4vZ2FzLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgYWx0PVwiZ2FzXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LWdyYXktNDAwXCI+e2Nhci5jb21iaW5hdGlvbl9tcGd9IE1QRzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyQ2FyZDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhckNhcmQiLCJjYXJzIiwibWFwIiwiY2FyIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFrZSIsIm1vZGVsIiwic3JjIiwiYWx0IiwicHJpb3JpdHkiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zbWlzc2lvbiIsImRyaXZlIiwiY29tYmluYXRpb25fbXBnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CarCard/CarCard.jsx\n"));

/***/ })

});