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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/sramirez/Documents/next-apollo/next-apollo-demo/client/components/UserList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query info {\\n    dummyUserList\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/*import { gql, useQuery } from '@apollo/client';\n\nimport Card from \"@material-ui/core/Card\";\nimport Grid from \"@material-ui/core/Grid\";\n//import { makeStyles } from \"@material-ui/styles\";\nimport CardContent from \"@material-ui/core/CardContent\";\nimport Button from \"@material-ui/core/Button\";\nimport Typography from \"@material-ui/core/Typography\";\n\n\nimport React from \"react\";\nimport { makeStyles } from \"@material-ui/core/styles\";\n\n\n\n\nconst Component = () => {\n\n    const useStyles = makeStyles(theme => ({\n        root: {\n            minWidth: 275,\n        },\n        root2: {\n          color: \"white\",\n          [theme.breakpoints.down(\"xs\")]: {\n            marginTop: theme.spacing(1),\n            backgroundColor: \"purple\"\n          },\n          [theme.breakpoints.between(\"sm\", \"md\")]: {\n            marginTop: theme.spacing(3),\n            backgroundColor: \"blue\"\n          },\n          \"@media (min-width: 1280px)\": {\n            marginTop: theme.spacing(5),\n            backgroundColor: \"red\"\n          }\n        },\n        title: {\n            fontSize: 18,\n        },\n        pos: {\n            marginBottom: 12,\n            fontSize: 12,\n        },\n        button: {\n          color: \"white\",\n          [theme.breakpoints.down(\"xs\")]: {\n            marginTop: theme.spacing(1),\n            backgroundColor: \"purple\"\n          },\n          [theme.breakpoints.between(\"sm\", \"md\")]: {\n            marginTop: theme.spacing(3),\n            backgroundColor: \"blue\"\n          },\n          \"@media (min-width: 1280px)\": {\n            marginTop: theme.spacing(5),\n            backgroundColor: \"red\"\n          }\n        }\n    }));\n\n    const classes = useStyles();\n\n\n\n  const query = gql`\n  query info {\n    dummyUserList\n  }\n`\n  const { loading, error, data} = useQuery(query);\n  if (loading) return (<span>loading...</span>)\n  if(error) return (<span>error</span>)\n  const dummyList = JSON.parse(data.dummyUserList);\n  return(\n    console.log(data.dummyUserList),\n    <div>\n      <Button className={classes.button} variant=\"contained\">\n        Hello World!\n      </Button>\n    <Grid style={{ marginTop: \"20px\" }} container spacing={4}>    \n          {dummyList.map((user) => (\n            <Grid item xs={4} key={user.name}>\n              <Card className={classes.root2}>\n                <CardContent>\n                  <Typography\n                    className={classes.title}\n                    color=\"textPrimary\"\n                    gutterBottom\n                  >\n                    NAME - {user.name}  \n                    <br/>\n                    PHONE - {user.phone}\n                  </Typography>\n                  <Typography className={classes.pos} color=\"textSecondary\">\n                    ADDRESS - {user.address}\n                  </Typography>\n                  <Typography variant=\"body2\" component=\"p\">\n                    EMAIL - {user.email}\n                  </Typography>\n                </CardContent>\n              </Card>\n            </Grid>\n          ))}\n    </Grid>\n    </div>\n  )}\n\nexport default Component*/\n\n\n\n\n\n\n\n\n\nvar Component = function Component() {\n  _s();\n\n  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n    var _button;\n\n    return {\n      gridContainer: {\n        paddingLeft: \"20px\",\n        paddingRight: \"20px\"\n      },\n      title: {\n        fontSize: 18\n      },\n      pos: {\n        marginBottom: 12,\n        fontSize: 12\n      },\n      button: (_button = {\n        color: \"white\"\n      }, (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, theme.breakpoints.down(\"xs\"), {\n        '&:hover': {\n          background: \"red\"\n        },\n        backgroundColor: \"pink\"\n      }), (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, theme.breakpoints.between(\"sm\", \"md\"), {\n        '&:hover': {\n          minWidth: \"500px\",\n          minHeight: \"500px\",\n          zindex: \"-1px\"\n        },\n        backgroundColor: \"blue\"\n      }), (0,_home_sramirez_Documents_next_apollo_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_button, \"@media (min-width: 1280px)\", {\n        '&:hover': {\n          background: \"white\"\n        },\n        backgroundColor: \"purple\"\n      }), _button)\n    };\n  });\n  var classes = useStyles();\n  var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(query),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n    children: \"loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 175,\n    columnNumber: 24\n  }, _this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n    children: \"error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 176,\n    columnNumber: 21\n  }, _this);\n  var dummyList = JSON.parse(data.dummyUserList);\n  return console.log(data.dummyUserList), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {\n      className: classes.button,\n      variant: \"contained\",\n      children: \"Hello World!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n      style: {\n        marginTop: \"20px\"\n      },\n      className: classes.gridContainer,\n      container: true,\n      spacing: 4,\n      justify: \"center\",\n      children: dummyList.map(function (user) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n          item: true,\n          xs: 12,\n          sm: 6,\n          md: 4,\n          xl: 3,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__.default, {\n            className: classes.button,\n            variant: \"contained\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__.default, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                className: classes.title,\n                color: \"textPrimary\",\n                gutterBottom: true,\n                children: [\"NAME - \", user.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 195,\n                  columnNumber: 21\n                }, _this), \"PHONE - \", user.phone]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 189,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                className: classes.pos,\n                color: \"textSecondary\",\n                children: [\"ADDRESS - \", user.address]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 198,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n                variant: \"body2\",\n                component: \"p\",\n                children: [\"EMAIL - \", user.email]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 201,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 188,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 187,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 186,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 180,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Component, \"rKPW5MgR2KG+W2FztZhSquZIzHA=\", true, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];\n});\n\n_c = Component;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\nvar _c;\n\n$RefreshReg$(_c, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyTGlzdC5qcz8xZTk0Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImdyaWRDb250YWluZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJjb2xvciIsImJyZWFrcG9pbnRzIiwiZG93biIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZXR3ZWVuIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJ6aW5kZXgiLCJjbGFzc2VzIiwicXVlcnkiLCJncWwiLCJ1c2VRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJkdW1teUxpc3QiLCJKU09OIiwicGFyc2UiLCJkdW1teVVzZXJMaXN0IiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCIsIm1hcCIsInVzZXIiLCJuYW1lIiwicGhvbmUiLCJhZGRyZXNzIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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c0NvbnRlbnQiOlsiLyppbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbi8vaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuXG5cblxuY29uc3QgQ29tcG9uZW50ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBtaW5XaWR0aDogMjc1LFxuICAgICAgICB9LFxuICAgICAgICByb290Mjoge1xuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwdXJwbGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oXCJzbVwiLCBcIm1kXCIpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KVwiOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgIH0sXG4gICAgICAgIHBvczoge1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInB1cnBsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2VlbihcInNtXCIsIFwibWRcIildOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpXCI6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuXG5cbiAgY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGluZm8ge1xuICAgIGR1bW15VXNlckxpc3RcbiAgfVxuYFxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZVF1ZXJ5KHF1ZXJ5KTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiAoPHNwYW4+bG9hZGluZy4uLjwvc3Bhbj4pXG4gIGlmKGVycm9yKSByZXR1cm4gKDxzcGFuPmVycm9yPC9zcGFuPilcbiAgY29uc3QgZHVtbXlMaXN0ID0gSlNPTi5wYXJzZShkYXRhLmR1bW15VXNlckxpc3QpO1xuICByZXR1cm4oXG4gICAgY29uc29sZS5sb2coZGF0YS5kdW1teVVzZXJMaXN0KSxcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PVwiY29udGFpbmVkXCI+XG4gICAgICAgIEhlbGxvIFdvcmxkIVxuICAgICAgPC9CdXR0b24+XG4gICAgPEdyaWQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fSBjb250YWluZXIgc3BhY2luZz17NH0+ICAgIFxuICAgICAgICAgIHtkdW1teUxpc3QubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBrZXk9e3VzZXIubmFtZX0+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290Mn0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5BTUUgLSB7dXNlci5uYW1lfSAgXG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIFBIT05FIC0ge3VzZXIucGhvbmV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucG9zfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQUREUkVTUyAtIHt1c2VyLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAgICAgIEVNQUlMIC0ge3VzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50Ki9cblxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuXG5cblxuY29uc3QgQ29tcG9uZW50ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgICAgICBncmlkQ29udGFpbmVyOiB7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBweFwiLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIyMHB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgfSxcbiAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxuICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICB9LFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XG4gICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicGlua1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2VlbihcInNtXCIsIFwibWRcIildOiB7XG4gICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgbWluV2lkdGg6IFwiNTAwcHhcIixcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgIHppbmRleDogXCItMXB4XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpXCI6IHtcbiAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInB1cnBsZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG5cblxuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgaW5mbyB7XG4gICAgZHVtbXlVc2VyTGlzdFxuICB9XG5gXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkocXVlcnkpO1xuICBpZiAobG9hZGluZykgcmV0dXJuICg8c3Bhbj5sb2FkaW5nLi4uPC9zcGFuPilcbiAgaWYoZXJyb3IpIHJldHVybiAoPHNwYW4+ZXJyb3I8L3NwYW4+KVxuICBjb25zdCBkdW1teUxpc3QgPSBKU09OLnBhcnNlKGRhdGEuZHVtbXlVc2VyTGlzdCk7XG4gIHJldHVybihcbiAgICBjb25zb2xlLmxvZyhkYXRhLmR1bW15VXNlckxpc3QpLFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9XCJjb250YWluZWRcIj5cbiAgICAgICAgSGVsbG8gV29ybGQhXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxHcmlkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRDb250YWluZXJ9IGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5PVwiY2VudGVyXCI+ICAgIFxuICAgICAgICAgIHtkdW1teUxpc3QubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSB4bD17M30+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9XCJjb250YWluZWRcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTkFNRSAtIHt1c2VyLm5hbWV9ICBcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgUEhPTkUgLSB7dXNlci5waG9uZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBBRERSRVNTIC0ge3VzZXIuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgICAgICAgICAgRU1BSUwgLSB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserList.js\n");

/***/ })

});