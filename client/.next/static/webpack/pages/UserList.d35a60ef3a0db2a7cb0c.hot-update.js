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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/sramirez/Documents/next-apollo/next-apollo-demo/client/components/UserList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query info {\\n    dummyUserList\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/*import { gql, useQuery } from '@apollo/client';\n\nimport Card from \"@material-ui/core/Card\";\nimport Grid from \"@material-ui/core/Grid\";\n//import { makeStyles } from \"@material-ui/styles\";\nimport CardContent from \"@material-ui/core/CardContent\";\nimport Button from \"@material-ui/core/Button\";\nimport Typography from \"@material-ui/core/Typography\";\n\n\nimport React from \"react\";\nimport { makeStyles } from \"@material-ui/core/styles\";\n\n\n\n\nconst Component = () => {\n\n    const useStyles = makeStyles(theme => ({\n        root: {\n            minWidth: 275,\n        },\n        root2: {\n          color: \"white\",\n          [theme.breakpoints.down(\"xs\")]: {\n            marginTop: theme.spacing(1),\n            backgroundColor: \"purple\"\n          },\n          [theme.breakpoints.between(\"sm\", \"md\")]: {\n            marginTop: theme.spacing(3),\n            backgroundColor: \"blue\"\n          },\n          \"@media (min-width: 1280px)\": {\n            marginTop: theme.spacing(5),\n            backgroundColor: \"red\"\n          }\n        },\n        title: {\n            fontSize: 18,\n        },\n        pos: {\n            marginBottom: 12,\n            fontSize: 12,\n        },\n        button: {\n          color: \"white\",\n          [theme.breakpoints.down(\"xs\")]: {\n            marginTop: theme.spacing(1),\n            backgroundColor: \"purple\"\n          },\n          [theme.breakpoints.between(\"sm\", \"md\")]: {\n            marginTop: theme.spacing(3),\n            backgroundColor: \"blue\"\n          },\n          \"@media (min-width: 1280px)\": {\n            marginTop: theme.spacing(5),\n            backgroundColor: \"red\"\n          }\n        }\n    }));\n\n    const classes = useStyles();\n\n\n\n  const query = gql`\n  query info {\n    dummyUserList\n  }\n`\n  const { loading, error, data} = useQuery(query);\n  if (loading) return (<span>loading...</span>)\n  if(error) return (<span>error</span>)\n  const dummyList = JSON.parse(data.dummyUserList);\n  return(\n    console.log(data.dummyUserList),\n    <div>\n      <Button className={classes.button} variant=\"contained\">\n        Hello World!\n      </Button>\n    <Grid style={{ marginTop: \"20px\" }} container spacing={4}>    \n          {dummyList.map((user) => (\n            <Grid item xs={4} key={user.name}>\n              <Card className={classes.root2}>\n                <CardContent>\n                  <Typography\n                    className={classes.title}\n                    color=\"textPrimary\"\n                    gutterBottom\n                  >\n                    NAME - {user.name}  \n                    <br/>\n                    PHONE - {user.phone}\n                  </Typography>\n                  <Typography className={classes.pos} color=\"textSecondary\">\n                    ADDRESS - {user.address}\n                  </Typography>\n                  <Typography variant=\"body2\" component=\"p\">\n                    EMAIL - {user.email}\n                  </Typography>\n                </CardContent>\n              </Card>\n            </Grid>\n          ))}\n    </Grid>\n    </div>\n  )}\n\nexport default Component*/\n\n\n //import { makeStyles } from \"@material-ui/styles\";\n\n\n\n\n\n\n\nvar Component = function Component() {\n  _s();\n\n  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n    var _root, _button;\n\n    return {\n      root: {\n        minWidth: 275\n      },\n      root2: (_root = {\n        color: \"white\"\n      }, (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_root, theme.breakpoints.down(\"xs\"), {\n        marginTop: theme.spacing(1),\n        backgroundColor: \"purple\"\n      }), (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_root, theme.breakpoints.between(\"sm\", \"md\"), {\n        marginTop: theme.spacing(3),\n        backgroundColor: \"blue\"\n      }), (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_root, \"@media (min-width: 1280px)\", {\n        marginTop: theme.spacing(5),\n        backgroundColor: \"red\"\n      }), _root),\n      gridContainer: {\n        paddingLeft: \"20px\",\n        paddingRight: \"20px\"\n        /* color: \"white\",\n         [theme.breakpoints.down(\"xs\")]: {\n           marginTop: theme.spacing(1),\n           backgroundColor: \"purple\"\n         },\n         [theme.breakpoints.between(\"sm\", \"md\")]: {\n           marginTop: theme.spacing(3),\n           backgroundColor: \"blue\"\n         },\n         \"@media (min-width: 1280px)\": {\n           marginTop: theme.spacing(5),\n           backgroundColor: \"red\"\n         }*/\n\n      },\n      gridItem: {\n        /*[theme.breakpoints.down(\"xs\")]: {\n          marginTop: theme.spacing(1),\n          //xs:1\n        },\n        [theme.breakpoints.between(\"sm\", \"md\")]: {\n          marginTop: theme.spacing(3),\n          //xs:3\n        },\n        \"@media (min-width: 1280px)\": {\n          marginTop: theme.spacing(5),\n          backgroundColor: \"red\",\n          //xs:7\n        }*/\n      },\n      title: {\n        fontSize: 18\n      },\n      pos: {\n        marginBottom: 12,\n        fontSize: 12\n      },\n      button: (_button = {\n        color: \"white\"\n      }, (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, theme.breakpoints.down(\"xs\"), {\n        marginTop: theme.spacing(1),\n        backgroundColor: \"purple\"\n      }), (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, theme.breakpoints.between(\"sm\", \"md\"), {\n        marginTop: theme.spacing(3),\n        backgroundColor: \"blue\"\n      }), (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, \"@media (min-width: 1280px)\", {\n        marginTop: theme.spacing(5),\n        backgroundColor: \"red\"\n      }), _button)\n    };\n  });\n  var classes = useStyles();\n  var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(query),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n    children: \"loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 214,\n    columnNumber: 24\n  }, _this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n    children: \"error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 215,\n    columnNumber: 21\n  }, _this);\n  var dummyList = JSON.parse(data.dummyUserList);\n  return console.log(data.dummyUserList), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {\n      className: classes.button,\n      variant: \"contained\",\n      children: \"Hello World!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n      style: {\n        marginTop: \"20px\"\n      },\n      className: classes.gridContainer,\n      container: true,\n      spacing: 4,\n      children: dummyList.map(function (user) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n          item: true,\n          xs: 12,\n          sm: 6,\n          md: 4,\n          xl: 3,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__.default, {\n            variant: \"outlined\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__.default, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                className: classes.title,\n                color: \"textPrimary\",\n                gutterBottom: true,\n                children: [\"NAME - \", user.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 234,\n                  columnNumber: 21\n                }, _this), \"PHONE - \", user.phone]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 228,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                className: classes.pos,\n                color: \"textSecondary\",\n                children: [\"ADDRESS - \", user.address]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 237,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                variant: \"body2\",\n                component: \"p\",\n                children: [\"EMAIL - \", user.email]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 240,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 227,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 226,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 225,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 223,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 219,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Component, \"rKPW5MgR2KG+W2FztZhSquZIzHA=\", true, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];\n});\n\n_c = Component;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\nvar _c;\n\n$RefreshReg$(_c, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyTGlzdC5qcz8xZTk0Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtaW5XaWR0aCIsInJvb3QyIiwiY29sb3IiLCJicmVha3BvaW50cyIsImRvd24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYmV0d2VlbiIsImdyaWRDb250YWluZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImdyaWRJdGVtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsImJ1dHRvbiIsImNsYXNzZXMiLCJxdWVyeSIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImR1bW15TGlzdCIsIkpTT04iLCJwYXJzZSIsImR1bW15VXNlckxpc3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidXNlciIsIm5hbWUiLCJwaG9uZSIsImFkZHJlc3MiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QU9XRCxJQUFJLENBQUNFLEtBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVVFLDhEQUFDLGtFQUFEO0FBQVkseUJBQVMsRUFBRWhCLE9BQU8sQ0FBQ0gsR0FBL0I7QUFBb0MscUJBQUssRUFBQyxlQUExQztBQUFBLHlDQUNhaUIsSUFBSSxDQUFDRyxPQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkYsZUFhRSw4REFBQyxrRUFBRDtBQUFZLHVCQUFPLEVBQUMsT0FBcEI7QUFBNEIseUJBQVMsRUFBQyxHQUF0QztBQUFBLHVDQUNXSCxJQUFJLENBQUNJLEtBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFnQ0UsQ0ExSEo7O0dBQU16QyxTO1VBc0Y0QjBCLG9EOzs7S0F0RjVCMUIsUztBQTRITiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlckxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuLy9pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5cblxuXG5jb25zdCBDb21wb25lbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIG1pbldpZHRoOiAyNzUsXG4gICAgICAgIH0sXG4gICAgICAgIHJvb3QyOiB7XG4gICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInB1cnBsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2VlbihcInNtXCIsIFwibWRcIildOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpXCI6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgfSxcbiAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxuICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICB9LFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHVycGxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5iZXR3ZWVuKFwic21cIiwgXCJtZFwiKV06IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDEyODBweClcIjoge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG5cblxuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgaW5mbyB7XG4gICAgZHVtbXlVc2VyTGlzdFxuICB9XG5gXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkocXVlcnkpO1xuICBpZiAobG9hZGluZykgcmV0dXJuICg8c3Bhbj5sb2FkaW5nLi4uPC9zcGFuPilcbiAgaWYoZXJyb3IpIHJldHVybiAoPHNwYW4+ZXJyb3I8L3NwYW4+KVxuICBjb25zdCBkdW1teUxpc3QgPSBKU09OLnBhcnNlKGRhdGEuZHVtbXlVc2VyTGlzdCk7XG4gIHJldHVybihcbiAgICBjb25zb2xlLmxvZyhkYXRhLmR1bW15VXNlckxpc3QpLFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9XCJjb250YWluZWRcIj5cbiAgICAgICAgSGVsbG8gV29ybGQhXG4gICAgICA8L0J1dHRvbj5cbiAgICA8R3JpZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19IGNvbnRhaW5lciBzcGFjaW5nPXs0fT4gICAgXG4gICAgICAgICAge2R1bW15TGlzdC5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGtleT17dXNlci5uYW1lfT5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3QyfT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTkFNRSAtIHt1c2VyLm5hbWV9ICBcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgUEhPTkUgLSB7dXNlci5waG9uZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBBRERSRVNTIC0ge3VzZXIuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgICAgICAgICAgRU1BSUwgLSB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQqL1xuXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbi8vaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuXG5cblxuY29uc3QgQ29tcG9uZW50ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBtaW5XaWR0aDogMjc1LFxuICAgICAgICB9LFxuICAgICAgICByb290Mjoge1xuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwdXJwbGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oXCJzbVwiLCBcIm1kXCIpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KVwiOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdyaWRDb250YWluZXI6IHtcbiAgICAgICAgICBwYWRkaW5nTGVmdDogXCIyMHB4XCIsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjIwcHhcIlxuICAgICAgICAgLyogY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInB1cnBsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2VlbihcInNtXCIsIFwibWRcIildOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpXCI6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIlxuICAgICAgICAgIH0qL1xuICAgICAgICB9LFxuICAgICAgICBncmlkSXRlbToge1xuICAgICAgICAgIC8qW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIC8veHM6MVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oXCJzbVwiLCBcIm1kXCIpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICAgICAgLy94czozXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpXCI6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgIC8veHM6N1xuICAgICAgICAgIH0qL1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgICB9LFxuICAgICAgICBwb3M6IHtcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwdXJwbGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oXCJzbVwiLCBcIm1kXCIpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KVwiOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblxuXG4gIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBpbmZvIHtcbiAgICBkdW1teVVzZXJMaXN0XG4gIH1cbmBcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YX0gPSB1c2VRdWVyeShxdWVyeSk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gKDxzcGFuPmxvYWRpbmcuLi48L3NwYW4+KVxuICBpZihlcnJvcikgcmV0dXJuICg8c3Bhbj5lcnJvcjwvc3Bhbj4pXG4gIGNvbnN0IGR1bW15TGlzdCA9IEpTT04ucGFyc2UoZGF0YS5kdW1teVVzZXJMaXN0KTtcbiAgcmV0dXJuKFxuICAgIGNvbnNvbGUubG9nKGRhdGEuZHVtbXlVc2VyTGlzdCksXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICBIZWxsbyBXb3JsZCFcbiAgICAgIDwvQnV0dG9uPlxuICAgIDxHcmlkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRDb250YWluZXJ9IGNvbnRhaW5lciBzcGFjaW5nPXs0fT4gICAgXG4gICAgICAgICAge2R1bW15TGlzdC5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IHhsPXszfT5cbiAgICAgICAgICAgICAgPENhcmQgdmFyaWFudD1cIm91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5BTUUgLSB7dXNlci5uYW1lfSAgXG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIFBIT05FIC0ge3VzZXIucGhvbmV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucG9zfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQUREUkVTUyAtIHt1c2VyLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAgICAgIEVNQUlMIC0ge3VzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserList.js\n");

/***/ })

});