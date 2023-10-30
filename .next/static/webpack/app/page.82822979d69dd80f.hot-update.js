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

/***/ "(app-pages-browser)/./components/CarThreeD/CarThreeD.jsx":
/*!********************************************!*\
  !*** ./components/CarThreeD/CarThreeD.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"(app-pages-browser)/./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-594193f5.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ModelX = ()=>{\n    _s();\n    const gltf = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.F)(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader, \"./car/scene.gltf\");\n    const modelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [rotationSpeed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.005);\n    const [positionX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.05);\n    const moveCar = ()=>{\n        do {\n            modelRef.current.position.x -= positionX;\n        }while (modelRef.current.position.x > 0.5);\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C)(()=>{\n        moveCar();\n    // modelRef.current.position.x -= positionX;\n    // modelRef.current.rotation.y -= rotationSpeed;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n            ref: modelRef,\n            position: [\n                6.5,\n                -2,\n                0\n            ],\n            rotation: [\n                6.28,\n                -0.2,\n                0\n            ],\n            object: gltf.scene,\n            scale: 0.4\n        }, void 0, false, {\n            fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ModelX, \"PB8fbASRSqSo5gRGL18ulfoV9nA=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.F,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C\n    ];\n});\n_c = ModelX;\nconst CarCanvas = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, {\n        camera: {\n            position: [\n                -20,\n                50,\n                -120\n            ],\n            fov: 3,\n            background: 0xffffff\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                intensity: 13,\n                position: [\n                    0,\n                    10,\n                    0\n                ],\n                color: \"white\"\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.OrbitControls, {\n                enableZoom: false,\n                maxPolarAngle: Math.PI / 2,\n                minPolarAngle: Math.PI / 2\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hemisphereLight\", {\n                intensity: 1\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModelX, {}, void 0, false, {\n                    fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = CarCanvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarCanvas);\nvar _c, _c1;\n$RefreshReg$(_c, \"ModelX\");\n$RefreshReg$(_c1, \"CarCanvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2FyVGhyZWVEL0NhclRocmVlRC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrRDtBQUNpQjtBQUNWO0FBQ2I7QUFDTztBQUVuRCxNQUFNUSxTQUFTOztJQUNiLE1BQU1DLE9BQU9OLHFEQUFTQSxDQUFDRiw2RUFBVUEsRUFBRTtJQUNuQyxNQUFNUyxXQUFXSiw2Q0FBTUE7SUFDdkIsTUFBTSxDQUFDSyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUU3QixNQUFNTSxVQUFVO1FBQ2QsR0FBRztZQUNESCxTQUFTSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJSjtRQUNqQyxRQUFTRixTQUFTSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLEtBQUs7SUFDOUM7SUFFQWQscURBQVFBLENBQUM7UUFDUFc7SUFDQSw0Q0FBNEM7SUFDNUMsZ0RBQWdEO0lBQ2xEO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNJO1lBQ0NDLEtBQUtSO1lBQ0xLLFVBQVU7Z0JBQUM7Z0JBQUssQ0FBQztnQkFBRzthQUFFO1lBQ3RCSSxVQUFVO2dCQUFDO2dCQUFNLENBQUM7Z0JBQUs7YUFBRTtZQUN6QkMsUUFBUVgsS0FBS1ksS0FBSztZQUNsQkMsT0FBTzs7Ozs7OztBQUlmO0dBN0JNZDs7UUFDU0wsaURBQVNBO1FBV3RCRCxpREFBUUE7OztLQVpKTTtBQStCTixNQUFNZSxZQUFZO0lBQ2hCLHFCQUNFLDhEQUFDbkIsc0RBQU1BO1FBQ0xvQixRQUFRO1lBQ05ULFVBQVU7Z0JBQUMsQ0FBQztnQkFBSTtnQkFBSSxDQUFDO2FBQUk7WUFDekJVLEtBQUs7WUFDTEMsWUFBWTtRQUNkOzswQkFFQSw4REFBQ0M7Z0JBQWlCQyxXQUFXO2dCQUFJYixVQUFVO29CQUFDO29CQUFHO29CQUFJO2lCQUFFO2dCQUFFYyxPQUFPOzs7Ozs7MEJBQzlELDhEQUFDN0IsNERBQWFBO2dCQUNaOEIsWUFBWTtnQkFDWkMsZUFBZUMsS0FBS0MsRUFBRSxHQUFHO2dCQUN6QkMsZUFBZUYsS0FBS0MsRUFBRSxHQUFHOzs7Ozs7MEJBRzNCLDhEQUFDRTtnQkFBZ0JQLFdBQVc7Ozs7OzswQkFFNUIsOERBQUN2QiwyQ0FBUUE7Z0JBQUMrQixVQUFVOzBCQUNsQiw0RUFBQzVCOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7TUF2Qk1lO0FBeUJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyVGhyZWVEL0NhclRocmVlRC5qc3g/NDM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiO1xuaW1wb3J0IHsgdXNlRnJhbWUsIHVzZUxvYWRlciB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IENhbnZhcyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IFN1c3BlbnNlLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1vZGVsWCA9ICgpID0+IHtcbiAgY29uc3QgZ2x0ZiA9IHVzZUxvYWRlcihHTFRGTG9hZGVyLCBcIi4vY2FyL3NjZW5lLmdsdGZcIik7XG4gIGNvbnN0IG1vZGVsUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtyb3RhdGlvblNwZWVkXSA9IHVzZVN0YXRlKDAuMDA1KTtcbiAgY29uc3QgW3Bvc2l0aW9uWF0gPSB1c2VTdGF0ZSgwLjA1KTtcblxuICBjb25zdCBtb3ZlQ2FyID0gKCkgPT4ge1xuICAgIGRvIHtcbiAgICAgIG1vZGVsUmVmLmN1cnJlbnQucG9zaXRpb24ueCAtPSBwb3NpdGlvblg7XG4gICAgfSB3aGlsZSAobW9kZWxSZWYuY3VycmVudC5wb3NpdGlvbi54ID4gMC41KTtcbiAgfTtcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgbW92ZUNhcigpO1xuICAgIC8vIG1vZGVsUmVmLmN1cnJlbnQucG9zaXRpb24ueCAtPSBwb3NpdGlvblg7XG4gICAgLy8gbW9kZWxSZWYuY3VycmVudC5yb3RhdGlvbi55IC09IHJvdGF0aW9uU3BlZWQ7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwcmltaXRpdmVcbiAgICAgICAgcmVmPXttb2RlbFJlZn1cbiAgICAgICAgcG9zaXRpb249e1s2LjUsIC0yLCAwXX1cbiAgICAgICAgcm90YXRpb249e1s2LjI4LCAtMC4yLCAwXX1cbiAgICAgICAgb2JqZWN0PXtnbHRmLnNjZW5lfVxuICAgICAgICBzY2FsZT17MC40fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IENhckNhbnZhcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FudmFzXG4gICAgICBjYW1lcmE9e3tcbiAgICAgICAgcG9zaXRpb246IFstMjAsIDUwLCAtMTIwXSxcbiAgICAgICAgZm92OiAzLFxuICAgICAgICBiYWNrZ3JvdW5kOiAweGZmZmZmZixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgaW50ZW5zaXR5PXsxM30gcG9zaXRpb249e1swLCAxMCwgMF19IGNvbG9yPXtcIndoaXRlXCJ9IC8+XG4gICAgICA8T3JiaXRDb250cm9sc1xuICAgICAgICBlbmFibGVab29tPXtmYWxzZX1cbiAgICAgICAgbWF4UG9sYXJBbmdsZT17TWF0aC5QSSAvIDJ9XG4gICAgICAgIG1pblBvbGFyQW5nbGU9e01hdGguUEkgLyAyfVxuICAgICAgLz5cblxuICAgICAgPGhlbWlzcGhlcmVMaWdodCBpbnRlbnNpdHk9ezF9IC8+XG5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgIDxNb2RlbFggLz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9DYW52YXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJDYW52YXM7XG4iXSwibmFtZXMiOlsiT3JiaXRDb250cm9scyIsIkdMVEZMb2FkZXIiLCJ1c2VGcmFtZSIsInVzZUxvYWRlciIsIkNhbnZhcyIsIlN1c3BlbnNlIiwidXNlUmVmIiwidXNlU3RhdGUiLCJNb2RlbFgiLCJnbHRmIiwibW9kZWxSZWYiLCJyb3RhdGlvblNwZWVkIiwicG9zaXRpb25YIiwibW92ZUNhciIsImN1cnJlbnQiLCJwb3NpdGlvbiIsIngiLCJwcmltaXRpdmUiLCJyZWYiLCJyb3RhdGlvbiIsIm9iamVjdCIsInNjZW5lIiwic2NhbGUiLCJDYXJDYW52YXMiLCJjYW1lcmEiLCJmb3YiLCJiYWNrZ3JvdW5kIiwiZGlyZWN0aW9uYWxMaWdodCIsImludGVuc2l0eSIsImNvbG9yIiwiZW5hYmxlWm9vbSIsIm1heFBvbGFyQW5nbGUiLCJNYXRoIiwiUEkiLCJtaW5Qb2xhckFuZ2xlIiwiaGVtaXNwaGVyZUxpZ2h0IiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CarThreeD/CarThreeD.jsx\n"));

/***/ })

});