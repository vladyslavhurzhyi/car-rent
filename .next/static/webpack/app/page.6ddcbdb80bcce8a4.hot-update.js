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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"(app-pages-browser)/./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-594193f5.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ModelX = ()=>{\n    _s();\n    const gltf = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.F)(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader, \"./car/scene.gltf\");\n    const modelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [rotationSpeed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.005);\n    const [positionX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.05);\n    // const moveCar = () => {\n    //   do {\n    //     console.log(\"111.current.position.x\", modelRef.current.position.x);\n    //     modelRef.current.position.x -= positionX;\n    //     console.log(\"modelRef.current.position.x\", modelRef.current.position.x);\n    //   } while (modelRef.current.position.x > 0.5);\n    // };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C)(()=>{\n    // moveCar();\n    // modelRef.current.position.x -= positionX;\n    // modelRef.current.rotation.y -= rotationSpeed;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n            ref: modelRef,\n            position: [\n                0.5,\n                -2,\n                0\n            ],\n            rotation: [\n                6.28,\n                -0.2,\n                0\n            ],\n            object: gltf.scene,\n            scale: 0.4\n        }, void 0, false, {\n            fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ModelX, \"PB8fbASRSqSo5gRGL18ulfoV9nA=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.F,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C\n    ];\n});\n_c = ModelX;\nconst CarCanvas = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, {\n        camera: {\n            position: [\n                -20,\n                50,\n                -120\n            ],\n            fov: 3,\n            background: 0xffffff\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                intensity: 1,\n                position: [\n                    50,\n                    0,\n                    0\n                ],\n                color: \"white\"\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                intensity: 1,\n                position: [\n                    -70,\n                    20,\n                    30\n                ],\n                color: \"white\"\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.OrbitControls, {\n                enableZoom: false,\n                maxPolarAngle: Math.PI / 2,\n                minPolarAngle: Math.PI / 2\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hemisphereLight\", {\n                intensity: 1\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModelX, {}, void 0, false, {\n                    fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/MacMiniM1/Documents/my project/car-rent/components/CarThreeD/CarThreeD.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = CarCanvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarCanvas);\nvar _c, _c1;\n$RefreshReg$(_c, \"ModelX\");\n$RefreshReg$(_c1, \"CarCanvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2FyVGhyZWVEL0NhclRocmVlRC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrRDtBQUNpQjtBQUNWO0FBQ2I7QUFDTztBQUVuRCxNQUFNUSxTQUFTOztJQUNiLE1BQU1DLE9BQU9OLHFEQUFTQSxDQUFDRiw2RUFBVUEsRUFBRTtJQUNuQyxNQUFNUyxXQUFXSiw2Q0FBTUE7SUFDdkIsTUFBTSxDQUFDSyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUU3QiwwQkFBMEI7SUFDMUIsU0FBUztJQUNULDBFQUEwRTtJQUMxRSxnREFBZ0Q7SUFDaEQsK0VBQStFO0lBQy9FLGlEQUFpRDtJQUNqRCxLQUFLO0lBRUxMLHFEQUFRQSxDQUFDO0lBQ1AsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxnREFBZ0Q7SUFDbEQ7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1c7WUFDQ0MsS0FBS0o7WUFDTEssVUFBVTtnQkFBQztnQkFBSyxDQUFDO2dCQUFHO2FBQUU7WUFDdEJDLFVBQVU7Z0JBQUM7Z0JBQU0sQ0FBQztnQkFBSzthQUFFO1lBQ3pCQyxRQUFRUixLQUFLUyxLQUFLO1lBQ2xCQyxPQUFPOzs7Ozs7O0FBSWY7R0EvQk1YOztRQUNTTCxpREFBU0E7UUFhdEJELGlEQUFRQTs7O0tBZEpNO0FBaUNOLE1BQU1ZLFlBQVk7SUFDaEIscUJBQ0UsOERBQUNoQixzREFBTUE7UUFDTGlCLFFBQVE7WUFDTk4sVUFBVTtnQkFBQyxDQUFDO2dCQUFJO2dCQUFJLENBQUM7YUFBSTtZQUN6Qk8sS0FBSztZQUNMQyxZQUFZO1FBQ2Q7OzBCQU1BLDhEQUFDQztnQkFBaUJDLFdBQVc7Z0JBQUdWLFVBQVU7b0JBQUM7b0JBQUk7b0JBQUc7aUJBQUU7Z0JBQUVXLE9BQU87Ozs7OzswQkFDN0QsOERBQUNGO2dCQUNDQyxXQUFXO2dCQUNYVixVQUFVO29CQUFDLENBQUM7b0JBQUk7b0JBQUk7aUJBQUc7Z0JBQ3ZCVyxPQUFPOzs7Ozs7MEJBRVQsOERBQUMxQiw0REFBYUE7Z0JBQ1oyQixZQUFZO2dCQUNaQyxlQUFlQyxLQUFLQyxFQUFFLEdBQUc7Z0JBQ3pCQyxlQUFlRixLQUFLQyxFQUFFLEdBQUc7Ozs7OzswQkFHM0IsOERBQUNFO2dCQUFnQlAsV0FBVzs7Ozs7OzBCQUU1Qiw4REFBQ3BCLDJDQUFRQTtnQkFBQzRCLFVBQVU7MEJBQ2xCLDRFQUFDekI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtNQWhDTVk7QUFrQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJUaHJlZUQvQ2FyVGhyZWVELmpzeD80MzllIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCI7XG5pbXBvcnQgeyB1c2VGcmFtZSwgdXNlTG9hZGVyIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgU3VzcGVuc2UsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTW9kZWxYID0gKCkgPT4ge1xuICBjb25zdCBnbHRmID0gdXNlTG9hZGVyKEdMVEZMb2FkZXIsIFwiLi9jYXIvc2NlbmUuZ2x0ZlwiKTtcbiAgY29uc3QgbW9kZWxSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3JvdGF0aW9uU3BlZWRdID0gdXNlU3RhdGUoMC4wMDUpO1xuICBjb25zdCBbcG9zaXRpb25YXSA9IHVzZVN0YXRlKDAuMDUpO1xuXG4gIC8vIGNvbnN0IG1vdmVDYXIgPSAoKSA9PiB7XG4gIC8vICAgZG8ge1xuICAvLyAgICAgY29uc29sZS5sb2coXCIxMTEuY3VycmVudC5wb3NpdGlvbi54XCIsIG1vZGVsUmVmLmN1cnJlbnQucG9zaXRpb24ueCk7XG4gIC8vICAgICBtb2RlbFJlZi5jdXJyZW50LnBvc2l0aW9uLnggLT0gcG9zaXRpb25YO1xuICAvLyAgICAgY29uc29sZS5sb2coXCJtb2RlbFJlZi5jdXJyZW50LnBvc2l0aW9uLnhcIiwgbW9kZWxSZWYuY3VycmVudC5wb3NpdGlvbi54KTtcbiAgLy8gICB9IHdoaWxlIChtb2RlbFJlZi5jdXJyZW50LnBvc2l0aW9uLnggPiAwLjUpO1xuICAvLyB9O1xuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICAvLyBtb3ZlQ2FyKCk7XG4gICAgLy8gbW9kZWxSZWYuY3VycmVudC5wb3NpdGlvbi54IC09IHBvc2l0aW9uWDtcbiAgICAvLyBtb2RlbFJlZi5jdXJyZW50LnJvdGF0aW9uLnkgLT0gcm90YXRpb25TcGVlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHByaW1pdGl2ZVxuICAgICAgICByZWY9e21vZGVsUmVmfVxuICAgICAgICBwb3NpdGlvbj17WzAuNSwgLTIsIDBdfVxuICAgICAgICByb3RhdGlvbj17WzYuMjgsIC0wLjIsIDBdfVxuICAgICAgICBvYmplY3Q9e2dsdGYuc2NlbmV9XG4gICAgICAgIHNjYWxlPXswLjR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgQ2FyQ2FudmFzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYW52YXNcbiAgICAgIGNhbWVyYT17e1xuICAgICAgICBwb3NpdGlvbjogWy0yMCwgNTAsIC0xMjBdLFxuICAgICAgICBmb3Y6IDMsXG4gICAgICAgIGJhY2tncm91bmQ6IDB4ZmZmZmZmLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7LyogPGRpcmVjdGlvbmFsTGlnaHQgaW50ZW5zaXR5PXsxfSBwb3NpdGlvbj17WzAsIDEwLCAwXX0gY29sb3I9e1wid2hpdGVcIn0gLz5cbiAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IGludGVuc2l0eT17MX0gcG9zaXRpb249e1sxMDEsIDEwLCAwXX0gY29sb3I9e1wid2hpdGVcIn0gLz5cbiAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IGludGVuc2l0eT17MX0gcG9zaXRpb249e1sxLCA1MCwgNTBdfSBjb2xvcj17XCJ3aGl0ZVwifSAvPlxuICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgaW50ZW5zaXR5PXsxfSBwb3NpdGlvbj17Wy0yMCwgMCwgMTBdfSBjb2xvcj17XCJ3aGl0ZVwifSAvPiAqL31cbiAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IGludGVuc2l0eT17MX0gcG9zaXRpb249e1s1MCwgMCwgMF19IGNvbG9yPXtcIndoaXRlXCJ9IC8+XG4gICAgICA8ZGlyZWN0aW9uYWxMaWdodFxuICAgICAgICBpbnRlbnNpdHk9ezF9XG4gICAgICAgIHBvc2l0aW9uPXtbLTcwLCAyMCwgMzBdfVxuICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxuICAgICAgLz5cbiAgICAgIDxPcmJpdENvbnRyb2xzXG4gICAgICAgIGVuYWJsZVpvb209e2ZhbHNlfVxuICAgICAgICBtYXhQb2xhckFuZ2xlPXtNYXRoLlBJIC8gMn1cbiAgICAgICAgbWluUG9sYXJBbmdsZT17TWF0aC5QSSAvIDJ9XG4gICAgICAvPlxuXG4gICAgICA8aGVtaXNwaGVyZUxpZ2h0IGludGVuc2l0eT17MX0gLz5cblxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cbiAgICAgICAgPE1vZGVsWCAvPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICA8L0NhbnZhcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhckNhbnZhcztcbiJdLCJuYW1lcyI6WyJPcmJpdENvbnRyb2xzIiwiR0xURkxvYWRlciIsInVzZUZyYW1lIiwidXNlTG9hZGVyIiwiQ2FudmFzIiwiU3VzcGVuc2UiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1vZGVsWCIsImdsdGYiLCJtb2RlbFJlZiIsInJvdGF0aW9uU3BlZWQiLCJwb3NpdGlvblgiLCJwcmltaXRpdmUiLCJyZWYiLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwib2JqZWN0Iiwic2NlbmUiLCJzY2FsZSIsIkNhckNhbnZhcyIsImNhbWVyYSIsImZvdiIsImJhY2tncm91bmQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiaW50ZW5zaXR5IiwiY29sb3IiLCJlbmFibGVab29tIiwibWF4UG9sYXJBbmdsZSIsIk1hdGgiLCJQSSIsIm1pblBvbGFyQW5nbGUiLCJoZW1pc3BoZXJlTGlnaHQiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CarThreeD/CarThreeD.jsx\n"));

/***/ })

});