/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/UserList",{

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/sramirez/Documents/next-apollo/next-apollo-demo/client/components/UserList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query info {\\n    dummyUserList\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n //import { makeStyles } from \"@material-ui/styles\";\n\n\n\n\n\n\n\nvar Component = function Component() {\n  _s();\n\n  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n    var _button;\n\n    return {\n      root: {\n        minWidth: 275\n      },\n      bullet: {\n        display: \"inline-block\",\n        margin: \"0 2px\",\n        transform: \"scale(0.8)\"\n      },\n      title: {\n        fontSize: 18\n      },\n      pos: {\n        marginBottom: 12,\n        fontSize: 12\n      },\n      button: (_button = {\n        color: \"white\"\n      }, (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, theme.breakpoints.down(\"xs\"), {\n        marginTop: theme.spacing(1),\n        backgroundColor: \"purple\"\n      }), (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, theme.breakpoints.between(\"sm\", \"md\"), {\n        marginTop: theme.spacing(3),\n        backgroundColor: \"blue\"\n      }), (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, \"@media (min-width: 1280px)\", {\n        marginTop: theme.spacing(5),\n        backgroundColor: \"red\"\n      }), _button)\n    };\n  });\n  var classes = useStyles();\n  var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(query),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n    children: \"loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 24\n  }, _this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n    children: \"error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 21\n  }, _this);\n  var dummyList = JSON.parse(data.dummyUserList);\n  return console.log(data.dummyUserList), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {\n      className: classes.button,\n      variant: \"contained\",\n      children: \"Hello World!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n      style: {\n        marginTop: \"20px\"\n      },\n      container: true,\n      spacing: 4,\n      children: dummyList.map(function (user) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n          item: true,\n          xs: 4,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__.default, {\n            className: classes.root,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__.default, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                className: classes.title,\n                color: \"textPrimary\",\n                gutterBottom: true,\n                children: [\"NAME - \", user.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 21\n                }, _this), \"PHONE - \", user.phone]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                className: classes.pos,\n                color: \"textSecondary\",\n                children: [\"ADDRESS - \", user.address]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                variant: \"body2\",\n                component: \"p\",\n                children: [\"EMAIL - \", user.email]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, _this)\n        }, user.name, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Component, \"rKPW5MgR2KG+W2FztZhSquZIzHA=\", true, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];\n});\n\n_c = Component;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\nvar _c;\n\n$RefreshReg$(_c, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyTGlzdC5qcz8xZTk0Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtaW5XaWR0aCIsImJ1bGxldCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsImZvbnRTaXplIiwicG9zIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uIiwiY29sb3IiLCJicmVha3BvaW50cyIsImRvd24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYmV0d2VlbiIsImNsYXNzZXMiLCJxdWVyeSIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImR1bW15TGlzdCIsIkpTT04iLCJwYXJzZSIsImR1bW15VXNlckxpc3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidXNlciIsIm5hbWUiLCJwaG9uZSIsImFkZHJlc3MiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBS0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQixNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBOztBQUFBLFdBQUs7QUFDbkNDLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FENkI7QUFJbkNDLFlBQU0sRUFBRTtBQUNKQyxlQUFPLEVBQUUsY0FETDtBQUVKQyxjQUFNLEVBQUUsT0FGSjtBQUdKQyxpQkFBUyxFQUFFO0FBSFAsT0FKMkI7QUFTbkNDLFdBQUssRUFBRTtBQUNIQyxnQkFBUSxFQUFFO0FBRFAsT0FUNEI7QUFZbkNDLFNBQUcsRUFBRTtBQUNEQyxvQkFBWSxFQUFFLEVBRGI7QUFFREYsZ0JBQVEsRUFB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QTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQXVCSixJQUFJLENBQUNDLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBZ0NFLENBaEZKOztHQUFNckMsUztVQTRDNEJ5QixvRDs7O0tBNUM1QnpCLFM7QUFrRk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG4vL2ltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cblxuXG5cbmNvbnN0IENvbXBvbmVudCA9ICgpID0+IHtcblxuICAgIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgbWluV2lkdGg6IDI3NSxcbiAgICAgICAgfSxcbiAgICAgICAgYnVsbGV0OiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgMnB4XCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC44KVwiLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgICB9LFxuICAgICAgICBwb3M6IHtcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwdXJwbGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oXCJzbVwiLCBcIm1kXCIpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KVwiOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblxuXG4gIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBpbmZvIHtcbiAgICBkdW1teVVzZXJMaXN0XG4gIH1cbmBcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YX0gPSB1c2VRdWVyeShxdWVyeSk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gKDxzcGFuPmxvYWRpbmcuLi48L3NwYW4+KVxuICBpZihlcnJvcikgcmV0dXJuICg8c3Bhbj5lcnJvcjwvc3Bhbj4pXG4gIGNvbnN0IGR1bW15TGlzdCA9IEpTT04ucGFyc2UoZGF0YS5kdW1teVVzZXJMaXN0KTtcbiAgcmV0dXJuKFxuICAgIGNvbnNvbGUubG9nKGRhdGEuZHVtbXlVc2VyTGlzdCksXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICBIZWxsbyBXb3JsZCFcbiAgICAgIDwvQnV0dG9uPlxuICAgIDxHcmlkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0gY29udGFpbmVyIHNwYWNpbmc9ezR9PiAgICBcbiAgICAgICAgICB7ZHVtbXlMaXN0Lm1hcCgodXNlcikgPT4gKFxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0ga2V5PXt1c2VyLm5hbWV9PlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5BTUUgLSB7dXNlci5uYW1lfSAgXG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIFBIT05FIC0ge3VzZXIucGhvbmV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucG9zfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQUREUkVTUyAtIHt1c2VyLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAgICAgIEVNQUlMIC0ge3VzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserList.js\n");

/***/ })

});