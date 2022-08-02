"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_input___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/input/ */ \"./src/components/input/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), id = ref[0], setId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), clients = ref1[0], setClients = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref2[0], setName = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref3[0], setEmail = ref3[1];\n    var handleSubmitCreateClient = function(e) {\n        e.preventDefault();\n        if (!name && email) return;\n        setClients(clients.concat({\n            id: new Date().getMilliseconds().toString(),\n            name: name,\n            email: email\n        }));\n        setName(\"\");\n        setEmail(\"\");\n    };\n    var handleSubmitUpdateClient = function(e) {\n        e.preventDefault();\n        if (!name && email) return;\n        setClients(clients.concat({\n            id: new Date().getMilliseconds().toString(),\n            name: name,\n            email: email\n        }));\n        setName(\"\");\n        setEmail(\"\");\n    };\n    var handleDeleteClient = function(id) {\n        setClients(clients.filter(function(client) {\n            return client.id !== id;\n        }));\n    };\n    var handleChangeName = function(text) {\n        setName(text);\n    };\n    var handleChangeEmail = function(text) {\n        setEmail(text);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        margin: \"4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                color: \"white\",\n                justifyContent: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"black\",\n                        fontSize: \"2xl\",\n                        children: \"Lista de Clientes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        colorScheme: \"blue\",\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                marginY: \"1rem\",\n                as: \"form\",\n                onSubmit: handleSubmitCreateClient,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"name\",\n                        label: \"Nome\",\n                        value: name,\n                        type: \"text\",\n                        onChange: function(e) {\n                            return handleChangeName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"email\",\n                        label: \"Email\",\n                        value: email,\n                        type: \"email\",\n                        onChange: function(e) {\n                            return handleChangeEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        fontSize: \"sm\",\n                        alignSelf: \"flex-end\",\n                        colorScheme: \"blue\",\n                        type: \"submit\",\n                        children: \"Cadastro\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.TableContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                    variant: \"simple\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Thead, {\n                            bgColor: \"blue.500\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        textColor: \"white\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        textColor: \"white\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        textColor: \"white\",\n                                        children: \"Action\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tbody, {\n                            children: clients.map(function(client) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: client.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: client.email\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                                justifyContent: \"space-between\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        size: \"sm\",\n                                                        fontSize: \"smaller\",\n                                                        colorScheme: \"yellow\",\n                                                        children: \"Editar\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                                        lineNumber: 111,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        size: \"sm\",\n                                                        fontSize: \"smaller\",\n                                                        colorScheme: \"red\",\n                                                        onClick: function() {\n                                                            return handleDeleteClient(client.id);\n                                                        },\n                                                        children: \"Remover\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                                        lineNumber: 114,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, clients.email, true, {\n                                    fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"k6LqhWvGfdGkdhp4JGUN/7E5TSg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO2tEQUFDLE9BQUs7Ozs7OzRDQUFLO2tEQUNoQyw4REFBQzNDLGdEQUFFO3dDQUFDMkMsU0FBUyxFQUFDLE9BQU87a0RBQUMsUUFBTTs7Ozs7NENBQUs7Ozs7OztvQ0FDOUI7Ozs7O2dDQUNDO3NDQUNSLDhEQUFDN0MsbURBQUs7c0NBQ0hTLE9BQU8sQ0FBQ3FDLEdBQUcsQ0FBQyxTQUFDckIsTUFBTTtxREFDbEIsOERBQUN4QixnREFBRTs7c0RBQ0QsOERBQUNFLGdEQUFFO3NEQUFFc0IsTUFBTSxDQUFDZCxJQUFJOzs7OztpREFBTTtzREFDdEIsOERBQUNSLGdEQUFFO3NEQUFFc0IsTUFBTSxDQUFDWixLQUFLOzs7OztpREFBTTtzREFDdkIsOERBQUNWLGdEQUFFO3NEQUNELDRFQUFDUixrREFBSTtnREFBQ29DLGNBQWMsRUFBQyxlQUFlOztrRUFDbEMsOERBQUNyQyxvREFBTTt3REFBQ3FELElBQUksRUFBQyxJQUFJO3dEQUFDZixRQUFRLEVBQUMsU0FBUzt3REFBQ0MsV0FBVyxFQUFDLFFBQVE7a0VBQUMsUUFFMUQ7Ozs7OzZEQUFTO2tFQUNULDhEQUFDdkMsb0RBQU07d0RBQUNxRCxJQUFJLEVBQUMsSUFBSTt3REFBQ2YsUUFBUSxFQUFDLFNBQVM7d0RBQUNDLFdBQVcsRUFBQyxLQUFLO3dEQUFDZSxPQUFPLEVBQUU7bUVBQU16QixrQkFBa0IsQ0FBQ0UsTUFBTSxDQUFDbEIsRUFBRSxDQUFDO3lEQUFBO2tFQUFFLFNBRXJHOzs7Ozs2REFBUzs7Ozs7O3FEQUNKOzs7OztpREFDSjs7bUNBWkVFLE9BQU8sQ0FBQ0ksS0FBSzs7Ozt5Q0FhakI7NkJBQ04sQ0FBQzs7Ozs7Z0NBQ0k7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ087Ozs7OztZQUNiLENBQ047Q0FDSDtHQTNHdUJQLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgVlN0YWNrLFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgVGFibGUsXG4gIFRoZWFkLFxuICBUYm9keSxcbiAgVHIsXG4gIFRoLFxuICBUZCxcbiAgVGFibGVDb250YWluZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXQvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbY2xpZW50cywgc2V0Q2xpZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXRDcmVhdGVDbGllbnQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIW5hbWUgJiYgZW1haWwpIHJldHVybjtcblxuICAgIHNldENsaWVudHMoY2xpZW50cy5jb25jYXQoeyBpZDogbmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKS50b1N0cmluZygpLCBuYW1lLCBlbWFpbCB9KSk7XG5cbiAgICBzZXROYW1lKFwiXCIpO1xuICAgIHNldEVtYWlsKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFVwZGF0ZUNsaWVudCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbmFtZSAmJiBlbWFpbCkgcmV0dXJuO1xuXG4gICAgc2V0Q2xpZW50cyhjbGllbnRzLmNvbmNhdCh7IGlkOiBuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpLnRvU3RyaW5nKCksIG5hbWUsIGVtYWlsIH0pKTtcblxuICAgIHNldE5hbWUoXCJcIik7XG4gICAgc2V0RW1haWwoXCJcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpZW50ID0gKGlkKSA9PiB7XG4gICAgc2V0Q2xpZW50cyhjbGllbnRzLmZpbHRlcihjbGllbnQgPT4gY2xpZW50LmlkICE9PSBpZCkpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2VOYW1lID0gKHRleHQpID0+IHtcbiAgICBzZXROYW1lKHRleHQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUVtYWlsID0gKHRleHQpID0+IHtcbiAgICBzZXRFbWFpbCh0ZXh0KTtcbiAgfTsgIFxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW49XCI0XCI+XG4gICAgICA8RmxleCBjb2xvcj1cIndoaXRlXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiYmxhY2tcIiBmb250U2l6ZT1cIjJ4bFwiPlxuICAgICAgICAgIExpc3RhIGRlIENsaWVudGVzXG4gICAgICAgIDwvVGV4dD5cblxuICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPis8L0J1dHRvbj5cbiAgICAgIDwvRmxleD5cblxuICAgICAgPFZTdGFjayBtYXJnaW5ZPVwiMXJlbVwiIGFzPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRDcmVhdGVDbGllbnR9PlxuICAgICAgICA8SW5wdXRGb3JtXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIGxhYmVsPVwiTm9tZVwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dEZvcm1cbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlRW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZm9udFNpemU9XCJzbVwiXG4gICAgICAgICAgYWxpZ25TZWxmPVwiZmxleC1lbmRcIlxuICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmx1ZVwiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICBDYWRhc3Ryb1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvVlN0YWNrPlxuXG4gICAgICA8VGFibGVDb250YWluZXI+XG4gICAgICAgIDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCI+XG4gICAgICAgICAgPFRoZWFkIGJnQ29sb3I9XCJibHVlLjUwMFwiPlxuICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICA8VGggdGV4dENvbG9yPVwid2hpdGVcIj5OYW1lPC9UaD5cbiAgICAgICAgICAgICAgPFRoIHRleHRDb2xvcj1cIndoaXRlXCI+RW1haWw8L1RoPlxuICAgICAgICAgICAgICA8VGggdGV4dENvbG9yPVwid2hpdGVcIj5BY3Rpb248L1RoPlxuICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICA8L1RoZWFkPlxuICAgICAgICAgIDxUYm9keT5cbiAgICAgICAgICAgIHtjbGllbnRzLm1hcCgoY2xpZW50KSA9PiAoXG4gICAgICAgICAgICAgIDxUciBrZXk9e2NsaWVudHMuZW1haWx9PlxuICAgICAgICAgICAgICAgIDxUZD57Y2xpZW50Lm5hbWV9PC9UZD5cbiAgICAgICAgICAgICAgICA8VGQ+e2NsaWVudC5lbWFpbH08L1RkPlxuICAgICAgICAgICAgICAgIDxUZD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIGZvbnRTaXplPVwic21hbGxlclwiIGNvbG9yU2NoZW1lPVwieWVsbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgRWRpdGFyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIGZvbnRTaXplPVwic21hbGxlclwiIGNvbG9yU2NoZW1lPVwicmVkXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ2xpZW50KGNsaWVudC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZXJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVlN0YWNrIiwiQnV0dG9uIiwiRmxleCIsIlRleHQiLCJCb3giLCJUYWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUciIsIlRoIiwiVGQiLCJUYWJsZUNvbnRhaW5lciIsIklucHV0Rm9ybSIsIkhvbWUiLCJpZCIsInNldElkIiwiY2xpZW50cyIsInNldENsaWVudHMiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVTdWJtaXRDcmVhdGVDbGllbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25jYXQiLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwidG9TdHJpbmciLCJoYW5kbGVTdWJtaXRVcGRhdGVDbGllbnQiLCJoYW5kbGVEZWxldGVDbGllbnQiLCJmaWx0ZXIiLCJjbGllbnQiLCJoYW5kbGVDaGFuZ2VOYW1lIiwidGV4dCIsImhhbmRsZUNoYW5nZUVtYWlsIiwibWFyZ2luIiwiY29sb3IiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiY29sb3JTY2hlbWUiLCJtYXJnaW5ZIiwiYXMiLCJvblN1Ym1pdCIsImxhYmVsIiwidmFsdWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJhbGlnblNlbGYiLCJ2YXJpYW50IiwiYmdDb2xvciIsInRleHRDb2xvciIsIm1hcCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});