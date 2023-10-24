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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CarCard = (param)=>{\n    let { cars } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: cars.map((car, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex-grow-0 max-w-[300px] bg-slate-100 p-4 rounded-xl mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold uppercase text-2xl\",\n                                children: car.make\n                            }, void 0, false, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"uppercase \",\n                                children: car.model\n                            }, void 0, false, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/hero.png\",\n                        alt: \"car image\",\n                        priority: true,\n                        width: 200,\n                        height: 200,\n                        className: \" mx-auto\"\n                    }, void 0, false, {\n                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between mb-2 px-2 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"./steering-wheel.svg\",\n                                        width: 25,\n                                        height: 25,\n                                        className: \"mb-2\",\n                                        alt: \"steering-wheel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" text-gray-400\",\n                                        children: car.transmission === \"a\" ? \"Automatic\" : \"Manual\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"./tire.svg\",\n                                        alt: \"tire\",\n                                        width: 25,\n                                        height: 25,\n                                        className: \"mb-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" uppercase text-gray-400\",\n                                        children: car.drive\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"./gas.svg\",\n                                        alt: \"gas\",\n                                        width: 25,\n                                        height: 25,\n                                        className: \"mb-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" text-gray-400\",\n                                        children: [\n                                            car.combination_mpg,\n                                            \" MPG\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarCard/CarCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_c = CarCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarCard);\nvar _c;\n$RefreshReg$(_c, \"CarCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2FyQ2FyZC9DYXJDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjtBQUUvQixNQUFNQyxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ3ZCLHFCQUNFO2tCQUNHQSxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0M7WUFDZCxxQkFDRSw4REFBQ0M7Z0JBRUNDLFdBQVU7O2tDQUVWLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFFRCxXQUFVOzBDQUFnQ0gsSUFBSUssSUFBSTs7Ozs7OzBDQUNyRCw4REFBQ0Q7Z0NBQUVELFdBQVU7MENBQWNILElBQUlNLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHdEMsOERBQUNWLG1EQUFLQTt3QkFDSlcsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsUUFBUTt3QkFDUkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUlIsV0FBVTs7Ozs7O2tDQUdaLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1AsbURBQUtBO3dDQUNKVyxLQUFLO3dDQUNMRyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSUixXQUFVO3dDQUNWSyxLQUFJOzs7Ozs7a0RBRU4sOERBQUNKO3dDQUFFRCxXQUFVO2tEQUNWSCxJQUFJWSxZQUFZLEtBQUssTUFBTSxjQUFjOzs7Ozs7Ozs7Ozs7MENBRzlDLDhEQUFDVjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNQLG1EQUFLQTt3Q0FDSlcsS0FBSzt3Q0FDTEMsS0FBSTt3Q0FDSkUsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUlIsV0FBVTs7Ozs7O2tEQUVaLDhEQUFDQzt3Q0FBRUQsV0FBVTtrREFBNEJILElBQUlhLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FFcEQsOERBQUNYO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1AsbURBQUtBO3dDQUNKVyxLQUFLO3dDQUNMQyxLQUFJO3dDQUNKRSxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSUixXQUFVOzs7Ozs7a0RBRVosOERBQUNDO3dDQUFFRCxXQUFVOzs0Q0FBa0JILElBQUljLGVBQWU7NENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBaERsRGI7Ozs7O1FBcURYOztBQUdOO0tBOURNSjtBQWdFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhckNhcmQvQ2FyQ2FyZC5qc3g/NTU1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3QgQ2FyQ2FyZCA9ICh7IGNhcnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y2Fycy5tYXAoKGNhciwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZsZXgtZ3Jvdy0wIG1heC13LVszMDBweF0gYmctc2xhdGUtMTAwIHAtNCByb3VuZGVkLXhsIG1iLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtMnhsXCI+e2Nhci5tYWtlfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIFwiPntjYXIubW9kZWx9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaGVyby5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJjYXIgaW1hZ2VcIlxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG14LWF1dG9cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi0yIHB4LTIgbXQtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e1wiLi9zdGVlcmluZy13aGVlbC5zdmdcIn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInN0ZWVyaW5nLXdoZWVsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICB7Y2FyLnRyYW5zbWlzc2lvbiA9PT0gXCJhXCIgPyBcIkF1dG9tYXRpY1wiIDogXCJNYW51YWxcIn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e1wiLi90aXJlLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgYWx0PVwidGlyZVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdXBwZXJjYXNlIHRleHQtZ3JheS00MDBcIj57Y2FyLmRyaXZlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIuL2dhcy5zdmdcIn1cbiAgICAgICAgICAgICAgICAgIGFsdD1cImdhc1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTQwMFwiPntjYXIuY29tYmluYXRpb25fbXBnfSBNUEc8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhckNhcmQ7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJDYXJDYXJkIiwiY2FycyIsIm1hcCIsImNhciIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1ha2UiLCJtb2RlbCIsInNyYyIsImFsdCIsInByaW9yaXR5Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc21pc3Npb24iLCJkcml2ZSIsImNvbWJpbmF0aW9uX21wZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CarCard/CarCard.jsx\n"));

/***/ })

});