/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/troika-worker-utils";
exports.ids = ["vendor-chunks/troika-worker-utils"];
exports.modules = {

/***/ "(ssr)/./node_modules/troika-worker-utils/dist/troika-worker-utils.umd.js":
/*!**************************************************************************!*\
  !*** ./node_modules/troika-worker-utils/dist/troika-worker-utils.umd.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("(function (global, factory) {\n   true ? factory(exports) :\n  0;\n}(this, (function (exports) { 'use strict';\n\n  /**\n   * Main content for the worker that handles the loading and execution of\n   * modules within it.\n   */\n  function workerBootstrap() {\n    var modules = Object.create(null);\n\n    // Handle messages for registering a module\n    function registerModule(ref, callback) {\n      var id = ref.id;\n      var name = ref.name;\n      var dependencies = ref.dependencies; if ( dependencies === void 0 ) dependencies = [];\n      var init = ref.init; if ( init === void 0 ) init = function(){};\n      var getTransferables = ref.getTransferables; if ( getTransferables === void 0 ) getTransferables = null;\n\n      // Only register once\n      if (modules[id]) { return }\n\n      try {\n        // If any dependencies are modules, ensure they're registered and grab their value\n        dependencies = dependencies.map(function (dep) {\n          if (dep && dep.isWorkerModule) {\n            registerModule(dep, function (depResult) {\n              if (depResult instanceof Error) { throw depResult }\n            });\n            dep = modules[dep.id].value;\n          }\n          return dep\n        });\n\n        // Rehydrate functions\n        init = rehydrate((\"<\" + name + \">.init\"), init);\n        if (getTransferables) {\n          getTransferables = rehydrate((\"<\" + name + \">.getTransferables\"), getTransferables);\n        }\n\n        // Initialize the module and store its value\n        var value = null;\n        if (typeof init === 'function') {\n          value = init.apply(void 0, dependencies);\n        } else {\n          console.error('worker module init function failed to rehydrate');\n        }\n        modules[id] = {\n          id: id,\n          value: value,\n          getTransferables: getTransferables\n        };\n        callback(value);\n      } catch(err) {\n        if (!(err && err.noLog)) {\n          console.error(err);\n        }\n        callback(err);\n      }\n    }\n\n    // Handle messages for calling a registered module's result function\n    function callModule(ref, callback) {\n      var ref$1;\n\n      var id = ref.id;\n      var args = ref.args;\n      if (!modules[id] || typeof modules[id].value !== 'function') {\n        callback(new Error((\"Worker module \" + id + \": not found or its 'init' did not return a function\")));\n      }\n      try {\n        var result = (ref$1 = modules[id]).value.apply(ref$1, args);\n        if (result && typeof result.then === 'function') {\n          result.then(handleResult, function (rej) { return callback(rej instanceof Error ? rej : new Error('' + rej)); });\n        } else {\n          handleResult(result);\n        }\n      } catch(err) {\n        callback(err);\n      }\n      function handleResult(result) {\n        try {\n          var tx = modules[id].getTransferables && modules[id].getTransferables(result);\n          if (!tx || !Array.isArray(tx) || !tx.length) {\n            tx = undefined; //postMessage is very picky about not passing null or empty transferables\n          }\n          callback(result, tx);\n        } catch(err) {\n          console.error(err);\n          callback(err);\n        }\n      }\n    }\n\n    function rehydrate(name, str) {\n      var result = void 0;\n      self.troikaDefine = function (r) { return result = r; };\n      var url = URL.createObjectURL(\n        new Blob(\n          [(\"/** \" + (name.replace(/\\*/g, '')) + \" **/\\n\\ntroikaDefine(\\n\" + str + \"\\n)\")],\n          {type: 'application/javascript'}\n        )\n      );\n      try {\n        importScripts(url);\n      } catch(err) {\n        console.error(err);\n      }\n      URL.revokeObjectURL(url);\n      delete self.troikaDefine;\n      return result\n    }\n\n    // Handler for all messages within the worker\n    self.addEventListener('message', function (e) {\n      var ref = e.data;\n      var messageId = ref.messageId;\n      var action = ref.action;\n      var data = ref.data;\n      try {\n        // Module registration\n        if (action === 'registerModule') {\n          registerModule(data, function (result) {\n            if (result instanceof Error) {\n              postMessage({\n                messageId: messageId,\n                success: false,\n                error: result.message\n              });\n            } else {\n              postMessage({\n                messageId: messageId,\n                success: true,\n                result: {isCallable: typeof result === 'function'}\n              });\n            }\n          });\n        }\n        // Invocation\n        if (action === 'callModule') {\n          callModule(data, function (result, transferables) {\n            if (result instanceof Error) {\n              postMessage({\n                messageId: messageId,\n                success: false,\n                error: result.message\n              });\n            } else {\n              postMessage({\n                messageId: messageId,\n                success: true,\n                result: result\n              }, transferables || undefined);\n            }\n          });\n        }\n      } catch(err) {\n        postMessage({\n          messageId: messageId,\n          success: false,\n          error: err.stack\n        });\n      }\n    });\n  }\n\n  /**\n   * Fallback for `defineWorkerModule` that behaves identically but runs in the main\n   * thread, for when the execution environment doesn't support web workers or they\n   * are disallowed due to e.g. CSP security restrictions.\n   */\n  function defineMainThreadModule(options) {\n    var moduleFunc = function() {\n      var args = [], len = arguments.length;\n      while ( len-- ) args[ len ] = arguments[ len ];\n\n      return moduleFunc._getInitResult().then(function (initResult) {\n        if (typeof initResult === 'function') {\n          return initResult.apply(void 0, args)\n        } else {\n          throw new Error('Worker module function was called but `init` did not return a callable function')\n        }\n      })\n    };\n    moduleFunc._getInitResult = function() {\n      // We can ignore getTransferables in main thread. TODO workerId?\n      var dependencies = options.dependencies;\n      var init = options.init;\n\n      // Resolve dependencies\n      dependencies = Array.isArray(dependencies) ? dependencies.map(function (dep) { return dep && dep._getInitResult ? dep._getInitResult() : dep; }\n      ) : [];\n\n      // Invoke init with the resolved dependencies\n      var initPromise = Promise.all(dependencies).then(function (deps) {\n        return init.apply(null, deps)\n      });\n\n      // Cache the resolved promise for subsequent calls\n      moduleFunc._getInitResult = function () { return initPromise; };\n\n      return initPromise\n    };\n    return moduleFunc\n  }\n\n  var supportsWorkers = function () {\n    var supported = false;\n\n    // Only attempt worker initialization in browsers; elsewhere it would just be\n    // noise e.g. loading into a Node environment for SSR.\n    if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {\n      try {\n        // TODO additional checks for things like importScripts within the worker?\n        //  Would need to be an async check.\n        var worker = new Worker(\n          URL.createObjectURL(new Blob([''], { type: 'application/javascript' }))\n        );\n        worker.terminate();\n        supported = true;\n      } catch (err) {\n        if (typeof process !== 'undefined' && \"development\" === 'test') {} else {\n          console.log(\n            (\"Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [\" + (err.message) + \"]\")\n          );\n        }\n      }\n    }\n\n    // Cached result\n    supportsWorkers = function () { return supported; };\n    return supported\n  };\n\n  var _workerModuleId = 0;\n  var _messageId = 0;\n  var _allowInitAsString = false;\n  var workers = Object.create(null);\n  var registeredModules = Object.create(null); //workerId -> Set<unregisterFn>\n  var openRequests = Object.create(null);\n\n\n  /**\n   * Define a module of code that will be executed with a web worker. This provides a simple\n   * interface for moving chunks of logic off the main thread, and managing their dependencies\n   * among one another.\n   *\n   * @param {object} options\n   * @param {function} options.init\n   * @param {array} [options.dependencies]\n   * @param {function} [options.getTransferables]\n   * @param {string} [options.name]\n   * @param {string} [options.workerId]\n   * @return {function(...[*]): {then}}\n   */\n  function defineWorkerModule(options) {\n    if ((!options || typeof options.init !== 'function') && !_allowInitAsString) {\n      throw new Error('requires `options.init` function')\n    }\n    var dependencies = options.dependencies;\n    var init = options.init;\n    var getTransferables = options.getTransferables;\n    var workerId = options.workerId;\n\n    if (!supportsWorkers()) {\n      return defineMainThreadModule(options)\n    }\n\n    if (workerId == null) {\n      workerId = '#default';\n    }\n    var id = \"workerModule\" + (++_workerModuleId);\n    var name = options.name || id;\n    var registrationPromise = null;\n\n    dependencies = dependencies && dependencies.map(function (dep) {\n      // Wrap raw functions as worker modules with no dependencies\n      if (typeof dep === 'function' && !dep.workerModuleData) {\n        _allowInitAsString = true;\n        dep = defineWorkerModule({\n          workerId: workerId,\n          name: (\"<\" + name + \"> function dependency: \" + (dep.name)),\n          init: (\"function(){return (\\n\" + (stringifyFunction(dep)) + \"\\n)}\")\n        });\n        _allowInitAsString = false;\n      }\n      // Grab postable data for worker modules\n      if (dep && dep.workerModuleData) {\n        dep = dep.workerModuleData;\n      }\n      return dep\n    });\n\n    function moduleFunc() {\n      var args = [], len = arguments.length;\n      while ( len-- ) args[ len ] = arguments[ len ];\n\n      // Register this module if needed\n      if (!registrationPromise) {\n        registrationPromise = callWorker(workerId,'registerModule', moduleFunc.workerModuleData);\n        var unregister = function () {\n          registrationPromise = null;\n          registeredModules[workerId].delete(unregister);\n        }\n        ;(registeredModules[workerId] || (registeredModules[workerId] = new Set())).add(unregister);\n      }\n\n      // Invoke the module, returning a promise\n      return registrationPromise.then(function (ref) {\n        var isCallable = ref.isCallable;\n\n        if (isCallable) {\n          return callWorker(workerId,'callModule', {id: id, args: args})\n        } else {\n          throw new Error('Worker module function was called but `init` did not return a callable function')\n        }\n      })\n    }\n    moduleFunc.workerModuleData = {\n      isWorkerModule: true,\n      id: id,\n      name: name,\n      dependencies: dependencies,\n      init: stringifyFunction(init),\n      getTransferables: getTransferables && stringifyFunction(getTransferables)\n    };\n    return moduleFunc\n  }\n\n  /**\n   * Terminate an active Worker by a workerId that was passed to defineWorkerModule.\n   * This only terminates the Worker itself; the worker module will remain available\n   * and if you call it again its Worker will be respawned.\n   * @param {string} workerId\n   */\n  function terminateWorker(workerId) {\n    // Unregister all modules that were registered in that worker\n    if (registeredModules[workerId]) {\n      registeredModules[workerId].forEach(function (unregister) {\n        unregister();\n      });\n    }\n    // Terminate the Worker object\n    if (workers[workerId]) {\n      workers[workerId].terminate();\n      delete workers[workerId];\n    }\n  }\n\n  /**\n   * Stringifies a function into a form that can be deserialized in the worker\n   * @param fn\n   */\n  function stringifyFunction(fn) {\n    var str = fn.toString();\n    // If it was defined in object method/property format, it needs to be modified\n    if (!/^function/.test(str) && /^\\w+\\s*\\(/.test(str)) {\n      str = 'function ' + str;\n    }\n    return str\n  }\n\n\n  function getWorker(workerId) {\n    var worker = workers[workerId];\n    if (!worker) {\n      // Bootstrap the worker's content\n      var bootstrap = stringifyFunction(workerBootstrap);\n\n      // Create the worker from the bootstrap function content\n      worker = workers[workerId] = new Worker(\n        URL.createObjectURL(\n          new Blob(\n            [(\"/** Worker Module Bootstrap: \" + (workerId.replace(/\\*/g, '')) + \" **/\\n\\n;(\" + bootstrap + \")()\")],\n            {type: 'application/javascript'}\n          )\n        )\n      );\n\n      // Single handler for response messages from the worker\n      worker.onmessage = function (e) {\n        var response = e.data;\n        var msgId = response.messageId;\n        var callback = openRequests[msgId];\n        if (!callback) {\n          throw new Error('WorkerModule response with empty or unknown messageId')\n        }\n        delete openRequests[msgId];\n        callback(response);\n      };\n    }\n    return worker\n  }\n\n  // Issue a call to the worker with a callback to handle the response\n  function callWorker(workerId, action, data) {\n    return new Promise(function (resolve, reject) {\n      var messageId = ++_messageId;\n      openRequests[messageId] = function (response) {\n        if (response.success) {\n          resolve(response.result);\n        } else {\n          reject(new Error((\"Error in worker \" + action + \" call: \" + (response.error))));\n        }\n      };\n      getWorker(workerId).postMessage({\n        messageId: messageId,\n        action: action,\n        data: data\n      });\n    })\n  }\n\n  exports.defineWorkerModule = defineWorkerModule;\n  exports.stringifyFunction = stringifyFunction;\n  exports.terminateWorker = terminateWorker;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n})));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHJvaWthLXdvcmtlci11dGlscy9kaXN0L3Ryb2lrYS13b3JrZXItdXRpbHMudW1kLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsRUFBRSxLQUE0RDtBQUM5RCxFQUFFLENBQ29IO0FBQ3RILENBQUMsNkJBQTZCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsMkJBQTJCO0FBQzNCLG1EQUFtRDs7QUFFbkQ7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxvRUFBb0U7QUFDekgsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGdDQUFnQztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsOENBQThDLGFBQW9CLGFBQWEsRUFBQyxDQUFDO0FBQ2pGO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4Q0FBOEM7QUFDM0UsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELG1CQUFtQjtBQUN2RSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsYUFBYTs7QUFFOUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbnRjYXIvLi9ub2RlX21vZHVsZXMvdHJvaWthLXdvcmtlci11dGlscy9kaXN0L3Ryb2lrYS13b3JrZXItdXRpbHMudW1kLmpzP2FkYjUiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC50cm9pa2Ffd29ya2VyX3V0aWxzID0ge30pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTWFpbiBjb250ZW50IGZvciB0aGUgd29ya2VyIHRoYXQgaGFuZGxlcyB0aGUgbG9hZGluZyBhbmQgZXhlY3V0aW9uIG9mXG4gICAqIG1vZHVsZXMgd2l0aGluIGl0LlxuICAgKi9cbiAgZnVuY3Rpb24gd29ya2VyQm9vdHN0cmFwKCkge1xuICAgIHZhciBtb2R1bGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIC8vIEhhbmRsZSBtZXNzYWdlcyBmb3IgcmVnaXN0ZXJpbmcgYSBtb2R1bGVcbiAgICBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZShyZWYsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaWQgPSByZWYuaWQ7XG4gICAgICB2YXIgbmFtZSA9IHJlZi5uYW1lO1xuICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IHJlZi5kZXBlbmRlbmNpZXM7IGlmICggZGVwZW5kZW5jaWVzID09PSB2b2lkIDAgKSBkZXBlbmRlbmNpZXMgPSBbXTtcbiAgICAgIHZhciBpbml0ID0gcmVmLmluaXQ7IGlmICggaW5pdCA9PT0gdm9pZCAwICkgaW5pdCA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgIHZhciBnZXRUcmFuc2ZlcmFibGVzID0gcmVmLmdldFRyYW5zZmVyYWJsZXM7IGlmICggZ2V0VHJhbnNmZXJhYmxlcyA9PT0gdm9pZCAwICkgZ2V0VHJhbnNmZXJhYmxlcyA9IG51bGw7XG5cbiAgICAgIC8vIE9ubHkgcmVnaXN0ZXIgb25jZVxuICAgICAgaWYgKG1vZHVsZXNbaWRdKSB7IHJldHVybiB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIElmIGFueSBkZXBlbmRlbmNpZXMgYXJlIG1vZHVsZXMsIGVuc3VyZSB0aGV5J3JlIHJlZ2lzdGVyZWQgYW5kIGdyYWIgdGhlaXIgdmFsdWVcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICAgICAgaWYgKGRlcCAmJiBkZXAuaXNXb3JrZXJNb2R1bGUpIHtcbiAgICAgICAgICAgIHJlZ2lzdGVyTW9kdWxlKGRlcCwgZnVuY3Rpb24gKGRlcFJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAoZGVwUmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHsgdGhyb3cgZGVwUmVzdWx0IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVwID0gbW9kdWxlc1tkZXAuaWRdLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlaHlkcmF0ZSBmdW5jdGlvbnNcbiAgICAgICAgaW5pdCA9IHJlaHlkcmF0ZSgoXCI8XCIgKyBuYW1lICsgXCI+LmluaXRcIiksIGluaXQpO1xuICAgICAgICBpZiAoZ2V0VHJhbnNmZXJhYmxlcykge1xuICAgICAgICAgIGdldFRyYW5zZmVyYWJsZXMgPSByZWh5ZHJhdGUoKFwiPFwiICsgbmFtZSArIFwiPi5nZXRUcmFuc2ZlcmFibGVzXCIpLCBnZXRUcmFuc2ZlcmFibGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIG1vZHVsZSBhbmQgc3RvcmUgaXRzIHZhbHVlXG4gICAgICAgIHZhciB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gaW5pdC5hcHBseSh2b2lkIDAsIGRlcGVuZGVuY2llcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignd29ya2VyIG1vZHVsZSBpbml0IGZ1bmN0aW9uIGZhaWxlZCB0byByZWh5ZHJhdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGVzW2lkXSA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGdldFRyYW5zZmVyYWJsZXM6IGdldFRyYW5zZmVyYWJsZXNcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgaWYgKCEoZXJyICYmIGVyci5ub0xvZykpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgbWVzc2FnZXMgZm9yIGNhbGxpbmcgYSByZWdpc3RlcmVkIG1vZHVsZSdzIHJlc3VsdCBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIGNhbGxNb2R1bGUocmVmLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHJlZiQxO1xuXG4gICAgICB2YXIgaWQgPSByZWYuaWQ7XG4gICAgICB2YXIgYXJncyA9IHJlZi5hcmdzO1xuICAgICAgaWYgKCFtb2R1bGVzW2lkXSB8fCB0eXBlb2YgbW9kdWxlc1tpZF0udmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKChcIldvcmtlciBtb2R1bGUgXCIgKyBpZCArIFwiOiBub3QgZm91bmQgb3IgaXRzICdpbml0JyBkaWQgbm90IHJldHVybiBhIGZ1bmN0aW9uXCIpKSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gKHJlZiQxID0gbW9kdWxlc1tpZF0pLnZhbHVlLmFwcGx5KHJlZiQxLCBhcmdzKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQudGhlbihoYW5kbGVSZXN1bHQsIGZ1bmN0aW9uIChyZWopIHsgcmV0dXJuIGNhbGxiYWNrKHJlaiBpbnN0YW5jZW9mIEVycm9yID8gcmVqIDogbmV3IEVycm9yKCcnICsgcmVqKSk7IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZVJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0KHJlc3VsdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciB0eCA9IG1vZHVsZXNbaWRdLmdldFRyYW5zZmVyYWJsZXMgJiYgbW9kdWxlc1tpZF0uZ2V0VHJhbnNmZXJhYmxlcyhyZXN1bHQpO1xuICAgICAgICAgIGlmICghdHggfHwgIUFycmF5LmlzQXJyYXkodHgpIHx8ICF0eC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHR4ID0gdW5kZWZpbmVkOyAvL3Bvc3RNZXNzYWdlIGlzIHZlcnkgcGlja3kgYWJvdXQgbm90IHBhc3NpbmcgbnVsbCBvciBlbXB0eSB0cmFuc2ZlcmFibGVzXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgdHgpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVoeWRyYXRlKG5hbWUsIHN0cikge1xuICAgICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgIHNlbGYudHJvaWthRGVmaW5lID0gZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHJlc3VsdCA9IHI7IH07XG4gICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcbiAgICAgICAgbmV3IEJsb2IoXG4gICAgICAgICAgWyhcIi8qKiBcIiArIChuYW1lLnJlcGxhY2UoL1xcKi9nLCAnJykpICsgXCIgKiovXFxuXFxudHJvaWthRGVmaW5lKFxcblwiICsgc3RyICsgXCJcXG4pXCIpXSxcbiAgICAgICAgICB7dHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnfVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW1wb3J0U2NyaXB0cyh1cmwpO1xuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgZGVsZXRlIHNlbGYudHJvaWthRGVmaW5lO1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIEhhbmRsZXIgZm9yIGFsbCBtZXNzYWdlcyB3aXRoaW4gdGhlIHdvcmtlclxuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgcmVmID0gZS5kYXRhO1xuICAgICAgdmFyIG1lc3NhZ2VJZCA9IHJlZi5tZXNzYWdlSWQ7XG4gICAgICB2YXIgYWN0aW9uID0gcmVmLmFjdGlvbjtcbiAgICAgIHZhciBkYXRhID0gcmVmLmRhdGE7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBNb2R1bGUgcmVnaXN0cmF0aW9uXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdyZWdpc3Rlck1vZHVsZScpIHtcbiAgICAgICAgICByZWdpc3Rlck1vZHVsZShkYXRhLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiByZXN1bHQubWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlc3VsdDoge2lzQ2FsbGFibGU6IHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbid9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEludm9jYXRpb25cbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NhbGxNb2R1bGUnKSB7XG4gICAgICAgICAgY2FsbE1vZHVsZShkYXRhLCBmdW5jdGlvbiAocmVzdWx0LCB0cmFuc2ZlcmFibGVzKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiByZXN1bHQubWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgICAgICAgIH0sIHRyYW5zZmVyYWJsZXMgfHwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZUlkLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBlcnIuc3RhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmFsbGJhY2sgZm9yIGBkZWZpbmVXb3JrZXJNb2R1bGVgIHRoYXQgYmVoYXZlcyBpZGVudGljYWxseSBidXQgcnVucyBpbiB0aGUgbWFpblxuICAgKiB0aHJlYWQsIGZvciB3aGVuIHRoZSBleGVjdXRpb24gZW52aXJvbm1lbnQgZG9lc24ndCBzdXBwb3J0IHdlYiB3b3JrZXJzIG9yIHRoZXlcbiAgICogYXJlIGRpc2FsbG93ZWQgZHVlIHRvIGUuZy4gQ1NQIHNlY3VyaXR5IHJlc3RyaWN0aW9ucy5cbiAgICovXG4gIGZ1bmN0aW9uIGRlZmluZU1haW5UaHJlYWRNb2R1bGUob3B0aW9ucykge1xuICAgIHZhciBtb2R1bGVGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgcmV0dXJuIG1vZHVsZUZ1bmMuX2dldEluaXRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uIChpbml0UmVzdWx0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdFJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBpbml0UmVzdWx0LmFwcGx5KHZvaWQgMCwgYXJncylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dvcmtlciBtb2R1bGUgZnVuY3Rpb24gd2FzIGNhbGxlZCBidXQgYGluaXRgIGRpZCBub3QgcmV0dXJuIGEgY2FsbGFibGUgZnVuY3Rpb24nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH07XG4gICAgbW9kdWxlRnVuYy5fZ2V0SW5pdFJlc3VsdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gV2UgY2FuIGlnbm9yZSBnZXRUcmFuc2ZlcmFibGVzIGluIG1haW4gdGhyZWFkLiBUT0RPIHdvcmtlcklkP1xuICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IG9wdGlvbnMuZGVwZW5kZW5jaWVzO1xuICAgICAgdmFyIGluaXQgPSBvcHRpb25zLmluaXQ7XG5cbiAgICAgIC8vIFJlc29sdmUgZGVwZW5kZW5jaWVzXG4gICAgICBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcykgPyBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHsgcmV0dXJuIGRlcCAmJiBkZXAuX2dldEluaXRSZXN1bHQgPyBkZXAuX2dldEluaXRSZXN1bHQoKSA6IGRlcDsgfVxuICAgICAgKSA6IFtdO1xuXG4gICAgICAvLyBJbnZva2UgaW5pdCB3aXRoIHRoZSByZXNvbHZlZCBkZXBlbmRlbmNpZXNcbiAgICAgIHZhciBpbml0UHJvbWlzZSA9IFByb21pc2UuYWxsKGRlcGVuZGVuY2llcykudGhlbihmdW5jdGlvbiAoZGVwcykge1xuICAgICAgICByZXR1cm4gaW5pdC5hcHBseShudWxsLCBkZXBzKVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENhY2hlIHRoZSByZXNvbHZlZCBwcm9taXNlIGZvciBzdWJzZXF1ZW50IGNhbGxzXG4gICAgICBtb2R1bGVGdW5jLl9nZXRJbml0UmVzdWx0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5pdFByb21pc2U7IH07XG5cbiAgICAgIHJldHVybiBpbml0UHJvbWlzZVxuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZUZ1bmNcbiAgfVxuXG4gIHZhciBzdXBwb3J0c1dvcmtlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgLy8gT25seSBhdHRlbXB0IHdvcmtlciBpbml0aWFsaXphdGlvbiBpbiBicm93c2VyczsgZWxzZXdoZXJlIGl0IHdvdWxkIGp1c3QgYmVcbiAgICAvLyBub2lzZSBlLmcuIGxvYWRpbmcgaW50byBhIE5vZGUgZW52aXJvbm1lbnQgZm9yIFNTUi5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRPRE8gYWRkaXRpb25hbCBjaGVja3MgZm9yIHRoaW5ncyBsaWtlIGltcG9ydFNjcmlwdHMgd2l0aGluIHRoZSB3b3JrZXI/XG4gICAgICAgIC8vICBXb3VsZCBuZWVkIHRvIGJlIGFuIGFzeW5jIGNoZWNrLlxuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihcbiAgICAgICAgICBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFsnJ10sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnIH0pKVxuICAgICAgICApO1xuICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSA7IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgKFwiVHJvaWthIGNyZWF0ZVdvcmtlck1vZHVsZTogd2ViIHdvcmtlcnMgbm90IGFsbG93ZWQ7IGZhbGxpbmcgYmFjayB0byBtYWluIHRocmVhZCBleGVjdXRpb24uIENhdXNlOiBbXCIgKyAoZXJyLm1lc3NhZ2UpICsgXCJdXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENhY2hlZCByZXN1bHRcbiAgICBzdXBwb3J0c1dvcmtlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzdXBwb3J0ZWQ7IH07XG4gICAgcmV0dXJuIHN1cHBvcnRlZFxuICB9O1xuXG4gIHZhciBfd29ya2VyTW9kdWxlSWQgPSAwO1xuICB2YXIgX21lc3NhZ2VJZCA9IDA7XG4gIHZhciBfYWxsb3dJbml0QXNTdHJpbmcgPSBmYWxzZTtcbiAgdmFyIHdvcmtlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcmVnaXN0ZXJlZE1vZHVsZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvL3dvcmtlcklkIC0+IFNldDx1bnJlZ2lzdGVyRm4+XG4gIHZhciBvcGVuUmVxdWVzdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cbiAgLyoqXG4gICAqIERlZmluZSBhIG1vZHVsZSBvZiBjb2RlIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aXRoIGEgd2ViIHdvcmtlci4gVGhpcyBwcm92aWRlcyBhIHNpbXBsZVxuICAgKiBpbnRlcmZhY2UgZm9yIG1vdmluZyBjaHVua3Mgb2YgbG9naWMgb2ZmIHRoZSBtYWluIHRocmVhZCwgYW5kIG1hbmFnaW5nIHRoZWlyIGRlcGVuZGVuY2llc1xuICAgKiBhbW9uZyBvbmUgYW5vdGhlci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5pbml0XG4gICAqIEBwYXJhbSB7YXJyYXl9IFtvcHRpb25zLmRlcGVuZGVuY2llc11cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuZ2V0VHJhbnNmZXJhYmxlc11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm5hbWVdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy53b3JrZXJJZF1cbiAgICogQHJldHVybiB7ZnVuY3Rpb24oLi4uWypdKToge3RoZW59fVxuICAgKi9cbiAgZnVuY3Rpb24gZGVmaW5lV29ya2VyTW9kdWxlKG9wdGlvbnMpIHtcbiAgICBpZiAoKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zLmluaXQgIT09ICdmdW5jdGlvbicpICYmICFfYWxsb3dJbml0QXNTdHJpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncmVxdWlyZXMgYG9wdGlvbnMuaW5pdGAgZnVuY3Rpb24nKVxuICAgIH1cbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gb3B0aW9ucy5kZXBlbmRlbmNpZXM7XG4gICAgdmFyIGluaXQgPSBvcHRpb25zLmluaXQ7XG4gICAgdmFyIGdldFRyYW5zZmVyYWJsZXMgPSBvcHRpb25zLmdldFRyYW5zZmVyYWJsZXM7XG4gICAgdmFyIHdvcmtlcklkID0gb3B0aW9ucy53b3JrZXJJZDtcblxuICAgIGlmICghc3VwcG9ydHNXb3JrZXJzKCkpIHtcbiAgICAgIHJldHVybiBkZWZpbmVNYWluVGhyZWFkTW9kdWxlKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgaWYgKHdvcmtlcklkID09IG51bGwpIHtcbiAgICAgIHdvcmtlcklkID0gJyNkZWZhdWx0JztcbiAgICB9XG4gICAgdmFyIGlkID0gXCJ3b3JrZXJNb2R1bGVcIiArICgrK193b3JrZXJNb2R1bGVJZCk7XG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgaWQ7XG4gICAgdmFyIHJlZ2lzdHJhdGlvblByb21pc2UgPSBudWxsO1xuXG4gICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzICYmIGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgLy8gV3JhcCByYXcgZnVuY3Rpb25zIGFzIHdvcmtlciBtb2R1bGVzIHdpdGggbm8gZGVwZW5kZW5jaWVzXG4gICAgICBpZiAodHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJyAmJiAhZGVwLndvcmtlck1vZHVsZURhdGEpIHtcbiAgICAgICAgX2FsbG93SW5pdEFzU3RyaW5nID0gdHJ1ZTtcbiAgICAgICAgZGVwID0gZGVmaW5lV29ya2VyTW9kdWxlKHtcbiAgICAgICAgICB3b3JrZXJJZDogd29ya2VySWQsXG4gICAgICAgICAgbmFtZTogKFwiPFwiICsgbmFtZSArIFwiPiBmdW5jdGlvbiBkZXBlbmRlbmN5OiBcIiArIChkZXAubmFtZSkpLFxuICAgICAgICAgIGluaXQ6IChcImZ1bmN0aW9uKCl7cmV0dXJuIChcXG5cIiArIChzdHJpbmdpZnlGdW5jdGlvbihkZXApKSArIFwiXFxuKX1cIilcbiAgICAgICAgfSk7XG4gICAgICAgIF9hbGxvd0luaXRBc1N0cmluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gR3JhYiBwb3N0YWJsZSBkYXRhIGZvciB3b3JrZXIgbW9kdWxlc1xuICAgICAgaWYgKGRlcCAmJiBkZXAud29ya2VyTW9kdWxlRGF0YSkge1xuICAgICAgICBkZXAgPSBkZXAud29ya2VyTW9kdWxlRGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXBcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG1vZHVsZUZ1bmMoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgLy8gUmVnaXN0ZXIgdGhpcyBtb2R1bGUgaWYgbmVlZGVkXG4gICAgICBpZiAoIXJlZ2lzdHJhdGlvblByb21pc2UpIHtcbiAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IGNhbGxXb3JrZXIod29ya2VySWQsJ3JlZ2lzdGVyTW9kdWxlJywgbW9kdWxlRnVuYy53b3JrZXJNb2R1bGVEYXRhKTtcbiAgICAgICAgdmFyIHVucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgcmVnaXN0ZXJlZE1vZHVsZXNbd29ya2VySWRdLmRlbGV0ZSh1bnJlZ2lzdGVyKTtcbiAgICAgICAgfVxuICAgICAgICA7KHJlZ2lzdGVyZWRNb2R1bGVzW3dvcmtlcklkXSB8fCAocmVnaXN0ZXJlZE1vZHVsZXNbd29ya2VySWRdID0gbmV3IFNldCgpKSkuYWRkKHVucmVnaXN0ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnZva2UgdGhlIG1vZHVsZSwgcmV0dXJuaW5nIGEgcHJvbWlzZVxuICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHZhciBpc0NhbGxhYmxlID0gcmVmLmlzQ2FsbGFibGU7XG5cbiAgICAgICAgaWYgKGlzQ2FsbGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbFdvcmtlcih3b3JrZXJJZCwnY2FsbE1vZHVsZScsIHtpZDogaWQsIGFyZ3M6IGFyZ3N9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV29ya2VyIG1vZHVsZSBmdW5jdGlvbiB3YXMgY2FsbGVkIGJ1dCBgaW5pdGAgZGlkIG5vdCByZXR1cm4gYSBjYWxsYWJsZSBmdW5jdGlvbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIG1vZHVsZUZ1bmMud29ya2VyTW9kdWxlRGF0YSA9IHtcbiAgICAgIGlzV29ya2VyTW9kdWxlOiB0cnVlLFxuICAgICAgaWQ6IGlkLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzLFxuICAgICAgaW5pdDogc3RyaW5naWZ5RnVuY3Rpb24oaW5pdCksXG4gICAgICBnZXRUcmFuc2ZlcmFibGVzOiBnZXRUcmFuc2ZlcmFibGVzICYmIHN0cmluZ2lmeUZ1bmN0aW9uKGdldFRyYW5zZmVyYWJsZXMpXG4gICAgfTtcbiAgICByZXR1cm4gbW9kdWxlRnVuY1xuICB9XG5cbiAgLyoqXG4gICAqIFRlcm1pbmF0ZSBhbiBhY3RpdmUgV29ya2VyIGJ5IGEgd29ya2VySWQgdGhhdCB3YXMgcGFzc2VkIHRvIGRlZmluZVdvcmtlck1vZHVsZS5cbiAgICogVGhpcyBvbmx5IHRlcm1pbmF0ZXMgdGhlIFdvcmtlciBpdHNlbGY7IHRoZSB3b3JrZXIgbW9kdWxlIHdpbGwgcmVtYWluIGF2YWlsYWJsZVxuICAgKiBhbmQgaWYgeW91IGNhbGwgaXQgYWdhaW4gaXRzIFdvcmtlciB3aWxsIGJlIHJlc3Bhd25lZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHdvcmtlcklkXG4gICAqL1xuICBmdW5jdGlvbiB0ZXJtaW5hdGVXb3JrZXIod29ya2VySWQpIHtcbiAgICAvLyBVbnJlZ2lzdGVyIGFsbCBtb2R1bGVzIHRoYXQgd2VyZSByZWdpc3RlcmVkIGluIHRoYXQgd29ya2VyXG4gICAgaWYgKHJlZ2lzdGVyZWRNb2R1bGVzW3dvcmtlcklkXSkge1xuICAgICAgcmVnaXN0ZXJlZE1vZHVsZXNbd29ya2VySWRdLmZvckVhY2goZnVuY3Rpb24gKHVucmVnaXN0ZXIpIHtcbiAgICAgICAgdW5yZWdpc3RlcigpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFRlcm1pbmF0ZSB0aGUgV29ya2VyIG9iamVjdFxuICAgIGlmICh3b3JrZXJzW3dvcmtlcklkXSkge1xuICAgICAgd29ya2Vyc1t3b3JrZXJJZF0udGVybWluYXRlKCk7XG4gICAgICBkZWxldGUgd29ya2Vyc1t3b3JrZXJJZF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0cmluZ2lmaWVzIGEgZnVuY3Rpb24gaW50byBhIGZvcm0gdGhhdCBjYW4gYmUgZGVzZXJpYWxpemVkIGluIHRoZSB3b3JrZXJcbiAgICogQHBhcmFtIGZuXG4gICAqL1xuICBmdW5jdGlvbiBzdHJpbmdpZnlGdW5jdGlvbihmbikge1xuICAgIHZhciBzdHIgPSBmbi50b1N0cmluZygpO1xuICAgIC8vIElmIGl0IHdhcyBkZWZpbmVkIGluIG9iamVjdCBtZXRob2QvcHJvcGVydHkgZm9ybWF0LCBpdCBuZWVkcyB0byBiZSBtb2RpZmllZFxuICAgIGlmICghL15mdW5jdGlvbi8udGVzdChzdHIpICYmIC9eXFx3K1xccypcXCgvLnRlc3Qoc3RyKSkge1xuICAgICAgc3RyID0gJ2Z1bmN0aW9uICcgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZ2V0V29ya2VyKHdvcmtlcklkKSB7XG4gICAgdmFyIHdvcmtlciA9IHdvcmtlcnNbd29ya2VySWRdO1xuICAgIGlmICghd29ya2VyKSB7XG4gICAgICAvLyBCb290c3RyYXAgdGhlIHdvcmtlcidzIGNvbnRlbnRcbiAgICAgIHZhciBib290c3RyYXAgPSBzdHJpbmdpZnlGdW5jdGlvbih3b3JrZXJCb290c3RyYXApO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIHdvcmtlciBmcm9tIHRoZSBib290c3RyYXAgZnVuY3Rpb24gY29udGVudFxuICAgICAgd29ya2VyID0gd29ya2Vyc1t3b3JrZXJJZF0gPSBuZXcgV29ya2VyKFxuICAgICAgICBVUkwuY3JlYXRlT2JqZWN0VVJMKFxuICAgICAgICAgIG5ldyBCbG9iKFxuICAgICAgICAgICAgWyhcIi8qKiBXb3JrZXIgTW9kdWxlIEJvb3RzdHJhcDogXCIgKyAod29ya2VySWQucmVwbGFjZSgvXFwqL2csICcnKSkgKyBcIiAqKi9cXG5cXG47KFwiICsgYm9vdHN0cmFwICsgXCIpKClcIildLFxuICAgICAgICAgICAge3R5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J31cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIC8vIFNpbmdsZSBoYW5kbGVyIGZvciByZXNwb25zZSBtZXNzYWdlcyBmcm9tIHRoZSB3b3JrZXJcbiAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBlLmRhdGE7XG4gICAgICAgIHZhciBtc2dJZCA9IHJlc3BvbnNlLm1lc3NhZ2VJZDtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gb3BlblJlcXVlc3RzW21zZ0lkXTtcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV29ya2VyTW9kdWxlIHJlc3BvbnNlIHdpdGggZW1wdHkgb3IgdW5rbm93biBtZXNzYWdlSWQnKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBvcGVuUmVxdWVzdHNbbXNnSWRdO1xuICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gd29ya2VyXG4gIH1cblxuICAvLyBJc3N1ZSBhIGNhbGwgdG8gdGhlIHdvcmtlciB3aXRoIGEgY2FsbGJhY2sgdG8gaGFuZGxlIHRoZSByZXNwb25zZVxuICBmdW5jdGlvbiBjYWxsV29ya2VyKHdvcmtlcklkLCBhY3Rpb24sIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIG1lc3NhZ2VJZCA9ICsrX21lc3NhZ2VJZDtcbiAgICAgIG9wZW5SZXF1ZXN0c1ttZXNzYWdlSWRdID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoKFwiRXJyb3IgaW4gd29ya2VyIFwiICsgYWN0aW9uICsgXCIgY2FsbDogXCIgKyAocmVzcG9uc2UuZXJyb3IpKSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZ2V0V29ya2VyKHdvcmtlcklkKS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZUlkLFxuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGV4cG9ydHMuZGVmaW5lV29ya2VyTW9kdWxlID0gZGVmaW5lV29ya2VyTW9kdWxlO1xuICBleHBvcnRzLnN0cmluZ2lmeUZ1bmN0aW9uID0gc3RyaW5naWZ5RnVuY3Rpb247XG4gIGV4cG9ydHMudGVybWluYXRlV29ya2VyID0gdGVybWluYXRlV29ya2VyO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/troika-worker-utils/dist/troika-worker-utils.umd.js\n");

/***/ })

};
;