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

/***/ "(app-pages-browser)/./app/utils/fetchData.js":
/*!********************************!*\
  !*** ./app/utils/fetchData.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCars: function() { return /* binding */ fetchCars; },\n/* harmony export */   generateImageUrl: function() { return /* binding */ generateImageUrl; }\n/* harmony export */ });\nconst options = {\n    method: \"GET\",\n    headers: {\n        \"X-RapidAPI-Key\": \"7f53c794bamsh44a0092fbe18485p1e5ed5jsna030a49b5bda\",\n        \"X-RapidAPI-Host\": \"cars-by-api-ninjas.p.rapidapi.com\"\n    }\n};\nconst fetchCars = async (filters)=>{\n    const { manufacturer, model, fuel, year, limit } = filters;\n    const url = \"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=\".concat(manufacturer, \"&year=\").concat(year, \"&model=\").concat(model, \"&limit=\").concat(limit, \"&fuel_type=\").concat(fuel);\n    try {\n        const response = await fetch(url, options);\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst generateImageUrl = (car)=>{\n    const { make, model, year } = car;\n    const url = new URL(\"https://cdn.imagin.studio/getimage\");\n    url.searchParams.append(\"customer\", \"hrjavascript-mastery\");\n    url.searchParams.append(\"make\", make);\n    url.searchParams.append(\"modelFamily\", model.split(\" \")[0]);\n    url.searchParams.append(\"modelYear\", year);\n    return \"\".concat(url);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9mZXRjaERhdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxVQUFVO0lBQ2RDLFFBQVE7SUFDUkMsU0FBUztRQUNQLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDckI7QUFDRjtBQUVPLE1BQU1DLFlBQVksT0FBT0M7SUFDOUIsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHTDtJQUNuRCxNQUFNTSxNQUFNLDBEQUErRUYsT0FBckJILGNBQWEsVUFBc0JDLE9BQWRFLE1BQUssV0FBd0JDLE9BQWZILE9BQU0sV0FBNEJDLE9BQW5CRSxPQUFNLGVBQWtCLE9BQUxGO0lBQzNJLElBQUk7UUFDRixNQUFNSSxXQUFXLE1BQU1DLE1BQU1GLEtBQUtWO1FBQ2xDLE1BQU1hLFNBQVMsTUFBTUYsU0FBU0csSUFBSTtRQUNsQyxPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO0lBQ2hCO0FBQ0YsRUFBRTtBQUVLLE1BQU1FLG1CQUFtQixDQUFDQztJQUMvQixNQUFNLEVBQUVDLElBQUksRUFBRWIsS0FBSyxFQUFFRSxJQUFJLEVBQUUsR0FBR1U7SUFFOUIsTUFBTVIsTUFBTSxJQUFJVSxJQUFJO0lBRXBCVixJQUFJVyxZQUFZLENBQUNDLE1BQU0sQ0FBQyxZQUFZO0lBQ3BDWixJQUFJVyxZQUFZLENBQUNDLE1BQU0sQ0FBQyxRQUFRSDtJQUNoQ1QsSUFBSVcsWUFBWSxDQUFDQyxNQUFNLENBQUMsZUFBZWhCLE1BQU1pQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDMURiLElBQUlXLFlBQVksQ0FBQ0MsTUFBTSxDQUFDLGFBQWFkO0lBRXJDLE9BQU8sR0FBTyxPQUFKRTtBQUNaLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2ZldGNoRGF0YS5qcz84MTNkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wdGlvbnMgPSB7XG4gIG1ldGhvZDogXCJHRVRcIixcbiAgaGVhZGVyczoge1xuICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCI3ZjUzYzc5NGJhbXNoNDRhMDA5MmZiZTE4NDg1cDFlNWVkNWpzbmEwMzBhNDliNWJkYVwiLFxuICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwiY2Fycy1ieS1hcGktbmluamFzLnAucmFwaWRhcGkuY29tXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJzID0gYXN5bmMgKGZpbHRlcnMpID0+IHtcbiAgY29uc3QgeyBtYW51ZmFjdHVyZXIsIG1vZGVsLCBmdWVsLCB5ZWFyLCBsaW1pdCB9ID0gZmlsdGVycztcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vY2Fycy1ieS1hcGktbmluamFzLnAucmFwaWRhcGkuY29tL3YxL2NhcnM/bWFrZT0ke21hbnVmYWN0dXJlcn0meWVhcj0ke3llYXJ9Jm1vZGVsPSR7bW9kZWx9JmxpbWl0PSR7bGltaXR9JmZ1ZWxfdHlwZT0ke2Z1ZWx9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUltYWdlVXJsID0gKGNhcikgPT4ge1xuICBjb25zdCB7IG1ha2UsIG1vZGVsLCB5ZWFyIH0gPSBjYXI7XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChcImh0dHBzOi8vY2RuLmltYWdpbi5zdHVkaW8vZ2V0aW1hZ2VcIik7XG5cbiAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJjdXN0b21lclwiLCBcImhyamF2YXNjcmlwdC1tYXN0ZXJ5XCIpO1xuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcIm1ha2VcIiwgbWFrZSk7XG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwibW9kZWxGYW1pbHlcIiwgbW9kZWwuc3BsaXQoXCIgXCIpWzBdKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJtb2RlbFllYXJcIiwgeWVhcik7XG5cbiAgcmV0dXJuIGAke3VybH1gO1xufTtcbiJdLCJuYW1lcyI6WyJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoQ2FycyIsImZpbHRlcnMiLCJtYW51ZmFjdHVyZXIiLCJtb2RlbCIsImZ1ZWwiLCJ5ZWFyIiwibGltaXQiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImdlbmVyYXRlSW1hZ2VVcmwiLCJjYXIiLCJtYWtlIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/fetchData.js\n"));

/***/ })

});